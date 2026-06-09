import { createRoot } from 'react-dom/client';
import AllFeedbackContainer from './AllFeedbackContainer';

document.addEventListener( 'DOMContentLoaded', () => {
	const settingsPageEl = document.getElementById( 'allFeedbackPageWrapper' );
	const info = settingsPageEl.dataset.info;
	const { adminUrl } = JSON.parse( info );

	createRoot( settingsPageEl ).render(
		<AllFeedbackContainer adminUrl={ adminUrl } />
	);
} );
