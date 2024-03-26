import {Dispatch, SetStateAction, useState} from 'react';
import {Swiper} from 'swiper/types';
import {
  BtnHeadOpen,
  Dimm,
  FilterLayer,
  Header,
  HeaderWrap,
} from './styles/common';
import CheckBox from './element/CheckBox';
import {Minus, Plus} from 'emotion-icons/fa-solid';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {IReceiptListItem, IReceiptListRes} from 'ApiFarm/interface/receipt';
import useSelectModal from 'HookFarm/useSelectModal';
import {observer} from 'mobx-react';

const filterCondition = [
  {id: 0, checkName: '내점'},
  {id: 1, checkName: '포장'},
  {id: 2, checkName: '배달'},
];

interface IKdsHeader {
  receiptsData: IReceiptListItem[];
  swiperRef: Swiper | null;
  slideIdx: number;
  grid: number;
  setGrid: Dispatch<SetStateAction<number>>;
  filter: number[];
  setFilter: Dispatch<SetStateAction<number[]>>;
  setSorting: Dispatch<SetStateAction<string>>;
  soundEffectPlay: (src: string) => void;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<IReceiptListRes, AxiosError<unknown, any>>>;
}

function KdsHeader({
  receiptsData,
  swiperRef,
  slideIdx,
  grid,
  setGrid,
  filter,
  setFilter,
  soundEffectPlay,
}: IKdsHeader) {
  const {showLayer, handleSelectLayer} = useSelectModal();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const {hideModal} = useSelectModal();

  const handlerMenu = (selectLayer: string) => {
    if (selectLayer === 'filterLayer') {
      hideModal();
    }
    handleSelectLayer(selectLayer);
    soundEffectPlay('/sound/btn_menu.mp3');
  };

  const handlerHeadOpen = () => {
    if (isHeaderOpen) {
      hideModal();
      handleSelectLayer('');
    }
    setIsHeaderOpen(prev => !prev);
    soundEffectPlay('/sound/btn_head_open.mp3');
  };

  return (
    <HeaderWrap className={isHeaderOpen ? 'on' : ''}>
      <Header>
        <div className="left">
          <h1>
            <span className="hiddenZone">GOPIZZA</span>
          </h1>
          <span className="total_order">{receiptsData.length} ORDERS</span>
          <span className="area_page_show">
            PAGE {slideIdx + 1} /{' '}
            {receiptsData.length === 0
              ? '1'
              : Math.ceil(receiptsData.length / grid)}
          </span>
          <span className="box_set_grid">
            <button
              onClick={() => {
                grid > 3 && setGrid((prev: number) => prev - 3);
                swiperRef?.slideTo(0, 0, false);
                soundEffectPlay('/sound/btn_menu.mp3');
              }}
              disabled={3 === grid}>
              <Minus size="16" />
            </button>
            {grid}Grid{' '}
            <button
              onClick={() => {
                6 > grid && setGrid((prev: number) => prev + 3);
                swiperRef?.slideTo(0, 0, false);
                soundEffectPlay('/sound/btn_menu.mp3');
              }}
              disabled={6 === grid}>
              <Plus size="16" />
            </button>{' '}
          </span>
        </div>
        <div className="right">
          <div
            className={`area_btn filter ${
              showLayer === 'filterLayer' ? 'on' : ''
            }`}>
            <button
              onClick={() => {
                handlerMenu('filterLayer');
              }}>
              Filter by
            </button>
            {showLayer === 'filterLayer' && (
              <FilterLayer>
                <CheckBox
                  checkBoxData={filterCondition}
                  checkedList={filter}
                  setCheckedLists={setFilter}
                  soundEffectPlay={soundEffectPlay}
                />
              </FilterLayer>
            )}
          </div>
          <div className={`area_btn ${showLayer === 'PrepStatus' ? 'on' : ''}`}>
            <button
              onClick={() => {
                handlerMenu('PrepStatus');
              }}>
              Prep
            </button>
          </div>
          <div
            className={`area_btn ${showLayer === 'SummeryLayer' ? 'on' : ''}`}>
            <button
              onClick={() => {
                handlerMenu('SummeryLayer');
              }}>
              Summary
            </button>
          </div>

          <div className="box_btn">
            <button
              className={`btn_recall ${
                showLayer === 'RecallLayer' ? 'on' : ''
              }`}
              onClick={() => {
                handlerMenu('RecallLayer');
              }}>
              <span className="hiddenZone">History</span>
            </button>
            <button
              className={`btn_setting ${
                showLayer === 'SettingLayer' ? 'on' : ''
              }`}
              onClick={() => {
                handlerMenu('SettingLayer');
              }}>
              <span className="hiddenZone">Setting</span>
            </button>
          </div>
        </div>
      </Header>
      <BtnHeadOpen onClick={handlerHeadOpen}>
        <span className="hiddenZone">열기</span>
      </BtnHeadOpen>
      {isHeaderOpen && <Dimm onClick={handlerHeadOpen} />}
    </HeaderWrap>
  );
}

export default observer(KdsHeader);
