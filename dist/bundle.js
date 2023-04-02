/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || (0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNode);


/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleX": () => (/* binding */ scaleX),
/* harmony export */   "scaleY": () => (/* binding */ scaleY),
/* harmony export */   "scaleZ": () => (/* binding */ scaleZ),
/* harmony export */   "skew": () => (/* binding */ skew),
/* harmony export */   "skewX": () => (/* binding */ skewX),
/* harmony export */   "skewY": () => (/* binding */ skewY),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "translateX": () => (/* binding */ translateX),
/* harmony export */   "translateY": () => (/* binding */ translateY),
/* harmony export */   "translateZ": () => (/* binding */ translateZ)
/* harmony export */ });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateY)(distance));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateX)(distance));
		}
	}

	if (config.rotate.x) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateX)(config.rotate.x)); }
	if (config.rotate.y) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateY)(config.rotate.y)); }
	if (config.rotate.z) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateZ)(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(0.0002));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: (0,rematrix__WEBPACK_IMPORTED_MODULE_1__.parse)(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__.multiply);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */
function applyStyle (el, declaration) {
	declaration.split(';').forEach(function (pair) {
		var ref = pair.split(':');
		var property = ref[0];
		var value = ref.slice(1);
		if (property && value) {
			el.style[property.trim()] = value.join(':');
		}
	});
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				applyStyle(element.node, element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		applyStyle(element.node, element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				applyStyle(element.node, element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	(0,miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.9";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReveal);


/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if ((0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if ((0,is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tealight);


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const scrollreveal_1 = __importDefault(__webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js"));
//toggle menu icon
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
// select nav button as per scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach((section) => {
        // console.log("sectyio", section.offsetHeight, section.offsetTop);
        //how far away from top
        const top = window.scrollY;
        //element how far away from top
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                var _a;
                link.classList.remove("active");
                (_a = document
                    .querySelector("header nav a[href*=" + id + "]")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            });
        }
    });
    // sticky navbar
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    //remove toggleicn and navbar when click navbar link/scroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};
//scroll reveal
document.addEventListener("DOMContentLoaded", () => {
    (0, scrollreveal_1.default)({
        reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
    });
    (0, scrollreveal_1.default)().reveal(".home-content, .heading", { origin: "top" });
    (0, scrollreveal_1.default)().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    (0, scrollreveal_1.default)().reveal(".home-content h1, .about-img", { origin: "left" });
    (0, scrollreveal_1.default)().reveal(".home-content p, .about-content", { origin: "right" });
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG9EQUFDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLG9EQUFDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUEsQ0FBQyxtREFBRztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMsQ0FBQzs7Ozs7OztVQ2hFSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLW11bHRpcGFnZS8uL25vZGVfbW9kdWxlcy9pcy1kb20tbm9kZS1saXN0L2Rpc3QvaXMtZG9tLW5vZGUtbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly9qcy1tdWx0aXBhZ2UvLi9ub2RlX21vZHVsZXMvaXMtZG9tLW5vZGUvZGlzdC9pcy1kb20tbm9kZS5lcy5qcyIsIndlYnBhY2s6Ly9qcy1tdWx0aXBhZ2UvLi9ub2RlX21vZHVsZXMvbWluaXJhZi9kaXN0L21pbmlyYWYuZXMuanMiLCJ3ZWJwYWNrOi8vanMtbXVsdGlwYWdlLy4vbm9kZV9tb2R1bGVzL3JlbWF0cml4L2Rpc3QvcmVtYXRyaXguZXMuanMiLCJ3ZWJwYWNrOi8vanMtbXVsdGlwYWdlLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5lcy5qcyIsIndlYnBhY2s6Ly9qcy1tdWx0aXBhZ2UvLi9ub2RlX21vZHVsZXMvdGVhbGlnaHQvZGlzdC90ZWFsaWdodC5lcy5qcyIsIndlYnBhY2s6Ly9qcy1tdWx0aXBhZ2UvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2pzLW11bHRpcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1tdWx0aXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLW11bHRpcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLW11bHRpcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLW11bHRpcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2pzLW11bHRpcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vanMtbXVsdGlwYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGxpY2Vuc2UgaXMtZG9tLW5vZGUtbGlzdCB2MS4yLjFcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmltcG9ydCBpc0RvbU5vZGUgZnJvbSAnaXMtZG9tLW5vZGUnO1xuXG5mdW5jdGlvbiBpc0RvbU5vZGVMaXN0KHgpIHtcblx0dmFyIHByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpO1xuXHR2YXIgcmVnZXggPSAvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvO1xuXG5cdHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGVMaXN0ID09PSAnb2JqZWN0J1xuXHRcdD8geCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuXHRcdDogeCAhPT0gbnVsbCAmJlxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0dHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRyZWdleC50ZXN0KHByb3RvdHlwZVRvU3RyaW5nKSAmJlxuXHRcdFx0XHQoeC5sZW5ndGggPT09IDAgfHwgaXNEb21Ob2RlKHhbMF0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0RvbU5vZGVMaXN0O1xuIiwiLyohIEBsaWNlbnNlIGlzLWRvbS1ub2RlIHYxLjAuNFxuXG5cdENvcHlyaWdodCAyMDE4IEZpc3NzaW9uIExMQy5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFNPRlRXQVJFLlxuXG4qL1xuZnVuY3Rpb24gaXNEb21Ob2RlKHgpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCdcblx0XHQ/IHggaW5zdGFuY2VvZiB3aW5kb3cuTm9kZVxuXHRcdDogeCAhPT0gbnVsbCAmJlxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0dHlwZW9mIHgubm9kZVR5cGUgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdHR5cGVvZiB4Lm5vZGVOYW1lID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0RvbU5vZGU7XG4iLCIvKiEgQGxpY2Vuc2UgbWluaXJhZiB2MS4wLjBcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbnZhciBwb2x5ZmlsbCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBjbG9jayA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cdFx0aWYgKGN1cnJlbnRUaW1lIC0gY2xvY2sgPiAxNikge1xuXHRcdFx0Y2xvY2sgPSBjdXJyZW50VGltZTtcblx0XHRcdGNhbGxiYWNrKGN1cnJlbnRUaW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBwb2x5ZmlsbChjYWxsYmFjayk7IH0sIDApO1xuXHRcdH1cblx0fVxufSkoKTtcblxudmFyIGluZGV4ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0cG9seWZpbGw7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLyohIEBsaWNlbnNlIFJlbWF0cml4IHYwLjMuMFxuXG5cdENvcHlyaWdodCAyMDE4IEp1bGlhbiBMbG95ZC5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5cdGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblx0VEhFIFNPRlRXQVJFLlxuKi9cbi8qKlxuICogQG1vZHVsZSBSZW1hdHJpeFxuICovXG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gbWF0cmljZXMgaW4gdGhlIGJyb3dzZXIgY29tZSBpbiB0d28gZmxhdm9yczpcbiAqXG4gKiAgLSBgbWF0cml4YCB1c2luZyA2IHZhbHVlcyAoc2hvcnQpXG4gKiAgLSBgbWF0cml4M2RgIHVzaW5nIDE2IHZhbHVlcyAobG9uZylcbiAqXG4gKiBUaGlzIHV0aWxpdHkgZm9sbG93cyB0aGlzIFtjb252ZXJzaW9uIGd1aWRlXShodHRwczovL2dvby5nbC9FSmxVUTEpXG4gKiB0byBleHBhbmQgc2hvcnQgZm9ybSBtYXRyaWNlcyB0byB0aGVpciBlcXVpdmFsZW50IGxvbmcgZm9ybS5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gc291cmNlIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KHNvdXJjZSkge1xuXHRpZiAoc291cmNlLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFycmF5LicpXG5cdH1cblx0aWYgKHNvdXJjZS5sZW5ndGggPT09IDE2KSB7XG5cdFx0cmV0dXJuIHNvdXJjZVxuXHR9XG5cdGlmIChzb3VyY2UubGVuZ3RoID09PSA2KSB7XG5cdFx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdFx0bWF0cml4WzBdID0gc291cmNlWzBdO1xuXHRcdG1hdHJpeFsxXSA9IHNvdXJjZVsxXTtcblx0XHRtYXRyaXhbNF0gPSBzb3VyY2VbMl07XG5cdFx0bWF0cml4WzVdID0gc291cmNlWzNdO1xuXHRcdG1hdHJpeFsxMl0gPSBzb3VyY2VbNF07XG5cdFx0bWF0cml4WzEzXSA9IHNvdXJjZVs1XTtcblx0XHRyZXR1cm4gbWF0cml4XG5cdH1cblx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0V4cGVjdGVkIGFycmF5IHdpdGggZWl0aGVyIDYgb3IgMTYgdmFsdWVzLicpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCByZXByZXNlbnRpbmcgbm8gdHJhbnNmb3JtYXRpb24uIFRoZSBwcm9kdWN0IG9mIGFueSBtYXRyaXhcbiAqIG11bHRpcGxpZWQgYnkgdGhlIGlkZW50aXR5IG1hdHJpeCB3aWxsIGJlIHRoZSBvcmlnaW5hbCBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqIDEgPT09IDVgLCB3aGVyZSBgMWAgaXMgdGhlIGlkZW50aXR5LlxuICpcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSgpIHtcblx0dmFyIG1hdHJpeCA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0XHRpICUgNSA9PSAwID8gbWF0cml4LnB1c2goMSkgOiBtYXRyaXgucHVzaCgwKTtcblx0fVxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCBkZXNjcmliaW5nIHRoZSBpbnZlcnNlIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBzb3VyY2VcbiAqIG1hdHJpeC4gVGhlIHByb2R1Y3Qgb2YgYW55IG1hdHJpeCBtdWx0aXBsaWVkIGJ5IGl0cyBpbnZlcnNlIHdpbGwgYmUgdGhlXG4gKiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqICgxLzUpID09PSAxYCwgd2hlcmUgYDEvNWAgaXMgdGhlIGludmVyc2UuXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGludmVyc2Uoc291cmNlKSB7XG5cdHZhciBtID0gZm9ybWF0KHNvdXJjZSk7XG5cblx0dmFyIHMwID0gbVswXSAqIG1bNV0gLSBtWzRdICogbVsxXTtcblx0dmFyIHMxID0gbVswXSAqIG1bNl0gLSBtWzRdICogbVsyXTtcblx0dmFyIHMyID0gbVswXSAqIG1bN10gLSBtWzRdICogbVszXTtcblx0dmFyIHMzID0gbVsxXSAqIG1bNl0gLSBtWzVdICogbVsyXTtcblx0dmFyIHM0ID0gbVsxXSAqIG1bN10gLSBtWzVdICogbVszXTtcblx0dmFyIHM1ID0gbVsyXSAqIG1bN10gLSBtWzZdICogbVszXTtcblxuXHR2YXIgYzUgPSBtWzEwXSAqIG1bMTVdIC0gbVsxNF0gKiBtWzExXTtcblx0dmFyIGM0ID0gbVs5XSAqIG1bMTVdIC0gbVsxM10gKiBtWzExXTtcblx0dmFyIGMzID0gbVs5XSAqIG1bMTRdIC0gbVsxM10gKiBtWzEwXTtcblx0dmFyIGMyID0gbVs4XSAqIG1bMTVdIC0gbVsxMl0gKiBtWzExXTtcblx0dmFyIGMxID0gbVs4XSAqIG1bMTRdIC0gbVsxMl0gKiBtWzEwXTtcblx0dmFyIGMwID0gbVs4XSAqIG1bMTNdIC0gbVsxMl0gKiBtWzldO1xuXG5cdHZhciBkZXRlcm1pbmFudCA9IDEgLyAoczAgKiBjNSAtIHMxICogYzQgKyBzMiAqIGMzICsgczMgKiBjMiAtIHM0ICogYzEgKyBzNSAqIGMwKTtcblxuXHRpZiAoaXNOYU4oZGV0ZXJtaW5hbnQpIHx8IGRldGVybWluYW50ID09PSBJbmZpbml0eSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52ZXJzZSBkZXRlcm1pbmFudCBhdHRlbXB0ZWQgdG8gZGl2aWRlIGJ5IHplcm8uJylcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0KG1bNV0gKiBjNSAtIG1bNl0gKiBjNCArIG1bN10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMV0gKiBjNSArIG1bMl0gKiBjNCAtIG1bM10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQobVsxM10gKiBzNSAtIG1bMTRdICogczQgKyBtWzE1XSAqIHMzKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVs5XSAqIHM1ICsgbVsxMF0gKiBzNCAtIG1bMTFdICogczMpICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjNSArIG1bNl0gKiBjMiAtIG1bN10gKiBjMSkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGM1IC0gbVsyXSAqIGMyICsgbVszXSAqIGMxKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzNSArIG1bMTRdICogczIgLSBtWzE1XSAqIHMxKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczUgLSBtWzEwXSAqIHMyICsgbVsxMV0gKiBzMSkgKiBkZXRlcm1pbmFudCxcblxuXHRcdChtWzRdICogYzQgLSBtWzVdICogYzIgKyBtWzddICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzBdICogYzQgKyBtWzFdICogYzIgLSBtWzNdICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMTJdICogczQgLSBtWzEzXSAqIHMyICsgbVsxNV0gKiBzMCkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bOF0gKiBzNCArIG1bOV0gKiBzMiAtIG1bMTFdICogczApICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjMyArIG1bNV0gKiBjMSAtIG1bNl0gKiBjMCkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGMzIC0gbVsxXSAqIGMxICsgbVsyXSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzMyArIG1bMTNdICogczEgLSBtWzE0XSAqIHMwKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczMgLSBtWzldICogczEgKyBtWzEwXSAqIHMwKSAqIGRldGVybWluYW50XG5cdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBjb21iaW5lZCB0cmFuc2Zvcm1hdGlvbnNcbiAqIG9mIGJvdGggYXJndW1lbnRzLlxuICpcbiAqID4gKipOb3RlOioqIE9yZGVyIGlzIHZlcnkgaW1wb3J0YW50LiBGb3IgZXhhbXBsZSwgcm90YXRpbmcgNDXCsFxuICogYWxvbmcgdGhlIFotYXhpcywgZm9sbG93ZWQgYnkgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcy4uLiBpcyBub3QgdGhlIHNhbWUgYXMgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcywgZm9sbG93ZWQgYnkgcm90YXRpbmcgNDXCsCBhbG9uZyBvbiB0aGUgWi1heGlzLlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBtIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcGFyYW0gIHthcnJheX0geCAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG0sIHgpIHtcblx0dmFyIGZtID0gZm9ybWF0KG0pO1xuXHR2YXIgZnggPSBmb3JtYXQoeCk7XG5cdHZhciBwcm9kdWN0ID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHR2YXIgcm93ID0gW2ZtW2ldLCBmbVtpICsgNF0sIGZtW2kgKyA4XSwgZm1baSArIDEyXV07XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcblx0XHRcdHZhciBrID0gaiAqIDQ7XG5cdFx0XHR2YXIgY29sID0gW2Z4W2tdLCBmeFtrICsgMV0sIGZ4W2sgKyAyXSwgZnhbayArIDNdXTtcblx0XHRcdHZhciByZXN1bHQgPVxuXHRcdFx0XHRyb3dbMF0gKiBjb2xbMF0gKyByb3dbMV0gKiBjb2xbMV0gKyByb3dbMl0gKiBjb2xbMl0gKyByb3dbM10gKiBjb2xbM107XG5cblx0XHRcdHByb2R1Y3RbaSArIGtdID0gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcm9kdWN0XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gcmV0dXJuIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBDU1MgdHJhbnNmb3JtXG4gKiBtYXRyaXggcGFzc2VkIGluLCBidXQgd2lsbCByZXR1cm4gdGhlIGlkZW50aXR5IG1hdHJpeCBhcyBhXG4gKiBmYWxsYmFjay5cbiAqXG4gKiA+ICoqVGlwOioqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY29udmVydCBhIENTUyBtYXRyaXggKHJldHJpZXZlZCBhcyBhXG4gKiBgc3RyaW5nYCBmcm9tIGNvbXB1dGVkIHN0eWxlcykgdG8gaXRzIGVxdWl2YWxlbnQgYXJyYXkgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc291cmNlIC0gYG1hdHJpeGAgb3IgYG1hdHJpeDNkYCBDU1MgVHJhbnNmb3JtIHZhbHVlLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSkge1xuXHRpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL21hdHJpeCgzZCk/XFwoKFteKV0rKVxcKS8pO1xuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dmFyIHJhdyA9IG1hdGNoWzJdLnNwbGl0KCcsICcpLm1hcChwYXJzZUZsb2F0KTtcblx0XHRcdHJldHVybiBmb3JtYXQocmF3KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWRlbnRpdHkoKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWi1heGlzIHJvdGF0aW9uLlxuICpcbiAqID4gKipUaXA6KiogVGhpcyBpcyBqdXN0IGFuIGFsaWFzIGZvciBgUmVtYXRyaXgucm90YXRlWmAgZm9yIHBhcml0eSB3aXRoIENTU1xuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuXHRyZXR1cm4gcm90YXRlWihhbmdsZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGVYKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzVdID0gbWF0cml4WzEwXSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzZdID0gbWF0cml4WzldID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbOV0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkoYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBtYXRyaXhbMTBdID0gTWF0aC5jb3ModGhldGEpO1xuXHRtYXRyaXhbMl0gPSBtYXRyaXhbOF0gPSBNYXRoLnNpbih0aGV0YSk7XG5cdG1hdHJpeFsyXSAqPSAtMTtcblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgcm90YXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcm90YXRlWihhbmdsZSkge1xuXHR2YXIgdGhldGEgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFswXSA9IG1hdHJpeFs1XSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzFdID0gbWF0cml4WzRdID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbNF0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgMkQgc2NhbGluZy4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBpcyB1c2VkIGZvciBib3RoIFggYW5kIFktYXhpcyBzY2FsaW5nLCB1bmxlc3MgYW4gb3B0aW9uYWxcbiAqIHNlY29uZCBhcmd1bWVudCBpcyBwcm92aWRlZCB0byBleHBsaWNpdGx5IGRlZmluZSBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAgICAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEBwYXJhbSAge251bWJlcn0gW3NjYWxhclldIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKHNjYWxhciwgc2NhbGFyWSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBzY2FsYXI7XG5cdG1hdHJpeFs1XSA9IHR5cGVvZiBzY2FsYXJZID09PSAnbnVtYmVyJyA/IHNjYWxhclkgOiBzY2FsYXI7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2NhbGVYKHNjYWxhcikge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzBdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZVkoc2NhbGFyKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbNV0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyBzY2FsaW5nLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gc2NhbGFyIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlWihzY2FsYXIpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxMF0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHNoZWFyLiBUaGUgZmlyc3QgYXJndW1lbnRcbiAqIGRlZmluZXMgWC1heGlzIHNoZWFyaW5nLCBhbmQgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50XG4gKiBkZWZpbmVzIFktYXhpcyBzaGVhcmluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlWCAgIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2FuZ2xlWV0gLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXcoYW5nbGVYLCBhbmdsZVkpIHtcblx0dmFyIHRoZXRhWCA9IE1hdGguUEkgLyAxODAgKiBhbmdsZVg7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFs0XSA9IE1hdGgudGFuKHRoZXRhWCk7XG5cblx0aWYgKGFuZ2xlWSkge1xuXHRcdHZhciB0aGV0YVkgPSBNYXRoLlBJIC8gMTgwICogYW5nbGVZO1xuXHRcdG1hdHJpeFsxXSA9IE1hdGgudGFuKHRoZXRhWSk7XG5cdH1cblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBYLWF4aXMgc2hlYXIuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1goYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbNF0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHNoZWFyLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1koYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMV0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBDU1MgVHJhbnNmb3JtIHByb3BlcnR5IHZhbHVlIGVxdWl2YWxlbnQgdG8gdGhlIHNvdXJjZSBtYXRyaXguXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N0cmluZyhzb3VyY2UpIHtcblx0cmV0dXJuIChcIm1hdHJpeDNkKFwiICsgKGZvcm1hdChzb3VyY2UpLmpvaW4oJywgJykpICsgXCIpXCIpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyAyRCB0cmFuc2xhdGlvbi4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBkZWZpbmVzIFgtYXhpcyB0cmFuc2xhdGlvbiwgYW5kIGFuIG9wdGlvbmFsIHNlY29uZFxuICogYXJndW1lbnQgZGVmaW5lcyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZVggICAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2Rpc3RhbmNlWV0gLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKGRpc3RhbmNlWCwgZGlzdGFuY2VZKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTJdID0gZGlzdGFuY2VYO1xuXG5cdGlmIChkaXN0YW5jZVkpIHtcblx0XHRtYXRyaXhbMTNdID0gZGlzdGFuY2VZO1xuXHR9XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2UgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlWChkaXN0YW5jZSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEyXSA9IGRpc3RhbmNlO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZSAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGVZKGRpc3RhbmNlKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTNdID0gZGlzdGFuY2U7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyB0cmFuc2xhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZVooZGlzdGFuY2UpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxNF0gPSBkaXN0YW5jZTtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG5leHBvcnQgeyBmb3JtYXQsIGlkZW50aXR5LCBpbnZlcnNlLCBtdWx0aXBseSwgcGFyc2UsIHJvdGF0ZSwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHNrZXcsIHNrZXdYLCBza2V3WSwgdG9TdHJpbmcsIHRyYW5zbGF0ZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWiB9O1xuIiwiLyohIEBsaWNlbnNlIFNjcm9sbFJldmVhbCB2NC4wLjlcblxuXHRDb3B5cmlnaHQgMjAyMSBGaXNzc2lvbiBMTEMuXG5cblx0TGljZW5zZWQgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIDMuMCBmb3Jcblx0Y29tcGF0aWJsZSBvcGVuIHNvdXJjZSBwcm9qZWN0cyBhbmQgbm9uLWNvbW1lcmNpYWwgdXNlLlxuXG5cdEZvciBjb21tZXJjaWFsIHNpdGVzLCB0aGVtZXMsIHByb2plY3RzLCBhbmQgYXBwbGljYXRpb25zLFxuXHRrZWVwIHlvdXIgc291cmNlIGNvZGUgcHJpdmF0ZS9wcm9wcmlldGFyeSBieSBwdXJjaGFzaW5nXG5cdGEgY29tbWVyY2lhbCBsaWNlbnNlIGZyb20gaHR0cHM6Ly9zY3JvbGxyZXZlYWxqcy5vcmcvXG4qL1xuaW1wb3J0ICQgZnJvbSAndGVhbGlnaHQnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWCwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHBhcnNlLCBtdWx0aXBseSB9IGZyb20gJ3JlbWF0cml4JztcbmltcG9ydCByYWYgZnJvbSAnbWluaXJhZic7XG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZGVsYXk6IDAsXG5cdGRpc3RhbmNlOiAnMCcsXG5cdGR1cmF0aW9uOiA2MDAsXG5cdGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIDAsIDAsIDEpJyxcblx0aW50ZXJ2YWw6IDAsXG5cdG9wYWNpdHk6IDAsXG5cdG9yaWdpbjogJ2JvdHRvbScsXG5cdHJvdGF0ZToge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH0sXG5cdHNjYWxlOiAxLFxuXHRjbGVhbnVwOiBmYWxzZSxcblx0Y29udGFpbmVyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdGRlc2t0b3A6IHRydWUsXG5cdG1vYmlsZTogdHJ1ZSxcblx0cmVzZXQ6IGZhbHNlLFxuXHR1c2VEZWxheTogJ2Fsd2F5cycsXG5cdHZpZXdGYWN0b3I6IDAuMCxcblx0dmlld09mZnNldDoge1xuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMFxuXHR9LFxuXHRhZnRlclJlc2V0OiBmdW5jdGlvbiBhZnRlclJlc2V0KCkge30sXG5cdGFmdGVyUmV2ZWFsOiBmdW5jdGlvbiBhZnRlclJldmVhbCgpIHt9LFxuXHRiZWZvcmVSZXNldDogZnVuY3Rpb24gYmVmb3JlUmVzZXQoKSB7fSxcblx0YmVmb3JlUmV2ZWFsOiBmdW5jdGlvbiBiZWZvcmVSZXZlYWwoKSB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZSgpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyJyk7XG5cblx0cmV0dXJuIHtcblx0XHRjbGVhbjogZnVuY3Rpb24gY2xlYW4oKSB7fSxcblx0XHRkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge30sXG5cdFx0cmV2ZWFsOiBmdW5jdGlvbiByZXZlYWwoKSB7fSxcblx0XHRzeW5jOiBmdW5jdGlvbiBzeW5jKCkge30sXG5cdFx0Z2V0IG5vb3AoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3InKTtcblxuXHRpZiAoZG9jdW1lbnQuYm9keSkge1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0XHR9KTtcblx0fVxufVxuXG52YXIgbW91bnQgPSB7IHN1Y2Nlc3M6IHN1Y2Nlc3MsIGZhaWx1cmU6IGZhaWx1cmUgfTtcblxuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuXHRyZXR1cm4gKFxuXHRcdHggIT09IG51bGwgJiZcblx0XHR4IGluc3RhbmNlb2YgT2JqZWN0ICYmXG5cdFx0KHguY29uc3RydWN0b3IgPT09IE9iamVjdCB8fFxuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBPYmplY3RdJylcblx0KVxufVxuXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG5cdGlmIChpc09iamVjdChjb2xsZWN0aW9uKSkge1xuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG5cdFx0cmV0dXJuIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjYWxsYmFjayhjb2xsZWN0aW9uW2tleV0sIGtleSwgY29sbGVjdGlvbik7IH0pXG5cdH1cblx0aWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGksIGNvbGxlY3Rpb24pOyB9KVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGVpdGhlciBhbiBhcnJheSBvciBvYmplY3QgbGl0ZXJhbC4nKVxufVxuXG5mdW5jdGlvbiBsb2dnZXIobWVzc2FnZSkge1xuXHR2YXIgZGV0YWlscyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBkZXRhaWxzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmICh0aGlzLmNvbnN0cnVjdG9yLmRlYnVnICYmIGNvbnNvbGUpIHtcblx0XHR2YXIgcmVwb3J0ID0gXCIlY1Njcm9sbFJldmVhbDogXCIgKyBtZXNzYWdlO1xuXHRcdGRldGFpbHMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiAocmVwb3J0ICs9IFwiXFxuIOKAlCBcIiArIGRldGFpbCk7IH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcG9ydCwgJ2NvbG9yOiAjZWE2NTRiOycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0fVxufVxuXG5mdW5jdGlvbiByaW5zZSgpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIHN0cnVjdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG5cdFx0YWN0aXZlOiBbXSxcblx0XHRzdGFsZTogW11cblx0fSk7IH07XG5cblx0dmFyIGVsZW1lbnRJZHMgPSBzdHJ1Y3QoKTtcblx0dmFyIHNlcXVlbmNlSWRzID0gc3RydWN0KCk7XG5cdHZhciBjb250YWluZXJJZHMgPSBzdHJ1Y3QoKTtcblxuXHQvKipcblx0ICogVGFrZSBzdG9jayBvZiBhY3RpdmUgZWxlbWVudCBJRHMuXG5cdCAqL1xuXHR0cnkge1xuXHRcdGVhY2goJCgnW2RhdGEtc3ItaWRdJyksIGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHR2YXIgaWQgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpKTtcblx0XHRcdGVsZW1lbnRJZHMuYWN0aXZlLnB1c2goaWQpO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgZVxuXHR9XG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIGVsZW1lbnRzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50SWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuaWQpID09PSAtMSkge1xuXHRcdFx0ZWxlbWVudElkcy5zdGFsZS5wdXNoKGVsZW1lbnQuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChlbGVtZW50SWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tzdGFsZUlkXTsgfSk7XG5cblx0LyoqXG5cdCAqIFRha2Ugc3RvY2sgb2YgYWN0aXZlIGNvbnRhaW5lciBhbmQgc2VxdWVuY2UgSURzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChjb250YWluZXJJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5jb250YWluZXJJZCkgPT09IC0xKSB7XG5cdFx0XHRjb250YWluZXJJZHMuYWN0aXZlLnB1c2goZWxlbWVudC5jb250YWluZXJJZCk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXF1ZW5jZScpKSB7XG5cdFx0XHRpZiAoc2VxdWVuY2VJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5zZXF1ZW5jZS5pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHNlcXVlbmNlSWRzLmFjdGl2ZS5wdXNoKGVsZW1lbnQuc2VxdWVuY2UuaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgY29udGFpbmVycy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lcklkcy5hY3RpdmUuaW5kZXhPZihjb250YWluZXIuaWQpID09PSAtMSkge1xuXHRcdFx0Y29udGFpbmVySWRzLnN0YWxlLnB1c2goY29udGFpbmVyLmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goY29udGFpbmVySWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkge1xuXHRcdHZhciBzdGFsZSA9IHRoaXMkMS5zdG9yZS5jb250YWluZXJzW3N0YWxlSWRdLm5vZGU7XG5cdFx0c3RhbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHRzdGFsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuY29udGFpbmVyc1tzdGFsZUlkXTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgc2VxdWVuY2VzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLnNlcXVlbmNlcywgZnVuY3Rpb24gKHNlcXVlbmNlKSB7XG5cdFx0aWYgKHNlcXVlbmNlSWRzLmFjdGl2ZS5pbmRleE9mKHNlcXVlbmNlLmlkKSA9PT0gLTEpIHtcblx0XHRcdHNlcXVlbmNlSWRzLnN0YWxlLnB1c2goc2VxdWVuY2UuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChzZXF1ZW5jZUlkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDEuc3RvcmUuc2VxdWVuY2VzW3N0YWxlSWRdOyB9KTtcbn1cblxudmFyIGdldFByZWZpeGVkQ3NzUHJvcCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBwcm9wZXJ0aWVzID0ge307XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuXHRmdW5jdGlvbiBnZXRQcmVmaXhlZENzc1Byb3BlcnR5KG5hbWUsIHNvdXJjZSkge1xuXHRcdGlmICggc291cmNlID09PSB2b2lkIDAgKSBzb3VyY2UgPSBzdHlsZTtcblxuXHRcdGlmIChuYW1lICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHByb3BlcnRpZXNbbmFtZV0pIHtcblx0XHRcdFx0cmV0dXJuIHByb3BlcnRpZXNbbmFtZV1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gKHByb3BlcnRpZXNbbmFtZV0gPSBuYW1lKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbKFwiLXdlYmtpdC1cIiArIG5hbWUpXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIChwcm9wZXJ0aWVzW25hbWVdID0gXCItd2Via2l0LVwiICsgbmFtZSlcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKChcIlVuYWJsZSB0byBmaW5kIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgc3R5bGUgcHJvcGVydHkuXCIpKVxuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZy4nKVxuXHR9XG5cblx0Z2V0UHJlZml4ZWRDc3NQcm9wZXJ0eS5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHByb3BlcnRpZXMgPSB7fSk7IH07XG5cblx0cmV0dXJuIGdldFByZWZpeGVkQ3NzUHJvcGVydHlcbn0pKCk7XG5cbmZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQpIHtcblx0dmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5ub2RlKTtcblx0dmFyIHBvc2l0aW9uID0gY29tcHV0ZWQucG9zaXRpb247XG5cdHZhciBjb25maWcgPSBlbGVtZW50LmNvbmZpZztcblxuXHQvKipcblx0ICogR2VuZXJhdGUgaW5saW5lIHN0eWxlc1xuXHQgKi9cblx0dmFyIGlubGluZSA9IHt9O1xuXHR2YXIgaW5saW5lU3R5bGUgPSBlbGVtZW50Lm5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuXHR2YXIgaW5saW5lTWF0Y2ggPSBpbmxpbmVTdHlsZS5tYXRjaCgvW1xcdy1dK1xccyo6XFxzKlteO10rXFxzKi9naSkgfHwgW107XG5cblx0aW5saW5lLmNvbXB1dGVkID0gaW5saW5lTWF0Y2ggPyBpbmxpbmVNYXRjaC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnIDogJyc7XG5cblx0aW5saW5lLmdlbmVyYXRlZCA9IGlubGluZU1hdGNoLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ubWF0Y2goL3Zpc2liaWxpdHlcXHM/Olxccz92aXNpYmxlL2kpOyB9KVxuXHRcdD8gaW5saW5lLmNvbXB1dGVkXG5cdFx0OiBpbmxpbmVNYXRjaC5jb25jYXQoIFsndmlzaWJpbGl0eTogdmlzaWJsZSddKS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBvcGFjaXR5IHN0eWxlc1xuXHQgKi9cblx0dmFyIGNvbXB1dGVkT3BhY2l0eSA9IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cdHZhciBjb25maWdPcGFjaXR5ID0gIWlzTmFOKHBhcnNlRmxvYXQoY29uZmlnLm9wYWNpdHkpKVxuXHRcdD8gcGFyc2VGbG9hdChjb25maWcub3BhY2l0eSlcblx0XHQ6IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cblx0dmFyIG9wYWNpdHkgPSB7XG5cdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkT3BhY2l0eSAhPT0gY29uZmlnT3BhY2l0eSA/IChcIm9wYWNpdHk6IFwiICsgY29tcHV0ZWRPcGFjaXR5ICsgXCI7XCIpIDogJycsXG5cdFx0Z2VuZXJhdGVkOiBjb21wdXRlZE9wYWNpdHkgIT09IGNvbmZpZ09wYWNpdHkgPyAoXCJvcGFjaXR5OiBcIiArIGNvbmZpZ09wYWNpdHkgKyBcIjtcIikgOiAnJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0cmFuc2Zvcm1hdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2Zvcm1hdGlvbnMgPSBbXTtcblxuXHRpZiAocGFyc2VGbG9hdChjb25maWcuZGlzdGFuY2UpKSB7XG5cdFx0dmFyIGF4aXMgPSBjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnYm90dG9tJyA/ICdZJyA6ICdYJztcblxuXHRcdC8qKlxuXHRcdCAqIExldOKAmXMgbWFrZSBzdXJlIG91ciBvdXIgcGl4ZWwgZGlzdGFuY2VzIGFyZSBuZWdhdGl2ZSBmb3IgdG9wIGFuZCBsZWZ0LlxuXHRcdCAqIGUuZy4geyBvcmlnaW46ICd0b3AnLCBkaXN0YW5jZTogJzI1cHgnIH0gc3RhcnRzIGF0IGB0b3A6IC0yNXB4YCBpbiBDU1MuXG5cdFx0ICovXG5cdFx0dmFyIGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuXHRcdGlmIChjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnbGVmdCcpIHtcblx0XHRcdGRpc3RhbmNlID0gL14tLy50ZXN0KGRpc3RhbmNlKSA/IGRpc3RhbmNlLnN1YnN0cigxKSA6IChcIi1cIiArIGRpc3RhbmNlKTtcblx0XHR9XG5cblx0XHR2YXIgcmVmID0gZGlzdGFuY2UubWF0Y2goLyheLT9cXGQrXFwuP1xcZD8pfChlbSR8cHgkfCUkKS9nKTtcblx0XHR2YXIgdmFsdWUgPSByZWZbMF07XG5cdFx0dmFyIHVuaXQgPSByZWZbMV07XG5cblx0XHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRcdGNhc2UgJ2VtJzpcblx0XHRcdFx0ZGlzdGFuY2UgPSBwYXJzZUludChjb21wdXRlZC5mb250U2l6ZSkgKiB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3B4Jzpcblx0XHRcdFx0ZGlzdGFuY2UgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJyUnOlxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGVyZSB3ZSB1c2UgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgaW5zdGVhZCBvZlxuXHRcdFx0XHQgKiB0aGUgZXhpc3RpbmcgZGF0YSBhdHRhY2hlZCB0byBgZWxlbWVudC5nZW9tZXRyeWBcblx0XHRcdFx0ICogYmVjYXVzZSBvbmx5IHRoZSBmb3JtZXIgaW5jbHVkZXMgYW55IHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0XHQgKiBjdXJyZW50IGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIElmIHRoYXQgYmVoYXZpb3IgZW5kcyB1cCBiZWluZyB1bmludHVpdGl2ZSwgdGhpc1xuXHRcdFx0XHQgKiBsb2dpYyBjb3VsZCBpbnN0ZWFkIHV0aWxpemUgYGVsZW1lbnQuZ2VvbWV0cnkuaGVpZ2h0YFxuXHRcdFx0XHQgKiBhbmQgYGVsZW1lbnQuZ2VvZW1ldHJ5LndpZHRoYCBmb3IgdGhlIGRpc3RhbmNlIGNhbGN1bGF0aW9uXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRkaXN0YW5jZSA9XG5cdFx0XHRcdFx0YXhpcyA9PT0gJ1knXG5cdFx0XHRcdFx0XHQ/IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogdmFsdWUpIC8gMTAwXG5cdFx0XHRcdFx0XHQ6IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiB2YWx1ZSkgLyAxMDA7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5yZWNvZ25pemVkIG9yIG1pc3NpbmcgZGlzdGFuY2UgdW5pdC4nKVxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSAnWScpIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zbGF0ZVkoZGlzdGFuY2UpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNsYXRlWChkaXN0YW5jZSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjb25maWcucm90YXRlLngpIHsgdHJhbnNmb3JtYXRpb25zLnB1c2gocm90YXRlWChjb25maWcucm90YXRlLngpKTsgfVxuXHRpZiAoY29uZmlnLnJvdGF0ZS55KSB7IHRyYW5zZm9ybWF0aW9ucy5wdXNoKHJvdGF0ZVkoY29uZmlnLnJvdGF0ZS55KSk7IH1cblx0aWYgKGNvbmZpZy5yb3RhdGUueikgeyB0cmFuc2Zvcm1hdGlvbnMucHVzaChyb3RhdGVaKGNvbmZpZy5yb3RhdGUueikpOyB9XG5cdGlmIChjb25maWcuc2NhbGUgIT09IDEpIHtcblx0XHRpZiAoY29uZmlnLnNjYWxlID09PSAwKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBDU1MgVHJhbnNmb3JtcyBtYXRyaXggaW50ZXJwb2xhdGlvbiBzcGVjaWZpY2F0aW9uXG5cdFx0XHQgKiBiYXNpY2FsbHkgZGlzYWxsb3dzIHRyYW5zaXRpb25zIG9mIG5vbi1pbnZlcnRpYmxlXG5cdFx0XHQgKiBtYXRyaXhlcywgd2hpY2ggbWVhbnMgYnJvd3NlcnMgd29uJ3QgdHJhbnNpdGlvblxuXHRcdFx0ICogZWxlbWVudHMgd2l0aCB6ZXJvIHNjYWxlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoYXTigJlzIGluY29udmVuaWVudCBmb3IgdGhlIEFQSSBhbmQgZGV2ZWxvcGVyXG5cdFx0XHQgKiBleHBlcmllbmNlLCBzbyB3ZSBzaW1wbHkgbnVkZ2UgdGhlaXIgdmFsdWVcblx0XHRcdCAqIHNsaWdodGx5IGFib3ZlIHplcm87IHRoaXMgYWxsb3dzIGJyb3dzZXJzXG5cdFx0XHQgKiB0byB0cmFuc2l0aW9uIG91ciBlbGVtZW50IGFzIGV4cGVjdGVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIGAwLjAwMDJgIHdhcyB0aGUgc21hbGxlc3QgbnVtYmVyXG5cdFx0XHQgKiB0aGF0IHBlcmZvcm1lZCBhY3Jvc3MgYnJvd3NlcnMuXG5cdFx0XHQgKi9cblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHNjYWxlKDAuMDAwMikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaChzY2FsZShjb25maWcuc2NhbGUpKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgdHJhbnNmb3JtID0ge307XG5cdGlmICh0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG5cdFx0dHJhbnNmb3JtLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2Zvcm0nKTtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2Zvcm0gdmFsdWUgc2hvdWxkIGJlIG9uZSBvZjpcblx0XHQgKiB1bmRlZmluZWQgfHwgJ25vbmUnIHx8ICdtYXRyaXgoKScgfHwgJ21hdHJpeDNkKCknXG5cdFx0ICovXG5cdFx0dHJhbnNmb3JtLmNvbXB1dGVkID0ge1xuXHRcdFx0cmF3OiBjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldLFxuXHRcdFx0bWF0cml4OiBwYXJzZShjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldKVxuXHRcdH07XG5cblx0XHR0cmFuc2Zvcm1hdGlvbnMudW5zaGlmdCh0cmFuc2Zvcm0uY29tcHV0ZWQubWF0cml4KTtcblx0XHR2YXIgcHJvZHVjdCA9IHRyYW5zZm9ybWF0aW9ucy5yZWR1Y2UobXVsdGlwbHkpO1xuXG5cdFx0dHJhbnNmb3JtLmdlbmVyYXRlZCA9IHtcblx0XHRcdGluaXRpYWw6ICgodHJhbnNmb3JtLnByb3BlcnR5KSArIFwiOiBtYXRyaXgzZChcIiArIChwcm9kdWN0LmpvaW4oJywgJykpICsgXCIpO1wiKSxcblx0XHRcdGZpbmFsOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIjogbWF0cml4M2QoXCIgKyAodHJhbnNmb3JtLmNvbXB1dGVkLm1hdHJpeC5qb2luKCcsICcpKSArIFwiKTtcIilcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRyYW5zZm9ybS5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRpbml0aWFsOiAnJyxcblx0XHRcdGZpbmFsOiAnJ1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgdHJhbnNpdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2l0aW9uID0ge307XG5cdGlmIChvcGFjaXR5LmdlbmVyYXRlZCB8fCB0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHR0cmFuc2l0aW9uLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2l0aW9uJyk7XG5cdFx0dHJhbnNpdGlvbi5jb21wdXRlZCA9IGNvbXB1dGVkW3RyYW5zaXRpb24ucHJvcGVydHldO1xuXHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzID0gW107XG5cblx0XHR2YXIgZGVsYXkgPSBjb25maWcuZGVsYXk7XG5cdFx0dmFyIGR1cmF0aW9uID0gY29uZmlnLmR1cmF0aW9uO1xuXHRcdHZhciBlYXNpbmcgPSBjb25maWcuZWFzaW5nO1xuXG5cdFx0aWYgKG9wYWNpdHkuZ2VuZXJhdGVkKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy5wdXNoKHtcblx0XHRcdFx0ZGVsYXllZDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgMHNcIilcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzLnB1c2goe1xuXHRcdFx0XHRkZWxheWVkOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIiBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCIgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIDBzXCIpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2l0aW9uIHByb3BlcnR5IHNob3VsZCBiZSB1bmRlZmluZWQsIG9yIG9uZSBvZjpcblx0XHQgKiAnJyB8fCAnbm9uZSAwcyBlYXNlIDBzJyB8fCAnYWxsIDBzIGVhc2UgMHMnIHx8ICdhbGwgMHMgMHMgY3ViaWMtYmV6aWVyKCknXG5cdFx0ICovXG5cdFx0dmFyIGhhc0N1c3RvbVRyYW5zaXRpb24gPVxuXHRcdFx0dHJhbnNpdGlvbi5jb21wdXRlZCAmJiAhdHJhbnNpdGlvbi5jb21wdXRlZC5tYXRjaCgvYWxsIDBzfG5vbmUgMHMvKTtcblxuXHRcdGlmIChoYXNDdXN0b21UcmFuc2l0aW9uKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy51bnNoaWZ0KHtcblx0XHRcdFx0ZGVsYXllZDogdHJhbnNpdGlvbi5jb21wdXRlZCxcblx0XHRcdFx0aW5zdGFudDogdHJhbnNpdGlvbi5jb21wdXRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbXBvc2VkID0gdHJhbnNpdGlvbi5mcmFnbWVudHMucmVkdWNlKFxuXHRcdFx0ZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCBmcmFnbWVudCwgaSkge1xuXHRcdFx0XHRjb21wb3NpdGlvbi5kZWxheWVkICs9IGkgPT09IDAgPyBmcmFnbWVudC5kZWxheWVkIDogKFwiLCBcIiArIChmcmFnbWVudC5kZWxheWVkKSk7XG5cdFx0XHRcdGNvbXBvc2l0aW9uLmluc3RhbnQgKz0gaSA9PT0gMCA/IGZyYWdtZW50Lmluc3RhbnQgOiAoXCIsIFwiICsgKGZyYWdtZW50Lmluc3RhbnQpKTtcblx0XHRcdFx0cmV0dXJuIGNvbXBvc2l0aW9uXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdFx0aW5zdGFudDogJydcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAoKHRyYW5zaXRpb24ucHJvcGVydHkpICsgXCI6IFwiICsgKGNvbXBvc2VkLmRlbGF5ZWQpICsgXCI7XCIpLFxuXHRcdFx0aW5zdGFudDogKCh0cmFuc2l0aW9uLnByb3BlcnR5KSArIFwiOiBcIiArIChjb21wb3NlZC5pbnN0YW50KSArIFwiO1wiKVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdGluc3RhbnQ6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aW5saW5lOiBpbmxpbmUsXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcblx0XHRwb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNpdGlvblxuXHR9XG59XG5cbi8qKlxuICogYXBwbHkgYSBDU1Mgc3RyaW5nIHRvIGFuIGVsZW1lbnQgdXNpbmcgdGhlIENTU09NIChlbGVtZW50LnN0eWxlKSByYXRoZXJcbiAqIHRoYW4gc2V0QXR0cmlidXRlLCB3aGljaCBtYXkgdmlvbGF0ZSB0aGUgY29udGVudCBzZWN1cml0eSBwb2xpY3kuXG4gKlxuICogQHBhcmFtIHtOb2RlfSAgIFtlbF0gIEVsZW1lbnQgdG8gcmVjZWl2ZSBzdHlsZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlY2xhcmF0aW9uXSBTdHlsZXMgdG8gYXBwbHkuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGUgKGVsLCBkZWNsYXJhdGlvbikge1xuXHRkZWNsYXJhdGlvbi5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcblx0XHR2YXIgcmVmID0gcGFpci5zcGxpdCgnOicpO1xuXHRcdHZhciBwcm9wZXJ0eSA9IHJlZlswXTtcblx0XHR2YXIgdmFsdWUgPSByZWYuc2xpY2UoMSk7XG5cdFx0aWYgKHByb3BlcnR5ICYmIHZhbHVlKSB7XG5cdFx0XHRlbC5zdHlsZVtwcm9wZXJ0eS50cmltKCldID0gdmFsdWUuam9pbignOicpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuKHRhcmdldCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgZGlydHk7XG5cdHRyeSB7XG5cdFx0ZWFjaCgkKHRhcmdldCksIGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHR2YXIgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXHRcdFx0aWYgKGlkICE9PSBudWxsKSB7XG5cdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5jYWxsYmFja1RpbWVyKSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmNhbGxiYWNrVGltZXIuY2xvY2spO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkKTtcblx0XHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ0NsZWFuIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdH1cblxuXHRpZiAoZGlydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0cmluc2UuY2FsbCh0aGlzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ0NsZWFuIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIGdlbmVyYXRlZCBzdHlsZXMgYW5kIGVsZW1lbnQgaWRzXG5cdCAqL1xuXHRlYWNoKHRoaXMuc3RvcmUuZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQpO1xuXHRcdGVsZW1lbnQubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcblx0XHR2YXIgdGFyZ2V0ID1cblx0XHRcdGNvbnRhaW5lci5ub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyB3aW5kb3cgOiBjb250YWluZXIubm9kZTtcblx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIENsZWFyIGFsbCBkYXRhIGZyb20gdGhlIHN0b3JlXG5cdCAqL1xuXHR0aGlzLnN0b3JlID0ge1xuXHRcdGNvbnRhaW5lcnM6IHt9LFxuXHRcdGVsZW1lbnRzOiB7fSxcblx0XHRoaXN0b3J5OiBbXSxcblx0XHRzZXF1ZW5jZXM6IHt9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlZXBBc3NpZ24odGFyZ2V0KSB7XG5cdHZhciBzb3VyY2VzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHR3aGlsZSAoIGxlbi0tID4gMCApIHNvdXJjZXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cblx0aWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcblx0XHRlYWNoKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdGVhY2goc291cmNlLCBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG5cdFx0XHRcdGlmIChpc09iamVjdChkYXRhKSkge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0W2tleV0gfHwgIWlzT2JqZWN0KHRhcmdldFtrZXldKSkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVlcEFzc2lnbih0YXJnZXRba2V5XSwgZGF0YSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBkYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGFyZ2V0XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWwuJylcblx0fVxufVxuXG5mdW5jdGlvbiBpc01vYmlsZShhZ2VudCkge1xuXHRpZiAoIGFnZW50ID09PSB2b2lkIDAgKSBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0cmV0dXJuIC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KGFnZW50KVxufVxuXG52YXIgbmV4dFVuaXF1ZUlkID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHVpZCA9IDA7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB1aWQrKzsgfVxufSkoKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0cmluc2UuY2FsbCh0aGlzKTtcblxuXHRlYWNoKHRoaXMuc3RvcmUuZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0dmFyIHN0eWxlcyA9IFtlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkXTtcblxuXHRcdGlmIChlbGVtZW50LnZpc2libGUpIHtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuY29tcHV0ZWQpO1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5maW5hbCk7XG5cdFx0XHRlbGVtZW50LnJldmVhbGVkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMub3BhY2l0eS5nZW5lcmF0ZWQpO1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKTtcblx0XHRcdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgc3R5bGVzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyc7IH0pLmpvaW4oJyAnKSk7XG5cdH0pO1xuXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dmFyIHRhcmdldCA9XG5cdFx0XHRjb250YWluZXIubm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogY29udGFpbmVyLm5vZGU7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBNYW51YWxseSBpbnZva2UgZGVsZWdhdGUgb25jZSB0byBjYXB0dXJlXG5cdCAqIGVsZW1lbnQgYW5kIGNvbnRhaW5lciBkaW1lbnNpb25zLCBjb250YWluZXJcblx0ICogc2Nyb2xsIHBvc2l0aW9uLCBhbmQgdHJpZ2dlciBhbnkgdmFsaWQgcmV2ZWFsc1xuXHQgKi9cblx0dGhpcy5kZWxlZ2F0ZSgpO1xuXG5cdC8qKlxuXHQgKiBXaXBlIGFueSBleGlzdGluZyBgc2V0VGltZW91dGAgbm93XG5cdCAqIHRoYXQgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZC5cblx0ICovXG5cdHRoaXMuaW5pdFRpbWVvdXQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKGVsZW1lbnQsIGZvcmNlKSB7XG5cdGlmICggZm9yY2UgPT09IHZvaWQgMCApIGZvcmNlID0ge307XG5cblx0dmFyIHByaXN0aW5lID0gZm9yY2UucHJpc3RpbmUgfHwgdGhpcy5wcmlzdGluZTtcblx0dmFyIGRlbGF5ZWQgPVxuXHRcdGVsZW1lbnQuY29uZmlnLnVzZURlbGF5ID09PSAnYWx3YXlzJyB8fFxuXHRcdChlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ29ubG9hZCcgJiYgcHJpc3RpbmUpIHx8XG5cdFx0KGVsZW1lbnQuY29uZmlnLnVzZURlbGF5ID09PSAnb25jZScgJiYgIWVsZW1lbnQuc2Vlbik7XG5cblx0dmFyIHNob3VsZFJldmVhbCA9IGVsZW1lbnQudmlzaWJsZSAmJiAhZWxlbWVudC5yZXZlYWxlZDtcblx0dmFyIHNob3VsZFJlc2V0ID0gIWVsZW1lbnQudmlzaWJsZSAmJiBlbGVtZW50LnJldmVhbGVkICYmIGVsZW1lbnQuY29uZmlnLnJlc2V0O1xuXG5cdGlmIChmb3JjZS5yZXZlYWwgfHwgc2hvdWxkUmV2ZWFsKSB7XG5cdFx0cmV0dXJuIHRyaWdnZXJSZXZlYWwuY2FsbCh0aGlzLCBlbGVtZW50LCBkZWxheWVkKVxuXHR9XG5cblx0aWYgKGZvcmNlLnJlc2V0IHx8IHNob3VsZFJlc2V0KSB7XG5cdFx0cmV0dXJuIHRyaWdnZXJSZXNldC5jYWxsKHRoaXMsIGVsZW1lbnQpXG5cdH1cbn1cblxuZnVuY3Rpb24gdHJpZ2dlclJldmVhbChlbGVtZW50LCBkZWxheWVkKSB7XG5cdHZhciBzdHlsZXMgPSBbXG5cdFx0ZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCxcblx0XHRlbGVtZW50LnN0eWxlcy5vcGFjaXR5LmNvbXB1dGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuZmluYWxcblx0XTtcblx0aWYgKGRlbGF5ZWQpIHtcblx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5kZWxheWVkKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5pbnN0YW50KTtcblx0fVxuXHRlbGVtZW50LnJldmVhbGVkID0gZWxlbWVudC5zZWVuID0gdHJ1ZTtcblx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQsIGRlbGF5ZWQpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyUmVzZXQoZWxlbWVudCkge1xuXHR2YXIgc3R5bGVzID0gW1xuXHRcdGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMub3BhY2l0eS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zaXRpb24uZ2VuZXJhdGVkLmluc3RhbnRcblx0XTtcblx0ZWxlbWVudC5yZXZlYWxlZCA9IGZhbHNlO1xuXHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgc3R5bGVzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyc7IH0pLmpvaW4oJyAnKSk7XG5cdHJlZ2lzdGVyQ2FsbGJhY2tzLmNhbGwodGhpcywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2FsbGJhY2tzKGVsZW1lbnQsIGlzRGVsYXllZCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgZHVyYXRpb24gPSBpc0RlbGF5ZWRcblx0XHQ/IGVsZW1lbnQuY29uZmlnLmR1cmF0aW9uICsgZWxlbWVudC5jb25maWcuZGVsYXlcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmR1cmF0aW9uO1xuXG5cdHZhciBiZWZvcmVDYWxsYmFjayA9IGVsZW1lbnQucmV2ZWFsZWRcblx0XHQ/IGVsZW1lbnQuY29uZmlnLmJlZm9yZVJldmVhbFxuXHRcdDogZWxlbWVudC5jb25maWcuYmVmb3JlUmVzZXQ7XG5cblx0dmFyIGFmdGVyQ2FsbGJhY2sgPSBlbGVtZW50LnJldmVhbGVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5hZnRlclJldmVhbFxuXHRcdDogZWxlbWVudC5jb25maWcuYWZ0ZXJSZXNldDtcblxuXHR2YXIgZWxhcHNlZCA9IDA7XG5cdGlmIChlbGVtZW50LmNhbGxiYWNrVGltZXIpIHtcblx0XHRlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGVsZW1lbnQuY2FsbGJhY2tUaW1lci5zdGFydDtcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW1lbnQuY2FsbGJhY2tUaW1lci5jbG9jayk7XG5cdH1cblxuXHRiZWZvcmVDYWxsYmFjayhlbGVtZW50Lm5vZGUpO1xuXG5cdGVsZW1lbnQuY2FsbGJhY2tUaW1lciA9IHtcblx0XHRzdGFydDogRGF0ZS5ub3coKSxcblx0XHRjbG9jazogd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0YWZ0ZXJDYWxsYmFjayhlbGVtZW50Lm5vZGUpO1xuXHRcdFx0ZWxlbWVudC5jYWxsYmFja1RpbWVyID0gbnVsbDtcblx0XHRcdGlmIChlbGVtZW50LnJldmVhbGVkICYmICFlbGVtZW50LmNvbmZpZy5yZXNldCAmJiBlbGVtZW50LmNvbmZpZy5jbGVhbnVwKSB7XG5cdFx0XHRcdGNsZWFuLmNhbGwodGhpcyQxLCBlbGVtZW50Lm5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGR1cmF0aW9uIC0gZWxhcHNlZClcblx0fTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2UoZWxlbWVudCwgcHJpc3RpbmUpIHtcblx0aWYgKCBwcmlzdGluZSA9PT0gdm9pZCAwICkgcHJpc3RpbmUgPSB0aGlzLnByaXN0aW5lO1xuXG5cdC8qKlxuXHQgKiBXZSBmaXJzdCBjaGVjayBpZiB0aGUgZWxlbWVudCBzaG91bGQgcmVzZXQuXG5cdCAqL1xuXHRpZiAoIWVsZW1lbnQudmlzaWJsZSAmJiBlbGVtZW50LnJldmVhbGVkICYmIGVsZW1lbnQuY29uZmlnLnJlc2V0KSB7XG5cdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBlbGVtZW50LCB7IHJlc2V0OiB0cnVlIH0pXG5cdH1cblxuXHR2YXIgc2VxID0gdGhpcy5zdG9yZS5zZXF1ZW5jZXNbZWxlbWVudC5zZXF1ZW5jZS5pZF07XG5cdHZhciBpID0gZWxlbWVudC5zZXF1ZW5jZS5pbmRleDtcblxuXHRpZiAoc2VxKSB7XG5cdFx0dmFyIHZpc2libGUgPSBuZXcgU2VxdWVuY2VNb2RlbChzZXEsICd2aXNpYmxlJywgdGhpcy5zdG9yZSk7XG5cdFx0dmFyIHJldmVhbGVkID0gbmV3IFNlcXVlbmNlTW9kZWwoc2VxLCAncmV2ZWFsZWQnLCB0aGlzLnN0b3JlKTtcblxuXHRcdHNlcS5tb2RlbHMgPSB7IHZpc2libGU6IHZpc2libGUsIHJldmVhbGVkOiByZXZlYWxlZCB9O1xuXG5cdFx0LyoqXG5cdFx0ICogSWYgdGhlIHNlcXVlbmNlIGhhcyBubyByZXZlYWxlZCBtZW1iZXJzLFxuXHRcdCAqIHRoZW4gd2UgcmV2ZWFsIHRoZSBmaXJzdCB2aXNpYmxlIGVsZW1lbnRcblx0XHQgKiB3aXRoaW4gdGhhdCBzZXF1ZW5jZS5cblx0XHQgKlxuXHRcdCAqIFRoZSBzZXF1ZW5jZSB0aGVuIGN1ZXMgYSByZWN1cnNpdmUgY2FsbFxuXHRcdCAqIGluIGJvdGggZGlyZWN0aW9ucy5cblx0XHQgKi9cblx0XHRpZiAoIXJldmVhbGVkLmJvZHkubGVuZ3RoKSB7XG5cdFx0XHR2YXIgbmV4dElkID0gc2VxLm1lbWJlcnNbdmlzaWJsZS5ib2R5WzBdXTtcblx0XHRcdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuc3RvcmUuZWxlbWVudHNbbmV4dElkXTtcblxuXHRcdFx0aWYgKG5leHRFbGVtZW50KSB7XG5cdFx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgdmlzaWJsZS5ib2R5WzBdLCAtMSwgcHJpc3RpbmUpO1xuXHRcdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIHZpc2libGUuYm9keVswXSwgKzEsIHByaXN0aW5lKTtcblx0XHRcdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBuZXh0RWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIElmIG91ciBlbGVtZW50IGlzbuKAmXQgcmVzZXR0aW5nLCB3ZSBjaGVjayB0aGVcblx0XHQgKiBlbGVtZW50IHNlcXVlbmNlIGluZGV4IGFnYWluc3QgdGhlIGhlYWQsIGFuZFxuXHRcdCAqIHRoZW4gdGhlIGZvb3Qgb2YgdGhlIHNlcXVlbmNlLlxuXHRcdCAqL1xuXHRcdGlmIChcblx0XHRcdCFzZXEuYmxvY2tlZC5oZWFkICYmXG5cdFx0XHRpID09PSBbXS5jb25jYXQoIHJldmVhbGVkLmhlYWQgKS5wb3AoKSAmJlxuXHRcdFx0aSA+PSBbXS5jb25jYXQoIHZpc2libGUuYm9keSApLnNoaWZ0KClcblx0XHQpIHtcblx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgaSwgLTEsIHByaXN0aW5lKTtcblx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdCFzZXEuYmxvY2tlZC5mb290ICYmXG5cdFx0XHRpID09PSBbXS5jb25jYXQoIHJldmVhbGVkLmZvb3QgKS5zaGlmdCgpICYmXG5cdFx0XHRpIDw9IFtdLmNvbmNhdCggdmlzaWJsZS5ib2R5ICkucG9wKClcblx0XHQpIHtcblx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgaSwgKzEsIHByaXN0aW5lKTtcblx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBTZXF1ZW5jZShpbnRlcnZhbCkge1xuXHR2YXIgaSA9IE1hdGguYWJzKGludGVydmFsKTtcblx0aWYgKCFpc05hTihpKSkge1xuXHRcdHRoaXMuaWQgPSBuZXh0VW5pcXVlSWQoKTtcblx0XHR0aGlzLmludGVydmFsID0gTWF0aC5tYXgoaSwgMTYpO1xuXHRcdHRoaXMubWVtYmVycyA9IFtdO1xuXHRcdHRoaXMubW9kZWxzID0ge307XG5cdFx0dGhpcy5ibG9ja2VkID0ge1xuXHRcdFx0aGVhZDogZmFsc2UsXG5cdFx0XHRmb290OiBmYWxzZVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2VxdWVuY2UgaW50ZXJ2YWwuJylcblx0fVxufVxuXG5mdW5jdGlvbiBTZXF1ZW5jZU1vZGVsKHNlcSwgcHJvcCwgc3RvcmUpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dGhpcy5oZWFkID0gW107XG5cdHRoaXMuYm9keSA9IFtdO1xuXHR0aGlzLmZvb3QgPSBbXTtcblxuXHRlYWNoKHNlcS5tZW1iZXJzLCBmdW5jdGlvbiAoaWQsIGluZGV4KSB7XG5cdFx0dmFyIGVsZW1lbnQgPSBzdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0aWYgKGVsZW1lbnQgJiYgZWxlbWVudFtwcm9wXSkge1xuXHRcdFx0dGhpcyQxLmJvZHkucHVzaChpbmRleCk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAodGhpcy5ib2R5Lmxlbmd0aCkge1xuXHRcdGVhY2goc2VxLm1lbWJlcnMsIGZ1bmN0aW9uIChpZCwgaW5kZXgpIHtcblx0XHRcdHZhciBlbGVtZW50ID0gc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgIWVsZW1lbnRbcHJvcF0pIHtcblx0XHRcdFx0aWYgKGluZGV4IDwgdGhpcyQxLmJvZHlbMF0pIHtcblx0XHRcdFx0XHR0aGlzJDEuaGVhZC5wdXNoKGluZGV4KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzJDEuZm9vdC5wdXNoKGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1ZShzZXEsIGksIGRpcmVjdGlvbiwgcHJpc3RpbmUpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGJsb2NrZWQgPSBbJ2hlYWQnLCBudWxsLCAnZm9vdCddWzEgKyBkaXJlY3Rpb25dO1xuXHR2YXIgbmV4dElkID0gc2VxLm1lbWJlcnNbaSArIGRpcmVjdGlvbl07XG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuc3RvcmUuZWxlbWVudHNbbmV4dElkXTtcblxuXHRzZXEuYmxvY2tlZFtibG9ja2VkXSA9IHRydWU7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0c2VxLmJsb2NrZWRbYmxvY2tlZF0gPSBmYWxzZTtcblx0XHRpZiAobmV4dEVsZW1lbnQpIHtcblx0XHRcdHNlcXVlbmNlLmNhbGwodGhpcyQxLCBuZXh0RWxlbWVudCwgcHJpc3RpbmUpO1xuXHRcdH1cblx0fSwgc2VxLmludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcmV2ZWFsKHRhcmdldCwgb3B0aW9ucywgc3luY2luZykge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblx0aWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cdGlmICggc3luY2luZyA9PT0gdm9pZCAwICkgc3luY2luZyA9IGZhbHNlO1xuXG5cdHZhciBjb250YWluZXJCdWZmZXIgPSBbXTtcblx0dmFyIHNlcXVlbmNlJCQxO1xuXHR2YXIgaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsIHx8IGRlZmF1bHRzLmludGVydmFsO1xuXG5cdHRyeSB7XG5cdFx0aWYgKGludGVydmFsKSB7XG5cdFx0XHRzZXF1ZW5jZSQkMSA9IG5ldyBTZXF1ZW5jZShpbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5vZGVzID0gJCh0YXJnZXQpO1xuXHRcdGlmICghbm9kZXMubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmV2ZWFsIHRhcmdldC4nKVxuXHRcdH1cblxuXHRcdHZhciBlbGVtZW50cyA9IG5vZGVzLnJlZHVjZShmdW5jdGlvbiAoZWxlbWVudEJ1ZmZlciwgZWxlbWVudE5vZGUpIHtcblx0XHRcdHZhciBlbGVtZW50ID0ge307XG5cdFx0XHR2YXIgZXhpc3RpbmdJZCA9IGVsZW1lbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXG5cdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRkZWVwQXNzaWduKGVsZW1lbnQsIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tleGlzdGluZ0lkXSk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEluIG9yZGVyIHRvIHByZXZlbnQgcHJldmlvdXNseSBnZW5lcmF0ZWQgc3R5bGVzXG5cdFx0XHRcdCAqIGZyb20gdGhyb3dpbmcgb2ZmIHRoZSBuZXcgc3R5bGVzLCB0aGUgc3R5bGUgdGFnXG5cdFx0XHRcdCAqIGhhcyB0byBiZSByZXZlcnRlZCB0byBpdHMgcHJlLXJldmVhbCBzdGF0ZS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuY29tcHV0ZWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5pZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdFx0XHRlbGVtZW50Lm5vZGUgPSBlbGVtZW50Tm9kZTtcblx0XHRcdFx0ZWxlbWVudC5zZWVuID0gZmFsc2U7XG5cdFx0XHRcdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0XHRcdFx0ZWxlbWVudC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb25maWcgPSBkZWVwQXNzaWduKHt9LCBlbGVtZW50LmNvbmZpZyB8fCB0aGlzJDEuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0XHRpZiAoKCFjb25maWcubW9iaWxlICYmIGlzTW9iaWxlKCkpIHx8ICghY29uZmlnLmRlc2t0b3AgJiYgIWlzTW9iaWxlKCkpKSB7XG5cdFx0XHRcdGlmIChleGlzdGluZ0lkKSB7XG5cdFx0XHRcdFx0Y2xlYW4uY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyIC8vIHNraXAgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWJsZWRcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRhaW5lck5vZGUgPSAkKGNvbmZpZy5jb250YWluZXIpWzBdO1xuXHRcdFx0aWYgKCFjb250YWluZXJOb2RlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250YWluZXIuJylcblx0XHRcdH1cblx0XHRcdGlmICghY29udGFpbmVyTm9kZS5jb250YWlucyhlbGVtZW50Tm9kZSkpIHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRCdWZmZXIgLy8gc2tpcCBlbGVtZW50cyBmb3VuZCBvdXRzaWRlIHRoZSBjb250YWluZXJcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRhaW5lcklkO1xuXHRcdFx0e1xuXHRcdFx0XHRjb250YWluZXJJZCA9IGdldENvbnRhaW5lcklkKFxuXHRcdFx0XHRcdGNvbnRhaW5lck5vZGUsXG5cdFx0XHRcdFx0Y29udGFpbmVyQnVmZmVyLFxuXHRcdFx0XHRcdHRoaXMkMS5zdG9yZS5jb250YWluZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjb250YWluZXJJZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRhaW5lcklkID0gbmV4dFVuaXF1ZUlkKCk7XG5cdFx0XHRcdFx0Y29udGFpbmVyQnVmZmVyLnB1c2goeyBpZDogY29udGFpbmVySWQsIG5vZGU6IGNvbnRhaW5lck5vZGUgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5jb25maWcgPSBjb25maWc7XG5cdFx0XHRlbGVtZW50LmNvbnRhaW5lcklkID0gY29udGFpbmVySWQ7XG5cdFx0XHRlbGVtZW50LnN0eWxlcyA9IHN0eWxlKGVsZW1lbnQpO1xuXG5cdFx0XHRpZiAoc2VxdWVuY2UkJDEpIHtcblx0XHRcdFx0ZWxlbWVudC5zZXF1ZW5jZSA9IHtcblx0XHRcdFx0XHRpZDogc2VxdWVuY2UkJDEuaWQsXG5cdFx0XHRcdFx0aW5kZXg6IHNlcXVlbmNlJCQxLm1lbWJlcnMubGVuZ3RoXG5cdFx0XHRcdH07XG5cdFx0XHRcdHNlcXVlbmNlJCQxLm1lbWJlcnMucHVzaChlbGVtZW50LmlkKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudEJ1ZmZlci5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRCdWZmZXJcblx0XHR9LCBbXSk7XG5cblx0XHQvKipcblx0XHQgKiBNb2RpZnlpbmcgdGhlIERPTSB2aWEgc2V0QXR0cmlidXRlIG5lZWRzIHRvIGJlIGhhbmRsZWRcblx0XHQgKiBzZXBhcmF0ZWx5IGZyb20gcmVhZGluZyBjb21wdXRlZCBzdHlsZXMgaW4gdGhlIG1hcCBhYm92ZVxuXHRcdCAqIGZvciB0aGUgYnJvd3NlciB0byBiYXRjaCBET00gY2hhbmdlcyAobGltaXRpbmcgcmVmbG93cylcblx0XHQgKi9cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcyQxLnN0b3JlLmVsZW1lbnRzW2VsZW1lbnQuaWRdID0gZWxlbWVudDtcblx0XHRcdGVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnLCBlbGVtZW50LmlkKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBsb2dnZXIuY2FsbCh0aGlzLCAnUmV2ZWFsIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdH1cblxuXHQvKipcblx0ICogTm93IHRoYXQgZWxlbWVudCBzZXQtdXAgaXMgY29tcGxldGUuLi5cblx0ICogTGV04oCZcyBjb21taXQgYW55IGNvbnRhaW5lciBhbmQgc2VxdWVuY2UgZGF0YSB3ZSBoYXZlIHRvIHRoZSBzdG9yZS5cblx0ICovXG5cdGVhY2goY29udGFpbmVyQnVmZmVyLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dGhpcyQxLnN0b3JlLmNvbnRhaW5lcnNbY29udGFpbmVyLmlkXSA9IHtcblx0XHRcdGlkOiBjb250YWluZXIuaWQsXG5cdFx0XHRub2RlOiBjb250YWluZXIubm9kZVxuXHRcdH07XG5cdH0pO1xuXHRpZiAoc2VxdWVuY2UkJDEpIHtcblx0XHR0aGlzLnN0b3JlLnNlcXVlbmNlc1tzZXF1ZW5jZSQkMS5pZF0gPSBzZXF1ZW5jZSQkMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiByZXZlYWwgd2Fzbid0IGludm9rZWQgYnkgc3luYywgd2Ugd2FudCB0b1xuXHQgKiBtYWtlIHN1cmUgdG8gYWRkIHRoaXMgY2FsbCB0byB0aGUgaGlzdG9yeS5cblx0ICovXG5cdGlmIChzeW5jaW5nICE9PSB0cnVlKSB7XG5cdFx0dGhpcy5zdG9yZS5oaXN0b3J5LnB1c2goeyB0YXJnZXQ6IHRhcmdldCwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuXHRcdC8qKlxuXHRcdCAqIFB1c2ggaW5pdGlhbGl6YXRpb24gdG8gdGhlIGV2ZW50IHF1ZXVlLCBnaXZpbmdcblx0XHQgKiBtdWx0aXBsZSByZXZlYWwgY2FsbHMgdGltZSB0byBiZSBpbnRlcnByZXRlZC5cblx0XHQgKi9cblx0XHRpZiAodGhpcy5pbml0VGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcblx0XHR9XG5cdFx0dGhpcy5pbml0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGluaXRpYWxpemUuYmluZCh0aGlzKSwgMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVySWQobm9kZSkge1xuXHR2YXIgY29sbGVjdGlvbnMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdHdoaWxlICggbGVuLS0gPiAwICkgY29sbGVjdGlvbnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cblx0dmFyIGlkID0gbnVsbDtcblx0ZWFjaChjb2xsZWN0aW9ucywgZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcblx0XHRlYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChjb250YWluZXIpIHtcblx0XHRcdGlmIChpZCA9PT0gbnVsbCAmJiBjb250YWluZXIubm9kZSA9PT0gbm9kZSkge1xuXHRcdFx0XHRpZCA9IGNvbnRhaW5lci5pZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdHJldHVybiBpZFxufVxuXG4vKipcbiAqIFJlLXJ1bnMgdGhlIHJldmVhbCBtZXRob2QgZm9yIGVhY2ggcmVjb3JkIHN0b3JlZCBpbiBoaXN0b3J5LFxuICogZm9yIGNhcHR1cmluZyBuZXcgY29udGVudCBhc3luY2hyb25vdXNseSBsb2FkZWQgaW50byB0aGUgRE9NLlxuICovXG5mdW5jdGlvbiBzeW5jKCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHRlYWNoKHRoaXMuc3RvcmUuaGlzdG9yeSwgZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdHJldmVhbC5jYWxsKHRoaXMkMSwgcmVjb3JkLnRhcmdldCwgcmVjb3JkLm9wdGlvbnMsIHRydWUpO1xuXHR9KTtcblxuXHRpbml0aWFsaXplLmNhbGwodGhpcyk7XG59XG5cbnZhciBwb2x5ZmlsbCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeCA+IDApIC0gKHggPCAwKSB8fCAreDsgfTtcbnZhciBtYXRoU2lnbiA9IE1hdGguc2lnbiB8fCBwb2x5ZmlsbDtcblxuZnVuY3Rpb24gZ2V0R2VvbWV0cnkodGFyZ2V0LCBpc0NvbnRhaW5lcikge1xuXHQvKipcblx0ICogV2Ugd2FudCB0byBpZ25vcmUgcGFkZGluZyBhbmQgc2Nyb2xsYmFycyBmb3IgY29udGFpbmVyIGVsZW1lbnRzLlxuXHQgKiBNb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vZ29vLmdsL3ZPWnBielxuXHQgKi9cblx0dmFyIGhlaWdodCA9IGlzQ29udGFpbmVyID8gdGFyZ2V0Lm5vZGUuY2xpZW50SGVpZ2h0IDogdGFyZ2V0Lm5vZGUub2Zmc2V0SGVpZ2h0O1xuXHR2YXIgd2lkdGggPSBpc0NvbnRhaW5lciA/IHRhcmdldC5ub2RlLmNsaWVudFdpZHRoIDogdGFyZ2V0Lm5vZGUub2Zmc2V0V2lkdGg7XG5cblx0dmFyIG9mZnNldFRvcCA9IDA7XG5cdHZhciBvZmZzZXRMZWZ0ID0gMDtcblx0dmFyIG5vZGUgPSB0YXJnZXQubm9kZTtcblxuXHRkbyB7XG5cdFx0aWYgKCFpc05hTihub2RlLm9mZnNldFRvcCkpIHtcblx0XHRcdG9mZnNldFRvcCArPSBub2RlLm9mZnNldFRvcDtcblx0XHR9XG5cdFx0aWYgKCFpc05hTihub2RlLm9mZnNldExlZnQpKSB7XG5cdFx0XHRvZmZzZXRMZWZ0ICs9IG5vZGUub2Zmc2V0TGVmdDtcblx0XHR9XG5cdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHR9IHdoaWxlIChub2RlKVxuXG5cdHJldHVybiB7XG5cdFx0Ym91bmRzOiB7XG5cdFx0XHR0b3A6IG9mZnNldFRvcCxcblx0XHRcdHJpZ2h0OiBvZmZzZXRMZWZ0ICsgd2lkdGgsXG5cdFx0XHRib3R0b206IG9mZnNldFRvcCArIGhlaWdodCxcblx0XHRcdGxlZnQ6IG9mZnNldExlZnRcblx0XHR9LFxuXHRcdGhlaWdodDogaGVpZ2h0LFxuXHRcdHdpZHRoOiB3aWR0aFxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGVkKGNvbnRhaW5lcikge1xuXHR2YXIgdG9wLCBsZWZ0O1xuXHRpZiAoY29udGFpbmVyLm5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuXHRcdHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHR9IGVsc2Uge1xuXHRcdHRvcCA9IGNvbnRhaW5lci5ub2RlLnNjcm9sbFRvcDtcblx0XHRsZWZ0ID0gY29udGFpbmVyLm5vZGUuc2Nyb2xsTGVmdDtcblx0fVxuXHRyZXR1cm4geyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUoZWxlbWVudCkge1xuXHRpZiAoIGVsZW1lbnQgPT09IHZvaWQgMCApIGVsZW1lbnQgPSB7fTtcblxuXHR2YXIgY29udGFpbmVyID0gdGhpcy5zdG9yZS5jb250YWluZXJzW2VsZW1lbnQuY29udGFpbmVySWRdO1xuXHRpZiAoIWNvbnRhaW5lcikgeyByZXR1cm4gfVxuXG5cdHZhciB2aWV3RmFjdG9yID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgZWxlbWVudC5jb25maWcudmlld0ZhY3RvcikpO1xuXHR2YXIgdmlld09mZnNldCA9IGVsZW1lbnQuY29uZmlnLnZpZXdPZmZzZXQ7XG5cblx0dmFyIGVsZW1lbnRCb3VuZHMgPSB7XG5cdFx0dG9wOiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy50b3AgKyBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodCAqIHZpZXdGYWN0b3IsXG5cdFx0cmlnaHQ6IGVsZW1lbnQuZ2VvbWV0cnkuYm91bmRzLnJpZ2h0IC0gZWxlbWVudC5nZW9tZXRyeS53aWR0aCAqIHZpZXdGYWN0b3IsXG5cdFx0Ym90dG9tOiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy5ib3R0b20gLSBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodCAqIHZpZXdGYWN0b3IsXG5cdFx0bGVmdDogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMubGVmdCArIGVsZW1lbnQuZ2VvbWV0cnkud2lkdGggKiB2aWV3RmFjdG9yXG5cdH07XG5cblx0dmFyIGNvbnRhaW5lckJvdW5kcyA9IHtcblx0XHR0b3A6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMudG9wICsgY29udGFpbmVyLnNjcm9sbC50b3AgKyB2aWV3T2Zmc2V0LnRvcCxcblx0XHRyaWdodDogY29udGFpbmVyLmdlb21ldHJ5LmJvdW5kcy5yaWdodCArIGNvbnRhaW5lci5zY3JvbGwubGVmdCAtIHZpZXdPZmZzZXQucmlnaHQsXG5cdFx0Ym90dG9tOlxuXHRcdFx0Y29udGFpbmVyLmdlb21ldHJ5LmJvdW5kcy5ib3R0b20gKyBjb250YWluZXIuc2Nyb2xsLnRvcCAtIHZpZXdPZmZzZXQuYm90dG9tLFxuXHRcdGxlZnQ6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMubGVmdCArIGNvbnRhaW5lci5zY3JvbGwubGVmdCArIHZpZXdPZmZzZXQubGVmdFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0KGVsZW1lbnRCb3VuZHMudG9wIDwgY29udGFpbmVyQm91bmRzLmJvdHRvbSAmJlxuXHRcdFx0ZWxlbWVudEJvdW5kcy5yaWdodCA+IGNvbnRhaW5lckJvdW5kcy5sZWZ0ICYmXG5cdFx0XHRlbGVtZW50Qm91bmRzLmJvdHRvbSA+IGNvbnRhaW5lckJvdW5kcy50b3AgJiZcblx0XHRcdGVsZW1lbnRCb3VuZHMubGVmdCA8IGNvbnRhaW5lckJvdW5kcy5yaWdodCkgfHxcblx0XHRlbGVtZW50LnN0eWxlcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJ1xuXHQpXG59XG5cbmZ1bmN0aW9uIGRlbGVnYXRlKFxuXHRldmVudCxcblx0ZWxlbWVudHNcbikge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblx0aWYgKCBldmVudCA9PT0gdm9pZCAwICkgZXZlbnQgPSB7IHR5cGU6ICdpbml0JyB9O1xuXHRpZiAoIGVsZW1lbnRzID09PSB2b2lkIDAgKSBlbGVtZW50cyA9IHRoaXMuc3RvcmUuZWxlbWVudHM7XG5cblx0cmFmKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc3RhbGUgPSBldmVudC50eXBlID09PSAnaW5pdCcgfHwgZXZlbnQudHlwZSA9PT0gJ3Jlc2l6ZSc7XG5cblx0XHRlYWNoKHRoaXMkMS5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAoc3RhbGUpIHtcblx0XHRcdFx0Y29udGFpbmVyLmdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkuY2FsbCh0aGlzJDEsIGNvbnRhaW5lciwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgc2Nyb2xsID0gZ2V0U2Nyb2xsZWQuY2FsbCh0aGlzJDEsIGNvbnRhaW5lcik7XG5cdFx0XHRpZiAoY29udGFpbmVyLnNjcm9sbCkge1xuXHRcdFx0XHRjb250YWluZXIuZGlyZWN0aW9uID0ge1xuXHRcdFx0XHRcdHg6IG1hdGhTaWduKHNjcm9sbC5sZWZ0IC0gY29udGFpbmVyLnNjcm9sbC5sZWZ0KSxcblx0XHRcdFx0XHR5OiBtYXRoU2lnbihzY3JvbGwudG9wIC0gY29udGFpbmVyLnNjcm9sbC50b3ApXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuc2Nyb2xsID0gc2Nyb2xsO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogRHVlIHRvIGhvdyB0aGUgc2VxdWVuY2VyIGlzIGltcGxlbWVudGVkLCBpdOKAmXNcblx0XHQgKiBpbXBvcnRhbnQgdGhhdCB3ZSB1cGRhdGUgdGhlIHN0YXRlIG9mIGFsbFxuXHRcdCAqIGVsZW1lbnRzLCBiZWZvcmUgYW55IGFuaW1hdGlvbiBsb2dpYyBpc1xuXHRcdCAqIGV2YWx1YXRlZCAoaW4gdGhlIHNlY29uZCBsb29wIGJlbG93KS5cblx0XHQgKi9cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKHN0YWxlIHx8IGVsZW1lbnQuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbGVtZW50Lmdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC52aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0fSk7XG5cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGVsZW1lbnQuc2VxdWVuY2UpIHtcblx0XHRcdFx0c2VxdWVuY2UuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YW5pbWF0ZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzJDEucHJpc3RpbmUgPSBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtU3VwcG9ydGVkKCkge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdHJldHVybiAndHJhbnNmb3JtJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNmb3JtJyBpbiBzdHlsZVxufVxuXG5mdW5jdGlvbiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblx0cmV0dXJuICd0cmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNpdGlvbicgaW4gc3R5bGVcbn1cblxudmFyIHZlcnNpb24gPSBcIjQuMC45XCI7XG5cbnZhciBib3VuZERlbGVnYXRlO1xudmFyIGJvdW5kRGVzdHJveTtcbnZhciBib3VuZFJldmVhbDtcbnZhciBib3VuZENsZWFuO1xudmFyIGJvdW5kU3luYztcbnZhciBjb25maWc7XG52YXIgZGVidWc7XG52YXIgaW5zdGFuY2U7XG5cbmZ1bmN0aW9uIFNjcm9sbFJldmVhbChvcHRpb25zKSB7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG5cdHZhciBpbnZva2VkV2l0aG91dE5ldyA9XG5cdFx0dHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8XG5cdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBTY3JvbGxSZXZlYWwucHJvdG90eXBlO1xuXG5cdGlmIChpbnZva2VkV2l0aG91dE5ldykge1xuXHRcdHJldHVybiBuZXcgU2Nyb2xsUmV2ZWFsKG9wdGlvbnMpXG5cdH1cblxuXHRpZiAoIVNjcm9sbFJldmVhbC5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgJ0luc3RhbnRpYXRpb24gZmFpbGVkLicsICdUaGlzIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR2YXIgYnVmZmVyO1xuXHR0cnkge1xuXHRcdGJ1ZmZlciA9IGNvbmZpZ1xuXHRcdFx0PyBkZWVwQXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpXG5cdFx0XHQ6IGRlZXBBc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsICdJbnZhbGlkIGNvbmZpZ3VyYXRpb24uJywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR0cnkge1xuXHRcdHZhciBjb250YWluZXIgPSAkKGJ1ZmZlci5jb250YWluZXIpWzBdO1xuXHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRjb25maWcgPSBidWZmZXI7XG5cblx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdGxvZ2dlci5jYWxsKFxuXHRcdFx0dGhpcyxcblx0XHRcdCdUaGlzIGRldmljZSBpcyBkaXNhYmxlZC4nLFxuXHRcdFx0KFwiZGVza3RvcDogXCIgKyAoY29uZmlnLmRlc2t0b3ApKSxcblx0XHRcdChcIm1vYmlsZTogXCIgKyAoY29uZmlnLm1vYmlsZSkpXG5cdFx0KTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRtb3VudC5zdWNjZXNzKCk7XG5cblx0dGhpcy5zdG9yZSA9IHtcblx0XHRjb250YWluZXJzOiB7fSxcblx0XHRlbGVtZW50czoge30sXG5cdFx0aGlzdG9yeTogW10sXG5cdFx0c2VxdWVuY2VzOiB7fVxuXHR9O1xuXG5cdHRoaXMucHJpc3RpbmUgPSB0cnVlO1xuXG5cdGJvdW5kRGVsZWdhdGUgPSBib3VuZERlbGVnYXRlIHx8IGRlbGVnYXRlLmJpbmQodGhpcyk7XG5cdGJvdW5kRGVzdHJveSA9IGJvdW5kRGVzdHJveSB8fCBkZXN0cm95LmJpbmQodGhpcyk7XG5cdGJvdW5kUmV2ZWFsID0gYm91bmRSZXZlYWwgfHwgcmV2ZWFsLmJpbmQodGhpcyk7XG5cdGJvdW5kQ2xlYW4gPSBib3VuZENsZWFuIHx8IGNsZWFuLmJpbmQodGhpcyk7XG5cdGJvdW5kU3luYyA9IGJvdW5kU3luYyB8fCBzeW5jLmJpbmQodGhpcyk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZWxlZ2F0ZScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZERlbGVnYXRlOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2Rlc3Ryb3knLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmREZXN0cm95OyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JldmVhbCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFJldmVhbDsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjbGVhbicsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZENsZWFuOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N5bmMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRTeW5jOyB9IH0pO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdHMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3ZlcnNpb24nLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbjsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdub29wJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9IH0pO1xuXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlIDogKGluc3RhbmNlID0gdGhpcylcbn1cblxuU2Nyb2xsUmV2ZWFsLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNUcmFuc2Zvcm1TdXBwb3J0ZWQoKSAmJiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKTsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjcm9sbFJldmVhbCwgJ2RlYnVnJywge1xuXHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlYnVnIHx8IGZhbHNlOyB9LFxuXHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGRlYnVnID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IGRlYnVnKTsgfVxufSk7XG5cblNjcm9sbFJldmVhbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxSZXZlYWw7XG4iLCIvKiEgQGxpY2Vuc2UgVGVhbGlnaHQgdjAuMy42XG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcbmltcG9ydCBpc0RvbU5vZGVMaXN0IGZyb20gJ2lzLWRvbS1ub2RlLWxpc3QnO1xuXG5mdW5jdGlvbiB0ZWFsaWdodCh0YXJnZXQsIGNvbnRleHQpIHtcbiAgaWYgKCBjb250ZXh0ID09PSB2b2lkIDAgKSBjb250ZXh0ID0gZG9jdW1lbnQ7XG5cbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7IHJldHVybiB0YXJnZXQuZmlsdGVyKGlzRG9tTm9kZSk7IH1cbiAgaWYgKGlzRG9tTm9kZSh0YXJnZXQpKSB7IHJldHVybiBbdGFyZ2V0XTsgfVxuICBpZiAoaXNEb21Ob2RlTGlzdCh0YXJnZXQpKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpOyB9XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBxdWVyeSA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHF1ZXJ5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFsaWdodDtcbiIsImltcG9ydCBTY3JvbGxSZXZlYWwgZnJvbSBcInNjcm9sbHJldmVhbFwiO1xuXG4vL3RvZ2dsZSBtZW51IGljb25cbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWljb25cIikhIGFzIEhUTUxMSUVsZW1lbnQ7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKSEgYXMgSFRNTEVsZW1lbnQ7XG5cbm1lbnVJY29uLm9uY2xpY2sgPSAoKSA9PiB7XG4gIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJieC14XCIpO1xuICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5cbi8vIHNlbGVjdCBuYXYgYnV0dG9uIGFzIHBlciBzY3JvbGxcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgXCJzZWN0aW9uXCJcbikhIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICBcImhlYWRlciBuYXYgYVwiXG4pISBhcyBOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50Pjtcblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZWN0eWlvXCIsIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0LCBzZWN0aW9uLm9mZnNldFRvcCk7XG4gICAgLy9ob3cgZmFyIGF3YXkgZnJvbSB0b3BcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAvL2VsZW1lbnQgaG93IGZhciBhd2F5IGZyb20gdG9wXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VjdGlvbi5vZmZzZXRUb3AgLSAxNTA7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2VjdGlvbi5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgaWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXG4gICAgaWYgKHRvcCA+PSBvZmZzZXQgJiYgdG9wIDwgb2Zmc2V0ICsgaGVpZ2h0KSB7XG4gICAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImhlYWRlciBuYXYgYVtocmVmKj1cIiArIGlkICsgXCJdXCIpXG4gICAgICAgICAgPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzdGlja3kgbmF2YmFyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhIGFzIEhUTUxFbGVtZW50O1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcInN0aWNreVwiLCB3aW5kb3cuc2Nyb2xsWSA+IDEwMCk7XG5cbiAgLy9yZW1vdmUgdG9nZ2xlaWNuIGFuZCBuYXZiYXIgd2hlbiBjbGljayBuYXZiYXIgbGluay9zY3JvbGxcbiAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImJ4LXhcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufTtcblxuLy9zY3JvbGwgcmV2ZWFsXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFNjcm9sbFJldmVhbCh7XG4gICAgcmVzZXQ6IHRydWUsXG4gICAgZGlzdGFuY2U6IFwiODBweFwiLFxuICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIGRlbGF5OiAyMDAsXG4gIH0pO1xuXG4gIFNjcm9sbFJldmVhbCgpLnJldmVhbChcIi5ob21lLWNvbnRlbnQsIC5oZWFkaW5nXCIsIHsgb3JpZ2luOiBcInRvcFwiIH0pO1xuICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoXG4gICAgXCIuaG9tZS1pbWcsIC5zZXJ2aWNlcy1jb250YWluZXIsIC5wb3J0Zm9saW8tYm94LCAuY29udGFjdCBmb3JtXCIsXG4gICAgeyBvcmlnaW46IFwiYm90dG9tXCIgfVxuICApO1xuICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoXCIuaG9tZS1jb250ZW50IGgxLCAuYWJvdXQtaW1nXCIsIHsgb3JpZ2luOiBcImxlZnRcIiB9KTtcbiAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKFwiLmhvbWUtY29udGVudCBwLCAuYWJvdXQtY29udGVudFwiLCB7IG9yaWdpbjogXCJyaWdodFwiIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==