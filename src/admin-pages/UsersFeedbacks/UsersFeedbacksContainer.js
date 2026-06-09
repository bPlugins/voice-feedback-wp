import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';
import './UsersFeedbacks.scss';
import toast, { Toaster } from 'react-hot-toast';
import {
	Delete,
	DownloadIcon,
	GoToLink,
	PauseIcon,
	PlayIcon,
} from '../Utils/icons';
import DeleteModal from '../Components/Shared/DeleteModal/DeleteModal';
import FloatingBulkActions from '../Components/FloatingBulkAction/FloatingBulkActions';

const UsersFeedbacksContainer = ( { user, adminUrl } ) => {
	const [ userFeedbacks, setUserFeedbacks ] = useState( [] );
	const [ playingId, setPlayingId ] = useState( null );
	const [ progress, setProgress ] = useState( 0 );
	const [ showDeleteConfirm, setShowDeleteConfirm ] = useState( false );
	const [ filter, setFilter ] = useState( 'all' );
	const [ selectedItems, setSelectedItems ] = useState( new Set() );
	const [ deletingIds, setDeletingIds ] = useState( [] );
	const [ isBulkDelete, setIsBulkDelete ] = useState( false );
	const [ videoUrl, setVideoUrl ] = useState( null );

	const audioRef = useRef( null );

	useEffect( () => {
		if ( window?.bplvfUsersFeedback?.feedbacks ) {
			setUserFeedbacks( window.bplvfUsersFeedback?.feedbacks );
		}
	}, [] );

	const handleResolveToggle = ( id ) => {
		const updatedFeedbacks = userFeedbacks.map( ( item ) =>
			item.id === id ? { ...item, resolved: ! item.resolved } : item
		);
		setUserFeedbacks( updatedFeedbacks );

		const payload = new FormData();
		payload.append( 'action', 'bplvf_toggle_resolved' );
		payload.append( 'nonce', window.bplvfUsersFeedback.nonce );
		payload.append( 'id', id );

		try {
			fetch( window.bplvfUsersFeedback.ajaxUrl, {
				method: 'POST',
				body: payload,
			} )
				.then( ( res ) => res.json() )
				.then( ( res ) => {
					if ( res.success ) {
						toast.success( 'Successfully Updated!' );
					}
				} );
		} catch ( err ) {
			alert( `Failed to resolve: ${ err.message }` );
		}
	};

	const handleDelete = ( id ) => {
		setDeletingIds( [ id ] );
		setIsBulkDelete( false );
		setShowDeleteConfirm( true );
	};

	const handleBulkDelete = () => {
		if ( selectedItems.size === 0 ) return;
		setDeletingIds( Array.from( selectedItems ) );
		setIsBulkDelete( true );
		setShowDeleteConfirm( true );
	};

	const confirmBulkDelete = async () => {
		if ( deletingIds.length === 0 ) return;

		for ( const id of deletingIds ) {
			const payload = new FormData();
			payload.append( 'action', 'bplvf_delete_user_feedback' );
			payload.append( 'nonce', window.bplvfUsersFeedback.nonce );
			payload.append( 'id', id );

			try {
				fetch( window.bplvfUsersFeedback.ajaxUrl, {
					method: 'POST',
					body: payload,
				} )
					.then( ( res ) => res.json() )
					.then( ( res ) => {
						if ( res.success ) {
							toast.success( 'Feedback Delete Successfully!' );

							setUserFeedbacks( ( prev ) =>
								prev.filter(
									( feedback ) => feedback.id !== id
								)
							);
						}
					} );
			} catch ( err ) {
				alert( `Failed to Delete: ${ err.message }` );
			}
		}
		// Refresh list and cleanup
		setUserFeedbacks( window.bplvfUsersFeedback?.feedbacks );
		if ( isBulkDelete ) {
			setSelectedItems( new Set() );
		}
		setDeletingIds( [] );
		setIsBulkDelete( false );
		setShowDeleteConfirm( false );
	};

	const handlePlayAudio = ( audioUrl, id ) => {
		if ( audioRef.current && playingId === id ) {
			audioRef.current.pause();
			audioRef.current = null;
			setPlayingId( null );
			setProgress( 0 );
			return;
		}

		if ( audioRef.current ) {
			audioRef.current.pause();
		}

		const newAudio = new Audio( audioUrl );
		audioRef.current = newAudio;

		newAudio.play();
		setPlayingId( id );

		// Start interval to update progress
		const interval = setInterval( () => {
			if ( newAudio.duration > 0 ) {
				setProgress( newAudio.currentTime / newAudio.duration );
			}
		}, 100 );

		newAudio.addEventListener( 'ended', () => {
			clearInterval( interval );
			setProgress( 1 );
			setPlayingId( null );
			audioRef.current = null;
		} );

		newAudio.addEventListener( 'pause', () => {
			clearInterval( interval );
		} );
	};

	const filteredFeedbacks = userFeedbacks.filter( ( feedback ) => {
		if ( filter === 'resolved' ) return feedback.resolved;
		if ( filter === 'non-resolved' ) return ! feedback.resolved;
		return true; // for "all"
	} );

	const toggleSelection = ( id ) => {
		const newSelected = new Set( selectedItems );
		if ( newSelected.has( id ) ) {
			newSelected.delete( id );
		} else {
			newSelected.add( id );
		}
		setSelectedItems( newSelected );
	};

	const toggleSelectAll = () => {
		const allIds = filteredFeedbacks.map( ( f ) => f.id );
		if ( selectedItems.size === allIds.length ) {
			setSelectedItems( new Set() );
		} else {
			setSelectedItems( new Set( allIds ) );
		}
	};

	const clearSelection = () => {
		setSelectedItems( new Set() );
	};

	useEffect( () => {
		return () => {
			if ( audioRef.current ) {
				audioRef.current.pause();
			}
		};
	}, [] );

	const downloadAudioFile = ( url, filename ) => {
		const a = document.createElement( 'a' );
		a.href = url;
		a.setAttribute( 'download', filename );
		a.setAttribute( 'target', '_blank' );
		document.body.appendChild( a );
		a.click();
		a.remove();
	};

	const isVideoUrl = ( url ) => {
		return url.toLowerCase().includes( 'screen' );
	};

	const isAudioUrl = ( url ) => {
		return url.toLowerCase().includes( 'voice' );
	};

	return (
		<>
			<Toaster position="bottom-center" />

			<Header>
				<div
					style={ {
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					} }
				>
					{ /* <span style={{ fontSize: "18px", cursor: "pointer" }}>🔔</span> */ }
					<img
						src={ user }
						alt="User"
						style={ {
							borderRadius: '50%',
							width: '32px',
							height: '32px',
						} }
					/>
				</div>
			</Header>

			<div className="vfd-content">
				<div className="bplvf-emails-page-header">
					<h2>All Feedback</h2>
					<p>
						Here you are getting resolve and non-resolve both
						feedbacks.
					</p>
				</div>

				<div className="vfd-table-container">
					<div className="vfd-filters-wrapper">
						<button
							onClick={ () => setFilter( 'all' ) }
							className={ `vfd-filter-btn ${ filter === 'all' ? 'active' : '' }` }
						>
							All
						</button>
						<button
							onClick={ () => setFilter( 'resolved' ) }
							className={ `vfd-filter-btn ${ filter === 'resolved' ? 'active' : '' }` }
						>
							Resolved
						</button>
						<button
							onClick={ () => setFilter( 'non-resolved' ) }
							className={ `vfd-filter-btn ${ filter === 'non-resolved' ? 'active' : '' }` }
						>
							Not Resolved
						</button>
					</div>

					{ filteredFeedbacks && filteredFeedbacks.length > 0 ? (
						<table className="vfd-table">
							<thead>
								<tr>
									<th>
										<input
											type="checkbox"
											checked={
												selectedItems.size ===
													filteredFeedbacks.length &&
												filteredFeedbacks.length > 0
											}
											onChange={ toggleSelectAll }
											className="vfd-checkbox"
										/>
									</th>
									<th>ID</th>
									<th>Source Page</th>
									<th>Page URL</th>
									<th>User</th>
									<th>User Feedback</th>
									<th>Resolved</th>
									<th>Created At</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ filteredFeedbacks.map( ( feedback ) => (
									<tr key={ feedback.id } className={ feedback.unread ? 'vfd-row-unread' : '' }>
										<td>
											<input
												type="checkbox"
												checked={ selectedItems.has(
													feedback.id
												) }
												onChange={ () =>
													toggleSelection(
														feedback.id
													)
												}
												className="vfd-checkbox"
											/>
										</td>
										<td>{ feedback.id ?? 'N/A' }</td>
										<td>
											{ feedback.source_page_title ??
												'Unknown' }
										</td>
										<td>
											<div className="source-page-url">
												<span className="url-text">
													{ feedback.source_page_url
														? feedback
																.source_page_url
																.length > 30
															? feedback.source_page_url.substring(
																	0,
																	30
															  ) + '...'
															: feedback.source_page_url
														: 'Not found' }
												</span>
												{ feedback.source_page_url && (
													<a
														href={
															feedback.source_page_url
														}
														target="_blank"
														rel="noopener noreferrer"
														className="goto-link"
													>
														<GoToLink />
													</a>
												) }
											</div>
										</td>
										<td>
											{ feedback.user_name || feedback.user_email ? (
												<div style={ { display: 'flex', flexDirection: 'column', gap: '2px' } }>
													<span style={ { fontWeight: '500' } }>{ feedback.user_name || 'Anonymous' }</span>
													<span style={ { fontSize: '12px', color: '#666' } }>{ feedback.user_email || 'No Email' }</span>
												</div>
											) : (
												<span style={ { color: '#aaa', fontStyle: 'italic' } }>Anonymous</span>
											) }
										</td>
										<td>
											{ isAudioUrl(
												feedback.audioUrl
											) ? (
												// --- AUDIO ---
												<div className="vfd-audio-wrapper">
													<button
														className="vfd-audio-play-btn"
														onClick={ () =>
															handlePlayAudio(
																feedback.audioUrl,
																feedback.id
															)
														}
													>
														{ playingId ===
														feedback.id ? (
															<PauseIcon />
														) : (
															<PlayIcon />
														) }
													</button>

													<div
														className="vfd-progress-bar"
														onClick={ ( e ) => {
															if (
																audioRef.current &&
																playingId ===
																	feedback.id
															) {
																const rect =
																	e.currentTarget.getBoundingClientRect();
																const clickX =
																	e.clientX -
																	rect.left;
																const width =
																	rect.width;
																const newTime =
																	( clickX /
																		width ) *
																	audioRef
																		.current
																		.duration;
																audioRef.current.currentTime =
																	newTime;
															}
														} }
													>
														<div
															className="vfd-progress-fill"
															style={ {
																width:
																	playingId ===
																	feedback.id
																		? `${
																				progress *
																				100
																		  }%`
																		: '0%',
																transition:
																	'width 0.1s linear',
															} }
														></div>
													</div>

													<button
														className="vfd-audio-download-btn"
														title="Download"
														onClick={ () =>
															downloadAudioFile(
																feedback.audioUrl,
																`${ feedback.source_page_title }.mp3`
															)
														}
													>
														<DownloadIcon />
													</button>
												</div>
											) : isVideoUrl(
													feedback.audioUrl
											  ) ? (
												// --- VIDEO ---
												<div className="vfd-video-wrapper">
													<div
														className="vfd-video-thumbnail"
														onClick={ () =>
															setVideoUrl(
																feedback.audioUrl
															)
														}
													>
														<video
															src={
																feedback.audioUrl
															}
															muted
															preload="metadata"
														/>
														<div className="vfd-video-overlay">
															<PlayIcon />
														</div>
													</div>

													<button
														className="vfd-audio-download-btn"
														title="Download Video"
														onClick={ () =>
															downloadAudioFile(
																feedback.audioUrl,
																`${ feedback.source_page_title }.mp4`
															)
														}
													>
														<DownloadIcon />
													</button>
												</div>
											) : (
												<span>Unsupported File</span>
											) }
										</td>

										<td>
											<input
												type="checkbox"
												className="vfd-resolved-checkbox"
												checked={ feedback.resolved }
												onChange={ () =>
													handleResolveToggle(
														feedback.id
													)
												}
											/>
										</td>
										<td>
											{ new Date(
												feedback.createdAt
											).toLocaleDateString() }
										</td>
										<td className="vfd-actions">
											<button
												className="vfd-btn delete"
												title="Delete"
												onClick={ () =>
													handleDelete( feedback.id )
												}
											>
												<Delete />
											</button>
										</td>
									</tr>
								) ) }
							</tbody>
						</table>
					) : (
						<p style={ { textAlign: 'center', fontSize: '25px' } }>
							{ ' ' }
							No Feedback Found!
						</p>
					) }
				</div>

				<FloatingBulkActions
					selectedCount={ selectedItems.size }
					totalCount={ Object.keys( filteredFeedbacks ).length }
					onSelectAll={ toggleSelectAll }
					onDelete={ handleBulkDelete }
					onClear={ clearSelection }
				/>
			</div>

			<Footer />

			{ showDeleteConfirm && (
				<DeleteModal
					isOpen={ showDeleteConfirm }
					onClose={ () => {
						setShowDeleteConfirm( false );
						setDeletingIds( [] );
						setIsBulkDelete( false );
					} }
					onConfirm={ confirmBulkDelete }
				/>
			) }

			{ videoUrl && (
				<div className="vfd-video-modal">
					<div
						className="vfd-video-backdrop"
						onClick={ () => setVideoUrl( null ) }
					/>
					<div className="vfd-video-content">
						<video
							src={ videoUrl }
							controls
							autoPlay
							style={ { width: '100%', borderRadius: '8px' } }
						/>
						<button
							className="vfd-video-close"
							onClick={ () => setVideoUrl( null ) }
						>
							✖
						</button>
					</div>
				</div>
			) }
		</>
	);
};

export default UsersFeedbacksContainer;
