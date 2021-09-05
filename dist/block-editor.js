/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/block-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/block-editor.css":
/*!*************************************!*\
  !*** ./assets/src/block-editor.css ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/block-editor.js":
/*!************************************!*\
  !*** ./assets/src/block-editor.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-editor.css */ "./assets/src/block-editor.css");
/* harmony import */ var _components_concierge_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/concierge-icon */ "./assets/src/components/concierge-icon.js");
/* harmony import */ var _components_concierge_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/concierge-panel */ "./assets/src/components/concierge-panel.js");
/* harmony import */ var _components_concierge_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/concierge-sidebar */ "./assets/src/components/concierge-sidebar.js");
/* harmony import */ var _store_concerige__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/concerige */ "./assets/src/store/concerige.js");










/**
 * Register the main plugin.
 */

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])('bm-concierge', {
  render: () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginDocumentSettingPanel"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('BM Concierge', 'bm-concierge')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_concierge_panel__WEBPACK_IMPORTED_MODULE_7__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebarMoreMenuItem"], {
    target: "sidebar",
    icon: _components_concierge_icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('BM Concierge', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebar"], {
    name: "sidebar",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('BM Concierge', 'bm-concierge'),
    icon: _components_concierge_icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_concierge_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], null))),
  icon: null
});
/**
 * Stores
 */

Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["register"])(_store_concerige__WEBPACK_IMPORTED_MODULE_9__["default"]);

/***/ }),

/***/ "./assets/src/components/concierge-icon.js":
/*!*************************************************!*\
  !*** ./assets/src/components/concierge-icon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  size: "20",
  className: "bm-concierge-icon"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fill: "currentColor",
  d: "M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"
})));

/***/ }),

/***/ "./assets/src/components/concierge-panel.js":
/*!**************************************************!*\
  !*** ./assets/src/components/concierge-panel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConciergePanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _hooks_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/services */ "./assets/src/hooks/services.js");






function ConciergePanel() {
  const {
    isLayoutEnabled,
    isOnpageEnabled,
    isProofreadingEnabled,
    isAccessibilityEnabled,
    hasLoadedServices
  } = Object(_hooks_services__WEBPACK_IMPORTED_MODULE_5__["useServices"])();
  const {
    formattedNormalPrice: proofreadingPrice
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useProofreadingPrice"])();
  const {
    formattedNormalPrice: onPagePrice
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useOnPagePrice"])();
  const {
    formattedNormalPrice: accessibilityPrice
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useAccessibilityPrice"])();
  const {
    formattedNormalPrice: layoutPrice
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useLayoutPrice"])();

  const openConciergeSidebar = () => {
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])('core/edit-post').openGeneralSidebar('bm-concierge/sidebar');
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sometimes you could use an extra hand. We\'ll help you make your content and website be the best it can be.', 'bm-concierge')), hasLoadedServices === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, isAccessibilityEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Accessibility Audit', 'bm-concierge'), ":"), " ", accessibilityPrice ? accessibilityPrice : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null)), isOnpageEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('SEO Optimization', 'bm-concierge'), ":"), " ", onPagePrice ? onPagePrice : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null)), isProofreadingEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Proofreading', 'bm-concierge'), ":"), " ", proofreadingPrice ? proofreadingPrice : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null)), isLayoutEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'bm-concierge'), ":"), " ", layoutPrice ? layoutPrice : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: openConciergeSidebar,
    variant: "secondary",
    isSecondary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Open Concierge', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "bm-concierge-disclaimer"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Some prices may depend on how much content you have. As you update the page, the price may update.', 'bm-concierge'))));
}

/***/ }),

/***/ "./assets/src/components/concierge-sidebar.js":
/*!****************************************************!*\
  !*** ./assets/src/components/concierge-sidebar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConciergeSidebar; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/services */ "./assets/src/hooks/services.js");
