import React from 'react';
import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import Typography from '../../../../Fields/Typography/Typography';
import Colors from '../../../../Fields/Colors/Colors';
import BoxControl from '../../../../Fields/BoxControl/BoxControl';
import _get from 'lodash/get';
import Color from '../../../../Fields/Color/Color';
import ToggleControl from '../../../../Fields/ToggleControl/ToggleControl';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const Styles = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback, recordingTabs } = globalData;

	const settingsTabs = [
		{
			label: 'Floating Button',
			value: 'floatingButton',
		},
		{
			label: 'Pop-Up Content',
			value: 'pupupContent',
		},
		voiceFeedback.isScreenRecord
			? {
					label: 'Recording Tabs',
					value: 'recordingTabs',
			  }
			: null,
		{
			label: 'Record Buttons',
			value: 'buttons',
		},
	].filter( Boolean );

	return (
		<ScrollToCardLayout tabs={ settingsTabs }>
			<div data-section="floatingButton">
				<ToggleControl
					title="Pulse Animation"
					value={ _get(
						globalData,
						'globalFeedback.stickyFeedback.buttonContent.pulseButton'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.stickyFeedback.buttonContent.pulseButton',
							val
						)
					}
					offText="Turn ON to add pulse animation"
					onText="Turn OFF to remove pulse animation"
				/>

				<Colors
					title="Button Colors (Background and Content)"
					value={ _get(
						globalData,
						'globalFeedback.stickyFeedback.buttonContent.colors'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.stickyFeedback.buttonContent.colors',
							val
						)
					}
				/>

				{ globalData.globalFeedback.stickyFeedback.buttonContent.contentType === 'icon' && (
					<RangeControl
						title="Icon Size"
						value={ _get(
							globalData,
							'globalFeedback.stickyFeedback.buttonContent.iconSize'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'globalFeedback.stickyFeedback.buttonContent.iconSize',
								val
							)
						}
						subTitle="Icon size of the button in PX"
						min={ 0 }
						max={ 200 }
					/>
				) }
 

				<RangeControl
					title="Border Radius"
					value={ _get(
						globalData,
						'globalFeedback.stickyFeedback.buttonContent.borderRadius'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.stickyFeedback.buttonContent.borderRadius',
							val
						)
					}
					subTitle="Border radius in PX"
					min={ 0 }
					max={ 50 }
				/>
			</div>

			<div data-section="pupupContent">
				<Color
					title="Title Text Color"
					isHeader={ true }
					value={ _get(
						globalData,
						'globalFeedback.sharedData.colors.contentTitleColor'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.sharedData.colors.contentTitleColor',
							val
						)
					}
				/>
				<Color
					title="Sub Title Color"
					isHeader={ true }
					value={ _get(
						globalData,
						'globalFeedback.sharedData.colors.contentSubTitleColor'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.sharedData.colors.contentSubTitleColor',
							val
						)
					}
				/> 
			</div>

			{ voiceFeedback.isScreenRecord && (
				<div data-section="recordingTabs">
					<Color
						title="Background Color"
						isHeader={ true }
						value={ _get(
							globalData,
							'recordingTabs.bgColor'
						) }
						onChange={ ( val ) =>
							onDataUpdate( 'recordingTabs.bgColor', val )
						}
					/> 

					{ recordingTabs.buttons.isDisplayIcon &&
						! recordingTabs.buttons.isDisplayText && (
							<RangeControl
								title="Tab Icon Size"
								value={ _get(
									globalData,
									'recordingTabs.buttons.iconSize'
								) }
								onChange={ ( val ) =>
									onDataUpdate(
										'recordingTabs.buttons.iconSize',
										val
									)
								}
								subTitle="Icon size of Tab Icon in PX"
							/>
						) }

					<RangeControl
						title="Tab Buttons Border Radius"
						value={ _get(
							globalData,
							'recordingTabs.buttons.borderRadius'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.buttons.borderRadius',
								val
							)
						}
						subTitle="Border radius of the buttons in PX"
					/>

					<BoxControl
						title="Tab Buttons Padding"
						name="Padding"
						value={ _get(
							globalData,
							'recordingTabs.buttons.padding'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.buttons.padding',
								val
							)
						}
					/>

					<Colors
						title="Active Recording Tab Colors"
						value={ _get(
							globalData,
							'recordingTabs.activeRecordingTab'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.activeRecordingTab',
								val
							)
						}
					/>

					<RangeControl
						title="Tab Buttons Border Radius"
						value={ _get(
							globalData,
							'recordingTabs.buttons.borderRadius'
						) }
						onChange={ ( val ) =>
							onDataUpdate(
								'recordingTabs.buttons.borderRadius',
								val
							)
						}
						subTitle="Border radius of the buttons in PX"
					/>
				</div>
			) }

			<div data-section="buttons"> 
				<BoxControl
					title="Buttons Padding"
					name="Padding"
					value={ _get( globalData, 'buttons.padding' ) }
					onChange={ ( val ) =>
						onDataUpdate( 'buttons.padding', val )
					}
				/>

				<Colors
					title="Button Colors (Normal)"
					value={ _get( globalData, 'buttons.normal' ) }
					onChange={ ( val ) =>
						onDataUpdate( 'buttons.normal', val )
					}
				/>

				<Colors
					title="Button Colors (Hover)"
					value={ _get( globalData, 'buttons.hover' ) }
					onChange={ ( val ) =>
						onDataUpdate( 'buttons.hover', val )
					}
				/>

				<RangeControl
					title="Buttons Border Radius"
					value={ _get( globalData, 'buttons.borderRadius' ) }
					onChange={ ( val ) =>
						onDataUpdate( 'buttons.borderRadius', val )
					}
					subTitle="Border radius of the buttons in PX"
				/>
			</div>
		</ScrollToCardLayout>
	);
};

export default Styles;
