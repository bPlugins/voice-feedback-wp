import React from 'react';
import './TextAreaControl.scss';
import { TextIcon } from '../../Utils/icons';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const TextAreaControl = ( {
	value = '',
	onChange = () => {},
	title = 'Textarea Control',
	placeholder = 'Enter text...',
	help = 'Enter your content',
	rows = 4,
} ) => {
	const handleChange = ( e ) => {
		onChange( e.target.value );
	};

	return (
		<div className="text-field">
			<FieldHeader
				title={ title }
				icon={ <TextIcon /> }
			/>

			<div
				className="input-field-wrapper"
				style={ { opacity: 1 } }
			>
				<textarea
					className="input-field textarea-field"
					placeholder={ placeholder }
					value={ value || '' }
					rows={ rows }
					onChange={ handleChange }
				></textarea>

				<p className="field-help">{ help }</p>
			</div>
		</div>
	);
};

export default TextAreaControl;
