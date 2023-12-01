"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(rsc)/../node_modules/has-proto/index.js":
/*!******************************************!*\
  !*** ../node_modules/has-proto/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nvar test = {\n    foo: {}\n};\nvar $Object = Object;\nmodule.exports = function hasProto() {\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(({\n        __proto__: null\n    }) instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2hhcy1wcm90by9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLE9BQU87SUFDVkMsS0FBSyxDQUFDO0FBQ1A7QUFFQSxJQUFJQyxVQUFVQztBQUVkQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDekIsT0FBTztRQUFFQyxXQUFXUDtJQUFLLEdBQUVDLEdBQUcsS0FBS0QsS0FBS0MsR0FBRyxJQUFJLENBQUU7UUFBRU0sV0FBVztJQUFLLGNBQWFMLE9BQU07QUFDdkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25lcy10cnVmYWRvcy8uLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzPzQ2NDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0Zm9vOiB7fVxufTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb28gJiYgISh7IF9fcHJvdG9fXzogbnVsbCB9IGluc3RhbmNlb2YgJE9iamVjdCk7XG59O1xuIl0sIm5hbWVzIjpbInRlc3QiLCJmb28iLCIkT2JqZWN0IiwiT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc1Byb3RvIiwiX19wcm90b19fIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/has-proto/index.js\n");

/***/ })

};
;