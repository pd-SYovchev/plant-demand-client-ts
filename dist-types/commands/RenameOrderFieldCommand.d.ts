import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { OrderField, RenameOrderFieldInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RenameOrderFieldCommand}.
 */
export interface RenameOrderFieldCommandInput extends RenameOrderFieldInput {
}
/**
 * @public
 *
 * The output of {@link RenameOrderFieldCommand}.
 */
export interface RenameOrderFieldCommandOutput extends OrderField, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, RenameOrderFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, RenameOrderFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // RenameOrderFieldInput
 *   plantId: "STRING_VALUE", // required
 *   orderFieldId: "STRING_VALUE", // required
 *   body: { // RenameOrderFieldPayload
 *     field_name: "STRING_VALUE",
 *   },
 * };
 * const command = new RenameOrderFieldCommand(input);
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
 * @param RenameOrderFieldCommandInput - {@link RenameOrderFieldCommandInput}
 * @returns {@link RenameOrderFieldCommandOutput}
 * @see {@link RenameOrderFieldCommandInput} for command's `input` shape.
 * @see {@link RenameOrderFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class RenameOrderFieldCommand extends $Command<RenameOrderFieldCommandInput, RenameOrderFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: RenameOrderFieldCommandInput;
    /**
     * @public
     */
    constructor(input: RenameOrderFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenameOrderFieldCommandInput, RenameOrderFieldCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
