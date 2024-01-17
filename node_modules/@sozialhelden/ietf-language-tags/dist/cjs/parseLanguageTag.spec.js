"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('parseLanguageTag()', () => {
    describe('reactions to valid tags', () => {
        it('accepts simple language subtags', () => {
            expect((0, _1.parseLanguageTag)('de')).toEqual({
                langtag: 'de',
                language: 'de',
            });
            expect((0, _1.parseLanguageTag)('fr')).toEqual({
                langtag: 'fr',
                language: 'fr',
            });
            expect((0, _1.parseLanguageTag)('ja')).toEqual({
                langtag: 'ja',
                language: 'ja',
            });
        });
        it('accepts grandfathered tags', () => {
            expect((0, _1.parseLanguageTag)('i-enochian')).toEqual({
                grandfathered: 'i-enochian',
            });
        });
        it('accepts Language subtag plus Script subtag', () => {
            expect((0, _1.parseLanguageTag)('zh-Hant')).toEqual({
                langtag: 'zh-Hant',
                language: 'zh',
                script: 'Hant',
            });
            expect((0, _1.parseLanguageTag)('zh-Hans')).toEqual({
                langtag: 'zh-Hans',
                language: 'zh',
                script: 'Hans',
            });
            expect((0, _1.parseLanguageTag)('sr-Cyrl')).toEqual({
                langtag: 'sr-Cyrl',
                language: 'sr',
                script: 'Cyrl',
            });
            expect((0, _1.parseLanguageTag)('sr-Latn')).toEqual({
                langtag: 'sr-Latn',
                language: 'sr',
                script: 'Latn',
            });
        });
        it('accepts Extended language subtags and their primary language subtag counterparts', () => {
            expect((0, _1.parseLanguageTag)('zh-cmn-Hans-CN')).toEqual({
                extlang: 'cmn',
                langtag: 'zh-cmn-Hans-CN',
                language: 'zh-cmn',
                region: 'CN',
                script: 'Hans',
            });
            expect((0, _1.parseLanguageTag)('cmn-Hans-CN')).toEqual({
                langtag: 'cmn-Hans-CN',
                language: 'cmn',
                region: 'CN',
                script: 'Hans',
            });
            expect((0, _1.parseLanguageTag)('zh-yue-HK')).toEqual({
                extlang: 'yue',
                langtag: 'zh-yue-HK',
                language: 'zh-yue',
                region: 'HK',
            });
            expect((0, _1.parseLanguageTag)('yue-HK')).toEqual({
                langtag: 'yue-HK',
                language: 'yue',
                region: 'HK',
            });
        });
        it('accepts Language-Script-Region', () => {
            expect((0, _1.parseLanguageTag)('zh-Hans-CN')).toEqual({
                langtag: 'zh-Hans-CN',
                language: 'zh',
                region: 'CN',
                script: 'Hans',
            });
            expect((0, _1.parseLanguageTag)('sr-Latn-RS')).toEqual({
                langtag: 'sr-Latn-RS',
                language: 'sr',
                region: 'RS',
                script: 'Latn',
            });
        });
        it('accepts Language-Variant', () => {
            expect((0, _1.parseLanguageTag)('zh-pinyin')).toEqual({
                langtag: 'zh-pinyin',
                language: 'zh',
                variants: ['pinyin'],
            });
            expect((0, _1.parseLanguageTag)('sl-rozaj')).toEqual({
                langtag: 'sl-rozaj',
                language: 'sl',
                variants: ['rozaj'],
            });
            expect((0, _1.parseLanguageTag)('sl-rozaj-biske')).toEqual({
                langtag: 'sl-rozaj-biske',
                language: 'sl',
                variants: ['rozaj', 'biske'],
            });
            expect((0, _1.parseLanguageTag)('sl-nedis')).toEqual({
                langtag: 'sl-nedis',
                language: 'sl',
                variants: ['nedis'],
            });
        });
        it('accepts Language-Region-Variant', () => {
            expect((0, _1.parseLanguageTag)('de-CH-1901')).toEqual({
                langtag: 'de-CH-1901',
                language: 'de',
                region: 'CH',
                variants: ['1901'],
            });
            expect((0, _1.parseLanguageTag)('sl-IT-nedis')).toEqual({
                langtag: 'sl-IT-nedis',
                language: 'sl',
                region: 'IT',
                variants: ['nedis'],
            });
        });
        it('accepts Language-Script-Region-Variant', () => {
            expect((0, _1.parseLanguageTag)('hy-Latn-IT-arevela')).toEqual({
                langtag: 'hy-Latn-IT-arevela',
                language: 'hy',
                region: 'IT',
                script: 'Latn',
                variants: ['arevela'],
            });
        });
        it('accepts Language-Region', () => {
            expect((0, _1.parseLanguageTag)('de-DE')).toEqual({
                langtag: 'de-DE',
                language: 'de',
                region: 'DE',
            });
            expect((0, _1.parseLanguageTag)('en-US')).toEqual({
                langtag: 'en-US',
                language: 'en',
                region: 'US',
            });
            expect((0, _1.parseLanguageTag)('es-419')).toEqual({
                langtag: 'es-419',
                language: 'es',
                region: '419',
            });
        });
        it('normalizes case of the given subtags according to common practice', () => {
            expect((0, _1.parseLanguageTag)('en-us')).toEqual({
                langtag: 'en-US',
                language: 'en',
                region: 'US',
            });
            expect((0, _1.parseLanguageTag)('SR-qAAA-rs-A-TEsT-0-foobar-X-PhOnEbK')).toEqual({
                extensions: {
                    0: 'foobar',
                    a: 'test',
                },
                langtag: 'sr-Qaaa-RS-a-test-0-foobar-x-phonebk',
                language: 'sr',
                privateuse: 'x-phonebk',
                region: 'RS',
                script: 'Qaaa',
            });
        });
        it('accepts private use subtags', () => {
            expect((0, _1.parseLanguageTag)('de-CH-x-phonebk')).toEqual({
                langtag: 'de-CH-x-phonebk',
                language: 'de',
                privateuse: 'x-phonebk',
                region: 'CH',
            });
            expect((0, _1.parseLanguageTag)('az-Arab-x-AZE-derbend')).toEqual({
                langtag: 'az-Arab-x-aze-derbend',
                language: 'az',
                privateuse: 'x-aze-derbend',
                script: 'Arab',
            });
        });
        it('accepts private use registry values', () => {
            expect((0, _1.parseLanguageTag)('x-whatever')).toEqual({
                privateuse: 'x-whatever',
            });
            expect((0, _1.parseLanguageTag)('qaa-Qaaa-QM-x-southern')).toEqual({
                langtag: 'qaa-Qaaa-QM-x-southern',
                language: 'qaa',
                privateuse: 'x-southern',
                region: 'QM',
                script: 'Qaaa',
            });
            expect((0, _1.parseLanguageTag)('de-Qaaa')).toEqual({
                langtag: 'de-Qaaa',
                language: 'de',
                script: 'Qaaa',
            });
            expect((0, _1.parseLanguageTag)('sr-Latn-QM')).toEqual({
                langtag: 'sr-Latn-QM',
                language: 'sr',
                region: 'QM',
                script: 'Latn',
            });
            expect((0, _1.parseLanguageTag)('sr-Qaaa-RS')).toEqual({
                langtag: 'sr-Qaaa-RS',
                language: 'sr',
                region: 'RS',
                script: 'Qaaa',
            });
        });
    });
    describe('reactions to invalid tags', () => {
        it('prints errors to the console when supplying `true` as second parameter', () => {
            let loggedString;
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation((s) => { loggedString = s; });
            expect((0, _1.parseLanguageTag)('a-DE', true)).toBeUndefined();
            expect(loggedString).toMatch(/Could not interpret ‘a-DE’/);
            consoleSpy.mockRestore();
        });
        it("doesn't accept empty strings as tags", () => {
            expect(() => (0, _1.parseLanguageTag)('', false)).toThrowError(/empty/);
            expect((0, _1.parseLanguageTag)('', true)).toBeUndefined();
        });
        it("doesn't accept underscores in tags, as they are a typical mistake", () => {
            expect(() => (0, _1.parseLanguageTag)('en_NZ', false)).toThrowError(/underscore/);
            expect((0, _1.parseLanguageTag)('en_NZ', true)).toBeUndefined();
        });
        it("doesn't accept two region tags (not ignoring the error, throwing)", () => {
            expect(() => (0, _1.parseLanguageTag)('de-419-DE', false)).toThrowError(/de-419-DE/);
        });
        it('doesn\'t accept use of a single-character subtag in primary position; note that there are a few grandfathered tags that start with "i-" that are valid', () => {
            expect(() => (0, _1.parseLanguageTag)('a-DE', false)).toThrowError(/Could not interpret ‘a-DE’/);
        });
        it("doesn't accept two extensions with same single-letter prefix", () => {
            expect(() => (0, _1.parseLanguageTag)('ar-a-aaa-b-bbb-a-ccc', false)).toThrowError(/‘ar-a-aaa-b-bbb-a-ccc’/);
        });
        it("doesn't accept tags with the same variant twice", () => {
            expect(() => (0, _1.parseLanguageTag)('de-DE-1901-1901', false)).toThrowError(/‘1901’/);
            expect((0, _1.parseLanguageTag)('de-DE-1901-1901', true)).toBeUndefined();
        });
    });
});
//# sourceMappingURL=parseLanguageTag.spec.js.map