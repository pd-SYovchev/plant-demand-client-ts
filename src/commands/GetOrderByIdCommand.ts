// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetOrderByIdInput,
  Order,
} from "../models/models_0";
import {
  de_GetOrderByIdCommand,
  se_GetOrderByIdCommand,
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
 * The input for {@link GetOrderByIdCommand}.
 */
export interface GetOrderByIdCommandInput extends GetOrderByIdInput {}
/**
 * @public
 *
 * The output of {@link GetOrderByIdCommand}.
 */
export interface GetOrderByIdCommandOutput extends Order, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetOrderByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetOrderByIdCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetOrderByIdInput
 *   plantId: "STRING_VALUE", // required
 *   orderId: "STRING_VALUE", // required
 * };
 * const command = new GetOrderByIdCommand(input);
 * const response = await client.send(command);
 * // { // Order
 * //   id: Number("int"), // required
 * //   customer: "STRING_VALUE", // required
 * //   material: Number("int"), // required
 * //   dates: [ // OrderDateServerResponse // required
 * //     { // OrderDateServer
 * //       id: Number("int"),
 * //       delivery_on: "STRING_VALUE",
 * //       extra_fields_data: [ // ExtraFieldsDataList
 * //         { // ExtraFieldData
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           visible_to_customer: true || false,
 * //         },
 * //       ],
 * //       removed: "STRING_VALUE",
 * //       quantity: Number("int"),
 * //       created_at: "STRING_VALUE",
 * //       modified_at: "STRING_VALUE",
 * //       nightshift: true || false,
 * //       load_time: "STRING_VALUE",
 * //       created_by: Number("int"),
 * //       modified_by: Number("int"),
 * //       order: Number("int"),
 * //       plant: Number("int"),
 * //     },
 * //   ],
 * //   extra_fields_data: [ // required
 * //     {
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       visible_to_customer: true || false,
 * //     },
 * //   ],
 * //   feed: [ // OrderFeedList // required
 * //     { // OrderFeed
 * //       id: Number("int"),
 * //       order_id: Number("int"),
 * //       comment: "STRING_VALUE",
 * //       created_at: "STRING_VALUE",
 * //       created_by: "STRING_VALUE",
 * //       deleted: true || false,
 * //       messages: [ // OrderFeedMessagesList
 * //         { // OrderFeedMessage
 * //           message: "STRING_VALUE",
 * //           template: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           order_request: Number("int"),
 * //         },
 * //       ],
 * //       feed_records: [ // OrderFeedRecordsList
 * //         { // OrderFeedRecord
 * //           id: Number("int"),
 * //           item_id: Number("int"),
 * //           feed_item: Number("int"),
 * //           field_name: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //           new_value: "STRING_VALUE",
 * //           old_value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   plant: Number("int"), // required
 * //   tentative: true || false, // required
 * //   created_at: "STRING_VALUE", // required
 * //   created_by: Number("int"), // required
 * //   created_by_name: "STRING_VALUE", // required
 * //   modified_at: "STRING_VALUE", // required
 * //   modified_by_name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetOrderByIdCommandInput - {@link GetOrderByIdCommandInput}
 * @returns {@link GetOrderByIdCommandOutput}
 * @see {@link GetOrderByIdCommandInput} for command's `input` shape.
 * @see {@link GetOrderByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export class GetOrderByIdCommand extends $Command<GetOrderByIdCommandInput, GetOrderByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetOrderByIdCommandInput) {
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
  ): Handler<GetOrderByIdCommandInput, GetOrderByIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetOrderByIdCommand";
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
        operation: "GetOrderById",
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
    input: GetOrderByIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetOrderByIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrderByIdCommandOutput> {
    return de_GetOrderByIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
