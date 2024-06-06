import { CreateMixDesignCommandInput, CreateMixDesignCommandOutput } from "../commands/CreateMixDesignCommand";
import { CreateNoteCommandInput, CreateNoteCommandOutput } from "../commands/CreateNoteCommand";
import { CreateOrderCommandInput, CreateOrderCommandOutput } from "../commands/CreateOrderCommand";
import { CreateOrderDateFieldCommandInput, CreateOrderDateFieldCommandOutput } from "../commands/CreateOrderDateFieldCommand";
import { CreateOrderFieldCommandInput, CreateOrderFieldCommandOutput } from "../commands/CreateOrderFieldCommand";
import { CreatePlantCommandInput, CreatePlantCommandOutput } from "../commands/CreatePlantCommand";
import { CreatePlantCustomerCommandInput, CreatePlantCustomerCommandOutput } from "../commands/CreatePlantCustomerCommand";
import { CreatePlantMaterialCommandInput, CreatePlantMaterialCommandOutput } from "../commands/CreatePlantMaterialCommand";
import { DeleteMixDesignCommandInput, DeleteMixDesignCommandOutput } from "../commands/DeleteMixDesignCommand";
import { DeleteNoteCommandInput, DeleteNoteCommandOutput } from "../commands/DeleteNoteCommand";
import { DeleteOrderCommandInput, DeleteOrderCommandOutput } from "../commands/DeleteOrderCommand";
import { DeleteOrderDateFieldCommandInput, DeleteOrderDateFieldCommandOutput } from "../commands/DeleteOrderDateFieldCommand";
import { DeleteOrderFieldCommandInput, DeleteOrderFieldCommandOutput } from "../commands/DeleteOrderFieldCommand";
import { DeletePlantCustomerCommandInput, DeletePlantCustomerCommandOutput } from "../commands/DeletePlantCustomerCommand";
import { DeletePlantMaterialCommandInput, DeletePlantMaterialCommandOutput } from "../commands/DeletePlantMaterialCommand";
import { GetBusinessesCommandInput, GetBusinessesCommandOutput } from "../commands/GetBusinessesCommand";
import { GetMixDesignByIdCommandInput, GetMixDesignByIdCommandOutput } from "../commands/GetMixDesignByIdCommand";
import { GetMixDesignsCommandInput, GetMixDesignsCommandOutput } from "../commands/GetMixDesignsCommand";
import { GetOrderByIdCommandInput, GetOrderByIdCommandOutput } from "../commands/GetOrderByIdCommand";
import { GetOrderDateFieldsCommandInput, GetOrderDateFieldsCommandOutput } from "../commands/GetOrderDateFieldsCommand";
import { GetOrderFieldsCommandInput, GetOrderFieldsCommandOutput } from "../commands/GetOrderFieldsCommand";
import { GetPlantCustomerByIdCommandInput, GetPlantCustomerByIdCommandOutput } from "../commands/GetPlantCustomerByIdCommand";
import { GetPlantCustomersCommandInput, GetPlantCustomersCommandOutput } from "../commands/GetPlantCustomersCommand";
import { GetPlantMaterialByIdCommandInput, GetPlantMaterialByIdCommandOutput } from "../commands/GetPlantMaterialByIdCommand";
import { GetPlantMaterialsCommandInput, GetPlantMaterialsCommandOutput } from "../commands/GetPlantMaterialsCommand";
import { GetPlantSubscribersCommandInput, GetPlantSubscribersCommandOutput } from "../commands/GetPlantSubscribersCommand";
import { GetPlantsListCommandInput, GetPlantsListCommandOutput } from "../commands/GetPlantsListCommand";
import { GetSuppliersCommandInput, GetSuppliersCommandOutput } from "../commands/GetSuppliersCommand";
import { LoginCommandInput, LoginCommandOutput } from "../commands/LoginCommand";
import { RenameOrderDateFieldCommandInput, RenameOrderDateFieldCommandOutput } from "../commands/RenameOrderDateFieldCommand";
import { RenameOrderFieldCommandInput, RenameOrderFieldCommandOutput } from "../commands/RenameOrderFieldCommand";
import { ReplacePlantCustomerCommandInput, ReplacePlantCustomerCommandOutput } from "../commands/ReplacePlantCustomerCommand";
import { UpdateMixDesignCommandInput, UpdateMixDesignCommandOutput } from "../commands/UpdateMixDesignCommand";
import { UpdateNoteCommandInput, UpdateNoteCommandOutput } from "../commands/UpdateNoteCommand";
import { UpdateOrderCommandInput, UpdateOrderCommandOutput } from "../commands/UpdateOrderCommand";
import { UpdateOrderDateFieldCommandInput, UpdateOrderDateFieldCommandOutput } from "../commands/UpdateOrderDateFieldCommand";
import { UpdateOrderFieldCommandInput, UpdateOrderFieldCommandOutput } from "../commands/UpdateOrderFieldCommand";
import { UpdatePlantCommandInput, UpdatePlantCommandOutput } from "../commands/UpdatePlantCommand";
import { UpdatePlantCustomerCommandInput, UpdatePlantCustomerCommandOutput } from "../commands/UpdatePlantCustomerCommand";
import { UpdatePlantMaterialCommandInput, UpdatePlantMaterialCommandOutput } from "../commands/UpdatePlantMaterialCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
/**
 * serializeAws_restJson1GetBusinessesCommand
 */
