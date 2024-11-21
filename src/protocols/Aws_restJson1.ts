// smithy-typescript generated code
import {
  CreateMixDesignCommandInput,
  CreateMixDesignCommandOutput,
} from "../commands/CreateMixDesignCommand";
import {
  CreateNoteCommandInput,
  CreateNoteCommandOutput,
} from "../commands/CreateNoteCommand";
import {
  CreateOrderCommandInput,
  CreateOrderCommandOutput,
} from "../commands/CreateOrderCommand";
import {
  CreateOrderDateFieldCommandInput,
  CreateOrderDateFieldCommandOutput,
} from "../commands/CreateOrderDateFieldCommand";
import {
  CreateOrderFieldCommandInput,
  CreateOrderFieldCommandOutput,
} from "../commands/CreateOrderFieldCommand";
import {
  CreatePlantCommandInput,
  CreatePlantCommandOutput,
} from "../commands/CreatePlantCommand";
import {
  CreatePlantCustomerCommandInput,
  CreatePlantCustomerCommandOutput,
} from "../commands/CreatePlantCustomerCommand";
import {
  CreatePlantMaterialCommandInput,
  CreatePlantMaterialCommandOutput,
} from "../commands/CreatePlantMaterialCommand";
import {
  DeleteMixDesignCommandInput,
  DeleteMixDesignCommandOutput,
} from "../commands/DeleteMixDesignCommand";
import {
  DeleteNoteCommandInput,
  DeleteNoteCommandOutput,
} from "../commands/DeleteNoteCommand";
import {
  DeleteOrderCommandInput,
  DeleteOrderCommandOutput,
} from "../commands/DeleteOrderCommand";
import {
  DeleteOrderDateFieldCommandInput,
  DeleteOrderDateFieldCommandOutput,
} from "../commands/DeleteOrderDateFieldCommand";
import {
  DeleteOrderFieldCommandInput,
  DeleteOrderFieldCommandOutput,
} from "../commands/DeleteOrderFieldCommand";
import {
  DeletePlantCustomerCommandInput,
  DeletePlantCustomerCommandOutput,
} from "../commands/DeletePlantCustomerCommand";
import {
  DeletePlantMaterialCommandInput,
  DeletePlantMaterialCommandOutput,
} from "../commands/DeletePlantMaterialCommand";
import {
  GetBusinessesCommandInput,
  GetBusinessesCommandOutput,
} from "../commands/GetBusinessesCommand";
import {
  GetMixDesignByIdCommandInput,
  GetMixDesignByIdCommandOutput,
} from "../commands/GetMixDesignByIdCommand";
import {
  GetMixDesignsCommandInput,
  GetMixDesignsCommandOutput,
} from "../commands/GetMixDesignsCommand";
import {
  GetOrderByIdCommandInput,
  GetOrderByIdCommandOutput,
} from "../commands/GetOrderByIdCommand";
import {
  GetOrderDateFieldsCommandInput,
  GetOrderDateFieldsCommandOutput,
} from "../commands/GetOrderDateFieldsCommand";
import {
  GetOrderFieldsCommandInput,
  GetOrderFieldsCommandOutput,
} from "../commands/GetOrderFieldsCommand";
import {
  GetPlantByIdCommandInput,
  GetPlantByIdCommandOutput,
} from "../commands/GetPlantByIdCommand";
import {
  GetPlantCustomerByIdCommandInput,
  GetPlantCustomerByIdCommandOutput,
} from "../commands/GetPlantCustomerByIdCommand";
import {
  GetPlantCustomersCommandInput,
  GetPlantCustomersCommandOutput,
} from "../commands/GetPlantCustomersCommand";
import {
  GetPlantMaterialByIdCommandInput,
  GetPlantMaterialByIdCommandOutput,
} from "../commands/GetPlantMaterialByIdCommand";
import {
  GetPlantMaterialsCommandInput,
  GetPlantMaterialsCommandOutput,
} from "../commands/GetPlantMaterialsCommand";
import {
  GetPlantSubscribersCommandInput,
  GetPlantSubscribersCommandOutput,
} from "../commands/GetPlantSubscribersCommand";
import {
  GetPlantsListCommandInput,
  GetPlantsListCommandOutput,
} from "../commands/GetPlantsListCommand";
import {
  GetSuppliersCommandInput,
  GetSuppliersCommandOutput,
} from "../commands/GetSuppliersCommand";
import {
  LoginCommandInput,
  LoginCommandOutput,
} from "../commands/LoginCommand";
import {
  RenameOrderDateFieldCommandInput,
  RenameOrderDateFieldCommandOutput,
} from "../commands/RenameOrderDateFieldCommand";
import {
  RenameOrderFieldCommandInput,
  RenameOrderFieldCommandOutput,
} from "../commands/RenameOrderFieldCommand";
import {
  ReplacePlantCustomerCommandInput,
  ReplacePlantCustomerCommandOutput,
} from "../commands/ReplacePlantCustomerCommand";
import {
  UpdateMixDesignCommandInput,
  UpdateMixDesignCommandOutput,
} from "../commands/UpdateMixDesignCommand";
import {
  UpdateNoteCommandInput,
  UpdateNoteCommandOutput,
} from "../commands/UpdateNoteCommand";
import {
  UpdateOrderCommandInput,
  UpdateOrderCommandOutput,
} from "../commands/UpdateOrderCommand";
import {
  UpdateOrderDateFieldCommandInput,
  UpdateOrderDateFieldCommandOutput,
} from "../commands/UpdateOrderDateFieldCommand";
import {
  UpdateOrderFieldCommandInput,
  UpdateOrderFieldCommandOutput,
} from "../commands/UpdateOrderFieldCommand";
import {
  UpdatePlantCommandInput,
  UpdatePlantCommandOutput,
} from "../commands/UpdatePlantCommand";
import {
  UpdatePlantCustomerCommandInput,
  UpdatePlantCustomerCommandOutput,
} from "../commands/UpdatePlantCustomerCommand";
import {
  UpdatePlantMaterialCommandInput,
  UpdatePlantMaterialCommandOutput,
} from "../commands/UpdatePlantMaterialCommand";
import { PlantDemandServiceServiceException as __BaseException } from "../models/PlantDemandServiceServiceException";
import {
  CreateCustomerPayload,
  CreateMixDesignPayload,
  CreateOrderFieldPayload,
  CreateOrderPayload,
  CreatePlantMaterialPayload,
  CreateUpdateNotePayload,
  ExtraFieldData,
  MixDesignComponent,
  NoteDatePayload,
  OrderDate,
  Plant,
  Removed,
  RenameOrderFieldPayload,
  ReplacePlantCustomerPayload,
  UpdateCustomerPayload,
  UpdateMixDesignPayload,
  UpdateOrderFieldPayload,
  UpdateOrderPayload,
  UpdatePlantMaterialPayload,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  resolvedPath as __resolvedPath,
  _json,
  collectBody,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * serializeAws_restJson1GetBusinessesCommand
 */
export const se_GetBusinessesCommand = async(
  input: GetBusinessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/business_list";
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1GetSuppliersCommand
 */
export const se_GetSuppliersCommand = async(
  input: GetSuppliersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/suppliers_list";
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1LoginCommand
 */
export const se_LoginCommand = async(
  input: LoginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api-token-auth";
  let body: any;
  body = JSON.stringify(take(input, {
    'password': [],
    'username': [],
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreatePlantCustomerCommand
 */
export const se_CreatePlantCustomerCommand = async(
  input: CreatePlantCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/new";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeletePlantCustomerCommand
 */
export const se_DeletePlantCustomerCommand = async(
  input: DeletePlantCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId!, '{customerId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantCustomerByIdCommand
 */
export const se_GetPlantCustomerByIdCommand = async(
  input: GetPlantCustomerByIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId!, '{customerId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantCustomersCommand
 */
export const se_GetPlantCustomersCommand = async(
  input: GetPlantCustomersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/list";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "name": [,input.name!],
    "include_removed": [() => input.include_removed !== void 0, () => (input.include_removed!.toString())],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1ReplacePlantCustomerCommand
 */
export const se_ReplacePlantCustomerCommand = async(
  input: ReplacePlantCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/replace";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdatePlantCustomerCommand
 */
export const se_UpdatePlantCustomerCommand = async(
  input: UpdatePlantCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId!, '{customerId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreatePlantMaterialCommand
 */
export const se_CreatePlantMaterialCommand = async(
  input: CreatePlantMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeletePlantMaterialCommand
 */
export const se_DeletePlantMaterialCommand = async(
  input: DeletePlantMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId!, '{materialId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantMaterialByIdCommand
 */
export const se_GetPlantMaterialByIdCommand = async(
  input: GetPlantMaterialByIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId!, '{materialId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantMaterialsCommand
 */
export const se_GetPlantMaterialsCommand = async(
  input: GetPlantMaterialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/materials";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1UpdatePlantMaterialCommand
 */
export const se_UpdatePlantMaterialCommand = async(
  input: UpdatePlantMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId!, '{materialId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreateMixDesignCommand
 */
export const se_CreateMixDesignCommand = async(
  input: CreateMixDesignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteMixDesignCommand
 */
export const se_DeleteMixDesignCommand = async(
  input: DeleteMixDesignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId!, '{mixDesignId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetMixDesignByIdCommand
 */
export const se_GetMixDesignByIdCommand = async(
  input: GetMixDesignByIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId!, '{mixDesignId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetMixDesignsCommand
 */
export const se_GetMixDesignsCommand = async(
  input: GetMixDesignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_designs";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateMixDesignCommand
 */
export const se_UpdateMixDesignCommand = async(
  input: UpdateMixDesignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId!, '{mixDesignId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreateNoteCommand
 */
export const se_CreateNoteCommand = async(
  input: CreateNoteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plant}/calendar_note/new";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plant', () => input.plant!, '{plant}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteNoteCommand
 */
export const se_DeleteNoteCommand = async(
  input: DeleteNoteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'noteId', () => input.noteId!, '{noteId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateNoteCommand
 */
export const se_UpdateNoteCommand = async(
  input: UpdateNoteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'noteId', () => input.noteId!, '{noteId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreateOrderDateFieldCommand
 */
export const se_CreateOrderDateFieldCommand = async(
  input: CreateOrderDateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/new";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreateOrderFieldCommand
 */
export const se_CreateOrderFieldCommand = async(
  input: CreateOrderFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/new";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteOrderDateFieldCommand
 */
export const se_DeleteOrderDateFieldCommand = async(
  input: DeleteOrderDateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteOrderFieldCommand
 */
export const se_DeleteOrderFieldCommand = async(
  input: DeleteOrderFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetOrderDateFieldsCommand
 */
export const se_GetOrderDateFieldsCommand = async(
  input: GetOrderDateFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_fields";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1GetOrderFieldsCommand
 */
export const se_GetOrderFieldsCommand = async(
  input: GetOrderFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_fields";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1RenameOrderDateFieldCommand
 */
export const se_RenameOrderDateFieldCommand = async(
  input: RenameOrderDateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}/rename";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  body = JSON.stringify(take(input, {
    'body': _ => _json(_),
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1RenameOrderFieldCommand
 */
export const se_RenameOrderFieldCommand = async(
  input: RenameOrderFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}/rename";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  body = JSON.stringify(take(input, {
    'body': _ => _json(_),
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateOrderDateFieldCommand
 */
export const se_UpdateOrderDateFieldCommand = async(
  input: UpdateOrderDateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateOrderFieldCommand
 */
export const se_UpdateOrderFieldCommand = async(
  input: UpdateOrderFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId!, '{orderFieldId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreateOrderCommand
 */
export const se_CreateOrderCommand = async(
  input: CreateOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/new";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteOrderCommand
 */
export const se_DeleteOrderCommand = async(
  input: DeleteOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId!, '{orderId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetOrderByIdCommand
 */
export const se_GetOrderByIdCommand = async(
  input: GetOrderByIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId!, '{orderId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateOrderCommand
 */
export const se_UpdateOrderCommand = async(
  input: UpdateOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId!, '{orderId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1CreatePlantCommand
 */
export const se_CreatePlantCommand = async(
  input: CreatePlantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant";
  let body: any;
  body = JSON.stringify(take(input, {
    'address': [],
    'max_capacity': [],
    'name': [],
    'night_shift_from': [],
    'night_shift_to': [],
    'phone_number': [],
    'plant_type': [],
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantByIdCommand
 */
export const se_GetPlantByIdCommand = async(
  input: GetPlantByIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantsListCommand
 */
export const se_GetPlantsListCommand = async(
  input: GetPlantsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plants_list";
  const query: any = map({
    "data": [, "true"],
    "permissions": [,input.permissions!],
    "show_inactive": [() => input.show_inactive !== void 0, () => (input.show_inactive!.toString())],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1GetPlantSubscribersCommand
 */
export const se_GetPlantSubscribersCommand = async(
  input: GetPlantSubscribersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/subscribers";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  const query: any = map({
    "data": [, "true"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1UpdatePlantCommand
 */
export const se_UpdatePlantCommand = async(
  input: UpdatePlantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId!, '{plantId}', false)
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * deserializeAws_restJson1GetBusinessesCommand
 */
export const de_GetBusinessesCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBusinessesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBusinessesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetBusinessesCommandError
 */
const de_GetBusinessesCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetBusinessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetSuppliersCommand
 */
export const de_GetSuppliersCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuppliersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSuppliersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetSuppliersCommandError
 */
const de_GetSuppliersCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetSuppliersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1LoginCommand
 */
export const de_LoginCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LoginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_LoginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'token': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1LoginCommandError
 */
const de_LoginCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<LoginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreatePlantCustomerCommand
 */
export const de_CreatePlantCustomerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlantCustomerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePlantCustomerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'extra_fields_data': _json,
    'id': __expectInt32,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreatePlantCustomerCommandError
 */
const de_CreatePlantCustomerCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreatePlantCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeletePlantCustomerCommand
 */
export const de_DeletePlantCustomerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlantCustomerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePlantCustomerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeletePlantCustomerCommandError
 */
const de_DeletePlantCustomerCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeletePlantCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantCustomerByIdCommand
 */
export const de_GetPlantCustomerByIdCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantCustomerByIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantCustomerByIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'extra_fields_data': _json,
    'id': __expectInt32,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantCustomerByIdCommandError
 */
const de_GetPlantCustomerByIdCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantCustomerByIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantCustomersCommand
 */
export const de_GetPlantCustomersCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantCustomersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantCustomersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantCustomersCommandError
 */
const de_GetPlantCustomersCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantCustomersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1ReplacePlantCustomerCommand
 */
export const de_ReplacePlantCustomerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplacePlantCustomerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReplacePlantCustomerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'result': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1ReplacePlantCustomerCommandError
 */
const de_ReplacePlantCustomerCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ReplacePlantCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdatePlantCustomerCommand
 */
export const de_UpdatePlantCustomerCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlantCustomerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePlantCustomerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'extra_fields_data': _json,
    'id': __expectInt32,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdatePlantCustomerCommandError
 */
const de_UpdatePlantCustomerCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdatePlantCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreatePlantMaterialCommand
 */
export const de_CreatePlantMaterialCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlantMaterialCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePlantMaterialCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'active': __expectBoolean,
    'current_inventory_amount': __expectInt32,
    'current_inventory_updated_on': __expectString,
    'description': __expectString,
    'id': __expectInt32,
    'is_output_material': __expectBoolean,
    'max_inventory_amount': __expectInt32,
    'min_inventory_amount': __expectInt32,
    'mix_designs': _json,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
    'supplier_id': __expectInt32,
    'supplier_name': __expectString,
    'supplier_product_name': __expectString,
    'system_color': __expectString,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreatePlantMaterialCommandError
 */
const de_CreatePlantMaterialCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreatePlantMaterialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeletePlantMaterialCommand
 */
export const de_DeletePlantMaterialCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlantMaterialCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePlantMaterialCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeletePlantMaterialCommandError
 */
const de_DeletePlantMaterialCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeletePlantMaterialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantMaterialByIdCommand
 */
export const de_GetPlantMaterialByIdCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantMaterialByIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantMaterialByIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'active': __expectBoolean,
    'current_inventory_amount': __expectInt32,
    'current_inventory_updated_on': __expectString,
    'description': __expectString,
    'id': __expectInt32,
    'is_output_material': __expectBoolean,
    'max_inventory_amount': __expectInt32,
    'min_inventory_amount': __expectInt32,
    'mix_designs': _json,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
    'supplier_id': __expectInt32,
    'supplier_name': __expectString,
    'supplier_product_name': __expectString,
    'system_color': __expectString,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantMaterialByIdCommandError
 */
const de_GetPlantMaterialByIdCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantMaterialByIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantMaterialsCommand
 */
export const de_GetPlantMaterialsCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantMaterialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantMaterialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantMaterialsCommandError
 */
const de_GetPlantMaterialsCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantMaterialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdatePlantMaterialCommand
 */
export const de_UpdatePlantMaterialCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlantMaterialCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePlantMaterialCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'active': __expectBoolean,
    'current_inventory_amount': __expectInt32,
    'current_inventory_updated_on': __expectString,
    'description': __expectString,
    'id': __expectInt32,
    'is_output_material': __expectBoolean,
    'max_inventory_amount': __expectInt32,
    'min_inventory_amount': __expectInt32,
    'mix_designs': _json,
    'name': __expectString,
    'plant': __expectInt32,
    'removed': __expectString,
    'supplier_id': __expectInt32,
    'supplier_name': __expectString,
    'supplier_product_name': __expectString,
    'system_color': __expectString,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdatePlantMaterialCommandError
 */
const de_UpdatePlantMaterialCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdatePlantMaterialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreateMixDesignCommand
 */
export const de_CreateMixDesignCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMixDesignCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMixDesignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'components': _json,
    'expiration_date': __expectString,
    'id': __expectInt32,
    'output_material': __expectInt32,
    'plant': __expectInt32,
    'removed': __expectString,
    'specification_basis': __expectString,
    'verified': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreateMixDesignCommandError
 */
const de_CreateMixDesignCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateMixDesignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeleteMixDesignCommand
 */
export const de_DeleteMixDesignCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMixDesignCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMixDesignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeleteMixDesignCommandError
 */
const de_DeleteMixDesignCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteMixDesignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetMixDesignByIdCommand
 */
export const de_GetMixDesignByIdCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMixDesignByIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMixDesignByIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'components': _json,
    'expiration_date': __expectString,
    'id': __expectInt32,
    'output_material': __expectInt32,
    'plant': __expectInt32,
    'removed': __expectString,
    'specification_basis': __expectString,
    'verified': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetMixDesignByIdCommandError
 */
const de_GetMixDesignByIdCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetMixDesignByIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetMixDesignsCommand
 */
export const de_GetMixDesignsCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMixDesignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMixDesignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'expiration_date': __expectString,
    'id': __expectInt32,
    'name': __expectString,
    'output_material': __expectInt32,
    'plant': __expectInt32,
    'removed': __expectString,
    'specification_basis': __expectString,
    'verified': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetMixDesignsCommandError
 */
const de_GetMixDesignsCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetMixDesignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdateMixDesignCommand
 */
export const de_UpdateMixDesignCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMixDesignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMixDesignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'components': _json,
    'expiration_date': __expectString,
    'id': __expectString,
    'output_material': __expectInt32,
    'removed': __expectString,
    'specification_basis': __expectString,
    'verified': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateMixDesignCommandError
 */
const de_UpdateMixDesignCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateMixDesignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreateNoteCommand
 */
export const de_CreateNoteCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNoteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNoteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'calendar_type': __expectString,
    'dates': _json,
    'description': __expectString,
    'icon': __expectString,
    'id': __expectInt32,
    'plant': __expectInt32,
    'type': __expectString,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreateNoteCommandError
 */
const de_CreateNoteCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateNoteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeleteNoteCommand
 */
export const de_DeleteNoteCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNoteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteNoteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeleteNoteCommandError
 */
const de_DeleteNoteCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteNoteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdateNoteCommand
 */
export const de_UpdateNoteCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNoteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNoteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateNoteCommandError
 */
const de_UpdateNoteCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateNoteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreateOrderDateFieldCommand
 */
export const de_CreateOrderDateFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderDateFieldCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateOrderDateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreateOrderDateFieldCommandError
 */
const de_CreateOrderDateFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateOrderDateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreateOrderFieldCommand
 */
export const de_CreateOrderFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderFieldCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateOrderFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreateOrderFieldCommandError
 */
const de_CreateOrderFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateOrderFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeleteOrderDateFieldCommand
 */
export const de_DeleteOrderDateFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrderDateFieldCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteOrderDateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeleteOrderDateFieldCommandError
 */
const de_DeleteOrderDateFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteOrderDateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeleteOrderFieldCommand
 */
export const de_DeleteOrderFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrderFieldCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteOrderFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeleteOrderFieldCommandError
 */
const de_DeleteOrderFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteOrderFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetOrderDateFieldsCommand
 */
export const de_GetOrderDateFieldsCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderDateFieldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOrderDateFieldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetOrderDateFieldsCommandError
 */
const de_GetOrderDateFieldsCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetOrderDateFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetOrderFieldsCommand
 */
export const de_GetOrderFieldsCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderFieldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOrderFieldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetOrderFieldsCommandError
 */
const de_GetOrderFieldsCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetOrderFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1RenameOrderDateFieldCommand
 */
export const de_RenameOrderDateFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenameOrderDateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RenameOrderDateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1RenameOrderDateFieldCommandError
 */
const de_RenameOrderDateFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RenameOrderDateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1RenameOrderFieldCommand
 */
export const de_RenameOrderFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenameOrderFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RenameOrderFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1RenameOrderFieldCommandError
 */
const de_RenameOrderFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RenameOrderFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdateOrderDateFieldCommand
 */
export const de_UpdateOrderDateFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrderDateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOrderDateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateOrderDateFieldCommandError
 */
const de_UpdateOrderDateFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateOrderDateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdateOrderFieldCommand
 */
export const de_UpdateOrderFieldCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrderFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOrderFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'field_type': __expectString,
    'id': __expectInt32,
    'is_required': __expectBoolean,
    'name': __expectString,
    'plant': __expectInt32,
    'visible_to_customer': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateOrderFieldCommandError
 */
const de_UpdateOrderFieldCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateOrderFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreateOrderCommand
 */
export const de_CreateOrderCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'created_at': __expectString,
    'created_by': __expectInt32,
    'created_by_name': __expectString,
    'customer': __expectString,
    'dates': _json,
    'extra_fields_data': _json,
    'feed': _json,
    'id': __expectInt32,
    'material': __expectInt32,
    'modified_at': __expectString,
    'modified_by_name': __expectString,
    'plant': __expectInt32,
    'tentative': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreateOrderCommandError
 */
const de_CreateOrderCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1DeleteOrderCommand
 */
export const de_DeleteOrderCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrderCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1DeleteOrderCommandError
 */
const de_DeleteOrderCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetOrderByIdCommand
 */
export const de_GetOrderByIdCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderByIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOrderByIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'created_at': __expectString,
    'created_by': __expectInt32,
    'created_by_name': __expectString,
    'customer': __expectString,
    'dates': _json,
    'extra_fields_data': _json,
    'feed': _json,
    'id': __expectInt32,
    'material': __expectInt32,
    'modified_at': __expectString,
    'modified_by_name': __expectString,
    'plant': __expectInt32,
    'tentative': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetOrderByIdCommandError
 */
const de_GetOrderByIdCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetOrderByIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdateOrderCommand
 */
export const de_UpdateOrderCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'created_at': __expectString,
    'created_by': __expectInt32,
    'created_by_name': __expectString,
    'customer': __expectString,
    'dates': _json,
    'extra_fields_data': _json,
    'feed': _json,
    'id': __expectInt32,
    'material': __expectInt32,
    'modified_at': __expectString,
    'modified_by_name': __expectString,
    'plant': __expectInt32,
    'tentative': __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdateOrderCommandError
 */
const de_UpdateOrderCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1CreatePlantCommand
 */
export const de_CreatePlantCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlantCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePlantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'address': __expectString,
    'business': __expectInt32,
    'customer_name': __expectString,
    'id': __expectInt32,
    'max_capacity': __expectInt32,
    'name': __expectString,
    'night_shift_from': __expectString,
    'night_shift_to': __expectString,
    'owner': __expectInt32,
    'picture': __expectString,
    'plant_type': __expectString,
    'removed': _json,
    'show_produced_materials': __expectBoolean,
    'source_plant': __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1CreatePlantCommandError
 */
const de_CreatePlantCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreatePlantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantByIdCommand
 */
export const de_GetPlantByIdCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantByIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantByIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'address': __expectString,
    'business': __expectInt32,
    'customer_name': __expectString,
    'id': __expectInt32,
    'max_capacity': __expectInt32,
    'name': __expectString,
    'night_shift_from': __expectString,
    'night_shift_to': __expectString,
    'owner': __expectInt32,
    'picture': __expectString,
    'plant_type': __expectString,
    'removed': _json,
    'show_produced_materials': __expectBoolean,
    'source_plant': __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantByIdCommandError
 */
const de_GetPlantByIdCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantByIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantsListCommand
 */
export const de_GetPlantsListCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantsListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantsListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantsListCommandError
 */
const de_GetPlantsListCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1GetPlantSubscribersCommand
 */
export const de_GetPlantSubscribersCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlantSubscribersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlantSubscribersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'data': _json,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1GetPlantSubscribersCommandError
 */
const de_GetPlantSubscribersCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlantSubscribersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

/**
 * deserializeAws_restJson1UpdatePlantCommand
 */
export const de_UpdatePlantCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePlantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  const doc = take(data, {
    'address': __expectString,
    'business': __expectInt32,
    'customer_name': __expectString,
    'id': __expectInt32,
    'max_capacity': __expectInt32,
    'name': __expectString,
    'night_shift_from': __expectString,
    'night_shift_to': __expectString,
    'owner': __expectInt32,
    'picture': __expectString,
    'plant_type': __expectString,
    'removed': _json,
    'show_produced_materials': __expectBoolean,
    'source_plant': __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
}

/**
 * deserializeAws_restJson1UpdatePlantCommandError
 */
const de_UpdatePlantCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdatePlantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode
  })
}

const throwDefaultError = withBaseException(__BaseException);
// se_CreateCustomerPayload omitted.

// se_ReplacePlantCustomerPayload omitted.

// se_UpdateCustomerPayload omitted.

// se_CreatePlantMaterialPayload omitted.

// se_UpdatePlantMaterialPayload omitted.

// se_CreateMixDesignPayload omitted.

// se_MixDesignComponent omitted.

// se_MixDesignComponentsList omitted.

// se_UpdateMixDesignPayload omitted.

// se_CreateNotePayloadDates omitted.

// se_CreateUpdateNotePayload omitted.

// se_NoteDatePayload omitted.

// se_CreateOrderFieldPayload omitted.

// se_RenameOrderFieldPayload omitted.

// se_UpdateOrderFieldPayload omitted.

// se_CreateOrderPayload omitted.

// se_ExtraFieldData omitted.

// se_ExtraFieldsDataList omitted.

// se_OrderDate omitted.

// se_OrderDatesList omitted.

// se_UpdateOrderPayload omitted.

// se_Plant omitted.

// se_Removed omitted.

// de_Business omitted.

// de_BusinessList omitted.

// de_BusinessMember omitted.

// de_BusinessMemberList omitted.

// de_Supplier omitted.

// de_SupplierList omitted.

// de_Customer omitted.

// de_CustomerList omitted.

// de_Material omitted.

// de_MaterialList omitted.

// de_MixDesingList omitted.

// de_MixDesignComponent omitted.

// de_MixDesignComponentsList omitted.

// de_NoteDate omitted.

// de_NoteDateList omitted.

// de_OrderField omitted.

// de_OrderFieldList omitted.

// de_ExtraFieldData omitted.

// de_ExtraFieldsDataList omitted.

// de_OrderDateServer omitted.

// de_OrderDateServerResponse omitted.

// de_OrderFeed omitted.

// de_OrderFeedList omitted.

// de_OrderFeedMessage omitted.

// de_OrderFeedMessagesList omitted.

// de_OrderFeedRecord omitted.

// de_OrderFeedRecordsList omitted.

// de_Plant omitted.

// de_PlantsList omitted.

// de_PlantSubscriberList omitted.

// de_Removed omitted.

// de_Subscriber omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any => collectBodyString(streamBody, context).then(encoded => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
});

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
