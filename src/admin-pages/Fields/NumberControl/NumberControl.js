import React from 'react';
import './NumberControl.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { Settings } from '../../Utils/icons';

const NumberControl = ( props ) => {
	const {
		value,
		onChange,
		title,
		placeholder,
		help,
	} = props;

	const handleChange = ( e ) => {
		onChange( e.target.value );
	};

	return (
		<div className="bpl-number-control">
			<FieldHeader
				title={ title }
				icon={ <Settings /> }
			/>

			<div
				className="input-field-wrapper"
				style={ { opacity: 1 } }
			>
				<input
					type="number"
					onChange={ handleChange }
					className="input-field"
					placeholder={ placeholder }
					value={ value || '' }
				/>
				<p className="help-text">{ help }</p>
			</div>
		</div>
	);
};

export default NumberControl;
