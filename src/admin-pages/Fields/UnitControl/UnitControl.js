import React, { useState, useEffect } from 'react';
import './unitControl.scss';
import { WidthIcon } from '../../Utils/icons';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const UnitControl = ( {
	value = '30%',
	onChange,
	title = 'Container Width',
} ) => {
	const extractParts = ( val ) => {
		const match = String( val ).match( /^(\d+(?:\.\d+)?)(px|%|em|rem)$/ );
		if ( match ) {
			return { val: match[ 1 ], unit: match[ 2 ] };
		}
		return { val: '', unit: '%' };
	};

	const [ unitValue, setUnitValue ] = useState( extractParts( value ).val );
	const [ unit, setUnit ] = useState( extractParts( value ).unit );

	useEffect( () => {
		const { val, unit } = extractParts( value );
		setUnitValue( val );
		setUnit( unit );
	}, [ value ] );

	const handleChange = ( name, val ) => {
		const newVal = name === 'value' ? val : unitValue;
		const newUnit = name === 'unit' ? val : unit;

		setUnitValue( newVal );
		setUnit( newUnit );

		onChange?.( newVal === '' ? '' : `${ newVal }${ newUnit }` );
	};

	return (
		<div className="unit-control-wrapper">
			<FieldHeader
				title={ title }
				icon={ <WidthIcon /> }
			/>
			<div
				className="unit-field"
				style={ { opacity: 1 } }
			>
				<div className="unit-input">
					<label className="unit-label">Value</label>
					<input
						type="number"
						value={ unitValue }
						onChange={ ( e ) =>
							handleChange( 'value', e.target.value )
						}
						className="input-field"
						min="0"
					/>
				</div>

				<div className="unit-select">
					<label className="unit-label">Unit</label>
					<select
						value={ unit }
						onChange={ ( e ) =>
							handleChange( 'unit', e.target.value )
						}
						className="select-field"
					>
						<option value="%">%</option>
						<option value="px">px</option>
						<option value="em">em</option>
						<option value="rem">rem</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default UnitControl;
