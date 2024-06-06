import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { CreateNoteInput, CreateNoteOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNoteCommand}.
 */
export interface CreateNoteCommandInput extends CreateNoteInput {
}
/**
 * @public
 *
 * The output of {@link CreateNoteCommand}.
 */
export interface CreateNoteCommandOutput extends CreateNoteOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreateNoteCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreateNoteCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreateNoteInput
 *   plant: "STRING_VALUE", // required
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
 * const command = new CreateNoteCommand(input);
 * const response = await client.send(command);
 * // { // CreateNoteOutput
 * //   id: Number("int"),
 * //   calendar_type: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   dates: [ // NoteDateList
 * //     { // NoteDate
 * //       id: Number("int"),
 * //       date: "STRING_VALUE",
 * //       plant: Number("int"),
 * //     },
 * //   ],
 * //   plant: Number("int"),
 * //   icon: "STRING_VALUE",
 * //   visible_to_customer: true || false,
 * // };
 *
 * ```
 *
 * @param CreateNoteCommandInput - {@link CreateNoteCommandInput}
 * @returns {@link CreateNoteCommandOutput}
 * @see {@link CreateNoteCommandInput} for command's `input` shape.
 * @see {@link CreateNoteCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class CreateNoteCommand extends $Command<CreateNoteCommandInput, CreateNoteCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: CreateNoteCommandInput;
    /**
     * @public
     */
    constructor(input: CreateNoteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNoteCommandInput, CreateNoteCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
