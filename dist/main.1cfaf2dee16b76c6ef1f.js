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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(1);

__webpack_require__(2);

document.getElementById("button").addEventListener("click", getValue);

var musicSum;

function getValue() {
  /** ========================================================
      GET  del prezzo  e quantità di ogni categoria di prodotti
    ===========================================================*/
  const musicPrice = $("#music").val();
  let musicQnt = $("#musicQnt").val();
  const bookPrice = $("#book").val();
  let bookQnt = $("#bookQnt").val();
  const chocolatePrice = $("#chocolate").val();
  let chocQnt = $("#chocQnt").val();
  const importedChockPrice = $("#importedChock").val();
  let importedChocQnt = $("#importedChocQnt").val();
  const importedParfumPrice = $("#importedParfum").val();
  let importedParfumQnt = $("#importedParfQnt").val();
  const importedParfBisPrice = $("#importedParfumBis").val();
  let importedParfBisQnt = $("#importedParfQntBis").val();
  const bottleParfumPrice = $("#bottleParfum").val();
  let bottleParfumQnt = $("#bottleParfQnt").val();
  const pillsPrice = $("#pills").val();
  let pillsQnt = $("#pillsQnt").val();
  const boxImportedChockPrice = $("#importedBoxChock").val();
  let boxImpChockQnt = $("#importedBoxChockQnt").val();

  /**==================================
      GET  delle categorie 
    ==================================*/
  // const music = document.querySelector(".music").textContent;
  const book = document.querySelector(".book").textContent;
  const food = document.querySelector(".food").textContent;
  // const cosmetics = document.querySelector(".cosmetics").textContent;
  const medical = document.querySelector(".medical").textContent;

  /**===============================0
   *            Titoli
   * ================================*/

  const musicCdTitle = (0, _utils.getTitle)(".musicCd");
  const bookTitle = (0, _utils.getTitle)(".bookTitle");
  const chockBarTitle = (0, _utils.getTitle)(".chocolateBar");
  const chockImportTitle = (0, _utils.getTitle)(".importedChock");
  const parfumImpTitle = (0, _utils.getTitle)(".importedParfum");
  const parfBisTitle = (0, _utils.getTitle)(".importedParfumBis");
  const bottleParfTitle = (0, _utils.getTitle)(".bottleParf");
  const pillsTitle = (0, _utils.getTitle)(".pills");
  const boxChockTitle = (0, _utils.getTitle)(".importedBoxChock");
  /**==================================
        stampa ricevuta
    ==================================*/

  musicSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)(music), musicPrice, musicQnt, musicCdTitle);

  const bookSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)(book), bookPrice, bookQnt, bookTitle);

  const chocoSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)(food), chocolatePrice, chocQnt, chockBarTitle);

  const importedChocoSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)(food), importedChockPrice, importedChocQnt, chockImportTitle);

  const importedParfumSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)("cosmetics"), importedParfumPrice, importedParfumQnt, parfumImpTitle);

  const importedParfBisSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)("cosmetics"), importedParfBisPrice, importedParfBisQnt, parfBisTitle);

  const bottleParfSum = (0, _utils.calCulatePrice)((0, _utils.checkCategories)("cosmetics"), bottleParfumPrice, bottleParfumQnt, bottleParfTitle);

  console.log(musicSum);
  // const pillSum = calCulatePrice(
  //   checkCategories(medical),
  //   pillsPrice,
  //   pillsQnt,
  //   pillsTitle
  // );

  // const importedBoxChock = calCulatePrice(
  //   checkCategories(food),
  //   boxImportedChockPrice,
  //   boxImpChockQnt,
  //   boxChockTitle
  // );

}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const checkCategories = exports.checkCategories = categories => {
  switch (categories) {
    case "book":
      return false;

    case "medical":
      return false;

    case "food":
      return false;
    default:
      return true;
  }
};

const checkImported = exports.checkImported = product => {
  var imported = product.match(/imported/g);

  if (imported) {
    return true;
  } else {
    return false;
  }
};
var receiveObj = {};
const calCulatePrice = exports.calCulatePrice = (checkCategories, prezzo, quantity, label) => {
  //check sulla categoria medical food etc..
  if (checkCategories) {
    let price = prezzo * quantity;

    if (checkImported(label)) {
      let rate = 0.15;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
    } else {
      let rate = 0.1;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
    }

    return receiveObj;
  } else {
    let price = prezzo * quantity;

    if (checkImported(label)) {
      let rate = 0.05;
      let taxes = price * rate;
      //console.log(taxes);
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.importedTax = taxes.toFixed(2);
      receiveObj.subtotal = (Math.ceil(subtotal * 20 - 0.5) / 20).toFixed(2);
    } else {
      receiveObj.categories = label;
      //receiveObj.taxFree = true;
      receiveObj.subtotal = price;
    }

    return receiveObj;
  }
};

const getTitle = exports.getTitle = htmlClass => {
  let title = document.querySelector(`${htmlClass}`).textContent.toLocaleLowerCase().trim();
  return title;
};

const buildReceive = exports.buildReceive = obj => {
  let producList = [];

  producList.push(obj);

  producList.map((el, i) => {
    return el;
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.1cfaf2dee16b76c6ef1f.js.map