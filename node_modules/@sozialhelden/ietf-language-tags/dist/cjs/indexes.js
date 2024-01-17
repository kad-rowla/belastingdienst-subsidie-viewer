"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastUpdatedAt = exports.lastUpdatedAtString = void 0;
const collection_json_js_1 = require("./json/collection.json.js");
const extlang_json_js_1 = require("./json/extlang.json.js");
const grandfathered_json_js_1 = require("./json/grandfathered.json.js");
const index_json_js_1 = require("./json/index.json.js");
const language_json_js_1 = require("./json/language.json.js");
const macrolanguage_json_js_1 = require("./json/macrolanguage.json.js");
const meta_json_js_1 = require("./json/meta.json.js");
const private_use_json_js_1 = require("./json/private-use.json.js");
const redundant_json_js_1 = require("./json/redundant.json.js");
const region_json_js_1 = require("./json/region.json.js");
const registry_json_js_1 = require("./json/registry.json.js");
const script_json_js_1 = require("./json/script.json.js");
const special_json_js_1 = require("./json/special.json.js");
const variant_json_js_1 = require("./json/variant.json.js");
const generateAlphabeticRange_js_1 = require("./generateAlphabeticRange.js");
const indexes = {
    collection: collection_json_js_1.default,
    extlang: extlang_json_js_1.default,
    grandfathered: grandfathered_json_js_1.default,
    index: index_json_js_1.default,
    language: language_json_js_1.default,
    macrolanguage: macrolanguage_json_js_1.default,
    meta: meta_json_js_1.default,
    privateuse: private_use_json_js_1.default,
    redundant: redundant_json_js_1.default,
    region: region_json_js_1.default,
    registry: registry_json_js_1.default,
    script: script_json_js_1.default,
    special: special_json_js_1.default,
    variant: variant_json_js_1.default,
};
[indexes.script, indexes.region, indexes.privateuse, indexes.language].forEach((indexToExtend) => {
    Object.keys(indexToExtend).forEach((key) => {
        if (key.match('..')) {
            (0, generateAlphabeticRange_js_1.default)(key).forEach((generatedKey) => {
                indexToExtend[generatedKey] = indexToExtend[key];
            });
        }
    });
});
exports.default = indexes;
exports.lastUpdatedAtString = new Date(indexes.meta['File-Date']);
exports.lastUpdatedAt = new Date(exports.lastUpdatedAtString);
//# sourceMappingURL=indexes.js.map