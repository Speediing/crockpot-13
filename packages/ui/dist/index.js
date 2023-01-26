"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button,
  footerItems: () => footerItems
});
module.exports = __toCommonJS(ui_exports);

// Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "text-lg py-4 px-8 my-8 hover:bg-white hover:text-[#112641] rounded-full border border-white", children: "Learn More" });
};

// index.tsx
var footerItems = [
  "About DIRECTV",
  "|",
  "Careers",
  "|",
  "Legal policy center",
  "|",
  "Privacy center",
  "|",
  "Privacy Choices",
  "|",
  "Advertising choices",
  "|",
  "Site map",
  "|",
  "FCC public files",
  "|",
  "Accessibility"
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  footerItems
});