export declare const se_GetBusinessesCommand: (input: GetBusinessesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetSuppliersCommand
 */
export declare const se_GetSuppliersCommand: (input: GetSuppliersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1LoginCommand
 */
export declare const se_LoginCommand: (input: LoginCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreatePlantCustomerCommand
 */
export declare const se_CreatePlantCustomerCommand: (input: CreatePlantCustomerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeletePlantCustomerCommand
 */
export declare const se_DeletePlantCustomerCommand: (input: DeletePlantCustomerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantCustomerByIdCommand
 */
export declare const se_GetPlantCustomerByIdCommand: (input: GetPlantCustomerByIdCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantCustomersCommand
 */
export declare const se_GetPlantCustomersCommand: (input: GetPlantCustomersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1ReplacePlantCustomerCommand
 */
export declare const se_ReplacePlantCustomerCommand: (input: ReplacePlantCustomerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdatePlantCustomerCommand
 */
export declare const se_UpdatePlantCustomerCommand: (input: UpdatePlantCustomerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreatePlantMaterialCommand
 */
export declare const se_CreatePlantMaterialCommand: (input: CreatePlantMaterialCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeletePlantMaterialCommand
 */
export declare const se_DeletePlantMaterialCommand: (input: DeletePlantMaterialCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantMaterialByIdCommand
 */
export declare const se_GetPlantMaterialByIdCommand: (input: GetPlantMaterialByIdCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantMaterialsCommand
 */
export declare const se_GetPlantMaterialsCommand: (input: GetPlantMaterialsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdatePlantMaterialCommand
 */
export declare const se_UpdatePlantMaterialCommand: (input: UpdatePlantMaterialCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreateMixDesignCommand
 */
export declare const se_CreateMixDesignCommand: (input: CreateMixDesignCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteMixDesignCommand
 */
export declare const se_DeleteMixDesignCommand: (input: DeleteMixDesignCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetMixDesignByIdCommand
 */
export declare const se_GetMixDesignByIdCommand: (input: GetMixDesignByIdCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetMixDesignsCommand
 */
export declare const se_GetMixDesignsCommand: (input: GetMixDesignsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdateMixDesignCommand
 */
export declare const se_UpdateMixDesignCommand: (input: UpdateMixDesignCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreateNoteCommand
 */
export declare const se_CreateNoteCommand: (input: CreateNoteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteNoteCommand
 */
export declare const se_DeleteNoteCommand: (input: DeleteNoteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdateNoteCommand
 */
export declare const se_UpdateNoteCommand: (input: UpdateNoteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreateOrderDateFieldCommand
 */
export declare const se_CreateOrderDateFieldCommand: (input: CreateOrderDateFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreateOrderFieldCommand
 */
export declare const se_CreateOrderFieldCommand: (input: CreateOrderFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteOrderDateFieldCommand
 */
export declare const se_DeleteOrderDateFieldCommand: (input: DeleteOrderDateFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteOrderFieldCommand
 */
export declare const se_DeleteOrderFieldCommand: (input: DeleteOrderFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetOrderDateFieldsCommand
 */
export declare const se_GetOrderDateFieldsCommand: (input: GetOrderDateFieldsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetOrderFieldsCommand
 */
export declare const se_GetOrderFieldsCommand: (input: GetOrderFieldsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1RenameOrderDateFieldCommand
 */
export declare const se_RenameOrderDateFieldCommand: (input: RenameOrderDateFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1RenameOrderFieldCommand
 */
export declare const se_RenameOrderFieldCommand: (input: RenameOrderFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdateOrderDateFieldCommand
 */
export declare const se_UpdateOrderDateFieldCommand: (input: UpdateOrderDateFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdateOrderFieldCommand
 */
export declare const se_UpdateOrderFieldCommand: (input: UpdateOrderFieldCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreateOrderCommand
 */
export declare const se_CreateOrderCommand: (input: CreateOrderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteOrderCommand
 */
export declare const se_DeleteOrderCommand: (input: DeleteOrderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetOrderByIdCommand
 */
export declare const se_GetOrderByIdCommand: (input: GetOrderByIdCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdateOrderCommand
 */
export declare const se_UpdateOrderCommand: (input: UpdateOrderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1CreatePlantCommand
 */
export declare const se_CreatePlantCommand: (input: CreatePlantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantsListCommand
 */
export declare const se_GetPlantsListCommand: (input: GetPlantsListCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetPlantSubscribersCommand
 */
export declare const se_GetPlantSubscribersCommand: (input: GetPlantSubscribersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1UpdatePlantCommand
 */
export declare const se_UpdatePlantCommand: (input: UpdatePlantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_restJson1GetBusinessesCommand
 */
export declare const de_GetBusinessesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBusinessesCommandOutput>;
/**
 * deserializeAws_restJson1GetSuppliersCommand
 */
export declare const de_GetSuppliersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSuppliersCommandOutput>;
/**
 * deserializeAws_restJson1LoginCommand
 */
export declare const de_LoginCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<LoginCommandOutput>;
/**
 * deserializeAws_restJson1CreatePlantCustomerCommand
 */
export declare const de_CreatePlantCustomerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePlantCustomerCommandOutput>;
/**
 * deserializeAws_restJson1DeletePlantCustomerCommand
 */
export declare const de_DeletePlantCustomerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePlantCustomerCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantCustomerByIdCommand
 */
export declare const de_GetPlantCustomerByIdCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantCustomerByIdCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantCustomersCommand
 */
export declare const de_GetPlantCustomersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantCustomersCommandOutput>;
/**
 * deserializeAws_restJson1ReplacePlantCustomerCommand
 */
export declare const de_ReplacePlantCustomerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ReplacePlantCustomerCommandOutput>;
/**
 * deserializeAws_restJson1UpdatePlantCustomerCommand
 */
export declare const de_UpdatePlantCustomerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdatePlantCustomerCommandOutput>;
/**
 * deserializeAws_restJson1CreatePlantMaterialCommand
 */
export declare const de_CreatePlantMaterialCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePlantMaterialCommandOutput>;
/**
 * deserializeAws_restJson1DeletePlantMaterialCommand
 */
export declare const de_DeletePlantMaterialCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePlantMaterialCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantMaterialByIdCommand
 */
export declare const de_GetPlantMaterialByIdCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantMaterialByIdCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantMaterialsCommand
 */
export declare const de_GetPlantMaterialsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantMaterialsCommandOutput>;
/**
 * deserializeAws_restJson1UpdatePlantMaterialCommand
 */
export declare const de_UpdatePlantMaterialCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdatePlantMaterialCommandOutput>;
/**
 * deserializeAws_restJson1CreateMixDesignCommand
 */
export declare const de_CreateMixDesignCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateMixDesignCommandOutput>;
/**
 * deserializeAws_restJson1DeleteMixDesignCommand
 */
export declare const de_DeleteMixDesignCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteMixDesignCommandOutput>;
/**
 * deserializeAws_restJson1GetMixDesignByIdCommand
 */
export declare const de_GetMixDesignByIdCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMixDesignByIdCommandOutput>;
/**
 * deserializeAws_restJson1GetMixDesignsCommand
 */
export declare const de_GetMixDesignsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMixDesignsCommandOutput>;
/**
 * deserializeAws_restJson1UpdateMixDesignCommand
 */
export declare const de_UpdateMixDesignCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateMixDesignCommandOutput>;
/**
 * deserializeAws_restJson1CreateNoteCommand
 */
export declare const de_CreateNoteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateNoteCommandOutput>;
/**
 * deserializeAws_restJson1DeleteNoteCommand
 */
export declare const de_DeleteNoteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteNoteCommandOutput>;
/**
 * deserializeAws_restJson1UpdateNoteCommand
 */
export declare const de_UpdateNoteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateNoteCommandOutput>;
/**
 * deserializeAws_restJson1CreateOrderDateFieldCommand
 */
export declare const de_CreateOrderDateFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateOrderDateFieldCommandOutput>;
/**
 * deserializeAws_restJson1CreateOrderFieldCommand
 */
export declare const de_CreateOrderFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateOrderFieldCommandOutput>;
/**
 * deserializeAws_restJson1DeleteOrderDateFieldCommand
 */
export declare const de_DeleteOrderDateFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteOrderDateFieldCommandOutput>;
/**
 * deserializeAws_restJson1DeleteOrderFieldCommand
 */
export declare const de_DeleteOrderFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteOrderFieldCommandOutput>;
/**
 * deserializeAws_restJson1GetOrderDateFieldsCommand
 */
export declare const de_GetOrderDateFieldsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetOrderDateFieldsCommandOutput>;
/**
 * deserializeAws_restJson1GetOrderFieldsCommand
 */
export declare const de_GetOrderFieldsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetOrderFieldsCommandOutput>;
/**
 * deserializeAws_restJson1RenameOrderDateFieldCommand
 */
export declare const de_RenameOrderDateFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RenameOrderDateFieldCommandOutput>;
/**
 * deserializeAws_restJson1RenameOrderFieldCommand
 */
export declare const de_RenameOrderFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RenameOrderFieldCommandOutput>;
/**
 * deserializeAws_restJson1UpdateOrderDateFieldCommand
 */
export declare const de_UpdateOrderDateFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateOrderDateFieldCommandOutput>;
/**
 * deserializeAws_restJson1UpdateOrderFieldCommand
 */
export declare const de_UpdateOrderFieldCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateOrderFieldCommandOutput>;
/**
 * deserializeAws_restJson1CreateOrderCommand
 */
export declare const de_CreateOrderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateOrderCommandOutput>;
/**
 * deserializeAws_restJson1DeleteOrderCommand
 */
export declare const de_DeleteOrderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteOrderCommandOutput>;
/**
 * deserializeAws_restJson1GetOrderByIdCommand
 */
export declare const de_GetOrderByIdCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetOrderByIdCommandOutput>;
/**
 * deserializeAws_restJson1UpdateOrderCommand
 */
export declare const de_UpdateOrderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateOrderCommandOutput>;
/**
 * deserializeAws_restJson1CreatePlantCommand
 */
export declare const de_CreatePlantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePlantCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantsListCommand
 */
export declare const de_GetPlantsListCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantsListCommandOutput>;
/**
 * deserializeAws_restJson1GetPlantSubscribersCommand
 */
export declare const de_GetPlantSubscribersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPlantSubscribersCommandOutput>;
/**
 * deserializeAws_restJson1UpdatePlantCommand
 */
export declare const de_UpdatePlantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdatePlantCommandOutput>;
