import React, {useCallback, useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {IReceiptListItem} from 'ApiFarm/interface/receipt';
import {IcoSaleType, TxtSaleType} from 'ComponentsFarm/styles/common';
import useTimer from 'HookFarm/useTimer';
import {toast} from 'react-toastify';
import {kdsSettingStore} from 'MobxFarm/store';

dayjs.extend(duration);

function ReceiptHead({
  data,
  onClick,
}: {
  data: IReceiptListItem;
  onClick: () => void;
}) {
  const {showTime, bell} = useTimer(data);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (bell) {
      if (kdsSettingStore.alarm) {
        (audioRef.current as HTMLAudioElement).currentTime = 0;
        audioRef.current?.play();
      }
      toast.info('새로운 주문이 들어왔습니다.');
      toast.clearWaitingQueue();
    }
  }, [bell]);

  console.log(showTime.length);

  return (
    <div onClick={onClick} className={`info_head`}>
      {/* <IcoSaleType type={`type${data.sale_type}`} /> */}
      <TxtSaleType
        className={
          showTime.length > 7 || Number(showTime.substring(0, 2)) >= 30
            ? 'alert'
            : 30 > Number(showTime.substring(0, 2)) &&
              Number(showTime.substring(0, 2)) > 10
            ? 'warning'
            : 'safe'
        }>
        {data.sale_type === 0 ? (
          <span className="txt">내점</span>
        ) : data.sale_type === 1 ? (
          <span className="txt">포장</span>
        ) : (
          <span className="txt">배달</span>
        )}
      </TxtSaleType>
      <span className="recepit_id">NO. {data.receipt_number}</span>
      <span className="time">{showTime}</span>
      <audio src="/sound/bell.mp3" id="myAudio" ref={audioRef} loop={false}>
        오디오 지원되지 않는 브라우저
      </audio>
    </div>
  );
}

export default React.memo(ReceiptHead);
