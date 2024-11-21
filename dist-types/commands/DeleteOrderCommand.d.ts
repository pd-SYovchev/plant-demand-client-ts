import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeleteOrderInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOrderCommand}.
 */
export interface DeleteOrderCommandInput extends DeleteOrderInput {
}
/**
 * @public
 *
 * The output of {@link DeleteOrderCommand}.
 */
export interface DeleteOrderCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeleteOrderCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeleteOrderCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeleteOrderInput
 *   plantId: "STRING_VALUE", // required
 *   orderId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrderCommandInput - {@link DeleteOrderCommandInput}
 * @returns {@link DeleteOrderCommandOutput}
 * @see {@link DeleteOrderCommandInput} for command's `input` shape.
 * @see {@link DeleteOrderCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeleteOrderCommand extends $Command<DeleteOrderCommandInput, DeleteOrderCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeleteOrderCommandInput;
    /**
     * @public
     */
    constructor(input: DeleteOrderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrderCommandInput, DeleteOrderCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
