import { ILanguageSubtag, ILanguageTag } from './types.js';
export declare function expandTag(parsedLanguageTag: ILanguageSubtag): ILanguageTag | undefined;
export default function getTag(tag: string, ignoreErrors?: boolean): ILanguageTag | undefined;
