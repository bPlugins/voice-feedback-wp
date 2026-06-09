import React, { useState } from 'react';
import './AllFeedback.scss';
import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';
import SettingsHeader from '../Components/Pages/SettingsHeader';
import { defaultValues } from '../Utils/options';
import { Delete, Edit } from '../Utils/icons';
import FloatingBulkActions from '../Components/FloatingBulkAction/FloatingBulkActions';
import DeleteModal from '../Components/Shared/DeleteModal/DeleteModal';
import _get from 'lodash/get';
import _set from 'lodash/set';
import _cloneDeep from 'lodash/cloneDeep';
import Styles from '../../block/Components/Common/Styles';
import VoiceFeedbackSettings from './Settings/VoiceFeedbackSettings';
import VFeedback from '../../block/Components/Frontend/VFeedback';
import { useFeedbackBlock } from '../Utils/hooks/useFeedbackBlock';
import Toast from '../Components/Shared/Toast/Toast';
import ContainerStyles from './Settings/ContainerStyles';
import ButtonsStyles from './Settings/ButtonsStyles';
import ScrollToCardLayout from '../Components/Shared/ScrollToCardLayout';
import ProFeaturesCard from '../Components/Shared/ProFeaturesCard/ProFeaturesCard';

const AllFeedbackContainer = ({ adminUrl }) => {
	const [showToast, setShowToast] = useState(false);
	const { items, saveItem, deleteItem, getItem } = useFeedbackBlock();

	const [view, setView] = useState('list'); // list | create
	const [editingId, setEditingId] = useState(null);
	const [formData, setFormData] = useState(_cloneDeep(defaultValues));

	const [selectedItems, setSelectedItems] = useState(new Set());
	const [copiedId, setCopiedId] = useState(null);

	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [deleteQueue, setDeleteQueue] = useState([]);
	const [isSaved, setIsSaved] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const allTabs = [
		{ label: 'General Settings', value: 'general' },
		{ label: 'Container Styles', value: 'containerStyles' },
		{ label: 'Button Styles', value: 'buttonsStyles' },
	];

	const handleAddOrEdit = async (id = null) => {
		if (id) {
			setEditingId(id);
			const url = new URL(window.location);
			url.searchParams.set('id', id);
			window.history.replaceState(null, '', url);

			const data = await getItem(id);

			const formatted = {
				title: data.title,
				settings: data.settings,
			};
			setFormData(formatted);
			setEditingId(id);
			setView('create');
		} else {
			const url = new URL(window.location);
			url.searchParams.delete('id');
			window.history.replaceState(null, '', url);

			setFormData(_cloneDeep(defaultValues));
			setEditingId(null);
			setView('create');
		}
	};

	const handleSave = async () => {
		setIsSaving(true);

		const payload = {
			id: editingId || undefined,
			title: formData.title,
			settings: formData.settings || {},
			isActive: formData.isActive,
		};

		const saved = await saveItem(payload);
		setShowToast(true);
		setIsSaving(false);

		if (saved?.id && !editingId) {
			setEditingId(saved?.id);
			const url = new URL(window.location);
			url.searchParams.set('id', saved?.id);
			window.history.replaceState(null, '', url);
		}
	};

	// -----------------------------
	// Delete
	// -----------------------------
	const requestDelete = (id) => {
		setDeleteQueue([id]);
		setShowDeleteConfirm(true);
	};

	const requestBulkDelete = () => {
		if (selectedItems.size === 0) return;
		setDeleteQueue(Array.from(selectedItems));
		setShowDeleteConfirm(true);
	};

	const confirmDelete = async () => {
		for (const id of deleteQueue) {
			await deleteItem(id);
		}
		setSelectedItems(new Set());
		setDeleteQueue([]);
		setShowDeleteConfirm(false);
	};

	// -----------------------------
	// UI Helpers
	// -----------------------------
	const toggleSelection = (id) => {
		const setNew = new Set(selectedItems);
		setNew.has(id) ? setNew.delete(id) : setNew.add(id);
		setSelectedItems(setNew);
	};

	const toggleSelectAll = () => {
		if (selectedItems.size === items.length) {
			setSelectedItems(new Set());
		} else {
			setSelectedItems(new Set(items.map((i) => i.id)));
		}
	};

	const handleBackToList = () => {
		const url = new URL(window.location);
		url.searchParams.delete('id');
		window.history.replaceState(null, '', url);

		setView('list');
		setEditingId(null);
		// Deep copy defaultValues to fully reset nested state
		setFormData(_cloneDeep(defaultValues));
	};

	const handleCopyShortcode = async (id) => {
		const shortcode = `[voice_feedback id="${id}"]`;

		try {
			await navigator.clipboard.writeText(shortcode);
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 2000);
		} catch (err) {
			const textArea = document.createElement('textarea');
			textArea.value = shortcode;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);

			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 2000);
		}
	};

	const onFormDataUpdate = (path, value) => {
		setFormData((prev) => {
			const updated = { ...prev };
			_set(updated, path, value);
			return updated;
		});
	}; 

	if (view === 'create') {
		return (
			<>
				<Toast
					show={showToast}
					onClose={() => setShowToast(false)}
				/>
				<SettingsHeader
					onBackClick={handleBackToList}
					onSave={handleSave}
					titleText={_get(formData, 'title')}
					onChange={(e) =>
						onFormDataUpdate('title', e.target.value)
					}
					saveButtonText={
						isSaving ? 'Saving...' : isSaved ? 'Saved' : 'Save'
					}
					isSaving={isSaving}
					editingId={editingId}
					handleCopyShortcode={handleCopyShortcode}
					copiedId={copiedId}
					title={
						editingId
							? 'Edit Voice Feedback'
							: 'Add New Voice Feedback'
					}
				/>

				<div className="vfd-body-content">
					<div className="vfd-settings-content">
						<ScrollToCardLayout
							tabs={allTabs}
							sidebarFooter={ <ProFeaturesCard adminUrl={ adminUrl } style={ { marginTop: '24px' } } /> }
						>
							<div data-section="general">
								<VoiceFeedbackSettings
									formData={formData}
									onFormDataUpdate={onFormDataUpdate}  
								/>
							</div>

							<div data-section="containerStyles">
								<ContainerStyles
									formData={formData}
									onFormDataUpdate={onFormDataUpdate}  
								/>
							</div>

							<div data-section="buttonsStyles">
								<ButtonsStyles
									formData={formData}
									onFormDataUpdate={onFormDataUpdate}  
								/>
							</div>
						</ScrollToCardLayout>
					</div>

					<div className="vfd-preview-content">
						<div className="mock-browser-wrapper">
							<div className="mock-browser-header">
								<div className="browser-dots">
									<div className="dot dot-red"></div>
									<div className="dot dot-yellow"></div>
									<div className="dot dot-green"></div>
								</div>
								<div className="browser-address">
									http://yourwebsite.local
								</div>
							</div>
							<div className="mock-page-canvas">
								<div className="preview-content" id="live-preview-1">
									<div
										className="live-preview wp-block-bplvf-voice-feedback"
										id="main-wrapper-2"
										style={{ justifyContent: formData.alignment }}
									>
										<Styles
											attributes={formData.settings}
											id="main-wrapper-2"
										/>
										<VFeedback
											attributes={formData.settings}
											id="main-wrapper-2"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	}

	return (
		<>
			<Header title="Voice Feedback">
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					}}
				>
					<button
						className="add-new-btn"
						onClick={() => handleAddOrEdit(null)}
					>
						+ Add New
					</button>
				</div>
			</Header>

			<div className="vfd-content">
				<div className="bplvf-emails-page-header">
					<h2>Voice Feedback Buttons</h2>
					<p>Manage and customize your saved Voice Feedback buttons below.</p>
				</div>

				{Object.keys(items).length === 0 ? (
					<div className="vfd-empty-state">
						<h2>No Voice Feedback Found</h2>
						<p>Click below to add your first one.</p>
						<button onClick={() => handleAddOrEdit(null)}>
							+ Add New
						</button>
					</div>
				) : (
					<div className="vfd-table-container">
						<table className="vfd-table">
							<thead>
								<tr>
									<th>
										<input
											type="checkbox"
											checked={
												selectedItems.size ===
												Object.keys(items)
													.length &&
												Object.keys(items).length > 0
											}
											onChange={toggleSelectAll}
											className="vfd-checkbox"
										/>
									</th>
									<th>ID</th>
									<th>Title</th>
									<th className="shortcode-col">Shortcode</th>
									<th>Created At</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{items?.map((item) => {
									const { id, title, created } = item;
									return (
										<tr key={id}>
											<td>
												<input
													type="checkbox"
													checked={selectedItems.has(
														id
													)}
													onChange={() =>
														toggleSelection(id)
													}
													className="vfd-checkbox"
												/>
											</td>
											<td>
												<h4>{id}</h4>
											</td>
											<td className="shortcode-name">
												<h4
													onClick={() =>
														handleAddOrEdit(id)
													}
												>
													{title || 'Untitled'}
												</h4>
											</td>
											<td>
												<div className="copy-shortcode">
													<span>{`[voice_feedback id="${id}"]`}</span>
													<button
														type="button"
														onClick={() =>
															handleCopyShortcode(
																id
															)
														}
													>
														{copiedId === id
															? 'Copied!'
															: 'Copy'}
													</button>
												</div>
											</td>
											<td>{created || 'N/A'}</td>
											<td className="vfd-actions">
												<button
													className="vfd-btn edit"
													onClick={() =>
														handleAddOrEdit(id)
													}
												>
													<Edit />
													Edit
												</button>
												<button
													className="vfd-btn delete"
													onClick={() =>
														requestDelete(id)
													}
												>
													<Delete />
													Delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>

			<FloatingBulkActions
				selectedCount={selectedItems.size}
				totalCount={items.length}
				onSelectAll={toggleSelectAll}
				onDelete={requestBulkDelete}
				onClear={() => setSelectedItems(new Set())}
			/>

			{showDeleteConfirm && (
				<DeleteModal
					isOpen={showDeleteConfirm}
					onClose={() => setShowDeleteConfirm(false)}
					onConfirm={confirmDelete}
					selectedCount={deleteQueue.length}
				/>
			)}

			<Footer />
		</>
	);
};

export default AllFeedbackContainer;
