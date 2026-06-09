import { createRoot } from 'react-dom/client';

import './style.scss';
import Styles from './Components/Common/Styles';
import VoiceRecorder from './Components/Common/VoiceFeedback';

document.addEventListener( 'DOMContentLoaded', () => {
	const voiceFeedbackEls = document.querySelectorAll(
		'.wp-block-bplvf-voice-feedback'
	);
	voiceFeedbackEls.forEach( ( voiceFeedbackEl ) => {
		const attributes = JSON.parse( voiceFeedbackEl.dataset.attributes );
		const nonce = voiceFeedbackEl.dataset.nonce;
		createRoot( voiceFeedbackEl ).render(
			<>
				<Styles attributes={ attributes } id={ voiceFeedbackEl.id } />
				<VoiceRecorder
					attributes={ attributes }
					id={ voiceFeedbackEl.id }
					nonce={ nonce }
				/>
			</>
		);

		voiceFeedbackEl?.removeAttribute( 'data-attributes' );
	} );
} );
