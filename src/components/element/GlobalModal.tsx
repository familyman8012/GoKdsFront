import {observer} from 'mobx-react';
import {modalStore} from 'MobxFarm/store';
import ModalPortal from 'ComponentsFarm/element/Portal';
import PrepStatus from 'ComponentsFarm/layer/PrepStatus';
import PrepManagement from 'ComponentsFarm/layer/PrepManagement';
import SummeryLayer from 'ComponentsFarm/layer/SummeryLayer';
import RecallLayer from 'ComponentsFarm/layer/RecallLayer';
import SettingLayer from 'ComponentsFarm/layer/SettingLayer';
import ReceiptHandler from 'ComponentsFarm/popup/ReceiptHandler';

export const LAYER_TYPES = {
  SummeryLayer: 'SummeryLayer',
  PrepStatus: 'PrepStatus',
  PrepManagement: 'PrepManagement',
  RecallLayer: 'RecallLayer',
  SettingLayer: 'SettingLayer',
} as const;

export const MODAL_TYPES = {
  ReceiptHandler: 'ReceiptHandler',
} as const;

const LAYER_COMPONENTS: any = {
  [LAYER_TYPES.SummeryLayer]: SummeryLayer,
  [LAYER_TYPES.PrepStatus]: PrepStatus,
  [LAYER_TYPES.PrepManagement]: PrepManagement,
  [LAYER_TYPES.RecallLayer]: RecallLayer,
  [LAYER_TYPES.SettingLayer]: SettingLayer,
};

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.ReceiptHandler]: ReceiptHandler,
};

const LayoutArea = ({
  soundEffectPlay,
}: {
  soundEffectPlay: (src: string) => void;
}) => {
  const renderComponent = () => {
    if (!modalStore.modalName && !modalStore.layerName) {
      return null;
    }

    const LayerComponent = LAYER_COMPONENTS[modalStore.layerName];
    const ModalComponent = MODAL_COMPONENTS[modalStore.modalName];

    if (modalStore.modalName && !modalStore.layerName) {
      return (
        <ModalComponent
          soundEffectPlay={soundEffectPlay}
          {...modalStore.modalProps}
        />
      );
    } else if (!modalStore.modalName && modalStore.layerName) {
      return (
        <LayerComponent
          soundEffectPlay={soundEffectPlay}
          {...modalStore.layerProps}
        />
      );
    } else if (modalStore.modalName && modalStore.layerName) {
      return (
        <div>
          <LayerComponent {...modalStore.layerProps} />
          <ModalComponent {...modalStore.modalProps} />
        </div>
      );
    }
  };

  return <ModalPortal>{renderComponent()}</ModalPortal>;
};

export default observer(LayoutArea);
