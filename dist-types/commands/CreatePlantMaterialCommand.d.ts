import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { CreatePlantMaterialInput, Material } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePlantMaterialCommand}.
 */
export interface CreatePlantMaterialCommandInput extends CreatePlantMaterialInput {
}
/**
 * @public
 *
 * The output of {@link CreatePlantMaterialCommand}.
 */
export interface CreatePlantMaterialCommandOutput extends Material, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreatePlantMaterialCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreatePlantMaterialCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreatePlantMaterialInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // CreatePlantMaterialPayload
 *     name: "STRING_VALUE", // required
 *     description: "STRING_VALUE",
 *     supplier: Number("int"),
 *     supplier_product_name: "STRING_VALUE",
 *     min_inventory_amount: "STRING_VALUE",
 *     max_inventory_amount: "STRING_VALUE",
 *     system_color: "STRING_VALUE", // required
 *     is_output_material: true || false,
 *     plant: "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlantMaterialCommand(input);
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
 * @param CreatePlantMaterialCommandInput - {@link CreatePlantMaterialCommandInput}
 * @returns {@link CreatePlantMaterialCommandOutput}
 * @see {@link CreatePlantMaterialCommandInput} for command's `input` shape.
 * @see {@link CreatePlantMaterialCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class CreatePlantMaterialCommand extends $Command<CreatePlantMaterialCommandInput, CreatePlantMaterialCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: CreatePlantMaterialCommandInput;
    /**
     * @public
     */
    constructor(input: CreatePlantMaterialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlantMaterialCommandInput, CreatePlantMaterialCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
