"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpApiKeyAuthPlugin = exports.httpApiKeyAuthMiddlewareOptions = exports.httpApiKeyAuthMiddleware = exports.resolveHttpApiKeyAuthConfig = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const util_middleware_1 = require("@smithy/util-middleware");
function resolveHttpApiKeyAuthConfig(input) {
    return {
        ...input,
        apiKey: input.apiKey ? (0, util_middleware_1.normalizeProvider)(input.apiKey) : undefined,
    };
}
exports.resolveHttpApiKeyAuthConfig = resolveHttpApiKeyAuthConfig;
const httpApiKeyAuthMiddleware = (pluginConfig, middlewareConfig) => (next) => async (args) => {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
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
exports.httpApiKeyAuthMiddleware = httpApiKeyAuthMiddleware;
exports.httpApiKeyAuthMiddlewareOptions = {
    name: "httpApiKeyAuthMiddleware",
    tags: ["APIKEY", "AUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getHttpApiKeyAuthPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.httpApiKeyAuthMiddleware)(pluginConfig, middlewareConfig), exports.httpApiKeyAuthMiddlewareOptions);
    },
});
exports.getHttpApiKeyAuthPlugin = getHttpApiKeyAuthPlugin;
