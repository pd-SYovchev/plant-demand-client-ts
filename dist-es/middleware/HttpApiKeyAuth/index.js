import { HttpRequest } from "@smithy/protocol-http";
import { normalizeProvider } from "@smithy/util-middleware";
export function resolveHttpApiKeyAuthConfig(input) {
    return {
        ...input,
        apiKey: input.apiKey ? normalizeProvider(input.apiKey) : undefined,
    };
}
export const httpApiKeyAuthMiddleware = (pluginConfig, middlewareConfig) => (next) => async (args) => {
    if (!HttpRequest.isInstance(args.request))
        return next(args);
    const apiKey = pluginConfig.apiKey && (await pluginConfig.apiKey());
    if (!apiKey) {
        return next(args);
    }
    return next({
        ...args,
        request: {
            ...args.request,
            headers: {
                ...args.request.headers,
                ...(middlewareConfig.in === "header" && {
                    [middlewareConfig.name.toLowerCase()]: middlewareConfig.scheme
                        ? `${middlewareConfig.scheme} ${apiKey}`
                        : apiKey,
                }),
            },
            query: {
                ...args.request.query,
                ...(middlewareConfig.in === "query" && { [middlewareConfig.name]: apiKey }),
            },
        },
    });
};
export const httpApiKeyAuthMiddlewareOptions = {
    name: "httpApiKeyAuthMiddleware",
    tags: ["APIKEY", "AUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
export const getHttpApiKeyAuthPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpApiKeyAuthMiddleware(pluginConfig, middlewareConfig), httpApiKeyAuthMiddlewareOptions);
    },
});
