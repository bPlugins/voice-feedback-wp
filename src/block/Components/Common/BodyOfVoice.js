import React, { useEffect } from 'react';
import EmailGate from './EmailGate';

const BodyOfVoice = ( props ) => {
	const {
		hasRecording,
		isRecordingUIReady,
		isRecording,
		handleClear,
		handlePlay,
		handleSend,
		startRecording,
		stopRecording,
		isPlaying,
		isSending,
		attributes,
		videoPreviewURL,
		setRecordingMode,
		recordingMode,
		setElapsedTime,
		setIsPaused,
	} = props;

	const { voiceFeedback, recordingTabs } = attributes;
	const { audioTab, screenTab } = recordingTabs;

	const {
		startRecordingText,
		startScreenRecordingText = 'Start Screen Recording',
		isScreenRecord = false,
	} = voiceFeedback;

	useEffect( () => {
		const handleBeforeUnload = ( e ) => {
			if ( isRecording ) {
				e.preventDefault();
				e.returnValue =
					'You have a recording in progress. Are you sure you want to leave?';
				return 'You have a recording in progress. Are you sure you want to leave?';
			}
		};

		window.addEventListener( 'beforeunload', handleBeforeUnload );
		return () => {
			window.removeEventListener( 'beforeunload', handleBeforeUnload );
		};
	}, [ isRecording ] );

	if ( props.showEmailGate ) {
		return (
			<EmailGate
				onSubmit={ props.handleEmailGateSubmit }
				onCancel={ () => props.setShowEmailGate( false ) }
				isSending={ isSending }
				buttons={ props.attributes?.buttons }
			/>
		);
	}

	const handleStartRecording = ( mode ) => {
		setElapsedTime( 0 );
		setIsPaused( false );
		startRecording( mode );
	};

	// --- AUDIO RECORDER UI ---
	const renderAudioRecorder = () => (
		<>
			{ isRecordingUIReady && ! hasRecording && (
				<div className="waveform-record" />
			) }
			{ hasRecording && <div className="waveform-playback" /> }

			{ window.voiceRecorder?.captcha_enabled &&
				window.voiceRecorder?.captcha_mode === 'visible' &&
				hasRecording && (
					<div
						ref={ props.turnstileContainerRef }
						className="bplvf-turnstile-inline"
						style={ {
							marginTop: '12px',
							marginBottom: '16px',
							display: 'flex',
							justifyContent: 'center',
						} }
					/>
				) }

			<div className="feedback-buttons">
				{ ! isRecording && ! hasRecording && (
					<button
						onClick={ () => handleStartRecording( 'audio' ) }
						className="startBtn"
					>
						{ recordingTabs?.buttons?.isDisplayIcon && (
							<span
								dangerouslySetInnerHTML={ {
									__html: audioTab?.icon,
								} }
							/>
						) }
						<span>{ startRecordingText }</span>
					</button>
				) }

				{ isRecording && (
					<button onClick={ () => stopRecording( 'audio' ) }>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 448 512"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
						</svg>
						<span>Stop</span>
					</button>
				) }

				{ hasRecording && (
					<>
						<button onClick={ handlePlay }>
							{ isPlaying ? (
								<>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
									</svg>
									<span>Stop</span>
								</>
							) : (
								<>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
									</svg>
									<span>Play</span>
								</>
							) }
						</button>
						<button
							className="sendBtn"
							onClick={ handleSend }
							disabled={ isSending }
						>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 512 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path>
							</svg>
							<span>Send</span>
						</button>
						<button onClick={ handleClear }>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								height="1em"
								width="1em"
								viewBox="0 0 1024 1024"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
							</svg>
							<span>Clear</span>
						</button>
						<button onClick={ () => startRecording( 'audio' ) }>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 24 24"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fill="none" d="M24 24H0V0h24v24z"></path>
								<circle cx="12" cy="12" r="8"></circle>
							</svg>
							<span>Record Again</span>
						</button>
					</>
				) }
			</div>
		</>
	);

	// --- SCREEN RECORDER UI ---
	const renderScreenRecorder = () => (
		<div className="feedback-buttons">
			{ ! isRecording && ! hasRecording && (
				<button
					onClick={ () => {
						handleStartRecording( 'screen' );
					} }
					className="startBtn"
				>
					{ recordingTabs?.buttons?.isDisplayIcon && (
						<span
							dangerouslySetInnerHTML={ {
								__html: screenTab?.icon,
							} }
						/>
					) }
					<span>{ startScreenRecordingText }</span>
				</button>
			) }

			{ hasRecording && (
				<div
					style={ {
						display: 'flex',
						width: '100%',
						flexDirection: 'column',
						alignItems: 'center',
					} }
				>
					<video
						src={ videoPreviewURL || '' }
						controls
						style={ {
							maxWidth: '80%',
							maxHeight: '300px',
							borderRadius: '10px',
							boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
						} }
					/>
				</div>
			) }
			{ hasRecording && (
				<>
					{ window.voiceRecorder?.captcha_enabled &&
						window.voiceRecorder?.captcha_mode === 'visible' && (
							<div
								ref={ props.turnstileContainerRef }
								className="bplvf-turnstile-inline"
								style={ {
									width: '100%',
									marginTop: '12px',
									marginBottom: '16px',
									display: 'flex',
									justifyContent: 'center',
								} }
							/>
						) }
					<button
						className="sendBtn"
						onClick={ handleSend }
						disabled={ isSending }
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 512 512"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path>
						</svg>
						<span>Send</span>
					</button>
					<button onClick={ handleClear }>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							height="1em"
							width="1em"
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
						</svg>
						<span>Clear</span>
					</button>
					<button onClick={ () => startRecording( 'screen' ) }>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M24 24H0V0h24v24z"></path>
							<circle cx="12" cy="12" r="8"></circle>
						</svg>
						<span>Record Again</span>
					</button>
				</>
			) }
		</div>
	);

	if ( ! isScreenRecord ) {
		return renderAudioRecorder();
	}

	return (
		<div>
			<div
				className="recording-mode-toggle"
				style={ { marginBottom: '20px' } }
			>
				<button
					onClick={ () => {
						if ( hasRecording ) {
							handleClear();
							setRecordingMode( 'audio' );
						} else {
							setRecordingMode( 'audio' );
						}
					} }
					className={ `audioBtn ${
						recordingMode === 'audio' ? 'active' : ''
					}` }
				>
					{ recordingTabs?.buttons?.isDisplayIcon && (
						<span
							dangerouslySetInnerHTML={ {
								__html: audioTab?.icon,
							} }
						/>
					) }
					{ recordingTabs?.buttons?.isDisplayText && (
						<h3>{ audioTab?.text }</h3>
					) }
				</button>
				<button
					onClick={ () => setRecordingMode( 'screen' ) }
					className={ `screenBtn ${
						recordingMode === 'screen' ? 'active' : ''
					}` }
				>
					{ recordingTabs?.buttons?.isDisplayIcon && (
						<span
							dangerouslySetInnerHTML={ {
								__html: screenTab?.icon,
							} }
						/>
					) }
					{ recordingTabs?.buttons?.isDisplayText && (
						<h3>{ screenTab?.text }</h3>
					) }
				</button>
			</div>

			{ recordingMode === 'audio'
				? renderAudioRecorder()
				: renderScreenRecorder() }
		</div>
	);
};

export default BodyOfVoice;
