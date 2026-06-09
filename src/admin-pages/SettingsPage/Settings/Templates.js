import React, { useState, useEffect } from 'react';
import './Templates.scss';
import _get from 'lodash/get';
import { handleTemplateSwitch, renderTemplateComponent } from '../../Utils/functions';
import ProFeaturesCard from '../../Components/Shared/ProFeaturesCard/ProFeaturesCard';

function Templates( { globalData, onDataUpdate, passedProps, onSave, adminUrl } ) {
	const [ rightPaneView, setRightPaneView ] = useState( 'preview' );
	const templates = [
		{
			id: 1,
			title: 'Default Drawer',
			description: 'Slides up from the bottom of the screen.',
			value: 'defaultDrawer',
			gif: 'https://templates.bplugins.com/wp-content/uploads/2025/10/Dev-1.gif',
			graphic: (
				<div className="template-mini-graphic drawer">
					<div className="graphic-header"></div>
					<div className="graphic-content"></div>
					<div className="graphic-drawer">
						<span className="drawer-dot"></span>
					</div>
				</div>
			),
		},
		{
			id: 2,
			title: 'Slide-In Panel',
			description: 'Anchors to the right side of the window.',
			value: 'slideIn',
			gif: 'https://templates.bplugins.com/wp-content/uploads/2025/10/slideIn-banner-vf.gif',
			graphic: (
				<div className="template-mini-graphic slide-in">
					<div className="graphic-header"></div>
					<div className="graphic-content">
						<div className="graphic-sidebar"></div>
					</div>
				</div>
			),
		},
		{
			id: 3,
			title: 'Floating Button',
			description: 'A sticky action button in the corner.',
			value: 'stickyFeedback',
			gif: 'https://templates.bplugins.com/wp-content/uploads/2025/10/Dev-2.gif',
			graphic: (
				<div className="template-mini-graphic floating">
					<div className="graphic-header"></div>
					<div className="graphic-content">
						<div className="graphic-dot"></div>
					</div>
				</div>
			),
		},
		{
			id: 4,
			title: 'Notification Banner',
			description: 'A horizontal strip across the bottom.',
			value: 'notification',
			gif: 'https://templates.bplugins.com/wp-content/uploads/2025/10/notification-banner-vf.gif',
			graphic: (
				<div className="template-mini-graphic banner">
					<div className="graphic-header"></div>
					<div className="graphic-content"></div>
					<div className="graphic-banner"></div>
				</div>
			),
		},
	];

	const currentGlobalTemplate = _get( globalData, 'globalFeedback.template', 'defaultDrawer' );
	
	// Initialize local preview selection to current active template
	const initialSelected = templates.find( t => t.value === currentGlobalTemplate ) || templates[0];
	const [ selectedTemplate, setSelectedTemplate ] = useState( initialSelected );

	// Sync local preview state if the global template changes from elsewhere
	useEffect( () => {
		const active = templates.find( t => t.value === currentGlobalTemplate );
		if ( active ) {
			setSelectedTemplate( active );
		}
	}, [ currentGlobalTemplate ] );

	// Check if globalData is not yet loaded or lacks core fields
	if ( ! globalData || ! globalData.buttons ) {
		return <div className="templates-loading" style={ { padding: '24px', textAlign: 'center', color: '#64748b' } }>Loading templates...</div>;
	}

	const isGloballySelected = currentGlobalTemplate === selectedTemplate.value;

	const handleUseTemplate = () => {
		handleTemplateSwitch(
			selectedTemplate.value,
			onDataUpdate
		);
		if ( typeof onSave === 'function' ) {
			// Trigger instant background save for seamless UX
			setTimeout( onSave, 50 );
		}
	};

	const handleCustomize = () => {
		handleTemplateSwitch(
			selectedTemplate.value,
			onDataUpdate
		);
		if ( typeof onSave === 'function' ) {
			onSave();
		}
		setRightPaneView( 'general' );
	};

	return (
		<div className="templates-layout-container">
			<div className="templates-page-header">
				<h2>Voice Feedback Templates</h2>
				<p>Choose how voice feedback appears on your site. Preview each template before applying it globally.</p>
			</div>

			{/* Split Layout Body */}
			<div className="templates-layout-wrapper">
				{/* Left Column: List of Template Cards */}
				<div className="templates-left-pane">
					<div className="templates-list">
						{ templates.map( ( template ) => {
							const isPreviewActive = selectedTemplate.value === template.value;
							const isCurrentlyActive = currentGlobalTemplate === template.value;

							return (
								<div
									key={ template.id }
									className={ `template-list-item ${
										isPreviewActive ? 'preview-active' : ''
									} ${ isCurrentlyActive ? 'global-active' : '' }` }
									onClick={ () => {
										setSelectedTemplate( template );
										setRightPaneView( 'preview' );
									} }
								>
									{/* Selection bar indicator */}
									{ isPreviewActive && <div className="active-indicator" /> }
									
									{/* Graphic representation */}
									<div className="template-graphic-wrapper">
										{ template.graphic }
									</div>

									{/* Info */}
									<div className="template-info">
										<h4 className="template-info__title">{ template.title }</h4>
										<p className="template-info__desc">{ template.description }</p>
									</div>
								</div>
							);
						}) }
					</div>
					<ProFeaturesCard adminUrl={ adminUrl } style={ { marginTop: '24px' } } />
				</div>	

				{/* Right Column: Live Mock Preview Workspace / Customizer */}
				<div className="templates-right-pane">
					{/* Navigation tabs at the top */}
					<div className="right-pane-tabs">
						<button
							className={ `pane-tab-btn ${ rightPaneView === 'preview' ? 'active' : '' }` }
							onClick={ () => setRightPaneView( 'preview' ) }
						>
							Preview
						</button>
						<button
							className={ `pane-tab-btn ${ rightPaneView === 'general' ? 'active' : '' }` }
							onClick={ () => {
								handleTemplateSwitch( selectedTemplate.value, onDataUpdate );
								setRightPaneView( 'general' );
							} }
						>
							General Settings
						</button>
						<button
							className={ `pane-tab-btn ${ rightPaneView === 'styles' ? 'active' : '' }` }
							onClick={ () => {
								handleTemplateSwitch( selectedTemplate.value, onDataUpdate );
								setRightPaneView( 'styles' );
							} }
						>
							Styles
						</button>
					</div>

					{ rightPaneView === 'preview' && (
						<>
							<div className="mock-browser-wrapper">
								{/* Browser Header Bar */}
								<div className="mock-browser-header">
									<div className="browser-dots">
										<span className="dot dot-red"></span>
										<span className="dot dot-yellow"></span>
										<span className="dot dot-green"></span>
									</div>
									<div className="browser-address">wp-live.local</div>
								</div>

								{/* Simulated Web Page Area */}
								<div className="mock-page-canvas">
									{ selectedTemplate.gif ? (
										<img
											src={ selectedTemplate.gif }
											alt={ selectedTemplate.title }
											className="mock-template-gif"
										/>
									) : (
										<>
											<div className="mock-page-header"></div>
											<div className="mock-page-hero"></div>
											<div className="mock-page-grid">
												<div className="mock-page-card"></div>
												<div className="mock-page-card"></div>
											</div>
										</>
									) }
								</div>
							</div>

							{/* Preview Footer / Actions Bar */}
							<div className="templates-preview-footer">
								<div className="footer-details">
									<h3>{ selectedTemplate.title }</h3>
									<p>{ selectedTemplate.description }</p>
								</div>
								<div className="footer-actions">
									<button
										className="customize-btn-outline"
										onClick={ handleCustomize }
									>
										Customize
									</button>
									<button
										className={ `use-template-btn-solid ${ isGloballySelected ? 'active' : '' }` }
										onClick={ handleUseTemplate }
										disabled={ isGloballySelected }
									>
										{ isGloballySelected ? 'Active' : 'Use This Template' }
									</button>
								</div>
							</div>
						</>
					) }

					{ rightPaneView === 'general' && (
						<div className="templates-customizer-pane">
							{ renderTemplateComponent(
								globalData,
								'general',
								passedProps
							) }
						</div>
					) }

					{ rightPaneView === 'styles' && (
						<div className="templates-customizer-pane">
							{ renderTemplateComponent(
								globalData,
								'styles',
								passedProps
							) }
						</div>
					) }
				</div>
			</div>
		</div>
	);
}

export default Templates;
