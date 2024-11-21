import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantsListInput, GetPlantsListOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantsListCommand}.
 */
export interface GetPlantsListCommandInput extends GetPlantsListInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantsListCommand}.
 */
export interface GetPlantsListCommandOutput extends GetPlantsListOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantsListCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantsListCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantsListInput
 *   permissions: "STRING_VALUE",
 *   show_inactive: true || false,
 * };
 * const command = new GetPlantsListCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantsListOutput
 * //   data: [ // PlantsList // required
 * //     { // Plant
 * //       id: Number("int"),
 * //       name: "STRING_VALUE",
 * //       address: "STRING_VALUE",
 * //       picture: "STRING_VALUE",
 * //       max_capacity: Number("int"),
 * //       plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer",
 * //       night_shift_from: "STRING_VALUE",
 * //       night_shift_to: "STRING_VALUE",
 * //       business: Number("int"),
 * //       owner: Number("int"),
 * //       removed: {},
 * //       source_plant: Number("int"),
 * //       customer_name: "STRING_VALUE",
 * //       show_produced_materials: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantsListCommandInput - {@link GetPlantsListCommandInput}
 * @returns {@link GetPlantsListCommandOutput}
 * @see {@link GetPlantsListCommandInput} for command's `input` shape.
 * @see {@link GetPlantsListCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetPlantsListCommand extends $Command<GetPlantsListCommandInput, GetPlantsListCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantsListCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantsListCommandInput, GetPlantsListCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
