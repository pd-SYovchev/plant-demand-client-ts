// smithy-typescript generated code
import {
  PlantDemandServiceClient,
  PlantDemandServiceClientConfig,
} from "./PlantDemandServiceClient";
import {
  CreateMixDesignCommand,
  CreateMixDesignCommandInput,
  CreateMixDesignCommandOutput,
} from "./commands/CreateMixDesignCommand";
import {
  CreateNoteCommand,
  CreateNoteCommandInput,
  CreateNoteCommandOutput,
} from "./commands/CreateNoteCommand";
import {
  CreateOrderCommand,
  CreateOrderCommandInput,
  CreateOrderCommandOutput,
} from "./commands/CreateOrderCommand";
import {
  CreateOrderDateFieldCommand,
  CreateOrderDateFieldCommandInput,
  CreateOrderDateFieldCommandOutput,
} from "./commands/CreateOrderDateFieldCommand";
import {
  CreateOrderFieldCommand,
  CreateOrderFieldCommandInput,
  CreateOrderFieldCommandOutput,
} from "./commands/CreateOrderFieldCommand";
import {
  CreatePlantCommand,
  CreatePlantCommandInput,
  CreatePlantCommandOutput,
} from "./commands/CreatePlantCommand";
import {
  CreatePlantCustomerCommand,
  CreatePlantCustomerCommandInput,
  CreatePlantCustomerCommandOutput,
} from "./commands/CreatePlantCustomerCommand";
import {
  CreatePlantMaterialCommand,
  CreatePlantMaterialCommandInput,
  CreatePlantMaterialCommandOutput,
} from "./commands/CreatePlantMaterialCommand";
import {
  DeleteMixDesignCommand,
  DeleteMixDesignCommandInput,
  DeleteMixDesignCommandOutput,
} from "./commands/DeleteMixDesignCommand";
import {
  DeleteNoteCommand,
  DeleteNoteCommandInput,
  DeleteNoteCommandOutput,
} from "./commands/DeleteNoteCommand";
import {
  DeleteOrderCommand,
  DeleteOrderCommandInput,
  DeleteOrderCommandOutput,
} from "./commands/DeleteOrderCommand";
import {
  DeleteOrderDateFieldCommand,
  DeleteOrderDateFieldCommandInput,
  DeleteOrderDateFieldCommandOutput,
} from "./commands/DeleteOrderDateFieldCommand";
import {
  DeleteOrderFieldCommand,
  DeleteOrderFieldCommandInput,
  DeleteOrderFieldCommandOutput,
} from "./commands/DeleteOrderFieldCommand";
import {
  DeletePlantCustomerCommand,
  DeletePlantCustomerCommandInput,
  DeletePlantCustomerCommandOutput,
} from "./commands/DeletePlantCustomerCommand";
import {
  DeletePlantMaterialCommand,
  DeletePlantMaterialCommandInput,
  DeletePlantMaterialCommandOutput,
} from "./commands/DeletePlantMaterialCommand";
import {
  GetBusinessesCommand,
  GetBusinessesCommandInput,
  GetBusinessesCommandOutput,
} from "./commands/GetBusinessesCommand";
import {
  GetMixDesignByIdCommand,
  GetMixDesignByIdCommandInput,
  GetMixDesignByIdCommandOutput,
} from "./commands/GetMixDesignByIdCommand";
import {
  GetMixDesignsCommand,
  GetMixDesignsCommandInput,
  GetMixDesignsCommandOutput,
} from "./commands/GetMixDesignsCommand";
import {
  GetOrderByIdCommand,
  GetOrderByIdCommandInput,
  GetOrderByIdCommandOutput,
} from "./commands/GetOrderByIdCommand";
import {
  GetOrderDateFieldsCommand,
  GetOrderDateFieldsCommandInput,
  GetOrderDateFieldsCommandOutput,
} from "./commands/GetOrderDateFieldsCommand";
import {
  GetOrderFieldsCommand,
  GetOrderFieldsCommandInput,
  GetOrderFieldsCommandOutput,
} from "./commands/GetOrderFieldsCommand";
import {
  GetPlantCustomerByIdCommand,
  GetPlantCustomerByIdCommandInput,
  GetPlantCustomerByIdCommandOutput,
} from "./commands/GetPlantCustomerByIdCommand";
import {
  GetPlantCustomersCommand,
  GetPlantCustomersCommandInput,
  GetPlantCustomersCommandOutput,
} from "./commands/GetPlantCustomersCommand";
import {
  GetPlantMaterialByIdCommand,
  GetPlantMaterialByIdCommandInput,
  GetPlantMaterialByIdCommandOutput,
} from "./commands/GetPlantMaterialByIdCommand";
import {
  GetPlantMaterialsCommand,
  GetPlantMaterialsCommandInput,
  GetPlantMaterialsCommandOutput,
} from "./commands/GetPlantMaterialsCommand";
import {
  GetPlantSubscribersCommand,
  GetPlantSubscribersCommandInput,
  GetPlantSubscribersCommandOutput,
} from "./commands/GetPlantSubscribersCommand";
import {
  GetPlantsListCommand,
  GetPlantsListCommandInput,
  GetPlantsListCommandOutput,
} from "./commands/GetPlantsListCommand";
import {
  GetSuppliersCommand,
  GetSuppliersCommandInput,
  GetSuppliersCommandOutput,
} from "./commands/GetSuppliersCommand";
import {
  LoginCommand,
  LoginCommandInput,
  LoginCommandOutput,
} from "./commands/LoginCommand";
import {
  RenameOrderDateFieldCommand,
  RenameOrderDateFieldCommandInput,
  RenameOrderDateFieldCommandOutput,
} from "./commands/RenameOrderDateFieldCommand";
import {
  RenameOrderFieldCommand,
  RenameOrderFieldCommandInput,
  RenameOrderFieldCommandOutput,
} from "./commands/RenameOrderFieldCommand";
import {
  ReplacePlantCustomerCommand,
  ReplacePlantCustomerCommandInput,
  ReplacePlantCustomerCommandOutput,
} from "./commands/ReplacePlantCustomerCommand";
import {
  UpdateMixDesignCommand,
  UpdateMixDesignCommandInput,
  UpdateMixDesignCommandOutput,
} from "./commands/UpdateMixDesignCommand";
import {
  UpdateNoteCommand,
  UpdateNoteCommandInput,
  UpdateNoteCommandOutput,
} from "./commands/UpdateNoteCommand";
import {
  UpdateOrderCommand,
  UpdateOrderCommandInput,
  UpdateOrderCommandOutput,
} from "./commands/UpdateOrderCommand";
import {
  UpdateOrderDateFieldCommand,
  UpdateOrderDateFieldCommandInput,
  UpdateOrderDateFieldCommandOutput,
} from "./commands/UpdateOrderDateFieldCommand";
import {
  UpdateOrderFieldCommand,
  UpdateOrderFieldCommandInput,
  UpdateOrderFieldCommandOutput,
} from "./commands/UpdateOrderFieldCommand";
import {
  UpdatePlantCommand,
  UpdatePlantCommandInput,
  UpdatePlantCommandOutput,
} from "./commands/UpdatePlantCommand";
import {
  UpdatePlantCustomerCommand,
  UpdatePlantCustomerCommandInput,
  UpdatePlantCustomerCommandOutput,
} from "./commands/UpdatePlantCustomerCommand";
import {
  UpdatePlantMaterialCommand,
  UpdatePlantMaterialCommandInput,
  UpdatePlantMaterialCommandOutput,
} from "./commands/UpdatePlantMaterialCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  GetBusinessesCommand,
  GetSuppliersCommand,
  LoginCommand,
  CreatePlantCustomerCommand,
  DeletePlantCustomerCommand,
  GetPlantCustomerByIdCommand,
  GetPlantCustomersCommand,
  ReplacePlantCustomerCommand,
  UpdatePlantCustomerCommand,
  CreatePlantMaterialCommand,
  DeletePlantMaterialCommand,
  GetPlantMaterialByIdCommand,
  GetPlantMaterialsCommand,
  UpdatePlantMaterialCommand,
  CreateMixDesignCommand,
  DeleteMixDesignCommand,
  GetMixDesignByIdCommand,
  GetMixDesignsCommand,
  UpdateMixDesignCommand,
  CreateNoteCommand,
  DeleteNoteCommand,
  UpdateNoteCommand,
  CreateOrderDateFieldCommand,
  CreateOrderFieldCommand,
  DeleteOrderDateFieldCommand,
  DeleteOrderFieldCommand,
  GetOrderDateFieldsCommand,
  GetOrderFieldsCommand,
  RenameOrderDateFieldCommand,
  RenameOrderFieldCommand,
  UpdateOrderDateFieldCommand,
  UpdateOrderFieldCommand,
  CreateOrderCommand,
  DeleteOrderCommand,
  GetOrderByIdCommand,
  UpdateOrderCommand,
  CreatePlantCommand,
  GetPlantsListCommand,
  GetPlantSubscribersCommand,
  UpdatePlantCommand,
}

