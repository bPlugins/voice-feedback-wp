import { createRoot } from 'react-dom/client';
import UsersFeedbacksContainer from './UsersFeedbacksContainer';

document.addEventListener('DOMContentLoaded', () => {
	const settingsPageEl = document.getElementById(
		'vfdUsersFeedbacksWrapper'
	);
	const adminUrl = settingsPageEl.dataset.adminUrl;
	createRoot(settingsPageEl).render(
		<UsersFeedbacksContainer
			user={settingsPageEl.dataset.user}
			adminUrl={adminUrl}
		/>
	);
});
