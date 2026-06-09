import { useState, useEffect } from 'react';
import { apiFetch } from '../api';

export function useFeedbackBlock() {
	const [ items, setItems ] = useState( [] );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( null );

	// Load all items
	const loadItems = async () => {
		setLoading( true );
		try {
			const data = await apiFetch( '/block' );
			setItems( data );
		} catch ( err ) {
			setError( err.message );
		}
		setLoading( false );
	};

	// Create or Update
	const saveItem = async ( payload ) => {
		setLoading( true );
		try {
			const data = await apiFetch( '/block', 'POST', payload );
			await loadItems();
			return data;
		} catch ( err ) {
			setError( err );
		}
		setLoading( false );
	};

	// Get single item
	const getItem = async ( id ) => {
		return apiFetch( `/block/${ id }`, 'GET' );
	};

	// Delete item
	const deleteItem = async ( id ) => {
		setLoading( true );
		try {
			await apiFetch( `/block/${ id }`, 'DELETE' );
			await loadItems();
			return true;
		} catch ( err ) {
			setError( err.message );
		}
		setLoading( false );
	};

	useEffect( () => {
		loadItems();
	}, [] );

	return {
		items,
		loading,
		error,
		saveItem,
		deleteItem,
		getItem,
		reload: loadItems,
	};
}
