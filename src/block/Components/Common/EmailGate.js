import React, { useState } from 'react';

const EmailGate = ( { onSubmit, onCancel, isSending, buttons } ) => {
	const [ name, setName ] = useState( '' );
	const [ email, setEmail ] = useState( '' );
	const [ errors, setErrors ] = useState( {} );

	const validate = () => {
		const newErrors = {};
		if ( ! name.trim() ) {
			newErrors.name = 'Name is required';
		}
		if ( ! email.trim() ) {
			newErrors.email = 'Email is required';
		} else if ( ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email ) ) {
			newErrors.email = 'Invalid email address';
		}
		setErrors( newErrors );
		return Object.keys( newErrors ).length === 0;
	};

	const handleSubmit = ( e ) => {
		e.preventDefault();
		if ( validate() ) {
			onSubmit( name, email );
		}
	};

	return (
		<form onSubmit={ handleSubmit } className="bplvf-email-gate">
			<div className="gate-header">
				<h4>Almost there!</h4>
				<p>Please provide your name and email to submit your feedback.</p>
			</div>

			<div className="gate-fields">
				<div className="form-group">
					<label htmlFor="gate-name">Name</label>
					<input
						type="text"
						id="gate-name"
						value={ name }
						onChange={ ( e ) => setName( e.target.value ) }
						placeholder="Your Name"
						disabled={ isSending }
						className={ errors.name ? 'has-error' : '' }
					/>
					{ errors.name && <span className="error-message">{ errors.name }</span> }
				</div>

				<div className="form-group">
					<label htmlFor="gate-email">Email</label>
					<input
						type="email"
						id="gate-email"
						value={ email }
						onChange={ ( e ) => setEmail( e.target.value ) }
						placeholder="Your Email"
						disabled={ isSending }
						className={ errors.email ? 'has-error' : '' }
					/>
					{ errors.email && <span className="error-message">{ errors.email }</span> }
				</div>
			</div>

			<div className="gate-actions">
				<button
					type="button"
					onClick={ onCancel }
					disabled={ isSending }
					className="cancel-btn"
				>
					Cancel
				</button>
				<button
					type="submit"
					disabled={ isSending }
					className="submit-btn"
				>
					{ isSending ? 'Sending...' : 'Submit' }
				</button>
			</div>
		</form>
	);
};

export default EmailGate;
