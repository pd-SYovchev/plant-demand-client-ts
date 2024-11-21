import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { Material, UpdatePlantMaterialInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlantMaterialCommand}.
 */
export interface UpdatePlantMaterialCommandInput extends UpdatePlantMaterialInput {
}
/**
 * @public
 *
 * The output of {@link UpdatePlantMaterialCommand}.
 */
export interface UpdatePlantMaterialCommandOutput extends Material, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdatePlantMaterialCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdatePlantMaterialCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdatePlantMaterialInput
 *   plantId: "STRING_VALUE", // required
 *   materialId: "STRING_VALUE", // required
 *   body: { // UpdatePlantMaterialPayload
 *     name: "STRING_VALUE",
 *     description: "STRING_VALUE",
 *     supplier: Number("int"),
 *     supplier_product_name: "STRING_VALUE",
 *     min_inventory_amount: "STRING_VALUE",
 *     max_inventory_amount: "STRING_VALUE",
 *     system_color: "STRING_VALUE",
 *     is_output_material: true || false,
 *     plant: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePlantMaterialCommand(input);
 * const response = await client.send(command);
 * // { // Material
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   removed: "STRING_VALUE", // required
 * //   system_color: "STRING_VALUE",
 * //   visible_to_customer: true || false,
 * //   active: true || false,
 * //   is_output_material: true || false,
 * //   plant: Number("int"),
 * //   supplier_id: Number("int"),
 * //   supplier_name: "STRING_VALUE",
 * //   supplier_product_name: "STRING_VALUE",
 * //   min_inventory_amount: Number("int"),
 * //   max_inventory_amount: Number("int"),
 * //   current_inventory_amount: Number("int"),
 * //   current_inventory_updated_on: "STRING_VALUE",
 * //   mix_designs: [ // MixDesingList
 * //     Number("int"),
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePlantMaterialCommandInput - {@link UpdatePlantMaterialCommandInput}
 * @returns {@link UpdatePlantMaterialCommandOutput}
 * @see {@link UpdatePlantMaterialCommandInput} for command's `input` shape.
 * @see {@link UpdatePlantMaterialCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdatePlantMaterialCommand extends $Command<UpdatePlantMaterialCommandInput, UpdatePlantMaterialCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdatePlantMaterialCommandInput;
    /**
     * @public
     */
    constructor(input: UpdatePlantMaterialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePlantMaterialCommandInput, UpdatePlantMaterialCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
