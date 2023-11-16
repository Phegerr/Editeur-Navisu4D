/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hide.js":
/*!************************!*\
  !*** ./src/js/hide.js ***!
  \************************/
/***/ (() => {

console.log("eheheheheheh");
var hscenar = document.getElementById("hideScenario");
var scenar = document.getElementById("scenar");
var hzone = document.getElementById("hideZone");
var zone = document.getElementById("zone");
var hcam = document.getElementById("hideCamera");
var cam = document.getElementById("cam");
var hetapes = document.getElementById("hideEtapes");
var etapes = document.getElementById("etapes");
var hdocs = document.getElementById("hideDocs");
var docs = document.getElementById("docs");
/*let hbutton = document.getElementById("hidebutton");*/

hscenar.addEventListener("click", function () {
  if (getComputedStyle(scenar).display != "none") {
    scenar.style.display = "none";
    hscenar.style.transform = "rotate(180deg)";
  } else {
    scenar.style.display = "block";
    hscenar.style.transform = "rotate(0deg)";
  }
});
hzone.addEventListener("click", function () {
  if (getComputedStyle(zone).display != "none") {
    zone.style.display = "none";
    hzone.style.transform = "rotate(180deg)";
  } else {
    zone.style.display = "block";
    hzone.style.transform = "rotate(0deg)";
  }
});
hcam.addEventListener("click", function () {
  if (getComputedStyle(cam).display != "none") {
    cam.style.display = "none";
    hcam.style.transform = "rotate(180deg)";
  } else {
    cam.style.display = "block";
    hcam.style.transform = "rotate(0deg)";
  }
});
hetapes.addEventListener("click", function () {
  if (getComputedStyle(etapes).display != "none") {
    etapes.style.display = "none";
    hetapes.style.transform = "rotate(180deg)";
  } else {
    etapes.style.display = "block";
    hetapes.style.transform = "rotate(0deg)";
  }
});
hdocs.addEventListener("click", function () {
  if (getComputedStyle(docs).display != "none") {
    docs.style.display = "none";
    hdocs.style.transform = "rotate(180deg)";
  } else {
    docs.style.display = "block";
    hdocs.style.transform = "rotate(0deg)";
  }
});

/***/ }),

/***/ "./src/js/questionsBtn.js":
/*!********************************!*\
  !*** ./src/js/questionsBtn.js ***!
  \********************************/
/***/ (() => {

var ind;
function addquestion() {
  /*
        let index = 6;
        let ind = index.toString();
        let newquestion = '<li id="textArea' + ind + '" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="txt" cols="10" rows="1"></textarea></li>';
        document.getElementById("asks").insertAdjacentHTML("beforeend", newquestion)
        */
  var newquestion = '<li id="textArea" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="txt" cols="10" rows="1"></textarea></li>';
  document.getElementById("asks").insertAdjacentHTML("beforeend", newquestion);
}
function insertquestion() {
  var insertQuestion = '<li id="textArea" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="txt" cols="10" rows="1"></textarea></li>';
  document.getElementById("textArea").insertAdjacentHTML('afterend', insertQuestion);
}
function removequestion() {
  var element = document.getElementById("textArea");
  element.remove();
  /*
      element2remove = "textArea6";
      const element = document.getElementById(element2remove);
      element.remove(); 
  */
}

window.addquestion = addquestion;
window.insertquestion = insertquestion;
window.removequestion = removequestion;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}


.div-ask button {
    display: inline-block;
    width: 9rem;
    height: 2rem;
    font-size: 0.8em;
    vertical-align: middle;
    border-radius: 5px;
    border-color: #cfeed1;
    border: 2px;
    transform: rotate(0deg);
}

.div-ask button:hover {
    display: inline-block;
    width: 10rem;
    height: 2rem;
    font-size: 0.8em;
    vertical-align: middle;
    border-radius: 5px;
    box-shadow: 0 0 3px rgb(9, 143, 45);
    background-color: hsl(123, 57%, 15%);
    color: whitesmoke;
    transform: rotate(0deg);
}

.div-ask p span {
    display: inline-block;
    padding: 10px;
}



#insert:hover {
    background-color: chocolate;
    box-shadow: 0 0 3px chocolate;
}

