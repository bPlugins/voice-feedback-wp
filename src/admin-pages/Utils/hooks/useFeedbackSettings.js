import { useState, useEffect } from 'react';
import { apiFetch } from '../api';
import _set from 'lodash/set';
import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

export function useFeedbackSettings() {
	const [ settings, setSettings ] = useState( {} );
	const [ savedSettings, setSavedSettings ] = useState( {} );
	const [ loading, setLoading ] = useState( false );
	const [ saving, setSaving ] = useState( false );
	const [ showToast, setShowToast ] = useState( false );

	const loadSettings = async () => {
		setLoading( true );
		try {
			const data = await apiFetch( '/settings' );
			setSettings( data );
			setSavedSettings( _cloneDeep( data ) ); // 👈 store baseline
		} finally {
			setLoading( false );
		}
	};

	const saveSettings = async () => {
		setSaving( true );
		try {
			await apiFetch( '/settings', 'POST', settings );
			setSavedSettings( _cloneDeep( settings ) );
		} catch ( e ) {
			console.error( 'SAVE ERROR', e );
		} finally {
			setSaving( false );
			setShowToast( true );
		}
	};

	const updateFeedbackSettings = ( path, value ) => {
		setSettings( ( prev ) => {
			const updated = { ...prev };
			_set( updated, path, value );
			return updated;
		} );
	};

	const hasChanges = ! _isEqual( settings, savedSettings );

	useEffect( () => {
		loadSettings();
	}, [] );

	return {
		settings,
		loading,
		saving,
		hasChanges,
		saveSettings,
		updateFeedbackSettings,
		showToast,
		setShowToast,
		reload: loadSettings,
	};
}
