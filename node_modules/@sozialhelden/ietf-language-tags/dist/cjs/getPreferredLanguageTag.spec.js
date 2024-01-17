"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('getPreferredLanguageTag()', () => {
    it('returns a shorter tag', () => {
        expect((0, _1.getPreferredLanguageTag)('zh-yue')).toBe('yue');
    });
    it('works with Klingon', () => {
        expect((0, _1.getPreferredLanguageTag)('i-klingon')).toBe('tlh');
    });
    it('returns undefined for an undefined tag', () => {
        expect((0, _1.getPreferredLanguageTag)('')).toBeUndefined();
    });
});
//# sourceMappingURL=getPreferredLanguageTag.spec.js.map