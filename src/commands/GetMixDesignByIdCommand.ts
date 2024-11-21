// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  GetMixDesignByIdInput,
  MixDesign,
} from "../models/models_0";
import {
  de_GetMixDesignByIdCommand,
  se_GetMixDesignByIdCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SMITHY_CONTEXT_KEY,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMixDesignByIdCommand}.
 */
export interface GetMixDesignByIdCommandInput extends GetMixDesignByIdInput {}
/**
 * @public
 *
 * The output of {@link GetMixDesignByIdCommand}.
 */
export interface GetMixDesignByIdCommandOutput extends MixDesign, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, GetMixDesignByIdCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, GetMixDesignByIdCommand } = require("pd-ts-client"); // CommonJS import
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
export class GetMixDesignByIdCommand extends $Command<GetMixDesignByIdCommandInput, GetMixDesignByIdCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GetMixDesignByIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PlantDemandServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMixDesignByIdCommandInput, GetMixDesignByIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { scheme: 'JWT', in: 'header', name: 'Authorization'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "GetMixDesignByIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        (_: any) => _,
      outputFilterSensitiveLog:
        (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PlantDemandService",
        operation: "GetMixDesignById",
      },
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetMixDesignByIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMixDesignByIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMixDesignByIdCommandOutput> {
    return de_GetMixDesignByIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
