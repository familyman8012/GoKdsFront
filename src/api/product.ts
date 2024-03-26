import AxiosUtil from '.';
import {IProductCatReq, IProductItemReq} from './interface/product';

export const fetchProductCategory = async (params?: IProductCatReq) => {
  const response = await AxiosUtil.get(`/kds/v1/product_class`, {
    params,
  });

  return response.data.data;
};

export const fetchProductItem = async (params?: IProductItemReq) => {
  const response = await AxiosUtil.get(`/kds/v1/product_list`, {
    params,
  });

  return response.data.data;
};
