import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetBusinessesOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBusinessesCommand}.
 */
export interface GetBusinessesCommandInput {
}
/**
 * @public
 *
 * The output of {@link GetBusinessesCommand}.
 */
export interface GetBusinessesCommandOutput extends GetBusinessesOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetBusinessesCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetBusinessesCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = {};
 * const command = new GetBusinessesCommand(input);
 * const response = await client.send(command);
 * // { // GetBusinessesOutput
 * //   data: [ // BusinessList // required
 * //     { // Business
 * //       id: Number("int"), // required
 * //       name: "STRING_VALUE", // required
 * //       removed: "STRING_VALUE",
 * //       members: [ // BusinessMemberList
 * //         { // BusinessMember
 * //           id: Number("int"),
 * //           username: "STRING_VALUE",
 * //           first_name: "STRING_VALUE",
 * //           last_name: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           is_staff: true || false,
 * //           is_active: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBusinessesCommandInput - {@link GetBusinessesCommandInput}
 * @returns {@link GetBusinessesCommandOutput}
 * @see {@link GetBusinessesCommandInput} for command's `input` shape.
 * @see {@link GetBusinessesCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetBusinessesCommand extends $Command<GetBusinessesCommandInput, GetBusinessesCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetBusinessesCommandInput;
    /**
     * @public
     */
    constructor(input: GetBusinessesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBusinessesCommandInput, GetBusinessesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
