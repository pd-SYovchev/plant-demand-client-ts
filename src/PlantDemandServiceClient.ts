// smithy-typescript generated code
import {
  CreateMixDesignCommandInput,
  CreateMixDesignCommandOutput,
} from "./commands/CreateMixDesignCommand";
import {
  CreateNoteCommandInput,
  CreateNoteCommandOutput,
} from "./commands/CreateNoteCommand";
import {
  CreateOrderCommandInput,
  CreateOrderCommandOutput,
} from "./commands/CreateOrderCommand";
import {
  CreateOrderDateFieldCommandInput,
  CreateOrderDateFieldCommandOutput,
} from "./commands/CreateOrderDateFieldCommand";
import {
  CreateOrderFieldCommandInput,
  CreateOrderFieldCommandOutput,
} from "./commands/CreateOrderFieldCommand";
import {
  CreatePlantCommandInput,
  CreatePlantCommandOutput,
} from "./commands/CreatePlantCommand";
import {
  CreatePlantCustomerCommandInput,
  CreatePlantCustomerCommandOutput,
} from "./commands/CreatePlantCustomerCommand";
import {
  CreatePlantMaterialCommandInput,
  CreatePlantMaterialCommandOutput,
} from "./commands/CreatePlantMaterialCommand";
import {
  DeleteMixDesignCommandInput,
  DeleteMixDesignCommandOutput,
} from "./commands/DeleteMixDesignCommand";
import {
  DeleteNoteCommandInput,
  DeleteNoteCommandOutput,
} from "./commands/DeleteNoteCommand";
import {
  DeleteOrderCommandInput,
  DeleteOrderCommandOutput,
} from "./commands/DeleteOrderCommand";
import {
  DeleteOrderDateFieldCommandInput,
  DeleteOrderDateFieldCommandOutput,
} from "./commands/DeleteOrderDateFieldCommand";
import {
  DeleteOrderFieldCommandInput,
  DeleteOrderFieldCommandOutput,
} from "./commands/DeleteOrderFieldCommand";
import {
  DeletePlantCustomerCommandInput,
  DeletePlantCustomerCommandOutput,
} from "./commands/DeletePlantCustomerCommand";
import {
  DeletePlantMaterialCommandInput,
  DeletePlantMaterialCommandOutput,
} from "./commands/DeletePlantMaterialCommand";
import {
  GetBusinessesCommandInput,
  GetBusinessesCommandOutput,
} from "./commands/GetBusinessesCommand";
import {
  GetMixDesignByIdCommandInput,
  GetMixDesignByIdCommandOutput,
} from "./commands/GetMixDesignByIdCommand";
import {
  GetMixDesignsCommandInput,
  GetMixDesignsCommandOutput,
} from "./commands/GetMixDesignsCommand";
import {
  GetOrderByIdCommandInput,
  GetOrderByIdCommandOutput,
} from "./commands/GetOrderByIdCommand";
import {
  GetOrderDateFieldsCommandInput,
  GetOrderDateFieldsCommandOutput,
} from "./commands/GetOrderDateFieldsCommand";
import {
  GetOrderFieldsCommandInput,
  GetOrderFieldsCommandOutput,
} from "./commands/GetOrderFieldsCommand";
import {
  GetPlantByIdCommandInput,
  GetPlantByIdCommandOutput,
} from "./commands/GetPlantByIdCommand";
import {
  GetPlantCustomerByIdCommandInput,
  GetPlantCustomerByIdCommandOutput,
} from "./commands/GetPlantCustomerByIdCommand";
import {
  GetPlantCustomersCommandInput,
  GetPlantCustomersCommandOutput,
} from "./commands/GetPlantCustomersCommand";
import {
  GetPlantMaterialByIdCommandInput,
  GetPlantMaterialByIdCommandOutput,
} from "./commands/GetPlantMaterialByIdCommand";
import {
  GetPlantMaterialsCommandInput,
  GetPlantMaterialsCommandOutput,
} from "./commands/GetPlantMaterialsCommand";
import {
  GetPlantSubscribersCommandInput,
  GetPlantSubscribersCommandOutput,
} from "./commands/GetPlantSubscribersCommand";
import {
  GetPlantsListCommandInput,
  GetPlantsListCommandOutput,
} from "./commands/GetPlantsListCommand";
import {
  GetSuppliersCommandInput,
  GetSuppliersCommandOutput,
} from "./commands/GetSuppliersCommand";
import {
  LoginCommandInput,
  LoginCommandOutput,
} from "./commands/LoginCommand";
import {
  RenameOrderDateFieldCommandInput,
  RenameOrderDateFieldCommandOutput,
} from "./commands/RenameOrderDateFieldCommand";
import {
  RenameOrderFieldCommandInput,
  RenameOrderFieldCommandOutput,
} from "./commands/RenameOrderFieldCommand";
import {
  ReplacePlantCustomerCommandInput,
  ReplacePlantCustomerCommandOutput,
} from "./commands/ReplacePlantCustomerCommand";
import {
  UpdateMixDesignCommandInput,
  UpdateMixDesignCommandOutput,
} from "./commands/UpdateMixDesignCommand";
import {
  UpdateNoteCommandInput,
  UpdateNoteCommandOutput,
} from "./commands/UpdateNoteCommand";
import {
  UpdateOrderCommandInput,
  UpdateOrderCommandOutput,
} from "./commands/UpdateOrderCommand";
import {
  UpdateOrderDateFieldCommandInput,
  UpdateOrderDateFieldCommandOutput,
} from "./commands/UpdateOrderDateFieldCommand";
import {
  UpdateOrderFieldCommandInput,
  UpdateOrderFieldCommandOutput,
} from "./commands/UpdateOrderFieldCommand";
import {
  UpdatePlantCommandInput,
  UpdatePlantCommandOutput,
} from "./commands/UpdatePlantCommand";
import {
  UpdatePlantCustomerCommandInput,
  UpdatePlantCustomerCommandOutput,
} from "./commands/UpdatePlantCustomerCommand";
import {
  UpdatePlantMaterialCommandInput,
  UpdatePlantMaterialCommandOutput,
} from "./commands/UpdatePlantMaterialCommand";
import {
  HttpApiKeyAuthInputConfig,
  HttpApiKeyAuthResolvedConfig,
  resolveHttpApiKeyAuthConfig,
} from "./middleware/HttpApiKeyAuth";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  RuntimeExtension,
  RuntimeExtensionsConfig,
  resolveRuntimeExtensions,
} from "./runtimeExtensions";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  CustomEndpointsInputConfig,
  CustomEndpointsResolvedConfig,
  resolveCustomEndpointsConfig,
} from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  Provider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

