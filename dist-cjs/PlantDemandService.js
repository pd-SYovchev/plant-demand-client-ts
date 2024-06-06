"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantDemandService = void 0;
const PlantDemandServiceClient_1 = require("./PlantDemandServiceClient");
const CreateMixDesignCommand_1 = require("./commands/CreateMixDesignCommand");
const CreateNoteCommand_1 = require("./commands/CreateNoteCommand");
const CreateOrderCommand_1 = require("./commands/CreateOrderCommand");
const CreateOrderDateFieldCommand_1 = require("./commands/CreateOrderDateFieldCommand");
const CreateOrderFieldCommand_1 = require("./commands/CreateOrderFieldCommand");
const CreatePlantCommand_1 = require("./commands/CreatePlantCommand");
const CreatePlantCustomerCommand_1 = require("./commands/CreatePlantCustomerCommand");
const CreatePlantMaterialCommand_1 = require("./commands/CreatePlantMaterialCommand");
const DeleteMixDesignCommand_1 = require("./commands/DeleteMixDesignCommand");
const DeleteNoteCommand_1 = require("./commands/DeleteNoteCommand");
const DeleteOrderCommand_1 = require("./commands/DeleteOrderCommand");
const DeleteOrderDateFieldCommand_1 = require("./commands/DeleteOrderDateFieldCommand");
const DeleteOrderFieldCommand_1 = require("./commands/DeleteOrderFieldCommand");
const DeletePlantCustomerCommand_1 = require("./commands/DeletePlantCustomerCommand");
const DeletePlantMaterialCommand_1 = require("./commands/DeletePlantMaterialCommand");
const GetBusinessesCommand_1 = require("./commands/GetBusinessesCommand");
const GetMixDesignByIdCommand_1 = require("./commands/GetMixDesignByIdCommand");
const GetMixDesignsCommand_1 = require("./commands/GetMixDesignsCommand");
const GetOrderByIdCommand_1 = require("./commands/GetOrderByIdCommand");
const GetOrderDateFieldsCommand_1 = require("./commands/GetOrderDateFieldsCommand");
const GetOrderFieldsCommand_1 = require("./commands/GetOrderFieldsCommand");
const GetPlantCustomerByIdCommand_1 = require("./commands/GetPlantCustomerByIdCommand");
const GetPlantCustomersCommand_1 = require("./commands/GetPlantCustomersCommand");
const GetPlantMaterialByIdCommand_1 = require("./commands/GetPlantMaterialByIdCommand");
const GetPlantMaterialsCommand_1 = require("./commands/GetPlantMaterialsCommand");
const GetPlantSubscribersCommand_1 = require("./commands/GetPlantSubscribersCommand");
const GetPlantsListCommand_1 = require("./commands/GetPlantsListCommand");
const GetSuppliersCommand_1 = require("./commands/GetSuppliersCommand");
const LoginCommand_1 = require("./commands/LoginCommand");
const RenameOrderDateFieldCommand_1 = require("./commands/RenameOrderDateFieldCommand");
const RenameOrderFieldCommand_1 = require("./commands/RenameOrderFieldCommand");
const ReplacePlantCustomerCommand_1 = require("./commands/ReplacePlantCustomerCommand");
const UpdateMixDesignCommand_1 = require("./commands/UpdateMixDesignCommand");
const UpdateNoteCommand_1 = require("./commands/UpdateNoteCommand");
const UpdateOrderCommand_1 = require("./commands/UpdateOrderCommand");
const UpdateOrderDateFieldCommand_1 = require("./commands/UpdateOrderDateFieldCommand");
const UpdateOrderFieldCommand_1 = require("./commands/UpdateOrderFieldCommand");
const UpdatePlantCommand_1 = require("./commands/UpdatePlantCommand");
const UpdatePlantCustomerCommand_1 = require("./commands/UpdatePlantCustomerCommand");
const UpdatePlantMaterialCommand_1 = require("./commands/UpdatePlantMaterialCommand");
const smithy_client_1 = require("@smithy/smithy-client");
const commands = {
    GetBusinessesCommand: GetBusinessesCommand_1.GetBusinessesCommand,
    GetSuppliersCommand: GetSuppliersCommand_1.GetSuppliersCommand,
    LoginCommand: LoginCommand_1.LoginCommand,
    CreatePlantCustomerCommand: CreatePlantCustomerCommand_1.CreatePlantCustomerCommand,
    DeletePlantCustomerCommand: DeletePlantCustomerCommand_1.DeletePlantCustomerCommand,
    GetPlantCustomerByIdCommand: GetPlantCustomerByIdCommand_1.GetPlantCustomerByIdCommand,
    GetPlantCustomersCommand: GetPlantCustomersCommand_1.GetPlantCustomersCommand,
    ReplacePlantCustomerCommand: ReplacePlantCustomerCommand_1.ReplacePlantCustomerCommand,
    UpdatePlantCustomerCommand: UpdatePlantCustomerCommand_1.UpdatePlantCustomerCommand,
    CreatePlantMaterialCommand: CreatePlantMaterialCommand_1.CreatePlantMaterialCommand,
    DeletePlantMaterialCommand: DeletePlantMaterialCommand_1.DeletePlantMaterialCommand,
    GetPlantMaterialByIdCommand: GetPlantMaterialByIdCommand_1.GetPlantMaterialByIdCommand,
    GetPlantMaterialsCommand: GetPlantMaterialsCommand_1.GetPlantMaterialsCommand,
    UpdatePlantMaterialCommand: UpdatePlantMaterialCommand_1.UpdatePlantMaterialCommand,
    CreateMixDesignCommand: CreateMixDesignCommand_1.CreateMixDesignCommand,
    DeleteMixDesignCommand: DeleteMixDesignCommand_1.DeleteMixDesignCommand,
    GetMixDesignByIdCommand: GetMixDesignByIdCommand_1.GetMixDesignByIdCommand,
    GetMixDesignsCommand: GetMixDesignsCommand_1.GetMixDesignsCommand,
    UpdateMixDesignCommand: UpdateMixDesignCommand_1.UpdateMixDesignCommand,
    CreateNoteCommand: CreateNoteCommand_1.CreateNoteCommand,
    DeleteNoteCommand: DeleteNoteCommand_1.DeleteNoteCommand,
    UpdateNoteCommand: UpdateNoteCommand_1.UpdateNoteCommand,
    CreateOrderDateFieldCommand: CreateOrderDateFieldCommand_1.CreateOrderDateFieldCommand,
    CreateOrderFieldCommand: CreateOrderFieldCommand_1.CreateOrderFieldCommand,
    DeleteOrderDateFieldCommand: DeleteOrderDateFieldCommand_1.DeleteOrderDateFieldCommand,
    DeleteOrderFieldCommand: DeleteOrderFieldCommand_1.DeleteOrderFieldCommand,
    GetOrderDateFieldsCommand: GetOrderDateFieldsCommand_1.GetOrderDateFieldsCommand,
    GetOrderFieldsCommand: GetOrderFieldsCommand_1.GetOrderFieldsCommand,
    RenameOrderDateFieldCommand: RenameOrderDateFieldCommand_1.RenameOrderDateFieldCommand,
    RenameOrderFieldCommand: RenameOrderFieldCommand_1.RenameOrderFieldCommand,
    UpdateOrderDateFieldCommand: UpdateOrderDateFieldCommand_1.UpdateOrderDateFieldCommand,
    UpdateOrderFieldCommand: UpdateOrderFieldCommand_1.UpdateOrderFieldCommand,
    CreateOrderCommand: CreateOrderCommand_1.CreateOrderCommand,
    DeleteOrderCommand: DeleteOrderCommand_1.DeleteOrderCommand,
    GetOrderByIdCommand: GetOrderByIdCommand_1.GetOrderByIdCommand,
    UpdateOrderCommand: UpdateOrderCommand_1.UpdateOrderCommand,
    CreatePlantCommand: CreatePlantCommand_1.CreatePlantCommand,
    GetPlantsListCommand: GetPlantsListCommand_1.GetPlantsListCommand,
    GetPlantSubscribersCommand: GetPlantSubscribersCommand_1.GetPlantSubscribersCommand,
    UpdatePlantCommand: UpdatePlantCommand_1.UpdatePlantCommand,
};
class PlantDemandService extends PlantDemandServiceClient_1.PlantDemandServiceClient {
}
exports.PlantDemandService = PlantDemandService;
(0, smithy_client_1.createAggregatedClient)(commands, PlantDemandService);
