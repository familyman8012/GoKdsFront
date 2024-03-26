import {
  IAddItemReq,
  IMappingReq,
  IReceiptCompleteReq,
  IReceiptItemCompleteReq,
  IReceiptListReq,
  IRemoveItemReq,
  IRemoveItemRes,
} from 'ApiFarm/interface/receipt';
import AxiosUtil from '.';

export const fetchReceiptList = async (params?: IReceiptListReq) => {
  const response = await AxiosUtil.get(`/kds/v1/receipt_list/processing`, {
    params,
  });

  return response.data.data;
};

export const fetchMappingHandler = async (params: IMappingReq) => {
  const response = await AxiosUtil.post(
    `/kds/v1/receipt_item/manual_classification`,
    params,
  );

  return response.data.data;
};

//구성품 추가
export const fetchAddItem = async (params: IAddItemReq) => {
  const response = await AxiosUtil.post(`/kds/v1/receipt_item/option`, params);

  return response.data.data;
};

//구성품 삭제
export const fetchRemoveItem = async (params: IRemoveItemReq) => {
  const response = await AxiosUtil.delete('/kds/v1/receipt_item/option', {
    data: {...params},
  });

  return response.data.data;
};

//영수증 관리 - 항목 처리 상태 변경
export const fetchReceiptItemComplete = async (
  params: IReceiptItemCompleteReq,
) => {
  const response = await AxiosUtil.put(
    `/kds/v1/receipt_item/process_status`,
    params,
  );

  return response.data;
};

export const fetchReceiptComplete = async (params: IReceiptCompleteReq) => {
  const response = await AxiosUtil.put(
    `/kds/v1/receipt_list/process_status`,
    params,
  );

  return response.data;
};
