import React from 'react';
import './SelectField.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { Settings } from '../../Utils/icons';

const SelectField = ( {
	title = 'Select Settings',
	options = [],
	value = '',
	onChange = () => {},
} ) => {
	const handleChange = ( e ) => {
		onChange( e.target.value );
	};

	return (
		<div className="bplvf-select-control header">
			<FieldHeader
				title={ title }
				icon={ <Settings /> }
			/>

			<div
				className="select-input-group"
				style={ { opacity: 1 } }
			>
				<select
					value={ value }
					onChange={ handleChange }
					className="select-dropdown"
				>
					<option value="" disabled>
						Select an option
					</option>
					{ options.map( ( opt ) => (
						<option key={ opt.value } value={ opt.value }>
							{ opt.label }
						</option>
					) ) }
				</select>
			</div>
		</div>
	);
};

export default SelectField;
