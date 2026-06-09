import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	BorderControl,
	RangeControl,
	TabPanel,
	PanelRow,
} from '@wordpress/components';
import {
	ColorControl,
	Typography,
	Label,
	Device,
} from '../../../../../../../bpl-tools/Components';
import {
	tabController,
	updateData,
} from '../../../../../../../bpl-tools/utils/functions';
import {
	emUnit,
	perUnit,
	pxUnit,
	remUnit,
} from '../../../../../../../bpl-tools/utils/options';
import { SpaceControl } from '../../../../../../../bpl-tools/Components/Deprecated';

const Style = ( { attributes, setAttributes, device } ) => {
	const { container, buttons, recordingTabs, voiceFeedback } = attributes;
	const { border, bgColor, width, borderRadius } = container;
	const { normal, hover, typo, padding } = buttons;

	const colors = [
		{ name: 'White', color: '#ffffff' },
		{ name: 'Black', color: '#00000' },
		{ name: 'Sky Blue', color: '#bbccfc' },
	];

	return (
		<>
			<PanelBody
				className="bPlPanelBody"
				initialOpen={ true }
				title={
					<div className="bplvf-panel-title-wrapper">
						<svg viewBox="0 0 24 24" fill="currentColor">
							<rect x="4" y="4" width="16" height="16" rx="3" />
						</svg>
						<span>{ __( 'Container', 'voice-feedback' ) }</span>
					</div>
				}
			>
				<PanelRow>
					<Label>{ __( 'Width', 'voice-feedback' ) }</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={ width[ device ] }
					onChange={ ( val ) => {
						const parsed = val.match( /^(\d+)(\D+)$/ );
						if ( ! parsed ) return;

						let [ _, num, unit ] = parsed;
						num = parseInt( num );

						// Clamp value to 100 if unit is '%'
						if ( unit === '%' && num > 100 ) {
							num = 100;
						}

						const newValue = `${ num }${ unit }`;

						setAttributes( {
							container: updateData(
								container,
								newValue,
								'width',
								device
							),
						} );
					} }
					units={ [ pxUnit(), perUnit(), emUnit(), remUnit() ] }
				/>

				<BorderControl
					className="mt20"
					colors={ colors }
					label={ __( 'Border' ) }
					onChange={ ( val ) =>
						setAttributes( {
							container: updateData( container, val, 'border' ),
						} )
					}
					value={ border }
				/>

				<RangeControl
					className="mt20"
					label={ __( 'Border Radius', 'voice-feedback' ) }
					value={ borderRadius }
					onChange={ ( size ) =>
						setAttributes( {
							container: updateData(
								container,
								size,
								'borderRadius'
							),
						} )
					}
					min={ 0 }
					max={ 100 }
				/>

				<ColorControl
					className="mt10"
					label={ __( 'Background Color', 'voice-feedback' ) }
					value={ bgColor }
					onChange={ ( color ) =>
						setAttributes( {
							container: updateData(
								container,
								color,
								'bgColor'
							),
						} )
					}
				/>

				<SpaceControl
					label={ __( 'Padding', 'voice-feedback' ) }
					defaults={ {
						side: 4,
						top: '10px',
						right: '10px',
						bottom: '10px',
						left: '10px',
					} }
					value={ container.padding }
					onChange={ ( val ) =>
						setAttributes( {
							container: updateData( container, val, 'padding' ),
						} )
					}
				/>
			</PanelBody>

			{ /* Button's */ }
			<PanelBody
				initialOpen={ false }
				title={
					<div className="bplvf-panel-title-wrapper">
						<svg viewBox="0 0 24 24" fill="currentColor">
							<rect x="2" y="8" width="20" height="8" rx="3" />
						</svg>
						<span>{ __( 'Buttons', 'voice-feedback' ) }</span>
					</div>
				}
				className="bPlPanelBody"
			>
				<Typography
					label={ __( 'Typography', 'voice-feedback' ) }
					value={ typo }
					onChange={ ( typo ) =>
						setAttributes( {
							buttons: updateData( buttons, typo, 'typo' ),
						} )
					}
				/>

				<RangeControl
					className="mt20"
					label={ __( 'Border Radius', 'voice-feedback' ) }
					value={ buttons.borderRadius }
					onChange={ ( size ) =>
						setAttributes( {
							buttons: updateData(
								buttons,
								size,
								'borderRadius'
							),
						} )
					}
					min={ 0 }
					max={ 50 }
				/>
				<SpaceControl
					className="mt20"
					defaults={ { side: 4 } }
					label={ __( 'Padding', 'voice-feedback' ) }
					value={ padding }
					onChange={ ( val ) =>
						setAttributes( {
							buttons: updateData( buttons, val, 'padding' ),
						} )
					}
				/>

				<TabPanel
					className="bPlTabPanel small mt20"
					activeClass="activeTab"
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'voice-feedback' ),
						},
						{
							name: 'hover',
							title: __( 'Hover', 'voice-feedback' ),
						},
					] }
					onSelect={ tabController }
				>
					{ ( tab ) => (
						<>
							{ 'normal' === tab.name && (
								<>
									<ColorControl
										className="mt10"
										label={ __(
											'Text Color',
											'voice-feedback'
										) }
										value={ normal.color }
										onChange={ ( value ) =>
											setAttributes( {
												buttons: updateData(
													buttons,
													value,
													'normal',
													'color'
												),
											} )
										}
										defaultColor="#ffffff"
									/>
									<ColorControl
										label={ __(
											'Background Color',
											'voice-feedback'
										) }
										value={ normal.bgColor }
										onChange={ ( value ) =>
											setAttributes( {
												buttons: updateData(
													buttons,
													value,
													'normal',
													'bgColor'
												),
											} )
										}
										defaultColor="null"
									/>
								</>
							) }

							{ 'hover' === tab.name && (
								<>
									<ColorControl
										className="mt10"
										label={ __(
											'Text Color',
											'voice-feedback'
										) }
										value={ hover.color }
										onChange={ ( value ) =>
											setAttributes( {
												buttons: updateData(
													buttons,
													value,
													'hover',
													'color'
												),
											} )
										}
										defaultColor="#ffffff"
									/>
									<ColorControl
										label={ __(
											'Background Color',
											'voice-feedback'
										) }
										value={ hover.bgColor }
										onChange={ ( value ) =>
											setAttributes( {
												buttons: updateData(
													buttons,
													value,
													'hover',
													'bgColor'
												),
											} )
										}
										defaultColor="null"
									/>
								</>
							) }
						</>
					) }
				</TabPanel>
			</PanelBody>
		</>
	);
};

export default Style;