#remove:hover {
    background-color: crimson;
    box-shadow: 0 0 3px crimson;
}


#hideScenario::before,
#hideZone::before,
#hideCamera::before,
#hideEtapes::before,
#hideDocs::before {
    display: block;
    content: "\\25B3";
    margin: 0;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 100%;
    font-size: 2em;
    color: #143b28;
    padding: 0 0 0 0;
    width: 1em;
    height: 1em;
    text-align: center;
    text-shadow: 1px 1px 3px gray;

}

/*------- haut de page-----------------*/

#scroll_to_top {
    position: fixed;
    width: 25px;
    height: 25px;
    bottom: 50px;
    right: 60px;
}

#scroll_to_top img {
    width: 40px;
    height: 40px;
}`, "",{"version":3,"sources":["webpack://./src/styles/buttons.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;;AAGA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;;;AAIA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;AAC/B;;;AAGA;;;;;IAKI,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,6BAA6B;;AAEjC;;AAEA,wCAAwC;;AAExC;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["button {\n    appearance: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n\n.div-ask button {\n    display: inline-block;\n    width: 9rem;\n    height: 2rem;\n    font-size: 0.8em;\n    vertical-align: middle;\n    border-radius: 5px;\n    border-color: #cfeed1;\n    border: 2px;\n    transform: rotate(0deg);\n}\n\n.div-ask button:hover {\n    display: inline-block;\n    width: 10rem;\n    height: 2rem;\n    font-size: 0.8em;\n    vertical-align: middle;\n    border-radius: 5px;\n    box-shadow: 0 0 3px rgb(9, 143, 45);\n    background-color: hsl(123, 57%, 15%);\n    color: whitesmoke;\n    transform: rotate(0deg);\n}\n\n.div-ask p span {\n    display: inline-block;\n    padding: 10px;\n}\n\n\n\n#insert:hover {\n    background-color: chocolate;\n    box-shadow: 0 0 3px chocolate;\n}\n\n#remove:hover {\n    background-color: crimson;\n    box-shadow: 0 0 3px crimson;\n}\n\n\n#hideScenario::before,\n#hideZone::before,\n#hideCamera::before,\n#hideEtapes::before,\n#hideDocs::before {\n    display: block;\n    content: \"\\25B3\";\n    margin: 0;\n    outline: none;\n    border: 0;\n    cursor: pointer;\n    border-radius: 100%;\n    font-size: 2em;\n    color: #143b28;\n    padding: 0 0 0 0;\n    width: 1em;\n    height: 1em;\n    text-align: center;\n    text-shadow: 1px 1px 3px gray;\n\n}\n\n/*------- haut de page-----------------*/\n\n#scroll_to_top {\n    position: fixed;\n    width: 25px;\n    height: 25px;\n    bottom: 50px;\n    right: 60px;\n}\n\n#scroll_to_top img {\n    width: 40px;\n    height: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menuFichiers.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menuFichiers.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.labelMenu {
    color: whitesmoke;
    font-size: 1.0em;
    display: block;
    position: absolute;
    top: 20px;
    left: 35px;
  }
  
  .menuToggle {
    display: block;
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 6000;
    user-select: none;
  }
  
  .menuToggle a {
    text-decoration: none;
    color: whitesmoke;
  
    transition: color 0.3s ease;
  }
  
  .menuToggle a:hover {
    color: #76b998;
  }
  
  
  .menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
  
    cursor: pointer;
  
    opacity: 0;
    /* hide this */
    z-index: 2;
    /* and place it over the hamburger */
  
    -webkit-touch-callout: none;
  }
  
  /*
    * Just a quick hamburger
    */
  .menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
  
    background: whitesmoke;
    border-radius: 3px;
  
    z-index: 1;
  
    transform-origin: 4px 0px;
  
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      background-color 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      opacity 0.55s ease;
  
  }
  
  .menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  
  .menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  
  /* 
    * Transform all the slices of hamburger
    * into a crossmark.
    */
  .menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: red;
  }
  
  /*
    * But let's hide the middle one.
    */
  .menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  /*
    * Ohyeah and the last one should go the other direction
    */
  .menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
    background-color: red;
  }
  
  /*
    * Make this absolute positioned
    * at the top left of the screen
    */
  .menu {
    position: absolute;
    width: 10vr;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #143b28;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    border-radius: 0 0 5px 5px;
    box-shadow: 5px 5px 5px #5a626844;
    transform-origin: 0% 0%;
    transform: translate(-110%, 0);
  
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  }
  
  .menu li {
  
    padding: 10px 0;
    font-size: 1.0em;
  }
  
  /*
    * And let's slide it in from the left
    */
  .menuToggle input:checked~ul {
    transform: none;
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/menuFichiers.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;IACrB,iBAAiB;;IAEjB,2BAA2B;EAC7B;;EAEA;IACE,cAAc;EAChB;;;EAGA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;;IAEV,eAAe;;IAEf,UAAU;IACV,cAAc;IACd,UAAU;IACV,oCAAoC;;IAEpC,2BAA2B;EAC7B;;EAEA;;KAEG;EACH;IACE,cAAc;IACd,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,kBAAkB;;IAElB,sBAAsB;IACtB,kBAAkB;;IAElB,UAAU;;IAEV,yBAAyB;;IAEzB;;wBAEoB;;EAEtB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;;;KAGG;EACH;IACE,UAAU;IACV,8CAA8C;IAC9C,eAAe;EACjB;;EAEA;;KAEG;EACH;IACE,UAAU;IACV,uCAAuC;EACzC;;EAEA;;KAEG;EACH;IACE,4CAA4C;IAC5C,qBAAqB;EACvB;;EAEA;;;KAGG;EACH;IACE,kBAAkB;IAClB,WAAW;IACX,wBAAwB;IACxB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,mCAAmC;IACnC,yCAAyC;IACzC,0BAA0B;IAC1B,iCAAiC;IACjC,uBAAuB;IACvB,8BAA8B;;IAE9B,6DAA6D;EAC/D;;EAEA;;IAEE,eAAe;IACf,gBAAgB;EAClB;;EAEA;;KAEG;EACH;IACE,eAAe;EACjB","sourcesContent":[".labelMenu {\n    color: whitesmoke;\n    font-size: 1.0em;\n    display: block;\n    position: absolute;\n    top: 20px;\n    left: 35px;\n  }\n  \n  .menuToggle {\n    display: block;\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    z-index: 6000;\n    user-select: none;\n  }\n  \n  .menuToggle a {\n    text-decoration: none;\n    color: whitesmoke;\n  \n    transition: color 0.3s ease;\n  }\n  \n  .menuToggle a:hover {\n    color: #76b998;\n  }\n  \n  \n  .menuToggle input {\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    top: -7px;\n    left: -5px;\n  \n    cursor: pointer;\n  \n    opacity: 0;\n    /* hide this */\n    z-index: 2;\n    /* and place it over the hamburger */\n  \n    -webkit-touch-callout: none;\n  }\n  \n  /*\n    * Just a quick hamburger\n    */\n  .menuToggle span {\n    display: block;\n    width: 33px;\n    height: 4px;\n    margin-bottom: 5px;\n    position: relative;\n  \n    background: whitesmoke;\n    border-radius: 3px;\n  \n    z-index: 1;\n  \n    transform-origin: 4px 0px;\n  \n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n      background-color 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),\n      opacity 0.55s ease;\n  \n  }\n  \n  .menuToggle span:first-child {\n    transform-origin: 0% 0%;\n  }\n  \n  .menuToggle span:nth-last-child(2) {\n    transform-origin: 0% 100%;\n  }\n  \n  /* \n    * Transform all the slices of hamburger\n    * into a crossmark.\n    */\n  .menuToggle input:checked~span {\n    opacity: 1;\n    transform: rotate(45deg) translate(-2px, -1px);\n    background: red;\n  }\n  \n  /*\n    * But let's hide the middle one.\n    */\n  .menuToggle input:checked~span:nth-last-child(3) {\n    opacity: 0;\n    transform: rotate(0deg) scale(0.2, 0.2);\n  }\n  \n  /*\n    * Ohyeah and the last one should go the other direction\n    */\n  .menuToggle input:checked~span:nth-last-child(2) {\n    transform: rotate(-45deg) translate(0, -1px);\n    background-color: red;\n  }\n  \n  /*\n    * Make this absolute positioned\n    * at the top left of the screen\n    */\n  .menu {\n    position: absolute;\n    width: 10vr;\n    margin: -100px 0 0 -50px;\n    padding: 50px;\n    padding-top: 125px;\n    background: #143b28;\n    list-style-type: none;\n    -webkit-font-smoothing: antialiased;\n    /* to stop flickering of text in safari */\n    border-radius: 0 0 5px 5px;\n    box-shadow: 5px 5px 5px #5a626844;\n    transform-origin: 0% 0%;\n    transform: translate(-110%, 0);\n  \n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);\n  }\n  \n  .menu li {\n  \n    padding: 10px 0;\n    font-size: 1.0em;\n  }\n  \n  /*\n    * And let's slide it in from the left\n    */\n  .menuToggle input:checked~ul {\n    transform: none;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/*@import url(./menuFichiers.css);
@import url(./buttons.css); */

*,
*::before,
*::after {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

}

html {
  margin: 0px;
  padding: 0px;
  width: 100%;
}

body {
  background: #fff;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.bandeau {
  display: flex;
  position: fixed;
  background: rgb(16, 58, 18);
  padding-bottom: 115px;
  text-align: center;
  top: 0px;
  width: 100%;
  height: 0px;

  color: white;
  /*border-radius: 0 0 10px 10px ;
    box-shadow: 0px 0px 10px black;*/
  z-index: 5000;
}

.labelBandeau {
  font-size: 2.0em;
  font-weight: 80;
  color: white;
  display: block;
  margin: 0 auto;
  width: 95%;
  position: relative;
  top: 30px;
}

h1 {
  width: 100%;
  font-size: 2.0em;
  font-weight: 80;
  /*color: rgb(16, 58, 18);*/
}

img {
  position: absolute;
  width: 100px;
  top: 10px;
  right: 2%;

}

.boxForm {
  top: 105px;
  margin-top: 30px;
  padding: 50px;
  width: 90%;
  height: fit-content;
  position: relative;
  background: #f8f9fa;
  border-radius: 10px;
  z-index: 0;
}



::placeholder {
  color: rgb(166, 166, 166);
  font-size: 0.9em;
}


select,
textarea {
  display: block;
  margin: 20px auto;
  outline: 0;
  background: white;
  width: 95%;
  border: 0;
  border-color: #76b998;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 3px;
}


.labelTitre,
.labelSelect,
.labelTxt,
.labelZone,
.labelQuestionTxt {
  color: #5a6268;
  display: block;
  margin: 0 auto;
  width: 95%;
  position: relative;
  top: 7px;
}

h3,
.labelTitre,
.labelZone {
  text-transform: uppercase;
}

.labelQuestionTxt {
  text-transform: none;
}

.labelQuestionTxtTest {
  color: purple;
  position: relative;
  top: 8px;
}

.flex_n_Inputs {
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
}

.flexInp {
  margin: 20px auto;
  outline: 0;
  background: white;
  width: 90%;
  border: 0;
  padding: 15px;
  font-size: 14px;
  border-radius: 3px;
}

.flexLeftInp,
.flexRightInp {
  flex-basis: 45%;
}

.labelFlex {
  color: #5a6268;
  position: relative;
  top: 8px;
}

#sous-titre {
  display: inline-block;
  color: white;
}

.flexImgInp {
  margin-bottom: 20px;
}

#dropArea {
  padding: 20px;
  text-align: center;
  position: relative;
}

#fileslbl {
  display: block;
  margin-bottom: 10px;
}

#fileslbl,
#progress {
  background-color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
}

/*-----------
input[type=checkbox] {
  appearance: none;
}

input[type=checkbox]::after {
  color: #eee;
  background: #143b28;
  font-size: 1em;
  border: 0;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  text-align: center;
  content: "\\276F";
  transform: rotate(90deg);
}

input[type=checkbox]:checked::after {
  content: "\\276F";
  color: #eee;
  
  background-color: red;
  font-size: 1em;
  border: 0;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  text-align: center;
  transform: rotate(270deg);
}
-------------*/`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":";AACA;6BAC6B;;AAE7B;;;EAGE,4BAA4B;EAC5B,oBAAoB;;AAEtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,2BAA2B;EAC3B,qBAAqB;EACrB,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,WAAW;;EAEX,YAAY;EACZ;oCACkC;EAClC,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,SAAS;;AAEX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;AACZ;;;;AAIA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;;AAGA;;EAEE,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;AACpB;;;AAGA;;;;;EAKE,cAAc;EACd,cAAc;EACd,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,QAAQ;AACV;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;;EAEE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA+Bc","sourcesContent":["\n/*@import url(./menuFichiers.css);\n@import url(./buttons.css); */\n\n*,\n*::before,\n*::after {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n\n}\n\nhtml {\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n}\n\nbody {\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.bandeau {\n  display: flex;\n  position: fixed;\n  background: rgb(16, 58, 18);\n  padding-bottom: 115px;\n  text-align: center;\n  top: 0px;\n  width: 100%;\n  height: 0px;\n\n  color: white;\n  /*border-radius: 0 0 10px 10px ;\n    box-shadow: 0px 0px 10px black;*/\n  z-index: 5000;\n}\n\n.labelBandeau {\n  font-size: 2.0em;\n  font-weight: 80;\n  color: white;\n  display: block;\n  margin: 0 auto;\n  width: 95%;\n  position: relative;\n  top: 30px;\n}\n\nh1 {\n  width: 100%;\n  font-size: 2.0em;\n  font-weight: 80;\n  /*color: rgb(16, 58, 18);*/\n}\n\nimg {\n  position: absolute;\n  width: 100px;\n  top: 10px;\n  right: 2%;\n\n}\n\n.boxForm {\n  top: 105px;\n  margin-top: 30px;\n  padding: 50px;\n  width: 90%;\n  height: fit-content;\n  position: relative;\n  background: #f8f9fa;\n  border-radius: 10px;\n  z-index: 0;\n}\n\n\n\n::placeholder {\n  color: rgb(166, 166, 166);\n  font-size: 0.9em;\n}\n\n\nselect,\ntextarea {\n  display: block;\n  margin: 20px auto;\n  outline: 0;\n  background: white;\n  width: 95%;\n  border: 0;\n  border-color: #76b998;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 3px;\n}\n\n\n.labelTitre,\n.labelSelect,\n.labelTxt,\n.labelZone,\n.labelQuestionTxt {\n  color: #5a6268;\n  display: block;\n  margin: 0 auto;\n  width: 95%;\n  position: relative;\n  top: 7px;\n}\n\nh3,\n.labelTitre,\n.labelZone {\n  text-transform: uppercase;\n}\n\n.labelQuestionTxt {\n  text-transform: none;\n}\n\n.labelQuestionTxtTest {\n  color: purple;\n  position: relative;\n  top: 8px;\n}\n\n.flex_n_Inputs {\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n  margin: 0 auto;\n}\n\n.flexInp {\n  margin: 20px auto;\n  outline: 0;\n  background: white;\n  width: 90%;\n  border: 0;\n  padding: 15px;\n  font-size: 14px;\n  border-radius: 3px;\n}\n\n.flexLeftInp,\n.flexRightInp {\n  flex-basis: 45%;\n}\n\n.labelFlex {\n  color: #5a6268;\n  position: relative;\n  top: 8px;\n}\n\n#sous-titre {\n  display: inline-block;\n  color: white;\n}\n\n.flexImgInp {\n  margin-bottom: 20px;\n}\n\n#dropArea {\n  padding: 20px;\n  text-align: center;\n  position: relative;\n}\n\n#fileslbl {\n  display: block;\n  margin-bottom: 10px;\n}\n\n#fileslbl,\n#progress {\n  background-color: white;\n  padding: 10px;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n\n/*-----------\ninput[type=checkbox] {\n  appearance: none;\n}\n\ninput[type=checkbox]::after {\n  color: #eee;\n  background: #143b28;\n  font-size: 1em;\n  border: 0;\n  width: 2em;\n  height: 2em;\n  border-radius: 100%;\n  text-align: center;\n  content: \"\\276F\";\n  transform: rotate(90deg);\n}\n\ninput[type=checkbox]:checked::after {\n  content: \"\\276F\";\n  color: #eee;\n  \n  background-color: red;\n  font-size: 1em;\n  border: 0;\n  width: 2em;\n  height: 2em;\n  border-radius: 100%;\n  text-align: center;\n  transform: rotate(270deg);\n}\n-------------*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/buttons.css":
/*!********************************!*\
  !*** ./src/styles/buttons.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./buttons.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menuFichiers.css":
/*!*************************************!*\
  !*** ./src/styles/menuFichiers.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menuFichiers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menuFichiers.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menuFichiers.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menuFichiers_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menuFichiers_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menuFichiers_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menuFichiers_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/styles sync recursive \\.css$":
/*!*********************************!*\
  !*** ./src/styles/ sync \.css$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./buttons.css": "./src/styles/buttons.css",
	"./menuFichiers.css": "./src/styles/menuFichiers.css",
	"./style.css": "./src/styles/style.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/styles sync recursive \\.css$";

/***/ }),

