import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { CreateOrderDateFieldInput, OrderField } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOrderDateFieldCommand}.
 */
export interface CreateOrderDateFieldCommandInput extends CreateOrderDateFieldInput {
}
/**
 * @public
 *
 * The output of {@link CreateOrderDateFieldCommand}.
 */
export interface CreateOrderDateFieldCommandOutput extends OrderField, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreateOrderDateFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreateOrderDateFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreateOrderDateFieldInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // CreateOrderFieldPayload
 *     name: "STRING_VALUE", // required
 *     field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date" || "Hidden", // required
 *     is_required: true || false, // required
 *     visible_to_customer: true || false, // required
 *   },
 * };
 * const command = new CreateOrderDateFieldCommand(input);
 * const response = await client.send(command);
 * // { // OrderField
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date" || "Hidden", // required
 * //   plant: Number("int"), // required
 * //   is_required: true || false, // required
 * //   visible_to_customer: true || false, // required
 * // };
 *
 * ```
 *
 * @param CreateOrderDateFieldCommandInput - {@link CreateOrderDateFieldCommandInput}
 * @returns {@link CreateOrderDateFieldCommandOutput}
 * @see {@link CreateOrderDateFieldCommandInput} for command's `input` shape.
 * @see {@link CreateOrderDateFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class CreateOrderDateFieldCommand extends $Command<CreateOrderDateFieldCommandInput, CreateOrderDateFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: CreateOrderDateFieldCommandInput;
    /**
     * @public
     */
    constructor(input: CreateOrderDateFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrderDateFieldCommandInput, CreateOrderDateFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
