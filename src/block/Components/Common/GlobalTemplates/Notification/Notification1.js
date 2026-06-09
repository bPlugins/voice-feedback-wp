import React from 'react';
import './Notification1.scss';
import BodyOfVoice from '../../BodyOfVoice';
import { CloseIcon } from '../../../../../admin-pages/Utils/icons';

const Notification1 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes || {};
	const { sharedData = {} } = globalFeedback;
	const { position = 'bottom', contentSubTitle = '' } = sharedData;

	return (
		<div
			className={ `notification1 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<div className="notification1__container">
				<div className="notification1__left">
					<span className="contentSubTitle">{ contentSubTitle }</span>
				</div>

				<div className="notification1__right">
					<BodyOfVoice { ...props } />
					<button
						onClick={ closeBanner }
						className="notification__close-btn"
						aria-label="Close notification"
					>
						<CloseIcon className="icon" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Notification1;
