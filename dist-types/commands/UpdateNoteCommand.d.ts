import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { UpdateNoteInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNoteCommand}.
 */
export interface UpdateNoteCommandInput extends UpdateNoteInput {
}
/**
 * @public
 *
 * The output of {@link UpdateNoteCommand}.
 */
export interface UpdateNoteCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateNoteCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateNoteCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdateNoteInput
 *   plantId: "STRING_VALUE", // required
 *   noteId: "STRING_VALUE", // required
 *   body: { // CreateUpdateNotePayload
 *     calendar_type: "STRING_VALUE", // required
 *     type: "plant_closure" || "inspection" || "custom", // required
 *     description: "STRING_VALUE",
 *     title: "STRING_VALUE", // required
 *     dates: [ // CreateNotePayloadDates // required
 *       { // NoteDatePayload
 *         id: Number("int"),
 *         date: "STRING_VALUE",
 *       },
 *     ],
 *     visible_to_customer: true || false,
 *     notify_team: true || false,
 *   },
 * };
 * const command = new UpdateNoteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNoteCommandInput - {@link UpdateNoteCommandInput}
 * @returns {@link UpdateNoteCommandOutput}
 * @see {@link UpdateNoteCommandInput} for command's `input` shape.
 * @see {@link UpdateNoteCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdateNoteCommand extends $Command<UpdateNoteCommandInput, UpdateNoteCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdateNoteCommandInput;
    /**
     * @public
     */
    constructor(input: UpdateNoteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNoteCommandInput, UpdateNoteCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
