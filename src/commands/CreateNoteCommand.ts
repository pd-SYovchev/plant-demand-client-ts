// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  CreateNoteInput,
  CreateNoteOutput,
} from "../models/models_0";
import {
  de_CreateNoteCommand,
  se_CreateNoteCommand,
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
 * The input for {@link CreateNoteCommand}.
 */
export interface CreateNoteCommandInput extends CreateNoteInput {}
/**
 * @public
 *
 * The output of {@link CreateNoteCommand}.
 */
export interface CreateNoteCommandOutput extends CreateNoteOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreateNoteCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreateNoteCommand } = require("pd-ts-client"); // CommonJS import
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
export class CreateNoteCommand extends $Command<CreateNoteCommandInput, CreateNoteCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: CreateNoteCommandInput) {
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
  ): Handler<CreateNoteCommandInput, CreateNoteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "CreateNoteCommand";
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
        operation: "CreateNote",
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
    input: CreateNoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateNoteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNoteCommandOutput> {
    return de_CreateNoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
