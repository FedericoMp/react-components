'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('@popperjs/core/dist/umd/popper.min.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function HelloWorld() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, "HelloWorld");
}

function Button() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary"
  }, "Primary"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary"
  }, "Secondary"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-success"
  }, "Success"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-danger"
  }, "Danger"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-warning"
  }, "Warning"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-info"
  }, "Info"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-light"
  }, "Light"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-dark"
  }, "Dark"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn btn-link"
  }, "Link"));
}

exports.Button = Button;
exports.HelloWorld = HelloWorld;
