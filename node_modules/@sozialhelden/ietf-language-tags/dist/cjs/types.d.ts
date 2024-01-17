export interface IFullIndexEntry {
    extlang: number;
    grandfathered: number;
    language: number;
    redundant: number;
    region: number;
    script: number;
    variant: number;
    collection: number;
    macrolanguage: number;
    privateuse: number;
    special: number;
}
export interface IRegistryEntry {
    Type: string;
    Tag?: string;
    Subtag: string;
    Description?: string[];
    Scope?: string;
    Added: string;
    Deprecated?: string;
    'Preferred-Value'?: string;
    Prefix?: string[];
    Comments?: string[];
    Macrolanguage?: string;
    'Suppress-Script'?: string;
}
export interface ILanguageSubtag {
    langtag?: string;
    language?: string;
    extlang?: string;
    script?: string;
    region?: string;
    variants?: string[];
    extensions?: Record<string, string>;
    privateuse?: string;
    grandfathered?: string;
}
export interface ILanguageTag {
    langtag?: IRegistryEntry;
    language?: IRegistryEntry;
    extlang?: IRegistryEntry;
    script?: IRegistryEntry;
    region?: IRegistryEntry;
    variants?: IRegistryEntry[];
    extensions?: Record<string, IRegistryEntry>;
    privateuse?: IRegistryEntry;
    grandfathered?: IRegistryEntry;
    redundant?: IRegistryEntry;
    variant?: IRegistryEntry;
    collection?: IRegistryEntry;
    macrolanguage?: IRegistryEntry;
    special?: IRegistryEntry;
    parts: ILanguageSubtag;
}
