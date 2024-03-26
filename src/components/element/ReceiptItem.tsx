import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  IMainMenutem,
  IReceiptItemCompleteReq,
  IReceiptItemCompleteRes,
  IReceiptListRes,
  IRemoveItemReq,
  ISubMenuItem,
} from 'ApiFarm/interface/receipt';
import {fetchReceiptItemComplete, fetchRemoveItem} from 'ApiFarm/receipt';
import {AxiosError} from 'axios';
import useSelectModal from 'HookFarm/useSelectModal';
import {receiptStore} from 'MobxFarm/store';
import React, {useCallback} from 'react';
import Spinner from './Spinner';

interface IReceiptItem {
  className: string;
  data: IMainMenutem | ISubMenuItem;
  canAdd?: number;
  submitFunc: () => void;
  soundEffectPlay: (src: string) => void;
}

function ReceiptItem({
  className,
  data,
  canAdd,
  submitFunc,
  soundEffectPlay,
}: IReceiptItem) {
  const queryClient = useQueryClient();
  const {showLayer, handleSelectLayer} = useSelectModal();

  // 구성품 or Mapping
  const handlerAddMappingPop = (handlerType: string, product_class_idx = 1) => {
    receiptStore.hanlerType = handlerType;
    receiptStore.receipt_item_idx = data.receipt_item_idx;
    receiptStore.receipt_item_name = data.product_name;
    receiptStore.product_class_idx = product_class_idx;
    handleSelectLayer('ReceiptHandler', 'pop');
  };

  // 구성품 삭제
  const removeItem = useMutation(
    ['removeItemProcess'],
    (request: IRemoveItemReq) => fetchRemoveItem(request),
  );

  //영수증 관리 - 항목 처리 상태 변경
  // const receiptItemComplete = useMutation<
  //   IReceiptItemCompleteRes,
  //   AxiosError,
  //   IReceiptItemCompleteReq
  // >(['receiptItemComplete'], request => fetchReceiptItemComplete(request));

  const receiptItemComplete = useMutation<
    IReceiptItemCompleteRes,
    AxiosError,
    IReceiptItemCompleteReq
  >(['receiptItemComplete'], request => fetchReceiptItemComplete(request), {
    onMutate: async (newData: IReceiptItemCompleteReq) => {
      await queryClient.cancelQueries(['receiptListData']); // 현재 진행 중인 쿼리를 취소

      // Optimistic updates를 위해 캐시에 있는 데이터 백업
      const previousData = queryClient.getQueryData<IReceiptListRes>([
        'receiptListData',
      ]);

      if (previousData) {
        // 영수증 항목 데이터를 찾아 변경하고 캐시에 다시 저장
        const updatedData = {
          ...previousData,
          list: previousData.list.map(receipt => ({
            ...receipt,
            item_list: receipt.item_list.map(item => {
              if (item.receipt_item_idx === newData.receipt_item_idx) {
                return {...item, process_status: newData.process_status};
              }
              // 옵션 리스트 항목에 대한 처리 추가
              return {
                ...item,
                option_list: item.option_list.map(option => {
                  if (option.receipt_item_idx === newData.receipt_item_idx) {
                    return {...option, process_status: newData.process_status};
                  }
                  return option;
                }),
              };
            }),
          })),
        };
        queryClient.setQueryData(['receiptListData'], updatedData);
      }

      return {previousData}; // 백업한 데이터를 롤백에 사용
    },
    onError: (error, newData, context: any) => {
      // 롤백 처리
      queryClient.setQueryData(['receiptListData'], context.previousData);
    },
    onSettled: () => {
      // 요청이 완료되면 캐시 데이터를 다시 불러옴
      queryClient.invalidateQueries(['receiptListData']);
    },
  });

  //구성품 삭제
  const handlerRemoveItem = useCallback((id: number) => {
    removeItem.mutate(
      {
        receipt_item_idx: id,
      },
      {
        onSuccess: data => {
          submitFunc();
        },
      },
    );
  }, []);

  //영수증 관리 - 항목 처리 상태 변경
  const ItemComplete = useCallback((status: number) => {
    className === 'depth1_item'
      ? soundEffectPlay('/sound/click_item.mp3')
      : soundEffectPlay('/sound/click_subitem.mp3');
    receiptItemComplete.mutate(
      {
        receipt_item_idx: data.receipt_item_idx,
        process_status: status,
      },
      {
        onSuccess: data => {
          submitFunc();
        },
      },
    );
  }, []);

  // 제품명 클릭시 : [미분류 & 대기상태] : mapping, [대기상태거나 진행중] : 처리완료, [skip, 처리완료시] : 대기상태
  const handlerProduct = useCallback(() => {
    data.is_product_class === 0 && data.process_status === 0
      ? handlerAddMappingPop('mapping')
      : data.process_status === 0 || data.process_status === 1
      ? ItemComplete(2)
      : (data.process_status === 2 || data.process_status === 8) &&
        ItemComplete(0);
  }, [data.is_product_class, data.process_status]);

  // 구성품 추가, 삭제
  const handlerAddRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      className === 'depth1_item'
        ? handlerAddMappingPop('Add', 2)
        : handlerRemoveItem(data.receipt_item_idx);
    },
    [className],
  );

  // Skip Toggle
  const handlerSkip = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      data.process_status === 2 || data.process_status === 8
        ? ItemComplete(0)
        : (data.process_status === 0 || data.process_status === 1) &&
          ItemComplete(2);
    },
    [data.process_status],
  );

  return (
    <div className={`ripple ${className}`} onClick={handlerProduct}>
      {className === 'depth1_item' && (
        <span className="quanity">
          <span className="x">x</span>
          <span className="number">{data.quantity}</span>
        </span>
      )}

      <span className="product_name">
        {data.process_status === 1 && <Spinner />}
        <span className="txt">{data.product_name}</span>
      </span>
      <div className="btn_box">
        <button
          className="btn_mapping"
          onClick={() => handlerAddMappingPop('mapping')}>
          <span className="hiddenZone">매핑</span>
        </button>
        <button className="btn_skip" onClick={handlerSkip}>
          <span className="hiddenZone">skip</span>
        </button>
      </div>
      {canAdd === 1 && (
        <button className="btn_add_item" onClick={handlerAddRemove}>
          <span className="hiddenZone">구성품 추가/삭제</span>
        </button>
      )}
    </div>
  );
}

export default ReceiptItem;
