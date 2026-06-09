import React from 'react';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';
import Text from '../../Fields/Text/Text';
import SelectField from '../../Fields/SelectControl/SelectControl';
import RangeControl from '../../Fields/RangeControl/RangeControl';
import { ClockIcon } from '../../Utils/icons';

const Submission = () => {
	return (
		<>
			{ /* Numeric Field For Minimam Record Time */ }
			<RangeControl
				title="Minimum Record Time (Seconds)"
				help="Set minimum record time."
				value={ 3 }
				onChange={ ( v ) => console.log( v ) }
				fieldIcon={ <ClockIcon /> }
			/>
			<RangeControl
				title="Maximum Record Time (Seconds)"
				help="Set maximum record time."
				value={ 3 }
				onChange={ ( v ) => console.log( v ) }
				fieldIcon={ <ClockIcon /> }
			/>

			{ /* Error Message Stuff */ }
			<div className="bpl-two-column-style">
				<Text
					title="Success Message"
					help="Write a success message to show after successful submission."
					value={ 'devwithtanin.com' }
					onChange={ ( v ) => console.log( v ) }
				/>
				<SelectField
					title="Choose Error Message Position"
					options={ [
						{ value: 'always', label: 'Always Show' },
						{
							value: 'onScrollDown',
							label: 'Show When User Scrolls Down',
						},
						{
							value: 'onTargetSectionEnter',
							label: 'Show After Your Choosen Sections Appears',
						},
						{
							value: 'timedFeedback',
							label: 'Show After a Few Seconds',
						},
						{
							value: 'scrollEndSection',
							label: 'Show When User Reaches the Bottom of the Page',
						},
						{
							value: 'showWithinSection',
							label: 'Show While In View Your Chosen Sections',
						},
					] }
					value={ 'always' }
					onChange={ ( v ) => console.log( v ) }
				/>
			</div>

			{ /* Error Message Stuff */ }
			<div className="bpl-two-column-style">
				<Text
					title="Error / Fail Message"
					help="Write an error message to show after submission fails."
					value={ 'devwithtanin.com' }
					onChange={ ( v ) => console.log( v ) }
				/>
				<SelectField
					title="Choose Error Message Position"
					options={ [
						{ value: 'always', label: 'Always Show' },
						{
							value: 'onScrollDown',
							label: 'Show When User Scrolls Down',
						},
						{
							value: 'onTargetSectionEnter',
							label: 'Show After Your Choosen Sections Appears',
						},
						{
							value: 'timedFeedback',
							label: 'Show After a Few Seconds',
						},
						{
							value: 'scrollEndSection',
							label: 'Show When User Reaches the Bottom of the Page',
						},
						{
							value: 'showWithinSection',
							label: 'Show While In View Your Chosen Sections',
						},
					] }
					value={ 'always' }
					onChange={ ( v ) => console.log( v ) }
				/>
			</div>

			{ /* // Redirect After Success Submission */ }
			<ToggleControl
				title="Redirect After Success Submission"
				value={ false }
				onChange={ ( v ) => console.log( v ) }
				fieldIcon={ <ClockIcon /> }
			/>
			<Text
				title="Redirect URL"
				help="Enter the URL to redirect to after successful submission."
				value={ 'devwithtanin.com' }
				onChange={ ( v ) => console.log( v ) }
			/>
		</>
	);
};

export default Submission;