/* harmony import */ var _panels_accessibility_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels/accessibility-review */ "./assets/src/components/panels/accessibility-review.js");
/* harmony import */ var _panels_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/layout */ "./assets/src/components/panels/layout.js");
/* harmony import */ var _panels_onpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panels/onpage */ "./assets/src/components/panels/onpage.js");
/* harmony import */ var _panels_proofreading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panels/proofreading */ "./assets/src/components/panels/proofreading.js");








function ConciergeSidebar() {
  const {
    hasLoadedServices,
    isAccessibilityEnabled,
    isOnpageEnabled,
    isProofreadingEnabled,
    isLayoutEnabled
  } = Object(_hooks_services__WEBPACK_IMPORTED_MODULE_3__["useServices"])();

  if (!hasLoadedServices) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ConciergeHeader, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null)));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ConciergeHeader, null), isAccessibilityEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_panels_accessibility_review__WEBPACK_IMPORTED_MODULE_4__["default"], null), isOnpageEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_panels_onpage__WEBPACK_IMPORTED_MODULE_6__["default"], null), isProofreadingEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_panels_proofreading__WEBPACK_IMPORTED_MODULE_7__["default"], null), isLayoutEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_panels_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "bm-concierge-disclaimer"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Some prices may depend on how much content you have. As you update the page, the price may update.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "bm-concierge-disclaimer"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('All prices apply to this specific page of content only. Not the entire website.', 'bm-concierge'))));
}

const ConciergeHeader = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sometimes you could use an extra hand. We\'ll help you make your content and website be the best it can be.', 'bm-concierge')));

/***/ }),

/***/ "./assets/src/components/order-modal.js":
/*!**********************************************!*\
  !*** ./assets/src/components/order-modal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderModal; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function OrderModal(props) {
  const {
    title,
    isOpen,
    onClose,
    hasBeenSubmitted,
    children,
    submitButtonText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Place Order', 'bm-concierge'),
    thankYouNotice = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thanks for placing your concierge order. You will receive a confirmation at your e-mail address shortly.', 'bm-concierge'),
    onSubmit
  } = props;

  if (!isOpen) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: title,
    onRequestClose: onClose,
    className: "bm-concierge-order-modal"
  }, hasBeenSubmitted ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Notice"], {
    status: "success",
    isDismissible: false
  }, thankYouNotice) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    expanded: true,
    justify: "flex-end"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FlexBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    href: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('https://bernskioldmedia.com/en/terms-policies/concierge/', 'concierge terms page', 'bm-concierge'),
    target: "_blank",
    style: {
      color: '#666',
      textDecoration: 'underline'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Our concierge terms apply ›', 'bm-concierge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: onClose,
    style: {
      margin: '4px'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Never Mind', 'bm-concierge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    isPrimary: true,
    onClick: onSubmit,
    style: {
      margin: '4px'
    }
  }, submitButtonText)))));
}

/***/ }),

/***/ "./assets/src/components/panels/accessibility-review.js":
/*!**************************************************************!*\
  !*** ./assets/src/components/panels/accessibility-review.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccessibilityReview; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/order */ "./assets/src/hooks/order.js");
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _order_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-modal */ "./assets/src/components/order-modal.js");







function AccessibilityReview() {
  const {
    orderModalOpen,
    orderSubmitted,
    placeOrder,
    closeOrderModal,
    openOrderModal
  } = Object(_hooks_order__WEBPACK_IMPORTED_MODULE_3__["useOrder"])();
  const [isExpress, setIsExpress] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useAccessibilityPrice"])();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accessibility Audit: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accessibility Audit: ', 'bm-concierge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: title(),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Confidently meet WCAG accessibility criteria. We\'ll analyze your content and return to you a checklist of things to address to meet the criteria.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Turnaround', 'bm-concierge'), ":"), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('72 hours (24h express)', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proceed to Order', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accessibility Review Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start Accessibility Audit', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'accessibility-review',
        express: isExpress,
        price
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Publishing accessible content is important. In some sectors even required. An accessibility audit on this page against WCAG 2.1 AA includes all content and documents on it. You get a comprehensive audit protocol showing you what to improve and what is already good.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("We'll have the analysis back to you in 72 hours via email. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bm-concierge-divider"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You\'ve chosen express. You will get the analysis in 24 hours.', 'bm-concierge') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Without express, you will get the analysis in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your Price:', 'bm-concierge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/layout.js":
/*!************************************************!*\
  !*** ./assets/src/components/panels/layout.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/order */ "./assets/src/hooks/order.js");
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _order_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-modal */ "./assets/src/components/order-modal.js");







