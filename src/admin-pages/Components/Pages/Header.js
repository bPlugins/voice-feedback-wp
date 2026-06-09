import React from 'react';
import './Header.scss';

const Header = ( { children, title = 'Voice Feedback' } ) => {
	return (
		<>
			<div className="vfd-header">
				<div className="vfd-header-name">
					<img
						src="https://ps.w.org/voice-feedback/assets/icon-128x128.png?rev=3475105"
						alt="Voice Feedback"
						className="vfd-header-logo"
					/>
					<h1>{ title }</h1>
				</div>

				{ children }
			</div>
		</>
	);
};

export default Header;
