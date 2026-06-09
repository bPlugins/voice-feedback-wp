import React from 'react';
import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import _get from 'lodash/get';
import Text from '../../../../Fields/Text/Text';
import ToggleControl from '../../../../Fields/ToggleControl/ToggleControl';
import SelectField from '../../../../Fields/SelectControl/SelectControl';
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
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const General = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		{
			label: 'SlideIn/Drawer Settings',
			value: 'slideInContent',
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
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
					} }
				>
					<SelectField
						title="Choose When to Show the SlideIn/Drawer"
						options={ [
							{ value: 'always', label: 'Always Show' },
							{
								value: 'onScrollDown',
								label: 'Show When User Scrolls Down',
							},
							{
								value: 'onTargetSectionEnter',
								label: 'Show After Your Choosen Sections Appears',
							},
							{
								value: 'timedFeedback',
								label: 'Show After a Few Seconds',
							},
							{
								value: 'scrollEndSection',
								label: 'Show When User Reaches the Bottom of the Page',
							},
							{
								value: 'showWithinSection',
								label: 'Show While In View Your Chosen Sections',
							},
						] }
						value={ _get(
							globalData,
							'globalFeedback.functionality.showFeedbackOn'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.functionality.showFeedbackOn',
								val
							)
						}
					/>
				</div>

				{ /* On Scroll Down Fields */ }
				{ _get(
					globalData,
					'globalFeedback.functionality.showFeedbackOn'
				) === 'onScrollDown' && (
					<RangeControl
						title="Show On Scroll Down IN PX"
						value={ _get(
							globalData,
							'globalFeedback.functionality.scrollDistance'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.functionality.scrollDistance',
								val
							)
						}
						min={ 1 }
						max={ 1000 }
						help="Scroll distance in PX"
					/>
				) }

				{ /* onTargetSectionEnter Fields */ }
				{ _get(
					globalData,
					'globalFeedback.functionality.showFeedbackOn'
				) === 'onTargetSectionEnter' && (
					<Text
						value={ _get(
							globalData,
							'globalFeedback.functionality.choosenSectionsIds'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.functionality.choosenSectionsIds',
								val
							)
						}
						title="Target Section ID Or Class"
						placeholder="Use #yourIdName for IDs or .yourClassName for class"
						help={
							<>
								Add comma separator &ldquo;,&ldquo; to
								add multiple sections. Use{ ' ' }
								<code>#yourIdName</code> for IDs or{ ' ' }
								<code>.yourClassName</code> for classes.
								🎥{ ' ' }
								<a
									href="https://youtu.be/rOMYn2XfGPs"
									target="_blank"
									rel="noopener noreferrer"
								>
									Watch quick video reference
								</a>
							</>
						}
					/>
				) }

				{ /* TimedFeedback */ }
				{ _get(
					globalData,
					'globalFeedback.functionality.showFeedbackOn'
				) === 'timedFeedback' && (
					<RangeControl
						title="Show After Time IN Seconds"
						value={ _get(
							globalData,
							'globalFeedback.functionality.showAfterTime'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.functionality.showAfterTime',
								val
							)
						}
						min={ 0 }
						max={ 5 }
						help="Time in Seconds"
						step={ 0.1 }
					/>
				) }

				{ /* showWithinSection Fields */ }
				{ _get(
					globalData,
					'globalFeedback.functionality.showFeedbackOn'
				) === 'showWithinSection' && (
					<Text
						value={ _get(
							globalData,
							'globalFeedback.functionality.choosenSectionsIds'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.functionality.choosenSectionsIds',
								val
							)
						}
						title="Target Sections ID Or Class"
						placeholder="Use #yourIdName for IDs or .yourClassName for class"
						help={
							<>
								Add comma separator &ldquo;,&ldquo; to
								add multiple sections. Use{ ' ' }
								<code>#yourIdName</code> for IDs or{ ' ' }
								<code>.yourClassName</code> for classes.
								🎥{ ' ' }
								<a
									href="https://youtu.be/rOMYn2XfGPs"
									target="_blank"
									rel="noopener noreferrer"
								>
									Watch quick video reference
								</a>
							</>
						}
					/>
				) } 
			</div>

			<div data-section="slideInContent">
				<Text
					value={ _get(
						globalData,
						'drawer.drawerHeadline'
					) }
					onChange={ ( val ) =>
						onDataUpdate( 'drawer.drawerHeadline', val )
					} 
					title="Slide Headline Text"
				/>

				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
					} }
				>
					<SelectField
						title="Choose SlideIn/Drawer Position"
						options={ [
							{
								value: 'rightCenter',
								label: 'Right Center',
							},
							{
								value: 'leftCenter',
								label: 'Left Center',
							},
							{
								value: 'bottomCenter',
								label: 'Bottom Center',
							},
							{ value: 'topCenter', label: 'Top Center' },
						] }
						value={ _get(
							globalData,
							'globalFeedback.sharedData.position'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.sharedData.position',
								val
							)
						}
					/>
				</div>

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
