import React, { useState, useRef, useEffect } from 'react';
import './SlideIn.scss';
import BodyOfVoice from '../../BodyOfVoice';

const SlideIn = ( props ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const innerRef = useRef( null );
	const [ innerHeight, setInnerHeight ] = useState( 0 );
	const { attributes, isVisible } = props;
	const { drawer } = attributes;
	const { drawerHeadline } = drawer;
	const { globalFeedback } = attributes;
	const { sharedData } = globalFeedback;
	const { position, contentTitle, contentSubTitle } = sharedData;

	useEffect( () => {
		const updateHeight = () => {
			if ( innerRef.current ) {
				setInnerHeight( innerRef.current.offsetHeight );
			}
		};

		updateHeight();
		window.addEventListener( 'resize', updateHeight );
		return () => window.removeEventListener( 'resize', updateHeight );
	}, [] );

	return (
		<div
			className={ `slideIn-feedback ${ position } ${
				isVisible ? 'visible' : ''
			} ${ isOpen ? 'open' : '' }` }
			style={ { '--slideInHeight': `${ innerHeight }px` } }
		>
			<div className="slideIn-feedback-inner">
				<div className="slideIn-feedback-toggle">
					<button
						onClick={ () => setIsOpen( ! isOpen ) }
						className="toggle-button"
					>
						<div className="toggle-text">{ drawerHeadline }</div>
					</button>
				</div>

				<div className="slideIn-feedback-content" ref={ innerRef }>
					<h1 className="contentTitle">{ contentTitle }</h1>
					<p className="contentSubTitle">{ contentSubTitle }</p>
					<BodyOfVoice { ...props } />
				</div>
			</div>
		</div>
	);
};

export default SlideIn;
