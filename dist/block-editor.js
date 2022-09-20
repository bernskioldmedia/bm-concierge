/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/components/concierge-icon.js":
/*!*************************************************!*\
  !*** ./assets/src/components/concierge-icon.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  size: "20",
  className: "bm-concierge-icon"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  d: "M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"
})));

/***/ }),

/***/ "./assets/src/components/concierge-panel.js":
/*!**************************************************!*\
  !*** ./assets/src/components/concierge-panel.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConciergePanel; }
/* harmony export */ });
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
    isMachineTranslationEnabled,
    hasLoadedServices
  } = (0,_hooks_services__WEBPACK_IMPORTED_MODULE_5__.useServices)();
  const {
    formattedNormalPrice: proofreadingPrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useProofreadingPrice)();
  const {
    formattedNormalPrice: onPagePrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useOnPagePrice)();
  const {
    formattedNormalPrice: accessibilityPrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useAccessibilityPrice)();
  const {
    formattedNormalPrice: layoutPrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useLayoutPrice)();
  const {
    formattedNormalPrice: machineTranslationPrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useMachineTranslationPrice)();

  const openConciergeSidebar = () => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').openGeneralSidebar('bm-concierge/sidebar');
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Sometimes you could use an extra hand. We\'ll help you make your content and website be the best it can be.', 'bm-concierge')), hasLoadedServices === 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, isAccessibilityEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Accessibility Audit', 'bm-concierge'), ":"), " ", accessibilityPrice ? accessibilityPrice : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)), isOnpageEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('SEO Optimization', 'bm-concierge'), ":"), " ", onPagePrice ? onPagePrice : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)), isProofreadingEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Proofreading', 'bm-concierge'), ":"), " ", proofreadingPrice ? proofreadingPrice : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)), isLayoutEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Layout', 'bm-concierge'), ":"), " ", layoutPrice ? layoutPrice : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)), isMachineTranslationEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Machine Translation', 'bm-concierge'), ":"), " ", machineTranslationPrice ? machineTranslationPrice : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openConciergeSidebar,
    variant: "secondary",
    isSecondary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Open Concierge', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bm-concierge-disclaimer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Some prices may depend on how much content you have. As you update the page, the price may update.', 'bm-concierge'))));
}

/***/ }),

/***/ "./assets/src/components/concierge-sidebar.js":
/*!****************************************************!*\
  !*** ./assets/src/components/concierge-sidebar.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConciergeSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/services */ "./assets/src/hooks/services.js");
/* harmony import */ var _panels_accessibility_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels/accessibility-review */ "./assets/src/components/panels/accessibility-review.js");
/* harmony import */ var _panels_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/layout */ "./assets/src/components/panels/layout.js");
/* harmony import */ var _panels_machine_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panels/machine-translation */ "./assets/src/components/panels/machine-translation.js");
/* harmony import */ var _panels_onpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panels/onpage */ "./assets/src/components/panels/onpage.js");
/* harmony import */ var _panels_proofreading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/proofreading */ "./assets/src/components/panels/proofreading.js");









function ConciergeSidebar() {
  const {
    hasLoadedServices,
    isAccessibilityEnabled,
    isOnpageEnabled,
    isProofreadingEnabled,
    isLayoutEnabled,
    isMachineTranslationEnabled
  } = (0,_hooks_services__WEBPACK_IMPORTED_MODULE_3__.useServices)();

  if (!hasLoadedServices) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConciergeHeader, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConciergeHeader, null), isAccessibilityEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_accessibility_review__WEBPACK_IMPORTED_MODULE_4__["default"], null), isOnpageEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_onpage__WEBPACK_IMPORTED_MODULE_7__["default"], null), isProofreadingEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_proofreading__WEBPACK_IMPORTED_MODULE_8__["default"], null), isLayoutEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null), isMachineTranslationEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_machine_translation__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bm-concierge-disclaimer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Some prices may depend on how much content you have. As you update the page, the price may update.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bm-concierge-disclaimer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All prices apply to this specific page of content only. Not the entire website.', 'bm-concierge'))));
}

