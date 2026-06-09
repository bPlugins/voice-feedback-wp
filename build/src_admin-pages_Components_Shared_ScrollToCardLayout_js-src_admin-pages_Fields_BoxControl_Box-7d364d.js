"use strict";
(globalThis["webpackChunkvoice_feedback"] = globalThis["webpackChunkvoice_feedback"] || []).push([["src_admin-pages_Components_Shared_ScrollToCardLayout_js-src_admin-pages_Fields_BoxControl_Box-7d364d"],{

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

/***/ "./src/admin-pages/Fields/BoxControl/BoxControl.js":
/*!*********************************************************!*\
  !*** ./src/admin-pages/Fields/BoxControl/BoxControl.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoxControl_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxControl.scss */ "./src/admin-pages/Fields/BoxControl/BoxControl.scss");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");





const parsePx = val => parseInt(val?.toString().replace('px', '') || '0');
const BoxControl = ({
  title = 'Box Controls',
  value = {
    top: '5px',
    right: '5px',
    bottom: '5px',
    left: '5px'
  },
  name = 'BOX',
  onChange
}) => {
  const [padding, setPadding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    top: parsePx(value?.top),
    right: parsePx(value?.right),
    bottom: parsePx(value?.bottom),
    left: parsePx(value?.left)
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Whenever local state changes, fire onChange with updated values
    onChange?.({
      top: `${padding.top}px`,
      right: `${padding.right}px`,
      bottom: `${padding.bottom}px`,
      left: `${padding.left}px`
    });
  }, [padding]);
  const handlePaddingChange = (side, val) => {
    const numeric = Number(val);
    if (isNaN(numeric)) return;
    setPadding(prev => ({
      ...prev,
      [side]: numeric
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.BoxControlIcon, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__cross-layout",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__cross-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__input-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Top"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: padding.top,
    onChange: e => handlePaddingChange('top', e.target.value),
    className: "bpl-boxControl__padding-input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__input-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Left"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: padding.left,
    onChange: e => handlePaddingChange('left', e.target.value),
    className: "bpl-boxControl__padding-input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__center-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__padding-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, name))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__input-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Right"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: padding.right,
    onChange: e => handlePaddingChange('right', e.target.value),
    className: "bpl-boxControl__padding-input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bpl-boxControl__input-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Bottom"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: padding.bottom,
    onChange: e => handlePaddingChange('bottom', e.target.value),
    className: "bpl-boxControl__padding-input"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxControl);

/***/ }),

/***/ "./src/admin-pages/Fields/BoxControl/BoxControl.scss":
/*!***********************************************************!*\
  !*** ./src/admin-pages/Fields/BoxControl/BoxControl.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Fields/Color/Color.js":
/*!***********************************************!*\
  !*** ./src/admin-pages/Fields/Color/Color.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Color_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color.scss */ "./src/admin-pages/Fields/Color/Color.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");






const Color = ({
  label = null,
  value = '#ffffff',
  onChange = () => {},
  isHeader = false,
  title = 'Color Settings'
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const colorPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const previewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target) && previewRef.current && !previewRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleColorChange = newColor => {
    onChange(newColor.hex);
  };
  const handleTextInput = e => {
    const val = e.target.value;
    onChange(val);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `bplvf-color-control ${isHeader ? 'header' : ''}`
  }, isHeader ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_3__.ColorIcon, null)
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "field-label"
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-input-group",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-picker",
    onClick: handleOpen,
    ref: previewRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-picker-preview",
    style: {
      background: value?.hex || value
    }
  })), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    ref: colorPickerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: '#fff',
      border: '1px solid #efefef',
      padding: 10
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: value,
    onChangeComplete: handleColorChange,
    enableAlpha: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: value?.hex || value,
    onChange: handleTextInput,
    className: "color-text-input",
    placeholder: "#ffffff"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);

/***/ }),

/***/ "./src/admin-pages/Fields/Color/Color.scss":
/*!*************************************************!*\
  !*** ./src/admin-pages/Fields/Color/Color.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Fields/Colors/Colors.js":
/*!*************************************************!*\
  !*** ./src/admin-pages/Fields/Colors/Colors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Colors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Colors.scss */ "./src/admin-pages/Fields/Colors/Colors.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Color_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Color/Color */ "./src/admin-pages/Fields/Color/Color.js");
/* harmony import */ var _Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Shared/FieldHeader/FieldHeader */ "./src/admin-pages/Components/Shared/FieldHeader/FieldHeader.js");






const Colors = ({
  value = {},
  onChange = () => {},
  title = 'Colors'
}) => {
  const handleChange = (key, val) => {
    onChange({
      ...value,
      [key]: val
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-colors-field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_FieldHeader_FieldHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.ColorIcon, null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-colors-group",
    style: {
      opacity: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-bg-color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Background Color",
    value: value.bgColor || '#ffffff',
    onChange: val => handleChange('bgColor', val)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-text-color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Text Color",
    value: value.color || '#000000',
    onChange: val => handleChange('color', val)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);

/***/ }),

/***/ "./src/admin-pages/Fields/Colors/Colors.scss":
/*!***************************************************!*\
  !*** ./src/admin-pages/Fields/Colors/Colors.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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


/***/ })

}]);
//# sourceMappingURL=src_admin-pages_Components_Shared_ScrollToCardLayout_js-src_admin-pages_Fields_BoxControl_Box-7d364d.js.map