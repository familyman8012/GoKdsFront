import React from "react";
import { SlidePageWrap } from "ComponentsFarm/styles/common";
import { IReceiptListItem } from "ApiFarm/interface/receipt";
import Receipt from "./Receipt";

interface ISwiperSlideItem {
  grid: number;
  receiptsData: IReceiptListItem[];
  soundEffectPlay: (src: string) => void;
}

function SwiperSlideItem({
  grid,
  receiptsData,
  soundEffectPlay,
}: ISwiperSlideItem) {
  return (
    <SlidePageWrap className={`SlidePage grid${grid}`}>
      {receiptsData.length !== 0 &&
        receiptsData.map((el) => (
          <Receipt
            key={el.receipt_idx}
            data={el}
            soundEffectPlay={soundEffectPlay}
          />
        ))}
    </SlidePageWrap>
  );
}

export default React.memo(SwiperSlideItem);
