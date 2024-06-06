// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { GetSuppliersOutput } from "../models/models_0";
import {
  de_GetSuppliersCommand,
  se_GetSuppliersCommand,
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
 * The input for {@link GetSuppliersCommand}.
 */
export interface GetSuppliersCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSuppliersCommand}.
 */
export interface GetSuppliersCommandOutput extends GetSuppliersOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetSuppliersCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetSuppliersCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = {};
 * const command = new GetSuppliersCommand(input);
 * const response = await client.send(command);
 * // { // GetSuppliersOutput
 * //   data: [ // SupplierList // required
 * //     { // Supplier
 * //       email: "STRING_VALUE", // required
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       address: "STRING_VALUE", // required
 * //       business: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSuppliersCommandInput - {@link GetSuppliersCommandInput}
 * @returns {@link GetSuppliersCommandOutput}
 * @see {@link GetSuppliersCommandInput} for command's `input` shape.
 * @see {@link GetSuppliersCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetSuppliersCommand extends $Command<GetSuppliersCommandInput, GetSuppliersCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetSuppliersCommandInput) {
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
  ): Handler<GetSuppliersCommandInput, GetSuppliersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetSuppliersCommand";
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
        operation: "GetSuppliers",
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
    input: GetSuppliersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSuppliersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSuppliersCommandOutput> {
    return de_GetSuppliersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
