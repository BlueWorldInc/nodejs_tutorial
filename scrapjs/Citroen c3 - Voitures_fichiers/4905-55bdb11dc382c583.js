"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4905],{95395:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(16678),o=n(37947),a=(0,n(82297).Z)("div")((0,o.ZP)({bg:"white",borderRadius:"small",p:"medium"}),(0,r.bU)({variants:{outlined:{borderColor:"greyMedium",borderStyle:"solid",borderWidth:"x-small"},shadowed:{boxShadow:"normal"}}}),(0,r.qC)(r.Dh,r.FK));a.defaultProps={variant:"outlined"}},54483:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var s=n(67294),l=n(73935),f=n(45697),p=n(36959).createFocusTrap,d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,e);var t,n,r,c=i(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).tailoredFocusTrapOptions={returnFocusOnDeactivate:!1},t.returnFocusOnDeactivate=!0;var n=e.focusTrapOptions;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&("returnFocusOnDeactivate"!==r?"onPostDeactivate"!==r?t.tailoredFocusTrapOptions[r]=n[r]:t.onPostDeactivate=n[r]:t.returnFocusOnDeactivate=!!n[r]);return t.focusTrapElements=e.containerElements||[],t.updatePreviousElement(),t}return t=u,(n=[{key:"getNodeForOption",value:function(e){var t=this.tailoredFocusTrapOptions[e];if(!t)return null;var n=t;if("string"===typeof t&&!(n=document.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"===typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus");return e||this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.props.focusTrapOptions.document||("undefined"!==typeof document?document:void 0);e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){var e=this,t=this.tailoredFocusTrapOptions,n=t.checkCanReturnFocus,r=t.preventScroll,o=void 0!==r&&r;this.focusTrap&&this.focusTrap.deactivate({returnFocus:!1});var a=function(){var t=e.getReturnFocusNode();(null===t||void 0===t?void 0:t.focus)&&e.returnFocusOnDeactivate&&t.focus({preventScroll:o}),e.onPostDeactivate&&e.onPostDeactivate.call(null)};n?n(this.getReturnFocusNode()).then(a,a):a()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var e=this.focusTrapElements.map(l.findDOMNode);e.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(e,this.tailoredFocusTrapOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,r=!e.paused&&this.props.paused,o=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n)return void this.deactivateTrap();r&&this.focusTrap.pause(),o&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements,this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?s.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===s.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return s.cloneElement(t,{ref:function(n){var r=e.props.containerElements;t&&("function"===typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=r||[n]}})}return null}}])&&o(t.prototype,n),r&&o(t,r),u}(s.Component),v="undefined"===typeof Element?Function:Element;d.propTypes={active:f.bool,paused:f.bool,focusTrapOptions:f.shape({document:f.object,onActivate:f.func,onPostActivate:f.func,checkCanFocusTrap:f.func,onDeactivate:f.func,onPostDeactivate:f.func,checkCanReturnFocus:f.func,initialFocus:f.oneOfType([f.instanceOf(v),f.string,f.func,f.bool]),fallbackFocus:f.oneOfType([f.instanceOf(v),f.string,f.func]),escapeDeactivates:f.oneOfType([f.bool,f.func]),clickOutsideDeactivates:f.oneOfType([f.bool,f.func]),returnFocusOnDeactivate:f.bool,setReturnFocus:f.oneOfType([f.instanceOf(v),f.string,f.func]),allowOutsideClick:f.oneOfType([f.bool,f.func]),preventScroll:f.bool}),containerElements:f.arrayOf(f.instanceOf(v)),children:f.oneOfType([f.element,f.instanceOf(v)])},d.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:p},e.exports=d},36959:function(e,t,n){n.r(t),n.d(t,{createFocusTrap:function(){return w}});var r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),a="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r=r.filter(n)},c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},s=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},f=function(e,t){return!(t.disabled||function(e){return s(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),o=r.width,i=r.height;return 0===o&&0===i}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(s(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},p=function(e,t){return!(!f(e,t)||l(t)||c(t)<0)},d=r.concat("iframe").join(","),v=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,d)&&f(t,e)};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},deactivateTrap:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}}}(),y=function(e){return setTimeout(e,0)},O=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"===typeof e?e.apply(void 0,n):e},T=function(e){return e.target.shadowRoot&&"function"===typeof e.composedPath?e.composedPath()[0]:e.target},w=function(e,t){var n,r=(null===t||void 0===t?void 0:t.document)||document,o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},l=function(e){return!(!e||!a.containers.some((function(t){return t.contains(e)})))},f=function(e){var t=o[e];if("function"===typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"===typeof t&&!(c=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},d=function(){var e=f("initialFocus");if(!1===e)return!1;if(void 0===e)if(l(r.activeElement))e=r.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||f("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},w=function(){if(a.tabbableGroups=a.containers.map((function(e){var t=function(e,t){var n=[],r=[];return i(e,(t=t||{}).includeContainer,p.bind(null,t)).forEach((function(e,t){var o=c(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(u).map((function(e){return e.node})).concat(n)}(e);if(t.length>0)return{container:e,firstTabbableNode:t[0],lastTabbableNode:t[t.length-1]}})).filter((function(e){return!!e})),a.tabbableGroups.length<=0&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},g=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(d()))},F=function(e){var t=f("setReturnFocus",e);return t||!1!==t&&e},k=function(e){var t=T(e);l(t)||(E(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!v(t)}):E(o.allowOutsideClick,e)||e.preventDefault())},D=function(e){var t=T(e),n=l(t);n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),g(a.mostRecentlyFocusedNode||d()))},N=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==E(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=T(e);w();var n=null;if(a.tabbableGroups.length>0){var r=O(a.tabbableGroups,(function(e){return e.container.contains(t)}));if(r<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var o=O(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(o<0&&a.tabbableGroups[r].container===t&&(o=r),o>=0){var i=0===o?a.tabbableGroups.length-1:o-1;n=a.tabbableGroups[i].lastTabbableNode}}else{var c=O(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(c<0&&a.tabbableGroups[r].container===t&&(c=r),c>=0){var u=c===a.tabbableGroups.length-1?0:c+1;n=a.tabbableGroups[u].firstTabbableNode}}}else n=f("fallbackFocus");n&&(e.preventDefault(),g(n))}(e)},S=function(e){if(!E(o.clickOutsideDeactivates,e)){var t=T(e);l(t)||E(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},P=function(){if(a.active)return m.activateTrap(n),a.delayInitialFocusTimer=o.delayInitialFocus?y((function(){g(d())})):g(d()),r.addEventListener("focusin",D,!0),r.addEventListener("mousedown",k,{capture:!0,passive:!1}),r.addEventListener("touchstart",k,{capture:!0,passive:!1}),r.addEventListener("click",S,{capture:!0,passive:!1}),r.addEventListener("keydown",N,{capture:!0,passive:!1}),n},C=function(){if(a.active)return r.removeEventListener("focusin",D,!0),r.removeEventListener("mousedown",k,!0),r.removeEventListener("touchstart",k,!0),r.removeEventListener("click",S,!0),r.removeEventListener("keydown",N,!0),n};return(n={activate:function(e){if(a.active)return this;var t=s(e,"onActivate"),n=s(e,"onPostActivate"),o=s(e,"checkCanFocusTrap");o||w(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,t&&t();var i=function(){o&&w(),P(),n&&n()};return o?(o(a.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!a.active)return this;clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,C(),a.active=!1,a.paused=!1,m.deactivateTrap(n);var t=s(e,"onDeactivate"),r=s(e,"onPostDeactivate"),o=s(e,"checkCanReturnFocus");t&&t();var i=s(e,"returnFocus","returnFocusOnDeactivate"),c=function(){y((function(){i&&g(F(a.nodeFocusedBeforeActivation)),r&&r()}))};return i&&o?(o(F(a.nodeFocusedBeforeActivation)).then(c,c),this):(c(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,C()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,w(),P(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"===typeof e?r.querySelector(e):e})),a.active&&w(),this}}).updateContainerElements(e),n}}}]);