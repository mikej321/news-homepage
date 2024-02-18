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

@media screen and (min-width: 600px) {
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

@media screen and (min-width: 600px) {
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
  font-size: clamp(4rem, 11vw, 8rem);
  line-height: clamp(4rem, 11vw, 8rem);
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
  font-size: clamp(1.8rem, 5vw, 4rem);
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

@media screen and (min-width: 600px) {
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
@media screen and (min-width: 600px) {
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
  font-size: clamp(1.4rem, 5vw, 2.5rem);
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
  font-size: clamp(1.3rem, 4vw, 2.5rem);
  color: hsl(236, 13%, 42%);
  line-height: clamp(1.75rem, 7vw, 3rem);
}

@media screen and (min-width: 600px) {
  .other_articles_container {
    display: grid;
    grid-template-areas: "article_1 article_2 article_3";
    grid-template-columns: 29rem 1fr 1fr;
  }
  .other_articles_container .other_article .other_article_content {
    max-width: 18rem;
  }
  .other_articles_container .other_article .other_article_content .other_article_info {
    font-size: 1.3rem;
    line-height: 1.75rem;
  }
  .other_articles_container .other_article .other_article_content .other_article_title {
    font-size: 1.4rem;
  }
}
footer {
  grid-area: footer;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')\n\n// Primary Colors\n$soft_orange: hsl(35, 77%, 62%)\n$soft_red: hsl(5, 85%, 63%)\n\n// Neutral\n$off_white: hsl(36, 100%, 99%)\n$grayish_blue: hsl(233, 8%, 79%)\n$dark_grayish_blue: hsl(236, 13%, 42%)\n$very_dark_blue: hsl(240, 100%, 5%)\n\n// font_size\n$font_size_paragraph: 15px\n\n*,\n*::before,\n*::after \n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: $font_size_paragraph\n    display: flex\n    flex-direction: column\n    align-items: center\n    font-family: 'Inter', sans-serif\n    \n\n.container\n    display: grid\n    grid-template-areas: \"header\" \"main\" \"footer\"\n    justify-content: center\n    max-width: 90vw\n    padding-block: 2rem 4rem\n    position: relative\n    &[menu_open=\"\"]::after\n        content: ''\n        position: fixed\n        top: 0\n        left: 0\n        min-height: 100vh\n        min-width: 100vw\n        background: rgba(0, 0, 0, 0.5)\n        z-index: 0\n\n@media screen and (min-width: 600px)\n    .container\n        max-width: 75vw\n        &[menu_open=\"\"]::after\n            position: static\n            min-height: max-content\n            min-width: max-content\n\n@media screen and (min-width: 1150px)\n    .container\n        max-width: 900px\n\n\nheader\n    grid-area: header\n    display: flex\n    align-items: center\n    justify-content: space-between\n    margin-bottom: 2.5rem\n    .link_container\n        display: grid\n        grid-template-areas: \"logo\" \"links\"\n        grid-template-rows: 10rem 1fr\n        min-height: 200vh\n        min-width: 68%\n        align-items: end\n        position: absolute\n        top: 0\n        right: 0\n        background: $off_white\n        z-index: 2\n        align-items: start\n        padding-top: 2.8rem\n        .open\n            justify-self: end\n            margin-right: 2rem\n            cursor: pointer\n        .links\n            display: flex\n            flex-direction: column\n            gap: 2rem\n            padding-left: 2rem\n        &[closed=\"\"]\n            max-width: 0\n            max-height: 0\n            overflow: hidden\n        a\n            text-decoration: none\n            color: $very_dark_blue\n            font-size: 1.6rem\n            transition: color 0.2s ease-in-out\n            font-weight: 400\n            &:hover\n                color: $soft_red\n\nheader .link_container\n    translate: 5vw\n    opacity: 1\n    transition: opacity 0.05s ease-in-out, translate 0.2s ease-in-out\n\nheader .link_container[closed=\"\"]\n    opacity: 0\n    translate: 100vw\n\n\n.menu_icons .closed\n    cursor: pointer\n\n.menu_icons .closed path\n    transition: fill 0.2s ease-in-out\n\n.menu_icons:hover .closed path\n    fill: $soft_red\n\n.open path\n    transition: fill 0.2s ease-in-out\n\n.open:hover path\n    fill: $soft_red\n\n@media screen and (min-width: 600px)\n    header .menu_icons\n        display: none\n    header .link_container[closed=\"\"],\n    header .link_container\n            max-height: fit-content\n            overflow: auto\n            display: flex\n            width: 100%\n            max-width: 35rem\n            flex-direction: row\n            justify-content: end\n            position: static\n            min-height: max-content\n            transition: none\n            translate: 0\n            opacity: 1\n            padding: 0\n            .links\n                display: flex\n                flex-direction: row\n                justify-content: end\n                padding-left: 0\n                a\n                    font-size: 1.3rem\n            .open\n                display: none\n\nmain\n    grid-area: main\n    display: grid\n    grid-template-areas: \"image\" \"title\" \"info\" \"other_articles\"\n    img\n        margin-bottom: 2.5rem\n    h1\n        grid-area: title\n        color: $very_dark_blue\n        margin-bottom: 2rem\n        font-weight: 800\n        font-size: clamp(4rem, 11vw, 8rem)\n        line-height: clamp(4rem, 11vw, 8rem)\n    p\n        font-size: clamp(1.4rem, 2vw, 2.5rem)\n        line-height: clamp(2.2rem, 2vw, 4rem)\n        color: $very_dark_blue\n        margin-bottom: 2rem\n    .read_more\n        max-width: 14rem\n        background: $soft_red\n        color: $off_white\n        padding: 1rem 2rem\n        text-transform: uppercase\n        letter-spacing: 2px\n        font-weight: 700\n        border: none\n        margin-bottom: 5rem\n        cursor: pointer\n        transition: all 0.2s ease-in-out\n        &:hover\n            background: $very_dark_blue\n            color: $off_white\n    .new_articles\n        grid-area: other_articles\n        margin-bottom: 5rem\n        padding: 2rem\n        display: flex\n        flex-direction: column\n        background: $very_dark_blue\n        h2\n            margin-bottom: 2rem\n            color: $soft_orange\n        .new_article_container\n            display: flex\n            flex-direction: column\n            gap: .5rem\n            position: relative\n            h3\n                font-size: clamp(1.8rem, 5vw, 4rem)\n                font-weight: 800\n                color: $off_white\n                & a\n                    text-decoration: none\n                    color: $off_white\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_orange\n            p\n                font-size: clamp(1.4rem, 2vw, 1.6rem)\n                color: $grayish_blue\n\npicture\n    grid-area: image\n\n.article_info\n    grid-area: info\n    display: flex\n    flex-direction: column\n\n@media screen and (min-width: 600px)\n    main\n        grid-template-areas: \"image image other_articles\" \"title info other_articles\"\n        grid-template-columns: 29rem 1fr 1fr\n        gap: 2rem\n        margin-bottom: 5rem\n        h1\n            font-size: clamp(3rem, 4vw, 4.75rem)\n            line-height: clamp(1rem, 5vw, 5rem)\n            margin-bottom: 0\n        p\n            font-size: 1.22rem\n            line-height: 2rem\n        img\n            margin-bottom: 0\n            height: 100%\n        .read_more\n            margin-bottom: 0\n    .article_info\n        justify-content: space-between\n\n@media screen and (min-width: 600px)\n    main .new_articles\n        margin-bottom: 0\n    main .new_articles h2\n        font-size: 3.5rem\n        margin-bottom: 3rem\n    main .new_articles .new_article_container h3\n        font-size: 1.6rem\n        // margin-bottom: 1rem\n    main .new_articles .new_article_container p\n        font-size: 1.2rem\n\n.new_article_container:nth-child(3),\n.new_article_container:nth-child(4)\n    margin-top: 3rem\n\n.new_article_container:nth-child(2)::after,\n.new_article_container:nth-child(3)::after\n    content: ''\n    position: absolute\n    height: 1px\n    width: 100%\n    background: $grayish_blue\n    bottom: -.5rem\n\n.new_article_container:nth-child(4)\n    margin-bottom: -1rem\n\n.other_articles_container\n    display: flex\n    flex-direction: column\n    gap: 2rem\n    .other_article\n        display: flex\n        gap: 2rem\n        img\n            max-width: 6rem\n        .other_article_content\n            display: flex\n            flex-direction: column\n            .other_article_number\n                color: $grayish_blue\n                font-size: 2rem\n                font-weight: 700\n                margin-bottom: .5rem\n            .other_article_title\n                font-weight: 800\n                font-size: clamp(1.4rem, 5vw, 2.5rem)\n                color: $very_dark_blue\n                margin-bottom: .5rem\n                & a \n                    text-decoration: none\n                    color: $very_dark_blue\n                    transition: color 0.2s ease-in-out\n                    &:hover\n                        color: $soft_red\n            .other_article_info\n                font-size: clamp(1.3rem, 4vw, 2.5rem)\n                color: $dark_grayish_blue\n                line-height: clamp(1.75rem, 7vw, 3rem)\n\n@media screen and (min-width: 600px)\n    .other_articles_container\n        display: grid\n        grid-template-areas: \"article_1 article_2 article_3\"\n        grid-template-columns: 29rem 1fr 1fr\n        .other_article .other_article_content\n            max-width: 18rem\n            .other_article_info\n                font-size: 1.3rem\n                line-height: 1.75rem\n            .other_article_title\n                font-size: 1.4rem\n                \nfooter\n    grid-area: footer\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlJQUFpSTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFN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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0E2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9iZmFkIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld3MtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXdzLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3cy1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcIm1haW5cIiBcImZvb3RlclwiO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBwYWRkaW5nLWJsb2NrOiAycmVtIDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXJbbWVudV9vcGVuPVwiXCJdOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc1dnc7XG4gIH1cbiAgLmNvbnRhaW5lclttZW51X29wZW49XCJcIl06OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICB9XG59XG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsb2dvXCIgXCJsaW5rc1wiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIDFmcjtcbiAgbWluLWhlaWdodDogMjAwdmg7XG4gIG1pbi13aWR0aDogNjglO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGhzbCgzNiwgMTAwJSwgOTklKTtcbiAgei1pbmRleDogMjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMi44cmVtO1xufVxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciAub3BlbiB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIgLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5oZWFkZXIgLmxpbmtfY29udGFpbmVyW2Nsb3NlZD1cIlwiXSB7XG4gIG1heC13aWR0aDogMDtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmhlYWRlciAubGlua19jb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oZWFkZXIgLmxpbmtfY29udGFpbmVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDUsIDg1JSwgNjMlKTtcbn1cblxuaGVhZGVyIC5saW5rX2NvbnRhaW5lciB7XG4gIHRyYW5zbGF0ZTogNXZ3O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDVzIGVhc2UtaW4tb3V0LCB0cmFuc2xhdGUgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2xhdGU6IDEwMHZ3O1xufVxuXG4ubWVudV9pY29ucyAuY2xvc2VkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudV9pY29ucyAuY2xvc2VkIHBhdGgge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51X2ljb25zOmhvdmVyIC5jbG9zZWQgcGF0aCB7XG4gIGZpbGw6IGhzbCg1LCA4NSUsIDYzJSk7XG59XG5cbi5vcGVuIHBhdGgge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vcGVuOmhvdmVyIHBhdGgge1xuICBmaWxsOiBoc2woNSwgODUlLCA2MyUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgLm1lbnVfaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0sXG4gIGhlYWRlciAubGlua19jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB0cmFuc2xhdGU6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGhlYWRlciAubGlua19jb250YWluZXJbY2xvc2VkPVwiXCJdIC5saW5rcyxcbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lciAubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XCJcIl0gLmxpbmtzIGEsXG4gIGhlYWRlciAubGlua19jb250YWluZXIgLmxpbmtzIGEge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIGhlYWRlciAubGlua19jb250YWluZXJbY2xvc2VkPVwiXCJdIC5vcGVuLFxuICBoZWFkZXIgLmxpbmtfY29udGFpbmVyIC5vcGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlXCIgXCJ0aXRsZVwiIFwiaW5mb1wiIFwib3RoZXJfYXJ0aWNsZXNcIjtcbn1cbm1haW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxubWFpbiBoMSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGNvbG9yOiBoc2woMjQwLCAxMDAlLCA1JSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgMTF2dywgOHJlbSk7XG4gIGxpbmUtaGVpZ2h0OiBjbGFtcCg0cmVtLCAxMXZ3LCA4cmVtKTtcbn1cbm1haW4gcCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDIuNXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjJyZW0sIDJ2dywgNHJlbSk7XG4gIGNvbG9yOiBoc2woMjQwLCAxMDAlLCA1JSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5tYWluIC5yZWFkX21vcmUge1xuICBtYXgtd2lkdGg6IDE0cmVtO1xuICBiYWNrZ3JvdW5kOiBoc2woNSwgODUlLCA2MyUpO1xuICBjb2xvcjogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnJlYWRfbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgY29sb3I6IGhzbCgzNiwgMTAwJSwgOTklKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyB7XG4gIGdyaWQtYXJlYTogb3RoZXJfYXJ0aWNsZXM7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiBoc2woMzUsIDc3JSwgNjIlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDV2dywgNHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiBoc2woMzYsIDEwMCUsIDk5JSk7XG59XG5tYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBoMyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaHNsKDM2LCAxMDAlLCA5OSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgaDMgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMzUsIDc3JSwgNjIlKTtcbn1cbm1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMnZ3LCAxLjZyZW0pO1xuICBjb2xvcjogaHNsKDIzMywgOCUsIDc5JSk7XG59XG5cbnBpY3R1cmUge1xuICBncmlkLWFyZWE6IGltYWdlO1xufVxuXG4uYXJ0aWNsZV9pbmZvIHtcbiAgZ3JpZC1hcmVhOiBpbmZvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBtYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGltYWdlIG90aGVyX2FydGljbGVzXCIgXCJ0aXRsZSBpbmZvIG90aGVyX2FydGljbGVzXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOXJlbSAxZnIgMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG4gIG1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNHZ3LCA0Ljc1cmVtKTtcbiAgICBsaW5lLWhlaWdodDogY2xhbXAoMXJlbSwgNXZ3LCA1cmVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIG1haW4gcCB7XG4gICAgZm9udC1zaXplOiAxLjIycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIG1haW4gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBtYWluIC5yZWFkX21vcmUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmFydGljbGVfaW5mbyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBtYWluIC5uZXdfYXJ0aWNsZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgbWFpbiAubmV3X2FydGljbGVzIGgyIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG4gIG1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIGgzIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBtYWluIC5uZXdfYXJ0aWNsZXMgLm5ld19hcnRpY2xlX2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoMyksXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDIpOjphZnRlcixcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBoc2woMjMzLCA4JSwgNzklKTtcbiAgYm90dG9tOiAtMC41cmVtO1xufVxuXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcmVtO1xufVxuXG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgaW1nIHtcbiAgbWF4LXdpZHRoOiA2cmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCAub3RoZXJfYXJ0aWNsZV9udW1iZXIge1xuICBjb2xvcjogaHNsKDIzMywgOCUsIDc5JSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDV2dywgMi41cmVtKTtcbiAgY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUlKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX3RpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBoc2woMjQwLCAxMDAlLCA1JSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnQgLm90aGVyX2FydGljbGVfdGl0bGUgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woNSwgODUlLCA2MyUpO1xufVxuLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX2luZm8ge1xuICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgNHZ3LCAyLjVyZW0pO1xuICBjb2xvcjogaHNsKDIzNiwgMTMlLCA0MiUpO1xuICBsaW5lLWhlaWdodDogY2xhbXAoMS43NXJlbSwgN3Z3LCAzcmVtKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFydGljbGVfMSBhcnRpY2xlXzIgYXJ0aWNsZV8zXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOXJlbSAxZnIgMWZyO1xuICB9XG4gIC5vdGhlcl9hcnRpY2xlc19jb250YWluZXIgLm90aGVyX2FydGljbGUgLm90aGVyX2FydGljbGVfY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgfVxuICAub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnQgLm90aGVyX2FydGljbGVfaW5mbyB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbiAgLm90aGVyX2FydGljbGVzX2NvbnRhaW5lciAub3RoZXJfYXJ0aWNsZSAub3RoZXJfYXJ0aWNsZV9jb250ZW50IC5vdGhlcl9hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZUE7OztFQUdJLHNCQUFBO0FBYko7O0FBZUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVZKOztBQVlBO0VBQ0ksZUFyQmtCO0VBc0JsQixhQUFBO0VBQ0Esc0JB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Q0EseUJBM1NIO0VBNFNHLGtDQUFBO0FBaURwQjtBQWhEb0I7RUFDSSx1QkFwVGI7QUFzV1g7QUFqRFk7RUFDSSxxQ0FBQTtFQUNBLHlCQWxUSTtFQW1USixzQ0FBQTtBQW1EaEI7O0FBakRBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esb0RBQUE7SUFDQSxvQ0FBQTtFQW9ETjtFQW5ETTtJQUNJLGdCQUFBO0VBcURWO0VBcERVO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtFQXNEZDtFQXJEVTtJQUNJLGlCQUFBO0VBdURkO0FBQ0Y7QUF0REE7RUFDSSxpQkFBQTtBQXdESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcCcpXFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kc29mdF9vcmFuZ2U6IGhzbCgzNSwgNzclLCA2MiUpXFxuJHNvZnRfcmVkOiBoc2woNSwgODUlLCA2MyUpXFxuXFxuLy8gTmV1dHJhbFxcbiRvZmZfd2hpdGU6IGhzbCgzNiwgMTAwJSwgOTklKVxcbiRncmF5aXNoX2JsdWU6IGhzbCgyMzMsIDglLCA3OSUpXFxuJGRhcmtfZ3JheWlzaF9ibHVlOiBoc2woMjM2LCAxMyUsIDQyJSlcXG4kdmVyeV9kYXJrX2JsdWU6IGhzbCgyNDAsIDEwMCUsIDUlKVxcblxcbi8vIGZvbnRfc2l6ZVxcbiRmb250X3NpemVfcGFyYWdyYXBoOiAxNXB4XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG4qXFxuICAgIG1hcmdpbjogMFxcbiAgICBwYWRkaW5nOiAwXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXFxuXFxuaHRtbFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3ZlclxcblxcbmJvZHlcXG4gICAgZm9udC1zaXplOiAkZm9udF9zaXplX3BhcmFncmFwaFxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZlxcbiAgICBcXG5cXG4uY29udGFpbmVyXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiIFxcXCJmb290ZXJcXFwiXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIG1heC13aWR0aDogOTB2d1xcbiAgICBwYWRkaW5nLWJsb2NrOiAycmVtIDRyZW1cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgICZbbWVudV9vcGVuPVxcXCJcXFwiXTo6YWZ0ZXJcXG4gICAgICAgIGNvbnRlbnQ6ICcnXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWRcXG4gICAgICAgIHRvcDogMFxcbiAgICAgICAgbGVmdDogMFxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmhcXG4gICAgICAgIG1pbi13aWR0aDogMTAwdndcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KVxcbiAgICAgICAgei1pbmRleDogMFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuY29udGFpbmVyXFxuICAgICAgICBtYXgtd2lkdGg6IDc1dndcXG4gICAgICAgICZbbWVudV9vcGVuPVxcXCJcXFwiXTo6YWZ0ZXJcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljXFxuICAgICAgICAgICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnRcXG4gICAgICAgICAgICBtaW4td2lkdGg6IG1heC1jb250ZW50XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KVxcbiAgICAuY29udGFpbmVyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4XFxuXFxuXFxuaGVhZGVyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtXFxuICAgIC5saW5rX2NvbnRhaW5lclxcbiAgICAgICAgZGlzcGxheTogZ3JpZFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvZ29cXFwiIFxcXCJsaW5rc1xcXCJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyXFxuICAgICAgICBtaW4taGVpZ2h0OiAyMDB2aFxcbiAgICAgICAgbWluLXdpZHRoOiA2OCVcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmRcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgdG9wOiAwXFxuICAgICAgICByaWdodDogMFxcbiAgICAgICAgYmFja2dyb3VuZDogJG9mZl93aGl0ZVxcbiAgICAgICAgei1pbmRleDogMlxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0XFxuICAgICAgICBwYWRkaW5nLXRvcDogMi44cmVtXFxuICAgICAgICAub3BlblxcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAubGlua3NcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIGdhcDogMnJlbVxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbVxcbiAgICAgICAgJltjbG9zZWQ9XFxcIlxcXCJdXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAwXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMFxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgICAgIGFcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gICAgICAgICAgICBjb2xvcjogJHZlcnlfZGFya19ibHVlXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMFxcbiAgICAgICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzb2Z0X3JlZFxcblxcbmhlYWRlciAubGlua19jb250YWluZXJcXG4gICAgdHJhbnNsYXRlOiA1dndcXG4gICAgb3BhY2l0eTogMVxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDVzIGVhc2UtaW4tb3V0LCB0cmFuc2xhdGUgMC4ycyBlYXNlLWluLW91dFxcblxcbmhlYWRlciAubGlua19jb250YWluZXJbY2xvc2VkPVxcXCJcXFwiXVxcbiAgICBvcGFjaXR5OiAwXFxuICAgIHRyYW5zbGF0ZTogMTAwdndcXG5cXG5cXG4ubWVudV9pY29ucyAuY2xvc2VkXFxuICAgIGN1cnNvcjogcG9pbnRlclxcblxcbi5tZW51X2ljb25zIC5jbG9zZWQgcGF0aFxcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXRcXG5cXG4ubWVudV9pY29uczpob3ZlciAuY2xvc2VkIHBhdGhcXG4gICAgZmlsbDogJHNvZnRfcmVkXFxuXFxuLm9wZW4gcGF0aFxcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXRcXG5cXG4ub3Blbjpob3ZlciBwYXRoXFxuICAgIGZpbGw6ICRzb2Z0X3JlZFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBoZWFkZXIgLm1lbnVfaWNvbnNcXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcXG4gICAgaGVhZGVyIC5saW5rX2NvbnRhaW5lcltjbG9zZWQ9XFxcIlxcXCJdLFxcbiAgICBoZWFkZXIgLmxpbmtfY29udGFpbmVyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnRcXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0b1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzVyZW1cXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmRcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljXFxuICAgICAgICAgICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnRcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lXFxuICAgICAgICAgICAgdHJhbnNsYXRlOiAwXFxuICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcXG4gICAgICAgICAgICAubGlua3NcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMFxcbiAgICAgICAgICAgICAgICBhXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbVxcbiAgICAgICAgICAgIC5vcGVuXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcXG5cXG5tYWluXFxuICAgIGdyaWQtYXJlYTogbWFpblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbWFnZVxcXCIgXFxcInRpdGxlXFxcIiBcXFwiaW5mb1xcXCIgXFxcIm90aGVyX2FydGljbGVzXFxcIlxcbiAgICBpbWdcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbVxcbiAgICBoMVxcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZVxcbiAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCAxMXZ3LCA4cmVtKVxcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDRyZW0sIDExdncsIDhyZW0pXFxuICAgIHBcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDIuNXJlbSlcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjJyZW0sIDJ2dywgNHJlbSlcXG4gICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW1cXG4gICAgLnJlYWRfbW9yZVxcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbVxcbiAgICAgICAgYmFja2dyb3VuZDogJHNvZnRfcmVkXFxuICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4XFxuICAgICAgICBmb250LXdlaWdodDogNzAwXFxuICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW1cXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAubmV3X2FydGljbGVzXFxuICAgICAgICBncmlkLWFyZWE6IG90aGVyX2FydGljbGVzXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgICAgICBwYWRkaW5nOiAycmVtXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgIGgyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgICAgIGNvbG9yOiAkc29mdF9vcmFuZ2VcXG4gICAgICAgIC5uZXdfYXJ0aWNsZV9jb250YWluZXJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIGdhcDogLjVyZW1cXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgICAgICAgICBoM1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgNXZ3LCA0cmVtKVxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkb2ZmX3doaXRlXFxuICAgICAgICAgICAgICAgICYgYVxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9mZl93aGl0ZVxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc29mdF9vcmFuZ2VcXG4gICAgICAgICAgICBwXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDEuNnJlbSlcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5aXNoX2JsdWVcXG5cXG5waWN0dXJlXFxuICAgIGdyaWQtYXJlYTogaW1hZ2VcXG5cXG4uYXJ0aWNsZV9pbmZvXFxuICAgIGdyaWQtYXJlYTogaW5mb1xcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgbWFpblxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImltYWdlIGltYWdlIG90aGVyX2FydGljbGVzXFxcIiBcXFwidGl0bGUgaW5mbyBvdGhlcl9hcnRpY2xlc1xcXCJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjlyZW0gMWZyIDFmclxcbiAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgICAgICBoMVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNHZ3LCA0Ljc1cmVtKVxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxcmVtLCA1dncsIDVyZW0pXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICAgICAgcFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yMnJlbVxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtXFxuICAgICAgICBpbWdcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXFxuICAgICAgICAucmVhZF9tb3JlXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxcbiAgICAuYXJ0aWNsZV9pbmZvXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgbWFpbiAubmV3X2FydGljbGVzXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXFxuICAgIG1haW4gLm5ld19hcnRpY2xlcyBoMlxcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW1cXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW1cXG4gICAgbWFpbiAubmV3X2FydGljbGVzIC5uZXdfYXJ0aWNsZV9jb250YWluZXIgaDNcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtXFxuICAgIG1haW4gLm5ld19hcnRpY2xlcyAubmV3X2FydGljbGVfY29udGFpbmVyIHBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoMyksXFxuLm5ld19hcnRpY2xlX2NvbnRhaW5lcjpudGgtY2hpbGQoNClcXG4gICAgbWFyZ2luLXRvcDogM3JlbVxcblxcbi5uZXdfYXJ0aWNsZV9jb250YWluZXI6bnRoLWNoaWxkKDIpOjphZnRlcixcXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCgzKTo6YWZ0ZXJcXG4gICAgY29udGVudDogJydcXG4gICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgIGhlaWdodDogMXB4XFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGJhY2tncm91bmQ6ICRncmF5aXNoX2JsdWVcXG4gICAgYm90dG9tOiAtLjVyZW1cXG5cXG4ubmV3X2FydGljbGVfY29udGFpbmVyOm50aC1jaGlsZCg0KVxcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbVxcblxcbi5vdGhlcl9hcnRpY2xlc19jb250YWluZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMnJlbVxcbiAgICAub3RoZXJfYXJ0aWNsZVxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICBpbWdcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZyZW1cXG4gICAgICAgIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnRcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX251bWJlclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW1cXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX3RpdGxlXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDV2dywgMi41cmVtKVxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHZlcnlfZGFya19ibHVlXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtXFxuICAgICAgICAgICAgICAgICYgYSBcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc29mdF9yZWRcXG4gICAgICAgICAgICAub3RoZXJfYXJ0aWNsZV9pbmZvXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCA0dncsIDIuNXJlbSlcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrX2dyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMS43NXJlbSwgN3Z3LCAzcmVtKVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAub3RoZXJfYXJ0aWNsZXNfY29udGFpbmVyXFxuICAgICAgICBkaXNwbGF5OiBncmlkXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYXJ0aWNsZV8xIGFydGljbGVfMiBhcnRpY2xlXzNcXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5cmVtIDFmciAxZnJcXG4gICAgICAgIC5vdGhlcl9hcnRpY2xlIC5vdGhlcl9hcnRpY2xlX2NvbnRlbnRcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE4cmVtXFxuICAgICAgICAgICAgLm90aGVyX2FydGljbGVfaW5mb1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbVxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbVxcbiAgICAgICAgICAgIC5vdGhlcl9hcnRpY2xlX3RpdGxlXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXFxuICAgICAgICAgICAgICAgIFxcbmZvb3RlclxcbiAgICBncmlkLWFyZWE6IGZvb3RlclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuLy8gdmFyaWFibGVzXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBjbG9zZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VkJyk7XG5jb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4nKTtcbmNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua19jb250YWluZXInKTtcblxuY2xvc2VkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjb250YWluZXIuaGFzQXR0cmlidXRlKCdtZW51X29wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnbWVudV9vcGVuJykpIHtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbWVudV9vcGVuJywgJycpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2VkJyk7XG4gICAgfVxufSlcblxub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ21lbnVfb3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ21lbnVfb3BlbicpKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ21lbnVfb3BlbicpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xvc2VkJywgJycpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9