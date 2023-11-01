/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/show-avatar/components/BlogsCheckBoxes.js":
/*!*******************************************************!*\
  !*** ./src/show-avatar/components/BlogsCheckBoxes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogsCheckBoxes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BlogsCheckBoxes({
  attributes
}) {
  const blogs = 'blogs' in attributes ? attributes.blogs : new Object();
  return wp.compose.withState({
    checked_obj: Object.assign(new Object(), role)
  })(({
    checked_obj,
    setState
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, blogs_list?.map(v => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: v.value
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    className: "check_items",
    label: v.label,
    checked: checked_obj[v.value],
    onChange: check => {
      check ? checked_obj[v.value] = true : delete checked_obj[v.value];
      setAttributes({
        blogs: checked_obj
      });
      setState({
        checked_obj
      });
    }
  })))));
}

/***/ }),

/***/ "./src/show-avatar/components/DisplayCheckBoxes.js":
/*!*********************************************************!*\
  !*** ./src/show-avatar/components/DisplayCheckBoxes.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DisplayCheckBoxes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DisplayCheckBoxes({
  attributes
}) {
  const display = 'display' in attributes ? attributes.display : new Object();
  return wp.compose.withState({
    checked_obj: Object.assign(new Object(), display)
  })(({
    checked_obj,
    setState
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, display_options?.map(v => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: v.value
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    className: "check_items",
    label: v.label,
    checked: checked_obj[v.value],
    onChange: check => {
      check ? checked_obj[v.value] = true : delete checked_obj[v.value];
      setAttributes({
        display: checked_obj
      });
      setState({
        checked_obj
      });
    }
  })))));
}

/***/ }),

/***/ "./src/show-avatar/components/RolesCheckBoxes.js":
/*!*******************************************************!*\
  !*** ./src/show-avatar/components/RolesCheckBoxes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RolesCheckBoxes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RolesCheckBoxes({
  attributes
}) {
  const role = 'role' in attributes ? attributes.role : new Object();
  return wp.compose.withState({
    checked_obj: Object.assign(new Object(), role)
  })(({
    checked_obj,
    setState
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, user_roles?.map(v => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: v.value
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    className: "check_items",
    label: v.label,
    checked: checked_obj[v.value],
    onChange: check => {
      check ? checked_obj[v.value] = true : delete checked_obj[v.value];
      setAttributes({
        role: checked_obj
      });
      setState({
        checked_obj
      });
    }
  })))));
}

/***/ }),

/***/ "./src/show-avatar/edit.js":
/*!*********************************!*\
  !*** ./src/show-avatar/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/show-avatar/block.json");
/* harmony import */ var _components_RolesCheckBoxes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RolesCheckBoxes */ "./src/show-avatar/components/RolesCheckBoxes.js");
/* harmony import */ var _components_DisplayCheckBoxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/DisplayCheckBoxes */ "./src/show-avatar/components/DisplayCheckBoxes.js");
/* harmony import */ var _components_BlogsCheckBoxes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BlogsCheckBoxes */ "./src/show-avatar/components/BlogsCheckBoxes.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/show-avatar/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */









