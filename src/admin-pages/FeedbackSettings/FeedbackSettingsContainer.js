import React, { useEffect, useState } from 'react';
import '../AllVoiceFeedback/AllFeedback.scss';
import './FeedbackSettings.scss';
import '../SettingsPage/settings.scss';

import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';
import { Check } from '../Utils/icons';
import Emails from './Settings/Emails';
import Privacy from './Settings/Privacy';
import Protections from './Settings/Protections';
import { useFeedbackSettings } from '../Utils/hooks/useFeedbackSettings';
import Toast from '../Components/Shared/Toast/Toast';
import ProFeaturesCard from '../Components/Shared/ProFeaturesCard/ProFeaturesCard';

const FeedbackSettingsContainer = ({ adminUrl }) => {
	const [activeSettings, setActiveSettings] = useState();
	const {
		settings,
		loading,
		saving,
		hasChanges,
		updateFeedbackSettings,
		saveSettings,
		showToast,
		setShowToast,
	} = useFeedbackSettings();

	const settingsTabs = [
		{
			value: 'emailSettings',
			label: 'Email & Notification',
			description: 'Configure email notifications and alert settings.',
			icon: (
				<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
			)
		},
		// { value: "submissionHandle", label: "Submission Handling" },
		// { value: "dataManagement", label: "Data Management & Storage Controls" },
		{
			value: 'protection',
			label: 'Spam Protection',
			badge: 'New',
			description: 'Protect submissions with rate limiting and CAPTCHA.',
			icon: (
				<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
					<path d="M9 12l2 2 4-4" />
				</svg>
			),
		},
		// { value: "analytics", label: "Analytics / Insights" },
		{
			value: 'privacy',
			label: 'Privacy & Security',
			description: 'Manage privacy preferences and data security controls.',
			icon: (
				<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				</svg>
			)
		},
	].filter(Boolean);

	useEffect(() => {
		if (!activeSettings && settingsTabs.length > 0) {
			setActiveSettings(settingsTabs[0].value);
		}
	}, [activeSettings, settingsTabs]);

	if (loading) {
		return;
	} 

	return (
		<>
			<Toast
				show={showToast}
				onClose={() => setShowToast(false)}
				text="Successfully Updated!"
			/>
			<Header title="Settings">
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					}}
				>
					<button
						className={`save-btn ${saving ? 'saving' : ''} ${!hasChanges && !saving ? 'saved' : 'has-changes'
							}`}
						onClick={saveSettings}
						disabled={!hasChanges || saving}
					>
						{saving ? (
							'Saving...'
						) : !hasChanges ? (
							<>
								<Check className="check-icon" /> Saved
							</>
						) : (
							'Save Changes'
						)}
					</button>
				</div>
			</Header>

			<div className="vfd-body-content">
				<div className="vfd-settings-content">
					{settingsTabs.length > 1 && (
						<div className="vfd-settings-tab">
							{settingsTabs.map((tab) => {
								const isActive = activeSettings === tab.value;
								return (
									<button
										key={tab.value}
										className={`tab-btn ${isActive ? 'active' : ''
											}`}
										onClick={() =>
											setActiveSettings(tab.value)
										}
									>
										{isActive && (
											<div className="active-indicator" />
										)}
										{tab.badge && (
											<span className="tab-badge">
												{tab.badge}
											</span>
										)}
										<div className="tab-graphic-wrapper">
											<div className={`tab-mini-graphic ${tab.value}`}>
												{tab.icon}
											</div>
										</div>
										<div className="tab-info">
											<h4 className="tab-info__title">
												{tab.label}
											</h4>
											<p className="tab-info__desc">
												{tab.description}
											</p>
										</div>
									</button>
								);
							})}

							<ProFeaturesCard adminUrl={adminUrl} />
						</div>
					)}

					<div
						className={`vfd-settings-tab-content ${settingsTabs.length <= 1 ? 'full-width' : ''
							}`}
					>
						{activeSettings === 'emailSettings' && (
							<Emails
								settings={settings}
								updateFeedbackSettings={
									updateFeedbackSettings
								} 
							/>
						)}
						{activeSettings === 'protection' && (
							<Protections
								settings={settings}
								updateFeedbackSettings={
									updateFeedbackSettings
								}
							/>
						)}
						{activeSettings === 'privacy' && (
							<Privacy
								settings={settings}
								updateFeedbackSettings={
									updateFeedbackSettings
								} 
							/>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default FeedbackSettingsContainer;
