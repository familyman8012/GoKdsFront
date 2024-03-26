import {
  KdsContent,
  KdsPagingInfo,
  KdsWrap,
} from "ComponentsFarm/styles/common";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import "swiper/css";
import KdsHeader from "ComponentsFarm/KdsHeader";
import SwiperSlideItem from "ComponentsFarm/SwiperSlideItem";

import { useQuery } from "@tanstack/react-query";
import { fetchReceiptList } from "ApiFarm/receipt";
import { IReceiptListRes } from "ApiFarm/interface/receipt";
import { AxiosError } from "axios";
import { Mousewheel } from "swiper";
import GlobalModal from "ComponentsFarm/element/GlobalModal";
import { authStore, kdsSettingStore } from "MobxFarm/store";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { fetchMyStore } from "ApiFarm/auth";

function Home() {
  const history = useHistory();
  const [grid, setGrid] = useState(3);
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [filter, setFilter] = useState<number[]>([]);
  const [sorting, setSorting] = useState("processing");
  const soundEffectRef = useRef<HTMLAudioElement | null>(null);

  const soundEffectPlay = (src: string) => {
    if (soundEffectRef.current) {
      soundEffectRef.current.src = src;
      soundEffectRef.current.play();
    }
  };

  useQuery(["selected-store"], fetchMyStore, {
    enabled: authStore.isLoggedIn,
    onSuccess: (res) => {
      authStore.selected_store_idx = res.selected_store_idx;
      authStore.selected_store_name = res.selected_store_name;
    },
  });

  // 영수증 리스트
  const { data, refetch, isFetching, isError } = useQuery<
    IReceiptListRes,
    AxiosError
  >(
    ["receiptListData"],
    () =>
      fetchReceiptList({
        size: 99,
        filter_sale_type: filter.toString(),
        sort_method: sorting, //processing, waiting
      }),
    {
      //refetchInterval: 1000 * 60 * 15,
      refetchInterval: 1000 * 5,
      refetchIntervalInBackground: true,
    }
  );

  //셋팅 값 가져오기
  useEffect(() => {
    if (!authStore.isLoggedIn || isError) {
      return history.push("/");
    }
  }, [history, isError]);

  useEffect(() => {
    refetch();
  }, [filter, sorting]);

  return (
    <KdsWrap className={kdsSettingStore.dark ? "dark" : ""}>
      {data && (
        <KdsHeader
          receiptsData={data.list}
          swiperRef={swiperRef}
          slideIdx={slideIdx}
          grid={grid}
          setGrid={setGrid}
          filter={filter}
          setFilter={setFilter}
          setSorting={setSorting}
          soundEffectPlay={soundEffectPlay}
          refetch={refetch}
        />
      )}
      {data && (
        <KdsContent>
          {data?.list.length === 0 ? (
            <div className="noOrder">
              <div className="logo">
                <img src="/images/intro-logo.svg" alt="GOPIZZA" />
              </div>
            </div>
          ) : (
            <SwiperContainer
              className="mySwiper"
              onSwiper={setSwiperRef}
              cssMode={true}
              mousewheel={true}
              onSlideChange={() => setSlideIdx(Number(swiperRef?.realIndex))}
              modules={[Mousewheel]}
            >
              {new Array(Math.ceil(data.list.length / grid))
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <SwiperSlideItem
                      grid={grid}
                      receiptsData={data.list.slice(grid * i, grid * (i + 1))}
                      soundEffectPlay={soundEffectPlay}
                    />
                  </SwiperSlide>
                ))}
            </SwiperContainer>
          )}
          <KdsPagingInfo>
            {slideIdx + 1} /{" "}
            {data?.list.length === 0
              ? "1"
              : Math.ceil(data?.list.length / grid)}
          </KdsPagingInfo>
        </KdsContent>
      )}
      <GlobalModal soundEffectPlay={soundEffectPlay} />
      <audio src="/sound/next.mp3" id="myAudio" ref={soundEffectRef}>
        오디오 지원되지 않는 브라우저
      </audio>
    </KdsWrap>
  );
}

export default observer(Home);
