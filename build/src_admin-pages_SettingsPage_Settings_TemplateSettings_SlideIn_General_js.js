"use strict";
(globalThis["webpackChunkvoice_feedback"] = globalThis["webpackChunkvoice_feedback"] || []).push([["src_admin-pages_SettingsPage_Settings_TemplateSettings_SlideIn_General_js"],{

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

/***/ "./src/admin-pages/Fields/RangeControl/RangeControl.js":
/*!*************************************************************!*\
  !*** ./src/admin-pages/Fields/RangeControl/RangeControl.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl.scss */ "./src/admin-pages/Fields/RangeControl/RangeControl.scss");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");





const RangeControl = ({
  value = 30,
  min = 1,
  max = 100,
  onChange = () => {},
  title = 'Border Radius',
  help = 'Your subtitle goes here',
  fieldIcon = null,
  step = 1
}) => {
  const handleChange = e => {
    onChange(parseFloat(e.target.value));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    icon: fieldIcon || (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.Settings, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range-wrapper",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: handleChange,
    className: "range-slider",
    style: {
      background: `linear-gradient(
                to right,
                #146ef5 0%,
                #146ef5 ${(value - min) / (max - min) * 100}%,
                #e5e7eb ${(value - min) / (max - min) * 100}%,
                #e5e7eb 100%
              )`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "value-display"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "range-value"
  }, value))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "help-text"
  }, help)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeControl);

/***/ }),

/***/ "./src/admin-pages/Fields/RangeControl/RangeControl.scss":
/*!***************************************************************!*\
  !*** ./src/admin-pages/Fields/RangeControl/RangeControl.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Fields/SelectControl/SelectControl.js":
/*!***************************************************************!*\
  !*** ./src/admin-pages/Fields/SelectControl/SelectControl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectField_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectField.scss */ "./src/admin-pages/Fields/SelectControl/SelectField.scss");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");





const SelectField = ({
  title = 'Select Settings',
  options = [],
  value = '',
  onChange = () => {}
}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-select-control header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.Settings, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "select-input-group",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: value,
    onChange: handleChange,
    className: "select-dropdown"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "",
    disabled: true
  }, "Select an option"), options.map(opt => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: opt.value,
    value: opt.value
  }, opt.label)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectField);

/***/ }),

/***/ "./src/admin-pages/Fields/SelectControl/SelectField.scss":
/*!***************************************************************!*\
  !*** ./src/admin-pages/Fields/SelectControl/SelectField.scss ***!
  \***************************************************************/
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

/***/ "./src/admin-pages/Fields/ToggleControl/ToggleControl.js":
/*!***************************************************************!*\
  !*** ./src/admin-pages/Fields/ToggleControl/ToggleControl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToggleControl_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleControl.scss */ "./src/admin-pages/Fields/ToggleControl/ToggleControl.scss");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");




const ToggleControl = ({
  title = 'Show Header',
  description,
  value,
  onChange
}) => {
  const handleToggle = e => {
    onChange(e.target.checked);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toggle-control-field",
    style: {
      display: description ? 'block' : 'flex'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.ToggleIcon, null),
    isFull: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "field-wrapper"
  }, description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toggle-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "toggle-field",
    style: {
      opacity: 1,
      marginTop: !description ? '0px' : '-7px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: "toggle-control",
    checked: value,
    onChange: handleToggle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toggle-slider"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleControl);

/***/ }),

/***/ "./src/admin-pages/Fields/ToggleControl/ToggleControl.scss":
/*!*****************************************************************!*\
  !*** ./src/admin-pages/Fields/ToggleControl/ToggleControl.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/SettingsPage/Settings/TemplateSettings/SlideIn/General.js":
/*!***********************************************************************************!*\
  !*** ./src/admin-pages/SettingsPage/Settings/TemplateSettings/SlideIn/General.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Fields/RangeControl/RangeControl */ "./src/admin-pages/Fields/RangeControl/RangeControl.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Fields/Text/Text */ "./src/admin-pages/Fields/Text/Text.js");
