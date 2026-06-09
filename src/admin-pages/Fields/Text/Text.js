import React from 'react';
import './text.scss';
import { TextIcon } from '../../Utils/icons';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const Text = ( {
	value = '',
	onChange = () => {},
	title = 'Text Control',
	placeholder = 'Enter Title',
	help = '',
} ) => {
	const handleChange = ( e ) => {
		onChange( e.target.value );
	};

	return (
		<div className="bpl-text-field">
			<FieldHeader
				title={ title }
				icon={ <TextIcon /> }
			/>

			<div
				className="input-field-wrapper"
				style={ { opacity: 1 } }
			>
				<input
					type="text"
					onChange={ handleChange }
					className="input-field"
					placeholder={ placeholder }
					value={ value || '' }
				/>
				{ help && <p className="help-text">{ help }</p> }
			</div>
		</div>
	);
};

export default Text;