export { __Client }

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateMixDesignCommandInput
  | CreateNoteCommandInput
  | CreateOrderCommandInput
  | CreateOrderDateFieldCommandInput
  | CreateOrderFieldCommandInput
  | CreatePlantCommandInput
  | CreatePlantCustomerCommandInput
  | CreatePlantMaterialCommandInput
  | DeleteMixDesignCommandInput
  | DeleteNoteCommandInput
  | DeleteOrderCommandInput
  | DeleteOrderDateFieldCommandInput
  | DeleteOrderFieldCommandInput
  | DeletePlantCustomerCommandInput
  | DeletePlantMaterialCommandInput
  | GetBusinessesCommandInput
  | GetMixDesignByIdCommandInput
  | GetMixDesignsCommandInput
  | GetOrderByIdCommandInput
  | GetOrderDateFieldsCommandInput
  | GetOrderFieldsCommandInput
  | GetPlantByIdCommandInput
  | GetPlantCustomerByIdCommandInput
  | GetPlantCustomersCommandInput
  | GetPlantMaterialByIdCommandInput
  | GetPlantMaterialsCommandInput
  | GetPlantSubscribersCommandInput
  | GetPlantsListCommandInput
  | GetSuppliersCommandInput
  | LoginCommandInput
  | RenameOrderDateFieldCommandInput
  | RenameOrderFieldCommandInput
  | ReplacePlantCustomerCommandInput
  | UpdateMixDesignCommandInput
  | UpdateNoteCommandInput
  | UpdateOrderCommandInput
  | UpdateOrderDateFieldCommandInput
  | UpdateOrderFieldCommandInput
  | UpdatePlantCommandInput
  | UpdatePlantCustomerCommandInput
  | UpdatePlantMaterialCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateMixDesignCommandOutput
  | CreateNoteCommandOutput
  | CreateOrderCommandOutput
  | CreateOrderDateFieldCommandOutput
  | CreateOrderFieldCommandOutput
  | CreatePlantCommandOutput
  | CreatePlantCustomerCommandOutput
  | CreatePlantMaterialCommandOutput
  | DeleteMixDesignCommandOutput
  | DeleteNoteCommandOutput
  | DeleteOrderCommandOutput
  | DeleteOrderDateFieldCommandOutput
  | DeleteOrderFieldCommandOutput
  | DeletePlantCustomerCommandOutput
  | DeletePlantMaterialCommandOutput
  | GetBusinessesCommandOutput
  | GetMixDesignByIdCommandOutput
  | GetMixDesignsCommandOutput
  | GetOrderByIdCommandOutput
  | GetOrderDateFieldsCommandOutput
  | GetOrderFieldsCommandOutput
  | GetPlantByIdCommandOutput
  | GetPlantCustomerByIdCommandOutput
  | GetPlantCustomersCommandOutput
  | GetPlantMaterialByIdCommandOutput
  | GetPlantMaterialsCommandOutput
  | GetPlantSubscribersCommandOutput
  | GetPlantsListCommandOutput
  | GetSuppliersCommandOutput
  | LoginCommandOutput
  | RenameOrderDateFieldCommandOutput
  | RenameOrderFieldCommandOutput
  | ReplacePlantCustomerCommandOutput
  | UpdateMixDesignCommandOutput
  | UpdateNoteCommandOutput
  | UpdateOrderCommandOutput
  | UpdateOrderDateFieldCommandOutput
  | UpdateOrderFieldCommandOutput
  | UpdatePlantCommandOutput
  | UpdatePlantCustomerCommandOutput
  | UpdatePlantMaterialCommandOutput;

