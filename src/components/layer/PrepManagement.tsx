import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  IPrepAddReq,
  IPrepProcessItem,
  IPrepProcessReq,
  IPrepSubListRes,
} from 'ApiFarm/interface/prep';
import {fetchPrepAdd, fetchPrepProcess, fetchPrepSubList} from 'ApiFarm/prep';
import {AxiosError} from 'axios';
import dayjs from 'dayjs';
import useSelectModal from 'HookFarm/useSelectModal';
import {prepStore} from 'MobxFarm/store';
import React, {useCallback, useEffect, useState} from 'react';
import LayerSettingHead from '../element/LayerSettingHead';
import ModalPortal from '../element/Portal';
import LayerConfirm from '../popup/LayerConfirm';
import {PrepManagementWrap} from '../styles/common';

function PrepManagement({
  soundEffectPlay,
}: {
  soundEffectPlay: (src: string) => void;
}) {
  const queryClient = useQueryClient();

  const [showConfirmLayer, setShowConfirmLayer] = useState(false);

  const {showLayer, handleSelectLayer} = useSelectModal();

  const handlerBackBtn = () => {
    handleSelectLayer('PrepStatus');
  };

  //선택한 제품들의 Prep 리스트
  const {data: prepManagement, refetch} = useQuery<IPrepSubListRes, AxiosError>(
    ['prepManagement'],
    () => fetchPrepSubList(prepStore.product_idx),
  );

  const [usePrep, setUsePrep] = useState<IPrepProcessItem[]>([]);

  //추가
  const addPrep = useMutation(['addPrep'], (request: IPrepAddReq) =>
    fetchPrepAdd(request),
  );

  const handlerAddPrep = () => {
    soundEffectPlay('/sound/btn_menu.mp3');
    addPrep.mutate(
      {
        ...prepStore,
      },
      {
        onSuccess: data => {
          queryClient.invalidateQueries(['prepManagement']);
        },
      },
    );
  };

  //사용, 폐지
  const processPrep = useMutation(['processPrep'], (request: IPrepProcessReq) =>
    fetchPrepProcess(request),
  );

  //사용 할 아이템들 체킹
  const hanlerUsePrep = (type: string, prep_management_idx: number) => {
    type === 'use'
      ? setUsePrep([...usePrep, {prep_management_idx, use_status: 1}])
      : setUsePrep(
          usePrep.filter(el => el.prep_management_idx !== prep_management_idx),
        );
  };

  //사용하는지에 대한 확인 팝업창

  //폐지
  const handlerRemovePrep = useCallback(
    (prep_management_idx: number) => {
      processPrep.mutate(
        {
          list: [{prep_management_idx, use_status: 9}],
        },
        {
          onSuccess: data => {
            queryClient.invalidateQueries(['prepManagement']);
          },
          onError: err => {
            console.error(err);
          },
        },
      );
    },
    [processPrep, queryClient],
  );

  //프립 적용
  const handlerConfirmDone = useCallback(() => {
    processPrep.mutate(
      {
        list: [...usePrep],
      },
      {
        onSuccess: data => {
          queryClient.invalidateQueries(['prepManagement']);
          setUsePrep([]);
          setShowConfirmLayer(false);
        },
      },
    );
  }, [processPrep, queryClient, usePrep]);

  return (
    <>
      <PrepManagementWrap className="layer_setting">
        <LayerSettingHead
          name={'Prep 관리'}
          back={handlerBackBtn}
          soundEffectPlay={soundEffectPlay}
        />
        <div className="status">
          <span className="item_name">{prepManagement?.info.product_name}</span>
          <span className="number">
            총 {prepManagement?.info.count}개{' '}
            {usePrep.length !== 0 && `중 ${usePrep.length}개 사용`}
          </span>
          {usePrep.length !== 0 && (
            <button
              className="add_confirm on"
              onClick={() => {
                soundEffectPlay('/sound/btn_menu.mp3');
                setShowConfirmLayer(true);
              }}>
              <span className="txt">적용</span>
            </button>
          )}
        </div>
        <div className="control">
          <span className="title">Prep 추가 및 적용</span>
          <span className="btn_area">
            <button className="add_btn" onClick={handlerAddPrep}>
              <span className="txt">추가</span>
            </button>
          </span>
        </div>
        <ul className="list_prep">
          {prepManagement?.list.map(
            el =>
              el.use_status === 0 && (
                <li key={el.prep_management_idx}>
                  <span>
                    {dayjs(el.created_date).format(`YY-MM-DD  HH:mm`)} 제작
                  </span>
                  <span className="button_area">
                    <button
                      className={`btn_use ${
                        usePrep.some(
                          item =>
                            item.prep_management_idx === el.prep_management_idx,
                        )
                          ? 'on'
                          : ''
                      }`}
                      onClick={() => {
                        soundEffectPlay('/sound/btn_menu.mp3');
                        usePrep.every(
                          item =>
                            item.prep_management_idx !== el.prep_management_idx,
                        )
                          ? hanlerUsePrep('use', el.prep_management_idx)
                          : hanlerUsePrep('unUse', el.prep_management_idx);
                      }}>
                      사용
                    </button>
                    <button
                      className="btn_trash"
                      disabled={usePrep.some(
                        item =>
                          item.prep_management_idx === el.prep_management_idx,
                      )}
                      onClick={() => {
                        soundEffectPlay('/sound/btn_menu.mp3');
                        handlerRemovePrep(el.prep_management_idx);
                      }}>
                      폐지
                    </button>
                  </span>
                </li>
              ),
          )}
        </ul>
      </PrepManagementWrap>
      {showConfirmLayer && (
        <ModalPortal>
          <LayerConfirm
            title={'Prep 사용확인'}
            text={'사용체크한 Prep을 사용하시겠습니까?'}
            cancle={() => {
              soundEffectPlay('/sound/btn_menu.mp3');
              setShowConfirmLayer(false);
            }}
            confirm={() => {
              soundEffectPlay('/sound/btn_menu.mp3');
              handlerConfirmDone();
            }}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default PrepManagement;
