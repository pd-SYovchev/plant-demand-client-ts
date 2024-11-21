import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetPlantCustomersInput, GetPlantCustomersOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlantCustomersCommand}.
 */
export interface GetPlantCustomersCommandInput extends GetPlantCustomersInput {
}
/**
 * @public
 *
 * The output of {@link GetPlantCustomersCommand}.
 */
export interface GetPlantCustomersCommandOutput extends GetPlantCustomersOutput, __MetadataBearer {
}
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
export declare class GetPlantCustomersCommand extends $Command<GetPlantCustomersCommandInput, GetPlantCustomersCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetPlantCustomersCommandInput;
    /**
     * @public
     */
    constructor(input: GetPlantCustomersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlantCustomersCommandInput, GetPlantCustomersCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
