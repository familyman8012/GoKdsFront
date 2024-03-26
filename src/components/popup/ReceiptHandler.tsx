import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {IProductCatRes, IProductItemRes} from 'ApiFarm/interface/product';
import {
  IAddItemReq,
  IAddItemRes,
  IMappingReq,
  IMappingRes,
} from 'ApiFarm/interface/receipt';
import {fetchProductCategory, fetchProductItem} from 'ApiFarm/product';
import {fetchAddItem, fetchMappingHandler} from 'ApiFarm/receipt';
import {AxiosError} from 'axios';
import {LayerArea, ReceiptHandlerPopWrap} from 'ComponentsFarm/styles/common';
import useSelectModal from 'HookFarm/useSelectModal';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';
import {receiptStore} from 'MobxFarm/store';

import React, {useCallback, useEffect, useState} from 'react';

function ReceiptHandler() {
  const queryClient = useQueryClient();
  const {hideModal} = useSelectModal();
  const [selectItem, setSelectItem] = useState<IProductItemRes | null>(null);

  const onClose = useCallback(() => {
    runInAction(() => {
      receiptStore.reset();
    });
    hideModal('pop');
  }, [receiptStore]);

  const handlerSelectCategory = useCallback(
    (selectCategoryIdx: number) => {
      receiptStore.product_class_idx = selectCategoryIdx;
      queryClient.invalidateQueries(['productIteme']);
    },
    [queryClient],
  );

  // 카테고리
  const {data, refetch, isFetching, isLoading} = useQuery<
    {list: IProductCatRes[]},
    AxiosError
  >(['productCategory'], () => fetchProductCategory());

  // 해당 카테고리 아이템
  const {data: MappingItemData} = useQuery<
    {list: IProductItemRes[]},
    AxiosError
  >(
    ['productIteme'],
    () =>
      fetchProductItem({
        search_product_class: receiptStore.product_class_idx,
      }),
    {
      enabled: receiptStore.product_class_idx !== null,
      cacheTime: 0,
      staleTime: 0,
    },
  );

  // 매핑 submit
  const mapping = useMutation(['mappingProcess'], (request: IMappingReq) =>
    fetchMappingHandler(request),
  );

  //구성품 추가 submit fetchAddItem
  const AddItem = useMutation(['addItemProcess'], (request: IAddItemReq) =>
    fetchAddItem(request),
  );

  const popSubmit = () => {
    receiptStore.reset();
    hideModal('pop');
    queryClient.invalidateQueries(['receiptListData']);
    queryClient.invalidateQueries(['summaryListData']);
  };

  const handlerMutate = useCallback(() => {
    receiptStore.hanlerType === 'mapping'
      ? //매핑
        mapping.mutate(
          {
            receipt_item_idx: receiptStore.receipt_item_idx,
            product_class_idx: receiptStore.product_class_idx,
            product_idx: Number(selectItem?.product_idx),
          },
          {
            onSuccess: data => {
              popSubmit();
            },
          },
        )
      : AddItem.mutate(
          {
            parent_receipt_item_idx: receiptStore.receipt_item_idx,
            product_idx: Number(selectItem?.product_idx),
          },
          {
            onSuccess: data => {
              popSubmit();
            },
          },
        );
  }, [AddItem, mapping, selectItem?.product_idx]);

  return (
    <ReceiptHandlerPopWrap>
      <h2>
        {receiptStore.receipt_item_name}{' '}
        {receiptStore.hanlerType === 'mapping' ? '매핑' : '구성품 추가'}
      </h2>
      {/* <button className="btn_layer_close" onClick={onClose}>
        <span className="hiddenZone">닫기</span>
      </button> */}
      <ul
        className={`list_category ${
          receiptStore.hanlerType !== 'mapping' ? 'add' : ''
        }`}>
        {data?.list.map(el =>
          el.product_class_idx === 1 &&
          receiptStore.hanlerType !== 'mapping' ? (
            <React.Fragment key={el.product_class_idx}></React.Fragment>
          ) : (
            <li
              key={el.product_class_idx}
              onClick={() => handlerSelectCategory(el.product_class_idx)}
              className={`${
                receiptStore.product_class_idx === el.product_class_idx
                  ? 'on'
                  : ''
              }`}>
              {el.class_name}
            </li>
          ),
        )}
      </ul>
      {MappingItemData && !isLoading ? (
        <ul className="list_item">
          {MappingItemData.list.map(el => (
            <li key={el.product_idx}>
              <button
                className={`${
                  selectItem?.product_idx === el.product_idx ? 'on' : ''
                }`}
                onClick={() => setSelectItem(el)}>
                <span>{el.product_name}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}

      <div className="box_btn">
        <button className="btn_cancle" onClick={onClose}>
          취소
        </button>
        <button
          className="btn_submit"
          onClick={handlerMutate}
          disabled={selectItem === null}>
          {receiptStore.hanlerType === 'mapping' ? '확인' : '추가'}
        </button>
      </div>
    </ReceiptHandlerPopWrap>
  );
}

export default observer(ReceiptHandler);