const ConciergeHeader = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sometimes you could use an extra hand. We\'ll help you make your content and website be the best it can be.', 'bm-concierge')));

/***/ }),

/***/ "./assets/src/components/order-modal.js":
/*!**********************************************!*\
  !*** ./assets/src/components/order-modal.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrderModal; }
/* harmony export */ });
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
    submitButtonText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Place Order', 'bm-concierge'),
    thankYouNotice = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thanks for placing your concierge order. You will receive a confirmation at your e-mail address shortly.', 'bm-concierge'),
    showRefreshAfterSubmit = false,
    onSubmit
  } = props;

  if (!isOpen) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: title,
    onRequestClose: onClose,
    className: "bm-concierge-order-modal"
  }, hasBeenSubmitted ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "success",
    isDismissible: false
  }, thankYouNotice), showRefreshAfterSubmit ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To see the automatic changes from Concerige, please refresh the page now.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    isPrimary: true,
    onClick: () => window.location.reload()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Click to Reload Page Now', 'bm-concierge'))) : null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    expanded: true,
    justify: "flex-end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('https://bernskioldmedia.com/en/terms-policies/concierge/', 'concierge terms page', 'bm-concierge'),
    target: "_blank",
    style: {
      color: '#666',
      textDecoration: 'underline'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Our concierge terms apply ›', 'bm-concierge'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: onClose,
    style: {
      margin: '4px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Never Mind', 'bm-concierge'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccessibilityReview; }
/* harmony export */ });
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
  } = (0,_hooks_order__WEBPACK_IMPORTED_MODULE_3__.useOrder)();
  const [isExpress, setIsExpress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useAccessibilityPrice)();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accessibility Audit: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accessibility Audit: ', 'bm-concierge'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title(),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Confidently meet WCAG accessibility criteria. We\'ll analyze your content and return to you a checklist of things to address to meet the criteria.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turnaround', 'bm-concierge'), ":"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('72 hours (24h express)', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proceed to Order', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accessibility Review Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Accessibility Audit', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'accessibility-review',
        express: isExpress,
        price
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Publishing accessible content is important. In some sectors even required. An accessibility audit on this page against WCAG 2.1 AA includes all content and documents on it. You get a comprehensive audit protocol showing you what to improve and what is already good.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("We'll have the analysis back to you in 72 hours via email. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "bm-concierge-divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You\'ve chosen express. You will get the analysis in 24 hours.', 'bm-concierge') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Without express, you will get the analysis in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Price:', 'bm-concierge'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/layout.js":
/*!************************************************!*\
  !*** ./assets/src/components/panels/layout.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
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
  } = (0,_hooks_order__WEBPACK_IMPORTED_MODULE_3__.useOrder)();
  const [isExpress, setIsExpress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useLayoutPrice)();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout: ', 'bm-concierge'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title(),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Good design leaves a lasting impression and converts visitors. Let us help you create an engaging layout for this page.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turnaround', 'bm-concierge'), ":"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('72 hours (24h express)', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proceed to Order', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send for Layouting', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'layout',
        express: isExpress,
        price
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Using the full range of visuals on your website we\ll make this page look interesting, great and converting.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('We won\'t create illustrations, graphics or other media as part of this. But we may suggest it if we think it will benefit the page.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("We'll have the text back to you in 72 hours, right here in the editor. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "bm-concierge-divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You\'ve chosen express. Your page layout will be done in 24 hours.', 'bm-concierge') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Without express, your page layout will be done in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Price:', 'bm-concierge'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/machine-translation.js":
/*!*************************************************************!*\
  !*** ./assets/src/components/panels/machine-translation.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MachineTranslation; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/order */ "./assets/src/hooks/order.js");
/* harmony import */ var _hooks_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/price */ "./assets/src/hooks/price.js");
/* harmony import */ var _order_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-modal */ "./assets/src/components/order-modal.js");







