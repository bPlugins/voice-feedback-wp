import RangeControl from '../../../../Fields/RangeControl/RangeControl';
import Colors from '../../../../Fields/Colors/Colors';
import BoxControl from '../../../../Fields/BoxControl/BoxControl';
import _get from 'lodash/get';
import ScrollToCardLayout from '../../../../Components/Shared/ScrollToCardLayout';

const Styles = ( { globalData, onDataUpdate } ) => {
	const { voiceFeedback } = globalData;

	const settingsTabs = [
		{
			label: 'Floating Button',
			value: 'floatingButton',
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
				<Colors
					title="Drawer Colors"
					value={ _get( globalData, 'drawer.colors' ) }
					onChange={ ( val ) =>
						onDataUpdate( 'drawer.colors', val )
					}
				/> 
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
