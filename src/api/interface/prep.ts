export interface IPrepListRes {
  list: IPrepListItemRes[];
}

export interface IPrepListItemRes {
  product_idx: number;
  product_name: string;
  count: number;
}

export interface IPrepSubListReq {
  product_idx: number;
}

export interface IPrepSubListReqParam {
  current_page_number?: number;
  per_page_number?: number;
}

export interface IPrepSubListRes {
  info: IPrepListItemRes;
  list: {
    prep_management_idx: number;
    prep_name: string;
    created_date: string;
    use_status: number;
  }[];
}

export interface IPrepAddReq {
  prep_name: string;
  product_idx: number;
}

export interface IPrepAddRes extends IPrepAddReq {
  prep_management_idx: number;
}

export interface IPrepProcessItem {
  prep_management_idx: number;
  use_status: number;
}

export interface IPrepProcessReq {
  list: IPrepProcessItem[];
}

export interface IPrepProcessRes extends IPrepProcessReq {}
