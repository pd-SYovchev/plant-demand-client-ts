"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantType = exports.OrderFieldType = exports.NoteType = void 0;
exports.NoteType = {
    CUSTOM: "custom",
    INSPECTION: "inspection",
    OVER_CAPACITY: "over_capacity",
    PLANTCLOSURE: "plant_closure",
};
exports.OrderFieldType = {
    CHECKBOX: "Checkbox",
    DATE: "Date",
    HIDDEN: "Hidden",
    TEXT: "Text",
    TEXTAREA: "TextArea",
    TIME: "Time",
};
exports.PlantType = {
    AGGREGATE: "Aggregate",
    CUSTOMER: "Customer",
    MIX: "Mix",
    PAVING_SCHEDULE: "PavingSchedule",
};
