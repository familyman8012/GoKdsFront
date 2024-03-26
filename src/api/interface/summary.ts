export interface ISummaryItem {
  product_name: string;
  waiting_count: number;
  processing_count: number;
  incomplete_count: number;
}

export interface ISummaryRes {
  mapping_list: ISummaryItem[];
  unmapping_list: ISummaryItem[];
}
