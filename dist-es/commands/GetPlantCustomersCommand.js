import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { de_GetPlantCustomersCommand, se_GetPlantCustomersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
export { $Command };
export class GetPlantCustomersCommand extends $Command {
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
        const commandName = "GetPlantCustomersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "PlantDemandService",
                operation: "GetPlantCustomers",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_GetPlantCustomersCommand(input, context);
    }
    deserialize(output, context) {
        return de_GetPlantCustomersCommand(output, context);
    }
}
