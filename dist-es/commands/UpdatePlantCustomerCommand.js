import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { de_UpdatePlantCustomerCommand, se_UpdatePlantCustomerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
export { $Command };
export class UpdatePlantCustomerCommand extends $Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key' }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PlantDemandServiceClient";
        const commandName = "UpdatePlantCustomerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "PlantDemandService",
                operation: "UpdatePlantCustomer",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdatePlantCustomerCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdatePlantCustomerCommand(output, context);
    }
}
