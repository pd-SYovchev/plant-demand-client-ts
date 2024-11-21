import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantByIdInput, Plant } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantByIdCommand}.
 */
export interface GetPlantByIdCommandInput extends GetPlantByIdInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantByIdCommand}.
 */
export interface GetPlantByIdCommandOutput extends Plant, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantByIdCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantByIdInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantByIdCommand(input);
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
 * @param GetPlantByIdCommandInput - {@link GetPlantByIdCommandInput}
 * @returns {@link GetPlantByIdCommandOutput}
 * @see {@link GetPlantByIdCommandInput} for command's `input` shape.
 * @see {@link GetPlantByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetPlantByIdCommand extends $Command<GetPlantByIdCommandInput, GetPlantByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantByIdCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantByIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantByIdCommandInput, GetPlantByIdCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
