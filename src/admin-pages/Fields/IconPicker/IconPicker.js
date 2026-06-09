import React from 'react';
import './IconPicker.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { ContainerIcon } from '../../Utils/icons';

const IconPicker = ( {
	icons = [],
	value = null,
	onChange = () => {},
	title = 'Icon Picker',
} ) => {
	const handleSelect = ( icon ) => {
		onChange( icon );
	};

	return (
		<div className="icon-picker-field">
			<FieldHeader
				title={ title }
				icon={ <ContainerIcon /> }
			/>

			<div
				className="icon-grid"
				style={ { opacity: 1 } }
			>
				{ icons.map( ( icon, index ) => {
					return (
						<button
							key={ index }
							className={ `icon-btn ${
								value === icon ? 'selected' : ''
							}` }
							onClick={ () => handleSelect( icon ) }
							type="button"
							dangerouslySetInnerHTML={ { __html: icon } }
						></button>
					);
				} ) }
			</div>
		</div>
	);
};

export default IconPicker;
