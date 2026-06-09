import React from 'react';
import BodyOfVoice from './BodyOfVoice';

const WithoutDrawer = ( props ) => {
	const { attributes } = props;
	const { alignment } = attributes;

	return (
		<div className={ `body-voice-feedback ${ alignment }` }>
			<BodyOfVoice { ...props } />
		</div>
	);
};

export default WithoutDrawer;
