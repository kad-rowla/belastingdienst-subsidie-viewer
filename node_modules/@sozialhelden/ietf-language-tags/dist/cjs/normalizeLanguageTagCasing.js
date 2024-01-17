"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeLanguageTagCasing(tag) {
    const parts = tag.split(/-/);
    return parts
        .map((part, index) => {
        if (index !== 0 && parts[index - 1].length !== 1) {
            if (part.length === 2) {
                return part.toUpperCase();
            }
            if (part.length === 4) {
                return `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`;
            }
        }
        return part.toLowerCase();
    })
        .join('-');
}
exports.default = normalizeLanguageTagCasing;
//# sourceMappingURL=normalizeLanguageTagCasing.js.map