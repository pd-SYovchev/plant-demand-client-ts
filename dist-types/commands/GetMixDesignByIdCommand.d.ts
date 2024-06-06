import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { GetMixDesignByIdInput, MixDesign } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMixDesignByIdCommand}.
 */
export interface GetMixDesignByIdCommandInput extends GetMixDesignByIdInput {
}
/**
 * @public
 *
 * The output of {@link GetMixDesignByIdCommand}.
 */
export interface GetMixDesignByIdCommandOutput extends MixDesign, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetMixDesignByIdCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetMixDesignByIdCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // GetMixDesignByIdInput
 *   plantId: "STRING_VALUE", // required
 *   mixDesignId: "STRING_VALUE", // required
 * };
 * const command = new GetMixDesignByIdCommand(input);
 * const response = await client.send(command);
 * // { // MixDesign
 * //   id: Number("int"), // required
 * //   expiration_date: "STRING_VALUE", // required
 * //   specification_basis: "STRING_VALUE", // required
 * //   verified: true || false, // required
 * //   removed: "STRING_VALUE", // required
 * //   output_material: Number("int"), // required
 * //   plant: Number("int"), // required
 * //   components: [ // MixDesignComponentsList // required
 * //     { // MixDesignComponent
 * //       id: "STRING_VALUE",
 * //       material: Number("int"), // required
 * //       proportion: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMixDesignByIdCommandInput - {@link GetMixDesignByIdCommandInput}
 * @returns {@link GetMixDesignByIdCommandOutput}
 * @see {@link GetMixDesignByIdCommandInput} for command's `input` shape.
 * @see {@link GetMixDesignByIdCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class GetMixDesignByIdCommand extends $Command<GetMixDesignByIdCommandInput, GetMixDesignByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: GetMixDesignByIdCommandInput;
    /**
     * @public
     */
    constructor(input: GetMixDesignByIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMixDesignByIdCommandInput, GetMixDesignByIdCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
