import indexes from './indexes.js';
export default function getMacroLanguage(languageCode) {
    const index = indexes.language[languageCode];
    const macrolanguageCode = indexes.registry[index].Macrolanguage;
    const macrolanguage = typeof macrolanguageCode !== 'undefined' && indexes.macrolanguage[macrolanguageCode];
    return macrolanguage ? indexes.registry[macrolanguage] : undefined;
}
//# sourceMappingURL=getMacroLanguage.js.map