/***/ "./src/assets/logoTVwhite.png":
/*!************************************!*\
  !*** ./src/assets/logoTVwhite.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logoTVwhite.png";

/***/ }),

/***/ "./src/assets/top.png":
/*!****************************!*\
  !*** ./src/assets/top.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "top.png";

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_questionsBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/questionsBtn.js */ "./src/js/questionsBtn.js");
/* harmony import */ var _js_questionsBtn_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_questionsBtn_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_hide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/hide.js */ "./src/js/hide.js");
/* harmony import */ var _js_hide_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_hide_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logoTVwhite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logoTVwhite.png */ "./src/assets/logoTVwhite.png");
/* harmony import */ var _assets_top_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/top.png */ "./src/assets/top.png");
//import generateJoke from './generateJoke'
//import './styles/buttons.css'
//import './styles/menuFichiers.css'
//import './styles/style.css'
//import insaneLogo from './assets/logo_assoc.png'



//const logoTV = document.getElementById('logoTV');
//logoTV.src = logoTVWhite;

// import scrolltop from './assets/scrolltop.png';
// const scrollTop = document.getElementById('logoTV');
// scrollTop.src = scrolltop;


//const Top = document.getElementById('top');
//Top.src = top;
//import styles
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__("./src/styles sync recursive \\.css$"));

//import js
//requireAll(require.context('./js/', true, /\.js$/));

//import images
//requireAll(require.context('./assets/', true, /\.png$/));
})();

/******/ })()
;
//# sourceMappingURL=bundledc3e136d5adca41ee49b.js.map