import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import VoiceRecorder from '../Common/VoiceFeedback';
// import "../../style.scss";
import Settings from './Settings/Settins';
import Styles from '../Common/Styles';
const Edit = ( props ) => {
	const { attributes, setAttributes, clientId, device } = props;

	const id = `main-wrapper-${ clientId }`;

	return (
		<>
			<Settings
				attributes={ attributes }
				setAttributes={ setAttributes }
				device={ device }
			/>
			<Styles attributes={ attributes } id={ id } device={ device } />

			<div { ...useBlockProps() } id={ id }>
				<VoiceRecorder id={ id } attributes={ attributes } />
			</div>
		</>
	);
};

export default withSelect( ( select ) => {
	const { getDeviceType } = select( 'core/editor' );
	return {
		device: getDeviceType()?.toLowerCase(),
	};
} )( Edit );
