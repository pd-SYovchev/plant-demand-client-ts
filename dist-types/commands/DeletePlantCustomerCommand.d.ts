import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeletePlantCustomerInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePlantCustomerCommand}.
 */
export interface DeletePlantCustomerCommandInput extends DeletePlantCustomerInput {
}
/**
 * @public
 *
 * The output of {@link DeletePlantCustomerCommand}.
 */
export interface DeletePlantCustomerCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeletePlantCustomerCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeletePlantCustomerCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeletePlantCustomerInput
 *   plantId: "STRING_VALUE", // required
 *   customerId: "STRING_VALUE", // required
 * };
 * const command = new DeletePlantCustomerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlantCustomerCommandInput - {@link DeletePlantCustomerCommandInput}
 * @returns {@link DeletePlantCustomerCommandOutput}
 * @see {@link DeletePlantCustomerCommandInput} for command's `input` shape.
 * @see {@link DeletePlantCustomerCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeletePlantCustomerCommand extends $Command<DeletePlantCustomerCommandInput, DeletePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeletePlantCustomerCommandInput;
    /**
     * @public
     */
    constructor(input: DeletePlantCustomerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlantCustomerCommandInput, DeletePlantCustomerCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
