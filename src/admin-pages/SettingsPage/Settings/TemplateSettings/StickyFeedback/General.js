import React from 'react';
import _get from 'lodash/get'; 
import Text from '../../../../Fields/Text/Text'; 
import { voice1, voice2, voice3, voice4, } from '../../../../Utils/icons';
import IconPicker from '../../../../Fields/IconPicker/IconPicker';
import DynamicTab from '../../../../Fields/DynamicTab/DynamicTab';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const General = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		{
			label: 'Sticky Feedback Content',
			value: 'stickyPopUpContent',
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

	const tabs = [
		{
			label: 'Icon',
			content: (
				<div>
					<IconPicker
						value={ _get(
							globalData,
							'globalFeedback.stickyFeedback.buttonContent.icon'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.stickyFeedback.buttonContent.icon',
								val
							)
						}
						icons={ [ voice1, voice2, voice3, voice4 ] }
						title="Choose Floating Button Icon"  
					/>
				</div>
			),
		},
		{
			label: 'Text',
			content: (
				<div>
					<Text
						value={ _get(
							globalData,
							'globalFeedback.stickyFeedback.buttonContent.text'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.stickyFeedback.buttonContent.text',
								val
							)
						}
						title="Floating Button Title"
						placeholder="Enter floating button title"
						help="Enter floating button title"
					/>
				</div>
			),
		},
	];

	return (
		<ScrollToCardLayout tabs={ settingsTabs }>
			<div data-section="settings"> 
			</div>

			<div data-section="stickyPopUpContent">
				<DynamicTab
					tabs={ tabs }
					value={ _get(
						globalData,
						'globalFeedback.stickyFeedback.buttonContent.contentType'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.stickyFeedback.buttonContent.contentType',
							val
						)
					}
				/> 

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
					title="SlideIn/Drawer Title"
					placeholder="Enter SlideIn/Drawer Title"
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
					title="SlideIn/Drawer Sub Title"
					placeholder="Enter SlideIn/Drawer Sub Title"
				/>
			</div> 

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
