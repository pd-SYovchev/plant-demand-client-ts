import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetOrderFieldsInput, GetOrderFieldsOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrderFieldsCommand}.
 */
export interface GetOrderFieldsCommandInput extends GetOrderFieldsInput {
}
/**
 * @public
 *
 * The output of {@link GetOrderFieldsCommand}.
 */
export interface GetOrderFieldsCommandOutput extends GetOrderFieldsOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetOrderFieldsCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetOrderFieldsCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetOrderFieldsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetOrderFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderFieldsOutput
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
 * @param GetOrderFieldsCommandInput - {@link GetOrderFieldsCommandInput}
 * @returns {@link GetOrderFieldsCommandOutput}
 * @see {@link GetOrderFieldsCommandInput} for command's `input` shape.
 * @see {@link GetOrderFieldsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetOrderFieldsCommand extends $Command<GetOrderFieldsCommandInput, GetOrderFieldsCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetOrderFieldsCommandInput;
    /**
     * @public
     */
    constructor(input: GetOrderFieldsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrderFieldsCommandInput, GetOrderFieldsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