function MachineTranslation() {
  const {
    orderModalOpen,
    orderSubmitted,
    placeOrder,
    closeOrderModal,
    openOrderModal
  } = (0,_hooks_order__WEBPACK_IMPORTED_MODULE_3__.useOrder)();
  const {
    formattedNormalPrice
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useMachineTranslationPrice)();
  const [targetLanguage, setTargetLanguage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    supportedLanguages
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useMachineTranslationLanguages)();

  const title = () => {
    if (formattedNormalPrice) {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Machine Translation: %s", "bm-concierge"), formattedNormalPrice);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Machine Translation: ", "bm-concierge"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title(),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Translate this page into a language of your choice instantly with our automated machine learning translation, powered by industry-leading DeepL.", "bm-concierge")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Turnaround", "bm-concierge"), ":"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Immediately", "bm-concierge")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Price", "bm-concierge"), ":"), " ", formattedNormalPrice)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Proceed to Order", "bm-concierge")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Machine Translation Concierge", "bm-concierge"),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Send for Machine Translation", "bm-concierge"),
    showRefreshAfterSubmit: true,
    onSubmit: () => {
      placeOrder({
        type: "machine_translation",
        price: formattedNormalPrice,
        targetLanguage
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Translate this page into a language of your choice instantly with our automated machine learning translation, powered by industry-leading DeepL.", "bm-concierge")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("When you order, your text will be translated right away. Machine translations are a great way to kickstart translations but do require a human touch afterwards.", "bm-concierge")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Note: The contents of the current page will be replaced with the translation."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Language", "bm-concierge"),
    onChange: value => setTargetLanguage(value),
    value: targetLanguage,
    options: supportedLanguages.map(language => {
      return {
        label: language.name,
        value: language.code
      };
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "bm-concierge-divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Your Price:", "bm-concierge"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, formattedNormalPrice))));
}

/***/ }),

/***/ "./assets/src/components/panels/onpage.js":
/*!************************************************!*\
  !*** ./assets/src/components/panels/onpage.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnPage; }
/* harmony export */ });
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
  } = (0,_hooks_order__WEBPACK_IMPORTED_MODULE_3__.useOrder)();
  const [isExpress, setIsExpress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [keyword, setKeyword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useOnPagePrice)();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SEO Optimization: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SEO Optimization: ', 'bm-concierge'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title(),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Make your page rank well in search engines by on-page SEO optimization.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turnaround', 'bm-concierge'), ":"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('72 hours (24h express)', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proceed to Order', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SEO Optimization Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send for SEO Optimization', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'onpage',
        express: isExpress,
        price,
        keyword
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('On-page SEO optimization boosts the ranking for the page in search engines. Based on your keyword, we will adjust the page for optimal ranking. Tweaking copy, optimizing titles and descriptions for Google and social sharing and taking care of more technical factors.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("We'll have the page ready for you in 72 hours, right here in the editor. In a hurry? Add the express option and have it ready within 24 hours.", 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "bm-concierge-divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Target Search Keyword', 'bm-concierge'),
    onChange: setKeyword,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('We need to know what search keyword you want your page to rank for in Google. We\ll check to make sure that it is reasonable before we do the optimization.', 'bm-concierge')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You\'ve chosen express. You will have it ready in 24 hours.', 'bm-concierge') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Without express, you will have the page ready in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Price:', 'bm-concierge'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/components/panels/proofreading.js":
/*!******************************************************!*\
  !*** ./assets/src/components/panels/proofreading.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Proofreading; }
/* harmony export */ });
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
  } = (0,_hooks_order__WEBPACK_IMPORTED_MODULE_3__.useOrder)();
  const [isExpress, setIsExpress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    formattedNormalPrice,
    formattedExpressPrice,
    formattedExpressPriceExtra
  } = (0,_hooks_price__WEBPACK_IMPORTED_MODULE_4__.useProofreadingPrice)();
  const price = isExpress ? formattedExpressPrice : formattedNormalPrice;

  const title = () => {
    if (formattedNormalPrice) {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proofreading: %s', 'bm-concierge'), formattedNormalPrice);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proofreading: ', 'bm-concierge'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title(),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ready to publish but want a second eye? Let us proof your content to free it from mistakes.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turnaround', 'bm-concierge'), ":"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('72 hours (24h express)', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price', 'bm-concierge'), ":"), " ", formattedNormalPrice)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    isSecondary: true,
    onClick: openOrderModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proceed to Order', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proofreading Concierge', 'bm-concierge'),
    isOpen: orderModalOpen,
    onClose: closeOrderModal,
    hasBeenSubmitted: orderSubmitted,
    submitButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send for Proofreading', 'bm-concierge'),
    onSubmit: () => {
      placeOrder({
        type: 'proofreading',
        express: isExpress,
        price
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Proofreading includes catching any errors and making sure the content adheres to a well-formed style.', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("We'll have the text back to you in 72 hours, right here in the editor. In a hurry? Add the express option and get it back within 24 hours.", 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "bm-concierge-divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Express Delivery (%s)', 'bm-concierge'), formattedExpressPriceExtra),
    help: isExpress ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You\'ve chosen express. You will get your content back in 24 hours.', 'bm-concierge') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Without express, you will get your text back in 72 hours.', 'bm-concierge'),
    onChange: () => setIsExpress(!isExpress),
    checked: isExpress === true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Price:', 'bm-concierge'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, price))));
}

/***/ }),

