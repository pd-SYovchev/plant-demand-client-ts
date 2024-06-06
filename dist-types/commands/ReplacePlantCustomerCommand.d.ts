import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { ReplacePlantCustomerInput, ReplacePlantCustomerOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplacePlantCustomerCommand}.
 */
export interface ReplacePlantCustomerCommandInput extends ReplacePlantCustomerInput {
}
/**
 * @public
 *
 * The output of {@link ReplacePlantCustomerCommand}.
 */
export interface ReplacePlantCustomerCommandOutput extends ReplacePlantCustomerOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, ReplacePlantCustomerCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, ReplacePlantCustomerCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // ReplacePlantCustomerInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // ReplacePlantCustomerPayload
 *     customer_to_replace_id: Number("int"), // required
 *     customer_to_use_id: Number("int"), // required
 *   },
 * };
 * const command = new ReplacePlantCustomerCommand(input);
 * const response = await client.send(command);
 * // { // ReplacePlantCustomerOutput
 * //   result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplacePlantCustomerCommandInput - {@link ReplacePlantCustomerCommandInput}
 * @returns {@link ReplacePlantCustomerCommandOutput}
 * @see {@link ReplacePlantCustomerCommandInput} for command's `input` shape.
 * @see {@link ReplacePlantCustomerCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class ReplacePlantCustomerCommand extends $Command<ReplacePlantCustomerCommandInput, ReplacePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: ReplacePlantCustomerCommandInput;
    /**
     * @public
     */
    constructor(input: ReplacePlantCustomerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplacePlantCustomerCommandInput, ReplacePlantCustomerCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
