import React, { Suspense, lazy, useEffect, useRef } from 'react';

const componentMap = {
	DefaultDrawer: {
		general: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/DefaultDrawer/General.js'
			)
		),
		styles: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/DefaultDrawer/Styles.js'
			)
		),
	},
	SlideIn: {
		general: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/SlideIn/General.js'
			)
		),
		styles: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/SlideIn/Styles.js'
			)
		),
	},
	StickyFeedback: {
		general: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/StickyFeedback/General.js'
			)
		),
		styles: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/StickyFeedback/Styles.js'
			)
		),
	},
	Notification: {
		general: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/Notification/General.js'
			)
		),
		styles: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/Notification/Styles.js'
			)
		),
	},
	ModalFeedback: {
		general: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/ModalFeedback/General.js'
			)
		),
		styles: lazy(() =>
			import(
				'../SettingsPage/Settings/TemplateSettings/ModalFeedback/Styles.js'
			)
		),
	},
};

export const renderTemplateComponent = (
	globalData,
	activeSettings,
	props
) => {
	const rawTemplate = globalData?.globalFeedback?.template || 'DefaultDrawer';

	// Normalize case
	const template =
		Object.keys(componentMap).find(
			(key) => key.toLowerCase() === rawTemplate.toLowerCase()
		) || 'DefaultDrawer';

	const Component =
		componentMap[template]?.[activeSettings] ||
		componentMap.DefaultDrawer[activeSettings] ||
		componentMap.DefaultDrawer.general;

	return (
		<Suspense
			fallback={
				<div style={{ textAlign: 'center' }}>
					Loading {activeSettings}...
				</div>
			}
		>
			<Component {...props} />
		</Suspense>
	);
};

export const useScrollReveal = (scrollPosition, setIsVisible) => {
	useEffect(() => {
		function handleScroll() {
			const currentScroll = window.scrollY;

			if (typeof setIsVisible === 'function') {
				if (currentScroll >= scrollPosition) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			}
		}

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollPosition, setIsVisible]);
};

export const useHideOnScrollTop = (setIsVisible, className = 'visible') => {
	const lastScroll = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			// If user scrolls up, remove the class
			if (typeof setIsVisible === 'function') {
				if (currentScroll < lastScroll.current) {
					setIsVisible(false);
				}
			}

			lastScroll.current = currentScroll;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Run once on mount

		return () => window.removeEventListener('scroll', handleScroll);
	}, [className, setIsVisible]);
};

export const useOnTargetSectionEnter = (targetSelectors, setIsVisible) => {
	useEffect(() => {
		if (
			!targetSelectors ||
			typeof setIsVisible !== 'function' ||
			targetSelectors === '.'
		)
			return;

		const selectors = targetSelectors.split(',').map((s) => s.trim());
		const targetElements = selectors
			.map((selector) => {
				if (
					selector.startsWith('#') &&
					selector.length > 1 &&
					!selector.endsWith('.') &&
					!selector.endsWith('#')
				) {
					return document.getElementById(selector.substring(1));
				} else if (
					selector.startsWith('.') &&
					selector.length > 1 &&
					!selector.endsWith('.') &&
					!selector.endsWith('#')
				) {
					return document.querySelector(selector);
				} else {
					console.warn(
						"Each selector should start with '#' for ID or '.' for class."
					);
					return null;
				}
			})
			.filter(Boolean);

		if (targetElements.length === 0) return;

		const handleScroll = () => {
			let anyVisibleOrAbove = false;

			for (const el of targetElements) {
				const rect = el.getBoundingClientRect();
				const isBelowViewport = rect.top > window.innerHeight;
				// const isAboveViewport = rect.bottom < 0;

				// If section is visible or above viewport → show drawer
				if (!isBelowViewport) {
					anyVisibleOrAbove = true;
					break;
				}
			}

			if (anyVisibleOrAbove) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // run once initially

		return () => window.removeEventListener('scroll', handleScroll);
	}, [targetSelectors, setIsVisible]);
};

export const useShowAfterTime = (seconds, setIsVisible) => {
	useEffect(() => {
		if (typeof seconds !== 'number' || typeof setIsVisible !== 'function')
			return;

		setIsVisible(false);

		const timer = setTimeout(() => {
			setIsVisible(true);
		}, seconds * 1000);

		return () => clearTimeout(timer); // cleanup on unmount
	}, [seconds, setIsVisible]);
};

export const useShowOnPageBottom = (setIsVisible) => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || window.pageYOffset;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// Check if user reached bottom
			if (setIsVisible) {
				if (scrollTop + windowHeight >= documentHeight) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // run once initially

		return () => window.removeEventListener('scroll', handleScroll);
	}, [setIsVisible]);
};

export const useOnTargetSectionsInView = (targetSelectors, setIsVisible) => {
	useEffect(() => {
		if (!targetSelectors || !setIsVisible || targetSelectors === '.')
			return;

		const selectors = targetSelectors.split(',').map((s) => s.trim());
		const targetElements = selectors
			.map((selector) => {
				if (
					selector.startsWith('#') &&
					selector.length > 1 &&
					!selector.endsWith('.') &&
					!selector.endsWith('#')
				) {
					return document.getElementById(selector.substring(1));
				} else if (
					selector.startsWith('.') &&
					selector.length > 1 &&
					!selector.endsWith('.') &&
					!selector.endsWith('#')
				) {
					return document.querySelector(selector);
				} else {
					console.warn(
						"Each selector should start with '#' for ID or '.' for class."
					);
					return null;
				}
			})
			.filter(Boolean);

		if (targetElements.length === 0) return;

		const handleScroll = () => {
			for (const el of targetElements) {
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								setIsVisible(true);
							} else {
								setIsVisible(false);
							}
						});
					},
					{
						threshold: 0.1, // Trigger when 20% of the section is visible
					}
				);

				observer.observe(el);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // run once initially

		return () => window.removeEventListener('scroll', handleScroll);
	}, [targetSelectors, setIsVisible]);
};

