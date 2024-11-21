import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeleteOrderDateFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOrderDateFieldCommand}.
 */
export interface DeleteOrderDateFieldCommandInput extends DeleteOrderDateFieldInput {
}
/**
 * @public
 *
 * The output of {@link DeleteOrderDateFieldCommand}.
 */
export interface DeleteOrderDateFieldCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeleteOrderDateFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeleteOrderDateFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeleteOrderDateFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrderDateFieldCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrderDateFieldCommandInput - {@link DeleteOrderDateFieldCommandInput}
 * @returns {@link DeleteOrderDateFieldCommandOutput}
 * @see {@link DeleteOrderDateFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteOrderDateFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeleteOrderDateFieldCommand extends $Command<DeleteOrderDateFieldCommandInput, DeleteOrderDateFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeleteOrderDateFieldCommandInput;
    /**
     * @public
     */
    constructor(input: DeleteOrderDateFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrderDateFieldCommandInput, DeleteOrderDateFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
