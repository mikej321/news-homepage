/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
}

.container {
  display: grid;
  grid-template-areas: "header" "main" "footer";
  justify-content: center;
  max-width: 25rem;
  padding-block: 2rem 4rem;
  position: relative;
}
.container[menu_open=""]::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

@media screen and (min-width: 750px) {
  .container {
    max-width: 75vw;
  }
  .container[menu_open=""]::after {
    position: static;
    min-height: max-content;
    min-width: max-content;
  }
}
@media screen and (min-width: 1150px) {
  .container {
    max-width: 900px;
  }
}
header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}
header .link_container {
  display: grid;
  grid-template-areas: "logo" "links";
  grid-template-rows: 10rem 1fr;
  min-height: 100vh;
  min-width: 68%;
  align-items: end;
  position: absolute;
  top: 0;
  right: 0;
  background: hsl(36, 100%, 99%);
  z-index: 2;
  align-items: start;
  padding-top: 2.8rem;
}
header .link_container .open {
  justify-self: end;
  margin-right: 2rem;
  cursor: pointer;
}
header .link_container .links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}
header .link_container[closed=""] {
  max-width: 0;
  max-height: 0;
  overflow: hidden;
}
header .link_container a {
  text-decoration: none;
  color: hsl(240, 100%, 5%);
  font-size: 1.6rem;
  transition: color 0.2s ease-in-out;
  font-weight: 400;
}
header .link_container a:hover {
  color: hsl(5, 85%, 63%);
}

header .link_container {
  translate: 1px;
  opacity: 1;
  transition: opacity 0.05s ease-in-out, translate 0.2s ease-in-out;
}

header .link_container[closed=""] {
  opacity: 0;
  translate: 100vw;
}

.menu_icons .closed {
  cursor: pointer;
}

.menu_icons .closed path {
  transition: fill 0.2s ease-in-out;
}

.menu_icons:hover .closed path {
  fill: hsl(5, 85%, 63%);
}

.open path {
  transition: fill 0.2s ease-in-out;
}

.open:hover path {
  fill: hsl(5, 85%, 63%);
}

@media screen and (min-width: 750px) {
  header .menu_icons {
    display: none;
  }
  header .link_container[closed=""],
  header .link_container {
    max-height: fit-content;
    overflow: auto;
    display: flex;
    width: 100%;
    max-width: 35rem;
    flex-direction: row;
    justify-content: end;
    position: static;
    min-height: max-content;
    transition: none;
    translate: 0;
    opacity: 1;
    padding: 0;
  }
  header .link_container[closed=""] .links,
  header .link_container .links {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-left: 0;
  }
  header .link_container[closed=""] .links a,
  header .link_container .links a {
    font-size: 1.3rem;
  }
  header .link_container[closed=""] .open,
  header .link_container .open {
    display: none;
  }
}
main {
  grid-area: main;
  display: grid;
  grid-template-areas: "image" "title" "info" "other_articles";
}
main img {
  margin-bottom: 2.5rem;
}
main h1 {
  grid-area: title;
  color: hsl(240, 100%, 5%);
  line-height: 3rem;
  margin-bottom: 2rem;
  font-weight: 800;
}
main p {
  font-size: 1.1rem;
  color: hsl(240, 100%, 5%);
  line-height: 1.8rem;
  margin-bottom: 2rem;
}
main .read_more {
  max-width: 14rem;
  background: hsl(5, 85%, 63%);
  color: hsl(36, 100%, 99%);
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  border: none;
  margin-bottom: 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
main .read_more:hover {
  background: hsl(240, 100%, 5%);
  color: hsl(36, 100%, 99%);
}
main .new_articles {
  grid-area: other_articles;
  margin-bottom: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: hsl(240, 100%, 5%);
}
main .new_articles h2 {
  margin-bottom: 2rem;
  color: hsl(35, 77%, 62%);
}
main .new_articles .new_article_container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}
main .new_articles .new_article_container h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: hsl(36, 100%, 99%);
}
main .new_articles .new_article_container h3 a {
  text-decoration: none;
  color: hsl(36, 100%, 99%);
  transition: color 0.2s ease-in-out;
}
main .new_articles .new_article_container h3 a:hover {
  color: hsl(35, 77%, 62%);
}
main .new_articles .new_article_container p {
  font-size: 1.05rem;
  color: hsl(233, 8%, 79%);
}

