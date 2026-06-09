import React, { useState } from 'react';

import _get from 'lodash/get';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';
import {
	video1,
	video2,
	video3,
	video4,
	voice1,
	voice2,
	voice3,
	voice4,
} from '../../Utils/icons';
import Text from '../../Fields/Text/Text';
import IconPicker from '../../Fields/IconPicker/IconPicker';

const VoiceFeedbackSettings = ( {
	formData,
	onFormDataUpdate,  
} ) => {
	const [ activeSettings, setActiveSettings ] = useState( 'settings' );
	const { settings } = formData;
	const { voiceFeedback } = settings;

	const setSettings = ( setting ) => {
		setActiveSettings( setting );
	};

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		voiceFeedback.isScreenRecord
			? {
					label: 'Recording Tabs',
					value: 'recordingTabs',
			  }
			: null,
		{
			label: 'Audio Recording Settings',
			value: 'audioSettings',
		},
		voiceFeedback.isScreenRecord
			? {
					label: 'Screen Recording Settings',
					value: 'screenSettings',
			  }
			: null,
	].filter( Boolean );

	return (
		<>
			<div className="settings">
				<div className="vfd-sidebar-nav">
					{ settingsTabs.map( ( tab ) => (
						<button
							key={ tab.value }
							onClick={ () => setSettings( tab.value ) }
							className={ `nav-button ${
								activeSettings === tab.value ? 'active' : ''
							}` }
						>
							{ /* <div className="nav-icon">{tab.icon}</div> */ }
							<span className="nav-text">{ tab.label }</span>
						</button>
					) ) }
				</div>

				<div className="vfd-main-settings"> 
					{ activeSettings === 'audioSettings' && (
						<>  
							<Text
								value={ _get(
									formData,
									'settings.voiceFeedback.startRecordingText'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.voiceFeedback.startRecordingText',
										val
									)
								}
								title="Start Recording Button Text"
							/>
						</>
					) } 
				</div>
			</div>
		</>
	);
};

export default VoiceFeedbackSettings;
