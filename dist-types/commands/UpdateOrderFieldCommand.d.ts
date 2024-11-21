import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { OrderField, UpdateOrderFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrderFieldCommand}.
 */
export interface UpdateOrderFieldCommandInput extends UpdateOrderFieldInput {
}
/**
 * @public
 *
 * The output of {@link UpdateOrderFieldCommand}.
 */
export interface UpdateOrderFieldCommandOutput extends OrderField, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateOrderFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateOrderFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdateOrderFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 *   body: { // UpdateOrderFieldPayload
 *     name: "STRING_VALUE",
 *     field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date",
 *     is_required: true || false,
 *     visible_to_customer: true || false,
 *   },
 * };
 * const command = new UpdateOrderFieldCommand(input);
 * const response = await client.send(command);
 * // { // OrderField
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date", // required
 * //   plant: Number("int"), // required
 * //   is_required: true || false, // required
 * //   visible_to_customer: true || false, // required
 * // };
 *
 * ```
 *
 * @param UpdateOrderFieldCommandInput - {@link UpdateOrderFieldCommandInput}
 * @returns {@link UpdateOrderFieldCommandOutput}
 * @see {@link UpdateOrderFieldCommandInput} for command's `input` shape.
 * @see {@link UpdateOrderFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdateOrderFieldCommand extends $Command<UpdateOrderFieldCommandInput, UpdateOrderFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdateOrderFieldCommandInput;
    /**
     * @public
     */
    constructor(input: UpdateOrderFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOrderFieldCommandInput, UpdateOrderFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
