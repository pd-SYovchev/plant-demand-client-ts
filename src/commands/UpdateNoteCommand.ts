// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { UpdateNoteInput } from "../models/models_0";
import {
  de_UpdateNoteCommand,
  se_UpdateNoteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SMITHY_CONTEXT_KEY,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNoteCommand}.
 */
export interface UpdateNoteCommandInput extends UpdateNoteInput {}
/**
 * @public
 *
 * The output of {@link UpdateNoteCommand}.
 */
export interface UpdateNoteCommandOutput extends __MetadataBearer {}

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
export class UpdateNoteCommand extends $Command<UpdateNoteCommandInput, UpdateNoteCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: UpdateNoteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PlantDemandServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNoteCommandInput, UpdateNoteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "UpdateNoteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        (_: any) => _,
      outputFilterSensitiveLog:
        (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PlantDemandService",
        operation: "UpdateNote",
      },
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: UpdateNoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateNoteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNoteCommandOutput> {
    return de_UpdateNoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
