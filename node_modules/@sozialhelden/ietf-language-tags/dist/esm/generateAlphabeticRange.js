export function nextString(input) {
    if (input.length === 0) {
        return 'a';
    }
    if (input[input.length - 1] === 'z') {
        const prefix = nextString(input.substr(0, input.length - 1));
        return `${prefix}a`;
    }
    return (input.substring(0, input.length - 1)
        + String.fromCharCode(input[input.length - 1].charCodeAt(0) + 1));
}
export default function generateAlphabeticRange(rangeString, includeRangeEnd = true) {
    const [begin, end] = rangeString.toLowerCase().split(/\.\.\.?/);
    if (!begin) {
        throw new Error('Please supply a range that has a beginning.');
    }
    let currentValue = begin;
    const result = [];
    do {
        result.push(currentValue);
        currentValue = nextString(currentValue);
    } while ((end && currentValue.length < end.length)
        || (includeRangeEnd ? currentValue <= end : currentValue < end));
    return result;
}
//# sourceMappingURL=generateAlphabeticRange.js.map