const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');

const plugins = defaultConfig.plugins.filter((p) => {
	if (
		Object.values(p).length === 2 &&
		Object.values(p)?.[1]['filename'] &&
		Object.values(p)?.[1]['filename'] === '[name]-rtl.css'
	) {
		return false;
	}
	return true;
});

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		settings: './src/admin-pages/SettingsPage/settingsPage.js',
		'all-feedbacks':
			'./src/admin-pages/AllVoiceFeedback/allVoiceFeedback.js',
		'user-feedback': './src/admin-pages/UsersFeedbacks/usersFeedbacks.js',
		'admin-dashboard': './src/admin-dashboard/admin.js',
		'global-voice-feedback':
			'./src/admin-pages/SettingsPage/settingsPage.js',
		'feedback-settings':
			'./src/admin-pages/FeedbackSettings/feedbackSettings.js',
	},
	plugins: [...plugins, new ESLintPlugin()],
	optimization: {},
};
