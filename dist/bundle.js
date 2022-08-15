/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/globals.scss":
/*!***************************!*\
  !*** ./sass/globals.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/modules/NotificationTab.js":
/*!***************************************!*\
  !*** ./js/modules/NotificationTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationTab": () => (/* binding */ NotificationTab)
/* harmony export */ });
class NotificationTab {
  element;

  constructor() {
    this.onload();
  }

  start() {
    this.element = document.getElementById("notification-bar");

    setTimeout(() => {
      this.element.style.transform = "translateY(0)";
    }, 1000);
  }

  close() {
    this.element.addEventListener("click", () => {
      this.element.style.transform = "translateY(-100%)";
    });
  }

  onload() {
    window.addEventListener("DOMContentLoaded", () => {
      this.start();
      this.close();
    });
  }
}


/***/ }),

/***/ "./js/modules/Slider.js":
/*!******************************!*\
  !*** ./js/modules/Slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  provider;
  images;
  totalImages;
  btnPrev;
  btnNext;
  init = 0;
  slideInterval;
  interval = 5000;

  constructor() {
    this.onload();
  }

  start() {
    this.provider = document.getElementById("slide-provider");
    this.images = Array.from(document.getElementsByClassName("slide-img"));
    this.btnNext = document.getElementById("slide-next");
    this.btnPrev = document.getElementById("slide-prev");

    this.provider.setAttribute("data-images", this.images.length);
    this.totalImages = this.images.length;

    this.changeStateImage();
    this.startInterval();
  }

  startInterval() {
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, this.interval);
  }

  clearInterval() {
    clearInterval(this.slideInterval);
  }

  resetInterval() {
    this.clearInterval();
    this.startInterval();
  }

  changeStateImage() {
    this.images.map((img, index) => {
      if (index === this.init) {
        img.setAttribute("data-state", "visible");
        return;
      }

      img.setAttribute("data-state", "hidden");
    });
  }

  nextImage() {
    if (this.init === this.totalImages - 1) {
      this.init = 0;
      this.changeStateImage();
      return;
    }

    this.init = this.init + 1;
    this.changeStateImage();
  }

  prevImage() {
    if (this.init === 0) {
      this.init = this.totalImages - 1;
      this.changeStateImage();
      return;
    }

    this.init = this.init - 1;
    this.changeStateImage();
  }

  controls() {
    this.btnNext.addEventListener("click", () => {
      this.nextImage();
      this.resetInterval();
    });

    this.btnPrev.addEventListener("click", () => {
      this.prevImage();
      this.resetInterval();
    });

    this.provider.addEventListener("mouseenter", () => {
      this.clearInterval();
    });

    this.provider.addEventListener("mouseleave", () => {
      this.startInterval();
    });
  }

  onload() {
    window.addEventListener("DOMContentLoaded", () => {
      this.start();
      this.controls();
    });
  }
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_globals_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/globals.scss */ "./sass/globals.scss");
/* harmony import */ var _modules_NotificationTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/NotificationTab */ "./js/modules/NotificationTab.js");
/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Slider */ "./js/modules/Slider.js");




new _modules_NotificationTab__WEBPACK_IMPORTED_MODULE_1__.NotificationTab();
new _modules_Slider__WEBPACK_IMPORTED_MODULE_2__.Slider();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map