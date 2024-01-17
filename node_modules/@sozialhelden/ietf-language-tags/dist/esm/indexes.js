import collection from './json/collection.json.js';
import extlang from './json/extlang.json.js';
import grandfathered from './json/grandfathered.json.js';
import index from './json/index.json.js';
import language from './json/language.json.js';
import macrolanguage from './json/macrolanguage.json.js';
import meta from './json/meta.json.js';
import privateuse from './json/private-use.json.js';
import redundant from './json/redundant.json.js';
import region from './json/region.json.js';
import registry from './json/registry.json.js';
import script from './json/script.json.js';
import special from './json/special.json.js';
import variant from './json/variant.json.js';
import generateAlphabeticRange from './generateAlphabeticRange.js';
const indexes = {
    collection,
    extlang,
    grandfathered,
    index,
    language,
    macrolanguage,
    meta,
    privateuse,
    redundant,
    region,
    registry,
    script,
    special,
    variant,
};
[indexes.script, indexes.region, indexes.privateuse, indexes.language].forEach((indexToExtend) => {
    Object.keys(indexToExtend).forEach((key) => {
        if (key.match('..')) {
            generateAlphabeticRange(key).forEach((generatedKey) => {
                indexToExtend[generatedKey] = indexToExtend[key];
            });
        }
    });
});
export default indexes;
export const lastUpdatedAtString = new Date(indexes.meta['File-Date']);
export const lastUpdatedAt = new Date(lastUpdatedAtString);
//# sourceMappingURL=indexes.js.map