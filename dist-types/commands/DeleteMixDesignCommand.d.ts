import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { DeleteMixDesignInput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMixDesignCommand}.
 */
export interface DeleteMixDesignCommandInput extends DeleteMixDesignInput {
}
/**
 * @public
 *
 * The output of {@link DeleteMixDesignCommand}.
 */
export interface DeleteMixDesignCommandOutput extends __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, DeleteMixDesignCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, DeleteMixDesignCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // DeleteMixDesignInput
 *   plantId: "STRING_VALUE", // required
 *   mixDesignId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMixDesignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMixDesignCommandInput - {@link DeleteMixDesignCommandInput}
 * @returns {@link DeleteMixDesignCommandOutput}
 * @see {@link DeleteMixDesignCommandInput} for command's `input` shape.
 * @see {@link DeleteMixDesignCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class DeleteMixDesignCommand extends $Command<DeleteMixDesignCommandInput, DeleteMixDesignCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: DeleteMixDesignCommandInput;
    /**
     * @public
     */
    constructor(input: DeleteMixDesignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMixDesignCommandInput, DeleteMixDesignCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
