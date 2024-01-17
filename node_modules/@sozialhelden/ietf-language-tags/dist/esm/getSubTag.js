import indexes from './indexes.js';
export default function getSubTag(type, subTag) {
    const index = indexes[type][subTag.toLowerCase()];
    return indexes.registry[index];
}
//# sourceMappingURL=getSubTag.js.map