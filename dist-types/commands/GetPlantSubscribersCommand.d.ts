import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantSubscribersInput, GetPlantSubscribersOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantSubscribersCommand}.
 */
export interface GetPlantSubscribersCommandInput extends GetPlantSubscribersInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantSubscribersCommand}.
 */
export interface GetPlantSubscribersCommandOutput extends GetPlantSubscribersOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantSubscribersCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantSubscribersCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantSubscribersInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantSubscribersCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantSubscribersOutput
 * //   data: [ // PlantSubscriberList // required
 * //     { // Subscriber
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       plant: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantSubscribersCommandInput - {@link GetPlantSubscribersCommandInput}
 * @returns {@link GetPlantSubscribersCommandOutput}
 * @see {@link GetPlantSubscribersCommandInput} for command's `input` shape.
 * @see {@link GetPlantSubscribersCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetPlantSubscribersCommand extends $Command<GetPlantSubscribersCommandInput, GetPlantSubscribersCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantSubscribersCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantSubscribersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantSubscribersCommandInput, GetPlantSubscribersCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
