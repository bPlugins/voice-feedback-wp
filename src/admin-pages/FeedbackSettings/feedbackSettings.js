import { createRoot } from 'react-dom/client';
import FeedbackSettingsContainer from './FeedbackSettingsContainer';

document.addEventListener( 'DOMContentLoaded', () => {
	const pageWrapperEl = document.getElementById(
		'bplvfFeedbackSettingsWrapper'
	);
	const info = pageWrapperEl.dataset.info;
	const { adminUrl } = JSON.parse( info );

	createRoot( pageWrapperEl ).render(
		<FeedbackSettingsContainer
			user={ pageWrapperEl.dataset.user } 
			adminUrl={ adminUrl }
		/>
	);
} );
