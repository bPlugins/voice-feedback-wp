import React from 'react';
import './RangeControl.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { Settings } from '../../Utils/icons';

const RangeControl = ( {
	value = 30,
	min = 1,
	max = 100,
	onChange = () => {},
	title = 'Border Radius',
	help = 'Your subtitle goes here',
	fieldIcon = null,
	step = 1,
} ) => {
	const handleChange = ( e ) => {
		onChange( parseFloat( e.target.value ) );
	};

	return (
		<div className="range-control">
			<FieldHeader
				title={ title }
				icon={ fieldIcon || <Settings /> }
			/>

			<div
				className="range-wrapper"
				style={ { opacity: 1 } }
			>
				<div className="range-input">
					<div className="range-container">
						<input
							type="range"
							min={ min }
							max={ max }
							step={ step }
							value={ value }
							onChange={ handleChange }
							className="range-slider"
							style={ {
								background: `linear-gradient(
                to right,
                #146ef5 0%,
                #146ef5 ${ ( ( value - min ) / ( max - min ) ) * 100 }%,
                #e5e7eb ${ ( ( value - min ) / ( max - min ) ) * 100 }%,
                #e5e7eb 100%
              )`,
							} }
						/>
					</div>
					<div className="value-display">
						<span className="range-value">{ value }</span>
					</div>
				</div>
				<label className="help-text">{ help }</label>
			</div>
		</div>
	);
};

export default RangeControl;
