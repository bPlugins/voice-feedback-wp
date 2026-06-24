import React, { useState, useRef, useEffect } from 'react';
import ToggleControl from '../../Fields/ToggleControl/ToggleControl';
import Text from '../../Fields/Text/Text';
import NumberControl from '../../Fields/NumberControl/NumberControl';
import SelectControl from '../../Fields/SelectControl/SelectControl';
import { KeyIcon, HelpCircleIcon, YoutubeIcon } from '../../Utils/icons';

const DEFAULT_SPAM = {
	rate_limit_enabled: true,
	rate_limit_max: 5,
	rate_limit_window: 3600,
	rate_limit_message: 'Too many submissions. Please try again later.',
	rate_limit_action: 'message',
	captcha_enabled: false,
	turnstile_site_key: '',
	turnstile_secret_key: '',
	captcha_mode: 'invisible',
	captcha_fail_behaviour: 'fail_open',
};

const WINDOW_OPTIONS = [
	{ label: '15 minutes', value: 900 },
	{ label: '1 hour', value: 3600 },
	{ label: '6 hours', value: 21600 },
	{ label: '24 hours', value: 86400 },
];



const CAPTCHA_MODE_OPTIONS = [
	{ label: 'Invisible (Silent)', value: 'invisible' },
	{ label: 'Visible (Verify Process)', value: 'visible' },
];

const FAIL_OPTIONS = [
	{ label: 'Fail open (allow on error)', value: 'fail_open' },
	{ label: 'Fail closed (block on error)', value: 'fail_closed' },
];

