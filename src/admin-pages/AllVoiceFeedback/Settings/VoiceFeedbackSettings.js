import ContentHeader from '../../Components/Shared/Shared/ContentHeader';
import IconPicker from '../../Fields/IconPicker/IconPicker';
import Text from '../../Fields/Text/Text';
import _get from 'lodash/get';
import {
	video1,
	video2,
	video3,
	video4,
	voice1,
	voice2,
	voice3,
	voice4,
} from '../../Utils/icons';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';

const VoiceFeedbackSettings = ( {
	formData,
	onFormDataUpdate 
} ) => {
	const { settings } = formData;
	const { voiceFeedback } = settings;

	return (
		<>   
			<Text
				value={ _get(
					formData,
					'settings.voiceFeedback.startRecordingText'
				) }
				onChange={ ( val ) =>
					onFormDataUpdate(
						'settings.voiceFeedback.startRecordingText',
						val
					)
				}
				title="Start Recording Button Text"
			/> 
		</>
	);
};

export default VoiceFeedbackSettings;
