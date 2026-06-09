import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { TabPanel, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Style from './Style/Style';
import General from './General/General';
import { generalStyleTabs } from '../../../utils/options';

const Settings = ( { attributes, setAttributes, device } ) => {
	const { alignment } = attributes;

	const pricingUrl = `${window.voiceRecorder?.ajaxUrl ? window.voiceRecorder.ajaxUrl.split('wp-admin')[0] + 'wp-admin/' : '/wp-admin/'}admin.php?page=bplvf-dashboard#/pricing`;

	return (
		<>
			<InspectorControls>
				{ false && (
					<div style={ { padding: '15px' } }>
						Stuck with a plugin? Get it customized fast—
						<a
							target="_blank"
							rel="noreferrer"
							href="https://bplugins.com/services"
						>
							{ ' ' }
							book now!
						</a>
					</div>
				) }

				<TabPanel
					className="bPlTabPanel"
					activeClass="activeTab"
					tabs={ generalStyleTabs }
				>
					{ ( tab ) => (
						<>
							{ 'general' == tab.name && (
								<General
									attributes={ attributes }
									setAttributes={ setAttributes }
									device={ device }
								/>
							) }

							{ 'style' == tab.name && (
								<Style
									attributes={ attributes }
									setAttributes={ setAttributes }
									device={ device }
								/>
							) }
						</>
					) }
				</TabPanel>

				<PanelBody
					title={
						<div className="bplvf-panel-title-wrapper bplvf-premium-title-wrapper">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
							</svg>
							<span>{ __( "What's New in Premium", 'voice-feedback' ) }</span>
							<span className="bplvf-premium-badge">PRO</span>
						</div>
					}
					initialOpen={ true }
				>
					<div className="bplvf-premium-panel-content">
						<p className="bplvf-premium-desc">
							Unlock the full power of Voice Feedback with our Pro features:
						</p>

						<ul className="bplvf-premium-features-list">
							<li>
								<strong>Email Notifications:</strong> Instant admin alerts and customizable templates.
							</li>
							<li>
								<strong>Screen Recording:</strong> Capture user screen activity with voice feedback.
							</li>
							<li>
								<strong>Custom Icon Branding:</strong> Choose premium layouts & custom icon picker.
							</li>
							<li>
								<strong>Global Drawer Position:</strong> Easily position the drawer on Left or Right.
							</li>
							<li>
								<strong>Typography & Styling:</strong> Complete control over fonts, colors, and margins.
							</li>
						</ul>

						<a
							href={ pricingUrl }
							target="_blank"
							rel="noreferrer"
							className="bplvf-premium-cta-btn"
						>
							Upgrade to Pro ➜
						</a>
					</div>
				</PanelBody>
			</InspectorControls>

			{ /* Block Toolbar for alignment */ }
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( newAlignment ) =>
						setAttributes( { alignment: newAlignment || 'center' } )
					}
				/>
			</BlockControls>
		</>
	);
};
export default Settings;
