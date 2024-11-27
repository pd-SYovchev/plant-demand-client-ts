import { PlantDemandServiceServiceException as __BaseException } from "../models/PlantDemandServiceServiceException";
import { HttpRequest as __HttpRequest, } from "@smithy/protocol-http";
import { expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, resolvedPath as __resolvedPath, _json, collectBody, map, take, withBaseException, } from "@smithy/smithy-client";
export const se_GetBusinessesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/business_list";
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_GetSuppliersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/suppliers_list";
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_LoginCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api-token-auth";
    let body;
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
};
export const se_CreatePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/new";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_DeletePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPlantCustomerByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPlantCustomersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/list";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "name": [, input.name],
        "include_removed": [() => input.include_removed !== void 0, () => (input.include_removed.toString())],
    });
    let body;
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
};
export const se_ReplacePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/replace";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_UpdatePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
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
};
export const se_CreatePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_DeletePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPlantMaterialByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPlantMaterialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/materials";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_UpdatePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
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
};
export const se_CreateMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_DeleteMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetMixDesignByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetMixDesignsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_designs";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_UpdateMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
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
};
export const se_CreateNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plant}/calendar_note/new";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plant', () => input.plant, '{plant}', false);
    let body;
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
};
export const se_DeleteNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'noteId', () => input.noteId, '{noteId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'noteId', () => input.noteId, '{noteId}', false);
    let body;
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
};
export const se_CreateOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/new";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_CreateOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/new";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_DeleteOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetOrderDateFieldsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_fields";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_GetOrderFieldsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_fields";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_RenameOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}/rename";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
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
};
export const se_RenameOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}/rename";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
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
};
export const se_UpdateOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_date_field/{orderFieldId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
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
};
export const se_UpdateOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_field/{orderFieldId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
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
};
export const se_CreateOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/new";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const se_DeleteOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}/delete";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetOrderByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = __resolvedPath(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
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
};
export const se_CreatePlantCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant";
    let body;
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
};
export const se_GetPlantByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPlantsListCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plants_list";
    const query = map({
        "data": [, "true"],
        "permissions": [, input.permissions],
        "show_inactive": [() => input.show_inactive !== void 0, () => (input.show_inactive.toString())],
    });
    let body;
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
};
export const se_GetPlantSubscribersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/subscribers";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = map({
        "data": [, "true"],
    });
    let body;
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
};
export const se_UpdatePlantCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
    resolvedPath = __resolvedPath(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
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
};
export const de_GetBusinessesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetBusinessesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetBusinessesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetSuppliersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetSuppliersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetSuppliersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_LoginCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_LoginCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'token': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_LoginCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreatePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreatePlantCustomerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'extra_fields_data': _json,
        'id': __expectInt32,
        'name': __expectString,
        'plant': __expectInt32,
        'removed': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreatePlantCustomerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeletePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeletePlantCustomerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeletePlantCustomerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantCustomerByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantCustomerByIdCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'extra_fields_data': _json,
        'id': __expectInt32,
        'name': __expectString,
        'plant': __expectInt32,
        'removed': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPlantCustomerByIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantCustomersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantCustomersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPlantCustomersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_ReplacePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ReplacePlantCustomerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'result': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ReplacePlantCustomerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdatePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantCustomerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'extra_fields_data': _json,
        'id': __expectInt32,
        'name': __expectString,
        'plant': __expectInt32,
        'removed': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdatePlantCustomerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreatePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreatePlantMaterialCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreatePlantMaterialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeletePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeletePlantMaterialCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeletePlantMaterialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantMaterialByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantMaterialByIdCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_GetPlantMaterialByIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantMaterialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantMaterialsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPlantMaterialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdatePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantMaterialCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdatePlantMaterialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreateMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateMixDesignCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreateMixDesignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeleteMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteMixDesignCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteMixDesignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetMixDesignByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetMixDesignByIdCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_GetMixDesignByIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetMixDesignsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetMixDesignsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_GetMixDesignsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdateMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateMixDesignCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdateMixDesignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreateNoteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateNoteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreateNoteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeleteNoteCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteNoteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteNoteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdateNoteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateNoteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_UpdateNoteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreateOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderDateFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreateOrderDateFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreateOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreateOrderFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeleteOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderDateFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteOrderDateFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeleteOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteOrderFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetOrderDateFieldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderDateFieldsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetOrderDateFieldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetOrderFieldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderFieldsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetOrderFieldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_RenameOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RenameOrderDateFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_RenameOrderDateFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_RenameOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RenameOrderFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_RenameOrderFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdateOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderDateFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdateOrderDateFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdateOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderFieldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdateOrderFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreateOrderCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreateOrderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_DeleteOrderCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteOrderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetOrderByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderByIdCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_GetOrderByIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdateOrderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdateOrderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_CreatePlantCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreatePlantCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_CreatePlantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantByIdCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_GetPlantByIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantsListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantsListCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPlantsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_GetPlantSubscribersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantSubscribersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'data': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPlantSubscribersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
export const de_UpdatePlantCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
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
};
const de_UpdatePlantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
const throwDefaultError = withBaseException(__BaseException);
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then(body => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
        value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
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
