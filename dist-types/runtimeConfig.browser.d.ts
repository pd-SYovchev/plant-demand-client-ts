import { FetchHttpHandler as RequestHandler } from "@smithy/fetch-http-handler";
import { PlantDemandServiceClientConfig } from "./PlantDemandServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: PlantDemandServiceClientConfig) => {
    runtime: string;
    defaultsMode: import("@smithy/types").Provider<import("@smithy/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    defaultUserAgentProvider: import("@smithy/types").Provider<import("@smithy/types").UserAgent>;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    requestHandler: ((import("@smithy/types").RequestHandler<any, any, import("@smithy/types").HttpHandlerOptions> | Record<string, unknown> | import("@smithy/types").NodeHttpHandlerOptions | import("@smithy/fetch-http-handler").FetchHttpHandlerOptions) & import("@smithy/types").RequestHandler<import("@smithy/protocol-http").HttpRequest, import("@smithy/protocol-http").HttpResponse, import("@smithy/types").HttpHandlerOptions> & {
        updateHttpClientConfig(key: never, value: never): void;
        httpHandlerConfigs(): {};
    }) | RequestHandler;
    retryMode: string | import("@smithy/types").Provider<string>;
    sha256: import("@smithy/types").HashConstructor;
    streamCollector: import("@smithy/types").StreamCollector;
    apiVersion: string;
    urlParser: import("@smithy/types").UrlParser;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: string | Uint8Array) => string;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: string | Uint8Array) => string;
    disableHostPrefix: boolean;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    endpoint: string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint>;
    tls?: boolean | undefined;
    useDualstackEndpoint?: boolean | import("@smithy/types").Provider<boolean> | undefined;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2 | undefined;
    customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
    apiKey?: string | import("@smithy/types").Provider<string> | undefined;
};
