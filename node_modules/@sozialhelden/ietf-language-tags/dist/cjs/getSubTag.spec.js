"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('getSubTag()', () => {
    it('returns a region subtag requested in uppercase', () => {
        expect((0, _1.getSubTag)('region', 'RS')).toMatchObject({ Description: ['Serbia'] });
    });
    it('returns a region subtag requested in lowercase', () => {
        expect((0, _1.getSubTag)('region', 'sr')).toMatchObject({ Description: ['Suriname'] });
    });
    it('returns a private-use region subtag', () => {
        expect((0, _1.getSubTag)('region', 'qz')).toMatchObject({ Description: ['Private use'] });
    });
    it('returns a collection subtag', () => {
        expect((0, _1.getSubTag)('collection', 'sgn')).toMatchObject({ Description: ['Sign languages'] });
    });
    it('returns a extlang subtag', () => {
        expect((0, _1.getSubTag)('extlang', 'hsn')).toMatchObject({ Description: ['Xiang Chinese'] });
    });
    it('returns a grandfathered subtag', () => {
        expect((0, _1.getSubTag)('grandfathered', 'i-klingon')).toMatchObject({ 'Preferred-Value': 'tlh' });
    });
    it('returns a language subtag', () => {
        expect((0, _1.getSubTag)('language', 'ker')).toMatchObject({ Description: ['Kera'] });
    });
    it('returns a macrolanguage subtag', () => {
        expect((0, _1.getSubTag)('macrolanguage', 'zh')).toMatchObject({ Description: ['Chinese'] });
    });
    it('returns a known privateuse subtag', () => {
        expect((0, _1.getSubTag)('privateuse', 'qaa')).toMatchObject({ Description: ['Private use'] });
    });
    it('returns another known privateuse subtag', () => {
        expect((0, _1.getSubTag)('privateuse', 'qbb')).toMatchObject({ Description: ['Private use'] });
    });
    it('returns a redundant subtag', () => {
        expect((0, _1.getSubTag)('redundant', 'de-ch-1996')).toMatchObject({
            Description: ['German, Swiss variant, orthography of 1996'],
        });
    });
    it('returns a script subtag', () => {
        expect((0, _1.getSubTag)('script', 'Hans')).toMatchObject({ Description: ['Han (Simplified variant)'] });
    });
    it('returns a private-use script subtag', () => {
        expect((0, _1.getSubTag)('script', 'Qaaa')).toMatchObject({ Description: ['Private use'] });
    });
    it('returns a special subtag', () => {
        expect((0, _1.getSubTag)('special', 'und')).toMatchObject({ Description: ['Undetermined'] });
    });
    it('returns a variant subtag', () => {
        expect((0, _1.getSubTag)('variant', 'xsistemo')).toMatchObject({
            Description: ['Standard X-system orthographic fallback for spelling Esperanto'],
        });
    });
    it('returns `undefined`', () => {
        expect((0, _1.getSubTag)('variant', 'This does not exist!')).toBeUndefined();
    });
});
//# sourceMappingURL=getSubTag.spec.js.map