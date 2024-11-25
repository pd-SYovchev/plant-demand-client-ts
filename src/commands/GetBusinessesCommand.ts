// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { GetBusinessesOutput } from "../models/models_0";
import {
  de_GetBusinessesCommand,
  se_GetBusinessesCommand,
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
 * The input for {@link GetBusinessesCommand}.
 */
export interface GetBusinessesCommandInput {}
/**
 * @public
 *
 * The output of {@link GetBusinessesCommand}.
 */
export interface GetBusinessesCommandOutput extends GetBusinessesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetBusinessesCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetBusinessesCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = {};
 * const command = new GetBusinessesCommand(input);
 * const response = await client.send(command);
 * // { // GetBusinessesOutput
 * //   data: [ // BusinessList // required
 * //     { // Business
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       removed: "STRING_VALUE",
 * //       members: [ // BusinessMemberList
 * //         { // BusinessMember
 * //           id: Number("int"),
 * //           username: "STRING_VALUE",
 * //           first_name: "STRING_VALUE",
 * //           last_name: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           is_staff: true || false,
 * //           is_active: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBusinessesCommandInput - {@link GetBusinessesCommandInput}
 * @returns {@link GetBusinessesCommandOutput}
 * @see {@link GetBusinessesCommandInput} for command's `input` shape.
 * @see {@link GetBusinessesCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetBusinessesCommand extends $Command<GetBusinessesCommandInput, GetBusinessesCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetBusinessesCommandInput) {
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
  ): Handler<GetBusinessesCommandInput, GetBusinessesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetBusinessesCommand";
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
        operation: "GetBusinesses",
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
    input: GetBusinessesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBusinessesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBusinessesCommandOutput> {
    return de_GetBusinessesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
