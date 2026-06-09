import { useState } from 'react';
import BodyOfVoice from '../../BodyOfVoice';

const StickyFeedback = ( props ) => {
	const [ showFeedback, setShowFeedback ] = useState( false );
	const { attributes, isVisible } = props;
	const { globalFeedback } = attributes;
	const { sharedData, stickyFeedback } = globalFeedback;
	const { contentTitle, contentSubTitle } = sharedData;
	const { buttonContent, position } = stickyFeedback;
	const { contentType, icon, text } = buttonContent; 

	return (
		<div className={ `bplvf-sticky-feedback ${ position }` }>
			<button
				onClick={ () => setShowFeedback( ! showFeedback ) }
				className={ `feedback-toggle ${ isVisible ? 'visible' : '' } ${
					showFeedback ? 'active' : ''
				}` }
				aria-label="Toggle feedback"
			>
				{ contentType === 'icon' ? (
					<span dangerouslySetInnerHTML={ { __html: icon } }></span>
				) : (
					<span>{ text }</span>
				) }
			</button>

			<div
				className={ `sticky-feedback-content ${
					showFeedback ? 'show' : ''
				}` }
			>
				<h1 className="contentTitle">{ contentTitle }</h1>
				<p className="contentSubTitle">{ contentSubTitle }</p>
				<BodyOfVoice { ...props } />
			</div>
		</div>
	);
};

export default StickyFeedback;
