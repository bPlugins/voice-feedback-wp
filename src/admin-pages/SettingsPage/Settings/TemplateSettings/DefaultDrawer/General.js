import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import _get from 'lodash/get'; 
import Text from '../../../../Fields/Text/Text'; 
import ToggleControl from '../../../../Fields/ToggleControl/ToggleControl'; 
import SelectField from '../../../../Fields/SelectControl/SelectControl';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const General = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Settings',
			value: 'settings',
		},
		{
			label: 'Drawer Opener',
			value: 'drawerOpener',
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
						title="Choose When to Show the Drawer"
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

			<div data-section="drawerOpener">
				<Text
					value={ _get(
						globalData,
						'drawer.drawerHeadline'
					) }
					onChange={ ( val ) =>
						onDataUpdate( 'drawer.drawerHeadline', val )
					}
					title="Drawer Headline Text"
				/> 
				<RangeControl
					title="Space From Bottom"
					value={ _get(
						globalData,
						'drawer.spaceFromBottom'
					) }
					onChange={ ( val ) =>
						onDataUpdate( 'drawer.spaceFromBottom', val )
					}
					help="Space from bottom of the page in %"
				/>
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
