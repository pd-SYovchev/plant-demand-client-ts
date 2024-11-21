import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { CreateMixDesignInput, MixDesign } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMixDesignCommand}.
 */
export interface CreateMixDesignCommandInput extends CreateMixDesignInput {
}
/**
 * @public
 *
 * The output of {@link CreateMixDesignCommand}.
 */
export interface CreateMixDesignCommandOutput extends MixDesign, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, CreateMixDesignCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, CreateMixDesignCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // CreateMixDesignInput
 *   plantId: "STRING_VALUE", // required
 *   body: { // CreateMixDesignPayload
 *     expiration_date: "STRING_VALUE",
 *     specification_basis: "STRING_VALUE",
 *     verified: true || false,
 *     output_material: Number("int"), // required
 *     components: [ // MixDesignComponentsList // required
 *       { // MixDesignComponent
 *         id: "STRING_VALUE",
 *         material: Number("int"), // required
 *         proportion: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateMixDesignCommand(input);
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
 * @param CreateMixDesignCommandInput - {@link CreateMixDesignCommandInput}
 * @returns {@link CreateMixDesignCommandOutput}
 * @see {@link CreateMixDesignCommandInput} for command's `input` shape.
 * @see {@link CreateMixDesignCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class CreateMixDesignCommand extends $Command<CreateMixDesignCommandInput, CreateMixDesignCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: CreateMixDesignCommandInput;
    /**
     * @public
     */
    constructor(input: CreateMixDesignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMixDesignCommandInput, CreateMixDesignCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
