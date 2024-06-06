// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetPlantsListInput,
  GetPlantsListOutput,
} from "../models/models_0";
import {
  de_GetPlantsListCommand,
  se_GetPlantsListCommand,
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
 * The input for {@link GetPlantsListCommand}.
 */
export interface GetPlantsListCommandInput extends GetPlantsListInput {}
/**
 * @public
 *
 * The output of {@link GetPlantsListCommand}.
 */
export interface GetPlantsListCommandOutput extends GetPlantsListOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantsListCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantsListCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantsListInput
 *   permissions: "STRING_VALUE",
 *   show_inactive: true || false,
 * };
 * const command = new GetPlantsListCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantsListOutput
 * //   data: [ // PlantsList // required
 * //     { // Plant
 * //       id: Number("int"),
 * //       name: "STRING_VALUE",
 * //       address: "STRING_VALUE",
 * //       picture: "STRING_VALUE",
 * //       max_capacity: Number("int"),
 * //       plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer",
 * //       night_shift_from: "STRING_VALUE",
 * //       night_shift_to: "STRING_VALUE",
 * //       business: Number("int"),
 * //       owner: Number("int"),
 * //       removed: {},
 * //       source_plant: Number("int"),
 * //       customer_name: "STRING_VALUE",
 * //       show_produced_materials: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantsListCommandInput - {@link GetPlantsListCommandInput}
 * @returns {@link GetPlantsListCommandOutput}
 * @see {@link GetPlantsListCommandInput} for command's `input` shape.
 * @see {@link GetPlantsListCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantsListCommand extends $Command<GetPlantsListCommandInput, GetPlantsListCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantsListCommandInput) {
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
  ): Handler<GetPlantsListCommandInput, GetPlantsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantsListCommand";
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
        operation: "GetPlantsList",
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
    input: GetPlantsListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantsListCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantsListCommandOutput> {
    return de_GetPlantsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
