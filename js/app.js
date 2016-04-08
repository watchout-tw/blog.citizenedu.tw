/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(4);

	__webpack_require__(6);

	__webpack_require__(8);

	__webpack_require__(10);

	__webpack_require__(12);

	__webpack_require__(14);

	__webpack_require__(16);

	__webpack_require__(18);

	__webpack_require__(20);

	__webpack_require__(22);

	__webpack_require__(24);

	__webpack_require__(26);

	__webpack_require__(28);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/normalize.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/main.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Noto+Sans:400,700);", ""]);
	exports.push([module.id, "\n/* --------- 讓頁面不會滾動 -------- */\n\n@media all and (min-width: 500px){\n   /* 手機設定這個樣式，會讓滾動不順暢 */\n   html {\n      overflow: hidden;\n      height: 100%;\n   }\n   body {\n      height: 100%;\n      overflow: auto;\n   }\n}\n\n/* -------- */\n\nbody {\n   background: rgb(250,250,250);\n}\np, blockquote, h3, ul, ol, li, a, span {\n   font-family: 'Noto Sans', sans-serif;\n   line-height: 1.8;\n   font-size: 18px;\n   color: rgb(53,55,54);\n}\n.app {\n   width: 100%;\n   overflow-x: hidden;\n}\n.flexWrapper {\n   display: -webkit-box;\n   display: -moz-box;\n   display: -ms-flexbox;\n   display: -webkit-flex;\n\tdisplay: flex;\n\n   -webkit-flex-direction: column;\n   -ms-flex-direction: column;\n   flex-direction: column;\n\n\tbackground: #FAFAFA;\n}\n.padTags {\n   display: none;\n}\n\n@media all and (min-width: 600px) and (max-width: 999px){\n   .padWrapper {\n      padding-left: 340px;\n   }\n\n}\n@media all and (min-width: 600px) {\n\n\t.flexWrapper {\n      padding-top: 69px;\n     \n\t\t-webkit-flex-direction: row;\n      -ms-flex-direction: row;\n      flex-direction: row;\n\n\t}\n   .flexWrapper--Columns {\n      padding-top: 69px;\n      padding-left: 340px;\n      width: calc(100% - 350px);\n      overflow: hidden;\n   }\n\n   .padTags {\n      display: block;\n      padding-left: 340px;\n   }\n   .defaultTags {\n      display: none;\n   }\n   \n}\n@media all and (min-width: 1000px) {\n   .flexWrapper {\n      padding-right: 320px;\n   }\n   .padTags {\n      display: none;\n   }\n   .defaultTags {\n      display: block;\n      width: 300px;\n      height: 20px;\n      position: fixed;\n  \n   }\n}\n@media all and (min-width: 1440px) {\n   .defaultTags {\n      display: block;\n      width: 300px;\n      height: 20px;\n      position: fixed;\n      top: 84px;\n      right: calc((100vw - 1440px)/2);\n  \n   }\n}\na, a:visited {\n   color: rgb(53,55,54);\n   cursor: pointer;\n   text-decoration: none;\n   border-bottom: 1px solid rgb(120,120,120);\n}\na:hover {\n\n}\nh1 {\n   font-size: 28px;\n   line-height: 1.25;\n   font-weight: 900;\n   margin: 50px 0px 20px 0px;\n   border-left: 10px solid #87B825;\n   padding-left: 14px;\n\n}\n@media screen and (min-width: 400px){\n   h1 {\n      font-size: 40px;\n   }\n}\nh2 {\n   font-size: 26px;\n   font-weight: 900;\n   margin: 16px 0px;\n}\np {\n\n}\nol {\n\n}\nli {\n\n}\nhr {\n   border: none;\n   border-top: 1px solid rgb(200,200,200);\n}\n/* IMAGES */\na.lightbox {\n   text-decoration: none;\n   border: none;\n}\na.lightbox img {\n}\n.filename {\n\tfont-size: 14px;\n}\n.informations {\n\tdisplay: none;\n}\n", ""]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/AboutSite/AboutSite.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/AboutSite/AboutSite.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".AboutSite {\n    width: 100%;\n\n    background: rgba(135,184,37,1);\n    color: white;\n    overflow: scroll;\n    z-index: 0;\n}\n.AboutSite-img {\n\tdisplay: none;\n}\n\n@media screen and (min-width: 600px) and (max-width: 999px){\n\n}\n@media screen and (min-width: 600px){\n  .AboutSite {\n    width: 340px;\n    height: 100vh;\n    position: fixed;\n    left:0;\n  }\n  .AboutSite-img {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    position: relative;\n  }\n  .AboutSite-imgPicture {\n    width: 100%;\n  }\n  .AboutSite-imgCopyright a {\n    color: #e9e9e9;\n    border: none;\n    font-size: 12px;\n  }\n  .AboutSite-imgCopyright {\n    color: #e9e9e9;\n    position: absolute;\n    bottom: 4px;\n    right: 10px;\n    cursor: pointer;\n    border: none;\n    font-size: 12px;\n  }\n}\n\n@media screen and (min-width: 1000px){\n\t.AboutSite {\n    -webkit-box-flex:  0 0 340px;      /* OLD - iOS 6-, Safari 3.1-6 */\n    -moz-box-flex:  0 0 340px;         /* OLD - Firefox 19- */\n    -webkit-flex:  0 0 340px;          /* Chrome */\n    -ms-flex:  0 0 340px;              /* IE 10 */\n    flex: 0 0 340px;\n    padding-top: 0px;\n  }\n  .AboutSite-fix {\n    position: fixed;\n    width: 340px;\n    height: 100vh;\n    background: rgba(135,184,37,1);\n  }\n  \n}\n.AboutSite-content {\n\tpadding: 10px;\n}\n.AboutSite-title {\n  margin: 0;\n  padding: 0;\n\tfont-size: 24px;\n\tfont-weight: 800;\n  color: white;\n}\n.AboutSite-info {\n  margin-top: 1px;\n}\n@media screen and (min-width: 600px){\n  .AboutSite-info {\n    margin-top: 5px;\n  }\n}\n.AboutSite-info {\n  padding: 0;\n\tline-height: 1.6;\n  font-size: 16px;\n  color: white;\n}\n.AboutSite-meta {\n\tmargin-top: 6px;\n  margin-bottom: 8px;\n}\n@media screen and (min-width: 600px){\n  .AboutSite-meta {\n    margin-top: 12px;\n  }\n}\n.AboutSite-meta a {\n\tfont-size: 12px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n  color: white;\n\tborder-bottom: none;\n}\n.AboutSite-meta a:hover {\n\tborder-bottom: none;\n  box-shadow: 0px 1px white;\n}\n", ""]);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/AppBar/AppBar.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/AppBar/AppBar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".AppBar {\n\tpadding: 16px;\n\t//background: rgba(220,220,220,0.2);\n\tborder-bottom: 1px solid rgb(230,230,230);\n\twidth: 100%;\n\n\n}\n@media screen and (min-width: 600px){\n\t.AppBar {\n\t    top: 0;\n        position: fixed;\n        background: white;\n        z-index: 1;\n\n\t}\n\n}\na.AppBar-logo {\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcursor: pointer;\n\tborder: none;\n\tdisplay: block;\n}\n\na.AppBar-logo:hover {\n\tcolor: #87B825;\n}\na.AppBar-nav {\n\tborder: none;\n\tfont-size: 14px;\n\tfont-weight: 800;\n\tmargin-right: 10px;\n}\na.AppBar-nav:hover {\n\tborder-bottom: 2px solid;\n\t//color: #87B825;\n}\n\n@media screen and (min-width: 400px){\n\ta.AppBar-logo {\n\t\tdisplay: inline-block;\n\t\tpadding-right: 10px;\n\t}\n\ta.AppBar-nav {\n\t   margin: 0 5px;\n    }\n\n}\n", ""]);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Arthor/Arthor.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Arthor/Arthor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Arthor {\n\tline-height: 1.6;\n\tmargin-bottom: 20px;\n\tbox-shadow: 4px 4px 0px rgba(200,200,200,0.4);\n\tpadding: 18px;\n\tbackground: white;\n\tcursor: pointer;\n\tborder: 1px solid gray;\n\n}\n.Arthor:hover {\n    box-shadow: 4px 4px 0px rgba(200,200,200,0.6);\n}\n.Arthor-showFullBio {\n\tmargin-top: 15px;\n\tbackground: #87B825;\n\tcolor: white;\n\tdisplay: inline-block;\n\tpadding: 4px 10px;\n\tcursor: pointer;\n\tdisplay: none;\n}\n.Arthor-showFullBio:hover {\n\tbox-shadow: 4px 4px 8px rgba(0,0,0,0.12), -4px -4px 8px rgba(0,0,0,0.12);;\n}", ""]);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Article/Article.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Article/Article.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "/** @define Article; use strict */\n.Article {\n  background: white;\n  width: 100%;\n  margin: 70px auto 0px;\n\n  position: relative;\n  overflow: hidden;\n}\n.Article-content a, .Article-content a:visited {\n  border: none;\n  color: rgb(135,184,37);\n}\n.Article-content img {\n  width: 100%;\n  height: auto;\n}\n@media screen and (min-width: 600px){\n  .Article-content img {\n    width: auto;\n    height: auto;\n    max-width: 600px;\n  }\n}\n.Article-authorBackground {\n  /*background: rgb(230,230,230);*/\n  padding: 10px;\n}\n.Article-author {\n  padding-bottom: 30px;\n\n}\n.Article-cover {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n  position: relative;\n}\n.Article-coverImg {\n  height: 150px;\n}\n.Article-coverCopyright a {\n  color: #e9e9e9;\n  border: none;\n  font-size: 12px;\n}\n.Article-coverCopyright {\n  color: #e9e9e9;\n  position: absolute;\n  bottom: 4px;\n  right: 10px;\n  cursor: pointer;\n  border: none;\n  font-size: 12px;\n}\nh1.Article-title {\n  border-left: none;\n  padding-top: 30px;\n  padding-bottom: 40px;\n  padding-left: 0;\n}\n@media screen and (min-width: 400px) {\n    h1.Article-title {\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n}\n@media screen and (min-width: 400px) and (max-width: 1299px) {\n    .Article-content,.Article-author{\n\t\t    max-width: 600px;\n        margin: 0 auto;\n    }\n    .Article-cover {\n        width: 100%;\n        height: 300px;\n    }\n    .Article-coverImg {\n      height: 300px;\n    }\n}\n@media screen and (min-width: 1300px) {\n    .Article-content,.Article-author{\n\t\t    max-width: 600px;\n        margin: 0 auto;\n    }\n    .Article-cover {\n        width: 100%;\n        height: 300px;\n    }\n    .Article-coverImg {\n      width: 100%;\n      height: auto;\n    }\n}\n.Article-content {\n  background: rgba(255,255,255,0.8);\n  position: relative;\n  padding: 8px;\n}\n\n@media screen and (max-width: 400px){\n  .Article-content h1:first-child {\n      margin: 0;\n  }\n}\n.Article-author {\n  //background: #FAFAFA;\n  line-height: 1.4;\n  font-family: 'Noto Sans', sans-serif;\n\n}\n.Article-authorHeader {\n  min-height: 0px;\n}\n.Article-avatar {\n  cursor: pointer;\n\tfloat: left;\n  margin: 20px 0px 0px 20px;\n  background: white;\n  //border: 3px solid rgb(140,140,140);\n  //box-shadow: 3px 3px 0px rgba(200,200,200,0.4);\n  border: 1px solid rgb(100,100,100);\n  border-radius: 50%;\n  width: 60px;\n}\n.Article-avatar:hover {\n  box-shadow: 3px 3px 0px rgba(200,200,200,0.7);\n}\n.Article-info {\n\toverflow:hidden;  _overflow:visible;  zoom:1;\n\tpadding-left:10px;\n  padding-top: 24px;\n\n}\na.Article-name {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 800;\n\n  display: inline-block;\n  border: none;\n}\na.Article-name:hover {\n  text-decoration: underline;\n}\ndiv.Article-date {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 200;\n  margin: 0 6px;\n}\n.Article-cfpLink {\n  border: none;\n  text-decoration: none;\n  display: block;\n  margin-top: 10px;\n}\n.Article-cfpImg {\n  width: calc( 100% - 10px );\n  padding: 5px;\n\n}\n\n.Article-footer {\n  text-align: center;\n  background: rgb(230,230,230);\n  min-height: 150px;\n\n}\n", ""]);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Author/Author.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Author/Author.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Author {\n\tline-height: 1.6;\n\tmargin-bottom: 20px;\n\tbox-shadow: 4px 4px 0px rgba(200,200,200,0.4);\n\tpadding: 18px 18px 0 18px;\n\tbackground: white;\n\tcursor: pointer;\n\tborder: 1px solid gray;\n\tmargin: 0 5px;\n\n}\n.Author p{\n\tline-height: 1.4;\n\tfont-size: 16px;\n\tclear: left;\n\n}\n.Author img {\n\tmax-width: 100%;\n}\n.Author:hover {\n    box-shadow: 4px 4px 0px rgba(200,200,200,0.6);\n}\n.Author-gotoBio {\n\tmargin-top: 5px;\n\tbackground: #87B825;\n\tcolor: white;\n\tdisplay: inline-block;\n\tpadding: 4px 10px;\n\tcursor: pointer;\n\tfont-size: 14px;\n\n}\n.Author-gotoBio:hover {\n\t//box-shadow: 4px 4px 8px rgba(0,0,0,0.12), -4px -4px 8px rgba(0,0,0,0.12);\n}\n/* =================================================== */\n\n.Author-widget {\n\ttext-align: center;\n\tbackground: rgb(240,240,240);\n\tpadding: 4px 1px;\n\tfont-size: 14px;\n}\n.Author-widgetLink {\n\tdisplay: inline-block;\n\tborder: none;\n\tcolor: rgb(50,50,50);\n\tmargin: 0 1px;\n}\n.Author-widgetLink:hover {\n\tcolor: #87B825;\n}\n@media screen and (min-width: 400px){\n\t.Author-widget {\n\t\tbackground: rgba(250,250,250,0.8);\n\t\tbox-shadow: 0px 1px 0px rgba(0,0,0,0.12);\n\t    z-index: 10;\n\t\tfont-size: 16px;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\tpadding-top: 5px;\n    }\n    .Author-fixedWidget {\n    \tbackground: rgba(255,255,255,0.95);\n    \tposition: fixed;\n\t\ttop: 0;\n\t\tz-index: 100;\n    }\n\n}\n.Author-widgetAvatar {\n\twidth: 40px;\n\tborder-radius: 50%;\n}\n.Author-widgetInfo {\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tmargin: 0 6px;\n    padding-top: 4px;\n}\n\n/* ====== 學科分類 ====== */\n.Author-tagsSection {\n\tdisplay: none;\n}\n@media screen and (min-width: 400px){\n\t.Author-tagsSection {\n\t\tdisplay: inline-block;\n\t}\n}\n.Author-tags {\n\tfont-size: 14px;\n}\n.Author-tagLink {\n\tfont-size: 14px;\n\tcolor: rgb(80,80,80);\n}\n.Author-tagLink:hover {\n\tcolor: black;\n}\n\n\n\n/* ==================================== */\n.Author--pageBio {\n\twidth: 100%;\n\tpadding-top: 50px;\n}\n.Author--pageContent{\n\tmargin: 0 auto;\n\tposition: relative;\n}\n.Author-pageTop {\n\ttext-align: center;\n}\n.Author-nameTitle {\n\tmargin-top: 10px;\n\tfont-size: 40px;\n\tfont-weight: 800;\n\ttext-align: center;\n}\n.Author-pageAvatar {\n\twidth: 120px;\n\theight: 120px;\n\tborder-radius: 50%;\n\tbox-shadow: 1px 1px 0 0 rgba(0,0,0,0.12),-1px 1px 0 0 rgba(0,0,0,0.12);\n    border: 3px solid white;\n}\n.Author-Tabs {\n\tmargin: 0 5px;\n}\n\n.Author--pageMain{\n\twidth: 100%;\n\tborder-top: 1px dotted rgb(220,220,220);\n\tbackground: rgb(250,250,250);\n\tpadding-top: 20px;\n\tpadding-bottom: 100px;\n}\n.Author-bio {\n\tline-height: 1.6;\n\t//box-shadow: 4px 4px 0px rgba(200,200,200,0.4);\n\tpadding: 0 10px;\n\tbackground: white;\n\tcursor: pointer;\n\tmargin: 0 5px 50px 5px;\n\tfont-size: 16px;\n}\n.Author-bio * {\n\tfont-size: 16px;\n}\n.Author-bio a, .Author-bio a:visited {\n\tfont-size: 16px;\n\tcolor: rgb(135,184,37);\n\tborder: none;\n}\n\n@media all and (min-width: 600px){\n\t.Author--pageBio {\n\t\tpadding-top: 100px;\n\t}\n\t.Author--pageMain {\n\t\tpadding: 30px;\n\t}\n\t.Author--pageContent {\n\t\tmax-width: 600px;\n\t}\n\n}\n.Author-bio p{\n    font-size: 16px;\n    line-height: 1.4;\n}\n.Author-showFullBio {\n\tbackground: rgb(220,220,220);\n\tpadding: 4px 10px;\n\tcolor: rgb(100,100,100);\n\tdisplay: inline-block;\n\tmargin: 0;\n\ttext-align: center;\n}\n.Author-articleTitleWrapper {\n\tposition: absolute;\n    top: -32px;\n    left: 50%;\n}\n.Author-articleTitle {\n\tposition: relative;\n    left: -50%;\n    display: inline-block;\n    background: white;\n    border: 1px solid rgb(220,220,220);\n    padding: 2px 20px;\n    color: rgb(100,100,100);\n\n}\n@media all and (min-width: 600px){\n\t.Author-articleTitleWrapper {\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tmargin-left: 10px;\n\t\tdisplay: block;\n\n    }\n    .Author-articleTitle {\n    \tposition: relative;\n\n    }\n\n}\n.Author-article {\n    line-height: 1.6;\n\tmargin-bottom: 20px;\n\t//box-shadow: 4px 4px 0px rgba(200,200,200,0.4);\n\t//background: white;\n\t//border: 1px solid gray;\n\tmargin: 0 5px;\n\tmax-width: 600px;\n}\n.Author-articleItem {\n\tmargin: 1px;\n\tpadding: 12px;\n\tcursor: pointer;\n\tcolor: rgb(80,80,80);\n\tdisplay: block;\n\tborder:none;\n\tline-height: 1.4;\n\tfont-size: 16px;\n}\n.Author-articleItem:hover {\n\tcolor: black;\n\tbackground: rgb(240,240,240);\n}\n.Author-articleItemDate {\n    display: inline-block;\n    margin-right: 14px;\n    float: left;\n}\n.Author-articleItemTitle {\n\toverflow: hidden;  _overflow:visible;  zoom:1;\n}\n", ""]);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Columns/Columns.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Columns/Columns.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Columns {\n\tdisplay: inline-block;\n\toverflow:hidden;  _overflow:visible;  zoom:1;\n\tbackground: #FAFAFA;\n\twidth: 100%;\n\n\t\n\n}\n.Column {\n\tbackground: white;\n\t//border: 1px solid #DABDA8;\n\tborder: 1px solid #FAFAFA;\n\tbox-shadow: 4px 4px 0 0 rgba(0,0,0,0.12);\n\tmargin: 5px;\n\tcursor: pointer;\n\tdisplay: block;\n\t\n\tvertical-align: top;\n\tpadding: 8px 8px 8px 16px;\n\tline-height: 1.6;\n\n\n\toverflow: hidden;\n\n\n}\n@media screen and (min-width: 600px){\n    .Columns {\n    \tflex: 2;\n    \theight: 100vh;\n    \toverflow: scroll;\n    \tpadding: 0 10px;\n    }\n    .Column {\n    \twidth: 250px;\n    \tmargin: 10px 5px;\n    \theight: 202px;\n    \tdisplay: inline-block;\n    }\n}\n.Column:hover {\n\tbox-shadow: 4px 4px 0 0 rgba(0,0,0,0.24);\n}\n.Column-header {\n\n}\n.Column-name {\n   font-size: 20px;\n   font-weight: 800;\n   color: rgb(50,50,50);\n   display: inline-block;\n\n}\n.Column-articleCount {\n\tfont-size: 12px;\n\tfont-weight: 800;\n\t//background: rgb(135,184,37);\n\t//color: white;\n\n\tbackground: rgb(230,230,230);\n\tcolor: rgb(53,55,54);\n\n\tdisplay: inline-block;\n\tborder-radius: 50%;\n\n\tpadding-top: 4px;\n\twidth: 24px;\n\theight: 24px;\n\ttext-align: center;\n\tvertical-align: top;\n\tmargin: 3px 4px 0px 4px;\n\n}\n.Column:hover .Column-name {\n\t//color: #87B825;\n\tcolor: black;\n}\n", ""]);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Comments/Comments.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Comments/Comments.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Comments {\n\tbackground: rgb(250,250,250);\n\tpadding: 40px 8px;\n\n}\n@media screen and (min-width: 400px){\n    .Comments-content {\n\t\tmax-width: 600px;\n        margin: 0 auto;\n    }\n}\n.Comments-header {\n   margin: 30px 0px 0px 0px;\n   border-bottom: 1px solid rgb(120,120,120);\n   padding-left: 10px;\n   padding-bottom: 10px;\n}\n.Comments-title {\n\t/*padding: 4px 10px;\n    border-left: 5px solid;*/\n    font-size: 40px;\n    font-weight: 800;\n    display: inline-block;\n}\n.Comments-goSeeAll,\n.Comments-editorsPick {\n\tfont-size: 14px;\n\tdisplay: inline-block;\n\tmargin: 0 10px;\n    cursor: pointer;\n    border: none;\n    padding-bottom: 2px;\n    color: rgb(50,50,50);\n    line-height: 1;\n\n}\n.Comments-editorsPick:hover,\n.Comments-goSeeAll:hover {\n\tborder-bottom: 1px solid rgb(100,100,100);\n}\n.Comments-hideTab {\n  display: none;\n}\n.Comments-noPost {\n\tpadding: 10px;\n}\n.Comments-post {\n\tborder-bottom: 1px solid rgb(160,160,160);\n\tpadding-bottom: 10px;\n\n\tposition: relative;\n\tmin-height: 50px;\n\toverflow: hidden;\n\n\tmargin: 0 auto;\n\tmargin-bottom: 10px;\n\n\t//background: white;\n\t//box-shadow: 2px 2px 3px rgba(0,0,0,.12);\n\n}\n.Comments-post:hover {\n\t//box-shadow: 2px 2px 4px rgba(0,0,0,.24);\n}\n.Comments-post.is-hide {\n\theight: 0px;\n\twidth: 0px;\n\tmin-height: 0px;\n\tpadding: 0px;\n\toverflow: hidden;\n\tmargin: 0px;\n\tborder: none;\n}\n.Comments-main {\n\toverflow:hidden;  _overflow:visible;  zoom:1;\n\tpadding: 10px 10px 10px 10px;\n}\n@media all and (min-width: 400px){\n\t.Comments-main {\n\t   //padding: 10px 30px 0px 30px;\n    }\n}\n.Comments-main.is-folded {\n\tmax-height: 190px;\n}\n.Comments-expandButton {\n\tpadding: 10px 20px 10px 12px;\n    width: 100%;\n    /*position: absolute;\n    bottom: 0px;\n    right: 0px;*/\n    cursor: pointer;\n    background: rgba(240,240,240,0.9);\n    color: rgb(160,160,160);\n    font-weight: 800;\n    font-family: 'Georgia';\n}\n.Comments-expandButton:hover {\n\tcolor: #87B825;\n\t//color: black;\n}\n\n.Comments-post p {\n\tline-height: 1.6;\n\tfont-size: 16px;\n}\n.Comments-post a, .Comments-post a:visited {\n\tcolor: rgb(135,184,37);\n\tfont-size: 16px;\n\ttext-decoration: none;\n\tborder: none;\n}\n.Comments-post ul, .Comments-post ol {\n\tpadding-left: 26px;\n\tline-height: 1.2;\n\tfont-size: 16px;\n\n}\n.Comments-post li {\n\tmargin: 10px;\n\tfont-size: 16px;\n}\n.Comments-index {\n    //font-family: 'Helvetica','Arial','sans-serif';\n    //display: none;\n    font-size: 10px;\n}\n.Comments-img {\n\twidth: 45px;\n\tborder-radius: 50%;\n\tdisplay: none;\n}\n.Comments-left {\n\tfloat: left;\n\t//width: 60px;\n\tpadding-top: 10px;\n\ttext-align: center;\n}\n\n.Comments-author {\n\tline-height: 1.4;\n    font-weight: 800;\n    color: rgb(80,80,80);\n    font-size: 18px;\n    margin-top: 10px;\n    display: inline-block;\n}\n.Comments-date {\n\tline-height: 1.4;\n\tfont-size: 14px;\n\tcolor: rgb(80,80,80);\n\tdisplay: inline-block;\n}\n.Comments-footer {\n\ttext-align: center;\n\tmargin-top: 20px;\n}\n.Comments-button {\n\tborder: 1px solid rgb(200,200,200);\n    border-radius: 20px;\n    display: inline-block;\n    padding: 9px 20px;\n    cursor: pointer;\n    margin-top: 10px;\n    color: rgb(100,100,100);\n    margin: 5px;\n}\n.Comments-button:hover {\n\tcolor: #87B825;\n    border-color: #87B825;\n}\na.Comments-button--hightlight {\n\tborder: 1px solid rgb(100,100,100);\n    color: rgb(100,100,100);\n    padding: 3px 20px;\n    border-radius: 20px;\n    display: inline-block;\n    cursor: pointer;\n    margin-top: 10px;\n    margin: 5px;\n    font-size: 16px;\n\n}\na.Comments-button--hightlight:hover {\n  color: black;\n  border-color: black;\n\n}\n/* comment 中引用 */\n/*aside .title, aside blockquote {\n\tdisplay: none;\n}\n.Comments-main.is-expanded aside .title, .Comments-main.is-expanded aside blockquote {\n\tdisplay: block;\n}*/\naside {\n\tdisplay: block;\n\tmargin-top: 10px;\n    //border-left: 4px solid rgb(220,220,220);\n\t//background: rgba(200,200,200,1);\n\tpadding: 1px 5px;\n\tfont-family: 'Georgia';\n\tposition: relative;\n\tcolor: rgb(100,100,100);\n}\naside blockquote {\n    font-family: sans-serif;\n    //font-family: 'Georgia';\n    //quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n    quotes: \"\\201C\" \"\\201D\" \"\\201C\" \"\\201D\";\n    margin: 0px;\n    padding: 0px;\n}\n/*\nblockquote {\n   //border: 1px solid rgb(220,220,220);\n   //border-left: 10px solid rgba(0,0,0,0.12);\n   padding: 0px 10px;\n   //font-style: italic;\n   font-weight: 700;\n   font-size: 16px;\n   color: rgb(70,70,70);\n}*/\naside blockquote > * {\n\tcolor: rgb(100,100,100);\n}\n\n.Comments-main p {\n\tmargin: 8px;\n}\naside blockquote > p {\n\tline-height: 1.2;\n}\n@media all and (min-width: 400px){\n\taside blockquote {\n\t\tpadding: 0 22px;\n\t}\n}\naside blockquote:before {\n    content: open-quote;\n    font-size: 30px;\n    line-height: 0;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 14px;\n    left: -14px;\n    color: #87B825;\n}\n.Comments-post.is-folded {\n\tposition: relative;\n}\n.Comments-post.is-folded blockquote {\n   max-height: 35px;\n   overflow-y: hidden;\n   display: inline-block;\n}\n.Comments-post.is-folded blockquote:after {\n  content: '...';\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  color: rgb(100,100,100);\n}\n/*aside blockquote:after {\n\tcontent: close-quote;\n\tcolor: #ccc;\n\tfont-size: 40px;\n}*/\naside img {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 0px;\n\tdisplay: none;\n}\n.Comments-main img {\n\tdisplay: none;\n}\naside .title {\n\tpadding-left: 24px;\n}\n", ""]);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/List/List.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/List/List.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".List {\n\t//background: rgb(250,250,250);\n\tpadding-bottom: 90px;\n\tposition: relative;\n\n}\n.List-article {\n\tbackground: rgb(250,250,250);\n}\n\n\n/* NEXT */\n.List-nextItem {\n\tline-height: 1.4;\n\tfont-size: 14px;\n\tmargin: 10px 0 4px 0;\n}\n.List-nextItemTitle {\n\tbackground: rgb(200,200,200);\n\tdisplay: inline-block;\n\tpadding: 6px 14px;\n\tcolor: white;\n\tmargin: 10px 0;\n}\n.List-nextPost {\n\tcursor: pointer;\n}\n.List-nextPost:hover, .List-nextTitle:hover {\n\tcolor: #87B825;\n}\n.List-nextTitle {\n\tfont-weight: 700;\n}\n.List-nextPreview {\n\tfont-size: 16px;\n}\n.List-nextLink {\n\tdisplay: inline-block;\n\tfont-size: 16px;\n\tcolor: rgb(100,100,100);\n\tborder: none;\n\ttext-decoration: underline;\n}\n\n/* LIST */\n.List-content {\n\tpadding: 10px 5px 0px 5px;\n}\n@media screen and (min-width: 400px){\n    .List-content {\n\t\tmax-width: 600px;\n        margin: 0 auto;\n\n    }\n    .List-indexContent {\n\t\tmax-width: 600px;\n\n    }\n}\n.List-title {\n\tpadding: 0px 12px;\n\tfont-weight: 700;\n\t//border-bottom: 1px solid rgb(120,120,120);\n}\n@media all and (min-width: 400px){\n\t.List-title {\n\t\tpadding: 0px 5px 10px 15px;\n    }\n}\n.List-articleItem {\n\tmargin: 1px;\n\tpadding: 12px 12px;\n\tcursor: pointer;\n\tcolor: rgb(80,80,80);\n\tdisplay: block;\n\tborder:none;\n\tline-height: 1.4;\n\tfont-size: 16px;\n\n}\n.List-articleItem:hover, .List-indexItem:hover {\n\tcolor: black;\n\tbackground: rgb(240,240,240);\n}\n.List-articleItemColumn {\n   display: inline-block;\n   background: rgb(220,220,220);\n   margin: 5px 0;\n   color: #a0a0a0;\n}\n.List-articleItemDate {\n   display: inline-block;\n   background: rgb(220,220,220);\n   margin: 5px 0;\n   color: #a0a0a0;\n}\n@media all and (min-width: 400px){\n\t.List-articleItemColumn {\n\t   display: inline-block;\n       float: left;\n       background: none;\n       margin: 0 14px 0 0;\n       line-height: 1.6em;\n    }\n\t.List-articleItemDate {\n\t   display: inline-block;\n       float: left;\n       background: none;\n       margin: 0 14px 0 0;\n       line-height: 1.6em;\n    }\n}\n.List-articleItemTitle {\n\toverflow: hidden;  _overflow:visible;  zoom:1;\n\n}\n\n/* ----------------- */\n.List-boldTitle {\n\tfont-weight: 800;\n}\n.List--index {\n\t-webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */\n    -moz-box-flex: 1;         /* OLD - Firefox 19- */\n    -webkit-flex: 1;          /* Chrome */\n    -ms-flex: 1;              /* IE 10 */\n\tflex: 1;\n\n\t-webkit-box-ordinal-group: 2;   /* OLD - iOS 6-, Safari 3.1-6 */\n    -moz-box-ordinal-group: 2;      /* OLD - Firefox 19- */\n    -ms-flex-order: 2;              /* TWEENER - IE 10 */\n    -webkit-order: 2;               /* NEW - Chrome */\n\torder: 2;\n}\n@media screen and (min-width: 600px) and (max-width: 999px){\n    .List--index {\n    \theight: auto;\n    \twidth: calc(100vw - 350px);/* 避免沒文章的時候，寬度不見 */\n\n    }\n}\n@media screen and (min-width: 1000px){\n    .List--index {\n    \theight: auto;\n    \tmargin-left: 340px;\n    \twidth: calc(100vw - 670px);/* 避免沒文章的時候，寬度不見 */\n\n    }\n    .List-indexContent {\n\t\tmax-width: 800px;\n\t\tmargin-top: 10px;\n\t\tmargin-left: 10px;\n\t}\n}\n\n.List-indexItem {\n\tmargin-bottom: 20px;\n\tpadding: 10px 12px;\n\tcursor: pointer;\n\tcolor: rgb(80,80,80);\n\tdisplay: block;\n\tborder:none;\n\tline-height: 1.4;\n\tfont-size: 16px;\n}\n.List-articleItemBrief {\n    clear: left;\n\tcolor: rgb(100,100,100);\n}\n\n/* ----------------- */\n.List-footer {\n\tmargin: 0 auto;\n\tmargin-top: 20px;\n\ttext-align: center;\n}\n.List-button {\n\tborder: 1px solid rgb(220,220,220);\n\tcolor: rgb(100,100,100);\n\tcursor: pointer;\n\tpadding: 8px 20px;\n\tdisplay: inline-block;\n\tborder-radius: 20px;\n\n}\n.List-button:hover {\n   border: 1px solid rgb(50,50,50);\n   color: black;\n}\n\n/* ----------------- */\n\n/* ----------------- */\n.List-filter {\n    line-height: 1.4;\n    padding: 10px;\n    border-bottom: 1px solid rgb(220,220,220);\n    //text-align: center;\n\n}\n\n.List-filter.is-fixed {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground: rgba(255,255,255,0.8);\n}\n.List-filterMeta {\n\tfont-size: 14px;\n}\n.List-filterTitle {\n\tmargin-top: 4px;\n\tfont-size: 18px;\n\tfont-weight: 800;\n}\n\n\n\n", ""]);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Social/Social.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Social/Social.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "/* MOBILE */\n.Social {\n\tposition: fixed;\n\tbottom: 0;\n\twidth: 100%;\n\theight: 50px;\n\tz-index: 10;\n\tbox-shadow: 0 -2px 8px rgba(0,0,0,0.12);\n}\n.Social-socialSets {\n\tdisplay: inline-block;\n\tvertical-align: top;\n\twidth: 100%;\n}\n.Social-social {\n\tbackground: #F1F1F1;\n\tdisplay: inline-block;\n\tborder-left: 3px solid rgb(230,230,230);\n\twidth: calc(50% - 3px);\n\theight: 50px;\n\ttext-align: center;\n\tcursor: pointer;\n\tpadding: 8px 0 0 0;\n\n}\n\n/* WEB */\n@media screen and (min-width: 400px){\n\t.Social {\n\t   position: relative;\n\t   margin: 0 auto;\n\t   width: 600px;\n\t   vertical-align: bottom;\n\t   height: 0px;\n    }\n    .Social-socialSets {\n       text-align: left;\n       position: absolute;\n       top: 25px;\n       left: 5px;\n       width: auto;\n    }\n    .Social-social {\n    \tdisplay: inline-block;\n    \twidth: auto;\n    \theight: auto;\n    \tpadding: 0 0 0 20px;\n    \tmargin-right: 20px;\n\t    background: none;\n\t    text-align: left;\n\t    color: rgb(50,50,50);\n    }\n\n}", ""]);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Tabs/Tabs.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Tabs/Tabs.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Tabs-tab {\n   display: inline-block;\n   margin-right: 10px;\n   padding: 15px 25px 5px 25px;\n   cursor: pointer;\n   color: rgb(100,100,100);\n}\n\n.Tabs-tab.is-active {\n   //border-bottom: 5px solid #87B825;\n   border-bottom: 5px solid rgb(53,55,54);\n}", ""]);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Tags/Tags.css", function() {
			var newContent = require("!!/home/pm5/blog.citizenedu.tw/node_modules/css-loader/index.js!/home/pm5/blog.citizenedu.tw/app/components/Tags/Tags.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".Tags {\n\t//background: #D36E6E;\n\tbackground: rgb(250,250,250);\n\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tpadding-left: 10px;\n\twidth: calc(100% - 15px);\n\tpadding-bottom: 80px;\n\n\tz-index: 2;\n}\n\n.Tags-title {\n\tborder-bottom: 1px solid rgb(220,220,220);\n\tpadding: 5px;\n\tmargin: 10px 0;\n\tcolor: rgb(120,120,120);\n}\na.Tags-Tag:visited {\n\tborder-bottom: 1px solid rgb(220,220,220);\n}\n.Tags-Tag {\n\tpadding: 5px 10px;\n\tcursor: pointer;\n  border: 1px solid rgb(220,220,220);\n\tdisplay: inline-block;\n\tmargin: 4px;\n\tbackground: white;\n}\n.Tags-Tag:hover, .Tags-Tag.is-active {\n\t//border: 1px solid #D36E6E;\n\tborder: 1px solid rgba(135,184,37,1);\n\t//background: #D36E6E;\n\tbackground: rgba(135,184,37,1);\n\tcolor: white;\n}\n", ""]);

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ]);