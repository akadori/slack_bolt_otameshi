"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleBlock = void 0;
var jsx_runtime_1 = require("jsx-slack/jsx-runtime");
var jsx_slack_1 = require("jsx-slack");
var exampleBlock = function (_a) {
    var name = _a.name;
    return (jsx_runtime_1.jsx(jsx_slack_1.Blocks, { children: jsx_runtime_1.jsxs(jsx_slack_1.Section, { children: ["Hello, ", jsx_runtime_1.jsx("b", { children: name }, void 0), "!"] }, void 0) }, void 0));
};
exports.exampleBlock = exampleBlock;