/***/ "./assets/src/hooks/order.js":
/*!***********************************!*\
  !*** ./assets/src/hooks/order.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOrder": function() { return /* binding */ useOrder; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const useOrder = () => {
  const {
    placeOrder
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('bm/concierge');
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isSubmitted, setIsSubmitted] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const placeOrderFromData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(data => {
    placeOrder({ ...data,
      postId: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPostId()
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOnPagePrice": function() { return /* binding */ useOnPagePrice; },
/* harmony export */   "useAccessibilityPrice": function() { return /* binding */ useAccessibilityPrice; },
/* harmony export */   "useProofreadingPrice": function() { return /* binding */ useProofreadingPrice; },
/* harmony export */   "useLayoutPrice": function() { return /* binding */ useLayoutPrice; },
/* harmony export */   "useMachineTranslationPrice": function() { return /* binding */ useMachineTranslationPrice; },
/* harmony export */   "useMachineTranslationLanguages": function() { return /* binding */ useMachineTranslationLanguages; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/currency */ "./assets/src/utilities/currency.js");
/* harmony import */ var _utilities_word_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/word-count */ "./assets/src/utilities/word-count.js");




const usePriceSelect = (type, data = {}) => {
  const {
    normalPrice = null,
    expressPrice = null,
    currency = null
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    var _prices$type;

    const {
      prices
    } = select("bm/concierge").getPrices(type, data);
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
    formattedExpressPrice: (0,_utilities_currency__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(expressPrice, currency),
    formattedNormalPrice: (0,_utilities_currency__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(normalPrice, currency),
    formattedExpressPriceExtra: (0,_utilities_currency__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(expressPriceExtra, currency)
  };
};

const useOnPagePrice = () => {
  return usePriceSelect("onpage", {
    wordCount: (0,_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__.getWordCount)()
  });
};
const useAccessibilityPrice = () => {
  return usePriceSelect("accessibility");
};
const useProofreadingPrice = () => {
  return usePriceSelect("proofreading", {
    wordCount: (0,_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__.getWordCount)()
  });
};
const useLayoutPrice = () => {
  return usePriceSelect("layout", {
    wordCount: (0,_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__.getWordCount)()
  });
};
const useMachineTranslationPrice = () => {
  return usePriceSelect("machine_translation", {
    wordCount: (0,_utilities_word_count__WEBPACK_IMPORTED_MODULE_2__.getWordCount)()
  });
};
const useMachineTranslationLanguages = () => {
  const {
    supportedLanguages = []
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      languages
    } = select("bm/concierge").getLanguages();
    return {
      supportedLanguages: languages
    };
  }, []);
  return {
    supportedLanguages
  };
};

/***/ }),

/***/ "./assets/src/hooks/services.js":
/*!**************************************!*\
  !*** ./assets/src/hooks/services.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServices": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useServices = () => {
  const {
    services = {}
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('bm/concierge').getServices();
  }, []);
  const {
    onpage,
    proofreading,
    layout,
    accessibility,
    machine_translation: machineTranslation
  } = services;
  return {
    enabledServicesCount: Object.keys(services).length,
    hasLoadedServices: Object.keys(services).length > 0,
    isOnpageEnabled: onpage === true,
    isProofreadingEnabled: proofreading === true,
    isLayoutEnabled: layout === true,
    isAccessibilityEnabled: accessibility === true,
    isMachineTranslationEnabled: machineTranslation === true
  };
};

/***/ }),

/***/ "./assets/src/store/concerige.js":
/*!***************************************!*\
  !*** ./assets/src/store/concerige.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_STATE = {
  services: [],
  prices: {},
  languages: []
};
const actions = {
  *placeOrder(data) {
    const response = yield actions.postToApi("/bm-concierge/v1/order", data);
    return {
      type: "PLACE_ORDER",
      response
    };
  },

  setServices(services) {
    return {
      type: "SET_SERVICES",
      services
    };
  },

  setPrices(service, express, normal, currency) {
    return {
      type: "SET_PRICES",
      service,
      express,
      normal,
      currency
    };
  },

  setSupportedLanguages(languages) {
    return {
      type: "SET_SUPPORTED_LANGUAGES",
      languages
    };
  },

  fetchFromApi(path) {
    return {
      type: "FETCH_FROM_API",
      path
    };
  },

  postToApi(path, data) {
    return {
      type: "POST_TO_API",
      path,
      data
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)("bm/concierge", {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case "PLACE_ORDER":
        return { ...state,
          data: action.data
        };

      case "SET_SERVICES":
        return { ...state,
          services: action.services
        };

      case "SET_SUPPORTED_LANGUAGES":
        return { ...state,
          languages: action.languages
        };

      case "SET_PRICES":
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
    },

    getLanguages(state) {
      const {
        languages
      } = state;
      return {
        languages
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
        method: "POST",
        data: action.data
      });
    }

  },
  resolvers: {
    *getPrices(type, data) {
      const response = yield actions.postToApi("/bm-concierge/v1/" + type, data);
      const {
        expressPrice,
        normalPrice,
        currency
      } = response;
      return actions.setPrices(type, expressPrice, normalPrice, currency);
    },

    *getLanguages() {
      const response = yield actions.postToApi("/bm-concierge/v1/machine_translation_languages");
      const {
        languages
      } = response;
      return actions.setSupportedLanguages(languages);
    },

    *getServices() {
      const services = yield actions.fetchFromApi("/bm-concierge/v1/services");
      return actions.setServices(services);
    }

  }
}));

/***/ }),

