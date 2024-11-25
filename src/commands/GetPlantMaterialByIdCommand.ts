// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetPlantMaterialByIdInput,
  Material,
} from "../models/models_0";
import {
  de_GetPlantMaterialByIdCommand,
  se_GetPlantMaterialByIdCommand,
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
 * The input for {@link GetPlantMaterialByIdCommand}.
 */
export interface GetPlantMaterialByIdCommandInput extends GetPlantMaterialByIdInput {}
/**
 * @public
 *
 * The output of {@link GetPlantMaterialByIdCommand}.
 */
export interface GetPlantMaterialByIdCommandOutput extends Material, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantMaterialByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantMaterialByIdCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantMaterialByIdInput
 *   plantId: "STRING_VALUE", // required
 *   materialId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantMaterialByIdCommand(input);
 * const response = await client.send(command);
 * // { // Material
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   removed: "STRING_VALUE", // required
 * //   system_color: "STRING_VALUE",
 * //   visible_to_customer: true || false,
 * //   active: true || false,
 * //   is_output_material: true || false,
 * //   plant: Number("int"),
 * //   supplier_id: Number("int"),
 * //   supplier_name: "STRING_VALUE",
 * //   supplier_product_name: "STRING_VALUE",
 * //   min_inventory_amount: Number("int"),
 * //   max_inventory_amount: Number("int"),
 * //   current_inventory_amount: Number("int"),
 * //   current_inventory_updated_on: "STRING_VALUE",
 * //   mix_designs: [ // MixDesingList
 * //     Number("int"),
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantMaterialByIdCommandInput - {@link GetPlantMaterialByIdCommandInput}
 * @returns {@link GetPlantMaterialByIdCommandOutput}
 * @see {@link GetPlantMaterialByIdCommandInput} for command's `input` shape.
 * @see {@link GetPlantMaterialByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantMaterialByIdCommand extends $Command<GetPlantMaterialByIdCommandInput, GetPlantMaterialByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantMaterialByIdCommandInput) {
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
  ): Handler<GetPlantMaterialByIdCommandInput, GetPlantMaterialByIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantMaterialByIdCommand";
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
        operation: "GetPlantMaterialById",
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
    input: GetPlantMaterialByIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantMaterialByIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantMaterialByIdCommandOutput> {
    return de_GetPlantMaterialByIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
