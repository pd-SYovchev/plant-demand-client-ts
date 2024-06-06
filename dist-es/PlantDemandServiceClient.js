import { resolveHttpApiKeyAuthConfig, } from "./middleware/HttpApiKeyAuth";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, } from "./runtimeExtensions";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { resolveCustomEndpointsConfig, } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { getRetryPlugin, resolveRetryConfig, } from "@smithy/middleware-retry";
import { Client as __Client, } from "@smithy/smithy-client";
export { __Client };
export class PlantDemandServiceClient extends __Client {
    constructor(...[configuration]) {
        let _config_0 = __getRuntimeConfig(configuration || {});
        let _config_1 = resolveCustomEndpointsConfig(_config_0);
        let _config_2 = resolveRetryConfig(_config_1);
        let _config_3 = resolveHostHeaderConfig(_config_2);
        let _config_4 = resolveUserAgentConfig(_config_3);
        let _config_5 = resolveHttpApiKeyAuthConfig(_config_4);
        let _config_6 = resolveRuntimeExtensions(_config_5, configuration?.extensions || []);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
