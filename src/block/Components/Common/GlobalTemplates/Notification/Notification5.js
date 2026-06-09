import React from 'react';
import './Notification5.scss';
import { CloseIcon } from '../../../../../admin-pages/Utils/icons';
import BodyOfVoice from '../../BodyOfVoice';

const Notification5 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentSubTitle, contentTitle } = sharedData;

	return (
		<div
			className={ `notification5 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<div className="notification5__header">
				<div>
					<h3 className="contentTitle">{ contentTitle }</h3>
					<p className="contentSubTitle">{ contentSubTitle }</p>
				</div>
				<button
					onClick={ () => closeBanner( 12 ) }
					className="notification__close-btn"
				>
					<CloseIcon className="icon" />
				</button>
			</div>

			<BodyOfVoice { ...props } />
		</div>
	);
};

export default Notification5;
