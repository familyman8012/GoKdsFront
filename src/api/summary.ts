import AxiosUtil from '.';

export const fetchSummaryLoad = async () => {
  const response = await AxiosUtil.get(`/kds/v1/receipt_item/summary`);

  return response.data.data;
};