picture {
  grid-area: image;
}

.article_info {
  grid-area: info;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 750px) {
  main {
    grid-template-areas: "image image other_articles" "title info other_articles";
    grid-template-columns: 29rem 1fr 1fr;
    gap: 2rem;
    margin-bottom: 5rem;
  }
  main h1 {
    font-size: clamp(3rem, 4vw, 4.75rem);
    line-height: clamp(1rem, 5vw, 5rem);
    margin-bottom: 0;
  }
  main p {
    font-size: 1.22rem;
    line-height: 2rem;
  }
  main img {
    margin-bottom: 0;
    height: 100%;
  }
  main .read_more {
    margin-bottom: 0;
  }
  .article_info {
    justify-content: space-between;
  }
}
@media screen and (min-width: 750px) {
  main .new_articles {
    margin-bottom: 0;
  }
  main .new_articles h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  main .new_articles .new_article_container h3 {
    font-size: 1.6rem;
  }
  main .new_articles .new_article_container p {
    font-size: 1.2rem;
  }
}
.new_article_container:nth-child(3),
.new_article_container:nth-child(4) {
  margin-top: 3rem;
}

.new_article_container:nth-child(2)::after,
.new_article_container:nth-child(3)::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 100%;
  background: hsl(233, 8%, 79%);
  bottom: -0.5rem;
}

.new_article_container:nth-child(4) {
  margin-bottom: -1rem;
}

