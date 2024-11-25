// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  CreatePlantInput,
  Plant,
} from "../models/models_0";
import {
  de_CreatePlantCommand,
  se_CreatePlantCommand,
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
 * The input for {@link CreatePlantCommand}.
 */
export interface CreatePlantCommandInput extends CreatePlantInput {}
/**
 * @public
 *
 * The output of {@link CreatePlantCommand}.
 */
export interface CreatePlantCommandOutput extends Plant, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreatePlantCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreatePlantCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreatePlantInput
 *   name: "STRING_VALUE", // required
 *   address: "STRING_VALUE", // required
 *   plant_type: "Mix" || "Aggregate" || "PavingSchedule" || "Customer", // required
 *   max_capacity: Number("int"), // required
 *   night_shift_from: "STRING_VALUE", // required
 *   night_shift_to: "STRING_VALUE", // required
 *   phone_number: "STRING_VALUE",
 * };
 * const command = new CreatePlantCommand(input);
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
 * @param CreatePlantCommandInput - {@link CreatePlantCommandInput}
 * @returns {@link CreatePlantCommandOutput}
 * @see {@link CreatePlantCommandInput} for command's `input` shape.
 * @see {@link CreatePlantCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class CreatePlantCommand extends $Command<CreatePlantCommandInput, CreatePlantCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: CreatePlantCommandInput) {
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
  ): Handler<CreatePlantCommandInput, CreatePlantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "CreatePlantCommand";
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
        operation: "CreatePlant",
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
    input: CreatePlantCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreatePlantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePlantCommandOutput> {
    return de_CreatePlantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
