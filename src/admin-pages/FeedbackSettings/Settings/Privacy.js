import React from 'react';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';
import { YoutubeIcon } from '../../Utils/icons';

const Privacy = ( {
	settings,
	updateFeedbackSettings, 
} ) => {
	const privacy = settings.privacy || { ask_name_email: false };
	const { ask_name_email } = privacy;

	return (
		<div className="bplvf-emails-layout">
			{ /* Title / Subtitle of the Page */ }
			<div className="bplvf-emails-page-header">
				<h2>Privacy & Security</h2>
				<p>Configure privacy settings and data collection options for voice feedback.</p>
			</div>

			<div className="bplvf-emails-split-layout">
				{ /* Left sticky sidebar menu */ }
				<div className="bplvf-emails-sidebar">
					<div className="sidebar-nav-list">
						<button className="sidebar-nav-item active">
							<span className="dot-indicator"></span>
							Email Gate
						</button>
					</div>
				</div>

				{ /* Right area with cards */ }
				<div className="bplvf-emails-cards-container">
					<div className="bplvf-settings-card">
						<div className="card-header">
							<div className="card-header-left">
								<h3>Email Gate</h3>
								<p>Ask name and email when user send new voice feedback.</p>
							</div>
							<a
								href="https://www.youtube.com/watch?v=MHB84nrjBXQ"
								target="_blank"
								rel="noopener noreferrer"
								className="bplvf-watch-works-btn"
							>
								<YoutubeIcon className="youtube-icon" />
								<span>Watch how it works</span>
							</a>
						</div>
						<div className="card-content">
							<ToggleControl
								title="Ask name and email when send new voice"
								value={ ask_name_email }  
								onChange={ ( v ) =>
									updateFeedbackSettings( 'privacy.ask_name_email', v )
								}
								description="If enabled, all existing and new feedback blocks across the site will automatically prompt users to enter their name and email address before submitting voice feedback."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