/* harmony import */ var _Fields_ToggleControl_ToggleControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Fields/ToggleControl/ToggleControl */ "./src/admin-pages/Fields/ToggleControl/ToggleControl.js");
/* harmony import */ var _Fields_SelectControl_SelectControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Fields/SelectControl/SelectControl */ "./src/admin-pages/Fields/SelectControl/SelectControl.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Components/Shared/ScrollToCardLayout */ "./src/admin-pages/Components/Shared/ScrollToCardLayout.js");









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
    label: 'SlideIn/Drawer Settings',
    value: 'slideInContent'
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tabs: settingsTabs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_SelectControl_SelectControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Choose When to Show the SlideIn/Drawer",
    options: [{
      value: 'always',
      label: 'Always Show'
    }, {
      value: 'onScrollDown',
      label: 'Show When User Scrolls Down'
    }, {
      value: 'onTargetSectionEnter',
      label: 'Show After Your Choosen Sections Appears'
    }, {
      value: 'timedFeedback',
      label: 'Show After a Few Seconds'
    }, {
      value: 'scrollEndSection',
      label: 'Show When User Reaches the Bottom of the Page'
    }, {
      value: 'showWithinSection',
      label: 'Show While In View Your Chosen Sections'
    }],
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showFeedbackOn'),
    onChange: val => onDataUpdate('globalFeedback.functionality.showFeedbackOn', val)
  })), lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showFeedbackOn') === 'onScrollDown' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Show On Scroll Down IN PX",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.scrollDistance'),
    onChange: val => onDataUpdate('globalFeedback.functionality.scrollDistance', val),
    min: 1,
    max: 1000,
    help: "Scroll distance in PX"
  }), lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showFeedbackOn') === 'onTargetSectionEnter' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.choosenSectionsIds'),
    onChange: val => onDataUpdate('globalFeedback.functionality.choosenSectionsIds', val),
    title: "Target Section ID Or Class",
    placeholder: "Use #yourIdName for IDs or .yourClassName for class",
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Add comma separator \u201C,\u201C to add multiple sections. Use", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "#yourIdName"), " for IDs or", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, ".yourClassName"), " for classes. \uD83C\uDFA5", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://youtu.be/rOMYn2XfGPs",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Watch quick video reference"))
  }), lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showFeedbackOn') === 'timedFeedback' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Show After Time IN Seconds",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showAfterTime'),
    onChange: val => onDataUpdate('globalFeedback.functionality.showAfterTime', val),
    min: 0,
    max: 5,
    help: "Time in Seconds",
    step: 0.1
  }), lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.showFeedbackOn') === 'showWithinSection' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.functionality.choosenSectionsIds'),
    onChange: val => onDataUpdate('globalFeedback.functionality.choosenSectionsIds', val),
    title: "Target Sections ID Or Class",
    placeholder: "Use #yourIdName for IDs or .yourClassName for class",
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Add comma separator \u201C,\u201C to add multiple sections. Use", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "#yourIdName"), " for IDs or", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, ".yourClassName"), " for classes. \uD83C\uDFA5", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://youtu.be/rOMYn2XfGPs",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Watch quick video reference"))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "slideInContent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'drawer.drawerHeadline'),
    onChange: val => onDataUpdate('drawer.drawerHeadline', val),
    title: "Slide Headline Text"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_SelectControl_SelectControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Choose SlideIn/Drawer Position",
    options: [{
      value: 'rightCenter',
      label: 'Right Center'
    }, {
      value: 'leftCenter',
      label: 'Left Center'
    }, {
      value: 'bottomCenter',
      label: 'Bottom Center'
    }, {
      value: 'topCenter',
      label: 'Top Center'
    }],
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.sharedData.position'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.position', val)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.sharedData.contentTitle'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.contentTitle', val),
    title: "SlideIn/Drawer Title",
    placeholder: "Enter SlideIn/Drawer Title"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'globalFeedback.sharedData.contentSubTitle'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.contentSubTitle', val),
    title: "SlideIn/Drawer Sub Title",
    placeholder: "Enter SlideIn/Drawer Sub Title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "audioSettings",
    style: {
      marginBottom: "350px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(globalData, 'voiceFeedback.startRecordingText'),
    onChange: val => onDataUpdate('voiceFeedback.startRecordingText', val),
    title: "Start Recording Button Text"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ })

}]);
//# sourceMappingURL=src_admin-pages_SettingsPage_Settings_TemplateSettings_SlideIn_General_js.js.map