import React from 'react';
import {css, Global} from '@emotion/react';
import {kdsSettingStore} from 'MobxFarm/store';
import {observer} from 'mobx-react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        .Toastify__toast-body {
          z-index: 2000;
          font-size: 14px; // 원하는 폰트 크기로 조절하세요.
        }
        ::-webkit-scrollbar {
          width: 11px;
          height: 11px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${kdsSettingStore.dark ? '#fff' : '#aaa'};
          border: 2px solid ${kdsSettingStore.dark ? '#000' : '#fff'};
          border-radius: 20px;
          transition: #0000.2s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #061138;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}
    />
  );
}

export default observer(GlobalStyles);
