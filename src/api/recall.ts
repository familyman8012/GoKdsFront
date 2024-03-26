import {IRecallListReq} from 'ApiFarm/interface/recall';
import AxiosUtil from '.';

export const fetchRecallList = async (params?: IRecallListReq) => {
  const response = await AxiosUtil.get(`/kds/v1/receipt_list/history`, {
    params,
  });

  return response.data.data;
};
