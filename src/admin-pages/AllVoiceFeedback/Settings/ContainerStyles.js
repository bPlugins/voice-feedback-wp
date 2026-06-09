import ContentHeader from '../../Components/Shared/Shared/ContentHeader';
import Alignment from '../../Fields/Alignment/Alignment';
import Border from '../../Fields/Border/Border';
import BoxControl from '../../Fields/BoxControl/BoxControl';
import Color from '../../Fields/Color/Color';
import RangeControl from '../../Fields/RangeControl/RangeControl';
import UnitControl from '../../Fields/UnitControl/UnitControl';
import _get from 'lodash/get';

const ContainerStyles = ( { formData, onFormDataUpdate } ) => {
	return (
		<>

			<UnitControl
				title="Container Width"
				value={ _get( formData, 'settings.container.width.desktop' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.container.width.desktop', val )
				}
			/>

			<Border
				title="Container Border"
				value={ _get( formData, 'settings.container.border' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.container.border', val )
				}
			/>
			<RangeControl
				title="Border Radius"
				value={ _get( formData, 'settings.container.borderRadius' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.container.borderRadius', val )
				}
				help="Border radius of the buttons in PX"
			/>

			<Color
				title="Background Color"
				isHeader={ true }
				value={ _get( formData, 'settings.container.bgColor' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.container.bgColor', val )
				}
			/>

			<Alignment
				value={ _get( formData, 'settings.alignment' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.alignment', val )
				} 
				title="Container Alignment"
				positions={ [
					{ value: 'left', label: 'Left' },
					{ value: 'center', label: 'Center' },
					{ value: 'right', label: 'Right' },
				] }
			/>

			<BoxControl
				title="Container Padding"
				name="Padding"
				value={ _get( formData, 'settings.container.padding' ) }
				onChange={ ( val ) =>
					onFormDataUpdate( 'settings.container.padding', val )
				}
			/>
		</>
	);
};

export default ContainerStyles;
