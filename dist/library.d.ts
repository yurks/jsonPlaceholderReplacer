export interface DelimiterTag {
    begin: string;
    end: string;
    escapedBeginning?: string;
    escapedEnding?: string;
}
export interface Configuration {
    delimiterTags: DelimiterTag[];
    defaultValueSeparator: string;
    nullishValues: (boolean | number | string | null)[];
}
export declare class JsonPlaceholderReplacer {
    private readonly variablesMap;
    private readonly configuration;
    private readonly delimiterTagsRegex;
    constructor(options?: Partial<Configuration>);
    addVariableMap(variableMap: Record<string, unknown> | string): JsonPlaceholderReplacer;
    setVariableMap(...variablesMap: (Record<string, unknown> | string)[]): JsonPlaceholderReplacer;
    replace(json: object): object;
    private initializeOptions;
    private replaceChildren;
    private replaceValue;
    private replacer;
    private parseTag;
    private checkInEveryMap;
    private navigateThroughMap;
}
