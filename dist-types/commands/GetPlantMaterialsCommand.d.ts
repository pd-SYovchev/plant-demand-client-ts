import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantMaterialsInput, GetPlantMaterialsOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantMaterialsCommand}.
 */
export interface GetPlantMaterialsCommandInput extends GetPlantMaterialsInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantMaterialsCommand}.
 */
export interface GetPlantMaterialsCommandOutput extends GetPlantMaterialsOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantMaterialsCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantMaterialsCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantMaterialsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantMaterialsCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantMaterialsOutput
 * //   data: [ // MaterialList // required
 * //     { // Material
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       removed: "STRING_VALUE", // required
 * //       system_color: "STRING_VALUE",
 * //       visible_to_customer: true || false,
 * //       active: true || false,
 * //       is_output_material: true || false,
 * //       plant: Number("int"),
 * //       supplier_id: Number("int"),
 * //       supplier_name: "STRING_VALUE",
 * //       supplier_product_name: "STRING_VALUE",
 * //       min_inventory_amount: Number("int"),
 * //       max_inventory_amount: Number("int"),
 * //       current_inventory_amount: Number("int"),
 * //       current_inventory_updated_on: "STRING_VALUE",
 * //       mix_designs: [ // MixDesingList
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantMaterialsCommandInput - {@link GetPlantMaterialsCommandInput}
 * @returns {@link GetPlantMaterialsCommandOutput}
 * @see {@link GetPlantMaterialsCommandInput} for command's `input` shape.
 * @see {@link GetPlantMaterialsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetPlantMaterialsCommand extends $Command<GetPlantMaterialsCommandInput, GetPlantMaterialsCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantMaterialsCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantMaterialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantMaterialsCommandInput, GetPlantMaterialsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
