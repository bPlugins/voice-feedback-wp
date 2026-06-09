import ContentHeader from '../../Components/Shared/Shared/ContentHeader';
import BoxControl from '../../Fields/BoxControl/BoxControl';
import Colors from '../../Fields/Colors/Colors';
import RangeControl from '../../Fields/RangeControl/RangeControl';
import Typography from '../../Fields/Typography/Typography';
import _get from 'lodash/get';

const ButtonsStyles = ( {
	formData,
	onFormDataUpdate 
} ) => {
	return (
		<> 

			<BoxControl
				title="Buttons Padding"
				name="Padding"
				value={ _get( formData, 'settings.buttons.padding' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.buttons.padding', val )
				}
			/>

			<Colors
				title="Button Colors (Normal)"
				value={ _get( formData, 'settings.buttons.normal' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.buttons.normal', val )
				}
			/>

			<Colors
				title="Button Colors (Hover)"
				value={ _get( formData, 'settings.buttons.hover' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.buttons.hover', val )
				}
			/>

			<RangeControl
				title="Buttons Border Radius"
				value={ _get( formData, 'settings.buttons.borderRadius' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.buttons.borderRadius', val )
				}
				help="Border radius of the buttons in PX"
			/>
		</>
	);
};

export default ButtonsStyles;
