import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { Customer, UpdatePlantCustomerInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlantCustomerCommand}.
 */
export interface UpdatePlantCustomerCommandInput extends UpdatePlantCustomerInput {
}
/**
 * @public
 *
 * The output of {@link UpdatePlantCustomerCommand}.
 */
export interface UpdatePlantCustomerCommandOutput extends Customer, __MetadataBearer {
}
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
export declare class UpdatePlantCustomerCommand extends $Command<UpdatePlantCustomerCommandInput, UpdatePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdatePlantCustomerCommandInput;
    /**
     * @public
     */
    constructor(input: UpdatePlantCustomerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePlantCustomerCommandInput, UpdatePlantCustomerCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
