import React, { useEffect, useState } from 'react';
import './AllFeedback.scss';
import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';
import SettingsHeader from '../Components/Pages/SettingsHeader';
import Text from '../Fields/Text/Text';
import SettingsSection from '../Components/Layout/SettingsSection';
import PreviewSection from '../Components/Layout/PreviewSection';
import { defaultValues } from '../Utils/options';

const AllFeedbackContainer = () => {
	const [ view, setView ] = useState( 'list' );
	const [ list, setList ] = useState( {} );
	const [ editingId, setEditingId ] = useState( null );
	const [ formData, setFormData ] = useState( { ...defaultValues } );

	// Fetch all settings on load
	useEffect( () => {
		fetchList();
	}, [] );

	const fetchList = () => {
		fetch(
			`${ window.bplvfSettings.ajaxUrl }?action=bplvf_get_all&nonce=${ window.bplvfSettings.nonce }`
		)
			.then( ( res ) => res.json() )
			.then( ( res ) => res.success && setList( res.data.all ) );
	};

	const handleAddOrEdit = ( id = null ) => {
		if ( id ) {
			fetch(
				`${ window.bplvfSettings.ajaxUrl }?action=bplvf_get&nonce=${ window.bplvfSettings.nonce }&id=${ id }`
			)
				.then( ( res ) => res.json() )
				.then( ( res ) => {
					if ( res.success ) {
						setFormData( res.data.settings );
						setEditingId( id );
						setView( 'create' );
					}
				} );
		} else {
			setFormData( { ...defaultValues } );
			setEditingId( null );
			setView( 'create' );
		}
	};

	const handleSave = () => {
		const id = editingId || Math.random().toString( 36 ).substring( 2, 8 );

		const payload = new FormData();
		payload.append( 'action', 'bplvf_save' );
		payload.append( 'nonce', window.bplvfSettings.nonce );
		payload.append( 'id', id );
		payload.append( 'settings', JSON.stringify( formData ) );

		fetch( window.bplvfSettings.ajaxUrl, {
			method: 'POST',
			body: payload,
		} )
			.then( ( res ) => res.json() )
			.then( ( res ) => {
				if ( res.success ) {
					alert(
						`Saved! Use shortcode: [voice_feedback id="${ res.data.id }"]`
					);
					fetchList();
					setView( 'list' );
				} else {
					alert( res?.message || 'Save failed' );
				}
			} )
			.catch( ( err ) => {
				console.error( 'Save Error:', err );
			} );
	};

	const handleDelete = ( id ) => {
		if ( ! confirm( 'Are you sure you want to delete this feedback?' ) )
			return;

		fetch( window.bplvfSettings.ajaxUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( {
				action: 'bplvf_delete',
				nonce: window.bplvfSettings.nonce,
				id,
			} ),
		} )
			.then( ( res ) => res.json() )
			.then( ( res ) => {
				if ( res.success ) {
					fetchList();
				}
			} );
	};

	const handleAddNewClick = () => {
		setView( 'create' ); // Switch to creation UI
	};

	const handleBackToList = () => {
		setView( 'list' );
	};

	const onFieldChange = ( value ) => {
		setFormData( ( prev ) => ( { ...prev, title: value } ) );
	};

	if ( view === 'create' ) {
		return (
			<>
				<SettingsHeader
					onBackClick={ handleBackToList }
					onSave={ handleSave }
				/>

				<div className="vfd-body">
					{ /* Settings Section  */ }
					<SettingsSection>
						<Text
							value={ formData.title }
							onChange={ onFieldChange }
						/>
					</SettingsSection>

					{ /* Preview Section  */ }
					<PreviewSection>
						<p>This is how the feedback form/player will look:</p>
						<iframe
							src="tanin-rahman-portfolio.netlify.app"
							style={ {
								width: '100%',
								height: '400px',
								border: '1px solid #ccc',
								borderRadius: '8px',
							} }
						></iframe>
						<h3 style={ { marginTop: '30px' } }>
							Use this Shortcode:
						</h3>
						<div className="vfd-shortcode-box">
							<code>[voice_feedback]</code>
							<button type="button">Copy</button>
						</div>
					</PreviewSection>
				</div>

				<Footer />
			</>
		);
	}

	return (
		<>
			<Header>
				<div
					style={ {
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					} }
				>
					<button
						className="add-new-btn"
						onClick={ handleAddNewClick }
					>
						+ Add New
					</button>
				</div>
			</Header>

			<div className="vfd-content">
				<div className="vfd-card-header">
					<h2>Your Voice Feedbacks</h2>
					<p>Manage your saved feedback forms below.</p>
				</div>

				{ Object.keys( list ).length === 0 ? (
					<div className="vfd-empty-state">
						<h2>No Voice Feedback Found</h2>
						<p>Click below to add your first one.</p>
						<button onClick={ () => handleAddOrEdit( null ) }>
							+ Add New
						</button>
					</div>
				) : (
					<div className="vfd-table-container">
						<table className="vfd-table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Title</th>
									<th>Shortcode</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ Object.entries( list ).map(
									( [ id, settings ] ) => (
										<tr key={ id }>
											<td>{ id }</td>
											<td>
												{ settings.title || 'Untitled' }
											</td>
											<td>
												<code>{ `[voice_feedback id="${ id }"]` }</code>
											</td>
											<td className="vfd-actions">
												<button
													className="vfd-btn edit"
													onClick={ () =>
														handleAddOrEdit( id )
													}
												>
													✏️
												</button>
												<button
													className="vfd-btn delete"
													onClick={ () =>
														handleDelete( id )
													}
												>
													🗑️
												</button>
											</td>
										</tr>
									)
								) }
							</tbody>
						</table>
					</div>
				) }
			</div>

			<Footer />
		</>
	);
};

export default AllFeedbackContainer;
