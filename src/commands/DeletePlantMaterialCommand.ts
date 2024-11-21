// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { DeletePlantMaterialInput } from "../models/models_0";
import {
  de_DeletePlantMaterialCommand,
  se_DeletePlantMaterialCommand,
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
 * The input for {@link DeletePlantMaterialCommand}.
 */
export interface DeletePlantMaterialCommandInput extends DeletePlantMaterialInput {}
/**
 * @public
 *
 * The output of {@link DeletePlantMaterialCommand}.
 */
export interface DeletePlantMaterialCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeletePlantMaterialCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeletePlantMaterialCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeletePlantMaterialInput
 *   plantId: "STRING_VALUE", // required
 *   materialId: "STRING_VALUE", // required
 * };
 * const command = new DeletePlantMaterialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlantMaterialCommandInput - {@link DeletePlantMaterialCommandInput}
 * @returns {@link DeletePlantMaterialCommandOutput}
 * @see {@link DeletePlantMaterialCommandInput} for command's `input` shape.
 * @see {@link DeletePlantMaterialCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class DeletePlantMaterialCommand extends $Command<DeletePlantMaterialCommandInput, DeletePlantMaterialCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: DeletePlantMaterialCommandInput) {
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
  ): Handler<DeletePlantMaterialCommandInput, DeletePlantMaterialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "DeletePlantMaterialCommand";
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
        operation: "DeletePlantMaterial",
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
    input: DeletePlantMaterialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeletePlantMaterialCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePlantMaterialCommandOutput> {
    return de_DeletePlantMaterialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
