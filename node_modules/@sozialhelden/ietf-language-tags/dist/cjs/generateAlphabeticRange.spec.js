"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const generateAlphabeticRange_js_1 = require("./generateAlphabeticRange.js");
describe('nextString()', () => {
    it("returns 'a' when given empty string", () => {
        expect((0, generateAlphabeticRange_js_1.nextString)('')).toBe('a');
    });
    it('counts up alphabetically', () => {
        expect((0, generateAlphabeticRange_js_1.nextString)('a')).toBe('b');
    });
    it("wraps to 'aa' after 'z'", () => {
        expect((0, generateAlphabeticRange_js_1.nextString)('z')).toBe('aa');
    });
    it('carries wrapping over more than once', () => {
        expect((0, generateAlphabeticRange_js_1.nextString)('bzzz')).toBe('caaa');
    });
});
describe('generateAlphabeticRange()', () => {
    it("wraps after 'z'", () => {
        expect((0, _1.generateAlphabeticRange)('z..aa')).toEqual(['z', 'aa']);
    });
    it('works when given a single string with no range', () => {
        expect((0, _1.generateAlphabeticRange)('aaa')).toEqual(['aaa']);
    });
    it('works with ..', () => {
        expect((0, _1.generateAlphabeticRange)('a..c')).toEqual(['a', 'b', 'c']);
    });
    it('works with ...', () => {
        expect((0, _1.generateAlphabeticRange)('a...c')).toEqual(['a', 'b', 'c']);
    });
    it('produces sequences with varying length', () => {
        expect((0, _1.generateAlphabeticRange)('y...ab')).toEqual(['y', 'z', 'aa', 'ab']);
    });
    it('produces a longer sequence', () => {
        expect((0, _1.generateAlphabeticRange)('z...bb')).toEqual([
            'z',
            'aa',
            'ab',
            'ac',
            'ad',
            'ae',
            'af',
            'ag',
            'ah',
            'ai',
            'aj',
            'ak',
            'al',
            'am',
            'an',
            'ao',
            'ap',
            'aq',
            'ar',
            'as',
            'at',
            'au',
            'av',
            'aw',
            'ax',
            'ay',
            'az',
            'ba',
            'bb',
        ]);
    });
    it('throws if beginning is missing', () => {
        expect(() => (0, _1.generateAlphabeticRange)('...ab')).toThrowError(/beginning/);
    });
    it('can exclude the end if wanted', () => {
        expect((0, _1.generateAlphabeticRange)('aaaaa..aaaad', false)).toEqual(['aaaaa', 'aaaab', 'aaaac']);
        expect((0, _1.generateAlphabeticRange)('z..aa', false)).toEqual(['z']);
    });
});
//# sourceMappingURL=generateAlphabeticRange.spec.js.map