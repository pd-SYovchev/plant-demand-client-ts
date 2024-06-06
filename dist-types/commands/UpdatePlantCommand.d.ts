import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { Plant, UpdatePlantInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlantCommand}.
 */
export interface UpdatePlantCommandInput extends UpdatePlantInput {
}
/**
 * @public
 *
 * The output of {@link UpdatePlantCommand}.
 */
export interface UpdatePlantCommandOutput extends Plant, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdatePlantCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdatePlantCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdatePlantInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // Plant
 *     id: Number("int"),
 *     name: "STRING_VALUE",
 *     address: "STRING_VALUE",
 *     picture: "STRING_VALUE",
 *     max_capacity: Number("int"),
 *     plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer",
 *     night_shift_from: "STRING_VALUE",
 *     night_shift_to: "STRING_VALUE",
 *     business: Number("int"),
 *     owner: Number("int"),
 *     removed: {},
 *     source_plant: Number("int"),
 *     customer_name: "STRING_VALUE",
 *     show_produced_materials: true || false,
 *   },
 * };
 * const command = new UpdatePlantCommand(input);
 * const response = await client.send(command);
 * // { // Plant
 * //   id: Number("int"),
 * //   name: "STRING_VALUE",
 * //   address: "STRING_VALUE",
 * //   picture: "STRING_VALUE",
 * //   max_capacity: Number("int"),
 * //   plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer",
 * //   night_shift_from: "STRING_VALUE",
 * //   night_shift_to: "STRING_VALUE",
 * //   business: Number("int"),
 * //   owner: Number("int"),
 * //   removed: {},
 * //   source_plant: Number("int"),
 * //   customer_name: "STRING_VALUE",
 * //   show_produced_materials: true || false,
 * // };
 *
 * ```
 *
 * @param UpdatePlantCommandInput - {@link UpdatePlantCommandInput}
 * @returns {@link UpdatePlantCommandOutput}
 * @see {@link UpdatePlantCommandInput} for command's `input` shape.
 * @see {@link UpdatePlantCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdatePlantCommand extends $Command<UpdatePlantCommandInput, UpdatePlantCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdatePlantCommandInput;
    /**
     * @public
     */
    constructor(input: UpdatePlantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePlantCommandInput, UpdatePlantCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
