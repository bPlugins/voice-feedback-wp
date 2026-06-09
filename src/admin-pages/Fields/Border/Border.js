import React, { useEffect, useState } from 'react';
import './Border.scss';
import Color from '../Color/Color';
import { BorderIcon } from '../../Utils/icons';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const Border = ( {
	title = 'Border Settings',
	value = {
		color: '#000000',
		style: 'solid',
		width: '1px',
	},
	onChange,
} ) => {
	const parseWidth = ( val ) => parseInt( val?.replace( 'px', '' ) || '1' );

	const [ borderWidth, setBorderWidth ] = useState(
		parseWidth( value?.width )
	);
	const [ borderStyle, setBorderStyle ] = useState( value?.style || 'solid' );
	const [ borderColor, setBorderColor ] = useState(
		value?.color || '#000000'
	);

	useEffect( () => {
		// Update the full border value whenever internal states change
		onChange?.( {
			width: `${ borderWidth }px`,
			style: borderStyle,
			color: borderColor,
		} );
	}, [ borderWidth, borderStyle, borderColor ] );

	const handleWidthChange = ( e ) => {
		const val = e.target.value;
		setBorderWidth( val );
	};

	const handleStyleChange = ( e ) => {
		const val = e.target.value;
		setBorderStyle( val );
	};

	const handleColorChange = ( color ) => {
		setBorderColor( color );
	};

	const borderStyles = [
		'solid',
		'dashed',
		'dotted',
		'double',
		'groove',
		'ridge',
		'inset',
		'outset',
	];

	return (
		<div className="border-field">
			<FieldHeader
				title={ title }
				icon={ <BorderIcon /> }
			/>

			<div
				className="border-controls"
				style={ { opacity: 1 } }
			>
				<div className="border-width">
					<label className="field-label">Width</label>
					<input
						type="number"
						min="0"
						value={ borderWidth }
						onChange={ handleWidthChange }
						className="input-field"
					/>
				</div>

				<div className="border-color">
					<Color
						label="Color"
						value={ borderColor }
						onChange={ handleColorChange }
					/>
				</div>

				<div className="border-style">
					<label className="field-label">Style</label>
					<select
						value={ borderStyle }
						onChange={ handleStyleChange }
						className="select-field"
					>
						{ borderStyles.map( ( style ) => (
							<option key={ style } value={ style }>
								{ style }
							</option>
						) ) }
					</select>
				</div>
			</div>
		</div>
	);
};

export default Border;
