import React from 'react';
import './Colors.scss';
import { ColorIcon } from '../../Utils/icons';
import Color from '../Color/Color';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const Colors = ( {
	value = {},
	onChange = () => {},
	title = 'Colors',
} ) => {
	const handleChange = ( key, val ) => {
		onChange( { ...value, [ key ]: val } );
	};

	return (
		<div className="bplvf-colors-field">
			<FieldHeader
				title={ title }
				icon={ <ColorIcon /> }
			/>

			<div
				className="bplvf-colors-group"
				style={ { opacity: 1 } }
			>
				<div className="bplvf-bg-color">
					<Color
						label="Background Color"
						value={ value.bgColor || '#ffffff' }
						onChange={ ( val ) => handleChange( 'bgColor', val ) }
					/>
				</div>
				<div className="bplvf-text-color">
					<Color
						label="Text Color"
						value={ value.color || '#000000' }
						onChange={ ( val ) => handleChange( 'color', val ) }
					/>
				</div>
			</div>
		</div>
	);
};

export default Colors;
