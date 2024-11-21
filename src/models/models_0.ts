// smithy-typescript generated code
/**
 * @public
 */
export interface BusinessMember {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: boolean;
  is_active?: boolean;
}

/**
 * @public
 */
export interface Business {
  id: number | undefined;
  name: string | undefined;
  removed?: string;
  members?: (BusinessMember)[];
}

/**
 * @public
 */
export interface GetBusinessesOutput {
  data: (Business)[] | undefined;
}

/**
 * @public
 */
export interface Supplier {
  email: string | undefined;
  id: number | undefined;
  name: string | undefined;
  address: string | undefined;
  business: number | undefined;
}

/**
 * @public
 */
export interface GetSuppliersOutput {
  data: (Supplier)[] | undefined;
}

/**
 * @public
 */
export interface LoginInput {
  username: string | undefined;
  password: string | undefined;
}

/**
 * @public
 */
export interface LoginOutput {
  token: string | undefined;
}

/**
 * @public
 */
export interface ExtraFieldData {
  key?: string;
  value?: string;
  type?: string;
  visible_to_customer?: boolean;
}

/**
 * @public
 */
export interface CreateCustomerPayload {
  name: string | undefined;
  plant: number | undefined;
  extra_fields_data: (ExtraFieldData)[] | undefined;
}

/**
 * @public
 */
export interface CreatePlantCustomerInput {
  plantId: string | undefined;
  body: CreateCustomerPayload | undefined;
}

/**
 * @public
 */
export interface Customer {
  id: number | undefined;
  name: string | undefined;
  plant: number | undefined;
  extra_fields_data: (ExtraFieldData)[] | undefined;
  removed?: string;
}

/**
 * @public
 */
