import {useQuery} from '@tanstack/react-query';
import {ISettingLoadRes} from 'ApiFarm/interface/setting';
import {fetchSettingLoad} from 'ApiFarm/setting';
import {AxiosError} from 'axios';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

function useSettingLoad(
  setGrid: Dispatch<SetStateAction<number>>,
  setSettingAlarm?: Dispatch<SetStateAction<number>>,
) {
  const [optionLoad, setOptionLoad] = useState(true);

  // setting
  const {data: settingLoadData} = useQuery<ISettingLoadRes, AxiosError>(
    ['settingLoad'],
    fetchSettingLoad,
  );

  // 첫 시작시에만, 초기값 가져오기
  useEffect(() => {
    if (settingLoadData && optionLoad) {
      setGrid(Number(settingLoadData.receipt_display_number));
      setSettingAlarm && setSettingAlarm(Number(settingLoadData.order_alarm));
      setOptionLoad(false);
    }
  }, [optionLoad, settingLoadData]);
}

export default useSettingLoad;
