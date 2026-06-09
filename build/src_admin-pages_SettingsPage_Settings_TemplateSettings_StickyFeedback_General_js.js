"use strict";
(globalThis["webpackChunkvoice_feedback"] = globalThis["webpackChunkvoice_feedback"] || []).push([["src_admin-pages_SettingsPage_Settings_TemplateSettings_StickyFeedback_General_js"],{

/***/ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js":
/*!**********************************************************************!*\
  !*** ./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldHeader.scss */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utils/icons */ "./src/admin-pages/Utils/icons.js");




const FieldHeader = ({
  title,
  icon,
  isFull = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, !isFull && `
          .bplvf-container {
            justify-content: unset;
            gap: 20px;
          }
          `), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bplvf-header-icon"
  }, icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "bplvf-field-title"
  }, title)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldHeader);

/***/ }),

/***/ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.scss":
/*!************************************************************************!*\
  !*** ./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Components/Shared/ScrollToCardLayout.js":
/*!*****************************************************************!*\
  !*** ./src/admin-pages/Components/Shared/ScrollToCardLayout.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ScrollToCardLayout = ({
  tabs,
  children,
  sidebarFooter
}) => {
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabs[0]?.value || '');
  const cardsContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const [bottomPadding, setBottomPadding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const handleScrollTo = sectionValue => {
    setActiveSection(sectionValue);
    const target = sectionRefs.current[sectionValue];
    if (cardsContainerRef.current && target) {
      const container = cardsContainerRef.current;
      container.scrollTo({
        top: target.offsetTop - 4,
        behavior: 'smooth'
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = cardsContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      let active = tabs[0]?.value || '';
      for (const tab of tabs) {
        const node = sectionRefs.current[tab.value];
        if (node) {
          const rect = node.getBoundingClientRect();
          const relativeTop = rect.top - containerTop;
          if (relativeTop <= 60) {
            active = tab.value;
          }
        }
      }
      setActiveSection(active);
    };
    const updatePadding = () => {
      const containerHeight = container.clientHeight;
      const lastTab = tabs[tabs.length - 1];
      if (lastTab) {
        const lastCard = sectionRefs.current[lastTab.value];
        if (lastCard) {
          const lastCardHeight = lastCard.clientHeight;
          const needed = Math.max(0, containerHeight - lastCardHeight - 20);
          setBottomPadding(needed);
        }
      }
    };
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updatePadding);
    const timer = setTimeout(() => {
      handleScroll();
      updatePadding();
    }, 100);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePadding);
      clearTimeout(timer);
    };
  }, [tabs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-emails-split-layout",
    style: {
      width: '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-settings-sub-tab"
  }, tabs.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.value,
    onClick: () => handleScrollTo(tab.value),
    className: `vfd-settings-sub-tab-button ${activeSection === tab.value ? 'active' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "vfd-settings-sub-tab-button-text"
  }, tab.label))), sidebarFooter), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-tab-settings bplvf-emails-cards-container",
    ref: cardsContainerRef,
    style: {
      maxHeight: '600px',
      overflowY: 'auto',
      border: "none",
      padding: `0 12px ${bottomPadding}px 0`
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
    if (!child) return null;
    const sectionVal = child.props['data-section'];
    const tab = tabs.find(t => t.value === sectionVal);
    if (!tab) return child;
    const childStyle = child.props.style || {};
    const customMarginBottom = childStyle.marginBottom;
    const cardStyle = {
      marginBottom: customMarginBottom || '24px',
      scrollMarginTop: '4px'
    };
    const cleanChild = customMarginBottom ? react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      style: {
        ...childStyle,
        marginBottom: undefined
      }
    }) : child;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: sectionVal,
      ref: el => sectionRefs.current[sectionVal] = el,
      "data-section": sectionVal,
      className: "bplvf-settings-card",
      style: cardStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-header",
      style: {
        marginBottom: '16px',
        borderBottom: '1px solid #f1f5f9',
        paddingBottom: '12px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        margin: '0 0 4px 0',
        fontSize: '16px',
        fontWeight: '600',
        color: '#1e293b'
      }
    }, tab.label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-content"
    }, cleanChild));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToCardLayout);

/***/ }),

/***/ "./src/admin-pages/Fields/DynamicTab/DynamicTab.js":
/*!*********************************************************!*\
  !*** ./src/admin-pages/Fields/DynamicTab/DynamicTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicTab_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicTab.scss */ "./src/admin-pages/Fields/DynamicTab/DynamicTab.scss");



const DynamicTab = ({
  tabs,
  defaultActive = 0,
  value = null,
  onChange = () => {}
}) => {
  const isControlled = value !== null;
  const [activeLabel, setActiveLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabs[defaultActive]?.label.toLowerCase() || '');

  // Sync internal state with external value
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isControlled && value !== activeLabel) {
      setActiveLabel(value);
    }
  }, [value, isControlled]);
  const handleTabClick = label => {
    if (isControlled) {
      onChange(label); // controlled mode
    } else {
      setActiveLabel(label); // uncontrolled mode
    }
  };

  // Find active tab index
  const activeIndex = tabs.findIndex(tab => tab.label.toLowerCase() === activeLabel);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-dynamic-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-tab-header"
  }, tabs.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.label.toLowerCase(),
    className: `bpl-tab-btn ${tab.label.toLowerCase() === activeLabel ? 'active' : ''}`,
    onClick: () => handleTabClick(tab.label.toLowerCase())
  }, tab.label))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-tab-content"
  }, tabs[activeIndex] && tabs[activeIndex].content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicTab);

