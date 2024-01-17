import { getMacroLanguage } from '.';
describe('getMacroLanguage()', () => {
    it('works', () => {
        expect(getMacroLanguage('yue')).toMatchObject({ Scope: 'macrolanguage', Subtag: 'zh' });
    });
});
//# sourceMappingURL=getMacroLanguage.spec.js.map