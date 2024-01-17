export default function invariant(message: string, ignoreErrors: boolean, log: ((message: string) => void) | null): void;
export declare const errorMessages: {
    duplicateVariant: (tag: string, variant: string) => string;
    emptyTag: string;
    invalidExtension: (tag: string, extension: string, previousValue: string) => string;
    invalidTag: (inputTag: string) => string;
    underscoresFound: (inputTag: string) => string;
};
