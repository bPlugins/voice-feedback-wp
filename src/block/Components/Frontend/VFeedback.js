import React from 'react';
import VoiceRecorder from '../Common/VoiceFeedback';

const VFeedback = ( { attributes, id } ) => {
	return (
		<div
			id={ `main-wrapper-${ id }` }
			style={ { width: '100%', maxWidth: '100%' } }
		>
			<VoiceRecorder attributes={ attributes } id={ id } />
		</div>
	);
};

export default VFeedback;
