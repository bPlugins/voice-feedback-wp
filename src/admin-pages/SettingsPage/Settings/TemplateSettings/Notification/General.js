import React from 'react';
import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import _get from 'lodash/get';
import {
	video1,
	video2,
	video3,
	video4,
	voice1,
	voice2,
	voice3,
	voice4,
} from '../../../../Utils/icons';
import Text from '../../../../Fields/Text/Text';
import Alignment from '../../../../Fields/Alignment/Alignment';
import ToggleControl from '../../../../Fields/ToggleControl/ToggleControl';
import SelectField from '../../../../Fields/SelectControl/SelectControl';
import IconPicker from '../../../../Fields/IconPicker/IconPicker';
import { handleStyleSwitch } from '../../../../Utils/functions';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const General = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		{
			label: 'Notification Banner',
			value: 'notificationSettings',
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
		<ScrollToCardLayout tabs={ settingsTabs }>
			<div data-section="settings"> 

				<RangeControl
					title="Set Time For Reappear After Close in Seconds"
					value={ _get(
						globalData,
						'globalFeedback.notification.reappearTime'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.notification.reappearTime',
							val
						)
					}
					min={ 1 }
					max={ 10 }
					help="Set time in Seconds"
				/>
			</div>

			<div data-section="notificationSettings">
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
					} }
				>
					<SelectField
						title="Choose Notification/Banner Style"
						options={ [
							{
								value: 'notification1',
								label: 'Design 1(Default)',
							},
							{
								value: 'notification2',
								label: 'Design 2',
							},
							{
								value: 'notification3',
								label: 'Design 3',
							},
							{
								value: 'notification4',
								label: 'Design 4',
							},
							{
								value: 'notification5',
								label: 'Design 5',
							},
							{
								value: 'notification6',
								label: 'Design 6',
							},
						] }
						value={ _get(
							globalData,
							'globalFeedback.notification.style'
						) }
						onChange={ ( val ) =>
							handleStyleSwitch( val, onDataUpdate )
						}
					/>
				</div> 

				{ /* Content Settings For Notification 1 */ }
				{ ( globalData.globalFeedback.notification.style === 'notification1' ||
					globalData.globalFeedback.notification.style === 'notification2' ) && (
					<Text
						value={ _get(
							globalData,
							'globalFeedback.sharedData.contentSubTitle'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.sharedData.contentSubTitle',
								val
							)
						}
						title="Notification Text"
					/>
				) }

				{ /* Content Settings For Notification 2. 3. 4. 5. 6 */ }
				{ globalData.globalFeedback.notification.style !== 'notification1' &&
					globalData.globalFeedback.notification.style !== 'notification2' && (
						<>
							<Text
								value={ _get(
									globalData,
									'globalFeedback.sharedData.contentTitle'
								) }
								onChange={ ( val ) =>
									onDataUpdate(
										'globalFeedback.sharedData.contentTitle',
										val
									)
								}
								title="Notification Text"
							/>
							<Text
								value={ _get(
									globalData,
									'globalFeedback.sharedData.contentSubTitle'
								) }
								onChange={ ( val ) =>
									onDataUpdate(
										'globalFeedback.sharedData.contentSubTitle',
										val
									)
								}
								title="Notification Text"
							/>
						</>
					) }
			</div>

			{ voiceFeedback.isScreenRecord && (
				<div data-section="recordingTabs">
					<ToggleControl
						value={ _get(
							globalData,
							'recordingTabs.buttons.isDisplayIcon'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.buttons.isDisplayIcon',
								val
							)
						}
						title="Show/Hide Button Icon"
						offText="Turn on to show icon"
						onText="Turn off to show icon"
					/>

					<ToggleControl
						value={ _get(
							globalData,
							'recordingTabs.buttons.isDisplayText'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.buttons.isDisplayText',
								val
							)
						}
						title="Show/Hide Button Text"
						offText="Turn on to show text"
						onText="Turn off to show text"
					/>
				</div>
			) }

			<div data-section="audioSettings" style={{marginBottom: "350px"}}>  

				<Text
					value={ _get(
						globalData,
						'voiceFeedback.startRecordingText'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'voiceFeedback.startRecordingText',
							val
						)
					}
					title="Start Recording Button Text"
				/>
			</div> 
		</ScrollToCardLayout>
	);
};

export default General;
