import {ISettingSaveRes} from 'ApiFarm/interface/setting';
import AxiosUtil from '.';

export const fetchSettingLoad = async () => {
  const response = await AxiosUtil.get(`/kds/v1/app_setting`);

  return response.data.data;
};

export const fetchSettingSave = async (params: ISettingSaveRes) => {
  const response = await AxiosUtil.post(`/kds/v1/app_setting`, params);

  return response.data.data;
};
