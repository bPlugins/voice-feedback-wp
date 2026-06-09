import React, { useEffect, useState } from 'react';
import RangeControl from '../../Fields/RangeControl/RangeControl';
import Typography from '../../Fields/Typography/Typography';
import Colors from '../../Fields/Colors/Colors';
import BoxControl from '../../Fields/BoxControl/BoxControl';

import _get from 'lodash/get';
import Border from '../../Fields/Border/Border';
import Color from '../../Fields/Color/Color';
import UnitControl from '../../Fields/UnitControl/UnitControl';
import Alignment from '../../Fields/Alignment/Alignment';

const Styles = ( { formData, onFormDataUpdate } ) => {
	const [ activeSettings, setActiveSettings ] = useState();
	const { settings } = formData;
	const { voiceFeedback, recordingTabs } = settings;

	const setSettings = ( setting ) => {
		setActiveSettings( setting );
	};

	const settingsTabs = [
		{
			label: 'Container',
			value: 'container',
		},
		{
			label: 'Record Buttons',
			value: 'buttons',
		},
	].filter( Boolean );

	useEffect( () => {
		if ( ! activeSettings && settingsTabs.length > 0 ) {
			setActiveSettings( settingsTabs[ 0 ].value );
		}
	}, [ activeSettings, settingsTabs ] );

	return (
		<>
			<div className="settings">
				<div className="vfd-sidebar-nav">
					{ settingsTabs.map( ( tab ) => (
						<button
							key={ tab.value }
							onClick={ () => setSettings( tab.value ) }
							className={ `nav-button ${
								activeSettings === tab.value ? 'active' : ''
							}` }
						>
							{ /* <div className="nav-icon">{tab.icon}</div> */ }
							<span className="nav-text">{ tab.label }</span>
						</button>
					) ) }
				</div>

				<div className="vfd-main-settings">
					{ activeSettings === 'container' && (
						<>
							{ /* <ContentHeader title="Container Styles" /> */ }

							<UnitControl
								title="Container Width"
								value={ _get(
									formData,
									'settings.container.width.desktop'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.container.width.desktop',
										val
									)
								}
							/>

							<Border
								title="Container Border"
								value={ _get(
									formData,
									'settings.container.border'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.container.border',
										val
									)
								}
							/>
							<RangeControl
								title="Border Radius"
								value={ _get(
									formData,
									'settings.container.borderRadius'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.container.borderRadius',
										val
									)
								}
								help="Border radius of the buttons in PX"
							/>

							<Color
								title="Background Color"
								isHeader={ true }
								value={ _get(
									formData,
									'settings.container.bgColor'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.container.bgColor',
										val
									)
								}
							/>

							<Alignment
								value={ _get( formData, 'settings.alignment' ) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.alignment',
										val
									)
								}
								title="Container Alignment"
								positions={ [
									{
										value: 'left',
										label: 'Left',
										icon: '⬅️',
									},
									{
										value: 'center',
										label: 'Center',
										icon: '↔️',
									},
									{
										value: 'right',
										label: 'Right',
										icon: '➡️',
									},
								] }
							/>

							<BoxControl
								title="Container Padding"
								name="Padding"
								value={ _get(
									formData,
									'settings.container.padding'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.container.padding',
										val
									)
								}
							/>
						</>
					) } 

					{ activeSettings === 'buttons' && (
						<> 
							<BoxControl
								title="Buttons Padding"
								name="Padding"
								value={ _get(
									formData,
									'settings.buttons.padding'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.buttons.padding',
										val
									)
								}
							/>

							<Colors
								title="Button Colors (Normal)"
								value={ _get(
									formData,
									'settings.buttons.normal'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.buttons.normal',
										val
									)
								}
							/>

							<Colors
								title="Button Colors (Hover)"
								value={ _get(
									formData,
									'settings.buttons.hover'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.buttons.hover',
										val
									)
								}
							/>

							<RangeControl
								title="Buttons Border Radius"
								value={ _get(
									formData,
									'settings.buttons.borderRadius'
								) }
								onChange={ ( val ) =>
									onFormDataUpdate(
										'settings.buttons.borderRadius',
										val
									)
								}
								help="Border radius of the buttons in PX"
							/>
						</>
					) }
				</div>
			</div>
		</>
	);
};

export default Styles;
