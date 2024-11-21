// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetPlantByIdInput,
  Plant,
} from "../models/models_0";
import {
  de_GetPlantByIdCommand,
  se_GetPlantByIdCommand,
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
 * The input for {@link GetPlantByIdCommand}.
 */
export interface GetPlantByIdCommandInput extends GetPlantByIdInput {}
/**
 * @public
 *
 * The output of {@link GetPlantByIdCommand}.
 */
export interface GetPlantByIdCommandOutput extends Plant, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantByIdCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantByIdInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantByIdCommand(input);
 * const response = await client.send(command);
 * // { // Plant
 * //   id: Number("int"),
 * //   name: "STRING_VALUE",
 * //   address: "STRING_VALUE",
 * //   picture: "STRING_VALUE",
 * //   max_capacity: Number("int"),
 * //   plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer",
 * //   night_shift_from: "STRING_VALUE",
 * //   night_shift_to: "STRING_VALUE",
 * //   business: Number("int"),
 * //   owner: Number("int"),
 * //   removed: {},
 * //   source_plant: Number("int"),
 * //   customer_name: "STRING_VALUE",
 * //   show_produced_materials: true || false,
 * // };
 *
 * ```
 *
 * @param GetPlantByIdCommandInput - {@link GetPlantByIdCommandInput}
 * @returns {@link GetPlantByIdCommandOutput}
 * @see {@link GetPlantByIdCommandInput} for command's `input` shape.
 * @see {@link GetPlantByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantByIdCommand extends $Command<GetPlantByIdCommandInput, GetPlantByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantByIdCommandInput) {
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
  ): Handler<GetPlantByIdCommandInput, GetPlantByIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantByIdCommand";
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
        operation: "GetPlantById",
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
    input: GetPlantByIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantByIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantByIdCommandOutput> {
    return de_GetPlantByIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
