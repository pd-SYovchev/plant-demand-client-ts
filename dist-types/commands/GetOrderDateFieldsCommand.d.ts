import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetOrderDateFieldsInput, GetOrderDateFieldsOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrderDateFieldsCommand}.
 */
export interface GetOrderDateFieldsCommandInput extends GetOrderDateFieldsInput {
}
/**
 * @public
 *
 * The output of {@link GetOrderDateFieldsCommand}.
 */
export interface GetOrderDateFieldsCommandOutput extends GetOrderDateFieldsOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetOrderDateFieldsCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetOrderDateFieldsCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetOrderDateFieldsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetOrderDateFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderDateFieldsOutput
 * //   data: [ // OrderFieldList // required
 * //     { // OrderField
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date", // required
 * //       plant: Number("int"), // required
 * //       is_required: true || false, // required
 * //       visible_to_customer: true || false, // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetOrderDateFieldsCommandInput - {@link GetOrderDateFieldsCommandInput}
 * @returns {@link GetOrderDateFieldsCommandOutput}
 * @see {@link GetOrderDateFieldsCommandInput} for command's `input` shape.
 * @see {@link GetOrderDateFieldsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetOrderDateFieldsCommand extends $Command<GetOrderDateFieldsCommandInput, GetOrderDateFieldsCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetOrderDateFieldsCommandInput;
    /**
     * @public
     */
    constructor(input: GetOrderDateFieldsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrderDateFieldsCommandInput, GetOrderDateFieldsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
