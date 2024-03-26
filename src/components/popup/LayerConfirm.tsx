import React from 'react';
import {LayerConfirmWrap} from '../styles/common';

interface ILayerConfirm {
  title: string;
  text: string;
  cancle?: () => void;
  confirm?: () => void;
}

function LayerConfirm({title, text, cancle, confirm}: ILayerConfirm) {
  return (
    <LayerConfirmWrap>
      <div className="popup">
        <div className="area_txt">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="box_btn">
          <button className="btn_cancle" onClick={cancle && cancle}>
            취소
          </button>
          <button className="btn_confirm" onClick={confirm && confirm}>
            확인
          </button>
        </div>
      </div>
    </LayerConfirmWrap>
  );
}

export default LayerConfirm;
