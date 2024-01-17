"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexes_js_1 = require("./indexes.js");
function getPreferredLanguageTag(languageSubtag) {
    const indexEntry = indexes_js_1.default.index[languageSubtag.toLowerCase()];
    if (indexEntry) {
        if (indexEntry.grandfathered) {
            const entry = indexes_js_1.default.registry[indexEntry.grandfathered];
            return entry['Preferred-Value'];
        }
        if (indexEntry.redundant) {
            const entry = indexes_js_1.default.registry[indexEntry.redundant];
            return entry['Preferred-Value'];
        }
    }
    return undefined;
}
exports.default = getPreferredLanguageTag;
//# sourceMappingURL=getPreferredLanguageTag.js.map