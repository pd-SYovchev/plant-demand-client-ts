// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  Customer,
  UpdatePlantCustomerInput,
} from "../models/models_0";
import {
  de_UpdatePlantCustomerCommand,
  se_UpdatePlantCustomerCommand,
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
 * The input for {@link UpdatePlantCustomerCommand}.
 */
export interface UpdatePlantCustomerCommandInput extends UpdatePlantCustomerInput {}
/**
 * @public
 *
 * The output of {@link UpdatePlantCustomerCommand}.
 */
export interface UpdatePlantCustomerCommandOutput extends Customer, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdatePlantCustomerCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdatePlantCustomerCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdatePlantCustomerInput
 *   plantId: "STRING_VALUE", // required
 *   customerId: "STRING_VALUE", // required
 *   body: { // UpdateCustomerPayload
 *     name: "STRING_VALUE", // required
 *     extra_fields_data: [ // ExtraFieldsDataList
 *       { // ExtraFieldData
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *         type: "STRING_VALUE",
 *         visible_to_customer: true || false,
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdatePlantCustomerCommand(input);
 * const response = await client.send(command);
 * // { // Customer
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   plant: Number("int"), // required
 * //   extra_fields_data: [ // ExtraFieldsDataList // required
 * //     { // ExtraFieldData
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       visible_to_customer: true || false,
 * //     },
 * //   ],
 * //   removed: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePlantCustomerCommandInput - {@link UpdatePlantCustomerCommandInput}
 * @returns {@link UpdatePlantCustomerCommandOutput}
 * @see {@link UpdatePlantCustomerCommandInput} for command's `input` shape.
 * @see {@link UpdatePlantCustomerCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class UpdatePlantCustomerCommand extends $Command<UpdatePlantCustomerCommandInput, UpdatePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: UpdatePlantCustomerCommandInput) {
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
  ): Handler<UpdatePlantCustomerCommandInput, UpdatePlantCustomerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "UpdatePlantCustomerCommand";
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
        operation: "UpdatePlantCustomer",
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
    input: UpdatePlantCustomerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdatePlantCustomerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePlantCustomerCommandOutput> {
    return de_UpdatePlantCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
