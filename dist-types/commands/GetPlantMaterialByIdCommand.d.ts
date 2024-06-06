import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantMaterialByIdInput, Material } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantMaterialByIdCommand}.
 */
export interface GetPlantMaterialByIdCommandInput extends GetPlantMaterialByIdInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantMaterialByIdCommand}.
 */
export interface GetPlantMaterialByIdCommandOutput extends Material, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantMaterialByIdCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantMaterialByIdCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantMaterialByIdInput
 *   plantId: "STRING_VALUE", // required
 *   materialId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantMaterialByIdCommand(input);
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
 * @param GetPlantMaterialByIdCommandInput - {@link GetPlantMaterialByIdCommandInput}
 * @returns {@link GetPlantMaterialByIdCommandOutput}
 * @see {@link GetPlantMaterialByIdCommandInput} for command's `input` shape.
 * @see {@link GetPlantMaterialByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetPlantMaterialByIdCommand extends $Command<GetPlantMaterialByIdCommandInput, GetPlantMaterialByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantMaterialByIdCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantMaterialByIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantMaterialByIdCommandInput, GetPlantMaterialByIdCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
