export declare const config: {
    generatorTools: {
        title: string;
        description: string;
        type: string;
        default: boolean;
        order: number;
    };
    browseTools: {
        title: string;
        description: string;
        type: string;
        default: boolean;
        order: number;
    };
    settings: {
        title: string;
        description: string;
        type: string;
        default: boolean;
        order: number;
    };
    devTools: {
        title: string;
        description: string;
        type: string;
        default: boolean;
        order: number;
    };
    enableIdentify: {
        title: string;
        description: string;
        type: string;
        default: boolean;
        order: number;
    };
};
export declare function getConfig(key: any): any;
