import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeleteOrderFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOrderFieldCommand}.
 */
export interface DeleteOrderFieldCommandInput extends DeleteOrderFieldInput {
}
/**
 * @public
 *
 * The output of {@link DeleteOrderFieldCommand}.
 */
export interface DeleteOrderFieldCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeleteOrderFieldCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeleteOrderFieldCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeleteOrderFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrderFieldCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrderFieldCommandInput - {@link DeleteOrderFieldCommandInput}
 * @returns {@link DeleteOrderFieldCommandOutput}
 * @see {@link DeleteOrderFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteOrderFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeleteOrderFieldCommand extends $Command<DeleteOrderFieldCommandInput, DeleteOrderFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeleteOrderFieldCommandInput;
    /**
     * @public
     */
    constructor(input: DeleteOrderFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrderFieldCommandInput, DeleteOrderFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
