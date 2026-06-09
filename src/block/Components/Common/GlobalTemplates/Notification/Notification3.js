import React from 'react';
import './Notification3.scss';
import { CloseIcon, PluginIcon } from '../../../../../admin-pages/Utils/icons';
import BodyOfVoice from '../../BodyOfVoice';

const Notification3 = ( props ) => {
	const { attributes, shouldShow, closeBanner } = props;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentTitle, contentSubTitle } = sharedData;

	return (
		<div
			className={ `notification3 notification ${
				shouldShow ? 'visible' : ''
			} ${ position }` }
			role="region"
			aria-hidden={ ! shouldShow }
		>
			<div className="notification3__content">
				<div className="notification__icon-box">
					<PluginIcon className="icon" />
				</div>

				<div className="notification3__text">
					<h3 className="contentTitle">{ contentTitle }</h3>
					<p className="contentSubTitle">{ contentSubTitle }</p>
				</div>

				<div className="recording-stuff">
					<BodyOfVoice { ...props } />
				</div>

				<button
					onClick={ () => closeBanner( 5 ) }
					className="notification__close-btn"
				>
					<CloseIcon className="icon" />
				</button>
			</div>
		</div>
	);
};

export default Notification3;
