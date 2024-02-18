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
  max-width: 90vw;
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
  min-height: 200vh;
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
  translate: 5vw;
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
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: clamp(4rem, 4vw, 6rem);
  line-height: clamp(4rem, 4vw, 4rem);
}
main p {
  font-size: clamp(1.4rem, 2vw, 2.5rem);
  line-height: clamp(2.2rem, 2vw, 4rem);
  color: hsl(240, 100%, 5%);
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
  font-size: clamp(1.8rem, 2vw, 2rem);
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
  font-size: clamp(1.4rem, 2vw, 1.6rem);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')\n\n// Primary Colors\n$soft_orange: hsl(35, 77%, 62%)\n$soft_red: hsl(5, 85%, 63%)\n\n// Neutral\n$off_white: hsl(36, 100%, 99%)\n$grayish_blue: hsl(233, 8%, 79%)\n$dark_grayish_blue: hsl(236, 13%, 42%)\n$very_dark_blue: hsl(240, 100%, 5%)\n\n// font_size\n$font_size_paragraph: 15px\n\n*,\n*::before,\n*::after \n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: $font_size_paragraph\n    display: flex\n    flex-direction: column\n    align-items: center\n    font-family: 'Inter', sans-serif\n    \n\n.container\n    display: grid\n    grid-template-areas: \"header\" \"main\" \"footer\"\n    justify-content: center\n    max-width: 90vw\n    padding-block: 2rem 4rem\n    position: relative\n    &[menu_open=\"\"]::after\n        content: ''\n        position: fixed\n        top: 0\n        left: 0\n        min-height: 100vh\n        min-width: 100vw\n        background: rgba(0, 0, 0, 0.5)\n        z-index: 0\n\n@media screen and (min-width: 750px)\n    .container\n        max-width: 75vw\n        &[menu_open=\"\"]::after\n            position: static\n            min-height: max-content\n            min-width: max-content\n\n@media screen and (min-width: 1150px)\n    .container\n        max-width: 900px\n\n\nheader\n    grid-area: header\n    display: flex\n    align-items: center\n    justify-content: space-between\n    margin-bottom: 2.5rem\n    .link_container\n        display: grid\n        grid-template-areas: \"logo\" \"links\"\n        grid-template-rows: 10rem 1fr\n        min-height: 200vh\n        min-width: 68%\n        align-items: end\n        position: absolute\n        top: 0\n        right: 0\n        background: $off_white\n        z-index: 2\n        align-items: start\n        padding-top: 2.8rem\n        .open\n            justify-self: end\n            margin-right: 2rem\n            cursor: pointer\n        .links\n            display: flex\n            flex-direction: column\n            gap: 2rem\n            padding-left: 2rem\n        &[closed=\"\"]\n            max-width: 0\n            max-height: 0\n            overflow: hidden\n        a\n            text-decoration: none\n            color: $very_dark_blue\n            font-size: 1.6rem\n            transition: color 0.2s ease-in-out\n            font-weight: 400\n            &:hover\n                color: $soft_red\n\nheader .link_container\n    translate: 5vw\n    opacity: 1\n    transition: opacity 0.05s ease-in-out, translate 0.2s ease-in-out\n\nheader .link_container[closed=\"\"]\n    opacity: 0\n    translate: 100vw\n\n\n.menu_icons .closed\n    cursor: pointer\n\n.menu_icons .closed path\n    transition: fill 0.2s ease-in-out\n\n.menu_icons:hover .closed path\n    fill: $soft_red\n\n.open path\n    transition: fill 0.2s ease-in-out\n\n.open:hover path\n    fill: $soft_red\n\n@media screen and (min-width: 750px)\n    header .menu_icons\n        display: none\n    header .link_container[closed=\"\"],\n    header .link_container\n            max-height: fit-content\n            overflow: auto\n            display: flex\n            width: 100%\n            max-width: 35rem\n            flex-direction: row\n            justify-content: end\n            position: static\n            min-height: max-content\n            transition: none\n            translate: 0\n            opacity: 1\n            padding: 0\n            .links\n                display: flex\n                flex-direction: row\n                justify-content: end\n                padding-left: 0\n                a\n                    font-size: 1.3rem\n            .open\n                display: none\n\nmain\n    grid-area: main\n    display: grid\n    grid-template-areas: \"image\" \"title\" \"info\" \"other_articles\"\n    img\n        margin-bottom: 2.5rem\n    h1\n        grid-area: title\n        color: $very_dark_blue\n        margin-bottom: 2rem\n        font-weight: 800\n        font-size: clamp(4rem, 4vw, 6rem)\n        line-height: clamp(4rem, 4vw, 4rem)\n    p\n        font-size: clamp(1.4rem, 2vw, 2.5rem)\n        line-height: clamp(2.2rem, 2vw, 4rem)\n        color: $very_dark_blue\n        margin-bottom: 2rem\n    .read_more\n        max-width: 14rem\n        background: $soft_red\n        color: $off_white\n        padding: 1rem 2rem\n        text-transform: uppercase\n        letter-spacing: 2px\n        font-weight: 700\n        border: none\n        margin-bottom: 5rem\n        cursor: pointer\n        transition: all 0.2s ease-in-out\n        &:hover\n            background: $very_dark_blue\n            color: $off_white\n    .new_articles\n        grid-area: other_articles\n        margin-bottom: 5rem\n        padding: 2rem\n        display: flex\n        flex-direction: column\n        background: $very_dark_blue\n        h2\n            margin-bottom: 2rem\n            color: $soft_orange\n        .new_article_container\n            display: flex\n            flex-direction: column\n            gap: .5rem\n            position: relative\n            h3\n                font-size: clamp(1.8rem, 2vw, 2rem)\n                font-weight: 800\n                color: $off_white\n                & a\n                    text-decoration: none\n                    color: $off_white\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_orange\n            p\n                font-size: clamp(1.4rem, 2vw, 1.6rem)\n                color: $grayish_blue\n\npicture\n    grid-area: image\n\n.article_info\n    grid-area: info\n    display: flex\n    flex-direction: column\n\n@media screen and (min-width: 750px)\n    main\n        grid-template-areas: \"image image other_articles\" \"title info other_articles\"\n        grid-template-columns: 29rem 1fr 1fr\n        gap: 2rem\n        margin-bottom: 5rem\n        h1\n            font-size: clamp(3rem, 4vw, 4.75rem)\n            line-height: clamp(1rem, 5vw, 5rem)\n            margin-bottom: 0\n        p\n            font-size: 1.22rem\n            line-height: 2rem\n        img\n            margin-bottom: 0\n            height: 100%\n        .read_more\n            margin-bottom: 0\n    .article_info\n        justify-content: space-between\n\n@media screen and (min-width: 750px)\n    main .new_articles\n        margin-bottom: 0\n    main .new_articles h2\n        font-size: 3.5rem\n        margin-bottom: 3rem\n    main .new_articles .new_article_container h3\n        font-size: 1.6rem\n        // margin-bottom: 1rem\n    main .new_articles .new_article_container p\n        font-size: 1.2rem\n\n.new_article_container:nth-child(3),\n.new_article_container:nth-child(4)\n    margin-top: 3rem\n\n.new_article_container:nth-child(2)::after,\n.new_article_container:nth-child(3)::after\n    content: ''\n    position: absolute\n    height: 1px\n    width: 100%\n    background: $grayish_blue\n    bottom: -.5rem\n\n.new_article_container:nth-child(4)\n    margin-bottom: -1rem\n\n.other_articles_container\n    display: flex\n    flex-direction: column\n    gap: 2rem\n    .other_article\n        display: flex\n        gap: 2rem\n        img\n            max-width: 6rem\n        .other_article_content\n            display: flex\n            flex-direction: column\n            .other_article_number\n                color: $grayish_blue\n                font-size: 2rem\n                font-weight: 700\n                margin-bottom: .5rem\n            .other_article_title\n                font-weight: 800\n                font-size: 1.4rem\n                color: $very_dark_blue\n                margin-bottom: .5rem\n                & a \n                    text-decoration: none\n                    color: $very_dark_blue\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_red\n            .other_article_info\n                font-size: 1.2rem\n                color: $dark_grayish_blue\n                line-height: 1.75rem\n\n@media screen and (min-width: 750px)\n    .other_articles_container\n        display: grid\n        grid-template-areas: \"article_1 article_2 article_3\"\n        grid-template-columns: 29rem 1fr 1fr\n        .other_article .other_article_content\n            max-width: 18rem\n                \nfooter\n    grid-area: footer\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEZBQTBGLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxZQUFZLE9BQU8sT0FBTyxZQUFZLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLE9BQU8sT0FBTyxXQUFXLFlBQVksWUFBWSxPQUFPLE9BQU8sWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxnN1FBQWc3UTtBQUNuZ1g7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwWTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFrSjtBQUNsSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSTRGO0FBQ3BILE9BQU8saUVBQWUsNEhBQU8sSUFBSSw0SEFBTyxVQUFVLDRIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwibWFpblwiIFwiZm9vdGVyXCI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIHBhZGRpbmctYmxvY2s6IDJyZW0gNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lclttZW51X29wZW49XCJcIl06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzV2dztcbiAgfVxuICAuY29udGFpbmVyW21lbnVfb3Blbj1cIlwiXTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gIH1cbn1cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ29cIiBcImxpbmtzXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyO1xuICBtaW4taGVpZ2h0OiAyMDB2aDtcbiAgbWluLXdpZHRoOiA2OCU7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICB6LWluZGV4OiAyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyLjhyZW07XG59XG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIC5vcGVuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciAubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbmhlYWRlciAubGlua19jb250YWluZXJbY2xvc2VkPVwiXCJdIHtcbiAgbWF4LXdpZHRoOiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaHNsKDI0MCwgMTAwJSwgNSUpO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woNSwgODUlLCA2MyUpO1xufVxuXG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIHtcbiAgdHJhbnNsYXRlOiA1dnc7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zbGF0ZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5oZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zbGF0ZTogMTAwdnc7XG59XG5cbi5tZW51X2ljb25zIC5jbG9zZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51X2ljb25zIC5jbG9zZWQgcGF0aCB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnVfaWNvbnM6aG92ZXIgLmNsb3NlZCBwYXRoIHtcbiAgZmlsbDogaHNsKDUsIDg1JSwgNjMlKTtcbn1cblxuLm9wZW4gcGF0aCB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm9wZW46aG92ZXIgcGF0aCB7XG4gIGZpbGw6IGhzbCg1LCA4NSUsIDYzJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIGhlYWRlciAubWVudV9pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSxcbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zbGF0ZTogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0gLmxpbmtzLFxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyIC5saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSAubGlua3MgYSxcbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lciAubGlua3MgYSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0gLm9wZW4sXG4gIGhlYWRlciAubGlua19jb250YWluZXIgLm9wZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2VcIiBcInRpdGxlXCIgXCJpbmZvXCIgXCJvdGhlcl9hcnRpY2xlc1wiO1xufVxubWFpbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5tYWluIGgxIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA0dncsIDZyZW0pO1xuICBsaW5lLWhlaWdodDogY2xhbXAoNHJlbSwgNHZ3LCA0cmVtKTtcbn1cbm1haW4gcCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDIuNXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjJyZW0sIDJ2dywgNHJlbSk7XG4gIGNvbG9yOiBoc2woMjQwLCAxMDAlLCA1JSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5tYWluIC5yZWFkX21vcmUge1xuICBtYXgtd2lkdGg6IDE0cmVtO1xuICBiYWNrZ3JvdW5kOiBoc2woNSwgODUlLCA2MyUpO1xuICBjb2xvcjogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnJlYWRfbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgY29sb3I6IGhzbCgzNiwgMTAwJSwgOTklKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyB7XG4gIGdyaWQtYXJlYTogb3RoZXJfYXJ0aWNsZXM7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiBoc2woMzUsIDc3JSwgNjIlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDJ2dywgMnJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiBoc2woMzYsIDEwMCUsIDk5JSk7XG59XG5tYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBoMyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgaDMgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMzUsIDc3JSwgNjIlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAxLjZyZW0pO1xuICBjb2xvcjogaHNsKDIzMywgOCUsIDc5JSk7XG59XG5cbnBpY3R1cmUge1xuICBncmlkLWFyZWE6IGltYWdlO1xufVxuXG4uYXJ0aWNsZV9pbmZvIHtcbiAgZ3JpZC1hcmVhOiBpbmZvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICBtYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGltYWdlIG90aGVyX2FydGljbGVzXCIgXCJ0aXRsZSBpbmZvIG90aGVyX2FydGljbGVzXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOXJlbSAxZnIgMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG4gIG1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNHZ3LCA0Ljc1cmVtKTtcbiAgICBsaW5lLWhlaWdodDogY2xhbXAoMXJlbSwgNXZ3LCA1cmVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIG1haW4gcCB7XG4gICAgZm9udC1zaXplOiAxLjIycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIG1haW4gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBtYWluIC5yZWFkX21vcmUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmFydGljbGVfaW5mbyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICBtYWluIC5uZXdfYXJ0aWNsZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgbWFpbiAubmV3X2FydGljbGVzIGgyIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG4gIG1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBtYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoMyksXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDIpOjphZnRlcixcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBoc2woMjMzLCA4JSwgNzklKTtcbiAgYm90dG9tOiAtMC41cmVtO1xufVxuXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcmVtO1xufVxuXG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgaW1nIHtcbiAgbWF4LXdpZHRoOiA2cmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV9udW1iZXIge1xuICBjb2xvcjogaHNsKDIzMywgOCUsIDc5JSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiBoc2woMjQwLCAxMDAlLCA1JSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV90aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaHNsKDI0MCwgMTAwJSwgNSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX3RpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDUsIDg1JSwgNjMlKTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV9pbmZvIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiBoc2woMjM2LCAxMyUsIDQyJSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXJ0aWNsZV8xIGFydGljbGVfMiBhcnRpY2xlXzNcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5cmVtIDFmciAxZnI7XG4gIH1cbiAgLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xuICB9XG59XG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3Rlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFlQTs7O0VBR0ksc0JBQUE7QUFiSjs7QUFlQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFjQTtFQUNJLGdCQUFBO0FBWEo7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVko7O0FBWUE7RUFDSSxlQXJCa0I7RUFzQmxCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFSUjs7QUFVQTtFQUNJO0lBQ0ksZUFBQTtFQVBOO0VBUU07SUFDSSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFOVjtBQUNGO0FBT0E7RUFDSTtJQUNJLGdCQUFBO0VBTE47QUFDRjtBQU9BO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBTEo7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQ0FBQTtF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QW5DQTtFQUNJO0lBQ0ksZ0JBQUE7RUFxQ047RUFwQ0U7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VBc0NOO0VBckNFO0lBQ0ksaUJBQUE7RUF1Q047RUFyQ0U7SUFDSSxpQkFBQTtFQXVDTjtBQUNGO0FBdENBOztFQUVJLGdCQUFBO0FBd0NKOztBQXRDQTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQS9RVztFQWdSWCxlQUFBO0FBeUNKOztBQXZDQTtFQUNJLG9CQUFBO0FBMENKOztBQXhDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUEyQ0o7QUExQ0k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQTRDUjtBQTNDUTtFQUNJLGVBQUE7QUE2Q1o7QUE1Q1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUE4Q1o7QUE3Q1k7RUFDSSx3QkFsU0Q7RUFtU0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUErQ2hCO0FBOUNZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQXZTQztFQXdTRCxxQkFBQTtBQWdEaEI7QUEvQ2dCO0VBQ0kscUJBQUE7RUFDQSx5QkEzU0g7RUE0U0csa0NBQUE7QUFpRHBCO0FBaERvQjtFQUNJLHVCQXBUYjtBQXNXWDtBQWpEWTtFQUNJLGlCQUFBO0VBQ0EseUJBbFRJO0VBbVRKLG9CQUFBO0FBbURoQjs7QUFqREE7RUFDSTtJQUNJLGFBQUE7SUFDQSxvREFBQTtJQUNBLG9DQUFBO0VBb0ROO0VBbkRNO0lBQ0ksZ0JBQUE7RUFxRFY7QUFDRjtBQXBEQTtFQUNJLGlCQUFBO0FBc0RKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwJylcXG5cXG4vLyBQcmltYXJ5IENvbG9yc1xcbiRzb2Z0X29yYW5nZTogaHNsKDM1LCA3NyUsIDYyJSlcXG4kc29mdF9yZWQ6IGhzbCg1LCA4NSUsIDYzJSlcXG5cXG4vLyBOZXV0cmFsXFxuJG9mZl93aGl0ZTogaHNsKDM2LCAxMDAlLCA5OSUpXFxuJGdyYXlpc2hfYmx1ZTogaHNsKDIzMywgOCUsIDc5JSlcXG4kZGFya19ncmF5aXNoX2JsdWU6IGhzbCgyMzYsIDEzJSwgNDIlKVxcbiR2ZXJ5X2RhcmtfYmx1ZTogaHNsKDI0MCwgMTAwJSwgNSUpXFxuXFxuLy8gZm9udF9zaXplXFxuJGZvbnRfc2l6ZV9wYXJhZ3JhcGg6IDE1cHhcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5pbWdcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiBhdXRvXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXFxuXFxuYm9keVxcbiAgICBmb250LXNpemU6ICRmb250X3NpemVfcGFyYWdyYXBoXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmXFxuICAgIFxcblxcbi5jb250YWluZXJcXG4gICAgZGlzcGxheTogZ3JpZFxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgbWF4LXdpZHRoOiA5MHZ3XFxuICAgIHBhZGRpbmctYmxvY2s6IDJyZW0gNHJlbVxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgJlttZW51X29wZW49XFxcIlxcXCJdOjphZnRlclxcbiAgICAgICAgY29udGVudDogJydcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZFxcbiAgICAgICAgdG9wOiAwXFxuICAgICAgICBsZWZ0OiAwXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2d1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpXFxuICAgICAgICB6LWluZGV4OiAwXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIC5jb250YWluZXJcXG4gICAgICAgIG1heC13aWR0aDogNzV2d1xcbiAgICAgICAgJlttZW51X29wZW49XFxcIlxcXCJdOjphZnRlclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWNcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudFxcbiAgICAgICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnRcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpXFxuICAgIC5jb250YWluZXJcXG4gICAgICAgIG1heC13aWR0aDogOTAwcHhcXG5cXG5cXG5oZWFkZXJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW1cXG4gICAgLmxpbmtfY29udGFpbmVyXFxuICAgICAgICBkaXNwbGF5OiBncmlkXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nb1xcXCIgXFxcImxpbmtzXFxcIlxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbSAxZnJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHZoXFxuICAgICAgICBtaW4td2lkdGg6IDY4JVxcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICB0b3A6IDBcXG4gICAgICAgIHJpZ2h0OiAwXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmX3doaXRlXFxuICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnRcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjhyZW1cXG4gICAgICAgIC5vcGVuXFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmRcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW1cXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgIC5saW5rc1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtXFxuICAgICAgICAmW2Nsb3NlZD1cXFwiXFxcIl1cXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDBcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICAgICAgYVxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwXFxuICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNvZnRfcmVkXFxuXFxuaGVhZGVyIC5saW5rX2NvbnRhaW5lclxcbiAgICB0cmFuc2xhdGU6IDV2d1xcbiAgICBvcGFjaXR5OiAxXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wNXMgZWFzZS1pbi1vdXQsIHRyYW5zbGF0ZSAwLjJzIGVhc2UtaW4tb3V0XFxuXFxuaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XFxcIlxcXCJdXFxuICAgIG9wYWNpdHk6IDBcXG4gICAgdHJhbnNsYXRlOiAxMDB2d1xcblxcblxcbi5tZW51X2ljb25zIC5jbG9zZWRcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuXFxuLm1lbnVfaWNvbnMgLmNsb3NlZCBwYXRoXFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dFxcblxcbi5tZW51X2ljb25zOmhvdmVyIC5jbG9zZWQgcGF0aFxcbiAgICBmaWxsOiAkc29mdF9yZWRcXG5cXG4ub3BlbiBwYXRoXFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dFxcblxcbi5vcGVuOmhvdmVyIHBhdGhcXG4gICAgZmlsbDogJHNvZnRfcmVkXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIGhlYWRlciAubWVudV9pY29uc1xcbiAgICAgICAgZGlzcGxheTogbm9uZVxcbiAgICBoZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cXFwiXFxcIl0sXFxuICAgIGhlYWRlciAubGlua19jb250YWluZXJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudFxcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXJlbVxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWNcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBtYXgtY29udGVudFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmVcXG4gICAgICAgICAgICB0cmFuc2xhdGU6IDBcXG4gICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgcGFkZGluZzogMFxcbiAgICAgICAgICAgIC5saW5rc1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmRcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwXFxuICAgICAgICAgICAgICAgIGFcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtXFxuICAgICAgICAgICAgLm9wZW5cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxcblxcbm1haW5cXG4gICAgZ3JpZC1hcmVhOiBtYWluXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImltYWdlXFxcIiBcXFwidGl0bGVcXFwiIFxcXCJpbmZvXFxcIiBcXFwib3RoZXJfYXJ0aWNsZXNcXFwiXFxuICAgIGltZ1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtXFxuICAgIGgxXFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlXFxuICAgICAgICBjb2xvcjogJHZlcnlfZGFya19ibHVlXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDRyZW0sIDR2dywgNnJlbSlcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCg0cmVtLCA0dncsIDRyZW0pXFxuICAgIHBcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDIuNXJlbSlcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjJyZW0sIDJ2dywgNHJlbSlcXG4gICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW1cXG4gICAgLnJlYWRfbW9yZVxcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbVxcbiAgICAgICAgYmFja2dyb3VuZDogJHNvZnRfcmVkXFxuICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4XFxuICAgICAgICBmb250LXdlaWdodDogNzAwXFxuICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW1cXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAubmV3X2FydGljbGVzXFxuICAgICAgICBncmlkLWFyZWE6IG90aGVyX2FydGljbGVzXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgICAgICBwYWRkaW5nOiAycmVtXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgIGgyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgICAgIGNvbG9yOiAkc29mdF9vcmFuZ2VcXG4gICAgICAgIC5uZXdfYXJ0aWNsZV9jb250YWluZXJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIGdhcDogLjVyZW1cXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgICAgICAgICBoM1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgMnZ3LCAycmVtKVxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkb2ZmX3doaXRlXFxuICAgICAgICAgICAgICAgICYgYVxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc29mdF9vcmFuZ2VcXG4gICAgICAgICAgICBwXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDEuNnJlbSlcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5aXNoX2JsdWVcXG5cXG5waWN0dXJlXFxuICAgIGdyaWQtYXJlYTogaW1hZ2VcXG5cXG4uYXJ0aWNsZV9pbmZvXFxuICAgIGdyaWQtYXJlYTogaW5mb1xcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweClcXG4gICAgbWFpblxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImltYWdlIGltYWdlIG90aGVyX2FydGljbGVzXFxcIiBcXFwidGl0bGUgaW5mbyBvdGhlcl9hcnRpY2xlc1xcXCJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjlyZW0gMWZyIDFmclxcbiAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgICAgICBoMVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNHZ3LCA0Ljc1cmVtKVxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxcmVtLCA1dncsIDVyZW0pXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICAgICAgcFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yMnJlbVxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtXFxuICAgICAgICBpbWdcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXFxuICAgICAgICAucmVhZF9tb3JlXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICAuYXJ0aWNsZV9pbmZvXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweClcXG4gICAgbWFpbiAubmV3X2FydGljbGVzXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXFxuICAgIG1haW4gLm5ld19hcnRpY2xlcyBoMlxcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW1cXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW1cXG4gICAgbWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgaDNcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtXFxuICAgIG1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoMyksXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoNClcXG4gICAgbWFyZ2luLXRvcDogM3JlbVxcblxcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDIpOjphZnRlcixcXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCgzKTo6YWZ0ZXJcXG4gICAgY29udGVudDogJydcXG4gICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgIGhlaWdodDogMXB4XFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGJhY2tncm91bmQ6ICRncmF5aXNoX2JsdWVcXG4gICAgYm90dG9tOiAtLjVyZW1cXG5cXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KVxcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbVxcblxcbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMnJlbVxcbiAgICAub3RoZXJfYXJ0aWNsZVxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICBpbWdcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZyZW1cXG4gICAgICAgIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnRcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX251bWJlclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW1cXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX3RpdGxlXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgICAgICAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxcbiAgICAgICAgICAgICAgICAmIGEgXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNvZnRfcmVkXFxuICAgICAgICAgICAgLm90aGVyX2FydGljbGVfaW5mb1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbVxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtfZ3JheWlzaF9ibHVlXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpXFxuICAgIC5vdGhlcl9hcnRpY2xlc19jb250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJhcnRpY2xlXzEgYXJ0aWNsZV8yIGFydGljbGVfM1xcXCJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjlyZW0gMWZyIDFmclxcbiAgICAgICAgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudFxcbiAgICAgICAgICAgIG1heC13aWR0aDogMThyZW1cXG4gICAgICAgICAgICAgICAgXFxuZm9vdGVyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG4vLyB2YXJpYWJsZXNcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGNsb3NlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWQnKTtcbmNvbnN0IG9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbicpO1xuY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rX2NvbnRhaW5lcicpO1xuXG5jbG9zZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ21lbnVfb3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFjb250YWluZXIuaGFzQXR0cmlidXRlKCdtZW51X29wZW4nKSkge1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdtZW51X29wZW4nLCAnJyk7XG4gICAgICAgIGxpbmtDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdjbG9zZWQnKTtcbiAgICB9XG59KVxuXG5vcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnbWVudV9vcGVuJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnbWVudV9vcGVuJykpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnbWVudV9vcGVuJyk7XG4gICAgICAgIGxpbmtDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbG9zZWQnLCAnJyk7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=