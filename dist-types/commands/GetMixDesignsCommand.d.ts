import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetMixDesignsInput, GetMixDesignsOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMixDesignsCommand}.
 */
export interface GetMixDesignsCommandInput extends GetMixDesignsInput {
}
/**
 * @public
 *
 * The output of {@link GetMixDesignsCommand}.
 */
export interface GetMixDesignsCommandOutput extends GetMixDesignsOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetMixDesignsCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetMixDesignsCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetMixDesignsInput
 *   plantId: "STRING_VALUE", // required
 * };
 * const command = new GetMixDesignsCommand(input);
 * const response = await client.send(command);
 * // { // GetMixDesignsOutput
 * //   id: Number("int"), // required
 * //   name: "STRING_VALUE", // required
 * //   expiration_date: "STRING_VALUE",
 * //   removed: "STRING_VALUE",
 * //   specification_basis: "STRING_VALUE",
 * //   verified: true || false,
 * //   output_material: Number("int"), // required
 * //   plant: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetMixDesignsCommandInput - {@link GetMixDesignsCommandInput}
 * @returns {@link GetMixDesignsCommandOutput}
 * @see {@link GetMixDesignsCommandInput} for command's `input` shape.
 * @see {@link GetMixDesignsCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetMixDesignsCommand extends $Command<GetMixDesignsCommandInput, GetMixDesignsCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetMixDesignsCommandInput;
    /**
     * @public
     */
    constructor(input: GetMixDesignsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMixDesignsCommandInput, GetMixDesignsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
