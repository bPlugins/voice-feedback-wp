import { createRoot } from 'react-dom/client';
import SettingsContainer from './SettingsContainer';

document.addEventListener( 'DOMContentLoaded', () => {
	const settingsPageEl = document.getElementById( 'vfdSettingsWrapper' );
	const info = settingsPageEl.dataset.info;
	const { adminUrl } = JSON.parse( info );

	createRoot( settingsPageEl ).render( <SettingsContainer adminUrl={ adminUrl } /> );
} );