/***/ "./assets/src/utilities/currency.js":
/*!******************************************!*\
  !*** ./assets/src/utilities/currency.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCurrency": function() { return /* binding */ formatCurrency; },
/* harmony export */   "getLocaleForCurrency": function() { return /* binding */ getLocaleForCurrency; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWordCount": function() { return /* binding */ getWordCount; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__);



function getWordCount() {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor').getBlocks();
  return (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_2__.count)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(blocks), 'words');
}

/***/ }),

/***/ "./assets/src/block-editor.css":
/*!*************************************!*\
  !*** ./assets/src/block-editor.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/wordcount":
/*!***********************************!*\
  !*** external ["wp","wordcount"] ***!
  \***********************************/
/***/ (function(module) {

module.exports = window["wp"]["wordcount"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************!*\
  !*** ./assets/src/block-editor.js ***!
  \************************************/
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

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__.registerPlugin)('bm-concierge', {
  render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('BM Concierge', 'bm-concierge')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_concierge_panel__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    target: "sidebar",
    icon: _components_concierge_icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('BM Concierge', 'bm-concierge')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "sidebar",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('BM Concierge', 'bm-concierge'),
    icon: _components_concierge_icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_concierge_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], null))),
  icon: null
});
/**
 * Stores
 */

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(_store_concerige__WEBPACK_IMPORTED_MODULE_9__["default"]);
}();
/******/ })()
;
//# sourceMappingURL=block-editor.js.map