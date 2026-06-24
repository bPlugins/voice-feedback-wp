import { useState, useRef, useEffect, useCallback } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';

import '../../style.scss';
import toast, { Toaster } from 'react-hot-toast';
import WithoutDrawer from './WithoutDrawer';
import GlobalVoiceFeedback from './GlobalVoiceFeedback';

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

/**
 * Run an invisible Cloudflare Turnstile challenge on demand and resolve with a
 * fresh token. Tokens expire after ~300s, so this is called on submit click —
 * never on page load.
 *
 * @param {string} siteKey Turnstile site key.
 * @return {Promise<string>} Resolves with the verification token.
 */
const getTurnstileToken = ( siteKey ) =>
	new Promise( ( resolve, reject ) => {
		if ( ! window.turnstile || ! siteKey ) {
			reject( new Error( 'Turnstile unavailable' ) );
			return;
		}

		const container = document.createElement( 'div' );
		container.style.display = 'none';
		document.body.appendChild( container );

		let widgetId;
		const cleanup = () => {
			try {
				if ( widgetId !== undefined ) {
					window.turnstile.remove( widgetId );
				}
			} catch ( e ) {
				// Widget already removed — nothing to clean up.
			}
			container.remove();
		};

		try {
			widgetId = window.turnstile.render( container, {
				sitekey: siteKey,
				size: 'compact',
				appearance: 'interaction-only',
				callback: ( token ) => {
					resolve( token );
					cleanup();
				},
				'error-callback': () => {
					reject( new Error( 'Turnstile error' ) );
					cleanup();
				},
			} );
			window.turnstile.execute( widgetId );
		} catch ( e ) {
			cleanup();
			reject( e );
		}
	} );