export interface DeletePlantCustomerInput {
  plantId: string | undefined;
  customerId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantCustomerByIdInput {
  plantId: string | undefined;
  customerId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantCustomersInput {
  plantId: string | undefined;
  name?: string;
  include_removed?: boolean;
}

/**
 * @public
 */
export interface GetPlantCustomersOutput {
  data: (Customer)[] | undefined;
}

/**
 * @public
 */
export interface ReplacePlantCustomerPayload {
  customer_to_replace_id: number | undefined;
  customer_to_use_id: number | undefined;
}

/**
 * @public
 */
export interface ReplacePlantCustomerInput {
  plantId: string | undefined;
  body: ReplacePlantCustomerPayload | undefined;
}

/**
 * @public
 */
export interface ReplacePlantCustomerOutput {
  result?: string;
}

/**
 * @public
 */
export interface UpdateCustomerPayload {
  name: string | undefined;
  extra_fields_data?: (ExtraFieldData)[];
}

/**
 * @public
 */
export interface UpdatePlantCustomerInput {
  plantId: string | undefined;
  customerId: string | undefined;
  body: UpdateCustomerPayload | undefined;
}

/**
 * @public
 */
export interface CreatePlantMaterialPayload {
  name: string | undefined;
  description?: string;
  supplier?: number;
  supplier_product_name?: string;
  min_inventory_amount?: string;
  max_inventory_amount?: string;
  system_color: string | undefined;
  is_output_material?: boolean;
  plant?: string;
}

/**
 * @public
 */
export interface CreatePlantMaterialInput {
  plantId: string | undefined;
  body: CreatePlantMaterialPayload | undefined;
}

/**
 * @public
 */
export interface Material {
  id: number | undefined;
  name: string | undefined;
  description?: string;
  removed: string | undefined;
  system_color?: string;
  visible_to_customer?: boolean;
  active?: boolean;
  is_output_material?: boolean;
  plant?: number;
  supplier_id?: number;
  supplier_name?: string;
  supplier_product_name?: string;
  min_inventory_amount?: number;
  max_inventory_amount?: number;
  current_inventory_amount?: number;
  current_inventory_updated_on?: string;
  mix_designs?: (number)[];
}

/**
 * @public
 */
export interface DeletePlantMaterialInput {
  plantId: string | undefined;
  materialId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantMaterialByIdInput {
  plantId: string | undefined;
  materialId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantMaterialsInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantMaterialsOutput {
  data: (Material)[] | undefined;
}

/**
 * @public
 */
export interface UpdatePlantMaterialPayload {
  name?: string;
  description?: string;
  supplier?: number;
  supplier_product_name?: string;
  min_inventory_amount?: string;
  max_inventory_amount?: string;
  system_color?: string;
  is_output_material?: boolean;
  plant?: string;
}

/**
 * @public
 */
export interface UpdatePlantMaterialInput {
  plantId: string | undefined;
  materialId: string | undefined;
  body: UpdatePlantMaterialPayload | undefined;
}

/**
 * @public
 */
export interface MixDesignComponent {
  id?: string;
  material: number | undefined;
  proportion: number | undefined;
}

/**
 * @public
 */
export interface CreateMixDesignPayload {
  expiration_date?: string;
  specification_basis?: string;
  verified?: boolean;
  output_material: number | undefined;
  components: (MixDesignComponent)[] | undefined;
}

/**
 * @public
 */
export interface CreateMixDesignInput {
  plantId: string | undefined;
  body: CreateMixDesignPayload | undefined;
}

/**
 * @public
 */
export interface MixDesign {
  id: number | undefined;
  expiration_date: string | undefined;
  specification_basis: string | undefined;
  verified: boolean | undefined;
  removed: string | undefined;
  output_material: number | undefined;
  plant: number | undefined;
  components: (MixDesignComponent)[] | undefined;
}

/**
 * @public
 */
export interface DeleteMixDesignInput {
  plantId: string | undefined;
  mixDesignId: string | undefined;
}

/**
 * @public
 */
export interface GetMixDesignByIdInput {
  plantId: string | undefined;
  mixDesignId: string | undefined;
}

/**
 * @public
 */
export interface GetMixDesignsInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface GetMixDesignsOutput {
  id: number | undefined;
  name: string | undefined;
  expiration_date?: string;
  removed?: string;
  specification_basis?: string;
  verified?: boolean;
  output_material: number | undefined;
  plant: number | undefined;
}

/**
 * @public
 */
export interface UpdateMixDesignPayload {
  id?: string;
  expiration_date?: string;
  specification_basis?: string;
  verified?: boolean;
  removed?: string;
  output_material?: number;
  components: (MixDesignComponent)[] | undefined;
}

/**
 * @public
 */
export interface UpdateMixDesignInput {
  plantId: string | undefined;
  mixDesignId: string | undefined;
  body: UpdateMixDesignPayload | undefined;
}

/**
 * @public
 */
export interface NoteDatePayload {
  id?: number;
  date?: string;
}

/**
 * @public
 * @enum
 */
export const NoteType = {
  CUSTOM: "custom",
  INSPECTION: "inspection",
  PLANTCLOSURE: "plant_closure",
} as const
/**
 * @public
 */
export type NoteType = typeof NoteType[keyof typeof NoteType]

/**
 * @public
 */
export interface CreateUpdateNotePayload {
  calendar_type: string | undefined;
  type: NoteType | undefined;
  description?: string;
  title: string | undefined;
  dates: (NoteDatePayload)[] | undefined;
  visible_to_customer?: boolean;
  notify_team?: boolean;
}

/**
 * @public
 */
export interface CreateNoteInput {
  plant: string | undefined;
  body: CreateUpdateNotePayload | undefined;
}

/**
 * @public
 */
export interface NoteDate {
  id?: number;
  date?: string;
  plant?: number;
}

/**
 * @public
 */
export interface CreateNoteOutput {
  id?: number;
  calendar_type?: string;
  type?: string;
  description?: string;
  dates?: (NoteDate)[];
  plant?: number;
  icon?: string;
  visible_to_customer?: boolean;
}

/**
 * @public
 */
export interface DeleteNoteInput {
  plantId: string | undefined;
  noteId: string | undefined;
}

/**
 * @public
 */
export interface UpdateNoteInput {
  plantId: string | undefined;
  noteId: string | undefined;
  body?: CreateUpdateNotePayload;
}

/**
 * @public
 * @enum
 */
export const OrderFieldsType = {
  CHECKBOX: "Checkbox",
  DATE: "Date",
  TEXT: "Text",
  TEXTAREA: "TextArea",
  TIME: "Time",
} as const
/**
 * @public
 */
export type OrderFieldsType = typeof OrderFieldsType[keyof typeof OrderFieldsType]

/**
 * @public
 */
export interface CreateOrderFieldPayload {
  name: string | undefined;
  field_type: OrderFieldsType | undefined;
  is_required: boolean | undefined;
  visible_to_customer: boolean | undefined;
}

/**
 * @public
 */
export interface CreateOrderDateFieldInput {
  plantId: string | undefined;
  body: CreateOrderFieldPayload | undefined;
}

/**
 * @public
 */
export interface OrderField {
  id: number | undefined;
  name: string | undefined;
  field_type: OrderFieldsType | undefined;
  plant: number | undefined;
  is_required: boolean | undefined;
  visible_to_customer: boolean | undefined;
}

/**
 * @public
 */
export interface CreateOrderFieldInput {
  plantId: string | undefined;
  body: CreateOrderFieldPayload | undefined;
}

/**
 * @public
 */
export interface DeleteOrderDateFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOrderFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderDateFieldsInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderDateFieldsOutput {
  data: (OrderField)[] | undefined;
}

/**
 * @public
 */
export interface GetOrderFieldsInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderFieldsOutput {
  data: (OrderField)[] | undefined;
}

/**
 * @public
 */
export interface RenameOrderFieldPayload {
  field_name?: string;
}

/**
 * @public
 */
export interface RenameOrderDateFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
  body?: RenameOrderFieldPayload;
}

/**
 * @public
 */
export interface RenameOrderFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
  body?: RenameOrderFieldPayload;
}

/**
 * @public
 */
export interface UpdateOrderFieldPayload {
  name?: string;
  field_type?: OrderFieldsType;
  is_required?: boolean;
  visible_to_customer?: boolean;
}

/**
 * @public
 */
export interface UpdateOrderDateFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
  body: UpdateOrderFieldPayload | undefined;
}

/**
 * @public
 */
export interface UpdateOrderFieldInput {
  plantId: string | undefined;
  orderFieldId: string | undefined;
  body: UpdateOrderFieldPayload | undefined;
}

/**
 * @public
 */
export interface OrderDate {
  quantity: string | undefined;
  delivery_on: string | undefined;
  load_time?: string;
  night_shift?: boolean;
  extra_fields_data?: (ExtraFieldData)[];
}

/**
 * @public
 */
export interface CreateOrderPayload {
  customer: string | undefined;
  material: number | undefined;
  dates: (OrderDate)[] | undefined;
  extra_fields_data: (ExtraFieldData)[] | undefined;
  tentative?: boolean;
  notify_team?: boolean;
}

/**
 * @public
 */
export interface CreateOrderInput {
  plantId: string | undefined;
  body?: CreateOrderPayload;
}

/**
 * @public
 */
export interface OrderDateServer {
  id?: number;
  delivery_on?: string;
  extra_fields_data?: (ExtraFieldData)[];
  removed?: string;
  quantity?: number;
  created_at?: string;
  modified_at?: string;
  nightshift?: boolean;
  load_time?: string;
  created_by?: number;
  modified_by?: number;
  order?: number;
  plant?: number;
}

/**
 * @public
 */
export interface OrderFeedRecord {
  id?: number;
  item_id?: number;
  feed_item?: number;
  field_name?: string;
  message?: string;
  new_value?: string;
  old_value?: string;
}

/**
 * @public
 */
export interface OrderFeedMessage {
  message?: string;
  template?: string;
  type?: string;
  order_request?: number;
}

/**
 * @public
 */
export interface OrderFeed {
  id?: number;
  order_id?: number;
  comment?: string;
  created_at?: string;
  created_by?: string;
  deleted?: boolean;
  messages?: (OrderFeedMessage)[];
  feed_records?: (OrderFeedRecord)[];
}

/**
 * @public
 */
export interface Order {
  id: number | undefined;
  customer: string | undefined;
  material: number | undefined;
  dates: (OrderDateServer)[] | undefined;
  extra_fields_data: (ExtraFieldData)[] | undefined;
  feed: (OrderFeed)[] | undefined;
  plant: number | undefined;
  tentative: boolean | undefined;
  created_at: string | undefined;
  created_by: number | undefined;
  created_by_name: string | undefined;
  modified_at: string | undefined;
  modified_by_name: string | undefined;
}

/**
 * @public
 */
export interface DeleteOrderInput {
  plantId: string | undefined;
  orderId: string | undefined;
}

/**
 * @public
 */
export interface GetOrderByIdInput {
  plantId: string | undefined;
  orderId: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrderPayload {
  customer: string | undefined;
  material: number | undefined;
  dates: (OrderDate)[] | undefined;
  extra_fields_data?: (ExtraFieldData)[];
  tentative?: boolean;
  notify_team?: boolean;
}

/**
 * @public
 */
export interface UpdateOrderInput {
  plantId: string | undefined;
  orderId: string | undefined;
  body: UpdateOrderPayload | undefined;
}

/**
 * @public
 * @enum
 */
export const PlantType = {
  AGGREGATE: "Aggregate",
  CUSTOMER: "Customer",
  MIX: "Mix",
  PAVING_SCHEDULE: "PavingSchedule",
} as const
/**
 * @public
 */
export type PlantType = typeof PlantType[keyof typeof PlantType]

/**
 * @public
 */
export interface CreatePlantInput {
  name: string | undefined;
  address: string | undefined;
  plant_type: PlantType | undefined;
  max_capacity: number | undefined;
  night_shift_from: string | undefined;
  night_shift_to: string | undefined;
  phone_number?: string;
}

/**
 * @public
 */
export interface Removed {
}

/**
 * @public
 */
export interface Plant {
  id?: number;
  name?: string;
  address?: string;
  picture?: string;
  max_capacity?: number;
  plant_type?: PlantType;
  night_shift_from?: string;
  night_shift_to?: string;
  business?: number;
  owner?: number;
  removed?: Removed;
  source_plant?: number;
  customer_name?: string;
  show_produced_materials?: boolean;
}

/**
 * @public
 */
export interface GetPlantByIdInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface GetPlantsListInput {
  permissions?: string;
  show_inactive?: boolean;
}

/**
 * @public
 */
export interface GetPlantsListOutput {
  data: (Plant)[] | undefined;
}

/**
 * @public
 */
export interface GetPlantSubscribersInput {
  plantId: string | undefined;
}

/**
 * @public
 */
export interface Subscriber {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  plant: number | undefined;
}

/**
 * @public
 */
export interface GetPlantSubscribersOutput {
  data: (Subscriber)[] | undefined;
}

/**
 * @public
 */
export interface UpdatePlantInput {
  plantId: string | undefined;
  body: Plant | undefined;
}