function Layout() {
  const {
    orderModalOpen,
    orderSubmitted,
    placeOrder,
    closeOrderModal,
    openOrderModal
  } = Object(_hooks_order__WEBPACK_IMPORTED_MODULE_3__["useOrder"])();
  const [isExpress, setIsExpress] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useLayoutPrice"])();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout: ', 'bm-concierge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: title(),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Good design leaves a lasting impression and converts visitors. Let us help you create an engaging layout for this page.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Turnaround', 'bm-concierge'), ":"), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('72 hours (24h express)', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proceed to Order', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Send for Layouting', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'layout',
        express: isExpress,
        price
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Using the full range of visuals on your website we\ll make this page look interesting, great and converting.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('We won\'t create illustrations, graphics or other media as part of this. But we may suggest it if we think it will benefit the page.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("We'll have the text back to you in 72 hours, right here in the editor. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bm-concierge-divider"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You\'ve chosen express. Your page layout will be done in 24 hours.', 'bm-concierge') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Without express, your page layout will be done in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your Price:', 'bm-concierge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/onpage.js":
/*!************************************************!*\
  !*** ./assets/src/components/panels/onpage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnPage; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/order */ "./assets/src/hooks/order.js");
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _order_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-modal */ "./assets/src/components/order-modal.js");







function OnPage() {
  const {
    orderModalOpen,
    orderSubmitted,
    placeOrder,
    closeOrderModal,
    openOrderModal
  } = Object(_hooks_order__WEBPACK_IMPORTED_MODULE_3__["useOrder"])();
  const [isExpress, setIsExpress] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [keyword, setKeyword] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useOnPagePrice"])();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('SEO Optimization: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('SEO Optimization: ', 'bm-concierge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: title(),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Make your page rank well in search engines by on-page SEO optimization.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Turnaround', 'bm-concierge'), ":"), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('72 hours (24h express)', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proceed to Order', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('SEO Optimization Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Send for SEO Optimization', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'onpage',
        express: isExpress,
        price,
        keyword
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('On-page SEO optimization boosts the ranking for the page in search engines. Based on your keyword, we will adjust the page for optimal ranking. Tweaking copy, optimizing titles and descriptions for Google and social sharing and taking care of more technical factors.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("We'll have the page ready for you in 72 hours, right here in the editor. In a hurry? Add the express option and have it ready within 24 hours.", 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bm-concierge-divider"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Target Search Keyword', 'bm-concierge'),
    onChange: setKeyword,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('We need to know what search keyword you want your page to rank for in Google. We\ll check to make sure that it is reasonable before we do the optimization.', 'bm-concierge')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You\'ve chosen express. You will have it ready in 24 hours.', 'bm-concierge') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Without express, you will have the page ready in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your Price:', 'bm-concierge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/proofreading.js":
/*!******************************************************!*\
  !*** ./assets/src/components/panels/proofreading.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Proofreading; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/order */ "./assets/src/hooks/order.js");
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _order_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-modal */ "./assets/src/components/order-modal.js");







