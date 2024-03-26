// 매핑 카테고리 선택
export interface IProductCatReq {
  search_is_prep?: number;
}

export interface IProductCatRes {
  product_class_idx: number;
  class_name: string;
  is_prep: number;
}

// 매핑 카테고리 선택 후 해당 카테고리의 아이템들
export interface IProductItemReq extends IProductCatReq {
  search_product_class: number | null;
  search_product_name?: string;
}

export interface IProductItemRes
  extends Omit<IProductCatRes, 'product_class_idx'> {
  product_idx: number;
  product_name: number;
}
