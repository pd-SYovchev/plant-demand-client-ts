"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlantCustomerByIdCommand = exports.$Command = void 0;
const HttpApiKeyAuth_1 = require("../middleware/HttpApiKeyAuth");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const types_1 = require("@smithy/types");
class GetPlantCustomerByIdCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, HttpApiKeyAuth_1.getHttpApiKeyAuthPlugin)(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization' }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PlantDemandServiceClient";
        const commandName = "GetPlantCustomerByIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [types_1.SMITHY_CONTEXT_KEY]: {
                service: "PlantDemandService",
                operation: "GetPlantCustomerById",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.se_GetPlantCustomerByIdCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.de_GetPlantCustomerByIdCommand)(output, context);
    }
}
exports.GetPlantCustomerByIdCommand = GetPlantCustomerByIdCommand;
