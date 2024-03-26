import {IRecallListRes} from 'ApiFarm/interface/recall';
import {fetchRecallList} from 'ApiFarm/recall';
import {AxiosError} from 'axios';
import KdsDatePicker from 'ComponentsFarm/element/KdsDatePicker';
import {RecallLayerWrap} from 'ComponentsFarm/styles/common';
import dayjs from 'dayjs';
import {useEffect, useMemo, useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';

function RecallLayer() {
  const [startDate, setStartDate] = useState(new Date());

  const searchDate = useMemo(
    () => dayjs(startDate).format('YYYY-MM-DD'),
    [startDate],
  );

  const {data, refetch, remove, fetchNextPage, hasNextPage} = useInfiniteQuery<
    IRecallListRes,
    AxiosError,
    IRecallListRes
  >(
    ['recallListData'],
    async ({pageParam = 1}) =>
      fetchRecallList({search_ordered_dt: searchDate, page: pageParam}),
    {
      getNextPageParam: lastPage =>
        lastPage.is_next_page ? lastPage.page + 1 : undefined,
    },
  );

  // 스크롤 이벤트 핸들러
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const {scrollTop, clientHeight, scrollHeight} = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    remove();
    refetch({refetchPage: (page, index) => index === 0});
  }, [startDate]);

  const completedTime = (seconds: number) => {
    let min = (Number(seconds) % 3600) / 60;
    let sec = seconds % 60;
    return `${Math.round(min)}분 ${sec}초`;
  };

  console.log('data123', data);

  return (
    <RecallLayerWrap className="layer_setting">
      <div className="head">
        <h2>History</h2>
        <KdsDatePicker startDate={startDate} setStartDate={setStartDate} />
      </div>

      <ul className="list_order" onScroll={handleScroll}>
        {data?.pages[0].list.length === 0 ? (
          <li className="nodata">히스토리 내역이 없습니다.</li>
        ) : (
          data?.pages.map(page =>
            page.list.map(el => (
              <li key={el.receipt_number}>
                <div className="orderid">
                  {el.receipt_number} -{' '}
                  {el.sale_type === 0
                    ? '내점'
                    : el.sale_type === 1
                    ? '포장'
                    : '배달'}
                </div>
                <div className="time">{el.ordered_at}</div>
                <div className="order_menu">
                  {el.product_list.map(item => (
                    <span key={el.receipt_number + item}>{item}</span>
                  ))}
                </div>
                <div className="completed">
                  {`경과 시간 ${completedTime(el.processing_time)}`}
                </div>
              </li>
            )),
          )
        )}
      </ul>
    </RecallLayerWrap>
  );
}

export default RecallLayer;
