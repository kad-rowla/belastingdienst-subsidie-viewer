"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRFC5646Regexp = exports.normalizeLanguageTagCasing = exports.indexes = exports.getSubTag = exports.getTag = exports.getPreferredLanguageTag = exports.getMacroLanguage = exports.parseLanguageTag = exports.generateAlphabeticRange = exports.describeIETFLanguageTag = void 0;
var describeIETFLanguageTag_js_1 = require("./describeIETFLanguageTag.js");
Object.defineProperty(exports, "describeIETFLanguageTag", { enumerable: true, get: function () { return describeIETFLanguageTag_js_1.default; } });
var generateAlphabeticRange_js_1 = require("./generateAlphabeticRange.js");
Object.defineProperty(exports, "generateAlphabeticRange", { enumerable: true, get: function () { return generateAlphabeticRange_js_1.default; } });
var parseLanguageTag_js_1 = require("./parseLanguageTag.js");
Object.defineProperty(exports, "parseLanguageTag", { enumerable: true, get: function () { return parseLanguageTag_js_1.default; } });
var getMacroLanguage_js_1 = require("./getMacroLanguage.js");
Object.defineProperty(exports, "getMacroLanguage", { enumerable: true, get: function () { return getMacroLanguage_js_1.default; } });
var getPreferredLanguageTag_js_1 = require("./getPreferredLanguageTag.js");
Object.defineProperty(exports, "getPreferredLanguageTag", { enumerable: true, get: function () { return getPreferredLanguageTag_js_1.default; } });
var getTag_js_1 = require("./getTag.js");
Object.defineProperty(exports, "getTag", { enumerable: true, get: function () { return getTag_js_1.default; } });
var getSubTag_js_1 = require("./getSubTag.js");
Object.defineProperty(exports, "getSubTag", { enumerable: true, get: function () { return getSubTag_js_1.default; } });
var indexes_js_1 = require("./indexes.js");
Object.defineProperty(exports, "indexes", { enumerable: true, get: function () { return indexes_js_1.default; } });
var normalizeLanguageTagCasing_js_1 = require("./normalizeLanguageTagCasing.js");
Object.defineProperty(exports, "normalizeLanguageTagCasing", { enumerable: true, get: function () { return normalizeLanguageTagCasing_js_1.default; } });
var rfc5646RegExp_js_1 = require("./rfc5646RegExp.js");
Object.defineProperty(exports, "createRFC5646Regexp", { enumerable: true, get: function () { return rfc5646RegExp_js_1.default; } });
__exportStar(require("./types.js"), exports);
//# sourceMappingURL=index.js.map