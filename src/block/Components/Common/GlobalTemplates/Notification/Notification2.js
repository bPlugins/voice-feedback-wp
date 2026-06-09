import React from 'react';
import './Notification2.scss';
import { CloseIcon } from '../../../../../admin-pages/Utils/icons';
import BodyOfVoice from '../../BodyOfVoice';

const Notification2 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentSubTitle } = sharedData;

	return (
		<div
			className={ `notification2 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<span className="contentSubTitle">{ contentSubTitle }</span>
			<div className="notification2__divider"></div>
			<BodyOfVoice { ...props } />
			<button
				onClick={ () => closeBanner() }
				className="notification__close-btn"
			>
				<CloseIcon className="icon" />
			</button>
		</div>
	);
};

export default Notification2;
