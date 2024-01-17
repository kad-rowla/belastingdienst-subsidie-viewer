import { ILanguageSubtag } from './types.js';
export default function parseLanguageTag(inputTag: string, ignoreErrors?: boolean, log?: ((message: string) => void) | null): ILanguageSubtag | undefined;