/**
 * @public
 */
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

}

/**
 * @public
 */
export type PlantDemandServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & CustomEndpointsInputConfig
  & RetryInputConfig
  & HostHeaderInputConfig
  & UserAgentInputConfig
  & HttpApiKeyAuthInputConfig
/**
 * @public
 *
 *  The configuration interface of PlantDemandServiceClient class constructor that set the region, credentials and other options.
 */
export interface PlantDemandServiceClientConfig extends PlantDemandServiceClientConfigType {}

/**
 * @public
 */
export type PlantDemandServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RuntimeExtensionsConfig
  & CustomEndpointsResolvedConfig
  & RetryResolvedConfig
  & HostHeaderResolvedConfig
  & UserAgentResolvedConfig
  & HttpApiKeyAuthResolvedConfig
/**
 * @public
 *
 *  The resolved configuration interface of PlantDemandServiceClient class. This is resolved and normalized from the {@link PlantDemandServiceClientConfig | constructor configuration interface}.
 */
export interface PlantDemandServiceClientResolvedConfig extends PlantDemandServiceClientResolvedConfigType {}

/**
 * @public
 */
export class PlantDemandServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PlantDemandServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of PlantDemandServiceClient class. This is resolved and normalized from the {@link PlantDemandServiceClientConfig | constructor configuration interface}.
   */
  readonly config: PlantDemandServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PlantDemandServiceClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    let _config_1 = resolveCustomEndpointsConfig(_config_0);
    let _config_2 = resolveRetryConfig(_config_1);
    let _config_3 = resolveHostHeaderConfig(_config_2);
    let _config_4 = resolveUserAgentConfig(_config_3);
    let _config_5 = resolveHttpApiKeyAuthConfig(_config_4);
    let _config_6 = resolveRuntimeExtensions(_config_5, configuration?.extensions || []);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
