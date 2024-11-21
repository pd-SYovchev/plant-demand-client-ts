// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  Customer,
  GetPlantCustomerByIdInput,
} from "../models/models_0";
import {
  de_GetPlantCustomerByIdCommand,
  se_GetPlantCustomerByIdCommand,
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
 * The input for {@link GetPlantCustomerByIdCommand}.
 */
export interface GetPlantCustomerByIdCommandInput extends GetPlantCustomerByIdInput {}
/**
 * @public
 *
 * The output of {@link GetPlantCustomerByIdCommand}.
 */
export interface GetPlantCustomerByIdCommandOutput extends Customer, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantCustomerByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantCustomerByIdCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantCustomerByIdInput
 *   plantId: "STRING_VALUE", // required
 *   customerId: "STRING_VALUE", // required
 * };
 * const command = new GetPlantCustomerByIdCommand(input);
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
 * @param GetPlantCustomerByIdCommandInput - {@link GetPlantCustomerByIdCommandInput}
 * @returns {@link GetPlantCustomerByIdCommandOutput}
 * @see {@link GetPlantCustomerByIdCommandInput} for command's `input` shape.
 * @see {@link GetPlantCustomerByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantCustomerByIdCommand extends $Command<GetPlantCustomerByIdCommandInput, GetPlantCustomerByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantCustomerByIdCommandInput) {
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
  ): Handler<GetPlantCustomerByIdCommandInput, GetPlantCustomerByIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantCustomerByIdCommand";
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
        operation: "GetPlantCustomerById",
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
    input: GetPlantCustomerByIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantCustomerByIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantCustomerByIdCommandOutput> {
    return de_GetPlantCustomerByIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
