import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { Customer, GetPlantCustomerByIdInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantCustomerByIdCommand}.
 */
export interface GetPlantCustomerByIdCommandInput extends GetPlantCustomerByIdInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantCustomerByIdCommand}.
 */
export interface GetPlantCustomerByIdCommandOutput extends Customer, __MetadataBearer {
}
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
export declare class GetPlantCustomerByIdCommand extends $Command<GetPlantCustomerByIdCommandInput, GetPlantCustomerByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantCustomerByIdCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantCustomerByIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantCustomerByIdCommandInput, GetPlantCustomerByIdCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
