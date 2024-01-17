"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('getMacroLanguage()', () => {
    it('works', () => {
        expect((0, _1.getMacroLanguage)('yue')).toMatchObject({ Scope: 'macrolanguage', Subtag: 'zh' });
    });
});
//# sourceMappingURL=getMacroLanguage.spec.js.map