/***/ }),

/***/ "./src/admin-pages/Fields/DynamicTab/DynamicTab.scss":
/*!***********************************************************!*\
  !*** ./src/admin-pages/Fields/DynamicTab/DynamicTab.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Fields/IconPicker/IconPicker.js":
/*!*********************************************************!*\
  !*** ./src/admin-pages/Fields/IconPicker/IconPicker.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconPicker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconPicker.scss */ "./src/admin-pages/Fields/IconPicker/IconPicker.scss");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");





const IconPicker = ({
  icons = [],
  value = null,
  onChange = () => {},
  title = 'Icon Picker'
}) => {
  const handleSelect = icon => {
    onChange(icon);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-picker-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.ContainerIcon, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-grid",
    style: {
      opacity: 1
    }
  }, icons.map((icon, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      className: `icon-btn ${value === icon ? 'selected' : ''}`,
      onClick: () => handleSelect(icon),
      type: "button",
      dangerouslySetInnerHTML: {
        __html: icon
      }
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPicker);

/***/ }),

/***/ "./src/admin-pages/Fields/IconPicker/IconPicker.scss":
/*!***********************************************************!*\
  !*** ./src/admin-pages/Fields/IconPicker/IconPicker.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Fields/Text/Text.js":
/*!*********************************************!*\
  !*** ./src/admin-pages/Fields/Text/Text.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.scss */ "./src/admin-pages/Fields/Text/text.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");





const Text = ({
  value = '',
  onChange = () => {},
  title = 'Text Control',
  placeholder = 'Enter Title',
  help = ''
}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-text-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.TextIcon, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-field-wrapper",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    onChange: handleChange,
    className: "input-field",
    placeholder: placeholder,
    value: value || ''
  }), help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "help-text"
  }, help)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./src/admin-pages/Fields/Text/text.scss":
/*!***********************************************!*\
  !*** ./src/admin-pages/Fields/Text/text.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/SettingsPage/Settings/TemplateSettings/StickyFeedback/General.js":
/*!******************************************************************************************!*\
  !*** ./src/admin-pages/SettingsPage/Settings/TemplateSettings/StickyFeedback/General.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Fields_Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Fields/Text/Text */ "./src/admin-pages/Fields/Text/Text.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Fields_IconPicker_IconPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Fields/IconPicker/IconPicker */ "./src/admin-pages/Fields/IconPicker/IconPicker.js");
/* harmony import */ var _Fields_DynamicTab_DynamicTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Fields/DynamicTab/DynamicTab */ "./src/admin-pages/Fields/DynamicTab/DynamicTab.js");
/* harmony import */ var _Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Components/Shared/ScrollToCardLayout */ "./src/admin-pages/Components/Shared/ScrollToCardLayout.js");








const General = ({
  globalData,
  onDataUpdate
}) => {
  const {
    voiceFeedback
  } = globalData;
  const settingsTabs = [{
    label: 'Settings',
    value: 'settings'
  }, {
    label: 'Sticky Feedback Content',
    value: 'stickyPopUpContent'
  }, voiceFeedback.isScreenRecord ? {
    label: 'Recording Tabs',
    value: 'recordingTabs'
  } : null, {
    label: 'Audio Recording Settings',
    value: 'audioSettings'
  }, voiceFeedback.isScreenRecord ? {
    label: 'Screen Recording Settings',
    value: 'screenSettings'
  } : null].filter(Boolean);
  const tabs = [{
    label: 'Icon',
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_IconPicker_IconPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.icon'),
      onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.icon', val),
      icons: [_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.voice1, _Utils_icons__WEBPACK_IMPORTED_MODULE_3__.voice2, _Utils_icons__WEBPACK_IMPORTED_MODULE_3__.voice3, _Utils_icons__WEBPACK_IMPORTED_MODULE_3__.voice4],
      title: "Choose Floating Button Icon"
    }))
  }, {
    label: 'Text',
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.text'),
      onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.text', val),
      title: "Floating Button Title",
      placeholder: "Enter floating button title",
      help: "Enter floating button title"
    }))
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabs: settingsTabs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "settings"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "stickyPopUpContent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_DynamicTab_DynamicTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tabs: tabs,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.contentType'),
    onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.contentType', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'globalFeedback.sharedData.contentTitle'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.contentTitle', val),
    title: "SlideIn/Drawer Title",
    placeholder: "Enter SlideIn/Drawer Title"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'globalFeedback.sharedData.contentSubTitle'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.contentSubTitle', val),
    title: "SlideIn/Drawer Sub Title",
    placeholder: "Enter SlideIn/Drawer Sub Title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "audioSettings",
    style: {
      marginBottom: "350px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(globalData, 'voiceFeedback.startRecordingText'),
    onChange: val => onDataUpdate('voiceFeedback.startRecordingText', val),
    title: "Start Recording Button Text"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ })

}]);
//# sourceMappingURL=src_admin-pages_SettingsPage_Settings_TemplateSettings_StickyFeedback_General_js.js.map