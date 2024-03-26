import {LayerArea, ReceiptHandlerPopWrap} from 'ComponentsFarm/styles/common';
import useSelectModal from 'HookFarm/useSelectModal';
import {runInAction} from 'mobx';
import {receiptStore} from 'MobxFarm/store';

import React from 'react';

function ReceiptHandler() {
  const {hideModal} = useSelectModal();

  const onClose = () => {
    hideModal('pop');
    runInAction(() => {
      receiptStore.reset();
    });
  };

  return (
    <LayerArea>
      <ReceiptHandlerPopWrap>
        <h2>{receiptStore.receipt_item_name} 매핑</h2>
        <button className="btn_layer_close" onClick={onClose}>
          <span className="hiddenZone">닫기</span>
        </button>
        <dl>
          <dt>매핑 카테고리</dt>
          <dd>
            <select>
              <option>세트</option>
              <option>세트</option>
              <option>세트</option>
              <option>세트</option>
              <option>세트</option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>매핑 이름</dt>
          <dd className="box_inp">
            <input type="text" />
            <button className="btn_search">
              <span className="hiddenZone">검색</span>
            </button>
          </dd>
        </dl>
        <dl>
          <dt>매핑 이름</dt>
          <dd>
            <ul className="list_mapping">
              {/* <li className="nodata">
                <p className="txt">
                  판매 방식과 매핑 카테고리를 선택해 주세요.
                </p>
              </li> */}
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100023</span>
                  <span className="product_name">말년 킹 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">CGV 고르곤졸라 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">슈퍼 콤비네이션 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100023</span>
                  <span className="product_name">말년 킹 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">CGV 고르곤졸라 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">슈퍼 콤비네이션 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100023</span>
                  <span className="product_name">말년 킹 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">CGV 고르곤졸라 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">슈퍼 콤비네이션 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100023</span>
                  <span className="product_name">말년 킹 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">CGV 고르곤졸라 피자</span>
                </label>
              </li>
              <li>
                <label>
                  <span className="box_radio">
                    <input type="radio" name="mapping_radio" />
                  </span>
                  <span className="product_id">A0B0A100024</span>
                  <span className="product_name">슈퍼 콤비네이션 피자</span>
                </label>
              </li>
            </ul>
          </dd>
        </dl>
        <div className="box_btn">
          <button className="btn_cancle">취소</button>
          <button className="btn_submit">확인</button>
        </div>
      </ReceiptHandlerPopWrap>
    </LayerArea>
  );
}

export default ReceiptHandler;
