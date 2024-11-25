// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetOrderDateFieldsInput,
  GetOrderDateFieldsOutput,
} from "../models/models_0";
import {
  de_GetOrderDateFieldsCommand,
  se_GetOrderDateFieldsCommand,
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
 * The input for {@link GetOrderDateFieldsCommand}.
 */
export interface GetOrderDateFieldsCommandInput extends GetOrderDateFieldsInput {}
/**
 * @public
 *
 * The output of {@link GetOrderDateFieldsCommand}.
 */
export interface GetOrderDateFieldsCommandOutput extends GetOrderDateFieldsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetOrderDateFieldsCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetOrderDateFieldsCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetOrderDateFieldsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetOrderDateFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderDateFieldsOutput
 * //   data: [ // OrderFieldList // required
 * //     { // OrderField
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       field_type: "Text" || "TextArea" || "Checkbox" || "Time" || "Date", // required
 * //       plant: Number("int"), // required
 * //       is_required: true || false, // required
 * //       visible_to_customer: true || false, // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetOrderDateFieldsCommandInput - {@link GetOrderDateFieldsCommandInput}
 * @returns {@link GetOrderDateFieldsCommandOutput}
 * @see {@link GetOrderDateFieldsCommandInput} for command's `input` shape.
 * @see {@link GetOrderDateFieldsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetOrderDateFieldsCommand extends $Command<GetOrderDateFieldsCommandInput, GetOrderDateFieldsCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetOrderDateFieldsCommandInput) {
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
  ): Handler<GetOrderDateFieldsCommandInput, GetOrderDateFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetOrderDateFieldsCommand";
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
        operation: "GetOrderDateFields",
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
    input: GetOrderDateFieldsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetOrderDateFieldsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrderDateFieldsCommandOutput> {
    return de_GetOrderDateFieldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
