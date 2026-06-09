import React from 'react';
import './Notification4.scss';
import { CloseIcon, RadioIcon } from '../../../../../admin-pages/Utils/icons';
import BodyOfVoice from '../../BodyOfVoice';

const Notification4 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentSubTitle, contentTitle } = sharedData;

	return (
		<div
			className={ `notification4 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<button
				onClick={ () => closeBanner( 3 ) }
				className="notification__close-btn"
			>
				<CloseIcon className="icon" />
			</button>

			<div className="notification4__header">
				<div className="notification__icon-box">
					<RadioIcon className="icon" />
				</div>
				<div>
					<p className="contentTitle">{ contentTitle }</p>
					<p className="contentSubTitle">{ contentSubTitle }</p>
				</div>
			</div>

			<BodyOfVoice { ...props } />
		</div>
	);
};

export default Notification4;
