import React from 'react';
import CheckboxControl from '../../Fields/CheckboxControl/CheckboxControl';
import { DatabaseIcon } from '../../Utils/icons';
import NumberControl from '../../Fields/NumberControl/NumberControl';

const DataManagement = () => {
	return (
		<>
			<CheckboxControl
				title="Feedback Storage Type"
				value={ 'post' }
				onChange={ ( v ) => console.log( v ) }
				options={ [
					{ label: 'Post (Default)', value: 'post' },
					{ label: 'Database', value: 'database' },
					{ label: 'Wordpress Media Library', value: 'wpMedia' },
					{ label: 'Cloud', value: 'cloud' },
				] }
				fieldIcon={ <DatabaseIcon /> }
			/>
			<div className="bpl-two-column-style">
				<NumberControl
					title="Auto Delete After"
					value={ 1 }
					onChange={ ( v ) => console.log( v ) }
					min={ 1 }
					max={ 100 }
					step={ 1 }
					placeholder="Auto Delete After"
					help="Auto Delete After"
				/>
				<NumberControl
					title="Max Storage Limit"
					value={ 1 }
					onChange={ ( v ) => console.log( v ) }
					min={ 1 }
					max={ 100 }
					step={ 1 }
					placeholder="Auto Delete After"
					help="Auto Delete After"
				/>
			</div>
		</>
	);
};

export default DataManagement;
