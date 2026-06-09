import React from 'react';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { updateData } from '../../../../../../../bpl-tools/utils/functions';
import IconPicker from '../../../../../admin-pages/Fields/IconPicker/IconPicker';
import {
	video1,
	video2,
	video3,
	video4,
	voice1,
	voice2,
	voice3,
	voice4,
} from '../../../../../admin-pages/Utils/icons';

const General = ( { attributes, setAttributes } ) => {
	const { voiceFeedback, recordingTabs } = attributes;

	return (
		<>
			<PanelBody
				className="bPlPanelBody"
				title={
					<div className="bplvf-panel-title-wrapper">
						<svg viewBox="0 0 24 24" fill="currentColor">
							<rect x="9" y="2" width="6" height="11" rx="3" />
							<path d="M19 10h-2c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-4.08c3.39-.49 6-3.39 6-6.92z" />
						</svg>
						<span>{ __( 'Audio Settings', 'voice-feedback' ) }</span>
					</div>
				}
				initialOpen={ false }
			> 
				<TextControl
					label={ __(
						'Start Recording Button Text',
						'voice-feedback'
					) }
					value={ voiceFeedback.startRecordingText }
					onChange={ ( text ) =>
						setAttributes( {
							voiceFeedback: updateData(
								voiceFeedback,
								text,
								'startRecordingText'
							),
						} )
					}
				/>
			</PanelBody>
		</>
	);
};

export default General;
