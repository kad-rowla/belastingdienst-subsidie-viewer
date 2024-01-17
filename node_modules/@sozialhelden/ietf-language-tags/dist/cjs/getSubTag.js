"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexes_js_1 = require("./indexes.js");
function getSubTag(type, subTag) {
    const index = indexes_js_1.default[type][subTag.toLowerCase()];
    return indexes_js_1.default.registry[index];
}
exports.default = getSubTag;
//# sourceMappingURL=getSubTag.js.map