import React, { useState } from 'react';
import Header from '../Components/Pages/Header';
import './settings.scss';
import Footer from '../Components/Pages/Footer';
import _get from 'lodash/get';
import VFeedback from '../../block/Components/Frontend/VFeedback';
import Styles from '../../block/Components/Common/Styles';
import Templates from './Settings/Templates';
import Toast from '../Components/Shared/Toast/Toast';
import { useGlobalSettings } from '../Utils/hooks/useGlobalSettings';
import { Check } from '../Utils/icons';

const SettingsContainer = ( { adminUrl } ) => {
	const {
		settings: globalData,
		loading,
		saving,
		hasChanges,
		saveSettings: saveGlobalSettings,
		updateGlobalSettings: onDataUpdate,
		showToast,
		setShowToast,
	} = useGlobalSettings();

	if ( loading ) return <div>Loading...</div>;

	const passedProps = {
		globalData,
		onDataUpdate,
		adminUrl,
	};

	return (
		<>
			<Toast
				show={ showToast }
				onClose={ () => setShowToast( false ) }
				text="Successfully Updated"
			/>
			<Header title="Global Feedback Templates">
				<div className="right-header">
					<div className="vfd-toggle-group">
						<label htmlFor="voice_feedback_global">
							Apply Globally
						</label>
						<label className="vfd-toggle">
							<input
								type="checkbox"
								id="voice_feedback_global"
								name="voice_feedback_global"
								checked={ _get(
									globalData,
									'voiceFeedback.applyGlobally'
								) }
								onChange={ ( e ) => {
									onDataUpdate(
										'voiceFeedback.applyGlobally',
										e.target.checked
									);
									if ( activeTab === 'templates' ) {
										setTimeout( saveGlobalSettings, 50 );
									}
								} }
							/>
							<span className="vfd-slider"></span>
						</label>
					</div>
					<button
						className={ `save-btn ${ saving ? 'saving' : '' } ${
							! hasChanges && ! saving ? 'saved' : 'has-changes'
						}` }
						onClick={ saveGlobalSettings }
						disabled={ ! hasChanges || saving }
					>
						{ saving ? (
							'Saving...'
						) : ! hasChanges ? (
							<>
								<Check className="check-icon" /> Saved
							</>
						) : (
							'Save Changes'
						) }
					</button>
				</div>
			</Header>

			<div className="vfd-body-content">
				<div className="vfd-settings-content">
					<div className="vfd-settings-tab-content">
						<Templates
							globalData={ globalData }
							onDataUpdate={ onDataUpdate }  
							passedProps={ passedProps }
							onSave={ saveGlobalSettings }
							adminUrl={ adminUrl }
						/>
					</div>
				</div>

				{ _get( globalData, 'voiceFeedback.applyGlobally' ) && (
					<div
						className="global-live-preview wp-block-bplvf-voice-feedback"
						id="main-wrapper-2"
					>
						<Styles attributes={ globalData } id="main-wrapper-2" />
						<VFeedback
							attributes={ globalData }
							id="main-wrapper-2"
						/>
					</div>
				) }
			</div>

			<Footer />
		</>
	);
};

export default SettingsContainer;
