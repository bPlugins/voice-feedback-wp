import React from 'react';
import './SettingsHeader.scss';
import BackBtn from './BackBtn';

const SettingsHeader = ( {
	title = '',
	onBackClick,
	onSave,
	onChange,
	titleText,
	saveButtonText,
	isSaving,
	editingId = null,
	copiedId = null,
	handleCopyShortcode,
	isGlobal = false,
	isActive = false,
	onChangeActive = () => {},
} ) => {
	return (
		<div className="vfd-settings-header">
			<div className="left-header">
				<BackBtn onBackClick={ onBackClick } />
				<div className="title">
					<h2>{ title }</h2>
					<input
						type="text"
						placeholder="Voice Feedback Title"
						value={ titleText }
						onChange={ onChange }
					/>
				</div>
			</div>
			<div className="right-header">
				{ editingId &&
					( isGlobal ? (
						<div className="vfd-toggle-group">
							<label htmlFor="voice_feedback_global">
								Active Status
							</label>
							<label className="vfd-toggle">
								<input
									type="checkbox"
									checked={ isActive }
									onChange={ onChangeActive }
								/>
								<span className="vfd-slider"></span>
							</label>
						</div>
					) : (
						<div className="vfd-shortcode-box">
							<code>
								[voice_feedback id={ `"${ editingId }"` }]
							</code>
							<button
								type="button"
								onClick={ () =>
									handleCopyShortcode( editingId )
								}
							>
								{ copiedId === editingId ? 'Copied!' : 'Copy' }
							</button>
						</div>
					) ) }
				<button
					className={ `save-btn ${ isSaving ? 'disabled' : '' }` }
					disabled={ isSaving }
					onClick={ onSave }
				>
					{ saveButtonText }
				</button>
			</div>
		</div>
	);
};

export default SettingsHeader;
