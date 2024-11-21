import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { CreatePlantCustomerInput, Customer } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePlantCustomerCommand}.
 */
export interface CreatePlantCustomerCommandInput extends CreatePlantCustomerInput {
}
/**
 * @public
 *
 * The output of {@link CreatePlantCustomerCommand}.
 */
export interface CreatePlantCustomerCommandOutput extends Customer, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreatePlantCustomerCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreatePlantCustomerCommand } = require("pd-ts-client"); // CommonJS import
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
export declare class CreatePlantCustomerCommand extends $Command<CreatePlantCustomerCommandInput, CreatePlantCustomerCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: CreatePlantCustomerCommandInput;
    /**
     * @public
     */
    constructor(input: CreatePlantCustomerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlantCustomerCommandInput, CreatePlantCustomerCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