function Proofreading() {
  const {
    orderModalOpen,
    orderSubmitted,
    placeOrder,
    closeOrderModal,
    openOrderModal
  } = Object(_hooks_order__WEBPACK_IMPORTED_MODULE_3__["useOrder"])();
  const [isExpress, setIsExpress] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = Object(_hooks_price__WEBPACK_IMPORTED_MODULE_4__["useProofreadingPrice"])();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proofreading: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proofreading: ', 'bm-concierge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: title(),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ready to publish but want a second eye? Let us proof your content to free it from mistakes.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Turnaround', 'bm-concierge'), ":"), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('72 hours (24h express)', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proceed to Order', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proofreading Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Send for Proofreading', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'proofreading',
        express: isExpress,
        price
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Proofreading includes catching any errors and making sure the content adheres to a well-formed style.', 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("We'll have the text back to you in 72 hours, right here in the editor. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bm-concierge-divider"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You\'ve chosen express. You will get your content back in 24 hours.', 'bm-concierge') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Without express, you will get your text back in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your Price:', 'bm-concierge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/hooks/order.js":
/*!***********************************!*\
  !*** ./assets/src/hooks/order.js ***!
  \***********************************/
/*! exports provided: useOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOrder", function() { return useOrder; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const useOrder = () => {
  const {
    placeOrder
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('bm/concierge');
  const [isOpen, setIsOpen] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isSubmitted, setIsSubmitted] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const placeOrderFromData = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(data => {
    placeOrder({ ...data,
      postId: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/editor').getCurrentPostId()
    });
    setIsSubmitted(true);
  });

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  return {
    orderModalOpen: isOpen,
    orderSubmitted: isSubmitted,
    openOrderModal: openModal,
    closeOrderModal: closeModal,
    placeOrder: placeOrderFromData
  };
};

/***/ }),

/***/ "./assets/src/hooks/price.js":
/*!***********************************!*\
  !*** ./assets/src/hooks/price.js ***!
  \***********************************/
/*! exports provided: useOnPagePrice, useAccessibilityPrice, useProofreadingPrice, useLayoutPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnPagePrice", function() { return useOnPagePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAccessibilityPrice", function() { return useAccessibilityPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProofreadingPrice", function() { return useProofreadingPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutPrice", function() { return useLayoutPrice; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/currency */ "./assets/src/utilities/currency.js");
/* harmony import */ var _utilities_word_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/word-count */ "./assets/src/utilities/word-count.js");




const usePriceSelect = (type, data = {}) => {
  const {
    normalPrice = null,
    expressPrice = null,
    currency = null
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => {
    var _prices$type;

    const {
      prices
    } = select('bm/concierge').getPrices(type, data);
    const {
      normal,
      express,
      currency
    } = (_prices$type = prices[type]) !== null && _prices$type !== void 0 ? _prices$type : {};
    return {
      expressPrice: express,
      normalPrice: normal,
      currency
    };
  }, [type, data]);
  const expressPriceExtra = expressPrice - normalPrice;
  return {
    expressPriceExtra,
    expressPrice,
    normalPrice,
    currency,
    formattedExpressPrice: Object(_utilities_currency__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(expressPrice, currency),
    formattedNormalPrice: Object(_utilities_currency__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(normalPrice, currency),
    formattedExpressPriceExtra: Object(_utilities_currency__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(expressPriceExtra, currency)
  };
};

const useOnPagePrice = () => {
  return usePriceSelect('onpage', {
    wordCount: Object(_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__["getWordCount"])()
  });
};
const useAccessibilityPrice = () => {
  return usePriceSelect('accessibility');
};
const useProofreadingPrice = () => {
  return usePriceSelect('proofreading', {
    wordCount: Object(_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__["getWordCount"])()
  });
};
const useLayoutPrice = () => {
  return usePriceSelect('layout', {
    wordCount: Object(_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__["getWordCount"])()
  });
};

/***/ }),

/***/ "./assets/src/hooks/services.js":
/*!**************************************!*\
  !*** ./assets/src/hooks/services.js ***!
  \**************************************/
/*! exports provided: useServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useServices", function() { return useServices; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useServices = () => {
  const {
    services = {}
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => {
    return select('bm/concierge').getServices();
  }, []);
  const {
    onpage,
    proofreading,
    layout,
    accessibility
  } = services;
  return {
    enabledServicesCount: Object.keys(services).length,
    hasLoadedServices: Object.keys(services).length > 0,
    isOnpageEnabled: onpage === true,
    isProofreadingEnabled: proofreading === true,
    isLayoutEnabled: layout === true,
    isAccessibilityEnabled: accessibility === true
  };
};

/***/ }),

