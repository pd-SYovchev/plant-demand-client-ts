import { PlantDemandServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PlantDemandServiceClient";
import { LoginInput, LoginOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LoginCommand}.
 */
export interface LoginCommandInput extends LoginInput {
}
/**
 * @public
 *
 * The output of {@link LoginCommand}.
 */
export interface LoginCommandOutput extends LoginOutput, __MetadataBearer {
}
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, LoginCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, LoginCommand } = require("pd-ts-client"); // CommonJS import
 * const client = new PlantDemandServiceClient(config);
 * const input = { // LoginInput
 *   username: "STRING_VALUE", // required
 *   password: "STRING_VALUE", // required
 * };
 * const command = new LoginCommand(input);
 * const response = await client.send(command);
 * // { // LoginOutput
 * //   token: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param LoginCommandInput - {@link LoginCommandInput}
 * @returns {@link LoginCommandOutput}
 * @see {@link LoginCommandInput} for command's `input` shape.
 * @see {@link LoginCommandOutput} for command's `response` shape.
 * @see {@link PlantDemandServiceClientResolvedConfig | config} for PlantDemandServiceClient's `config` shape.
 *
 * @throws {@link PlantDemandServiceServiceException}
 * <p>Base exception class for all service exceptions from PlantDemandService service.</p>
 *
 */
export declare class LoginCommand extends $Command<LoginCommandInput, LoginCommandOutput, PlantDemandServiceClientResolvedConfig> {
    readonly input: LoginCommandInput;
    /**
     * @public
     */
    constructor(input: LoginCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PlantDemandServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LoginCommandInput, LoginCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
