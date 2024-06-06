import { PlantDemandServiceClientConfig } from "./PlantDemandServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: PlantDemandServiceClientConfig) => {
    runtime: string;
    sha256: import("@smithy/types").HashConstructor;
    requestHandler: ((import("@smithy/types").RequestHandler<any, any, import("@smithy/types").HttpHandlerOptions> | Record<string, unknown> | import("@smithy/types").NodeHttpHandlerOptions | import("@smithy/types").FetchHttpHandlerOptions) & import("@smithy/types").RequestHandler<import("@smithy/protocol-http").HttpRequest, import("@smithy/protocol-http").HttpResponse, import("@smithy/types").HttpHandlerOptions> & {
        updateHttpClientConfig(key: never, value: never): void;
        httpHandlerConfigs(): {};
    }) | import("@smithy/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    urlParser: import("@smithy/types").UrlParser;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    streamCollector: import("@smithy/types").StreamCollector;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: string | Uint8Array) => string;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: string | Uint8Array) => string;
    disableHostPrefix: boolean;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    retryMode: string | import("@smithy/types").Provider<string>;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    defaultsMode: import("@smithy/smithy-client").DefaultsMode | import("@smithy/types").Provider<import("@smithy/smithy-client").DefaultsMode>;
    endpoint: string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint>;
    tls?: boolean | undefined;
    useDualstackEndpoint?: boolean | import("@smithy/types").Provider<boolean> | undefined;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2 | undefined;
    customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
    apiKey?: string | import("@smithy/types").Provider<string> | undefined;
};
