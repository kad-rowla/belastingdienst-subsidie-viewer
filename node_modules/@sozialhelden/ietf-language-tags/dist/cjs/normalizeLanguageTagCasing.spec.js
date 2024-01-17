"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('normalizeLanguageTagCasing()', () => {
    it('changes region code subtags to uppercase', () => {
        expect((0, _1.normalizeLanguageTagCasing)('de-de')).toBe('de-DE');
        expect((0, _1.normalizeLanguageTagCasing)('sGn-Be-fR')).toBe('sgn-BE-FR');
    });
    it('does not break when using numbers as region subtags', () => {
        expect((0, _1.normalizeLanguageTagCasing)('de-276')).toBe('de-276');
    });
    it('changes language code subtags to lowercase', () => {
        expect((0, _1.normalizeLanguageTagCasing)('En')).toBe('en');
        expect((0, _1.normalizeLanguageTagCasing)('dE-1901')).toBe('de-1901');
    });
    it('title-cases script subtags', () => {
        expect((0, _1.normalizeLanguageTagCasing)('zh-haNs')).toBe('zh-Hans');
    });
    it('lowercases extensions or private use tags', () => {
        expect((0, _1.normalizeLanguageTagCasing)('x-BLAM')).toBe('x-blam');
        expect((0, _1.normalizeLanguageTagCasing)('a-sLoRp')).toBe('a-slorp');
    });
    it('does not uppercase substrings that look like region subtags but are part private use subtags', () => {
        expect((0, _1.normalizeLanguageTagCasing)('en-ca-x-CA')).toBe('en-CA-x-ca');
    });
    it('does not uppercase the first letter of a subtag that looks like a script but is a private use subtag', () => {
        expect((0, _1.normalizeLanguageTagCasing)('az-laTn-x-latN')).toBe('az-Latn-x-latn');
    });
    it('does not title-case subtags that look like scripts after singletons', () => {
        expect((0, _1.normalizeLanguageTagCasing)('SR-qAAA-rs-A-TEsT-0-foobar-x-PhOnEbK')).toBe('sr-Qaaa-RS-a-test-0-foobar-x-phonebk');
    });
});
//# sourceMappingURL=normalizeLanguageTagCasing.spec.js.map