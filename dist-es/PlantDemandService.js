import { PlantDemandServiceClient, } from "./PlantDemandServiceClient";
import { CreateMixDesignCommand, } from "./commands/CreateMixDesignCommand";
import { CreateNoteCommand, } from "./commands/CreateNoteCommand";
import { CreateOrderCommand, } from "./commands/CreateOrderCommand";
import { CreateOrderDateFieldCommand, } from "./commands/CreateOrderDateFieldCommand";
import { CreateOrderFieldCommand, } from "./commands/CreateOrderFieldCommand";
import { CreatePlantCommand, } from "./commands/CreatePlantCommand";
import { CreatePlantCustomerCommand, } from "./commands/CreatePlantCustomerCommand";
import { CreatePlantMaterialCommand, } from "./commands/CreatePlantMaterialCommand";
import { DeleteMixDesignCommand, } from "./commands/DeleteMixDesignCommand";
import { DeleteNoteCommand, } from "./commands/DeleteNoteCommand";
import { DeleteOrderCommand, } from "./commands/DeleteOrderCommand";
import { DeleteOrderDateFieldCommand, } from "./commands/DeleteOrderDateFieldCommand";
import { DeleteOrderFieldCommand, } from "./commands/DeleteOrderFieldCommand";
import { DeletePlantCustomerCommand, } from "./commands/DeletePlantCustomerCommand";
import { DeletePlantMaterialCommand, } from "./commands/DeletePlantMaterialCommand";
import { GetBusinessesCommand, } from "./commands/GetBusinessesCommand";
import { GetMixDesignByIdCommand, } from "./commands/GetMixDesignByIdCommand";
import { GetMixDesignsCommand, } from "./commands/GetMixDesignsCommand";
import { GetOrderByIdCommand, } from "./commands/GetOrderByIdCommand";
import { GetOrderDateFieldsCommand, } from "./commands/GetOrderDateFieldsCommand";
import { GetOrderFieldsCommand, } from "./commands/GetOrderFieldsCommand";
import { GetPlantByIdCommand, } from "./commands/GetPlantByIdCommand";
import { GetPlantCustomerByIdCommand, } from "./commands/GetPlantCustomerByIdCommand";
import { GetPlantCustomersCommand, } from "./commands/GetPlantCustomersCommand";
import { GetPlantMaterialByIdCommand, } from "./commands/GetPlantMaterialByIdCommand";
import { GetPlantMaterialsCommand, } from "./commands/GetPlantMaterialsCommand";
import { GetPlantSubscribersCommand, } from "./commands/GetPlantSubscribersCommand";
import { GetPlantsListCommand, } from "./commands/GetPlantsListCommand";
import { GetSuppliersCommand, } from "./commands/GetSuppliersCommand";
import { LoginCommand, } from "./commands/LoginCommand";
import { RenameOrderDateFieldCommand, } from "./commands/RenameOrderDateFieldCommand";
import { RenameOrderFieldCommand, } from "./commands/RenameOrderFieldCommand";
import { ReplacePlantCustomerCommand, } from "./commands/ReplacePlantCustomerCommand";
import { UpdateMixDesignCommand, } from "./commands/UpdateMixDesignCommand";
import { UpdateNoteCommand, } from "./commands/UpdateNoteCommand";
import { UpdateOrderCommand, } from "./commands/UpdateOrderCommand";
import { UpdateOrderDateFieldCommand, } from "./commands/UpdateOrderDateFieldCommand";
import { UpdateOrderFieldCommand, } from "./commands/UpdateOrderFieldCommand";
import { UpdatePlantCommand, } from "./commands/UpdatePlantCommand";
import { UpdatePlantCustomerCommand, } from "./commands/UpdatePlantCustomerCommand";
import { UpdatePlantMaterialCommand, } from "./commands/UpdatePlantMaterialCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
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
    GetPlantByIdCommand,
    GetPlantsListCommand,
    GetPlantSubscribersCommand,
    UpdatePlantCommand,
};
export class PlantDemandService extends PlantDemandServiceClient {
}
createAggregatedClient(commands, PlantDemandService);