const VoiceRecorder = ( { attributes, id } ) => {
	const [ isRecording, setIsRecording ] = useState( false );
	const [ isPlaying, setIsPlaying ] = useState( false );
	const [ isSending, setIsSending ] = useState( false );
	const [ hasRecording, setHasRecording ] = useState( false );
	const [ shouldInitRecording, setShouldInitRecording ] = useState( false );
	const [ isRecordingUIReady, setIsRecordingUIReady ] = useState( false );
	const [ recordingMode, setRecordingMode ] = useState( 'audio' );

	// Screen Recording Stuff
	const [ isPaused, setIsPaused ] = useState( false );
	const [ elapsedTime, setElapsedTime ] = useState( 0 );
	const [ timer, setTimer ] = useState( null );

	const { buttons, voiceFeedback } = attributes;

	const turnstileContainerRef = useRef( null );
	const [ turnstileToken, setTurnstileToken ] = useState( null );
	const widgetIdRef = useRef( null );

	// Preload the Turnstile script when CAPTCHA is enabled so a token can be
	// fetched the moment the visitor clicks send.
	useEffect( () => {
		if ( ! window.voiceRecorder?.captcha_enabled ) {
			return;
		}
		if ( document.querySelector( `script[src="${ TURNSTILE_SRC }"]` ) ) {
			return;
		}
		const script = document.createElement( 'script' );
		script.src = TURNSTILE_SRC;
		script.async = true;
		document.head.appendChild( script );
	}, [] );

	// Initialize and render Turnstile widget inline if captcha_mode is visible
	useEffect( () => {
		if (
			! window.voiceRecorder?.captcha_enabled ||
			window.voiceRecorder?.captcha_mode !== 'visible'
		) {
			return;
		}

		if ( ! hasRecording ) {
			if ( widgetIdRef.current !== null && window.turnstile ) {
				try {
					window.turnstile.remove( widgetIdRef.current );
				} catch ( e ) {
					// Ignore widget removal error
				}
				widgetIdRef.current = null;
			}
			setTurnstileToken( null );
			return;
		}

		let checkInterval = null;
		const initWidget = () => {
			if ( window.turnstile && turnstileContainerRef.current ) {
				if ( widgetIdRef.current === null ) {
					try {
						widgetIdRef.current = window.turnstile.render(
							turnstileContainerRef.current,
							{
								sitekey: window.voiceRecorder?.captcha_site_key,
								size: 'normal',
								callback: ( token ) => {
									setTurnstileToken( token );
								},
								'error-callback': () => {
									setTurnstileToken( null );
								},
							}
						);
					} catch ( e ) {
						// Render error
					}
				}
				if ( checkInterval ) clearInterval( checkInterval );
			}
		};

		if ( window.turnstile ) {
			initWidget();
		} else {
			checkInterval = setInterval( () => {
				if ( window.turnstile ) {
					initWidget();
				}
			}, 100 );
		}

		return () => {
			if ( checkInterval ) clearInterval( checkInterval );
			if ( widgetIdRef.current !== null && window.turnstile ) {
				try {
					window.turnstile.remove( widgetIdRef.current );
				} catch ( e ) {
					// Ignore widget removal error
				}
				widgetIdRef.current = null;
			}
			setTurnstileToken( null );
		};
	}, [ hasRecording ] );

	const recorderRef = useRef( null );
	const streamRef = useRef( null );
	const waveSurferRef = useRef( null );
	const waveSurferPlaybackRef = useRef( null );
	const audioRef = useRef( new Audio() );
	const audioBlobRef = useRef( null );
	const audioURLRef = useRef( null );

	const screenRecorderRef = useRef( null );
	const screenStreamRef = useRef( null );
	const videoBlobRef = useRef( null );
	const videoUrlRef = useRef( null );

	const resetPlaybackWaveform = useCallback( () => {
		if ( waveSurferPlaybackRef.current ) {
			waveSurferPlaybackRef.current.destroy();
			waveSurferPlaybackRef.current = null;
		}

		waveSurferPlaybackRef.current = WaveSurfer.create( {
			container: `#${ id } .waveform-playback`,
			waveColor: '#ccc',
			progressColor: buttons.normal.bgColor,
			height: 60,
			responsive: true,
			backend: 'MediaElement',
		} );
	}, [ buttons.normal.bgColor, id ] );

	const startRecording = useCallback(
		async ( mode = recordingMode ) => {
			const usingScreen = mode === 'screen';
			if ( usingScreen ) {
				try {
					const screenStream =
						await navigator.mediaDevices.getDisplayMedia( {
							video: true,
							audio: true,
						} );

					const micStream = await navigator.mediaDevices.getUserMedia(
						{
							audio: {
								echoCancellation: true,
								noiseSuppression: true,
								autoGainControl: true,
							},
						}
					);

					const combinedStream = new MediaStream( [
						...screenStream.getTracks(),
						...micStream.getTracks(),
					] );

					screenStreamRef.current = combinedStream;

					const preferredTypes = [
						'video/webm;codecs=vp9,opus',
						'video/webm;codecs=vp8,opus',
						'video/webm',
					];
					const chosenType = preferredTypes.find( ( t ) =>
						MediaRecorder.isTypeSupported?.( t )
					);
					const mediaRecorder = new MediaRecorder(
						combinedStream,
						chosenType ? { mimeType: chosenType } : undefined
					);

					screenRecorderRef.current = mediaRecorder;
					const chunks = [];

					mediaRecorder.ondataavailable = ( e ) => {
						if ( e.data.size > 0 ) chunks.push( e.data );
					};

					mediaRecorder.onstop = () => {
						const type = chosenType || 'video/webm';
						const blob = new Blob( chunks, { type } );
						const url = URL.createObjectURL( blob );
						videoBlobRef.current = blob;
						videoUrlRef.current = url;
						setHasRecording( true );
						setIsRecording( false );
					};

					mediaRecorder.start();
					setIsRecording( true );
					setHasRecording( false );
				} catch ( err ) {
					toast.error( "Couldn't start screen recording!" );
				}
			} else {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
				setHasRecording( false );
				setIsRecordingUIReady( true );
				setShouldInitRecording( true );
			}
		},
		[ recordingMode ]
	);

	const stopRecording = useCallback(
		( mode = recordingMode ) => {
			const usingScreen = mode === 'screen';
			if ( usingScreen ) {
				if ( screenRecorderRef.current?.state === 'recording' ) {
					screenRecorderRef.current.stop();
				}
				if ( screenStreamRef.current ) {
					screenStreamRef.current
						.getTracks()
						.forEach( ( t ) => t.stop() );
				}
			} else {
				if ( recorderRef.current?.isRecording() ) {
					recorderRef.current.stopRecording();
				}
			}
		},
		[ recordingMode ]
	);

	const pauseScreenRecording = useCallback( () => {
		if ( screenRecorderRef.current?.state === 'recording' ) {
			screenRecorderRef.current.pause();
		}
	}, [] );

	const resumeScreenRecording = useCallback( () => {
		if ( screenRecorderRef.current?.state === 'paused' ) {
			screenRecorderRef.current.resume();
		}
	}, [] );

	const handlePlay = useCallback( () => {
		if ( ! isPlaying ) {
			audioRef.current.play();
			waveSurferPlaybackRef.current?.play();
		} else {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
			waveSurferPlaybackRef.current?.pause();
		}
		setIsPlaying( ! isPlaying );
	}, [ isPlaying ] );

	const handleClear = useCallback( () => {
		if ( recordingMode === 'screen' ) {
			if ( videoUrlRef.current ) {
				URL.revokeObjectURL( videoUrlRef.current );
			}
			videoBlobRef.current = null;
			videoUrlRef.current = null;
			if ( screenStreamRef.current ) {
				screenStreamRef.current
					.getTracks()
					.forEach( ( track ) => track.stop() );
			}
		} else {
			if ( audioURLRef.current ) {
				URL.revokeObjectURL( audioURLRef.current );
			}
			audioBlobRef.current = null;
			recorderRef.current = null;
			audioRef.current.src = '';
			if ( waveSurferRef.current ) {
				waveSurferRef.current.destroy();
				waveSurferRef.current = null;
			}
			if ( waveSurferPlaybackRef.current ) {
				waveSurferPlaybackRef.current.destroy();
				waveSurferPlaybackRef.current = null;
			}
		}

		setIsPlaying( false );
		setHasRecording( false );
		setIsRecordingUIReady( false );
	}, [ recordingMode ] );

	const [ showEmailGate, setShowEmailGate ] = useState( false );

	const handleSend = useCallback(
		async ( userName = '', userEmail = '' ) => {
			let blobToSend = null;
			let fileName = '';

			if ( recordingMode === 'screen' ) {
				if ( ! videoBlobRef.current ) {
					alert( 'No video to send' );
					return;
				}
				blobToSend = videoBlobRef.current;
				fileName = `screen-${ Date.now() }.webm`;
			} else {
				if ( ! audioBlobRef.current ) {
					alert( 'No audio to send' );
					return;
				}
				blobToSend = audioBlobRef.current;
				fileName = `voice-${ Date.now() }.webm`;
			}

			setIsSending( true );
			const sendButton = document.querySelector( `#${ id } .sendBtn` );
			const originalText = sendButton?.textContent;
			if ( sendButton ) {
				sendButton.disabled = true;
				sendButton.textContent = 'Sending...';
			}

			try {
				const file = new File( [ blobToSend ], fileName, {
					type: blobToSend.type,
				} );
				const formData = new FormData();
				formData.append( 'action', 'save_audio' );
				formData.append( 'audio', file );
				formData.append( 'nonce', window.voiceRecorder?.nonce );
				formData.append(
					'sourcePage',
					window.voiceRecorder?.source_page
				);
				formData.append(
					'sourceUrl',
					window.voiceRecorder?.source_url
				);
				if ( userName ) {
					formData.append( 'userName', userName );
				}
				if ( userEmail ) {
					formData.append( 'userEmail', userEmail );
				}

				// Honeypot — must always be sent empty. Real users never fill it.
				const hpField = window.voiceRecorder?.hp_field_name;
				if ( hpField ) {
					formData.append( hpField, '' );
				}

				// Cloudflare Turnstile — fetch a fresh token on submit.
				if (window.voiceRecorder?.captcha_enabled) {
					try {
						let token = turnstileToken;
						if (window.voiceRecorder?.captcha_mode !== 'visible') {
							token = await getTurnstileToken(
								window.voiceRecorder?.captcha_site_key
							);
						} else if (!token) {
							throw new Error('Please complete the CAPTCHA verification first.');
						}
						formData.append('cf_turnstile_token', token);
					} catch (e) {
						toast.error(e?.message || 'CAPTCHA verification failed.');
						if (sendButton) {
							sendButton.textContent = originalText;
							sendButton.disabled = false;
						}
						setIsSending(false);
						return;
					}
				}
				const response = await fetch( window.voiceRecorder?.ajaxUrl, {
					method: 'POST',
					body: formData,
				} );

				if ( ! response.ok ) {
					let message = 'Failed to send!';
					try {
						const result = await response.json();
						if ( result?.data ) {
							message =
								typeof result.data === 'string'
									? result.data
									: result.data?.message || message;
						}
					} catch ( e ) {
						// Non-JSON error response — fall back to default message.
					}
					throw new Error( message );
				}

				if ( sendButton ) sendButton.textContent = '✅ Sent';
				toast.success( 'Successfully Sent!' );
				handleClear();
			} catch ( error ) {
				toast.error( error?.message || 'Failed to send!' );
				if ( sendButton ) sendButton.textContent = originalText;
			} finally {
				setTimeout( () => {
					if ( sendButton ) {
						sendButton.textContent = originalText;
						sendButton.disabled = false;
					}
					setIsSending( false );
				}, 2000 );
			}
		},
		[ recordingMode, handleClear, id, turnstileToken ]
	);

	const handleSendClick = useCallback( () => {
		const isEmailGateActive = window.voiceRecorder?.ask_name_email;
		if ( isEmailGateActive ) {
			setShowEmailGate( true );
		} else {
			handleSend();
		}
	}, [ handleSend ] );

	const handleEmailGateSubmit = useCallback(
		async ( name, email ) => {
			await handleSend( name, email );
			setShowEmailGate( false );
		},
		[ handleSend ]
	);

	useEffect( () => {
		if ( hasRecording && audioURLRef.current ) {
			const container = document.querySelector(
				`#${ id } .waveform-playback`
			);
			if ( ! container ) return;

			resetPlaybackWaveform();
			waveSurferPlaybackRef.current.load( audioURLRef.current );
		}
	}, [ hasRecording, resetPlaybackWaveform, id ] );

	useEffect( () => {
		if ( ! shouldInitRecording ) return;

		const container = document.querySelector( `#${ id } .waveform-record` );
		if ( ! container ) return;

		const initRecording = async () => {
			try {
				if ( waveSurferRef.current ) {
					waveSurferRef.current.destroy();
					waveSurferRef.current = null;
				}

				waveSurferRef.current = WaveSurfer.create( {
					container: `#${ id } .waveform-record`,
					waveColor: buttons.normal.bgColor,
					progressColor: buttons.normal.bgColor,
					height: 60,
					responsive: true,
				} );

				const record = waveSurferRef.current.registerPlugin(
					RecordPlugin.create( {
						renderRecordedAudio: false,
						scrollingWaveform: true,
						continuousWaveform: false,
					} )
				);

				recorderRef.current = record;

				record.on( 'record-end', ( blob ) => {
					const audioURL = URL.createObjectURL( blob );
					audioRef.current.src = audioURL;
					audioBlobRef.current = blob;
					audioURLRef.current = audioURL;

					setHasRecording( true );
					setIsRecording( false );
				} );

				await record.startRecording();
				setIsRecording( true );
			} catch ( err ) {
				toast.error( "Couldn't start Recording!" );
				setIsRecordingUIReady( false );
			} finally {
				setShouldInitRecording( false );
			}
		};

		initRecording();
	}, [ shouldInitRecording, buttons.normal.bgColor, id ] );

	useEffect( () => {
		const handleAudioEnd = () => {
			setIsPlaying( false );
			waveSurferPlaybackRef.current?.stop();
		};

		audioRef.current.addEventListener( 'ended', handleAudioEnd );
		return () =>
			audioRef.current.removeEventListener( 'ended', handleAudioEnd );
	}, [] );

	useEffect( () => {
		return () => {
			if ( waveSurferRef.current ) waveSurferRef.current.destroy();
			if ( waveSurferPlaybackRef.current )
				waveSurferPlaybackRef.current.destroy();
			if ( streamRef.current )
				streamRef.current
					.getTracks()
					.forEach( ( track ) => track.stop() );
		};
	}, [] );

	// Screen Recording Stuff

	// Timer effect
	useEffect( () => {
		if ( isRecording && ! isPaused ) {
			const interval = setInterval( () => {
				setElapsedTime( ( prev ) => prev + 1 );
			}, 1000 );
			setTimer( interval );
			return () => clearInterval( interval );
		}
		if ( ! isRecording || isPaused ) {
			if ( timer ) clearInterval( timer );
		}
	}, [ isRecording, isPaused ] );

	const formatTime = ( seconds ) => {
		const mins = Math.floor( seconds / 60 )
			.toString()
			.padStart( 2, '0' );
		const secs = ( seconds % 60 ).toString().padStart( 2, '0' );
		return `${ mins }:${ secs }`;
	};

	const pauseRecording = () => {
		setIsPaused( true );
		pauseScreenRecording?.();
	};

	const resumeRecording = () => {
		setIsPaused( false );
		resumeScreenRecording?.();
	};

	const cancelRecording = () => {
		handleClear();
		setElapsedTime( 0 );
	};

	return (
		<>
			<Toaster position="top-center" reverseOrder={ true } />
			{ voiceFeedback?.applyGlobally ? (
				<GlobalVoiceFeedback
					attributes={ attributes }
					isRecording={ isRecording }
					isRecordingUIReady={ isRecordingUIReady }
					hasRecording={ hasRecording }
					isPlaying={ isPlaying }
					isSending={ isSending }
					startRecording={ startRecording }
					stopRecording={ stopRecording }
					handlePlay={ handlePlay }
					handleClear={ handleClear }
					handleSend={ handleSendClick }
					showEmailGate={ showEmailGate }
					setShowEmailGate={ setShowEmailGate }
					handleEmailGateSubmit={ handleEmailGateSubmit }
					videoPreviewURL={ videoUrlRef.current || '' }
					setRecordingMode={ setRecordingMode }
					recordingMode={ recordingMode }
					setElapsedTime={ setElapsedTime }
					setIsPaused={ setIsPaused }
					turnstileContainerRef={ turnstileContainerRef }
				/>
			) : (
				<WithoutDrawer
					attributes={ attributes }
					isRecording={ isRecording }
					isRecordingUIReady={ isRecordingUIReady }
					hasRecording={ hasRecording }
					isPlaying={ isPlaying }
					isSending={ isSending }
					startRecording={ startRecording }
					stopRecording={ stopRecording }
					handlePlay={ handlePlay }
					handleClear={ handleClear }
					handleSend={ handleSendClick }
					showEmailGate={ showEmailGate }
					setShowEmailGate={ setShowEmailGate }
					handleEmailGateSubmit={ handleEmailGateSubmit }
					videoPreviewURL={ videoUrlRef.current || '' }
					setRecordingMode={ setRecordingMode }
					recordingMode={ recordingMode }
					setElapsedTime={ setElapsedTime }
					setIsPaused={ setIsPaused }
					turnstileContainerRef={ turnstileContainerRef }
				/>
			) }

			{ /* Screen Recording UI */ }
			{ recordingMode === 'screen' && isRecording && (
				<div
					style={ {
						position: 'fixed',
						bottom: '20px',
						left: '215px',
						transform: 'translateX(-50%)',
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '30px',
						display: 'flex',
						gap: '10px',
						alignItems: 'center',
						zIndex: 1000,
					} }
				>
					<span style={ { marginRight: '10px' } }>
						{ formatTime( elapsedTime ) }
					</span>

					{ ! isPaused ? (
						<button
							onClick={ pauseRecording }
							style={ {
								backgroundColor: '#FF9800',
								border: 'none',
								padding: '8px 16px',
								borderRadius: '20px',
								cursor: 'pointer',
								color: 'white',
							} }
						>
							Pause
						</button>
					) : (
						<button
							onClick={ resumeRecording }
							style={ {
								backgroundColor: '#4CAF50',
								border: 'none',
								padding: '8px 16px',
								borderRadius: '20px',
								cursor: 'pointer',
								color: 'white',
							} }
						>
							Resume
						</button>
					) }
					<button
						onClick={ () => stopRecording( 'screen' ) }
						style={ {
							backgroundColor: '#f44336',
							border: 'none',
							padding: '8px 16px',
							borderRadius: '20px',
							cursor: 'pointer',
							color: 'white',
						} }
					>
						Stop
					</button>
					<button
						onClick={ cancelRecording }
						style={ {
							backgroundColor: '#9E9E9E',
							border: 'none',
							padding: '8px 16px',
							borderRadius: '20px',
							cursor: 'pointer',
							color: 'white',
						} }
					>
						Cancel
					</button>
				</div>
			) }
		</>
	);
};

export default VoiceRecorder;
