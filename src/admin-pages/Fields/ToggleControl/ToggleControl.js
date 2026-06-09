import './ToggleControl.scss';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';
import { ToggleIcon } from '../../Utils/icons';

const ToggleControl = ( {
	title = 'Show Header',
	description,
	value,
	onChange,
} ) => {
	const handleToggle = ( e ) => {
		onChange( e.target.checked );
	};

	return (
		<>
			<div
				className="toggle-control-field"
				style={ { display: description ? 'block' : 'flex' } }
			>
				<FieldHeader
					title={ title }
					icon={ <ToggleIcon /> }
					isFull={ false }
				/>
				<div className="field-wrapper">
					{ description && (
						<div className="toggle-description">
							<p>{ description }</p>
						</div>
					) }

					<label
						className="toggle-field"
						style={ {
							opacity: 1,
							marginTop: ! description ? '0px' : '-7px',
						} }
					>
						<input
							type="checkbox"
							id="toggle-control"
							checked={ value }
							onChange={ handleToggle }
						/>
						<span className="toggle-slider"></span>
					</label>
				</div>
			</div>
		</>
	);
};

export default ToggleControl;
