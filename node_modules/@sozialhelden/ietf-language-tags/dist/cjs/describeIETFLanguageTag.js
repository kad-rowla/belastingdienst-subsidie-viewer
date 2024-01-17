"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_compact_1 = require("lodash.compact");
const getTag_js_1 = require("./getTag.js");
const parseLanguageTag_js_1 = require("./parseLanguageTag.js");
function wrapPrivateUse(type, tag, descriptionArray) {
    if (descriptionArray[0] === 'Private use') {
        return [`private use ${type} ‘${tag.parts[type]}’`];
    }
    return descriptionArray;
}
function describeIETFLanguageTag(tag) {
    const parsedLanguageTag = (0, parseLanguageTag_js_1.default)(tag, true, null);
    if (!parsedLanguageTag) {
        return `Invalid tag ‘${tag}’`;
    }
    const languageTag = (0, getTag_js_1.expandTag)(parsedLanguageTag);
    const languageName = languageTag
        && languageTag.language
        && languageTag.language.Description
        && languageTag.language.Description[0];
    const variantString = languageTag.variants
        && languageTag.variants
            .map((v) => (v?.Description?.[0] || `‘${v}’ variant`)
            .replace(/^The /, '')
            .replace(languageName || '', '')
            .replace(/^, /, ''))
            .join(' or ');
    const variantPrefix = languageTag.variants
        ? `${variantString}${variantString && variantString.match(/dialect$/) ? '' : ' variant'} of `
        : '';
    const privateUseSuffix = languageTag.privateuse
        ? `private extension ‘${languageTag.privateuse}’`
        : '';
    let description = (variantPrefix
        + (0, lodash_compact_1.default)([
            languageTag.grandfathered && `${languageTag.grandfathered.Description} (grandfathered tag)`,
            languageTag.extlang?.Description?.join(' / '),
            languageTag.macrolanguage?.Description,
            languageTag.collection?.Description,
            languageTag.language?.Description
                && wrapPrivateUse('language', languageTag, languageTag.language.Description).join(' / '),
            languageTag.script?.Description
                && `written in ${wrapPrivateUse('script', languageTag, languageTag.script.Description).join('/')} script`,
            languageTag.region?.Description
                && `as used in ${wrapPrivateUse('region', languageTag, languageTag.region.Description)}`,
            languageTag.redundant?.Description,
            languageTag.special?.Description,
            languageTag.extensions
                && `Extensions: ${languageTag.extensions}`,
        ]).join(', ')).replace(/\s+/g, ' ');
    if (privateUseSuffix) {
        if (description) {
            description += ` (with ${privateUseSuffix})`;
        }
        else {
            description += privateUseSuffix;
        }
    }
    return description.length > 0 ? description : '(undefined tag)';
}
exports.default = describeIETFLanguageTag;
//# sourceMappingURL=describeIETFLanguageTag.js.map