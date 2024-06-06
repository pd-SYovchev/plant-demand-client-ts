// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetMixDesignsInput,
  GetMixDesignsOutput,
} from "../models/models_0";
import {
  de_GetMixDesignsCommand,
  se_GetMixDesignsCommand,
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
 * The input for {@link GetMixDesignsCommand}.
 */
export interface GetMixDesignsCommandInput extends GetMixDesignsInput {}
/**
 * @public
 *
 * The output of {@link GetMixDesignsCommand}.
 */
export interface GetMixDesignsCommandOutput extends GetMixDesignsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetMixDesignsCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetMixDesignsCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetMixDesignsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetMixDesignsCommand(input);
 * const response = await client.send(command);
 * // { // GetMixDesignsOutput
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   expiration_date: "STRING_VALUE",
 * //   removed: "STRING_VALUE",
 * //   specification_basis: "STRING_VALUE",
 * //   verified: true || false,
 * //   output_material: Number("int"), // required
 * //   plant: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetMixDesignsCommandInput - {@link GetMixDesignsCommandInput}
 * @returns {@link GetMixDesignsCommandOutput}
 * @see {@link GetMixDesignsCommandInput} for command's `input` shape.
 * @see {@link GetMixDesignsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetMixDesignsCommand extends $Command<GetMixDesignsCommandInput, GetMixDesignsCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetMixDesignsCommandInput) {
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
  ): Handler<GetMixDesignsCommandInput, GetMixDesignsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetMixDesignsCommand";
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
        operation: "GetMixDesigns",
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
    input: GetMixDesignsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMixDesignsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMixDesignsCommandOutput> {
    return de_GetMixDesignsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
