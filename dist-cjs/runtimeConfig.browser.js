"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = require("tslib");
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const sha256_browser_1 = require("@aws-crypto/sha256-browser");
const util_user_agent_browser_1 = require("@aws-sdk/util-user-agent-browser");
const fetch_http_handler_1 = require("@smithy/fetch-http-handler");
const util_body_length_browser_1 = require("@smithy/util-body-length-browser");
const util_retry_1 = require("@smithy/util-retry");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const smithy_client_1 = require("@smithy/smithy-client");
const util_defaults_mode_browser_1 = require("@smithy/util-defaults-mode-browser");
const getRuntimeConfig = (config) => {
    const defaultsMode = (0, util_defaults_mode_browser_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_browser_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_browser_1.defaultUserAgent)({ clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? util_retry_1.DEFAULT_MAX_ATTEMPTS,
        requestHandler: config?.requestHandler ?? new fetch_http_handler_1.FetchHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE),
        sha256: config?.sha256 ?? sha256_browser_1.Sha256,
        streamCollector: config?.streamCollector ?? fetch_http_handler_1.streamCollector,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
