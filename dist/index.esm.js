import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import React from 'react';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("div", null, "HelloWorld");
}

function Button() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary"
  }, "Primary"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-success"
  }, "Success"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-danger"
  }, "Danger"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-warning"
  }, "Warning"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-info"
  }, "Info"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-light"
  }, "Light"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-dark"
  }, "Dark"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-link"
  }, "Link"));
}

export { Button, HelloWorld };
