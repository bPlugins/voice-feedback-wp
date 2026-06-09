import React, { useState, useRef, useEffect } from 'react';

const ScrollToCardLayout = ( { tabs, children, sidebarFooter } ) => {
	const [ activeSection, setActiveSection ] = useState( tabs[ 0 ]?.value || '' );
	const cardsContainerRef = useRef( null );
	const sectionRefs = useRef( {} );
	const [ bottomPadding, setBottomPadding ] = useState( 0 );

	const handleScrollTo = ( sectionValue ) => {
		setActiveSection( sectionValue );
		const target = sectionRefs.current[ sectionValue ];
		if ( cardsContainerRef.current && target ) {
			const container = cardsContainerRef.current;
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

			let active = tabs[ 0 ]?.value || '';
			for ( const tab of tabs ) {
				const node = sectionRefs.current[ tab.value ];
				if ( node ) {
					const rect = node.getBoundingClientRect();
					const relativeTop = rect.top - containerTop;
					if ( relativeTop <= 60 ) {
						active = tab.value;
					}
				}
			}
			setActiveSection( active );
		};

		const updatePadding = () => {
			const containerHeight = container.clientHeight;
			const lastTab = tabs[ tabs.length - 1 ];
			if ( lastTab ) {
				const lastCard = sectionRefs.current[ lastTab.value ];
				if ( lastCard ) {
					const lastCardHeight = lastCard.clientHeight;
					const needed = Math.max( 0, containerHeight - lastCardHeight - 20 );
					setBottomPadding( needed );
				}
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
	}, [ tabs ] );

	return (
		<div className="bplvf-emails-split-layout" style={ { width: '100%' } }>
			{/* Left sticky sidebar menu */}
			<div className="vfd-settings-sub-tab">
				{ tabs.map( ( tab ) => (
					<button
						key={ tab.value }
						onClick={ () => handleScrollTo( tab.value ) }
						className={ `vfd-settings-sub-tab-button ${
							activeSection === tab.value ? 'active' : ''
						}` }
					>
						<span className="vfd-settings-sub-tab-button-text">
							{ tab.label }
						</span>
					</button>
				) ) }
				{ sidebarFooter }
			</div>

			{/* Right area with cards */}
			<div 
				className="vfd-tab-settings bplvf-emails-cards-container" 
				ref={ cardsContainerRef }
				style={ { maxHeight: '600px', overflowY: 'auto', border: "none", padding: `0 12px ${ bottomPadding }px 0` } }
			>
				{ React.Children.map( children, ( child ) => {
					if ( ! child ) return null;
					const sectionVal = child.props[ 'data-section' ];
					const tab = tabs.find( ( t ) => t.value === sectionVal );
					if ( ! tab ) return child;

					const childStyle = child.props.style || {};
					const customMarginBottom = childStyle.marginBottom;

					const cardStyle = {
						marginBottom: customMarginBottom || '24px',
						scrollMarginTop: '4px',
					};

					const cleanChild = customMarginBottom
						? React.cloneElement( child, {
								style: { ...childStyle, marginBottom: undefined },
						  } )
						: child;

					return (
						<div
							key={ sectionVal }
							ref={ ( el ) => ( sectionRefs.current[ sectionVal ] = el ) }
							data-section={ sectionVal }
							className="bplvf-settings-card"
							style={ cardStyle }
						>
							<div className="card-header" style={ { marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' } }>
								<h3 style={ { margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#1e293b' } }>{ tab.label }</h3>
							</div>
							<div className="card-content">
								{ cleanChild }
							</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default ScrollToCardLayout;
