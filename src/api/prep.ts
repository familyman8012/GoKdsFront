import AxiosUtil from '.';
import {
  IPrepAddReq,
  IPrepProcessReq,
  IPrepSubListReqParam,
} from './interface/prep';

export const fetchPrepList = async (idx: number) => {
  const response = await AxiosUtil.get(`/kds/v1/prep/list/${idx}`);

  return response.data.data;
};

export const fetchPrepSubList = async (
  idx: IPrepSubListReqParam,
  params?: IPrepSubListReqParam,
) => {
  const response = await AxiosUtil.get(`/kds/v1/prep/info/${idx}`, {
    params,
  });

  return response.data.data;
};

export const fetchPrepAdd = async (params: IPrepAddReq) => {
  const response = await AxiosUtil.post(`/kds/v1/prep/info`, params);

  return response.data.data;
};

export const fetchPrepProcess = async (params: IPrepProcessReq) => {
  const response = await AxiosUtil.put(`/kds/v1/prep/info`, params);

  return response.data.data;
};
