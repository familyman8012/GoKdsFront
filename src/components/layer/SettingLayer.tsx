import { useMutation } from "@tanstack/react-query";
import { ISettingSaveReq } from "ApiFarm/interface/setting";
import { fetchSettingSave } from "ApiFarm/setting";
import LayerSettingHead from "ComponentsFarm/element/LayerSettingHead";
import { SettingLayerWrap } from "ComponentsFarm/styles/common";
import useSettingLoad from "HookFarm/useSettingLoad";
import React, { useCallback, useEffect, useState } from "react";
import { authStore, kdsSettingStore } from "MobxFarm/store";
import { runInAction } from "mobx";
import { observer } from "mobx-react";

function SettingLayer() {
  // const [settingAlarm, setSettingAlarm] = useState(1);
  // const [grid, setGrid] = useState(8);

  //셋팅 값 가져오기
  // useSettingLoad(setGrid, setSettingAlarm);

  // const handlerAlarm = useCallback((checked: boolean) => {
  //   setSettingAlarm(checked ? 1 : 2);
  // }, []);

  // const hanlerGrid = useCallback((type: string) => {
  //   if (type === 'add') {
  //     setGrid(prev => prev * 2);
  //   } else {
  //     setGrid(prev => prev / 2);
  //   }
  // }, []);

  // const mutation = useMutation(['settingSave'], (request: any) =>
  //   fetchSettingSave(request),
  // );

  // const handlerMutate = () => {
  //   mutation.mutate({
  //     receipt_display_number: grid,
  //     order_alarm: settingAlarm,
  //   });
  // };

  // useEffect(() => {
  //   handlerMutate();
  // }, [grid, settingAlarm]);

  const { user_name, user_email } = authStore?.user_info ?? {};

  const handlerDark = useCallback(() => {
    runInAction(() =>
      kdsSettingStore.dark
        ? (kdsSettingStore.dark = false)
        : (kdsSettingStore.dark = true)
    );
  }, []);

  return (
    <SettingLayerWrap className="layer_setting">
      <div className="box_profile">
        <div className="info">
          <p className="name">{user_name}</p>
          <p className="store_name">{authStore?.selected_store_name}</p>
        </div>
        <p className="email">{user_email}</p>
      </div>
      {/* <div>
        <label className="toggle" htmlFor="myToggle">
          <span className="txt">Dark Mode : </span>
          <input
            className="toggle__input"
            name=""
            type="checkbox"
            id="myToggle"
            onChange={handlerDark}
            checked={kdsSettingStore.dark ? true : false}
          />
          <div className="toggle__fill"></div>
        </label>
      </div> */}
      <div className="box_logout">
        <button onClick={() => authStore.logOut()}>로그아웃</button>
      </div>
      {/* <LayerSettingHead name={'Setting'} />
      <ul>
        <li>
          <span>새로운 주문시 알람</span>
          <label className="toggle" htmlFor="myToggle">
            <input
              className="toggle__input"
              name=""
              type="checkbox"
              id="myToggle"
              onChange={e => handlerAlarm(e.target.checked)}
              checked={settingAlarm === 1 ? true : false}
            />
            <div className="toggle__fill"></div>
          </label>
        </li>
        <li>
          <span>페이지 당 티켓 수 초기 값</span>
          <span className="area_grid_setting">
            {grid > 4 && (
              <button className="btn_prev" onClick={() => hanlerGrid('minus')}>
                <span className="hiddenZoneV">이전</span>
              </button>
            )}
            <span className="number">{grid}</span>
            {16 > grid && (
              <button className="btn_next" onClick={() => hanlerGrid('add')}>
                <span className="hiddenZoneV">다음</span>
              </button>
            )}
          </span>
        </li>
      </ul> */}
    </SettingLayerWrap>
  );
}

export default observer(SettingLayer);
