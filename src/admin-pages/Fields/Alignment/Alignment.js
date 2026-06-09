import './Alignment.scss';
import { AlignmentIcon } from '../../Utils/icons';
import FieldHeader from '../../Components/Shared/FieldHeader/FieldHeader';

const Alignment = ( {
	value = 'left',
	onChange,
	title = 'Alignment',
	positions = [],
} ) => {
	const handleClick = ( posValue, e ) => {
		e.stopPropagation();
		onChange?.( posValue );
	};

	return (
		<div className="positioning-field">
			<FieldHeader
				title={ title }
				icon={ <AlignmentIcon /> }
			/>

			<div
				className="positioning-wrapper"
				style={ { opacity: 1 } }
			>
				<div className="position-options">
					{ positions.map( ( pos ) => (
						<button
							key={ pos.value }
							onClick={ ( e ) => handleClick( pos.value, e ) }
							className={ `position-option ${
								value === pos.value ? 'active' : ''
							}` }
						>
							<div className="option-content">
								<span className="option-icon">
									{ pos.icon }
								</span>
								<span className="option-label">
									{ pos.label }
								</span>
							</div>
						</button>
					) ) }
				</div>
			</div>
		</div>
	);
};

export default Alignment;
