import React, { useState, useRef, useEffect } from 'react';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';
import CheckboxControl from '../../Fields/CheckboxControl/CheckboxControl';
import Text from '../../Fields/Text/Text';
import { EmailIcon } from '../../Utils/icons';
import TextAreaControl from '../../Fields/TextAreaControl/TextAreaControl';

const Emails = ( {
	settings,
	updateFeedbackSettings 
} ) => {
	const { email } = settings;
	const {
		enabled,
		send_to,
		subject,
		body_template,
		attach_feedback,
		custom_email,
	} = email;

	const [ activeSection, setActiveSection ] = useState( 'recipients' );
	const notificationsRef = useRef( null );
	const recipientsRef = useRef( null );
	const messageContentRef = useRef( null );
	const cardsContainerRef = useRef( null );
	const [ bottomPadding, setBottomPadding ] = useState( 0 );

	const handleScrollTo = ( section, ref ) => {
		setActiveSection( section );
		if ( cardsContainerRef.current && ref.current ) {
			const container = cardsContainerRef.current;
			const target = ref.current;
			container.scrollTo( {
				top: target.offsetTop - 4,
				behavior: 'smooth',
			} );
		}
	};

	useEffect( () => {
		const container = cardsContainerRef.current;
		if ( ! container ) return;

		const handleScroll = () => {
			const containerRect = container.getBoundingClientRect();
			const containerTop = containerRect.top;

			const cards = [ 
				{ id: 'recipients', ref: recipientsRef },
				{ id: 'messageContent', ref: messageContentRef },
			];

			let active = 'recipients';
			for ( const card of cards ) {
				if ( card.ref.current ) {
					const cardRect = card.ref.current.getBoundingClientRect();
					const relativeTop = cardRect.top - containerTop;
					if ( relativeTop <= 60 ) {
						active = card.id;
					}
				}
			}
			setActiveSection( active );
		};

		const updatePadding = () => {
			const containerHeight = container.clientHeight;
			const lastCard = messageContentRef.current;
			if ( lastCard ) {
				const lastCardHeight = lastCard.clientHeight;
				const needed = Math.max( 0, containerHeight - lastCardHeight - 20 );
				setBottomPadding( needed );
			}
		};

		container.addEventListener( 'scroll', handleScroll );
		window.addEventListener( 'resize', updatePadding );

		const timer = setTimeout( () => {
			handleScroll();
			updatePadding();
		}, 100 );

		return () => {
			container.removeEventListener( 'scroll', handleScroll );
			window.removeEventListener( 'resize', updatePadding );
			clearTimeout( timer );
		};
	}, [] );

	return (
		<div className="bplvf-emails-layout">
			{ /* Title / Subtitle of the Page */ }
			<div className="bplvf-emails-page-header">
				<h2>Email & Notification</h2>
				<p>Configure how and when notifications are sent for new voice feedback.</p>
			</div>

			<div className="bplvf-emails-split-layout">
				{ /* Left sticky sidebar menu */ }
				<div className="bplvf-emails-sidebar">
					<div className="sidebar-nav-list">
						 
						<button
							className={ `sidebar-nav-item ${
								activeSection === 'recipients' ? 'active' : ''
							}` }
							onClick={ () => handleScrollTo( 'recipients', recipientsRef ) }
						>
							<span className="dot-indicator"></span>
							Recipients
						</button>
						<button
							className={ `sidebar-nav-item ${
								activeSection === 'messageContent' ? 'active' : ''
							}` }
							onClick={ () => handleScrollTo( 'messageContent', messageContentRef ) }
						>
							<span className="dot-indicator"></span>
							Message Content
						</button>
					</div>
				</div>

				{ /* Right area with cards */ }
				<div 
					className="bplvf-emails-cards-container" 
					ref={ cardsContainerRef }
					style={ { paddingBottom: `${ bottomPadding }px` } }
				> 

					{ /* Card 2: Recipients */ }
					<div
						id="section-recipients"
						ref={ recipientsRef }
						className="bplvf-settings-card"
					>
						<div className="card-header">
							<div className="card-header-left">
								<h3>Recipients</h3>
								<p>Choose who receives the feedback emails.</p>
							</div>
						</div>
						<div className="card-content">
							<CheckboxControl
								title="Send To"
								value={ send_to }
								onChange={ ( v ) =>
									updateFeedbackSettings( 'email.send_to', v )
								}
								options={ [
									{ label: 'Site Admin', value: 'admin' },
									{ label: 'Custom Email', value: 'custom' },
								] }
								fieldIcon={ <EmailIcon /> }
								helpText="Choose where feedback notifications are sent."
							/>

							{ send_to === 'custom' && (
								<Text
									value={ custom_email }
									onChange={ ( v ) =>
										updateFeedbackSettings( 'email.custom_email', v )
									}
									title="Enter Recipient Email Address"
									help="For multiple email addresses, use comma to separate them."
								/>
							) }
						</div>
					</div>

					{ /* Card 3: Message Content */ }
					<div
						id="section-message-content"
						ref={ messageContentRef }
						className="bplvf-settings-card"
						style={{marginBottom: "100px"}}
					>
						<div className="card-header">
							<div className="card-header-left">
								<h3>Message Content</h3>
								<p>Customize the content of the email notifications.</p>
							</div>
						</div>
						<div className="card-content">
							<Text
								value={ subject }
								onChange={ ( v ) =>
									updateFeedbackSettings( 'email.subject', v )
								}
								title="Email Subject"
								help="For multiple email addresses, use comma to separate them."
							/>

							<TextAreaControl
								value={ body_template }
								onChange={ ( v ) =>
									updateFeedbackSettings( 'email.body_template', v )
								}
								title="Email Body Template"
							/>

							<ToggleControl
								title="Attach Recorded Audio File"
								value={ attach_feedback }
								onChange={ ( v ) =>
									updateFeedbackSettings( 'email.attach_feedback', v )
								}
								description="Attach the recorded audio file to the email"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Emails;
