"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameOrderDateFieldCommand = exports.$Command = void 0;
const HttpApiKeyAuth_1 = require("../middleware/HttpApiKeyAuth");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const types_1 = require("@smithy/types");
class RenameOrderDateFieldCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, HttpApiKeyAuth_1.getHttpApiKeyAuthPlugin)(configuration, { in: 'header', name: 'Server-Api-Key' }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PlantDemandServiceClient";
        const commandName = "RenameOrderDateFieldCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [types_1.SMITHY_CONTEXT_KEY]: {
                service: "PlantDemandService",
                operation: "RenameOrderDateField",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.se_RenameOrderDateFieldCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.de_RenameOrderDateFieldCommand)(output, context);
    }
}
exports.RenameOrderDateFieldCommand = RenameOrderDateFieldCommand;
