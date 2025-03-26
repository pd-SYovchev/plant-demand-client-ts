import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { OrderField, UpdateOrderDateFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrderDateFieldCommand}.
 */
export interface UpdateOrderDateFieldCommandInput extends UpdateOrderDateFieldInput {
}
/**
 * @public
 *
 * The output of {@link UpdateOrderDateFieldCommand}.
 */
export interface UpdateOrderDateFieldCommandOutput extends OrderField, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateOrderDateFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateOrderDateFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdateOrderDateFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 *   body: { // UpdateOrderFieldPayload
 *     name: "STRING_VALUE",
 *     field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date" || "Hidden",
 *     is_required: true || false,
 *     visible_to_customer: true || false,
 *   },
 * };
 * const command = new UpdateOrderDateFieldCommand(input);
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
 * @param UpdateOrderDateFieldCommandInput - {@link UpdateOrderDateFieldCommandInput}
 * @returns {@link UpdateOrderDateFieldCommandOutput}
 * @see {@link UpdateOrderDateFieldCommandInput} for command's `input` shape.
 * @see {@link UpdateOrderDateFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdateOrderDateFieldCommand extends $Command<UpdateOrderDateFieldCommandInput, UpdateOrderDateFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdateOrderDateFieldCommandInput;
    /**
     * @public
     */
    constructor(input: UpdateOrderDateFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOrderDateFieldCommandInput, UpdateOrderDateFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
