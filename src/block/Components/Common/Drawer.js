import React, { useState } from 'react';
import BodyOfVoice from './BodyOfVoice';
import { CloseIcon } from '../../../admin-pages/Utils/icons';

const Drawer = ( props ) => {
	const { attributes, isVisible } = props;
	const [ isDrawerOpen, setIsDrawerOpen ] = useState( false );
	const { drawer } = attributes;
	const { drawerHeadline } = drawer;

	return (
		<div className="drawer-voice-feedback">
			{ /* 🔘 Floating toggle button */ }
			{ ! isDrawerOpen && (
				<button
					className={ `voice-feedback-toggle ${
						isVisible ? 'visible' : ''
					} delayed` }
					onClick={ () => setIsDrawerOpen( true ) }
				>
					{ drawerHeadline }
				</button>
			) }
			{ /* 🧾 Drawer Content */ }
			<div
				className={ `voice-feedback-drawer ${
					isDrawerOpen ? 'open' : ''
				}` }
			>
				<div className="drawer-header">
					<h3>{ drawerHeadline }</h3>
					<button
						className="drawer-close"
						onClick={ () => setIsDrawerOpen( false ) }
					>
						<CloseIcon />
					</button>
				</div>

				<div className="drawer-body">
					<BodyOfVoice { ...props } />
				</div>
			</div>
		</div>
	);
};

export default Drawer;