const Protections = ( {
	settings,
	updateFeedbackSettings,
} ) => {
	const spam = { ...DEFAULT_SPAM, ...( settings.spam_protection || {} ) };

	const set = ( key, value ) =>
		updateFeedbackSettings( `spam_protection.${ key }`, value );

	const [ activeSection, setActiveSection ] = useState( 'rateLimiting' );
	const [ isGuideOpen, setIsGuideOpen ] = useState( false );
	const [ isVideoOpen, setIsVideoOpen ] = useState( false );
	const rateLimitingRef = useRef( null );
	const captchaRef = useRef( null );
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
				{ id: 'rateLimiting', ref: rateLimitingRef },
				{ id: 'captcha', ref: captchaRef },
			];

			let active = 'rateLimiting';
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
			const lastCard = captchaRef.current;
			if ( lastCard ) {
				const lastCardHeight = lastCard.clientHeight;
				const needed = Math.max(
					0,
					containerHeight - lastCardHeight - 20
				);
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
			<div className="bplvf-emails-page-header">
				<h2>Spam Protection</h2>
				<p>
					Protect voice feedback submissions from bots and abuse with
					rate limiting and CAPTCHA. If enabled, spam protection settings will be applied to all existing and new feedback blocks across the site.
				</p>
			</div>

			<div className="bplvf-emails-split-layout">
				{ /* Left sticky sidebar menu */ }
				<div className="bplvf-emails-sidebar">
					<div className="sidebar-nav-list">
						<button
							className={ `sidebar-nav-item ${
								activeSection === 'rateLimiting' ? 'active' : ''
							}` }
							onClick={ () =>
								handleScrollTo( 'rateLimiting', rateLimitingRef )
							}
						>
							<span className="dot-indicator"></span>
							Rate Limiting
						</button>
						<button
							className={ `sidebar-nav-item ${
								activeSection === 'captcha' ? 'active' : ''
							}` }
							onClick={ () =>
								handleScrollTo( 'captcha', captchaRef )
							}
						>
							<span className="dot-indicator"></span>
							CAPTCHA
						</button>
					</div>
				</div>

				{ /* Right area with cards */ }
				<div
					className="bplvf-emails-cards-container"
					ref={ cardsContainerRef }
					style={ { paddingBottom: `${ bottomPadding }px` } }
				>
					{ /* Card 1: Rate Limiting */ }
					<div
						id="section-rate-limiting"
						ref={ rateLimitingRef }
						className="bplvf-settings-card"
					>
						<div className="card-header">
							<div className="card-header-left">
								<h3>Rate Limiting</h3>
								<p>
									Limit how many submissions a single visitor
									can make within a time window.
								</p>
							</div>
						</div>
						<div className="card-content">
							<ToggleControl
								title="Enable rate limiting"
								value={ spam.rate_limit_enabled }
								onChange={ ( v ) =>
									set( 'rate_limit_enabled', v )
								}
								description="Stop spam by limiting how many voice messages a single visitor can send in a short time. This prevents someone from spamming your inbox by repeatedly clicking send."
							/>

							{ spam.rate_limit_enabled && (
								<>
									<NumberControl
										title="Max submissions"
										value={ spam.rate_limit_max }
										onChange={ ( v ) =>
											set(
												'rate_limit_max',
												Math.max( 1, parseInt( v, 10 ) || 1 )
											)
										}
										help="The maximum number of voice messages a single visitor is allowed to send within the time window chosen below (minimum 1)."
									/>

									<SelectControl
										title="Time window"
										value={ spam.rate_limit_window }
										options={ WINDOW_OPTIONS }
										onChange={ ( v ) =>
											set(
												'rate_limit_window',
												parseInt( v, 10 )
											)
										}
										help="The duration of the block. Once a visitor hits the maximum submissions, they must wait for this period to end before sending another voice message."
									/>

									<Text
										title="Block message"
										value={ spam.rate_limit_message }
										onChange={ ( v ) =>
											set( 'rate_limit_message', v )
										}
										placeholder="E.g., Too many submissions. Please try again later."
										help="The friendly message shown to visitors when they try to send too many messages. E.g., 'You've sent a few messages recently. Please take a short break and try again later!'"
									/>


								</>
							) }
						</div>
					</div>

					{ /* Card 2: CAPTCHA */ }
					<div
						id="section-captcha"
						ref={ captchaRef }
						className="bplvf-settings-card"
						style={ { marginBottom: '100px' } }
					>
						<div className="card-header">
							<div className="card-header-left">
								<h3>CAPTCHA</h3>
								<p>
									Require a Cloudflare Turnstile challenge
									before a submission is accepted.
								</p>
							</div>
							{ spam.captcha_enabled && (
								<div style={ { display: 'flex', gap: '8px' } }>
									<button
										type="button"
										className="bplvf-watch-works-btn"
										onClick={ () => setIsGuideOpen( true ) }
									>
										<HelpCircleIcon className="youtube-icon" style={ { color: '#146ef5' } } />
										<span>Key Setup Guide</span>
									</button>
									{/* <button
										type="button"
										className="bplvf-watch-works-btn"
										onClick={ () => setIsVideoOpen( true ) }
									>
										<YoutubeIcon className="youtube-icon" style={ { color: '#ef4444' } } />
										<span>Video Tutorial</span>
									</button> */}
								</div>
							) }
						</div>
						<div className="card-content">
							<ToggleControl
								title="Require CAPTCHA before submit"
								value={ spam.captcha_enabled }
								onChange={ ( v ) => set( 'captcha_enabled', v ) }
								description="Protect your site from automated spam bots using Cloudflare Turnstile. Turnstile runs silently in the background and verifies if a visitor is a human without making them solve annoying visual puzzles."
							/>

							{ spam.captcha_enabled && (
								<>
									<Text
										title="Site key"
										value={ spam.turnstile_site_key }
										onChange={ ( v ) =>
											set( 'turnstile_site_key', v )
										}
										placeholder="E.g., 0x4AAAAAA..."
										icon={ <KeyIcon /> }
										help="The public key used to connect Cloudflare Turnstile to your website. You can get this from your Cloudflare account dashboard."
									/>

									<Text
										title="Secret key"
										value={ spam.turnstile_secret_key }
										onChange={ ( v ) =>
											set( 'turnstile_secret_key', v )
										}
										placeholder="E.g., 0x4AAAAAA..."
										icon={ <KeyIcon /> }
										help="The private key used to securely verify submissions with Cloudflare. Keep this key private and never share it."
									/>

									<SelectControl
										title="Verification widget mode"
										value={ spam.captcha_mode }
										options={ CAPTCHA_MODE_OPTIONS }
										onChange={ ( v ) =>
											set( 'captcha_mode', v )
										}
										help="Select whether the Cloudflare Turnstile challenge runs silently in the background (Invisible) or renders an inline checkbox verification process (Visible)."
									/>

									<SelectControl
										title="If verification fails"
										value={ spam.captcha_fail_behaviour }
										options={ FAIL_OPTIONS }
										onChange={ ( v ) =>
											set( 'captcha_fail_behaviour', v )
										}
										help="Choose what happens if Cloudflare Turnstile fails to verify a visitor or encounters an error. 'Fail open' allows the message to go through anyway, while 'Fail closed' blocks it to ensure zero spam."
									/>
								</>
							) }
						</div>
					</div>
				</div>
			</div>

			{ isGuideOpen && (
				<div className="bpl-modal-overlay" onClick={ () => setIsGuideOpen( false ) }>
					<div
						className="bpl-modal-content turnstile-guide-modal"
						onClick={ ( e ) => e.stopPropagation() }
					>
						<button className="bpl-modal-close" onClick={ () => setIsGuideOpen( false ) }>
							&times;
						</button>
						
						<div className="turnstile-guide-header">
							<span className="dashicons dashicons-shield-alt" style={ { color: '#146ef5', fontSize: '24px', width: '24px', height: '24px', marginRight: '8px' } }></span>
							<h2>How to Get Your Cloudflare Turnstile Keys</h2>
						</div>

						<div className="guide-steps">
							<div className="guide-step">
								<div className="step-number">1</div>
								<div className="step-content">
									<strong>Go to</strong> <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">dash.cloudflare.com</a> and log in to your Cloudflare account.
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">2</div>
								<div className="step-content">
									<strong>Click</strong> <em>Application Security</em> in the left sidebar under Protect &amp; Connect.
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">3</div>
								<div className="step-content">
									<strong>Select</strong> <em>Turnstile</em> from the expanded sub-menu.
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">4</div>
								<div className="step-content">
									<strong>Click</strong> the <em>Add widget manually</em> button (located at the top-right or center of the page).
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">5</div>
								<div className="step-content">
									<strong>Enter</strong> a <em>Widget Name</em> to identify your widget (e.g., <code>&quot;My Website&quot;</code>).
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">6</div>
								<div className="step-content">
									<strong>Click</strong> <em>Add Hostnames</em>, type your domain (e.g., <code>yourdomain.com</code>), click <em>Add</em>, then click <em>Save</em>.
								</div>
							</div>
							<div className="guide-step">
								<div className="step-number">7</div>
								<div className="step-content">
									<strong>Click</strong> <em>Create</em> &mdash; Cloudflare will automatically generate your keys.
								</div>
							</div>
						</div>

						<div className="guide-keys-box">
							<h4>Copy both keys from the confirmation screen:</h4>
							<ul>
								<li>
									<span className="key-badge">Site Key</span>
									<span>&mdash; paste this into the <strong>Site Key</strong> field</span>
								</li>
								<li>
									<span className="key-badge key-badge-secret">Secret Key</span>
									<span>&mdash; paste this into the <strong>Secret Key</strong> field</span>
								</li>
							</ul>
						</div>

						<div className="guide-info-banner">
							<span className="dashicons dashicons-info"></span>
							<p>You can view your keys again anytime by returning to <strong>Application Security &rarr; Turnstile</strong> in your Cloudflare dashboard.</p>
						</div>
					</div>
				</div>
			) }
			{ isVideoOpen && (
				<div className="bpl-modal-overlay" onClick={ () => setIsVideoOpen( false ) }>
					<div
						className="bpl-modal-content turnstile-guide-modal"
						style={ { maxWidth: '640px', padding: '0', overflow: 'hidden', borderRadius: '12px' } }
						onClick={ ( e ) => e.stopPropagation() }
					>
						<div style={ { position: 'relative', paddingTop: '56.25%' } }>
							<iframe
								src="https://www.youtube.com/embed/7V-6345NCoE?autoplay=1"
								title="Cloudflare Turnstile Setup Tutorial"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								style={ { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' } }
							/>
						</div>
						<button 
							className="bpl-modal-close" 
							onClick={ () => setIsVideoOpen( false ) }
							style={ { 
								position: 'absolute', 
								top: '12px', 
								right: '12px', 
								background: 'rgba(15, 23, 42, 0.6)', 
								color: '#ffffff', 
								border: 'none', 
								borderRadius: '50%', 
								width: '32px', 
								height: '32px', 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center', 
								cursor: 'pointer',
								fontSize: '20px',
								lineHeight: 1,
								zIndex: 10
							} }
						>
							&times;
						</button>
					</div>
				</div>
			) }
		</div>
	);
};

export default Protections;
