import { useQuery } from "@tanstack/react-query";
import { IPrepListRes } from "ApiFarm/interface/prep";
import { IProductCatRes } from "ApiFarm/interface/product";
import { fetchPrepList } from "ApiFarm/prep";
import { fetchProductCategory } from "ApiFarm/product";
import { AxiosError } from "axios";
import LayerSettingHead from "ComponentsFarm/element/LayerSettingHead";
import { PrepStatusWrap } from "ComponentsFarm/styles/common";
import useSelectModal from "HookFarm/useSelectModal";
import { prepStore } from "MobxFarm/store";
import React, { useCallback, useEffect, useState } from "react";

function Prep({ soundEffectPlay }: { soundEffectPlay: (src: string) => void }) {
  const [prepCurNav, setPrepCurNav] = useState(2);

  // 카테고리
  const { data: categoryData } = useQuery<
    { list: IProductCatRes[] },
    AxiosError
  >(["productCategory", "prep"], () =>
    fetchProductCategory({ search_is_prep: 1 })
  );

  //리스트
  const { data: listData, refetch } = useQuery<IPrepListRes, AxiosError>(
    ["prepCategoryList", prepCurNav],
    () => fetchPrepList(prepCurNav)
  );

  useEffect(() => {
    refetch();
  }, [prepCurNav]);

  const { showLayer, handleSelectLayer } = useSelectModal();

  const handlerShowManagement = useCallback((id: number, prepName: string) => {
    prepStore.product_idx = id;
    prepStore.prep_name = prepName;
    handleSelectLayer("PrepManagement");
  }, []);

  return (
    <PrepStatusWrap className="layer_setting">
      <LayerSettingHead name={"Prep 현황"} />
      <div className="top">
        <ul className="list_frip_menu">
          {categoryData?.list.map((el) => (
            <li
              key={el.product_class_idx}
              className={prepCurNav === el.product_class_idx ? "on" : ""}
              onClick={() => {
                setPrepCurNav(el.product_class_idx);
                soundEffectPlay("/sound/btn_menu.mp3");
              }}
            >
              {el.class_name}
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        <ul className="list_prep_items">
          {listData?.list.map((el) => (
            <li
              key={el.product_idx}
              onClick={() => {
                handlerShowManagement(el.product_idx, el.product_name);
                soundEffectPlay("/sound/btn_menu.mp3");
              }}
            >
              <span className="title">{el.product_name}</span>
              <span className="quanity">{el.count}개</span>
            </li>
          ))}
        </ul>
      </div>
    </PrepStatusWrap>
  );
}

export default Prep;