/***/ "./assets/src/store/concerige.js":
/*!***************************************!*\
  !*** ./assets/src/store/concerige.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_STATE = {
  services: [],
  prices: {}
};
const actions = {
  *placeOrder(data) {
    const response = yield actions.postToApi('/bm-concierge/v1/order', data);
    return {
      type: 'PLACE_ORDER',
      response
    };
  },

  setServices(services) {
    return {
      type: 'SET_SERVICES',
      services
    };
  },

  setPrices(service, express, normal, currency) {
    return {
      type: 'SET_PRICES',
      service,
      express,
      normal,
      currency
    };
  },

  fetchFromApi(path) {
    return {
      type: 'FETCH_FROM_API',
      path
    };
  },

  postToApi(path, data) {
    return {
      type: 'POST_TO_API',
      path,
      data
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["createReduxStore"])('bm/concierge', {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'PLACE_ORDER':
        return { ...state,
          data: action.data
        };

      case 'SET_SERVICES':
        return { ...state,
          services: action.services
        };

      case 'SET_PRICES':
        return { ...state,
          prices: { ...state.prices,
            [action.service]: {
              express: action.express,
              normal: action.normal,
              currency: action.currency
            }
          }
        };
    }

    return state;
  },

  actions,
  selectors: {
    getServices(state) {
      const {
        services
      } = state;
      return {
        services
      };
    },

    getPrices(state) {
      const {
        prices
      } = state;
      return {
        prices
      };
    }

  },
  controls: {
    FETCH_FROM_API(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path
      });
    },

    POST_TO_API(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path,
        method: 'POST',
        data: action.data
      });
    }

  },
  resolvers: {
    *getPrices(type, data) {
      const response = yield actions.postToApi('/bm-concierge/v1/' + type, data);
      const {
        expressPrice,
        normalPrice,
        currency
      } = response;
      return actions.setPrices(type, expressPrice, normalPrice, currency);
    },

    *getServices() {
      const services = yield actions.fetchFromApi('/bm-concierge/v1/services');
      return actions.setServices(services);
    }

  }
}));

/***/ }),

/***/ "./assets/src/utilities/currency.js":
/*!******************************************!*\
  !*** ./assets/src/utilities/currency.js ***!
  \******************************************/
/*! exports provided: formatCurrency, getLocaleForCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleForCurrency", function() { return getLocaleForCurrency; });
function formatCurrency(value, currency) {
  if (!currency) {
    return value;
  }

  return Intl.NumberFormat(getLocaleForCurrency(currency), {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value);
}
function getLocaleForCurrency(currency) {
  switch (currency) {
    case 'SEK':
      return 'sv-SE';

    default:
      return 'en-US';
  }
}

/***/ }),

/***/ "./assets/src/utilities/word-count.js":
/*!********************************************!*\
  !*** ./assets/src/utilities/word-count.js ***!
  \********************************************/
/*! exports provided: getWordCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordCount", function() { return getWordCount; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__);



function getWordCount() {
  const blocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/block-editor').getBlocks();
  return Object(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__["count"])(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["serialize"])(blocks), 'words');
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "@wordpress/wordcount":
/*!***********************************!*\
  !*** external ["wp","wordcount"] ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["wordcount"]; }());

/***/ })

/******/ });
//# sourceMappingURL=block-editor.js.map