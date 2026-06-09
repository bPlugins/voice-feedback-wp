import React from 'react';
import {
	isValidCSS,
	getTypoCSS,
	getBoxCSS,
} from '../../../../../bpl-tools/utils/getCSS';
import {
	mobileBreakpoint,
	tabBreakpoint,
} from '../../../../../bpl-tools/utils/data';
import { hexToRgb } from '../../../admin-pages/Utils/functions';

const Styles = ( { attributes, id } ) => {
	const { container, buttons, drawer, recordingTabs, globalFeedback } =
		attributes;
	// const { bgColor, border, borderRadius, width } = container;
	const { stickyFeedback = {}, sharedData = {} } = globalFeedback;
	const { position, offset, buttonContent } = stickyFeedback;
	const { normal, hover, borderRadius: btnRadius, typo, padding } = buttons;

	const blockWrapper = `#${ id }`;

	// Drawer Selectors
	const drawerContainer = `${ blockWrapper } .drawer-voice-feedback`;
	const drawerToggler = `${ drawerContainer } .voice-feedback-toggle`;
	const drawerContent = `${ drawerContainer } .voice-feedback-drawer`;
	const drawerHeadline = `${ drawerContent } .drawer-header`;
	const drawerCloseIcon = `${ drawerHeadline } .drawer-close`;

	// SlideIn/Drawer Toggler Selector
	const slideInToggleHead = `${ blockWrapper } .toggle-button`;
	const slideInToggleBtn = `${ blockWrapper } .toggle-text`;

	// Non-Drawer Selectors
	const nonDrawerContainer = `${ blockWrapper } .body-voice-feedback`;

	// Recording Tabs Selector
	const recordingTabsSelector = `${ blockWrapper } .recording-mode-toggle`;
	const feedbackBtnsWrapperSelector = `${ blockWrapper } .feedback-buttons`;

	// Sticky Feedback Selectors
	const stickyFeedbackWrapper = `${ blockWrapper } .bplvf-sticky-feedback`;

	// Notification Banner Selectors
	const notificationBannerWrapper = `${ blockWrapper } .notification`;
	const contentTitleSelector = `${ blockWrapper } .contentTitle`;
	const contentSubTitleSelector = `${ blockWrapper } .contentSubTitle`;
	const notificationBannerCloseBtnSelector = `${ notificationBannerWrapper } .notification__close-btn`;
	const notification3 = `${ blockWrapper } .notification3`;
	const notificationHeaderIconBox = `${ notificationBannerWrapper } .notification__icon-box`;

	// SlideIn Drawer

	return (
		<style
			dangerouslySetInnerHTML={ {
				__html: `

                ${ getTypoCSS( '', typo )?.googleFontLink }
                ${
					getTypoCSS( '', drawer?.drawerHeadlineTypo )?.googleFontLink
				}
                ${
					getTypoCSS( '', sharedData.contentTitleTypo )
						?.googleFontLink
				}
                ${
					getTypoCSS( '', sharedData.contentSubTitleTypo )
						?.googleFontLink
				}
                
                ${
					getTypoCSS(
						`${ drawerToggler }`,
						drawer?.drawerHeadlineTypo
					).styles
				}
                ${
					getTypoCSS(
						`${ slideInToggleBtn }`,
						drawer?.drawerHeadlineTypo
					).styles
				}
                
                ${
					getTypoCSS(
						`${ drawerHeadline } h3`,
						drawer?.drawerHeadlineTypo
					).styles
				}
                ${
					getTypoCSS(
						`${ stickyFeedbackWrapper } .feedback-toggle span`,
						drawer?.drawerHeadlineTypo
					).styles
				}
                ${
					getTypoCSS(
						`${ feedbackBtnsWrapperSelector }>button span, ${ blockWrapper } .bplvf-email-gate .submit-btn`,
						typo
					).styles
				}
                ${
					getTypoCSS(
						`${ recordingTabsSelector }>button h3`,
						recordingTabs?.buttons?.typo
					).styles
				}
                ${
					getTypoCSS(
						`${ contentTitleSelector }`,
						sharedData.contentTitleTypo
					).styles
				}
                ${
					getTypoCSS(
						`${ contentSubTitleSelector }`,
						sharedData.contentSubTitleTypo
					).styles
				}


                ${ drawerToggler } {
                    bottom: ${ drawer?.spaceFromBottom }%;
                    ${
						drawer?.drawerPosition === 'left'
							? 'left: 0; transform: translate(-100px, 50%);'
							: 'right: 0; transform: translate(100px, 50%);'
					}
                }
                ${ drawerToggler }.visible {
                    transform: translate(0, 50%);
                }
                ${ drawerContent } {
                    bottom: ${ drawer?.spaceFromBottom }%;
                    border-color: ${ drawer?.colors?.bgColor };
                    ${
						drawer?.drawerPosition === 'left'
							? 'left: 0; transform: translate(-100%, 50%);'
							: 'right: 0;'
					}
                }
                ${ nonDrawerContainer } {
                    width: ${ container?.width?.desktop };
                    ${ isValidCSS( 'background', container?.bgColor ) }
                    border: ${ container?.border?.width } ${
						container?.border?.style
					} ${ container?.border?.color };
                    border-radius: ${ container?.borderRadius }px;
                    padding: ${ getBoxCSS( container?.padding ) };
                }
                ${ feedbackBtnsWrapperSelector } svg {
                    font-size: ${ typo.fontSize.desktop }px;
                }
                ${ drawerToggler }, ${ slideInToggleHead } {
                    ${ isValidCSS( 'color', drawer?.colors?.color ) }
                    ${ isValidCSS(
						'background-color',
						drawer?.colors?.bgColor
					) }
                }
                ${ drawerHeadline } {
                    ${ isValidCSS(
						'background-color',
						drawer?.colors?.bgColor
					) }
                }
                ${ drawerHeadline } h3 {
                    ${ isValidCSS( 'color', drawer?.colors?.color ) }
                }
                ${ drawerCloseIcon } svg {
                    ${ isValidCSS( 'color', drawer?.colors?.color ) }
                }

                ${ recordingTabsSelector } {
                    background-color: ${ recordingTabs?.bgColor };
                    border-radius: ${ recordingTabs?.buttons?.borderRadius }px;
                }

                ${ recordingTabsSelector }>button.active {
                    ${ isValidCSS(
						'background-color',
						recordingTabs?.activeRecordingTab?.bgColor
					) }
                    padding: ${ getBoxCSS( recordingTabs?.buttons?.padding ) };
                    border-radius: ${ recordingTabs?.buttons?.borderRadius }px;
                }
                
                ${ recordingTabsSelector }>button.active h3, ${ recordingTabsSelector }>button.active svg {
                    ${ isValidCSS(
						'color',
						recordingTabs?.activeRecordingTab?.color
					) }
                }

                ${ recordingTabsSelector }>button svg {
                    height: ${ recordingTabs.buttons.iconSize }px;
                    width: ${ recordingTabs.buttons.iconSize }px;
                }

                ${ feedbackBtnsWrapperSelector }>button, ${ blockWrapper } .bplvf-email-gate .submit-btn {
                    border-radius: ${ btnRadius }px;
                    ${ isValidCSS( 'background-color', normal?.bgColor ) }
                    padding: ${ getBoxCSS( padding ) };
                }
                ${ feedbackBtnsWrapperSelector }>button span, ${ blockWrapper } .bplvf-email-gate .submit-btn {
                    ${ isValidCSS( 'color', normal?.color ) }
                }
                ${ feedbackBtnsWrapperSelector }>button:hover, ${ blockWrapper } .bplvf-email-gate .submit-btn:hover {
                    ${ isValidCSS( 'background-color', hover?.bgColor ) }
                }
                ${ feedbackBtnsWrapperSelector }>button:hover span, ${ blockWrapper } .bplvf-email-gate .submit-btn:hover {
                  ${ isValidCSS( 'color', hover?.color ) }
                }

                ${ feedbackBtnsWrapperSelector }>button svg {
                  ${ isValidCSS( 'color', normal?.color ) }
                }
                ${ feedbackBtnsWrapperSelector }>button:hover svg {
                  ${ isValidCSS( 'color', hover?.color ) }
                }

                ${ stickyFeedbackWrapper } {
                  ${
						position === 'topLeft'
							? `top: ${ offset.top }px; left: ${ offset.left }px;`
							: ''
					}
                  ${
						position === 'topRight'
							? `top: ${ offset.top }px; right: ${ offset.right }px;`
							: ''
					}
                  ${
						position === 'bottomLeft'
							? `bottom: ${ offset.bottom }px; left: ${ offset.left }px;`
							: ''
					}
                  ${
						position === 'bottomRight'
							? `bottom: ${ offset.bottom }px; right: ${ offset.right }px;`
							: ''
					}
                }
                  
                ${ stickyFeedbackWrapper } .feedback-toggle {
                  ${
						buttonContent.pulseButton
							? 'animation: pulse 1.5s infinite;'
							: ''
					}
                  background: ${ buttonContent.colors.bgColor };
                  border-radius: ${ buttonContent.borderRadius }px;
                  padding: ${ getBoxCSS( stickyFeedback.padding?.desktop ) };
                  ${ isValidCSS( 'color', buttonContent.colors.color ) }
                  box-shadow: 0 0 35px ${ hexToRgb(
						buttonContent.colors.bgColor,
						0.6
					) };
                }
                ${ stickyFeedbackWrapper } .feedback-toggle svg {
                  height: ${ buttonContent.iconSize }px;
                  width: ${ buttonContent.iconSize }px;
                }

                ${ stickyFeedbackWrapper } .sticky-feedback-content {
                  border: 2px solid ${ buttonContent.colors.bgColor };
                }

                ${ notificationBannerWrapper } {
                  ${ isValidCSS(
						'background',
						globalFeedback.notification?.bgColor
					) }
                }

                ${ notification3 } {
                  border: 2px solid color-mix(in srgb, ${
						globalFeedback.notification?.bgColor
					} 90%, black);
                }

                ${ notificationHeaderIconBox } {
                  background: linear-gradient(to right, ${
						globalFeedback.notification?.bgColor || '#4ade80'
					}, #fffbeb),
                    linear-gradient(to top right, ${
						globalFeedback.notification?.bgColor || '#4ade80'
					}, ${ globalFeedback.notification?.bgColor || '#4ade80' });
                  background-blend-mode: soft-light;
                }

                ${ notificationBannerCloseBtnSelector }:hover {
                  background: linear-gradient(to right, ${
						globalFeedback.notification?.bgColor || '#4ade80'
					}, #fffbeb),
                      linear-gradient(to top right, ${
							globalFeedback.notification?.bgColor || '#4ade80'
						}, ${
							globalFeedback.notification?.bgColor || '#4ade80'
						});
                    background-blend-mode: soft-light;
                }

                ${ contentTitleSelector } {
                   color: ${
						globalFeedback.sharedData?.colors.contentTitleColor
					};
                }
                ${ contentSubTitleSelector } {
                  color: ${
						globalFeedback.sharedData?.colors.contentSubTitleColor
					};
                }

                ${ notificationBannerCloseBtnSelector } {
                  color: ${ globalFeedback.notification.closeButton.color };
                }



                ${ notificationBannerCloseBtnSelector } svg {
                  color: ${ globalFeedback.notification.closeButton.color };
                }

                ${ tabBreakpoint } {
                    ${ nonDrawerContainer } {
                        ${ isValidCSS( 'width', container?.width?.tablet ) }
                    }
                }

                ${ mobileBreakpoint } {
                    ${ nonDrawerContainer } {
                        ${ isValidCSS( 'width', container?.width?.mobile ) }
                    }
                }

                `,
			} }
		/>
	);
};

export default Styles;
