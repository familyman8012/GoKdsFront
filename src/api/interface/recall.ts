export interface IRecallListReq {
  search_ordered_dt?: string;
  page?: number;
  size?: number;
}

export interface IRecallItem {
  receipt_idx: number;
  order_number: string;
  receipt_number: string;
  ordered_at: string;
  sale_type: number;
  process_start_at: string;
  process_complete_at: string;
  processing_time: number;
  product_list: string[];
}

export interface IRecallListRes {
  count: number;
  page: number;
  is_next_page: boolean;
  list: IRecallItem[];
}