/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  let data = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return wp.apiFetch({
      path: '/author_avatar/blocks/v1/data'
    }).then(data => {
      return {
        user_options: data.users,
        display_options: data.display_options,
        user_roles: data.roles,
        user_links: data.links,
        sort_list: data.sort_avatars_by,
        blogs_list: data.blogs,
        DonateButton: data.donate
      };
    });
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const {
    user_id,
    link,
    sort_avatars_by,
    sort_order,
    size,
    display,
    limit,
    page_size,
    min_post_count,
    hidden_users,
    whitelist_users,
    user_options = data.user_options,
    display_options = data.display_options,
    user_roles = data.user_roles,
    user_links = data.user_links,
    sort_list = data.sort_list,
    blogs_list = data.blogs_list,
    DonateButton = data.DonateButton
  } = attributes;
  function onChangeUser(content) {
    setAttributes({
      user_id: content
    });
  }
  function onChangelink(content) {
    setAttributes({
      link: content
    });
  }
  function onChangeSortBy(content) {
    setAttributes({
      sort_avatars_by: content
    });
  }
  function onChangeSortOrder(content) {
    setAttributes({
      sort_order: content
    });
  }
  function onChangeSize(content) {
    setAttributes({
      size: content
    });
  }
  function onChangeLimit(content) {
    setAttributes({
      limit: content
    });
  }
  function onChangePageSize(content) {
    setAttributes({
      page_size: content
    });
  }
  function onChangeMinPosts(content) {
    setAttributes({
      min_post_count: content
    });
  }
  function onChangeHiddenUsers(content) {
    props.setAttributes({
      hidden_users: content
    });
  }
  function onChangeWhitelistUsers(content) {
    props.setAttributes({
      whitelist_users: content
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: '000'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "author-avatar-components-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('User or Email address/user_id or Roles', 'author-avatar'),
    name: "user_id",
    value: user_id,
    options: user_options,
    onChange: onChangeUser
  }), -1 == user_id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Custom email / id",
    type: 'text',
    value: email,
    onChange: onChangeEmail
  }), 0 == user_id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Which Roles to display:', 'author-avatar')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RolesCheckBoxes__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info to show with avatar:', 'author-avatar')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DisplayCheckBoxes__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link avatars to', 'author-avatar'),
    value: link,
    options: user_links,
    onChange: onChangelink
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sort by', 'author-avatar'),
    value: sort_avatars_by,
    options: sort_list,
    onChange: onChangeSortBy
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sort order', 'author-avatar'),
    value: sort_order,
    options: [{
      label: 'Ascending',
      value: 'asc'
    }, {
      label: 'Descending',
      value: 'desc'
    }],
    onChange: onChangeSortOrder
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Avatar Size",
    value: size,
    onChange: onChangeSize,
    min: 10,
    max: 500,
    initialPosition: 50,
    beforeIcon: 'businessman'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: 'donate',
    href: 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MZTZ5S8MGF75C&lc=CA&item_name=Author%20Avatars%20Plugin%20Support&item_number=authoravatars&currency_code=CAD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted',
    target: '_donante'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: 'Donate to support Plugin',
    src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('More options in Adavanced:', 'author-avatar'))))), ",", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls, {
    key: '111'
  }, 0 == user_id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max. avatars shown:', 'author-avatar'),
    type: 'number',
    value: limit,
    name: 'limit',
    onChange: onChangeLimit
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max. avatars per page:', 'author-avatar'),
    type: 'number',
    value: page_size,
    name: 'limit',
    onChange: onChangePageSize
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Required number of posts:', 'author-avatar'),
    type: 'number',
    value: min_post_count,
    name: 'limit',
    onChange: onChangeMinPosts
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hidden users', 'author-avatar'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(Comma separate list of user login ids. Hidden user are removed before the white list)', 'author-avatar'),
    value: hidden_users,
    onChange: onChangeHiddenUsers
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White List of users:', 'author-avatar'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(0nly show these users, Comma separate list of user login ids)', 'author-avatar'),
    value: whitelist_users,
    onChange: onChangeWhitelistUsers
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: '222'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: _block_json__WEBPACK_IMPORTED_MODULE_6__.name,
    attributes: attributes
  })));
}

/***/ }),

/***/ "./src/show-avatar/index.js":
/*!**********************************!*\
  !*** ./src/show-avatar/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/show-avatar/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/show-avatar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/show-avatar/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/show-avatar/editor.scss":
/*!*************************************!*\
  !*** ./src/show-avatar/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/show-avatar/style.scss":
/*!************************************!*\
  !*** ./src/show-avatar/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/show-avatar/block.json":
/*!************************************!*\
  !*** ./src/show-avatar/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"author-avatars/show-avatar","version":"0.1.0","title":"Author Avatars Lists","category":"common","keywords":["avatar","Author Avatars","profile pictures"],"icon":"businessman","description":"Display a list of user avatars","example":{"attributes":{"preview":true}},"supports":{"html":false,"color":{"background":true,"text":true},"align":true,"layout":true,"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"attributes":{"size":{"type":"number","default":50},"email":{"type":"string"},"alignment":{"type":"string","default":"left"},"Options":{"type":"array"},"link":{"type":"string"},"display":{"type":"boolean"},"role":{"type":"boolean"},"sort_avatars_by":{"type":"string","default":"display_name"},"sort_order":{"type":"string"},"bio_length":{"type":"number","default":50},"user_id":{"type":"number","default":0},"limit":{"type":"number"},"page_size":{"type":"number"},"min_post_count":{"type":"number"},"hidden_users":{"type":"string"},"whitelist_users":{"type":"string"},"background_color":{"type":"string","default":"#fff"},"font_color":{"type":"string","default":"#000"},"border_radius":{"type":"number","default":"0"},"border_color":{"type":"string","default":"#000"},"border_size":{"type":"number","default":"0"},"block_style":{"type":"string","selector":"div","source":"attribute","attribute":"style"}},"textdomain":"author-avatars","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"show-avatar/index": 0,
/******/ 			"show-avatar/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkavatar_list_block"] = self["webpackChunkavatar_list_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["show-avatar/style-index"], function() { return __webpack_require__("./src/show-avatar/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map