.other_articles_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.other_articles_container .other_article {
  display: flex;
  gap: 2rem;
}
.other_articles_container .other_article img {
  max-width: 6rem;
}
.other_articles_container .other_article .other_article_content {
  display: flex;
  flex-direction: column;
}
.other_articles_container .other_article .other_article_content .other_article_number {
  color: hsl(233, 8%, 79%);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.other_articles_container .other_article .other_article_content .other_article_title {
  font-weight: 800;
  font-size: 1.4rem;
  color: hsl(240, 100%, 5%);
  margin-bottom: 0.5rem;
}
.other_articles_container .other_article .other_article_content .other_article_title a {
  text-decoration: none;
  color: hsl(240, 100%, 5%);
  transition: color 0.2s ease-in-out;
}
.other_articles_container .other_article .other_article_content .other_article_title a:hover {
  color: hsl(5, 85%, 63%);
}
.other_articles_container .other_article .other_article_content .other_article_info {
  font-size: 1.2rem;
  color: hsl(236, 13%, 42%);
  line-height: 1.75rem;
}

@media screen and (min-width: 750px) {
  .other_articles_container {
    display: grid;
    grid-template-areas: "article_1 article_2 article_3";
    grid-template-columns: 29rem 1fr 1fr;
  }
  .other_articles_container .other_article .other_article_content {
    max-width: 18rem;
  }
}
footer {
  grid-area: footer;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')\n\n// Primary Colors\n$soft_orange: hsl(35, 77%, 62%)\n$soft_red: hsl(5, 85%, 63%)\n\n// Neutral\n$off_white: hsl(36, 100%, 99%)\n$grayish_blue: hsl(233, 8%, 79%)\n$dark_grayish_blue: hsl(236, 13%, 42%)\n$very_dark_blue: hsl(240, 100%, 5%)\n\n// font_size\n$font_size_paragraph: 15px\n\n*,\n*::before,\n*::after \n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: $font_size_paragraph\n    display: flex\n    flex-direction: column\n    align-items: center\n    font-family: 'Inter', sans-serif\n    \n\n.container\n    display: grid\n    grid-template-areas: \"header\" \"main\" \"footer\"\n    justify-content: center\n    max-width: 25rem\n    padding-block: 2rem 4rem\n    position: relative\n    &[menu_open=\"\"]::after\n        content: ''\n        position: fixed\n        top: 0\n        left: 0\n        min-height: 100vh\n        min-width: 100vw\n        background: rgba(0, 0, 0, 0.5)\n        z-index: 0\n\n@media screen and (min-width: 750px)\n    .container\n        max-width: 75vw\n        &[menu_open=\"\"]::after\n            position: static\n            min-height: max-content\n            min-width: max-content\n\n@media screen and (min-width: 1150px)\n    .container\n        max-width: 900px\n\nheader\n    grid-area: header\n    display: flex\n    align-items: center\n    justify-content: space-between\n    margin-bottom: 2.5rem\n    .link_container\n        display: grid\n        grid-template-areas: \"logo\" \"links\"\n        grid-template-rows: 10rem 1fr\n        min-height: 100vh\n        min-width: 68%\n        align-items: end\n        position: absolute\n        top: 0\n        right: 0\n        background: $off_white\n        z-index: 2\n        align-items: start\n        padding-top: 2.8rem\n        .open\n            justify-self: end\n            margin-right: 2rem\n            cursor: pointer\n        .links\n            display: flex\n            flex-direction: column\n            gap: 2rem\n            padding-left: 2rem\n        &[closed=\"\"]\n            max-width: 0\n            max-height: 0\n            overflow: hidden\n        a\n            text-decoration: none\n            color: $very_dark_blue\n            font-size: 1.6rem\n            transition: color 0.2s ease-in-out\n            font-weight: 400\n            &:hover\n                color: $soft_red\n\nheader .link_container\n    translate: 1px\n    opacity: 1\n    transition: opacity 0.05s ease-in-out, translate 0.2s ease-in-out\n\nheader .link_container[closed=\"\"]\n    opacity: 0\n    translate: 100vw\n\n\n.menu_icons .closed\n    cursor: pointer\n\n.menu_icons .closed path\n    transition: fill 0.2s ease-in-out\n\n.menu_icons:hover .closed path\n    fill: $soft_red\n\n.open path\n    transition: fill 0.2s ease-in-out\n\n.open:hover path\n    fill: $soft_red\n\n@media screen and (min-width: 750px)\n    header .menu_icons\n        display: none\n    header .link_container[closed=\"\"],\n    header .link_container\n            max-height: fit-content\n            overflow: auto\n            display: flex\n            width: 100%\n            max-width: 35rem\n            flex-direction: row\n            justify-content: end\n            position: static\n            min-height: max-content\n            transition: none\n            translate: 0\n            opacity: 1\n            padding: 0\n            .links\n                display: flex\n                flex-direction: row\n                justify-content: end\n                padding-left: 0\n                a\n                    font-size: 1.3rem\n            .open\n                display: none\n\nmain\n    grid-area: main\n    display: grid\n    grid-template-areas: \"image\" \"title\" \"info\" \"other_articles\"\n    img\n        margin-bottom: 2.5rem\n    h1\n        grid-area: title\n        color: $very_dark_blue\n        line-height: 3rem\n        margin-bottom: 2rem\n        font-weight: 800\n    p\n        font-size: 1.1rem\n        color: $very_dark_blue\n        line-height: 1.8rem\n        margin-bottom: 2rem\n    .read_more\n        max-width: 14rem\n        background: $soft_red\n        color: $off_white\n        padding: 1rem 2rem\n        text-transform: uppercase\n        letter-spacing: 2px\n        font-weight: 700\n        border: none\n        margin-bottom: 5rem\n        cursor: pointer\n        transition: all 0.2s ease-in-out\n        &:hover\n            background: $very_dark_blue\n            color: $off_white\n    .new_articles\n        grid-area: other_articles\n        margin-bottom: 5rem\n        padding: 2rem\n        display: flex\n        flex-direction: column\n        background: $very_dark_blue\n        h2\n            margin-bottom: 2rem\n            color: $soft_orange\n        .new_article_container\n            display: flex\n            flex-direction: column\n            gap: .5rem\n            position: relative\n            h3\n                font-size: 1.4rem\n                font-weight: 800\n                color: $off_white\n                & a\n                    text-decoration: none\n                    color: $off_white\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_orange\n            p\n                font-size: 1.05rem\n                color: $grayish_blue\n\npicture\n    grid-area: image\n\n.article_info\n    grid-area: info\n    display: flex\n    flex-direction: column\n\n@media screen and (min-width: 750px)\n    main\n        grid-template-areas: \"image image other_articles\" \"title info other_articles\"\n        grid-template-columns: 29rem 1fr 1fr\n        gap: 2rem\n        margin-bottom: 5rem\n        h1\n            font-size: clamp(3rem, 4vw, 4.75rem)\n            line-height: clamp(1rem, 5vw, 5rem)\n            margin-bottom: 0\n        p\n            font-size: 1.22rem\n            line-height: 2rem\n        img\n            margin-bottom: 0\n            height: 100%\n        .read_more\n            margin-bottom: 0\n    .article_info\n        justify-content: space-between\n\n@media screen and (min-width: 750px)\n    main .new_articles\n        margin-bottom: 0\n    main .new_articles h2\n        font-size: 3.5rem\n        margin-bottom: 3rem\n    main .new_articles .new_article_container h3\n        font-size: 1.6rem\n        // margin-bottom: 1rem\n    main .new_articles .new_article_container p\n        font-size: 1.2rem\n\n.new_article_container:nth-child(3),\n.new_article_container:nth-child(4)\n    margin-top: 3rem\n\n.new_article_container:nth-child(2)::after,\n.new_article_container:nth-child(3)::after\n    content: ''\n    position: absolute\n    height: 1px\n    width: 100%\n    background: $grayish_blue\n    bottom: -.5rem\n\n.new_article_container:nth-child(4)\n    margin-bottom: -1rem\n\n.other_articles_container\n    display: flex\n    flex-direction: column\n    gap: 2rem\n    .other_article\n        display: flex\n        gap: 2rem\n        img\n            max-width: 6rem\n        .other_article_content\n            display: flex\n            flex-direction: column\n            .other_article_number\n                color: $grayish_blue\n                font-size: 2rem\n                font-weight: 700\n                margin-bottom: .5rem\n            .other_article_title\n                font-weight: 800\n                font-size: 1.4rem\n                color: $very_dark_blue\n                margin-bottom: .5rem\n                & a \n                    text-decoration: none\n                    color: $very_dark_blue\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_red\n            .other_article_info\n                font-size: 1.2rem\n                color: $dark_grayish_blue\n                line-height: 1.75rem\n\n@media screen and (min-width: 750px)\n    .other_articles_container\n        display: grid\n        grid-template-areas: \"article_1 article_2 article_3\"\n        grid-template-columns: 29rem 1fr 1fr\n        .other_article .other_article_content\n            max-width: 18rem\n                \nfooter\n    grid-area: footer\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


// variables
const container = document.querySelector('.container');
const closedButton = document.querySelector('.closed');
const openButton = document.querySelector('.open');
const linkContainer = document.querySelector('.link_container');

closedButton.addEventListener('click', () => {
    if (container.hasAttribute('menu_open')) {
        return;
    } else if (!container.hasAttribute('menu_open')) {
        container.setAttribute('menu_open', '');
        linkContainer.removeAttribute('closed');
    }
})

openButton.addEventListener('click', () => {
    if (!container.hasAttribute('menu_open')) {
        return;
    } else if (container.hasAttribute('menu_open')) {
        container.removeAttribute('menu_open');
        linkContainer.setAttribute('closed', '');
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxZQUFZ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OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJtYWluXCIgXCJmb290ZXJcIjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjVyZW07XG4gIHBhZGRpbmctYmxvY2s6IDJyZW0gNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lclttZW51X29wZW49XCJcIl06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzV2dztcbiAgfVxuICAuY29udGFpbmVyW21lbnVfb3Blbj1cIlwiXTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gIH1cbn1cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ29cIiBcImxpbmtzXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiA2OCU7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICB6LWluZGV4OiAyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyLjhyZW07XG59XG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIC5vcGVuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciAubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbmhlYWRlciAubGlua19jb250YWluZXJbY2xvc2VkPVwiXCJdIHtcbiAgbWF4LXdpZHRoOiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaHNsKDI0MCwgMTAwJSwgNSUpO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woNSwgODUlLCA2MyUpO1xufVxuXG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIHtcbiAgdHJhbnNsYXRlOiAxcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zbGF0ZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5oZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zbGF0ZTogMTAwdnc7XG59XG5cbi5tZW51X2ljb25zIC5jbG9zZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51X2ljb25zIC5jbG9zZWQgcGF0aCB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnVfaWNvbnM6aG92ZXIgLmNsb3NlZCBwYXRoIHtcbiAgZmlsbDogaHNsKDUsIDg1JSwgNjMlKTtcbn1cblxuLm9wZW4gcGF0aCB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm9wZW46aG92ZXIgcGF0aCB7XG4gIGZpbGw6IGhzbCg1LCA4NSUsIDYzJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIGhlYWRlciAubWVudV9pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSxcbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zbGF0ZTogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0gLmxpbmtzLFxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyIC5saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSAubGlua3MgYSxcbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lciAubGlua3MgYSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0gLm9wZW4sXG4gIGhlYWRlciAubGlua19jb250YWluZXIgLm9wZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2VcIiBcInRpdGxlXCIgXCJpbmZvXCIgXCJvdGhlcl9hcnRpY2xlc1wiO1xufVxubWFpbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5tYWluIGgxIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5tYWluIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbm1haW4gLnJlYWRfbW9yZSB7XG4gIG1heC13aWR0aDogMTRyZW07XG4gIGJhY2tncm91bmQ6IGhzbCg1LCA4NSUsIDYzJSk7XG4gIGNvbG9yOiBoc2woMzYsIDEwMCUsIDk5JSk7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAucmVhZF9tb3JlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogaHNsKDI0MCwgMTAwJSwgNSUpO1xuICBjb2xvcjogaHNsKDM2LCAxMDAlLCA5OSUpO1xufVxubWFpbiAubmV3X2FydGljbGVzIHtcbiAgZ3JpZC1hcmVhOiBvdGhlcl9hcnRpY2xlcztcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogaHNsKDI0MCwgMTAwJSwgNSUpO1xufVxubWFpbiAubmV3X2FydGljbGVzIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IGhzbCgzNSwgNzclLCA2MiUpO1xufVxubWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgaDMge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IGhzbCgzNiwgMTAwJSwgOTklKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBoc2woMzYsIDEwMCUsIDk5JSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBoMyBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgzNSwgNzclLCA2MiUpO1xufVxubWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6IGhzbCgyMzMsIDglLCA3OSUpO1xufVxuXG5waWN0dXJlIHtcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcbn1cblxuLmFydGljbGVfaW5mbyB7XG4gIGdyaWQtYXJlYTogaW5mbztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgbWFpbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBpbWFnZSBvdGhlcl9hcnRpY2xlc1wiIFwidGl0bGUgaW5mbyBvdGhlcl9hcnRpY2xlc1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjlyZW0gMWZyIDFmcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuICBtYWluIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDR2dywgNC43NXJlbSk7XG4gICAgbGluZS1oZWlnaHQ6IGNsYW1wKDFyZW0sIDV2dywgNXJlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBtYWluIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuICBtYWluIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgbWFpbiAucmVhZF9tb3JlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5hcnRpY2xlX2luZm8ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgbWFpbiAubmV3X2FydGljbGVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIG1haW4gLm5ld19hcnRpY2xlcyBoMiB7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuICBtYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBoMyB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgbWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDMpLFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoNCkge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCgyKTo6YWZ0ZXIsXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCgzKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogaHNsKDIzMywgOCUsIDc5JSk7XG4gIGJvdHRvbTogLTAuNXJlbTtcbn1cblxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoNCkge1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbn1cblxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIGltZyB7XG4gIG1heC13aWR0aDogNnJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnQgLm90aGVyX2FydGljbGVfbnVtYmVyIHtcbiAgY29sb3I6IGhzbCgyMzMsIDglLCA3OSUpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV90aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogaHNsKDI0MCwgMTAwJSwgNSUpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnQgLm90aGVyX2FydGljbGVfdGl0bGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV90aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCg1LCA4NSUsIDYzJSk7XG59XG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnQgLm90aGVyX2FydGljbGVfaW5mbyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogaHNsKDIzNiwgMTMlLCA0MiUpO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFydGljbGVfMSBhcnRpY2xlXzIgYXJ0aWNsZV8zXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOXJlbSAxZnIgMWZyO1xuICB9XG4gIC5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZUE7OztFQUdJLHNCQUFBO0FBYko7O0FBZUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVZKOztBQVlBO0VBQ0ksZUFyQmtCO0VBc0JsQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBVEo7O0FBWUE7RUFDSSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQVRKO0FBVUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQVJSOztBQVVBO0VBQ0k7SUFDSSxlQUFBO0VBUE47RUFRTTtJQUNJLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQU5WO0FBQ0Y7QUFPQTtFQUNJO0lBQ0ksZ0JBQUE7RUFMTjtBQUNGO0FBTUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQUtJO0VBQ0ksYUFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSw4QkEvRUk7RUFnRkosVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7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LFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBN1FXO0VBOFFYLGVBQUE7QUEwQ0o7O0FBeENBO0VBQ0ksb0JBQUE7QUEyQ0o7O0FBekNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQTRDSjtBQTNDSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBNkNSO0FBNUNRO0VBQ0ksZUFBQTtBQThDWjtBQTdDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQStDWjtBQTlDWTtFQUNJLHdCQWhTRDtFQWlTQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWdEaEI7QUEvQ1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBclNDO0VBc1NELHFCQUFBO0FBaURoQjtBQWhEZ0I7RUFDSSxxQkFBQTtFQUNBLHlCQXpTSDtFQTBTRyxrQ0FBQTtBQWtEcEI7QUFqRG9CO0VBQ0ksdUJBbFRiO0FBcVdYO0FBbERZO0VBQ0ksaUJBQUE7RUFDQSx5QkFoVEk7RUFpVEosb0JBQUE7QUFvRGhCOztBQWxEQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG9EQUFBO0lBQ0Esb0NBQUE7RUFxRE47RUFwRE07SUFDSSxnQkFBQTtFQXNEVjtBQUNGO0FBckRBO0VBQ0ksaUJBQUE7QUF1REpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXAnKVxcblxcbi8vIFByaW1hcnkgQ29sb3JzXFxuJHNvZnRfb3JhbmdlOiBoc2woMzUsIDc3JSwgNjIlKVxcbiRzb2Z0X3JlZDogaHNsKDUsIDg1JSwgNjMlKVxcblxcbi8vIE5ldXRyYWxcXG4kb2ZmX3doaXRlOiBoc2woMzYsIDEwMCUsIDk5JSlcXG4kZ3JheWlzaF9ibHVlOiBoc2woMjMzLCA4JSwgNzklKVxcbiRkYXJrX2dyYXlpc2hfYmx1ZTogaHNsKDIzNiwgMTMlLCA0MiUpXFxuJHZlcnlfZGFya19ibHVlOiBoc2woMjQwLCAxMDAlLCA1JSlcXG5cXG4vLyBmb250X3NpemVcXG4kZm9udF9zaXplX3BhcmFncmFwaDogMTVweFxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWxcXG4gICAgZm9udC1zaXplOiA2Mi41JVxcblxcbmltZ1xcbiAgICB3aWR0aDogMTAwJVxcbiAgICBoZWlnaHQ6IGF1dG9cXG4gICAgb2JqZWN0LWZpdDogY292ZXJcXG5cXG5ib2R5XFxuICAgIGZvbnQtc2l6ZTogJGZvbnRfc2l6ZV9wYXJhZ3JhcGhcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWZcXG4gICAgXFxuXFxuLmNvbnRhaW5lclxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIiBcXFwiZm9vdGVyXFxcIlxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICBtYXgtd2lkdGg6IDI1cmVtXFxuICAgIHBhZGRpbmctYmxvY2s6IDJyZW0gNHJlbVxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgJlttZW51X29wZW49XFxcIlxcXCJdOjphZnRlclxcbiAgICAgICAgY29udGVudDogJydcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZFxcbiAgICAgICAgdG9wOiAwXFxuICAgICAgICBsZWZ0OiAwXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2d1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpXFxuICAgICAgICB6LWluZGV4OiAwXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIC5jb250YWluZXJcXG4gICAgICAgIG1heC13aWR0aDogNzV2d1xcbiAgICAgICAgJlttZW51X29wZW49XFxcIlxcXCJdOjphZnRlclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWNcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudFxcbiAgICAgICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnRcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpXFxuICAgIC5jb250YWluZXJcXG4gICAgICAgIG1heC13aWR0aDogOTAwcHhcXG5cXG5oZWFkZXJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW1cXG4gICAgLmxpbmtfY29udGFpbmVyXFxuICAgICAgICBkaXNwbGF5OiBncmlkXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nb1xcXCIgXFxcImxpbmtzXFxcIlxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbSAxZnJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuICAgICAgICBtaW4td2lkdGg6IDY4JVxcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICB0b3A6IDBcXG4gICAgICAgIHJpZ2h0OiAwXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmX3doaXRlXFxuICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnRcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjhyZW1cXG4gICAgICAgIC5vcGVuXFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmRcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW1cXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgIC5saW5rc1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtXFxuICAgICAgICAmW2Nsb3NlZD1cXFwiXFxcIl1cXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDBcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICAgICAgYVxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwXFxuICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNvZnRfcmVkXFxuXFxuaGVhZGVyIC5saW5rX2NvbnRhaW5lclxcbiAgICB0cmFuc2xhdGU6IDFweFxcbiAgICBvcGFjaXR5OiAxXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zbGF0ZSAwLjJzIGVhc2UtaW4tb3V0XFxuXFxuaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XFxcIlxcXCJdXFxuICAgIG9wYWNpdHk6IDBcXG4gICAgdHJhbnNsYXRlOiAxMDB2d1xcblxcblxcbi5tZW51X2ljb25zIC5jbG9zZWRcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuXFxuLm1lbnVfaWNvbnMgLmNsb3NlZCBwYXRoXFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dFxcblxcbi5tZW51X2ljb25zOmhvdmVyIC5jbG9zZWQgcGF0aFxcbiAgICBmaWxsOiAkc29mdF9yZWRcXG5cXG4ub3BlbiBwYXRoXFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dFxcblxcbi5vcGVuOmhvdmVyIHBhdGhcXG4gICAgZmlsbDogJHNvZnRfcmVkXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIGhlYWRlciAubWVudV9pY29uc1xcbiAgICAgICAgZGlzcGxheTogbm9uZVxcbiAgICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cXFwiXFxcIl0sXFxuICAgIGhlYWRlciAubGlua19jb250YWluZXJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudFxcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXJlbVxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWNcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmVcXG4gICAgICAgICAgICB0cmFuc2xhdGU6IDBcXG4gICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgcGFkZGluZzogMFxcbiAgICAgICAgICAgIC5saW5rc1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmRcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwXFxuICAgICAgICAgICAgICAgIGFcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtXFxuICAgICAgICAgICAgLm9wZW5cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxcblxcbm1haW5cXG4gICAgZ3JpZC1hcmVhOiBtYWluXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImltYWdlXFxcIiBcXFwidGl0bGVcXFwiIFxcXCJpbmZvXFxcIiBcXFwib3RoZXJfYXJ0aWNsZXNcXFwiXFxuICAgIGltZ1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtXFxuICAgIGgxXFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlXFxuICAgICAgICBjb2xvcjogJHZlcnlfZGFya19ibHVlXFxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICBwXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbVxcbiAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAucmVhZF9tb3JlXFxuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkc29mdF9yZWRcXG4gICAgICAgIGNvbG9yOiAkb2ZmX3doaXRlXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW1cXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHhcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgICAgIGJvcmRlcjogbm9uZVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbVxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgICAgIGNvbG9yOiAkb2ZmX3doaXRlXFxuICAgIC5uZXdfYXJ0aWNsZXNcXG4gICAgICAgIGdyaWQtYXJlYTogb3RoZXJfYXJ0aWNsZXNcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW1cXG4gICAgICAgIHBhZGRpbmc6IDJyZW1cXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgIGJhY2tncm91bmQ6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgaDJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgICAgICAgICAgY29sb3I6ICRzb2Z0X29yYW5nZVxcbiAgICAgICAgLm5ld19hcnRpY2xlX2NvbnRhaW5lclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgZ2FwOiAuNXJlbVxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAgICAgICAgIGgzXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRvZmZfd2hpdGVcXG4gICAgICAgICAgICAgICAgJiBhXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb2ZmX3doaXRlXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzb2Z0X29yYW5nZVxcbiAgICAgICAgICAgIHBcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheWlzaF9ibHVlXFxuXFxucGljdHVyZVxcbiAgICBncmlkLWFyZWE6IGltYWdlXFxuXFxuLmFydGljbGVfaW5mb1xcbiAgICBncmlkLWFyZWE6IGluZm9cXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIG1haW5cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbWFnZSBpbWFnZSBvdGhlcl9hcnRpY2xlc1xcXCIgXFxcInRpdGxlIGluZm8gb3RoZXJfYXJ0aWNsZXNcXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5cmVtIDFmciAxZnJcXG4gICAgICAgIGdhcDogMnJlbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbVxcbiAgICAgICAgaDFcXG4gICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDR2dywgNC43NXJlbSlcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMXJlbSwgNXZ3LCA1cmVtKVxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcXG4gICAgICAgIHBcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjJyZW1cXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbVxcbiAgICAgICAgaW1nXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxcbiAgICAgICAgLnJlYWRfbW9yZVxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcXG4gICAgLmFydGljbGVfaW5mb1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIG1haW4gLm5ld19hcnRpY2xlc1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICBtYWluIC5uZXdfYXJ0aWNsZXMgaDJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtXFxuICAgIG1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMXJlbVxcbiAgICBtYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBwXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbVxcblxcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDMpLFxcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDQpXFxuICAgIG1hcmdpbi10b3A6IDNyZW1cXG5cXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCgyKTo6YWZ0ZXIsXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoMyk6OmFmdGVyXFxuICAgIGNvbnRlbnQ6ICcnXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICBoZWlnaHQ6IDFweFxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheWlzaF9ibHVlXFxuICAgIGJvdHRvbTogLS41cmVtXFxuXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoNClcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW1cXG5cXG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBnYXA6IDJyZW1cXG4gICAgLm90aGVyX2FydGljbGVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGdhcDogMnJlbVxcbiAgICAgICAgaW1nXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2cmVtXFxuICAgICAgICAub3RoZXJfYXJ0aWNsZV9jb250ZW50XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgICAgICAub3RoZXJfYXJ0aWNsZV9udW1iZXJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5aXNoX2JsdWVcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW1cXG4gICAgICAgICAgICAub3RoZXJfYXJ0aWNsZV90aXRsZVxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW1cXG4gICAgICAgICAgICAgICAgJiBhIFxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHZlcnlfZGFya19ibHVlXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzb2Z0X3JlZFxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX2luZm9cXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrX2dyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KVxcbiAgICAub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyXFxuICAgICAgICBkaXNwbGF5OiBncmlkXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYXJ0aWNsZV8xIGFydGljbGVfMiBhcnRpY2xlXzNcXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5cmVtIDFmciAxZnJcXG4gICAgICAgIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnRcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE4cmVtXFxuICAgICAgICAgICAgICAgIFxcbmZvb3RlclxcbiAgICBncmlkLWFyZWE6IGZvb3RlclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuLy8gdmFyaWFibGVzXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBjbG9zZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VkJyk7XG5jb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4nKTtcbmNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua19jb250YWluZXInKTtcblxuY2xvc2VkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjb250YWluZXIuaGFzQXR0cmlidXRlKCdtZW51X29wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnbWVudV9vcGVuJykpIHtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbWVudV9vcGVuJywgJycpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2VkJyk7XG4gICAgfVxufSlcblxub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ21lbnVfb3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ21lbnVfb3BlbicpKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ21lbnVfb3BlbicpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xvc2VkJywgJycpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9