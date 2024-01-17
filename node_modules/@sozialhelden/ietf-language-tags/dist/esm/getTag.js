import getSubTag from './getSubTag.js';
import parseLanguageTag from './parseLanguageTag.js';
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
export function expandTag(parsedLanguageTag) {
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
            languageTag.variants = subTagObjectOrNameString.map((variant) => getSubTag('variant', variant));
            return;
        }
        const subTag = getSubTag(type, subTagObjectOrNameString);
        if (subTag) {
            languageTag[type] = subTag;
        }
    });
    return languageTag;
}
export default function getTag(tag, ignoreErrors = false) {
    const parsedLanguageTag = parseLanguageTag(tag, ignoreErrors);
    if (!parsedLanguageTag) {
        return undefined;
    }
    return expandTag(parsedLanguageTag);
}
//# sourceMappingURL=getTag.js.map