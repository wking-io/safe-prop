"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curry = curry;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function curry(fn) {
  var _this = this;

  var createRecurser = function createRecurser(acc, count) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.length > 0 ? recurse(_toConsumableArray(acc).concat(args), count) : recurse(_toConsumableArray(acc).concat([null]), count);
    };
  };

  var recurse = function recurse(acc, count) {
    return acc.length < count ? createRecurser(acc, count) : fn.apply(_this, acc);
  };

  return createRecurser([], fn.length);
}