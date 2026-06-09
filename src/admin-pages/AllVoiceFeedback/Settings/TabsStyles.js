import BoxControl from '../../Fields/BoxControl/BoxControl';
import Colors from '../../Fields/Colors/Colors';
import RangeControl from '../../Fields/RangeControl/RangeControl';
import Typography from '../../Fields/Typography/Typography';
import _get from 'lodash/get';

const TabsStyles = ( { formData, onFormDataUpdate } ) => {
	const { settings } = formData;
	const { recordingTabs } = settings;

	return (
		<>
			{ /* <ContentHeader title="Recording Tabs Styles" /> */ }

			{ recordingTabs.buttons.isDisplayText && (
				<Typography
					title="Tab Text Typography"
					value={ _get(
						formData,
						'settings.recordingTabs.buttons.typo'
					) }
					onChange={ ( val ) =>
						onFormDataUpdate(
							'settings.recordingTabs.buttons.typo',
							val
						)
					}
				/>
			) }

			{ recordingTabs.buttons.isDisplayIcon && (
				<RangeControl
					title="Icon Size"
					value={ _get(
						formData,
						'settings.recordingTabs.buttons.iconSize'
					) }
					onChange={ ( val ) =>
						onFormDataUpdate(
							'settings.recordingTabs.buttons.iconSize',
							val
						)
					}
					subTitle="Icon size of Tab Icon in PX"
				/>
			) }

			<RangeControl
				title="Tab Buttons Border Radius"
				value={ _get(
					formData,
					'settings.recordingTabs.buttons.borderRadius'
				) }
				onChange={ ( val ) =>
					onFormDataUpdate(
						'settings.recordingTabs.buttons.borderRadius',
						val
					)
				}
				help="Border radius of the buttons in PX"
			/>

			<BoxControl
				title="Tab Buttons Padding"
				name="Padding"
				value={ _get(
					formData,
					'settings.recordingTabs.buttons.padding'
				) }
				onChange={ ( val ) =>
					onFormDataUpdate(
						'settings.recordingTabs.buttons.padding',
						val
					)
				}
			/>

			<Colors
				title="Active Recording Tab Colors"
				value={ _get(
					formData,
					'settings.recordingTabs.activeRecordingTab'
				) }
				onChange={ ( val ) =>
					onFormDataUpdate(
						'settings.recordingTabs.activeRecordingTab',
						val
					)
				}
			/>
		</>
	);
};

export default TabsStyles;