export interface PlantDemandService {
  /**
   * @see {@link GetBusinessesCommand}
   */
  getBusinesses(
    args: GetBusinessesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetBusinessesCommandOutput>;
  getBusinesses(
    args: GetBusinessesCommandInput,
    cb: (err: any, data?: GetBusinessesCommandOutput) => void
  ): void;
  getBusinesses(
    args: GetBusinessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBusinessesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuppliersCommand}
   */
  getSuppliers(
    args: GetSuppliersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetSuppliersCommandOutput>;
  getSuppliers(
    args: GetSuppliersCommandInput,
    cb: (err: any, data?: GetSuppliersCommandOutput) => void
  ): void;
  getSuppliers(
    args: GetSuppliersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuppliersCommandOutput) => void
  ): void;

  /**
   * @see {@link LoginCommand}
   */
  login(
    args: LoginCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LoginCommandOutput>;
  login(
    args: LoginCommandInput,
    cb: (err: any, data?: LoginCommandOutput) => void
  ): void;
  login(
    args: LoginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LoginCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlantCustomerCommand}
   */
  createPlantCustomer(
    args: CreatePlantCustomerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePlantCustomerCommandOutput>;
  createPlantCustomer(
    args: CreatePlantCustomerCommandInput,
    cb: (err: any, data?: CreatePlantCustomerCommandOutput) => void
  ): void;
  createPlantCustomer(
    args: CreatePlantCustomerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlantCustomerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlantCustomerCommand}
   */
  deletePlantCustomer(
    args: DeletePlantCustomerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeletePlantCustomerCommandOutput>;
  deletePlantCustomer(
    args: DeletePlantCustomerCommandInput,
    cb: (err: any, data?: DeletePlantCustomerCommandOutput) => void
  ): void;
  deletePlantCustomer(
    args: DeletePlantCustomerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlantCustomerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantCustomerByIdCommand}
   */
  getPlantCustomerById(
    args: GetPlantCustomerByIdCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantCustomerByIdCommandOutput>;
  getPlantCustomerById(
    args: GetPlantCustomerByIdCommandInput,
    cb: (err: any, data?: GetPlantCustomerByIdCommandOutput) => void
  ): void;
  getPlantCustomerById(
    args: GetPlantCustomerByIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantCustomerByIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantCustomersCommand}
   */
  getPlantCustomers(
    args: GetPlantCustomersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantCustomersCommandOutput>;
  getPlantCustomers(
    args: GetPlantCustomersCommandInput,
    cb: (err: any, data?: GetPlantCustomersCommandOutput) => void
  ): void;
  getPlantCustomers(
    args: GetPlantCustomersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantCustomersCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplacePlantCustomerCommand}
   */
  replacePlantCustomer(
    args: ReplacePlantCustomerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ReplacePlantCustomerCommandOutput>;
  replacePlantCustomer(
    args: ReplacePlantCustomerCommandInput,
    cb: (err: any, data?: ReplacePlantCustomerCommandOutput) => void
  ): void;
  replacePlantCustomer(
    args: ReplacePlantCustomerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplacePlantCustomerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlantCustomerCommand}
   */
  updatePlantCustomer(
    args: UpdatePlantCustomerCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdatePlantCustomerCommandOutput>;
  updatePlantCustomer(
    args: UpdatePlantCustomerCommandInput,
    cb: (err: any, data?: UpdatePlantCustomerCommandOutput) => void
  ): void;
  updatePlantCustomer(
    args: UpdatePlantCustomerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlantCustomerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlantMaterialCommand}
   */
  createPlantMaterial(
    args: CreatePlantMaterialCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePlantMaterialCommandOutput>;
  createPlantMaterial(
    args: CreatePlantMaterialCommandInput,
    cb: (err: any, data?: CreatePlantMaterialCommandOutput) => void
  ): void;
  createPlantMaterial(
    args: CreatePlantMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlantMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlantMaterialCommand}
   */
  deletePlantMaterial(
    args: DeletePlantMaterialCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeletePlantMaterialCommandOutput>;
  deletePlantMaterial(
    args: DeletePlantMaterialCommandInput,
    cb: (err: any, data?: DeletePlantMaterialCommandOutput) => void
  ): void;
  deletePlantMaterial(
    args: DeletePlantMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlantMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantMaterialByIdCommand}
   */
  getPlantMaterialById(
    args: GetPlantMaterialByIdCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantMaterialByIdCommandOutput>;
  getPlantMaterialById(
    args: GetPlantMaterialByIdCommandInput,
    cb: (err: any, data?: GetPlantMaterialByIdCommandOutput) => void
  ): void;
  getPlantMaterialById(
    args: GetPlantMaterialByIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantMaterialByIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantMaterialsCommand}
   */
  getPlantMaterials(
    args: GetPlantMaterialsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantMaterialsCommandOutput>;
  getPlantMaterials(
    args: GetPlantMaterialsCommandInput,
    cb: (err: any, data?: GetPlantMaterialsCommandOutput) => void
  ): void;
  getPlantMaterials(
    args: GetPlantMaterialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantMaterialsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlantMaterialCommand}
   */
  updatePlantMaterial(
    args: UpdatePlantMaterialCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdatePlantMaterialCommandOutput>;
  updatePlantMaterial(
    args: UpdatePlantMaterialCommandInput,
    cb: (err: any, data?: UpdatePlantMaterialCommandOutput) => void
  ): void;
  updatePlantMaterial(
    args: UpdatePlantMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlantMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMixDesignCommand}
   */
  createMixDesign(
    args: CreateMixDesignCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateMixDesignCommandOutput>;
  createMixDesign(
    args: CreateMixDesignCommandInput,
    cb: (err: any, data?: CreateMixDesignCommandOutput) => void
  ): void;
  createMixDesign(
    args: CreateMixDesignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMixDesignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMixDesignCommand}
   */
  deleteMixDesign(
    args: DeleteMixDesignCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteMixDesignCommandOutput>;
  deleteMixDesign(
    args: DeleteMixDesignCommandInput,
    cb: (err: any, data?: DeleteMixDesignCommandOutput) => void
  ): void;
  deleteMixDesign(
    args: DeleteMixDesignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMixDesignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMixDesignByIdCommand}
   */
  getMixDesignById(
    args: GetMixDesignByIdCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMixDesignByIdCommandOutput>;
  getMixDesignById(
    args: GetMixDesignByIdCommandInput,
    cb: (err: any, data?: GetMixDesignByIdCommandOutput) => void
  ): void;
  getMixDesignById(
    args: GetMixDesignByIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMixDesignByIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMixDesignsCommand}
   */
  getMixDesigns(
    args: GetMixDesignsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMixDesignsCommandOutput>;
  getMixDesigns(
    args: GetMixDesignsCommandInput,
    cb: (err: any, data?: GetMixDesignsCommandOutput) => void
  ): void;
  getMixDesigns(
    args: GetMixDesignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMixDesignsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMixDesignCommand}
   */
  updateMixDesign(
    args: UpdateMixDesignCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateMixDesignCommandOutput>;
  updateMixDesign(
    args: UpdateMixDesignCommandInput,
    cb: (err: any, data?: UpdateMixDesignCommandOutput) => void
  ): void;
  updateMixDesign(
    args: UpdateMixDesignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMixDesignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNoteCommand}
   */
  createNote(
    args: CreateNoteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateNoteCommandOutput>;
  createNote(
    args: CreateNoteCommandInput,
    cb: (err: any, data?: CreateNoteCommandOutput) => void
  ): void;
  createNote(
    args: CreateNoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNoteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNoteCommand}
   */
  deleteNote(
    args: DeleteNoteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteNoteCommandOutput>;
  deleteNote(
    args: DeleteNoteCommandInput,
    cb: (err: any, data?: DeleteNoteCommandOutput) => void
  ): void;
  deleteNote(
    args: DeleteNoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNoteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNoteCommand}
   */
  updateNote(
    args: UpdateNoteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateNoteCommandOutput>;
  updateNote(
    args: UpdateNoteCommandInput,
    cb: (err: any, data?: UpdateNoteCommandOutput) => void
  ): void;
  updateNote(
    args: UpdateNoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNoteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrderDateFieldCommand}
   */
  createOrderDateField(
    args: CreateOrderDateFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrderDateFieldCommandOutput>;
  createOrderDateField(
    args: CreateOrderDateFieldCommandInput,
    cb: (err: any, data?: CreateOrderDateFieldCommandOutput) => void
  ): void;
  createOrderDateField(
    args: CreateOrderDateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrderDateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrderFieldCommand}
   */
  createOrderField(
    args: CreateOrderFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrderFieldCommandOutput>;
  createOrderField(
    args: CreateOrderFieldCommandInput,
    cb: (err: any, data?: CreateOrderFieldCommandOutput) => void
  ): void;
  createOrderField(
    args: CreateOrderFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrderFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrderDateFieldCommand}
   */
  deleteOrderDateField(
    args: DeleteOrderDateFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteOrderDateFieldCommandOutput>;
  deleteOrderDateField(
    args: DeleteOrderDateFieldCommandInput,
    cb: (err: any, data?: DeleteOrderDateFieldCommandOutput) => void
  ): void;
  deleteOrderDateField(
    args: DeleteOrderDateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrderDateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrderFieldCommand}
   */
  deleteOrderField(
    args: DeleteOrderFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteOrderFieldCommandOutput>;
  deleteOrderField(
    args: DeleteOrderFieldCommandInput,
    cb: (err: any, data?: DeleteOrderFieldCommandOutput) => void
  ): void;
  deleteOrderField(
    args: DeleteOrderFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrderFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrderDateFieldsCommand}
   */
  getOrderDateFields(
    args: GetOrderDateFieldsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrderDateFieldsCommandOutput>;
  getOrderDateFields(
    args: GetOrderDateFieldsCommandInput,
    cb: (err: any, data?: GetOrderDateFieldsCommandOutput) => void
  ): void;
  getOrderDateFields(
    args: GetOrderDateFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderDateFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrderFieldsCommand}
   */
  getOrderFields(
    args: GetOrderFieldsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrderFieldsCommandOutput>;
  getOrderFields(
    args: GetOrderFieldsCommandInput,
    cb: (err: any, data?: GetOrderFieldsCommandOutput) => void
  ): void;
  getOrderFields(
    args: GetOrderFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link RenameOrderDateFieldCommand}
   */
  renameOrderDateField(
    args: RenameOrderDateFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RenameOrderDateFieldCommandOutput>;
  renameOrderDateField(
    args: RenameOrderDateFieldCommandInput,
    cb: (err: any, data?: RenameOrderDateFieldCommandOutput) => void
  ): void;
  renameOrderDateField(
    args: RenameOrderDateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenameOrderDateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link RenameOrderFieldCommand}
   */
  renameOrderField(
    args: RenameOrderFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RenameOrderFieldCommandOutput>;
  renameOrderField(
    args: RenameOrderFieldCommandInput,
    cb: (err: any, data?: RenameOrderFieldCommandOutput) => void
  ): void;
  renameOrderField(
    args: RenameOrderFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenameOrderFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrderDateFieldCommand}
   */
  updateOrderDateField(
    args: UpdateOrderDateFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrderDateFieldCommandOutput>;
  updateOrderDateField(
    args: UpdateOrderDateFieldCommandInput,
    cb: (err: any, data?: UpdateOrderDateFieldCommandOutput) => void
  ): void;
  updateOrderDateField(
    args: UpdateOrderDateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrderDateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrderFieldCommand}
   */
  updateOrderField(
    args: UpdateOrderFieldCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrderFieldCommandOutput>;
  updateOrderField(
    args: UpdateOrderFieldCommandInput,
    cb: (err: any, data?: UpdateOrderFieldCommandOutput) => void
  ): void;
  updateOrderField(
    args: UpdateOrderFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrderFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrderCommand}
   */
  createOrder(
    args: CreateOrderCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrderCommandOutput>;
  createOrder(
    args: CreateOrderCommandInput,
    cb: (err: any, data?: CreateOrderCommandOutput) => void
  ): void;
  createOrder(
    args: CreateOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrderCommand}
   */
  deleteOrder(
    args: DeleteOrderCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteOrderCommandOutput>;
  deleteOrder(
    args: DeleteOrderCommandInput,
    cb: (err: any, data?: DeleteOrderCommandOutput) => void
  ): void;
  deleteOrder(
    args: DeleteOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrderByIdCommand}
   */
  getOrderById(
    args: GetOrderByIdCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrderByIdCommandOutput>;
  getOrderById(
    args: GetOrderByIdCommandInput,
    cb: (err: any, data?: GetOrderByIdCommandOutput) => void
  ): void;
  getOrderById(
    args: GetOrderByIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderByIdCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrderCommand}
   */
  updateOrder(
    args: UpdateOrderCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrderCommandOutput>;
  updateOrder(
    args: UpdateOrderCommandInput,
    cb: (err: any, data?: UpdateOrderCommandOutput) => void
  ): void;
  updateOrder(
    args: UpdateOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlantCommand}
   */
  createPlant(
    args: CreatePlantCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePlantCommandOutput>;
  createPlant(
    args: CreatePlantCommandInput,
    cb: (err: any, data?: CreatePlantCommandOutput) => void
  ): void;
  createPlant(
    args: CreatePlantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantsListCommand}
   */
  getPlantsList(
    args: GetPlantsListCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantsListCommandOutput>;
  getPlantsList(
    args: GetPlantsListCommandInput,
    cb: (err: any, data?: GetPlantsListCommandOutput) => void
  ): void;
  getPlantsList(
    args: GetPlantsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantsListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlantSubscribersCommand}
   */
  getPlantSubscribers(
    args: GetPlantSubscribersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPlantSubscribersCommandOutput>;
  getPlantSubscribers(
    args: GetPlantSubscribersCommandInput,
    cb: (err: any, data?: GetPlantSubscribersCommandOutput) => void
  ): void;
  getPlantSubscribers(
    args: GetPlantSubscribersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlantSubscribersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlantCommand}
   */
  updatePlant(
    args: UpdatePlantCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdatePlantCommandOutput>;
  updatePlant(
    args: UpdatePlantCommandInput,
    cb: (err: any, data?: UpdatePlantCommandOutput) => void
  ): void;
  updatePlant(
    args: UpdatePlantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlantCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class PlantDemandService extends PlantDemandServiceClient implements PlantDemandService {}
createAggregatedClient(commands, PlantDemandService);