// Will Implement Later
export const useContinuouslyShow = (setIsVisible, time = 1000) => {
	useEffect(() => {
		if (!setIsVisible || !time) return;

		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, time);

		return () => clearInterval(interval);
	}, [setIsVisible, time]);
};

export const hexToRgb = (hex, alpha = 0.6) => {
	hex = hex.replace(/^#/, '');
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((h) => h + h)
			.join('');
	}

	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const handleStyleSwitch = (val, onDataUpdate) => {
	onDataUpdate('globalFeedback.notification.style', val);

	switch (val) {
		case 'notification1':
			onDataUpdate(
				'globalFeedback.notification.bgColor',
				'linear-gradient(to right, #10b981, #059669)'
			);
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: '#fff',
				contentSubTitleColor: '#fff',
			});
			onDataUpdate('globalFeedback.sharedData.position', 'bottom');
			break;

		case 'notification2':
			onDataUpdate('globalFeedback.notification.bgColor', '#bebdd8');
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: '#111827',
				contentSubTitleColor: '#221414',
			});
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitleTypo.fontSize.desktop',
				22
			);
			onDataUpdate('globalFeedback.sharedData.position', 'bottom');
			break;

		case 'notification3':
			onDataUpdate(
				'globalFeedback.notification.bgColor',
				'linear-gradient(to right, #fff7ed, #fffbeb)'
			);
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: '#111827',
				contentSubTitleColor: '#4b5563',
			});
			onDataUpdate(
				'globalFeedback.notification.closeButton.color',
				'#000000'
			);
			onDataUpdate('globalFeedback.sharedData.position', 'bottom');
			break;

		case 'notification4':
			onDataUpdate('globalFeedback.sharedData.position', 'bottomRight');
			onDataUpdate(
				'globalFeedback.notification.bgColor',
				'linear-gradient(to top right, #7e22ce, #ec4899)'
			);
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: '#000000',
				contentSubTitleColor: '#000000',
			});
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitleTypo.fontSize.desktop',
				17
			);
			onDataUpdate(
				'globalFeedback.sharedData.contentTitle',
				'Got a minute?'
			);
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitle',
				'Tell us what you think'
			);
			break;

		case 'notification5':
			onDataUpdate('globalFeedback.sharedData.position', 'bottomRight');
			onDataUpdate('globalFeedback.notification.bgColor', '#fffff');
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: 'white',
				contentSubTitleColor: '#374151',
			});
			onDataUpdate(
				'globalFeedback.sharedData.contentTitle',
				'Quick Feedback'
			);
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitle',
				'30 seconds of your time'
			);
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitleTypo.fontSize.desktop',
				12
			);
			onDataUpdate(
				'globalFeedback.sharedData.colors.contentSubTitleColor',
				'#f1f1f1'
			);
			break;

		case 'notification6':
			onDataUpdate('globalFeedback.sharedData.position', 'bottomRight');
			onDataUpdate('globalFeedback.notification.bgColor', '#fffff');
			onDataUpdate('globalFeedback.sharedData.colors', {
				contentTitleColor: 'white',
				contentSubTitleColor: '#374151',
			});
			onDataUpdate(
				'globalFeedback.sharedData.contentTitle',
				'Voice Feedback'
			);
			onDataUpdate(
				'globalFeedback.sharedData.contentSubTitleTypo.fontSize.desktop',
				12
			);
			break;

		default:
			onDataUpdate('globalFeedback.sharedData.position', 'bottom');
			onDataUpdate(
				'globalFeedback.notification.bgColor',
				'linear-gradient(to right, #10b981, #059669)'
			);
	}
};

export const handleTemplateSwitch = (val, onDataUpdate) => {
	onDataUpdate('globalFeedback.template', val);

	switch (val) {
		case 'defaultDrawer':
			onDataUpdate('globalFeedback.sharedData.position', 'rightCenter');
			break;
		case 'slideIn':
			onDataUpdate('drawer.drawerHeadline', 'Quick Voice Feedback');
			onDataUpdate('globalFeedback.sharedData.position', 'rightCenter');
			onDataUpdate(
				'globalFeedback.sharedData.colors.contentTitleColor',
				'black'
			);
			onDataUpdate(
				'globalFeedback.sharedData.colors.contentSubTitleColor',
				'#404040'
			);
			onDataUpdate(
				'globalFeedback.functionality.showFeedbackOn',
				'always'
			);
			break;
		case 'stickyFeedback':
			onDataUpdate(
				'globalFeedback.sharedData.colors.contentTitleColor',
				'black'
			);
			onDataUpdate('globalFeedback.sharedData.position', 'bottomRight');
			onDataUpdate(
				'globalFeedback.functionality.showFeedbackOn',
				'always'
			);
			onDataUpdate('globalFeedback.stickyFeedback.offset', {
				top: 20,
				right: 20,
				bottom: 20,
				left: 20,
			});
			break;
		case 'notification':
			onDataUpdate('globalFeedback.sharedData.position', 'bottom');
			onDataUpdate(
				'globalFeedback.notification.style',
				'notification2'
			);
			onDataUpdate(
				'globalFeedback.functionality.showFeedbackOn',
				'always'
			);
			break;
	}
};
