"use strict";
(globalThis["webpackChunkvoice_feedback"] = globalThis["webpackChunkvoice_feedback"] || []).push([["src_admin-pages_SettingsPage_Settings_TemplateSettings_StickyFeedback_Styles_js"],{

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

/***/ "./src/admin-pages/SettingsPage/Settings/TemplateSettings/StickyFeedback/Styles.js":
/*!*****************************************************************************************!*\
  !*** ./src/admin-pages/SettingsPage/Settings/TemplateSettings/StickyFeedback/Styles.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Fields/RangeControl/RangeControl */ "./src/admin-pages/Fields/RangeControl/RangeControl.js");
/* harmony import */ var _Fields_Typography_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Fields/Typography/Typography */ "./src/admin-pages/Fields/Typography/Typography.js");
/* harmony import */ var _Fields_Colors_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Fields/Colors/Colors */ "./src/admin-pages/Fields/Colors/Colors.js");
/* harmony import */ var _Fields_BoxControl_BoxControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Fields/BoxControl/BoxControl */ "./src/admin-pages/Fields/BoxControl/BoxControl.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Fields/Color/Color */ "./src/admin-pages/Fields/Color/Color.js");
/* harmony import */ var _Fields_ToggleControl_ToggleControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Fields/ToggleControl/ToggleControl */ "./src/admin-pages/Fields/ToggleControl/ToggleControl.js");
/* harmony import */ var _Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Components/Shared/ScrollToCardLayout */ "./src/admin-pages/Components/Shared/ScrollToCardLayout.js");










const Styles = ({
  globalData,
  onDataUpdate
}) => {
  const {
    voiceFeedback,
    recordingTabs
  } = globalData;
  const settingsTabs = [{
    label: 'Floating Button',
    value: 'floatingButton'
  }, {
    label: 'Pop-Up Content',
    value: 'pupupContent'
  }, voiceFeedback.isScreenRecord ? {
    label: 'Recording Tabs',
    value: 'recordingTabs'
  } : null, {
    label: 'Record Buttons',
    value: 'buttons'
  }].filter(Boolean);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tabs: settingsTabs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "floatingButton"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_ToggleControl_ToggleControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Pulse Animation",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.pulseButton'),
    onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.pulseButton', val),
    offText: "Turn ON to add pulse animation",
    onText: "Turn OFF to remove pulse animation"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Colors_Colors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Button Colors (Background and Content)",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.colors'),
    onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.colors', val)
  }), globalData.globalFeedback.stickyFeedback.buttonContent.contentType === 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Icon Size",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.iconSize'),
    onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.iconSize', val),
    subTitle: "Icon size of the button in PX",
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Border Radius",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.stickyFeedback.buttonContent.borderRadius'),
    onChange: val => onDataUpdate('globalFeedback.stickyFeedback.buttonContent.borderRadius', val),
    subTitle: "Border radius in PX",
    min: 0,
    max: 50
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "pupupContent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Title Text Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.sharedData.colors.contentTitleColor'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.colors.contentTitleColor', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Sub Title Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.sharedData.colors.contentSubTitleColor'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.colors.contentSubTitleColor', val)
  })), voiceFeedback.isScreenRecord && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "recordingTabs"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Background Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.bgColor'),
    onChange: val => onDataUpdate('recordingTabs.bgColor', val)
  }), recordingTabs.buttons.isDisplayIcon && !recordingTabs.buttons.isDisplayText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Tab Icon Size",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.buttons.iconSize'),
    onChange: val => onDataUpdate('recordingTabs.buttons.iconSize', val),
    subTitle: "Icon size of Tab Icon in PX"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Tab Buttons Border Radius",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.buttons.borderRadius'),
    onChange: val => onDataUpdate('recordingTabs.buttons.borderRadius', val),
    subTitle: "Border radius of the buttons in PX"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_BoxControl_BoxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Tab Buttons Padding",
    name: "Padding",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.buttons.padding'),
    onChange: val => onDataUpdate('recordingTabs.buttons.padding', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Colors_Colors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Active Recording Tab Colors",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.activeRecordingTab'),
    onChange: val => onDataUpdate('recordingTabs.activeRecordingTab', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Tab Buttons Border Radius",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'recordingTabs.buttons.borderRadius'),
    onChange: val => onDataUpdate('recordingTabs.buttons.borderRadius', val),
    subTitle: "Border radius of the buttons in PX"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_BoxControl_BoxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Buttons Padding",
    name: "Padding",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'buttons.padding'),
    onChange: val => onDataUpdate('buttons.padding', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Colors_Colors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Button Colors (Normal)",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'buttons.normal'),
    onChange: val => onDataUpdate('buttons.normal', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Colors_Colors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Button Colors (Hover)",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'buttons.hover'),
    onChange: val => onDataUpdate('buttons.hover', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_RangeControl_RangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Buttons Border Radius",
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'buttons.borderRadius'),
    onChange: val => onDataUpdate('buttons.borderRadius', val),
    subTitle: "Border radius of the buttons in PX"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Styles);

/***/ })

}]);
//# sourceMappingURL=src_admin-pages_SettingsPage_Settings_TemplateSettings_StickyFeedback_Styles_js.js.map