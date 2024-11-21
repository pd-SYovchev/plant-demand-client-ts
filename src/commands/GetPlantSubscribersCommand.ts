// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetPlantSubscribersInput,
  GetPlantSubscribersOutput,
} from "../models/models_0";
import {
  de_GetPlantSubscribersCommand,
  se_GetPlantSubscribersCommand,
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
 * The input for {@link GetPlantSubscribersCommand}.
 */
export interface GetPlantSubscribersCommandInput extends GetPlantSubscribersInput {}
/**
 * @public
 *
 * The output of {@link GetPlantSubscribersCommand}.
 */
export interface GetPlantSubscribersCommandOutput extends GetPlantSubscribersOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantSubscribersCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantSubscribersCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantSubscribersInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantSubscribersCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantSubscribersOutput
 * //   data: [ // PlantSubscriberList // required
 * //     { // Subscriber
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       plant: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantSubscribersCommandInput - {@link GetPlantSubscribersCommandInput}
 * @returns {@link GetPlantSubscribersCommandOutput}
 * @see {@link GetPlantSubscribersCommandInput} for command's `input` shape.
 * @see {@link GetPlantSubscribersCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantSubscribersCommand extends $Command<GetPlantSubscribersCommandInput, GetPlantSubscribersCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantSubscribersCommandInput) {
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
  ): Handler<GetPlantSubscribersCommandInput, GetPlantSubscribersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantSubscribersCommand";
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
        operation: "GetPlantSubscribers",
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
    input: GetPlantSubscribersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantSubscribersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantSubscribersCommandOutput> {
    return de_GetPlantSubscribersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
