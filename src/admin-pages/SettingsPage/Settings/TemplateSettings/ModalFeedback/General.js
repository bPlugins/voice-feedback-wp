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
import IconPicker from '../../../../Fields/IconPicker/IconPicker';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const General = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		{
			label: 'Modal Settings',
			value: 'modalSettings',
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
						subTitle="Scroll distance in PX"
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
						subTitle="Time in Seconds"
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

				<ToggleControl
					value={ _get(
						globalData,
						'globalFeedback.functionality.hideOnScrollUp'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.functionality.hideOnScrollUp',
							val
						)
					}
					title="Hide On Scroll UP"
					offText="Turn on to hide on scroll up"
					onText="Turn off to hide on scroll up"
				/>
			</div>

			<div data-section="modalSettings">
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
					} }
				>
					<SelectField
						title="Modal Type"
						options={ [
							{ value: 'minimal', label: 'Minimal' },
							{
								value: 'splitScreen',
								label: 'Split Screen Modal',
							},
							{
								value: 'fullScreen',
								label: 'Full Screen Modal',
							},
							{
								value: 'bottomSheet',
								label: 'Bottom Sheet Modal',
							},
						] }
						value={ _get(
							globalData,
							'globalFeedback.stickyFeedback.position'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.stickyFeedback.position',
								val
							)
						}
					/>
				</div>
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

			<div data-section="audioSettings">
				<IconPicker
					value={ _get(
						globalData,
						'recordingTabs.audioTab.icon'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'recordingTabs.audioTab.icon',
							val
						)
					}
					icons={ [ voice1, voice2, voice3, voice4 ] }
					title="Audio Tab Icon"
				/>

				{ voiceFeedback.isScreenRecord && (
					<Text
						value={ _get(
							globalData,
							'recordingTabs.audioTab.text'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.audioTab.text',
								val
							)
						}
						title="Audio Tab Text"
					/>
				) }

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

			{ voiceFeedback.isScreenRecord && (
				<div data-section="screenSettings">
					<IconPicker
						value={ _get(
							globalData,
							'recordingTabs.screenTab.icon'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.screenTab.icon',
								val
							)
						}
						icons={ [ video1, video2, video3, video4 ] }
						title="Screen Tab Icon"
					/>
					<Text
						value={ _get(
							globalData,
							'recordingTabs.screenTab.text'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.screenTab.text',
								val
							)
						}
						title="Screen Tab Text"
					/>

					<Text
						value={ _get(
							globalData,
							'voiceFeedback.startScreenRecordingText'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'voiceFeedback.startScreenRecordingText',
								val
							)
						}
						title="Start Screen Recording Button Text"
					/>
				</div>
			) }
		</ScrollToCardLayout>
	);
};

export default General;
