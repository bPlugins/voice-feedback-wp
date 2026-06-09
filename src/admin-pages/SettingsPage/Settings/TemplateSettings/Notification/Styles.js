import React from 'react';
import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import Typography from '../../../../Fields/Typography/Typography';
import Colors from '../../../../Fields/Colors/Colors';
import BoxControl from '../../../../Fields/BoxControl/BoxControl';
import _get from 'lodash/get';
import Color from '../../../../Fields/Color/Color';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const Styles = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback, recordingTabs } = globalData;

	const settingsTabs = [
		{
			label: 'Notification Banner',
			value: 'notificationBanner',
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
			<div data-section="notificationBanner">
				<Color
					title="Background Color"
					isHeader={ true }
					value={ _get(
						globalData,
						'globalFeedback.notification.bgColor'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.notification.bgColor',
							val
						)
					}
				/>

				<Color
					title="Close Button Color"
					isHeader={ true }
					value={ _get(
						globalData,
						'globalFeedback.notification.closeButton.color'
					) }
					onChange={ ( val ) =>
						onDataUpdate(
							'globalFeedback.notification.closeButton.color',
							val
						)
					}
				/>

				{ ( globalData.globalFeedback.notification.style === 'notification1' ||
					globalData.globalFeedback.notification.style === 'notification2' ) && (
					<Color
						title="Content Color"
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
				) }

				{ ( globalData.globalFeedback.notification.style !== 'notification1' &&
					globalData.globalFeedback.notification.style !== 'notification2' ) && (
					<>
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
					</>
				) } 
			</div> 
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
					value={ _get(
						globalData,
						'buttons.borderRadius'
					) }
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
