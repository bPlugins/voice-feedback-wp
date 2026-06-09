import React, { useEffect, useRef, useState } from 'react';
import Notification1 from './Notification1';
import Notification2 from './Notification2';
import Notification3 from './Notification3';
import Notification4 from './Notification4';
import {
	useHideOnScrollTop,
	useOnTargetSectionEnter,
	useOnTargetSectionsInView,
	useScrollReveal,
	useShowAfterTime,
	useShowOnPageBottom,
} from '../../../../../admin-pages/Utils/functions';
import Notification5 from './Notification5';
import Notification6 from './Notification6';

const NotificationFeedback = ( props ) => {
	const { attributes } = props;
	const { globalFeedback } = attributes || {};
	const { reappearTime = 60, functionality = {} } = globalFeedback || {};
	const {
		showFeedbackOn,
		hideOnScrollUp,
		scrollDistance,
		choosenSectionsIds,
		showAfterTime,
	} = functionality;

	const LOCAL_STORAGE_KEY = 'bplvfClosedNotification';

	// --- Helpers ---
	const reappearTimeSeconds = Number( reappearTime ) || 0;
	const reappearTimeMs = reappearTimeSeconds * 1000;

	const [ isClosed, setIsClosed ] = useState( () => {
		try {
			const raw = localStorage.getItem( LOCAL_STORAGE_KEY );
			if ( ! raw ) return false;
			const parsed = JSON.parse( raw );
			if ( ! parsed || ! parsed.closedAt ) return false;
			const elapsed = Date.now() - parsed.closedAt;
			if ( reappearTimeMs <= 0 ) {
				return true;
			}
			if ( elapsed < reappearTimeMs ) {
				return true;
			} else {
				localStorage.removeItem( LOCAL_STORAGE_KEY );
				console.log(
					'[notification] cooldown expired — removed localStorage key'
				);
				return false;
			}
		} catch ( err ) {
			console.warn( '[notification] error reading localStorage:', err );
			return false;
		}
	} );

	const [ isVisible, setIsVisible ] = useState( false );
	const reappearTimer = useRef( null );

	// Close action
	const closeBanner = () => {
		try {
			localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify( { closedAt: Date.now() } )
			);
		} catch ( err ) {
			console.warn( '[notification] error writing localStorage:', err );
		}

		setIsClosed( true );
		setIsVisible( false );

		if ( reappearTimer.current ) {
			clearTimeout( reappearTimer.current );
		}
		if ( reappearTimeMs > 0 ) {
			reappearTimer.current = setTimeout( () => {
				try {
					localStorage.removeItem( LOCAL_STORAGE_KEY );
				} catch ( err ) {
					console.warn(
						'[notification] error removing localStorage key:',
						err
					);
				}
				reappearTimer.current = null;
				setIsClosed( false );
			}, reappearTimeMs );
		}
	};

	useEffect( () => {
		if ( ! isClosed ) return;

		if ( reappearTimeMs <= 0 ) {
			return;
		}

		if ( reappearTimer.current ) return;

		try {
			const raw = localStorage.getItem( LOCAL_STORAGE_KEY );
			if ( ! raw ) return; // nothing to do
			const parsed = JSON.parse( raw );
			if ( ! parsed || ! parsed.closedAt ) return;

			const elapsed = Date.now() - parsed.closedAt;
			const remaining = Math.max( 0, reappearTimeMs - elapsed );

			if ( remaining <= 0 ) {
				localStorage.removeItem( LOCAL_STORAGE_KEY );
				setIsClosed( false );
				return;
			}

			reappearTimer.current = setTimeout( () => {
				try {
					localStorage.removeItem( LOCAL_STORAGE_KEY );
				} catch ( err ) {
					console.warn(
						'[notification] error removing localStorage key:',
						err
					);
				}
				reappearTimer.current = null;
				setIsClosed( false );
			}, remaining );
		} catch ( err ) {
			console.warn( '[notification] error reading localStorage:', err );
		}

		// cleanup on unmount
		return () => {
			if ( reappearTimer.current ) {
				clearTimeout( reappearTimer.current );
				reappearTimer.current = null;
			}
		};
	}, [] ); // run once on mount

	useEffect( () => {
		if ( ! isClosed && reappearTimer.current ) {
			clearTimeout( reappearTimer.current );
			reappearTimer.current = null;
		}
	}, [ isClosed ] );

	useScrollReveal(
		! isClosed && showFeedbackOn === 'onScrollDown' ? scrollDistance : null,
		setIsVisible
	);
	useOnTargetSectionEnter(
		! isClosed && showFeedbackOn === 'onTargetSectionEnter'
			? choosenSectionsIds
			: null,
		setIsVisible
	);
	useShowAfterTime(
		! isClosed && showFeedbackOn === 'timedFeedback' ? showAfterTime : null,
		setIsVisible
	);
	useShowOnPageBottom(
		! isClosed && showFeedbackOn === 'scrollEndSection'
			? setIsVisible
			: null
	);
	useOnTargetSectionsInView(
		! isClosed && showFeedbackOn === 'showWithinSection'
			? choosenSectionsIds
			: null,
		setIsVisible
	);

	useHideOnScrollTop( ! isClosed && hideOnScrollUp ? setIsVisible : null );

	// final display calculation
	const shouldShow = isVisible && ! isClosed;

	return (
		<>
			{ attributes.globalFeedback.notification.style ===
				'notification1' && (
				<Notification1
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
			{ attributes.globalFeedback.notification.style ===
				'notification2' && (
				<Notification2
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
			{ attributes.globalFeedback.notification.style ===
				'notification3' && (
				<Notification3
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
			{ attributes.globalFeedback.notification.style ===
				'notification4' && (
				<Notification4
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
			{ attributes.globalFeedback.notification.style ===
				'notification5' && (
				<Notification5
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
			{ attributes.globalFeedback.notification.style ===
				'notification6' && (
				<Notification6
					{ ...props }
					shouldShow={ shouldShow }
					closeBanner={ closeBanner }
				/>
			) }
		</>
	);
};

export default NotificationFeedback;
