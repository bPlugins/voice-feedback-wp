import React, { useState } from 'react';
import DefaultDrawer from './GlobalTemplates/DefaultDrawer';
import FullScreenFeedback from './GlobalTemplates/FullScreenFeedback';
import InteractionFeedback from './GlobalTemplates/InteractionFeedback';
import SlideIn from './GlobalTemplates/SlideIn/SlideIn';
import NotificationFeedback from './GlobalTemplates/Notification/NotificationFeedback';
import StickyFeedback from './GlobalTemplates/StickyFeedback/StickyFeedback';
import {
	useHideOnScrollTop,
	useOnTargetSectionEnter,
	useOnTargetSectionsInView,
	useScrollReveal,
	useShowAfterTime,
	useShowOnPageBottom,
} from '../../../admin-pages/Utils/functions';

const GlobalVoiceFeedback = ( props ) => {
	const [ isVisible, setIsVisible ] = useState( false );
	const { attributes } = props;
	const { globalFeedback } = attributes;
	const { template, functionality } = globalFeedback;

	const {
		showFeedbackOn,
		hideOnScrollUp,
		scrollDistance,
		choosenSectionsIds,
		showAfterTime,
	} = functionality;

	useScrollReveal(
		showFeedbackOn === 'onScrollDown' ? scrollDistance : null,
		setIsVisible
	);
	useOnTargetSectionEnter(
		showFeedbackOn === 'onTargetSectionEnter' ? choosenSectionsIds : null,
		setIsVisible
	);
	useShowAfterTime(
		showFeedbackOn === 'timedFeedback' ? showAfterTime : null,
		setIsVisible
	);
	useShowOnPageBottom(
		showFeedbackOn === 'scrollEndSection' ? setIsVisible : null
	);
	useOnTargetSectionsInView(
		showFeedbackOn === 'showWithinSection' ? choosenSectionsIds : null,
		setIsVisible
	);

	useHideOnScrollTop( hideOnScrollUp ? setIsVisible : null );

	return (
		<>
			<div className="global-voice-feedback-wrapper">
				{ template === 'defaultDrawer' && (
					<DefaultDrawer { ...props } isVisible={ isVisible } />
				) }
				{ template === 'slideIn' && (
					<SlideIn { ...props } isVisible={ isVisible } />
				) }
				{ template === 'stickyFeedback' && (
					<StickyFeedback isVisible={ isVisible } { ...props } />
				) }
				{ template === 'notification' && (
					<NotificationFeedback { ...props } />
				) }
				{ template === 'fullScreen' && (
					<FullScreenFeedback { ...props } isVisible={ isVisible } />
				) }
				{ template === 'interaction' && (
					<InteractionFeedback { ...props } isVisible={ isVisible } />
				) }
			</div>
		</>
	);
};

export default GlobalVoiceFeedback;
