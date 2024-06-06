import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { Order, UpdateOrderInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrderCommand}.
 */
export interface UpdateOrderCommandInput extends UpdateOrderInput {
}
/**
 * @public
 *
 * The output of {@link UpdateOrderCommand}.
 */
export interface UpdateOrderCommandOutput extends Order, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateOrderCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateOrderCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdateOrderInput
 *   plantId: "STRING_VALUE", // required
 *   orderId: "STRING_VALUE", // required
 *   body: { // UpdateOrderPayload
 *     customer: "STRING_VALUE", // required
 *     material: Number("int"), // required
 *     dates: [ // OrderDatesList // required
 *       { // OrderDate
 *         quantity: "STRING_VALUE", // required
 *         delivery_on: "STRING_VALUE", // required
 *         load_time: "STRING_VALUE",
 *         night_shift: true || false,
 *         extra_fields_data: [ // ExtraFieldsDataList
 *           { // ExtraFieldData
 *             key: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *             type: "STRING_VALUE",
 *             visible_to_customer: true || false,
 *           },
 *         ],
 *       },
 *     ],
 *     extra_fields_data: [
 *       {
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *         type: "STRING_VALUE",
 *         visible_to_customer: true || false,
 *       },
 *     ],
 *     tentative: true || false,
 *     notify_team: true || false,
 *   },
 * };
 * const command = new UpdateOrderCommand(input);
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
 * @param UpdateOrderCommandInput - {@link UpdateOrderCommandInput}
 * @returns {@link UpdateOrderCommandOutput}
 * @see {@link UpdateOrderCommandInput} for command's `input` shape.
 * @see {@link UpdateOrderCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdateOrderCommand extends $Command<UpdateOrderCommandInput, UpdateOrderCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdateOrderCommandInput;
    /**
     * @public
     */
    constructor(input: UpdateOrderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOrderCommandInput, UpdateOrderCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
