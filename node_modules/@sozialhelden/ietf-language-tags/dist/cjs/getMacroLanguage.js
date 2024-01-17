"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexes_js_1 = require("./indexes.js");
function getMacroLanguage(languageCode) {
    const index = indexes_js_1.default.language[languageCode];
    const macrolanguageCode = indexes_js_1.default.registry[index].Macrolanguage;
    const macrolanguage = typeof macrolanguageCode !== 'undefined' && indexes_js_1.default.macrolanguage[macrolanguageCode];
    return macrolanguage ? indexes_js_1.default.registry[macrolanguage] : undefined;
}
exports.default = getMacroLanguage;
//# sourceMappingURL=getMacroLanguage.js.map