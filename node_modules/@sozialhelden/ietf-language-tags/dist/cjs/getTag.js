"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandTag = void 0;
const getSubTag_js_1 = require("./getSubTag.js");
const parseLanguageTag_js_1 = require("./parseLanguageTag.js");
const fields = [
    'language',
    'extlang',
    'grandfathered',
    'redundant',
    'region',
    'script',
    'variants',
    'collection',
    'macrolanguage',
    'privateuse',
    'special',
];
function expandTag(parsedLanguageTag) {
    const languageTag = { parts: parsedLanguageTag };
    fields.forEach((type) => {
        const subTagObjectOrNameString = parsedLanguageTag[type];
        if (!subTagObjectOrNameString || type === 'parts') {
            return;
        }
        if (type === 'langtag'
            || type === 'extensions'
            || type === 'privateuse'
            || type === 'special') {
            languageTag[type] = subTagObjectOrNameString;
            return;
        }
        if (type === 'variants') {
            languageTag.variants = subTagObjectOrNameString.map((variant) => (0, getSubTag_js_1.default)('variant', variant));
            return;
        }
        const subTag = (0, getSubTag_js_1.default)(type, subTagObjectOrNameString);
        if (subTag) {
            languageTag[type] = subTag;
        }
    });
    return languageTag;
}
exports.expandTag = expandTag;
function getTag(tag, ignoreErrors = false) {
    const parsedLanguageTag = (0, parseLanguageTag_js_1.default)(tag, ignoreErrors);
    if (!parsedLanguageTag) {
        return undefined;
    }
    return expandTag(parsedLanguageTag);
}
exports.default = getTag;
//# sourceMappingURL=getTag.js.map