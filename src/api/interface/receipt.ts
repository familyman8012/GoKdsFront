export interface IReceiptListReq {
  page?: number;
  size?: number;
  filter_sale_type?: string | null;
  sort_method?: string;
}

export interface IReceiptListRes {
  count: number;
  list: IReceiptListItem[];
}

export interface IReceiptListItem {
  receipt_idx: number;
  order_number: string;
  receipt_number: string;
  ordered_at: string;
  sale_type: number;
  order_memo: string;
  process_status: number;
  process_start_at: string;
  process_complete_at: string | null;
  item_list: IMainMenutem[];
}

export interface IMainMenutem extends Omit<ISubMenuItem, 'is_option_add'> {
  is_option_add: number;
  option_list: ISubMenuItem[];
}

export interface ISubMenuItem {
  receipt_item_idx: number;
  is_product_class: number;
  class_name: string | null;
  product_name: string;
  quantity: number;
  process_status: number;
  process_start_at: string | null;
  process_complete_at: string | null;
  is_option_add?: undefined;
}

// 매핑 처리 진행
export interface IMappingReq {
  receipt_item_idx: number | null;
  product_class_idx: number | null;
  product_idx: number | null;
}
export interface IMappingRes {
  receipt_item_idx: number;
}

// 구성품 추가
export interface IAddItemReq {
  parent_receipt_item_idx: number | null;
  product_idx: number;
}

export interface IAddItemRes {
  receipt_idx: number;
  parent_receipt_item_idx: number | null;
  receipt_item_idx: number;
}

// 구성품 삭제
export interface IRemoveItemReq {
  receipt_item_idx: number;
}

export interface IRemoveItemRes {
  receipt_item_idx: number;
}

//영수증 관리 - 항목 처리 상태 변경
export interface IReceiptItemCompleteReq {
  receipt_item_idx: number;
  process_status: number; // (2=완료, 8=생략)
}

export interface IReceiptItemCompleteRes {
  receipt_item_idx: number;
}

//영수증 관리 - 영수증 처리 상태 변경

export interface IReceiptCompleteReq {
  receipt_idx: number;
  process_status: number; // (2=완료, 8=생략)
}

export interface IReceiptCompleteRes {
  receipt_idx: number;
}
