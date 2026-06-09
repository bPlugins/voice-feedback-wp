"use strict";
(globalThis["webpackChunkvoice_feedback"] = globalThis["webpackChunkvoice_feedback"] || []).push([["src_admin-pages_SettingsPage_Settings_TemplateSettings_Notification_Styles_js"],{

/***/ "./src/admin-pages/SettingsPage/Settings/TemplateSettings/Notification/Styles.js":
/*!***************************************************************************************!*\
  !*** ./src/admin-pages/SettingsPage/Settings/TemplateSettings/Notification/Styles.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Components/Shared/ScrollToCardLayout */ "./src/admin-pages/Components/Shared/ScrollToCardLayout.js");









const Styles = ({
  globalData,
  onDataUpdate
}) => {
  const {
    voiceFeedback,
    recordingTabs
  } = globalData;
  const settingsTabs = [{
    label: 'Notification Banner',
    value: 'notificationBanner'
  }, voiceFeedback.isScreenRecord ? {
    label: 'Recording Tabs',
    value: 'recordingTabs'
  } : null, {
    label: 'Record Buttons',
    value: 'buttons'
  }].filter(Boolean);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_ScrollToCardLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tabs: settingsTabs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-section": "notificationBanner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Background Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.notification.bgColor'),
    onChange: val => onDataUpdate('globalFeedback.notification.bgColor', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Close Button Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.notification.closeButton.color'),
    onChange: val => onDataUpdate('globalFeedback.notification.closeButton.color', val)
  }), (globalData.globalFeedback.notification.style === 'notification1' || globalData.globalFeedback.notification.style === 'notification2') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Content Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.sharedData.colors.contentSubTitleColor'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.colors.contentSubTitleColor', val)
  }), globalData.globalFeedback.notification.style !== 'notification1' && globalData.globalFeedback.notification.style !== 'notification2' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Title Text Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.sharedData.colors.contentTitleColor'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.colors.contentTitleColor', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Color_Color__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Sub Title Color",
    isHeader: true,
    value: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(globalData, 'globalFeedback.sharedData.colors.contentSubTitleColor'),
    onChange: val => onDataUpdate('globalFeedback.sharedData.colors.contentSubTitleColor', val)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
//# sourceMappingURL=src_admin-pages_SettingsPage_Settings_TemplateSettings_Notification_Styles_js.js.map