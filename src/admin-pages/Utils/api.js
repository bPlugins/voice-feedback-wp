const API_BASE = '/wp-json/bplvf/v1';

export async function apiFetch( url = '', method = 'GET', body = null ) {
	const headers = {
		'Content-Type': 'application/json',
		'X-WP-Nonce': window.bplvfSettings?.nonce || '',
	};

	const options = { method, headers };

	if ( body ) {
		options.body = JSON.stringify( body );
	}

	const response = await fetch( `${ API_BASE }${ url }`, options );

	if ( ! response.ok ) {
		const err = await response.json().catch( () => ( {} ) );
		throw new Error( err?.message || 'Something went wrong' );
	}

	return response.json();
}
