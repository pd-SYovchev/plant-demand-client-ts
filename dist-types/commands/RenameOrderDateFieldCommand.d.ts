import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { OrderField, RenameOrderDateFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RenameOrderDateFieldCommand}.
 */
export interface RenameOrderDateFieldCommandInput extends RenameOrderDateFieldInput {
}
/**
 * @public
 *
 * The output of {@link RenameOrderDateFieldCommand}.
 */
export interface RenameOrderDateFieldCommandOutput extends OrderField, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, RenameOrderDateFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, RenameOrderDateFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // RenameOrderDateFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 *   body: { // RenameOrderFieldPayload
 *     field_name: "STRING_VALUE",
 *   },
 * };
 * const command = new RenameOrderDateFieldCommand(input);
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
 * @param RenameOrderDateFieldCommandInput - {@link RenameOrderDateFieldCommandInput}
 * @returns {@link RenameOrderDateFieldCommandOutput}
 * @see {@link RenameOrderDateFieldCommandInput} for command's `input` shape.
 * @see {@link RenameOrderDateFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class RenameOrderDateFieldCommand extends $Command<RenameOrderDateFieldCommandInput, RenameOrderDateFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: RenameOrderDateFieldCommandInput;
    /**
     * @public
     */
    constructor(input: RenameOrderDateFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenameOrderDateFieldCommandInput, RenameOrderDateFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
