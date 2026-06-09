import React from 'react';
import './CheckboxControl.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { Settings } from '../../Utils/icons';

const CheckboxControl = ( {
	title = 'Select Option',
	options = [],
	value = [],
	onChange,
	isMultiple = false,
	helpText = '',
	fieldIcon = <Settings />,
} ) => {
	const handleSelect = ( optionValue ) => {
		if ( isMultiple ) {
			// multiple selections
			let updated = [ ...value ];

			if ( updated.includes( optionValue ) ) {
				updated = updated.filter( ( v ) => v !== optionValue );
			} else {
				updated.push( optionValue );
			}

			onChange( updated );
		} else {
			// only one selection
			onChange( optionValue );
		}
	};

	return (
		<div className="checkbox-group-field">
			<FieldHeader
				title={ title }
				icon={ fieldIcon }
				isFull={ false }
			/>
			{ helpText && <p className="checkbox-help-text">{ helpText }</p> }

			<div
				className="checkbox-group"
				style={ { opacity: 1 } }
			>
				{ options.map( ( opt ) => {
					const isChecked = value.includes( opt.value );
					return (
						<label
							key={ opt.value }
							className={ `checkbox-item ${
								isChecked ? 'checked' : ''
							}` }
							onClick={ () => handleSelect( opt.value ) }
						>
							<span className="checkmark"></span>
							<span className="label-text">{ opt.label }</span>
						</label>
					);
				} ) }
			</div>
		</div>
	);
};

export default CheckboxControl;
