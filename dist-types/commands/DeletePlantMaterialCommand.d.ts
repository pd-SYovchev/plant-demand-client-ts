import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeletePlantMaterialInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePlantMaterialCommand}.
 */
export interface DeletePlantMaterialCommandInput extends DeletePlantMaterialInput {
}
/**
 * @public
 *
 * The output of {@link DeletePlantMaterialCommand}.
 */
export interface DeletePlantMaterialCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeletePlantMaterialCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeletePlantMaterialCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeletePlantMaterialInput
 *   plantId: "STRING_VALUE", // required
 *   materialId: "STRING_VALUE", // required
 * };
 * const command = new DeletePlantMaterialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlantMaterialCommandInput - {@link DeletePlantMaterialCommandInput}
 * @returns {@link DeletePlantMaterialCommandOutput}
 * @see {@link DeletePlantMaterialCommandInput} for command's `input` shape.
 * @see {@link DeletePlantMaterialCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeletePlantMaterialCommand extends $Command<DeletePlantMaterialCommandInput, DeletePlantMaterialCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeletePlantMaterialCommandInput;
    /**
     * @public
     */
    constructor(input: DeletePlantMaterialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlantMaterialCommandInput, DeletePlantMaterialCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
