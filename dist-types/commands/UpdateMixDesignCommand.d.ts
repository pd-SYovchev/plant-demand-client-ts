import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { UpdateMixDesignInput, UpdateMixDesignPayload } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMixDesignCommand}.
 */
export interface UpdateMixDesignCommandInput extends UpdateMixDesignInput {
}
/**
 * @public
 *
 * The output of {@link UpdateMixDesignCommand}.
 */
export interface UpdateMixDesignCommandOutput extends UpdateMixDesignPayload, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateMixDesignCommand } from "@pd-api/client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateMixDesignCommand } = require("@pd-api/client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // UpdateMixDesignInput
 *   plantId: "STRING_VALUE", // required
 *   mixDesignId: "STRING_VALUE", // required
 *   body: { // UpdateMixDesignPayload
 *     id: "STRING_VALUE",
 *     expiration_date: "STRING_VALUE",
 *     specification_basis: "STRING_VALUE",
 *     verified: true || false,
 *     removed: "STRING_VALUE",
 *     output_material: Number("int"),
 *     components: [ // MixDesignComponentsList // required
 *       { // MixDesignComponent
 *         id: "STRING_VALUE",
 *         material: Number("int"), // required
 *         proportion: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateMixDesignCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMixDesignPayload
 * //   id: "STRING_VALUE",
 * //   expiration_date: "STRING_VALUE",
 * //   specification_basis: "STRING_VALUE",
 * //   verified: true || false,
 * //   removed: "STRING_VALUE",
 * //   output_material: Number("int"),
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
 * @param UpdateMixDesignCommandInput - {@link UpdateMixDesignCommandInput}
 * @returns {@link UpdateMixDesignCommandOutput}
 * @see {@link UpdateMixDesignCommandInput} for command's `input` shape.
 * @see {@link UpdateMixDesignCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class UpdateMixDesignCommand extends $Command<UpdateMixDesignCommandInput, UpdateMixDesignCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: UpdateMixDesignCommandInput;
    /**
     * @public
     */
    constructor(input: UpdateMixDesignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMixDesignCommandInput, UpdateMixDesignCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
