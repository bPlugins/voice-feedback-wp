 
const ProFeaturesCard = ( { adminUrl, style = {} } ) => {
	const pricingUrl = `${ adminUrl || '' }admin.php?page=bplvf-dashboard#/pricing`;
	return (
		<div className="vfd-pro-features-card" style={ style }>
			<div className="vfd-pro-badge-tilted">PRO</div>
			<h3>Unlock Pro features</h3>
			<ul className="vfd-pro-features-list">
				{ /* 1. Email Notifications & SMTP Alerts */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Enable Email Notifications</span>
				</li>
				{ /* 2. Custom Icon Branding */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Custom Icon Branding</span>
				</li>
				{ /* 3. Screen Recording & Capture */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<path d="M23 7l-7 5 7 5V7z" />
							<rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Screen Recording & Capture</span>
				</li>
				{ /* 4. Advanced Display & Scroll Triggers */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Advanced Display & Scroll Triggers</span>
				</li>
				{ /* 5. Complete Typography Control */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<polyline points="4 7 4 4 20 4 20 7" />
							<line x1="9" y1="20" x2="15" y2="20" />
							<line x1="12" y1="4" x2="12" y2="20" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Complete Typography Control</span>
				</li>
				{ /* 6. Positioning & Offset Alignment */ }
				<li>
					<span className="vfd-pro-feature-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round">
							<polyline points="5 9 2 12 5 15" />
							<polyline points="9 5 12 2 15 5" />
							<polyline points="15 19 12 22 9 19" />
							<polyline points="19 9 22 12 19 15" />
							<line x1="2" y1="12" x2="22" y2="12" />
							<line x1="12" y1="2" x2="12" y2="22" />
						</svg>
					</span>
					<span className="vfd-pro-feature-text">Positioning & Offset Alignment</span>
				</li>
			</ul>
			<a
				className="vfd-pro-upgrade-btn"
				href={ pricingUrl }
				style={ { display: 'block', textDecoration: 'none', boxSizing: 'border-box' } }
			>
				Get Pro
			</a>
		</div>
	);
};

export default ProFeaturesCard;
