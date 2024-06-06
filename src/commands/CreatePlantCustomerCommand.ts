// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  CreatePlantCustomerInput,
  Customer,
} from "../models/models_0";
import {
  de_CreatePlantCustomerCommand,
  se_CreatePlantCustomerCommand,
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
 * The input for {@link CreatePlantCustomerCommand}.
 */
export interface CreatePlantCustomerCommandInput extends CreatePlantCustomerInput {}
/**
 * @public
 *
 * The output of {@link CreatePlantCustomerCommand}.
 */
export interface CreatePlantCustomerCommandOutput extends Customer, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreatePlantCustomerCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreatePlantCustomerCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreatePlantCustomerInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // CreateCustomerPayload
 *     name: "STRING_VALUE", // required
 *     plant: Number("int"), // required
 *     extra_fields_data: [ // ExtraFieldsDataList // required
 *       { // ExtraFieldData
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *         type: "STRING_VALUE",
 *         visible_to_customer: true || false,
 *       },
 *     ],
 *   },
 * };
 * const command = new CreatePlantCustomerCommand(input);
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
 * @param CreatePlantCustomerCommandInput - {@link CreatePlantCustomerCommandInput}
 * @returns {@link CreatePlantCustomerCommandOutput}
 * @see {@link CreatePlantCustomerCommandInput} for command's `input` shape.
 * @see {@link CreatePlantCustomerCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class CreatePlantCustomerCommand extends $Command<CreatePlantCustomerCommandInput, CreatePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: CreatePlantCustomerCommandInput) {
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
  ): Handler<CreatePlantCustomerCommandInput, CreatePlantCustomerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "CreatePlantCustomerCommand";
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
        operation: "CreatePlantCustomer",
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
    input: CreatePlantCustomerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreatePlantCustomerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePlantCustomerCommandOutput> {
    return de_CreatePlantCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
