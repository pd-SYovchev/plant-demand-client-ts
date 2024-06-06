import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeleteNoteInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNoteCommand}.
 */
export interface DeleteNoteCommandInput extends DeleteNoteInput {
}
/**
 * @public
 *
 * The output of {@link DeleteNoteCommand}.
 */
export interface DeleteNoteCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeleteNoteCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeleteNoteCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeleteNoteInput
 *   plantId: "STRING_VALUE", // required
 *   noteId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNoteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNoteCommandInput - {@link DeleteNoteCommandInput}
 * @returns {@link DeleteNoteCommandOutput}
 * @see {@link DeleteNoteCommandInput} for command's `input` shape.
 * @see {@link DeleteNoteCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeleteNoteCommand extends $Command<DeleteNoteCommandInput, DeleteNoteCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeleteNoteCommandInput;
    /**
     * @public
     */
    constructor(input: DeleteNoteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNoteCommandInput, DeleteNoteCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
