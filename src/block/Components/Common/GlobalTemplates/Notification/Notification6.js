import React from 'react';
import './Notification6.scss';
import BodyOfVoice from '../../BodyOfVoice';
import { CloseIcon, RadioIcon } from '../../../../../admin-pages/Utils/icons';

const Notification6 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentSubTitle, contentTitle } = sharedData;

	return (
		<div
			className={ `notification6 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<div className="notification6__header">
				<div className="contentTitle">
					<RadioIcon className="icon" />
					<span className="contentTitle">{ contentTitle }</span>
				</div>
				<button
					onClick={ () => closeBanner( 11 ) }
					className="notification6__close"
					aria-label="Close notification"
				>
					<CloseIcon className="icon" />
				</button>
			</div>

			<div className="notification6__body">
				<p className="contentSubTitle">{ contentSubTitle }</p>
				<BodyOfVoice { ...props } />
			</div>
		</div>
	);
};

export default Notification6;
