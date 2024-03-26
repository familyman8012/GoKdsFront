import {useQuery} from '@tanstack/react-query';
import {ISummaryRes} from 'ApiFarm/interface/summary';
import {fetchSummaryLoad} from 'ApiFarm/summary';
import {AxiosError} from 'axios';
import LayerSettingHead from 'ComponentsFarm/element/LayerSettingHead';
import {SummeryLayerWrap} from 'ComponentsFarm/styles/common';
import useSelectModal from 'HookFarm/useSelectModal';

function SummeryLayer() {
  // 영수증 리스트
  const {data, refetch, isFetching} = useQuery<ISummaryRes, AxiosError>(
    ['summaryListData'],
    () => fetchSummaryLoad(),
    {
      refetchInterval: 1000 * 5,
      refetchIntervalInBackground: true,
    },
  );

  return (
    <SummeryLayerWrap className="layer_setting">
      <LayerSettingHead name={'Summary'} />
      <table className="list_summary">
        <thead>
          <tr>
            <th>메뉴명</th>

            <th>대기 중</th>
            <th>처리 중</th>
          </tr>
        </thead>
        <tbody>
          {data?.mapping_list.map(el => (
            <tr key={el.product_name}>
              <td className={el.processing_count !== 0 ? 'ing' : ''}>
                {el.product_name}
              </td>
              <td>{el.waiting_count}</td>
              <td>{el.processing_count}</td>
            </tr>
          ))}
          {data?.unmapping_list.map(el => (
            <tr className="un" key={el.product_name}>
              <td>{el.product_name}</td>
              <td>{el.waiting_count}</td>
              <td>{el.processing_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SummeryLayerWrap>
  );
}

export default SummeryLayer;
