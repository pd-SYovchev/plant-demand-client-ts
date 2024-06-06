import { BuildMiddleware, Pluggable, Provider, RelativeMiddlewareOptions } from "@smithy/types";
interface HttpApiKeyAuthMiddlewareConfig {
    /**
     * Where to put the API key.
     *
     * If the value is `header`, the API key will be transported in the named header,
     * optionally prefixed with the provided scheme.
     *
     * If the value is `query`, the API key will be transported in the named query parameter.
     */
    in: "header" | "query";
    /**
     * The name of the header / query parameter to use for the transporting the API key.
     */
    name: string;
    /**
     * The scheme to use. Only supported when `in` is `header`.
     */
    scheme?: string;
}
export interface HttpApiKeyAuthInputConfig {
    /**
     * The API key to use when making requests.
     *
     * This is optional because some operations may not require an API key.
     */
    apiKey?: string | Provider<string>;
}
export interface ApiKeyPreviouslyResolved {
}
export interface HttpApiKeyAuthResolvedConfig {
    /**
     * The API key to use when making requests.
     *
     * This is optional because some operations may not require an API key.
     */
    apiKey?: Provider<string>;
}
export declare function resolveHttpApiKeyAuthConfig<T>(input: T & ApiKeyPreviouslyResolved & HttpApiKeyAuthInputConfig): T & HttpApiKeyAuthResolvedConfig;
/**
 * Middleware to inject the API key into the HTTP request.
 *
 * The middleware will inject the client's configured API key into the
 * request as defined by the `@httpApiKeyAuth` trait. If the trait says to
 * put the API key into a named header, that header will be used, optionally
 * prefixed with a scheme. If the trait says to put the API key into a named
 * query parameter, that query parameter will be used.
 *
 * @param pluginConfig the client configuration. Includes the function that will return the API key value.
 * @param middlewareConfig the plugin options (location of the parameter, name, and optional scheme)
 * @returns a function that processes the HTTP request and passes it on to the next handler
 */
export declare const httpApiKeyAuthMiddleware: <Input extends object, Output extends object>(pluginConfig: HttpApiKeyAuthResolvedConfig, middlewareConfig: HttpApiKeyAuthMiddlewareConfig) => BuildMiddleware<Input, Output>;
export declare const httpApiKeyAuthMiddlewareOptions: RelativeMiddlewareOptions;
export declare const getHttpApiKeyAuthPlugin: (pluginConfig: HttpApiKeyAuthResolvedConfig, middlewareConfig: HttpApiKeyAuthMiddlewareConfig) => Pluggable<any, any>;
export {};
