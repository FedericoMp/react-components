import React from 'react';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("div", null, "HelloWorld");
}

function SecondComponent() {
  return /*#__PURE__*/React.createElement("div", {
    className: "accordion",
    id: "accordionExample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "accordion-header",
    id: "headingOne"
  }, /*#__PURE__*/React.createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne"
  }, "Accordion Item #1")), /*#__PURE__*/React.createElement("div", {
    id: "collapseOne",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "headingOne",
    "data-bs-parent": "#accordionExample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("strong", null, "This is the first item's accordion body."), " It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/React.createElement("code", null, ".accordion-body"), ", though the transition does limit overflow."))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "accordion-header",
    id: "headingTwo"
  }, /*#__PURE__*/React.createElement("button", {
    className: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo"
  }, "Accordion Item #2")), /*#__PURE__*/React.createElement("div", {
    id: "collapseTwo",
    className: "accordion-collapse collapse",
    "aria-labelledby": "headingTwo",
    "data-bs-parent": "#accordionExample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("strong", null, "This is the second item's accordion body."), " It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/React.createElement("code", null, ".accordion-body"), ", though the transition does limit overflow."))), /*#__PURE__*/React.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "accordion-header",
    id: "headingThree"
  }, /*#__PURE__*/React.createElement("button", {
    className: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree"
  }, "Accordion Item #3")), /*#__PURE__*/React.createElement("div", {
    id: "collapseThree",
    className: "accordion-collapse collapse",
    "aria-labelledby": "headingThree",
    "data-bs-parent": "#accordionExample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, /*#__PURE__*/React.createElement("strong", null, "This is the third item's accordion body."), " It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/React.createElement("code", null, ".accordion-body"), ", though the transition does limit overflow."))));
}

export { HelloWorld, SecondComponent };
