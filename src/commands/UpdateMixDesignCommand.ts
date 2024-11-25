// smithy-typescript generated code
import {
  PlantDemandServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PlantDemandServiceClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import {
  UpdateMixDesignInput,
  UpdateMixDesignPayload,
} from "../models/models_0";
import {
  de_UpdateMixDesignCommand,
  se_UpdateMixDesignCommand,
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
 * The input for {@link UpdateMixDesignCommand}.
 */
export interface UpdateMixDesignCommandInput extends UpdateMixDesignInput {}
/**
 * @public
 *
 * The output of {@link UpdateMixDesignCommand}.
 */
export interface UpdateMixDesignCommandOutput extends UpdateMixDesignPayload, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PlantDemandServiceClient, UpdateMixDesignCommand } from "pd-ts-client"; // ES Modules import
 * // const { PlantDemandServiceClient, UpdateMixDesignCommand } = require("pd-ts-client"); // CommonJS import
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
export class UpdateMixDesignCommand extends $Command<UpdateMixDesignCommandInput, UpdateMixDesignCommandOutput, PlantDemandServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: UpdateMixDesignCommandInput) {
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
  ): Handler<UpdateMixDesignCommandInput, UpdateMixDesignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getHttpApiKeyAuthPlugin(configuration, { in: 'header', name: 'Server-Api-Key'}));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PlantDemandServiceClient";
    const commandName = "UpdateMixDesignCommand";
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
        operation: "UpdateMixDesign",
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
    input: UpdateMixDesignCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateMixDesignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMixDesignCommandOutput> {
    return de_UpdateMixDesignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
