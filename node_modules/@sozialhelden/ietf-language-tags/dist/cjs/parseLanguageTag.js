"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invariant_js_1 = require("./invariant.js");
const normalizeLanguageTagCasing_js_1 = require("./normalizeLanguageTagCasing.js");
const rfc5646RegExp_js_1 = require("./rfc5646RegExp.js");
function parseLanguageTag(inputTag, ignoreErrors = false, log = console.log) {
    if (inputTag.match(/_/)) {
        (0, invariant_js_1.default)(invariant_js_1.errorMessages.underscoresFound(inputTag), ignoreErrors, log);
        return undefined;
    }
    if (inputTag === '') {
        (0, invariant_js_1.default)(invariant_js_1.errorMessages.emptyTag, ignoreErrors, log);
        return undefined;
    }
    const tag = (0, normalizeLanguageTagCasing_js_1.default)(inputTag);
    const match = tag.match(rfc5646RegExp_js_1.rfc5646RegExp);
    if (!match || !match.groups) {
        (0, invariant_js_1.default)(invariant_js_1.errorMessages.invalidTag(inputTag), ignoreErrors, log);
        return undefined;
    }
    const { groups } = match;
    const extensions = {};
    let extensionsAreValid = true;
    if (groups.extensions) {
        const matches = groups.extensions
            .toLowerCase()
            .match(/(?:[0-9a-wy-z](?:-[a-z0-9]{2,8})+)/g);
        Array.from(matches || []).forEach((extension) => {
            const previousValue = extensions[extension[0]];
            if (previousValue) {
                (0, invariant_js_1.default)(invariant_js_1.errorMessages.invalidExtension(tag, extension, previousValue), ignoreErrors, log);
                extensionsAreValid = false;
            }
            extensions[extension[0]] = extension.slice(2);
        });
    }
    if (!extensionsAreValid) {
        return undefined;
    }
    const variants = groups.variants ? groups.variants.split(/-/).filter((s) => s !== '') : undefined;
    const uniqueVariants = new Set(variants);
    if (variants && variants.length !== uniqueVariants.size) {
        const firstDuplicateVariant = Array.from(uniqueVariants).find((variant) => variants.filter((v) => v === variant).length > 1);
        if (firstDuplicateVariant) {
            (0, invariant_js_1.default)(invariant_js_1.errorMessages.duplicateVariant(tag, firstDuplicateVariant), ignoreErrors, log);
            return undefined;
        }
    }
    const result = {
        variants,
        extensions: groups.extensions ? extensions : undefined,
        extlang: groups.extlang,
        grandfathered: groups.grandfathered,
        langtag: groups.langtag,
        language: groups.language,
        privateuse: groups.privateuse || groups.privateuse2,
        region: groups.region,
        script: groups.script,
    };
    Object.keys(result).forEach((k) => {
        const value = result[k];
        if (typeof value === 'undefined' || value === '') {
            delete result[k];
        }
    });
    return result;
}
exports.default = parseLanguageTag;
//# sourceMappingURL=parseLanguageTag.js.map