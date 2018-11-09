"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safePath = exports.safeProp = void 0;

var _utils = require("./utils");

var _data = _interopRequireDefault(require("data.maybe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeProp = (0, _utils.curry)(function (prop, obj) {
  if (prop === null || obj === null) {
    return _data.default.Nothing();
  }
});
exports.safeProp = safeProp;
var safePath = (0, _utils.curry)(function (prop, obj) {
  if (prop === null || obj === null) {
    return _data.default.Nothing();
  }
});
exports.safePath = safePath;