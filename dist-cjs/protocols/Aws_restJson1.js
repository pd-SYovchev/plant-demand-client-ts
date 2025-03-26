"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_UpdatePlantCustomerCommand = exports.de_ReplacePlantCustomerCommand = exports.de_GetPlantCustomersCommand = exports.de_GetPlantCustomerByIdCommand = exports.de_DeletePlantCustomerCommand = exports.de_CreatePlantCustomerCommand = exports.de_LoginCommand = exports.de_GetSuppliersCommand = exports.de_GetBusinessesCommand = exports.se_UpdatePlantCommand = exports.se_GetPlantSubscribersCommand = exports.se_GetPlantsListCommand = exports.se_GetPlantByIdCommand = exports.se_CreatePlantCommand = exports.se_UpdateOrderCommand = exports.se_GetOrderByIdCommand = exports.se_DeleteOrderCommand = exports.se_CreateOrderCommand = exports.se_UpdateOrderFieldCommand = exports.se_UpdateOrderDateFieldCommand = exports.se_RenameOrderFieldCommand = exports.se_RenameOrderDateFieldCommand = exports.se_GetOrderFieldsCommand = exports.se_GetOrderDateFieldsCommand = exports.se_DeleteOrderFieldCommand = exports.se_DeleteOrderDateFieldCommand = exports.se_CreateOrderFieldCommand = exports.se_CreateOrderDateFieldCommand = exports.se_UpdateNoteCommand = exports.se_DeleteNoteCommand = exports.se_CreateNoteCommand = exports.se_UpdateMixDesignCommand = exports.se_GetMixDesignsCommand = exports.se_GetMixDesignByIdCommand = exports.se_DeleteMixDesignCommand = exports.se_CreateMixDesignCommand = exports.se_UpdatePlantMaterialCommand = exports.se_GetPlantMaterialsCommand = exports.se_GetPlantMaterialByIdCommand = exports.se_DeletePlantMaterialCommand = exports.se_CreatePlantMaterialCommand = exports.se_UpdatePlantCustomerCommand = exports.se_ReplacePlantCustomerCommand = exports.se_GetPlantCustomersCommand = exports.se_GetPlantCustomerByIdCommand = exports.se_DeletePlantCustomerCommand = exports.se_CreatePlantCustomerCommand = exports.se_LoginCommand = exports.se_GetSuppliersCommand = exports.se_GetBusinessesCommand = void 0;
exports.de_UpdatePlantCommand = exports.de_GetPlantSubscribersCommand = exports.de_GetPlantsListCommand = exports.de_GetPlantByIdCommand = exports.de_CreatePlantCommand = exports.de_UpdateOrderCommand = exports.de_GetOrderByIdCommand = exports.de_DeleteOrderCommand = exports.de_CreateOrderCommand = exports.de_UpdateOrderFieldCommand = exports.de_UpdateOrderDateFieldCommand = exports.de_RenameOrderFieldCommand = exports.de_RenameOrderDateFieldCommand = exports.de_GetOrderFieldsCommand = exports.de_GetOrderDateFieldsCommand = exports.de_DeleteOrderFieldCommand = exports.de_DeleteOrderDateFieldCommand = exports.de_CreateOrderFieldCommand = exports.de_CreateOrderDateFieldCommand = exports.de_UpdateNoteCommand = exports.de_DeleteNoteCommand = exports.de_CreateNoteCommand = exports.de_UpdateMixDesignCommand = exports.de_GetMixDesignsCommand = exports.de_GetMixDesignByIdCommand = exports.de_DeleteMixDesignCommand = exports.de_CreateMixDesignCommand = exports.de_UpdatePlantMaterialCommand = exports.de_GetPlantMaterialsCommand = exports.de_GetPlantMaterialByIdCommand = exports.de_DeletePlantMaterialCommand = exports.de_CreatePlantMaterialCommand = void 0;
const PlantDemandServiceServiceException_1 = require("../models/PlantDemandServiceServiceException");
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const se_GetBusinessesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/business_list";
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
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
exports.se_GetBusinessesCommand = se_GetBusinessesCommand;
const se_GetSuppliersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/suppliers_list";
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
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
exports.se_GetSuppliersCommand = se_GetSuppliersCommand;
const se_LoginCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api-token-auth";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'password': [],
        'username': [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_LoginCommand = se_LoginCommand;
const se_CreatePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/new";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreatePlantCustomerCommand = se_CreatePlantCustomerCommand;
const se_DeletePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeletePlantCustomerCommand = se_DeletePlantCustomerCommand;
const se_GetPlantCustomerByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetPlantCustomerByIdCommand = se_GetPlantCustomerByIdCommand;
const se_GetPlantCustomersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/list";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "name": [, input.name],
        "include_removed": [() => input.include_removed !== void 0, () => (input.include_removed.toString())],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetPlantCustomersCommand = se_GetPlantCustomersCommand;
const se_ReplacePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/replace";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_ReplacePlantCustomerCommand = se_ReplacePlantCustomerCommand;
const se_UpdatePlantCustomerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/customers/{customerId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'customerId', () => input.customerId, '{customerId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdatePlantCustomerCommand = se_UpdatePlantCustomerCommand;
const se_CreatePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreatePlantMaterialCommand = se_CreatePlantMaterialCommand;
const se_DeletePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeletePlantMaterialCommand = se_DeletePlantMaterialCommand;
const se_GetPlantMaterialByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetPlantMaterialByIdCommand = se_GetPlantMaterialByIdCommand;
const se_GetPlantMaterialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/materials";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetPlantMaterialsCommand = se_GetPlantMaterialsCommand;
const se_UpdatePlantMaterialCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/material/{materialId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'materialId', () => input.materialId, '{materialId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdatePlantMaterialCommand = se_UpdatePlantMaterialCommand;
const se_CreateMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateMixDesignCommand = se_CreateMixDesignCommand;
const se_DeleteMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteMixDesignCommand = se_DeleteMixDesignCommand;
const se_GetMixDesignByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetMixDesignByIdCommand = se_GetMixDesignByIdCommand;
const se_GetMixDesignsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_designs";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetMixDesignsCommand = se_GetMixDesignsCommand;
const se_UpdateMixDesignCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/mix_design/{mixDesignId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'mixDesignId', () => input.mixDesignId, '{mixDesignId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateMixDesignCommand = se_UpdateMixDesignCommand;
const se_CreateNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plant}/calendar_note/new";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plant', () => input.plant, '{plant}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateNoteCommand = se_CreateNoteCommand;
const se_DeleteNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'noteId', () => input.noteId, '{noteId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteNoteCommand = se_DeleteNoteCommand;
const se_UpdateNoteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/calendar_note/{noteId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'noteId', () => input.noteId, '{noteId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateNoteCommand = se_UpdateNoteCommand;
const se_CreateOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_date_field/new";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateOrderDateFieldCommand = se_CreateOrderDateFieldCommand;
const se_CreateOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_field/new";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateOrderFieldCommand = se_CreateOrderFieldCommand;
const se_DeleteOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_date_field/{orderFieldId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteOrderDateFieldCommand = se_DeleteOrderDateFieldCommand;
const se_DeleteOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_field/{orderFieldId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteOrderFieldCommand = se_DeleteOrderFieldCommand;
const se_GetOrderDateFieldsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_date_fields";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetOrderDateFieldsCommand = se_GetOrderDateFieldsCommand;
const se_GetOrderFieldsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/order_fields";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetOrderFieldsCommand = se_GetOrderFieldsCommand;
const se_RenameOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_date_field/{orderFieldId}/rename";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'body': _ => (0, smithy_client_1._json)(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_RenameOrderDateFieldCommand = se_RenameOrderDateFieldCommand;
const se_RenameOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_field/{orderFieldId}/rename";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'body': _ => (0, smithy_client_1._json)(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_RenameOrderFieldCommand = se_RenameOrderFieldCommand;
const se_UpdateOrderDateFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_date_field/{orderFieldId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateOrderDateFieldCommand = se_UpdateOrderDateFieldCommand;
const se_UpdateOrderFieldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order_field/{orderFieldId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderFieldId', () => input.orderFieldId, '{orderFieldId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateOrderFieldCommand = se_UpdateOrderFieldCommand;
const se_CreateOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/new";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateOrderCommand = se_CreateOrderCommand;
const se_DeleteOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}/delete";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteOrderCommand = se_DeleteOrderCommand;
const se_GetOrderByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetOrderByIdCommand = se_GetOrderByIdCommand;
const se_UpdateOrderCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}/order/{orderId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'orderId', () => input.orderId, '{orderId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateOrderCommand = se_UpdateOrderCommand;
const se_CreatePlantCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'address': [],
        'max_capacity': [],
        'name': [],
        'night_shift_from': [],
        'night_shift_to': [],
        'phone_number': [],
        'plant_type': [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreatePlantCommand = se_CreatePlantCommand;
const se_GetPlantByIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetPlantByIdCommand = se_GetPlantByIdCommand;
const se_GetPlantsListCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plants_list";
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
        "permissions": [, input.permissions],
        "show_inactive": [() => input.show_inactive !== void 0, () => (input.show_inactive.toString())],
        "organization": [() => input.organization !== void 0, () => (input.organization.toString())],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetPlantsListCommand = se_GetPlantsListCommand;
const se_GetPlantSubscribersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/plant/{plantId}/subscribers";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    const query = (0, smithy_client_1.map)({
        "data": [, "true"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetPlantSubscribersCommand = se_GetPlantSubscribersCommand;
const se_UpdatePlantCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': 'application/json',
    };
    let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/api/plant/{plantId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, 'plantId', () => input.plantId, '{plantId}', false);
    let body;
    if (input.body !== undefined) {
        body = (0, smithy_client_1._json)(input.body);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdatePlantCommand = se_UpdatePlantCommand;
const de_GetBusinessesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetBusinessesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetBusinessesCommand = de_GetBusinessesCommand;
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
const de_GetSuppliersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetSuppliersCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetSuppliersCommand = de_GetSuppliersCommand;
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
const de_LoginCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_LoginCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'token': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_LoginCommand = de_LoginCommand;
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
const de_CreatePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreatePlantCustomerCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'extra_fields_data': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreatePlantCustomerCommand = de_CreatePlantCustomerCommand;
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
const de_DeletePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeletePlantCustomerCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeletePlantCustomerCommand = de_DeletePlantCustomerCommand;
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
const de_GetPlantCustomerByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantCustomerByIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'extra_fields_data': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantCustomerByIdCommand = de_GetPlantCustomerByIdCommand;
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
const de_GetPlantCustomersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantCustomersCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantCustomersCommand = de_GetPlantCustomersCommand;
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
const de_ReplacePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ReplacePlantCustomerCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'result': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ReplacePlantCustomerCommand = de_ReplacePlantCustomerCommand;
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
const de_UpdatePlantCustomerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantCustomerCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'extra_fields_data': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdatePlantCustomerCommand = de_UpdatePlantCustomerCommand;
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
const de_CreatePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreatePlantMaterialCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'active': smithy_client_1.expectBoolean,
        'current_inventory_amount': smithy_client_1.expectInt32,
        'current_inventory_updated_on': smithy_client_1.expectString,
        'description': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_output_material': smithy_client_1.expectBoolean,
        'max_inventory_amount': smithy_client_1.expectInt32,
        'min_inventory_amount': smithy_client_1.expectInt32,
        'mix_designs': smithy_client_1._json,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'supplier_id': smithy_client_1.expectInt32,
        'supplier_name': smithy_client_1.expectString,
        'supplier_product_name': smithy_client_1.expectString,
        'system_color': smithy_client_1.expectString,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreatePlantMaterialCommand = de_CreatePlantMaterialCommand;
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
const de_DeletePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeletePlantMaterialCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeletePlantMaterialCommand = de_DeletePlantMaterialCommand;
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
const de_GetPlantMaterialByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantMaterialByIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'active': smithy_client_1.expectBoolean,
        'current_inventory_amount': smithy_client_1.expectInt32,
        'current_inventory_updated_on': smithy_client_1.expectString,
        'description': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_output_material': smithy_client_1.expectBoolean,
        'max_inventory_amount': smithy_client_1.expectInt32,
        'min_inventory_amount': smithy_client_1.expectInt32,
        'mix_designs': smithy_client_1._json,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'supplier_id': smithy_client_1.expectInt32,
        'supplier_name': smithy_client_1.expectString,
        'supplier_product_name': smithy_client_1.expectString,
        'system_color': smithy_client_1.expectString,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantMaterialByIdCommand = de_GetPlantMaterialByIdCommand;
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
const de_GetPlantMaterialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantMaterialsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantMaterialsCommand = de_GetPlantMaterialsCommand;
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
const de_UpdatePlantMaterialCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantMaterialCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'active': smithy_client_1.expectBoolean,
        'current_inventory_amount': smithy_client_1.expectInt32,
        'current_inventory_updated_on': smithy_client_1.expectString,
        'description': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_output_material': smithy_client_1.expectBoolean,
        'max_inventory_amount': smithy_client_1.expectInt32,
        'min_inventory_amount': smithy_client_1.expectInt32,
        'mix_designs': smithy_client_1._json,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'supplier_id': smithy_client_1.expectInt32,
        'supplier_name': smithy_client_1.expectString,
        'supplier_product_name': smithy_client_1.expectString,
        'system_color': smithy_client_1.expectString,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdatePlantMaterialCommand = de_UpdatePlantMaterialCommand;
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
const de_CreateMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateMixDesignCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'components': smithy_client_1._json,
        'expiration_date': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'output_material': smithy_client_1.expectInt32,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'specification_basis': smithy_client_1.expectString,
        'verified': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateMixDesignCommand = de_CreateMixDesignCommand;
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
const de_DeleteMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteMixDesignCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteMixDesignCommand = de_DeleteMixDesignCommand;
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
const de_GetMixDesignByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetMixDesignByIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'components': smithy_client_1._json,
        'expiration_date': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'output_material': smithy_client_1.expectInt32,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'specification_basis': smithy_client_1.expectString,
        'verified': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetMixDesignByIdCommand = de_GetMixDesignByIdCommand;
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
const de_GetMixDesignsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetMixDesignsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'expiration_date': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'output_material': smithy_client_1.expectInt32,
        'plant': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'specification_basis': smithy_client_1.expectString,
        'verified': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetMixDesignsCommand = de_GetMixDesignsCommand;
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
const de_UpdateMixDesignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateMixDesignCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'components': smithy_client_1._json,
        'expiration_date': smithy_client_1.expectString,
        'id': smithy_client_1.expectString,
        'output_material': smithy_client_1.expectInt32,
        'removed': smithy_client_1.expectString,
        'specification_basis': smithy_client_1.expectString,
        'verified': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateMixDesignCommand = de_UpdateMixDesignCommand;
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
const de_CreateNoteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateNoteCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'calendar_type': smithy_client_1.expectString,
        'dates': smithy_client_1._json,
        'description': smithy_client_1.expectString,
        'icon': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'plant': smithy_client_1.expectInt32,
        'type': smithy_client_1.expectString,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateNoteCommand = de_CreateNoteCommand;
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
const de_DeleteNoteCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteNoteCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteNoteCommand = de_DeleteNoteCommand;
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
const de_UpdateNoteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateNoteCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_UpdateNoteCommand = de_UpdateNoteCommand;
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
const de_CreateOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderDateFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateOrderDateFieldCommand = de_CreateOrderDateFieldCommand;
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
const de_CreateOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateOrderFieldCommand = de_CreateOrderFieldCommand;
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
const de_DeleteOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderDateFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteOrderDateFieldCommand = de_DeleteOrderDateFieldCommand;
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
const de_DeleteOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteOrderFieldCommand = de_DeleteOrderFieldCommand;
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
const de_GetOrderDateFieldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderDateFieldsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetOrderDateFieldsCommand = de_GetOrderDateFieldsCommand;
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
const de_GetOrderFieldsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderFieldsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetOrderFieldsCommand = de_GetOrderFieldsCommand;
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
const de_RenameOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RenameOrderDateFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_RenameOrderDateFieldCommand = de_RenameOrderDateFieldCommand;
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
const de_RenameOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RenameOrderFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_RenameOrderFieldCommand = de_RenameOrderFieldCommand;
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
const de_UpdateOrderDateFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderDateFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateOrderDateFieldCommand = de_UpdateOrderDateFieldCommand;
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
const de_UpdateOrderFieldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderFieldCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'field_type': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'is_required': smithy_client_1.expectBoolean,
        'name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'visible_to_customer': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateOrderFieldCommand = de_UpdateOrderFieldCommand;
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
const de_CreateOrderCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOrderCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'created_at': smithy_client_1.expectString,
        'created_by': smithy_client_1.expectInt32,
        'created_by_name': smithy_client_1.expectString,
        'customer': smithy_client_1.expectString,
        'dates': smithy_client_1._json,
        'extra_fields_data': smithy_client_1._json,
        'feed': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'material': smithy_client_1.expectInt32,
        'modified_at': smithy_client_1.expectString,
        'modified_by_name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'tentative': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateOrderCommand = de_CreateOrderCommand;
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
const de_DeleteOrderCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOrderCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteOrderCommand = de_DeleteOrderCommand;
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
const de_GetOrderByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOrderByIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'created_at': smithy_client_1.expectString,
        'created_by': smithy_client_1.expectInt32,
        'created_by_name': smithy_client_1.expectString,
        'customer': smithy_client_1.expectString,
        'dates': smithy_client_1._json,
        'extra_fields_data': smithy_client_1._json,
        'feed': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'material': smithy_client_1.expectInt32,
        'modified_at': smithy_client_1.expectString,
        'modified_by_name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'tentative': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetOrderByIdCommand = de_GetOrderByIdCommand;
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
const de_UpdateOrderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOrderCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'created_at': smithy_client_1.expectString,
        'created_by': smithy_client_1.expectInt32,
        'created_by_name': smithy_client_1.expectString,
        'customer': smithy_client_1.expectString,
        'dates': smithy_client_1._json,
        'extra_fields_data': smithy_client_1._json,
        'feed': smithy_client_1._json,
        'id': smithy_client_1.expectInt32,
        'material': smithy_client_1.expectInt32,
        'modified_at': smithy_client_1.expectString,
        'modified_by_name': smithy_client_1.expectString,
        'plant': smithy_client_1.expectInt32,
        'tentative': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateOrderCommand = de_UpdateOrderCommand;
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
const de_CreatePlantCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreatePlantCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'address': smithy_client_1.expectString,
        'business': smithy_client_1.expectInt32,
        'customer_name': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'max_capacity': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'night_shift_from': smithy_client_1.expectString,
        'night_shift_to': smithy_client_1.expectString,
        'owner': smithy_client_1.expectInt32,
        'picture': smithy_client_1.expectString,
        'plant_type': smithy_client_1.expectString,
        'removed': smithy_client_1._json,
        'show_produced_materials': smithy_client_1.expectBoolean,
        'source_plant': smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreatePlantCommand = de_CreatePlantCommand;
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
const de_GetPlantByIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantByIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'address': smithy_client_1.expectString,
        'business': smithy_client_1.expectInt32,
        'customer_name': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'max_capacity': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'night_shift_from': smithy_client_1.expectString,
        'night_shift_to': smithy_client_1.expectString,
        'owner': smithy_client_1.expectInt32,
        'picture': smithy_client_1.expectString,
        'plant_type': smithy_client_1.expectString,
        'removed': smithy_client_1._json,
        'show_produced_materials': smithy_client_1.expectBoolean,
        'source_plant': smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantByIdCommand = de_GetPlantByIdCommand;
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
const de_GetPlantsListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantsListCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantsListCommand = de_GetPlantsListCommand;
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
const de_GetPlantSubscribersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPlantSubscribersCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'data': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPlantSubscribersCommand = de_GetPlantSubscribersCommand;
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
const de_UpdatePlantCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePlantCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'address': smithy_client_1.expectString,
        'business': smithy_client_1.expectInt32,
        'customer_name': smithy_client_1.expectString,
        'id': smithy_client_1.expectInt32,
        'max_capacity': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'night_shift_from': smithy_client_1.expectString,
        'night_shift_to': smithy_client_1.expectString,
        'owner': smithy_client_1.expectInt32,
        'picture': smithy_client_1.expectString,
        'plant_type': smithy_client_1.expectString,
        'removed': smithy_client_1._json,
        'show_produced_materials': smithy_client_1.expectBoolean,
        'source_plant': smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdatePlantCommand = de_UpdatePlantCommand;
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
const throwDefaultError = (0, smithy_client_1.withBaseException)(PlantDemandServiceServiceException_1.PlantDemandServiceServiceException);
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then(body => context.utf8Encoder(body));
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
