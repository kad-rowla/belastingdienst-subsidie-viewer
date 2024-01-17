"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfc5646RegExp = void 0;
const indexes_js_1 = require("./indexes.js");
function matchKey(record) {
    const joinedKeys = Object.keys(record)
        .map((k) => k.replace(/\./g, '\\.'))
        .join('|');
    return `(?:${joinedKeys})`;
}
function createRFC5646Regexp(useRegistry = false) {
    const grandfathered = matchKey(indexes_js_1.default.grandfathered);
    const extlang = `(?<extlang>${useRegistry ? matchKey(indexes_js_1.default.extlang) : '(?:[a-z]{3}(?:-[a-z]{3}){0,2})'})`;
    const script = useRegistry ? matchKey(indexes_js_1.default.script) : '[a-z]{4}';
    const region = useRegistry ? matchKey(indexes_js_1.default.region) : '(?:[a-z]{2}|[0-9]{3})';
    const variant = useRegistry ? matchKey(indexes_js_1.default.variant) : '(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3})';
    const singleton = '[0-9a-wy-z]';
    const extension = `${singleton}(?:-[a-z0-9]{2,8})+`;
    const privateuse = 'x(?:-[a-z0-9]{1,8})+';
    const language = useRegistry
        ? matchKey(indexes_js_1.default.language)
        : `(?:[a-z]{2,3}(?:-${extlang})?|[a-z]{4}|[a-z]{5,8})`;
    const langtag = `
    (?<language>${language})
    (-(?<script>${script}))?
    (-(?<region>${region}))?
    (?<variants>(?:-${variant})*)
    (?<extensions>(?:-${extension})*)
    (?:-(?<privateuse>(?:${privateuse})))?
  `;
    const fullTag = `^(?:(?<langtag>${langtag})|(?<privateuse2>${privateuse})|(?<grandfathered>${grandfathered}))$`;
    const fullTagWithoutWhitespaces = fullTag.replace(/[\s\t\n]/g, '');
    return new RegExp(fullTagWithoutWhitespaces, 'i');
}
exports.default = createRFC5646Regexp;
exports.rfc5646RegExp = createRFC5646Regexp();
//# sourceMappingURL=rfc5646RegExp.js.map