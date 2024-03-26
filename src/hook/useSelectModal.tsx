import {runInAction} from 'mobx';
import {modalStore} from 'MobxFarm/store';
import React, {useCallback, useState} from 'react';

interface IShowModal {
  modalType: string;
  modalName: string;
  modalProps?: {message: string};
}

const useSelectModal = () => {
  const [showLayer, setShowLayer] = useState('');

  const showModal = useCallback(
    ({modalType, modalName, modalProps}: IShowModal) => {
      runInAction(() => {
        modalType === 'pop'
          ? modalStore.showModal(modalName, modalProps)
          : modalStore.showLayer(modalName, modalProps);
      });
    },
    [],
  );

  const hideModal = useCallback((modalType?: string) => {
    runInAction(() => {
      modalType === 'pop' ? modalStore.hideModal() : modalStore.hideLayer();
    });
  }, []);

  const handleSelectLayer = useCallback(
    (selectLayer: string, modalType?: string) => {
      if (showLayer === selectLayer && modalType !== 'pop') {
        setShowLayer('');
        if (selectLayer !== 'filterLayer' && selectLayer !== 'sortLayer') {
          hideModal(modalType);
        }
      } else {
        setShowLayer(selectLayer);
        if (selectLayer !== 'filterLayer' && selectLayer !== 'sortLayer') {
          showModal({
            modalType: String(modalType),
            modalName: selectLayer,
            // modalProps: {
            //   message: 'Success!',
            // },
          });
        }
      }
    },
    [showLayer],
  );

  return {showLayer, hideModal, handleSelectLayer};
};

export default useSelectModal;
