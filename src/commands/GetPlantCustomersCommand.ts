// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetPlantCustomersInput,
  GetPlantCustomersOutput,
} from "../models/models_0";
import {
  de_GetPlantCustomersCommand,
  se_GetPlantCustomersCommand,
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
 * The input for {@link GetPlantCustomersCommand}.
 */
export interface GetPlantCustomersCommandInput extends GetPlantCustomersInput {}
/**
 * @public
 *
 * The output of {@link GetPlantCustomersCommand}.
 */
export interface GetPlantCustomersCommandOutput extends GetPlantCustomersOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetPlantCustomersCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetPlantCustomersCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetPlantCustomersInput
 *   plantId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   include_removed: true || false,
 * };
 * const command = new GetPlantCustomersCommand(input);
 * const response = await client.send(command);
 * // { // GetPlantCustomersOutput
 * //   data: [ // CustomerList // required
 * //     { // Customer
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       plant: Number("int"), // required
 * //       extra_fields_data: [ // ExtraFieldsDataList // required
 * //         { // ExtraFieldData
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           visible_to_customer: true || false,
 * //         },
 * //       ],
 * //       removed: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlantCustomersCommandInput - {@link GetPlantCustomersCommandInput}
 * @returns {@link GetPlantCustomersCommandOutput}
 * @see {@link GetPlantCustomersCommandInput} for command's `input` shape.
 * @see {@link GetPlantCustomersCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetPlantCustomersCommand extends $Command<GetPlantCustomersCommandInput, GetPlantCustomersCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetPlantCustomersCommandInput) {
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
  ): Handler<GetPlantCustomersCommandInput, GetPlantCustomersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetPlantCustomersCommand";
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
        operation: "GetPlantCustomers",
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
    input: GetPlantCustomersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPlantCustomersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlantCustomersCommandOutput> {
    return de_GetPlantCustomersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
