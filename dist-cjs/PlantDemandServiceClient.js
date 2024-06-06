"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantDemandServiceClient = exports.__Client = void 0;
const HttpApiKeyAuth_1 = require("./middleware/HttpApiKeyAuth");
const runtimeConfig_1 = require("./runtimeConfig");
const runtimeExtensions_1 = require("./runtimeExtensions");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_recursion_detection_1 = require("@aws-sdk/middleware-recursion-detection");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const config_resolver_1 = require("@smithy/config-resolver");
const middleware_content_length_1 = require("@smithy/middleware-content-length");
const middleware_retry_1 = require("@smithy/middleware-retry");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "__Client", { enumerable: true, get: function () { return smithy_client_1.Client; } });
class PlantDemandServiceClient extends smithy_client_1.Client {
    constructor(...[configuration]) {
        let _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        let _config_1 = (0, config_resolver_1.resolveCustomEndpointsConfig)(_config_0);
        let _config_2 = (0, middleware_retry_1.resolveRetryConfig)(_config_1);
        let _config_3 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_2);
        let _config_4 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_3);
        let _config_5 = (0, HttpApiKeyAuth_1.resolveHttpApiKeyAuthConfig)(_config_4);
        let _config_6 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_5, configuration?.extensions || []);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.PlantDemandServiceClient = PlantDemandServiceClient;
