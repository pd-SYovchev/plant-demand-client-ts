import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetSuppliersOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSuppliersCommand}.
 */
export interface GetSuppliersCommandInput {
}
/**
 * @public
 *
 * The output of {@link GetSuppliersCommand}.
 */
export interface GetSuppliersCommandOutput extends GetSuppliersOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetSuppliersCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetSuppliersCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = {};
 * const command = new GetSuppliersCommand(input);
 * const response = await client.send(command);
 * // { // GetSuppliersOutput
 * //   data: [ // SupplierList // required
 * //     { // Supplier
 * //       email: "STRING_VALUE", // required
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       address: "STRING_VALUE", // required
 * //       business: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSuppliersCommandInput - {@link GetSuppliersCommandInput}
 * @returns {@link GetSuppliersCommandOutput}
 * @see {@link GetSuppliersCommandInput} for command's `input` shape.
 * @see {@link GetSuppliersCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetSuppliersCommand extends $Command<GetSuppliersCommandInput, GetSuppliersCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetSuppliersCommandInput;
    /**
     * @public
     */
    constructor(input: GetSuppliersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuppliersCommandInput, GetSuppliersCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
