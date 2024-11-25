// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  CreateOrderFieldInput,
  OrderField,
} from "../models/models_0";
import {
  de_CreateOrderFieldCommand,
  se_CreateOrderFieldCommand,
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
 * The input for {@link CreateOrderFieldCommand}.
 */
export interface CreateOrderFieldCommandInput extends CreateOrderFieldInput {}
/**
 * @public
 *
 * The output of {@link CreateOrderFieldCommand}.
 */
export interface CreateOrderFieldCommandOutput extends OrderField, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreateOrderFieldCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreateOrderFieldCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreateOrderFieldInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // CreateOrderFieldPayload
 *     name: "STRING_VALUE", // required
 *     field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date", // required
 *     is_required: true || false, // required
 *     visible_to_customer: true || false, // required
 *   },
 * };
 * const command = new CreateOrderFieldCommand(input);
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
 * @param CreateOrderFieldCommandInput - {@link CreateOrderFieldCommandInput}
 * @returns {@link CreateOrderFieldCommandOutput}
 * @see {@link CreateOrderFieldCommandInput} for command's `input` shape.
 * @see {@link CreateOrderFieldCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class CreateOrderFieldCommand extends $Command<CreateOrderFieldCommandInput, CreateOrderFieldCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: CreateOrderFieldCommandInput) {
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
  ): Handler<CreateOrderFieldCommandInput, CreateOrderFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "CreateOrderFieldCommand";
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
        operation: "CreateOrderField",
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
    input: CreateOrderFieldCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateOrderFieldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOrderFieldCommandOutput> {
    return de_CreateOrderFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
