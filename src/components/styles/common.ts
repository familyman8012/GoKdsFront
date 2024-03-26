import styled from "@emotion/styled/macro";

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    width: 19.3rem;
    height: 10.9rem;
    background: url(/images/logo_home.svg) no-repeat left top;
    background-size: 19.3rem 10.9rem;
  }

  .txt {
    margin: 3.2rem 0 17.3rem;
    color: #ff4600;
    font-family: "Montserrat";
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
  }

  input {
    display: block;
    width: 39rem;
    height: 4.5rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.2px;
    color: #828282;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    appearance: none;
    transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;

    &:focus {
      outline: 0;
      border-color: #ff862c;
      box-shadow: 0 0 0 0.25rem rgba(255, 134, 44, 0.25);
    }
  }

  .btn_login {
    width: 39rem;
    height: 5.2rem;
    margin-bottom: 14.8rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    background: #ff4600;
    border-radius: 0.4rem;
  }

  .copy_right {
    margin-top: 14.8rem;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0.2px;
    color: #828282;
  }
`;

export const BtnHeadOpen = styled.button`
  position: relative;
  z-index: 200;
  display: block;
  width: 13.5rem;
  height: 5.6rem;
  margin: 0 auto;
  border-radius: 0 0 4rem 4rem;
  background: #ff4600;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.4rem;
    height: 2.4rem;
    background: url("/images/arrow_header_down.svg") no-repeat left top;
  }
`;

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 1000;
  top: -10rem;
  transition: transform 0.3s;
  width: 100vw;

  &.on {
    transform: translateY(10rem);

    ${BtnHeadOpen} {
      &:after {
        top: 38%;
        transform: rotate(180deg) translate(-50%, -50%);
        transform-origin: top left;
      }
    }
  }
`;
export const Dimm = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  z-index: 200;
  height: 10rem;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  background: #061138;

  .left,
  .right {
    display: flex;
    align-items: center;
    height: 10rem;
    padding: 0 2.8rem;
  }

  .left {
    font-family: "Montserrat";
    font-weight: 700;

    h1 {
      width: 8.4rem;
      height: 4.8rem;
      background: url("/images/logo.svg") no-repeat left center;
      background-size: 8.4rem 4.8rem;
    }

    .total_order,
    .area_page_show {
      margin-left: 3rem;
    }

    .area_page_show {
      width: 18rem;
    }

    .box_set_grid {
      display: flex;
      align-items: center;

      button {
        display: flex;
        overflow: hidden;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        color: #fff;
        font-weight: bold;

        border-radius: 4px;
        background: #404c77;

        &:disabled {
          opacity: 0.3;
        }

        &:first-of-type {
          margin-right: 1.7rem;
        }

        &:last-of-type {
          margin-left: 1.7rem;
        }
      }
    }
  }
  .right {
    margin-left: auto;

    .area_btn {
      margin-right: 7.7rem;
      padding-right: 3.2rem;

      font-family: "Montserrat";
      font-weight: 500;
      font-size: 2.4rem;
      background: url("/images/arrow_headright_btn_down.svg") no-repeat right
        center;
      background-size: 2.4rem 2.4rem;

      &.on {
        button {
          color: #ff4600;
        }
        background: url("/images/arrow_headright_btn_up.svg") no-repeat right
          center;
        background-size: 2.4rem 2.4rem;
      }

      button {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 2.4rem;
        color: #fff;
        background: transparent;
      }

      &.filter,
      &.sort {
        position: relative;
      }

      &:nth-of-type(4) {
        background: none;
      }
    }

    .btn_recall,
    .btn_setting {
      width: 4.8rem;
      height: 4.8rem;
      // margin-right: 32px;

      &.on {
        filter: invert(37%) sepia(78%) saturate(4442%) hue-rotate(1deg)
          brightness(102%) contrast(103%);
      }
    }

    .box_btn {
      display: flex;
      align-items: center;
    }
    .btn_speak {
      width: 4rem;
      height: 4rem;
      margin-right: 3rem;
      background: url("/images/ico_volume_mute.svg") no-repeat left center;
      background-size: 4rem 4rem;

      &.on {
        background: url("/images/ico_volume.svg") no-repeat left center;
        background-size: 4rem 4rem;
      }
    }

    .btn_dark {
      width: 4rem;
      height: 4rem;
      margin-right: 3rem;
      background: url("/images/ico_dark_off.svg") no-repeat left center;
      background-size: 4rem 4rem;

      &.on {
        background: url("/images/ico_dark_on.svg") no-repeat left center;
        background-size: 4rem 4rem;
      }
    }

    .btn_recall {
      margin-right: 3rem;
      background: url(/images/ico_recall.svg) no-repeat center center;
      background-size: 4.4rem 4rem;
    }

    .btn_setting {
      background: url(/images/ico_setting.svg) no-repeat center center;
      background-size: 4.4rem 4rem;
    }
  }
`;

export const Pann = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: conic-gradient(#ff0052 20deg, transparent 120deg);
    width: 150%;
    height: 150%;

    animation: lineRotate 5s linear infinite;
  }
  &::after {
    content: "";
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: #1e1e1e;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff0052;
    font-size: larger;
    letter-spacing: 5px;
  }

  @keyframes lineRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const TxtSaleType = styled.span`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 8.2rem;
  height: 8.2rem;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  background-color: #3c3f42;

  &:before {
    content: "";
    background-image: conic-gradient(#04b0ee 20deg, transparent 120deg);
    height: 150%;
    width: 150%;
    position: absolute;
    left: -25%;
    top: -25%;
  }
  &:after {
    content: "";
    height: 94%;
    width: 94%;
    position: absolute;
    background-color: #2e3237;
    border-radius: 50%;
    top: 3%;
    left: 3%;
    color: #04b0ee;
    display: grid;
    place-items: center;
    font-size: 20px;
    letter-spacing: 6px;
  }

  .txt {
    position: relative;
    z-index: 10;
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  &.alert {
    border: none;

    &:before {
      background-image: conic-gradient(#ef4747 20deg, transparent 120deg);
      animation: rotate 1s infinite linear;
    }
    .txt {
      color: #ef4747;
      animation: blink 1.5s infinite;
    }
  }
  &.warning {
    border: none;

    &:before {
      background-image: conic-gradient(#ff862c 20deg, transparent 120deg);
      animation: rotate 2s infinite linear;
    }
    .txt {
      color: #ff862c;
    }
  }
  &.safe {
    border: none;

    &:before {
      background-image: conic-gradient(#fff 20deg, transparent 120deg);
      animation: rotate 2.5s infinite linear;
    }
    .txt {
      color: #fff;
    }
  }
`;

export const ReceiptWrap = styled.div`
  overflow: hidden;
  position: relative;
  opacity: 1;
  height: 100%;
  border-radius: 0.4rem;
  background: #2e3237;
  transform: translateY(30%);
  transition: all 0.5s;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));

  &.on {
    transform: translateY(0%);
  }

  &.off {
    transform: translateY(-30%);
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  &.alert {
    .info_head {
      color: #ff3434;
    }
  }
  &.warning {
    .info_head {
      color: #ff862c;
    }
  }
  &.safe {
    .info_head {
      color: #fff;
    }
  }

  .info_head {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 11rem;
    padding: 0 2rem;
    color: #fff;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 2.4rem;
    border-bottom: 2px solid #333333;
    border-radius: 0.4rem 0.4rem 0px 0px;

    .recepit_id {
      margin-left: 11.2rem;
      font-weight: normal;
    }

    .time {
      margin-left: auto;
    }
  }

  &.not_order_memo {
    .cont {
      height: calc(100% - 8rem);
    }
  }

  .cont {
    position: relative;
    z-index: 2;
    overflow: auto;
    height: calc(100% - 15.8rem);
    padding: 2rem 2rem 5rem;
    font-family: "Noto Sans KR";

    .quanity {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      background: #e0e0e0;
      * {
        font-family: "Montserrat";
        font-size: 2rem;
        font-weight: bold;
        color: #333333 !important;
      }
    }

    /* .ing {
      > .depth1_item,
      > .depth2_item {
        &:after {
          content: '';
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          background: url('/images/spinner_waiting.gif') no-repeat left top;
          background-size: 2rem;
        }
      }
      > .depth1_item {
        &:after {
          order: 7;
        }
      }
      > .depth2_item {
        &:after {
          order: 3;
        }
      }
    } */

    .fin,
    .skip {
      > div {
        * {
          color: #4f4f4f !important;
        }
        .quanity {
          span {
            color: #333333 !important;
          }
          background: #4f4f4f !important;
        }
        button {
          display: none;
        }
      }

      &.unMapping {
        color: #2f80ed !important;

        > div {
          .quanity {
            span {
              color: #333333 !important;
            }
            background: #5f4701 !important;
          }
          .product_name {
            color: #5f4701 !important;
          }
        }
      }
    }

    .unMapping {
      color: #2f80ed !important;

      > div {
        .quanity {
          background: #ffc107;
        }
        .product_name,
        .product_name .txt {
          color: #ffc107 !important;
        }
      }
      > div .btn_box {
        display: block;
      }
      &.fin {
        > .depth1_item .product_name .txt,
        > .depth2_item .product_name .txt {
          color: #5f4701 !important;
        }
      }
      .btn_add_item {
        display: none;
      }
    }

    .depth1 {
      .unMapping {
        .depth1_item {
          .product_name {
            width: 65%;
          }
          .btn_box {
            margin-left: auto;
          }
        }
      }
      .depth1_item {
        display: flex;
        align-items: center;
        height: 6.6rem;
        padding: 0 1.6rem;
        font-weight: 700;
        color: #333333;
        background: #3c3f42;

        /* > .btn_add_item {
          margin-left: 20px;
        } */

        .quanity {
          order: 1;
          margin-top: 0px;
          margin-right: 1rem;
          font-size: 2rem;
        }
        .product_name {
          display: flex;
          align-items: center;
          order: 2;
          width: 77%;
          padding: 0 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 2.4rem;
        }

        .btn_add_item {
          margin-left: auto;
        }
      }

      &:first-of-type {
        margin-top: 0;
      }

      > li:not(:nth-of-type(1)) {
        margin-top: 2rem;
      }
    }

    .depth2 {
      .btn_add_item {
        margin-left: auto;
      }
      .ing .product_name {
        align-items: center;
        margin-left: -70px;
      }
      .product_name,
      .quanity {
        order: 2;
        display: flex;
      }
      .quanity {
        display: none;
        margin-right: 1rem;
        .x {
          order: 1;
        }
        .number {
          order: 2;
        }
      }
      > li {
        position: relative;
        font-size: 2rem;
        font-weight: 400;
        color: #4f4f4f;
        border-top: 1px solid #4f4f4f;
        background: #212529;
      }
    }
  }

  .btn_box {
    display: none;

    order: 3;
    height: 3.2rem;
    margin-left: 2rem;
    button {
      margin-right: 2rem;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .btn_mapping {
      width: 3.2rem;
      height: 3.2rem;
      background: url("/images/ico_mapping.svg") no-repeat left center;
      background-size: 3.2rem;
    }
    .btn_skip {
      width: 3.2rem;
      height: 3.2rem;
      background: url("/images/ico_skip.svg") no-repeat left center;
      background-size: 3.2rem;
    }
  }

  .btn_add_item {
    order: 4;
    width: 3.2rem;
    height: 3.2rem;
    background: url("/images/ico_add_item.svg") no-repeat left center;
    background-size: 3.2rem;
  }

  .depth2 {
    .btn_add_item {
      width: 2.9rem;
      height: 2.9rem;

      background: url("/images/ico_minus_item.svg") no-repeat left center;
      background-size: 2.9rem;
    }

    .fin {
      .depth2_item {
        overflow: hidden;
        position: relative;
        text-decoration: none;

        * {
          color: #4f4f4f !important;
        }

        /* &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #000;
        } */
      }
      &.unMapping {
        .depth2_item:after {
          background: #2f80ed !important;
        }
      }
      &.fin,
      &.skip {
        .btn_box {
          display: none;
        }
      }
    }

    .depth2_item {
      display: flex;
      align-items: center;
      height: 6.6rem;
      padding: 0 1.6rem 0 6.1rem;

      .btn_box {
        margin-left: auto;
      }
    }
  }

  .footer {
    position: absolute;
    z-index: 10;
    bottom: 0;
    min-height: 7.8rem;
    padding: 0 2rem 0px;
    .txt {
      padding: 0.8rem 0 0px;
      font-size: 1.4rem;
      color: #e0e0e0;
      line-height: 2rem;
      border-top: 1px solid #4f4f4f;
      white-space: pre-line;
    }
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 0.5s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

export const IcoSaleType = styled.span<{ type: string }>`
  display: inline-block;
  width: 4.8rem;
  height: 4.8rem;
  background: ${({ type }) =>
      type === "type0"
        ? "url('/images/ico_meal.svg')"
        : type === "type1"
        ? "url('/images/ico_takeout.svg')"
        : "url('/images/ico_delivery.svg')"}
    no-repeat left center;
  background-size: 4.8rem;
`;

export const KdsSummary = styled.div`
  width: 32rem;
  background: #fff;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  .title {
    padding: 1.2rem;
    font-size: 1.8rem;
    text-align: center;
    border-bottom: 1px solid #e8e9e8;
  }

  .list {
    padding: 1.5rem;
    li {
      display: flex;
      font-size: 2rem;
      margin-bottom: 0.5rem;

      .item_quanity {
        margin-left: auto;
      }
    }
  }
`;

export const SlidePageWrap = styled.section`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);

  /* Receipt.css */
  .item-enter {
    opacity: 0;
  }

  .item-enter-active {
    opacity: 1;
    transition: opacity 700ms;
  }

  .item-exit {
    opacity: 1;
  }

  .item-exit-active {
    opacity: 0;
    transition: opacity 700ms;
  }

  &.dark {
    background: red;
  }

  &.grid8,
  &.grid12 {
    .cont {
      padding-top: 0px;
    }
  }

  &.grid12 {
    gap: 2rem;
    // grid-template-rows: 1fr 1fr 1fr;
    .info_head {
      height: 5.2rem;
      ${IcoSaleType} {
        width: 3rem;
        height: 3rem;
        background-size: 3rem;
      }
    }

    .not_order_memo .cont {
      height: calc(100% - 4.6rem) !important;
    }
  }

  &.SlidePage1 {
    background: red;
  }
`;

// sixGrid
export const KdsWrap = styled.div`
  &.dark {
    ${Header} {
      background: #211e1e;
    }

    ${ReceiptWrap} {
      .cont {
        * {
          color: #e0e0e0;
        }
        .unMapping .depth1_item *,
        .depth2_item.unMapping * {
          color: inherit;
        }
      }
      .footer {
        color: #e0e0e0;
        background: #2e3237;
      }
    }
  }
`;

export const KdsContent = styled.div`
  position: relative;
  height: 100vh;
  padding: 4.2rem 2.2rem 5.8rem;
  background: #212529; //E0E0E0

  .swiper,
  .swiper-slide,
  ${SlidePageWrap} {
    height: 100%;
  }

  .noOrder {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2.4rem;

    .title {
      margin-bottom: 30px;
    }
  }
`;

export const KdsPagingInfo = styled.div`
  width: fit-content;
  margin: 1.2rem auto;
  padding: 0.8rem 1.6rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Montserrat";
  text-align: center;
  border-radius: 3.6rem;
  background: #222222;
`;

export const PrepStatusWrap = styled.div`
  .top {
    h2 {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .list_frip_menu {
      display: grid;
      align-items: center;
      gap: 1.6rem;
      padding: 2.4rem;
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid #e0dee0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 19.8rem;
        height: 6.1rem;
        color: #fff;
        font-size: 2.4rem;
        border-radius: 0.4rem;
        background: #828282;

        &.on {
          background: #ff4600;
        }
      }
    }
  }

  .list_prep_items {
    overflow-y: auto;
    height: calc(100vh - 36.7rem);
    padding: 0 2.4rem;
    li {
      display: flex;
      padding: 4.2rem 0 1.9rem;
      font-size: 2rem;
      font-weight: 500;
      border-bottom: 1px solid #e0dee0;

      .quanity {
        margin-left: auto;
        padding-right: 4.2rem;
        background: url("/images/arrow_prep_right.svg") no-repeat right center;
        background-size: 2.4rem;
      }
    }
  }
`;

export const PrepManagementWrap = styled.div`
  .status {
    display: flex;
    align-items: center;
    height: 6.9rem;
    padding: 1.8rem 2.4rem;
    color: #333;
    font-size: 2rem;
    font-weight: 70rem;
    line-height: 2.9rem;
    background: #f2f2f2;

    .number {
      margin-left: auto;
      color: #ff4600;
    }
  }

  .control {
    display: flex;
    align-items: center;
    margin: 0 2.4rem;
    padding: 2.4rem 0;
    border-bottom: 1px solid #e0e0e0;
    .title {
      color: #2f80ed;
      font-size: 2rem;
      line-height: 2.9rem;
    }
    .btn_area {
      margin-left: auto;
    }
  }
  button {
    width: 7.7rem;
    height: 3.3rem;
    line-height: 3.3rem;
    border-radius: 2px;
    background: #f2f2f2;

    &.add_btn .txt {
      color: #2f80ed;
      background: url("/images/ico_prep_add.svg") no-repeat left center;
    }
    &.add_confirm {
      margin-left: 2rem;
      .txt {
        color: #bdbdbd;
        background: url("/images/ico_prep_confirm.svg") no-repeat left center;
      }
      &.on {
        .txt {
          color: #fff;
          background: url("/images/ico_prep_confirm_white.svg") no-repeat left
            center;
        }
        background: #2f80ed;
      }
    }
    .txt {
      padding-left: 2.3rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .list_prep {
    li {
      display: flex;
      align-items: center;
      margin: 0 2.4rem;
      padding: 2.4rem 0;
      font-size: 1.6rem;
      border-bottom: 1px solid #e8e9e8;

      .button_area {
        margin-left: auto;

        .btn_use,
        .btn_trash {
          width: 7.7rem;
          height: 3.3rem;
          line-height: 3.3rem;
          border-radius: 2px;
          background: transparent;

          &:hover {
            color: #fff;
          }
        }
        .btn_use.on,
        .btn_trash:disabled {
          color: #bdbdbd;
          border: 1px solid #bdbdbd;

          &:hover {
            color: #333;
            background: #bdbdbd;
          }
        }
      }

      .btn_use {
        margin-right: 1rem;
        color: #2f80ed;
        border: 1px solid #2f80ed;

        &:hover {
          background: #2f80ed;
        }
      }
      .btn_trash {
        color: #ef4747;
        border: 1px solid #ef4747;

        &:hover {
          background: #ef4747;
        }
      }
    }
  }
`;

export const FilterLayer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 4rem;
  left: 0;
  width: max-content;
  min-width: 13rem;
  color: #333;
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 0.4rem;
  filter: drop-shadow(0px 0.8rem 2.2rem rgba(0, 0, 0, 0.25));
  background: #fff;

  li {
    display: flex;
    border-bottom: 1px solid #eee;
    align-items: center;

    label {
      width: 100%;
      padding: 1.2rem 1.6rem;
    }

    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 1rem;
      border: 1px solid #bdbdbd;
    }

    input[type="checkbox"] {
      border-radius: 0.4rem;
    }

    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

export const SettingLayerWrap = styled.div`
  width: max-content;
  height: max-content;
  padding: 2rem 2rem 0;

  .box_profile {
    padding-bottom: 1.9rem;
    border-bottom: 1px solid rgb(239, 239, 239);

    .info {
      display: flex;
      align-items: self-end;
      margin-bottom: 0.4rem;
      color: rgb(33, 37, 41);
      font-weight: 500;
      line-height: 1.2;

      .name {
        font-size: 2rem;
      }

      .store_name {
        margin-left: 1.5rem;
        font-size: 1.4rem;
      }
    }

    .email {
      font-size: 1.6rem;
      font-weight: normal;
      font-family: "Montserrat";
      color: rgb(189, 189, 189);
    }
  }
  .box_logout {
    padding: 1.4rem 0 2rem;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: underline;
    button {
      padding: 0.7rem 1rem;
      color: #ffffff;
      border-radius: 0.5rem;
      background: #000;
    }
  }
  ul {
    li {
      display: flex;
      align-items: center;
      margin: 0 2.4rem;
      padding: 2.5rem 0px;
      border-bottom: 1px solid #e0dee0;
      font-size: 2rem;
    }
  }

  .toggle {
    --width: 4rem;
    --height: calc(var(--width) / 2);
    --border-radius: calc(var(--height) / 2);

    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 1.5rem;
    margin-left: auto;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgb(239, 239, 239);
    .txt {
      font-size: 1.4rem;
      margin-right: 10px;
    }
  }

  .toggle__input {
    display: none;
  }

  .toggle__fill {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    background: #dddddd;
    transition: background 0.2s;
  }

  .toggle__fill::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: var(--height);
    width: var(--height);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    transition: transform 0.1s;
  }
  .toggle__input:checked ~ .toggle__fill {
    background: #76adff;
  }

  .toggle__input:checked ~ .toggle__fill::after {
    transform: translateX(var(--height));
  }

  .area_grid_setting {
    display: flex;
    align-items: center;
    margin-left: auto;

    button {
      display: inline-block;
      width: 2rem;
      height: 2rem;
    }

    .btn_prev {
      margin-right: 1rem;
      background: url("/images/arrow_grid_prev.svg") no-repeat center;
    }
    .btn_next {
      margin-left: 1rem;
      background: url("/images/arrow_grid_next.svg") no-repeat center;
    }
  }
`;

export const LayerArea = styled.div`
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const SummeryLayerWrap = styled.div`
  .list_summary {
    margin: 1rem 0 0 3.5rem;
    font-size: 2rem;
    width: calc(100% - 7rem);

    th {
      font-weight: bold;
    }
    td {
      &.ing {
        &:after {
          display: inline-block;
          position: relative;
          top: 0.3rem;
          content: "";
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          background: url("/images/spinner_waiting.gif") no-repeat left top;
          background-size: 2rem 2rem;
        }
      }
    }
    th,
    td {
      padding: 1rem 0;
      text-align: right;
      &:nth-of-type(1) {
        width: 50%;
        text-align: left;
      }
    }

    .un {
      td {
        color: blue;
      }
    }
  }
`;

export const DatePickerWrap = styled.div`
  .react-datepicker-wrapper {
    display: inline-flex;
    position: relative;
    height: 4rem;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    background: #fff;
    color: #333;

    &::after {
      position: absolute;
      top: 50%;
      right: 10px;
      content: "";
      width: 1.8rem;
      height: 1.8rem;
      margin-top: -0.9rem;
      background: url("/images/calendar.svg") no-repeat left center #fff;
      background-size: 1.8rem 1.8rem;
    }

    input {
      font-size: 1.4rem;
      width: 100%;
      height: 100%;
      padding: 0rem 3.5rem 0rem 1.05rem;
      border: 0;
      background: transparent;
    }
  }

  .react-datepicker {
    border-radius: 1rem;
    box-shadow: 0 0.2rem 0.4rem rgb(58 58 58 / 20%);
    border: 0;
    color: #333;
    background: #fff;
    font: inherit;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0.2rem;
    padding: 0;
    border: none;
    z-index: 1;
    height: 3.2rem;
    width: 3.2rem;
    text-indent: -999rem;
    overflow: hidden;
  }
  .react-datepicker__navigation {
    height: 4rem;
    width: 4rem;
    top: 0;
    position: absolute;
  }
  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 1.2rem;
    padding: 0.8rem 0;
    position: relative;
  }
  .react-datepicker__header {
    padding: 0;
    border-bottom: 0;
  }
  .react-datepicker__day-names {
    border-top: 1px solid #e0e0e0;
    margin-bottom: 0;
  }
  .react-datepicker__header .react-datepicker__day-names {
    padding: 0 1.6rem;
  }
  .react-datepicker__header {
    background: #fff;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 1.2rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    flex-wrap: nowrap;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.6rem;
    padding: 1.4rem 0.8rem 1.2rem;
    height: 3.9rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }
  .react-datepicker__day-names {
    margin-bottom: -0.8rem;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 2.68rem;
    line-height: 2.68rem;
    text-align: center;
    margin: 1.3rem;
    font-size: 1.4rem;
  }

  .react-datepicker__month {
    margin: 1.2rem;
    text-align: center;
  }
  .react-datepicker__day:not(.react-datepicker__day--disabled):focus,
  .react-datepicker__day:not(.react-datepicker__day--disabled):not(
      :disabled
    ):hover {
    border-radius: 4.5rem;
    background-color: #f2f2f2;
  }
  .react-datepicker__day--disabled {
    color: #ddd !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #ff6d00 !important;
    color: #fff;
    border-radius: 4.5rem;
  }
`;

export const RecallLayerWrap = styled.div`
  ${DatePickerWrap} {
    width: 15rem;
    margin-left: auto;
  }
  .list_order {
    overflow: auto;
    max-height: calc(100vh - 18rem);

    li {
      margin: 0 2.4rem;
      padding: 3.7rem 0 1rem;
      font-family: Montserrat;
      font-size: 2rem;
      font-weight: 400;
      line-height: 1;
      border-bottom: 1px solid #e0dee0;

      > div {
        margin-bottom: 1rem;
      }

      &.nodata {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 18rem);
        padding: 0;
        border-bottom: none;
      }

      .orderid {
        font-weight: 600;
      }

      .order_menu {
        line-height: 1.5;
        span {
          &:after {
            content: ",";
          }
          &:last-of-type {
            &:after {
              display: none;
            }
          }
          margin-right: 1rem;
        }
      }

      .completed {
        margin-top: 2rem;
        color: #bdbdbd;
      }
    }
  }
`;

export const ReceiptHandlerPopWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1005;
  width: 100vw;
  height: 100vh;
  background: #fff;

  h2 {
    padding: 3rem 0 5rem;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
  }

  .btn_layer_close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: url("/images/ico_layer_close.svg") no-repeat center;
    background-size: 1.4rem;

    &:hover {
      background-color: #dadada;
      transition: background-color 0.35s;
    }
  }

  .list_category {
    display: grid;
    gap: 1.8rem;
    padding: 0 8rem 2.8rem;
    grid-template-columns: repeat(8, 1fr);
    border-bottom: 1px solid #e0dee0;

    &.add {
      grid-template-columns: repeat(7, 1fr);
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 6.1rem;
      color: #fff;
      font-size: 2.4rem;
      border-radius: 0.4rem;
      background: #828282;

      &.on {
        background: #ff4600;
      }
    }
  }

  .list_item {
    display: grid;
    gap: 5rem;
    padding: 2.8rem 8rem;
    grid-template-columns: repeat(5, 1fr);
    button {
      width: 100%;
      height: 10rem;
      background: #f3f0f1;
      position: relative;
      border-radius: 0.7rem;
      text-align: center;
      cursor: pointer;

      box-shadow: -0.6rem -0.6rem 1rem rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);

      &:hover {
        opacity: 0.3;
        box-shadow: -0.6rem -0.6rem 1rem rgba(255, 255, 255, 0.8),
          0.6rem 0.6rem 1rem rgba(0, 0, 0, 0.2);
      }
      &.on {
        opacity: 1;
        background: #000;
        color: #ff4600;
      }

      span {
        line-height: 10rem;
        font-family: "Montserrat", sans-serif;
        font-size: 2.4rem;
        font-weight: semibold;
      }
    }
  }

  .box_btn {
    position: fixed;
    width: 100%;
    bottom: 1rem;
    display: flex;
    padding: 1.6rem;
    border-top: 1px solid #dee2e6;

    button {
      padding: 0.5rem 3rem;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 4rem;
      color: #fff;
      background: #bdbdbd;
      border-radius: 4px;
      transition: opacity 0.35s, color 0.35s ease-out, background 0.35s ease-out;

      &:disabled {
        background: #ddd !important;
      }

      &.btn_cancle {
        margin: 0 0.8rem 0 auto;
        color: #828282;
        border: 1px solid #828282;
        background: transparent;
      }

      &.btn_submit {
        background: #2f80ed;
        &:hover {
          background: rgba(47, 128, 237, 0.8);
        }
      }
    }
  }
`;

export const ReceiptHandlerPopWrap2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 68.5rem;

  border-radius: 0.5rem;
  background: #fff;

  h2 {
    padding: 3rem 0 3.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
  }

  .btn_layer_close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: url("/images/ico_layer_close.svg") no-repeat center;
    background-size: 1.4rem;

    &:hover {
      background-color: #dadada;
      transition: background-color 0.35s;
    }
  }

  dl {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 3rem;

    dt {
      font-size: 1.4rem;
      font-weight: 700;
      width: 13rem;

      &:last-of-type {
        margin-top: 1rem;
        align-self: flex-start;
      }
    }
    dd {
      display: block;
      width: 100%;

      select {
        width: 11.8rem;
        padding-left: 0.5rem;
      }

      input {
        width: calc(100% - 4.3rem);
        height: 100%;
        border: none;
      }
    }
  }

  .box_inp {
    display: flex;
    padding-left: 0.5rem;
  }
  select,
  .box_inp {
    height: 4rem;
    border: 0.1rem solid #e0e0e0;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  select:focus,
  .box_inp.on {
    outline: 0;
    border-color: #000;
    box-shadow: 0 0 0 0.25rem rgba(47, 128, 237, 0.25);
  }
  .btn_search {
    width: 3.8rem;
    height: 3.8rem;
    background: url(/images/btn_search.svg) no-repeat center center transparent;
    background-size: 1.8rem;
  }

  .list_mapping {
    height: 38.4rem;
    overflow-y: auto;
    border-bottom: 1px solid #bdbdbd;
    li {
      &:hover {
        background-color: #e3f5ff;
      }
      &.nodata {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #bdbdbd;
        font-size: 1.4rem;
        font-weight: bold;

        .txt {
          padding-top: 5.2rem;
          background: url(/images/ico_notification.svg) no-repeat center top;
          background-size: 4.2rem;
          filter: invert(61%) sepia(87%) saturate(0%) hue-rotate(252deg)
            brightness(105%) contrast(91%);
        }
      }
      label {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1;
        border-bottom: 1px solid #bdbdbd;

        .box_radio {
          width: 87px;
          input[type="radio"] {
            display: block;
            width: 1.8rem;
            height: 1.8rem;
            margin: 0 auto;
          }
        }

        .product_id {
          width: 17.4rem;
          text-align: center;
        }
        .product_name {
          width: calc(100% - 17.5rem);
          text-align: center;
        }
      }
    }
  }
  .box_btn {
    display: flex;
    padding: 1.6rem;
    border-top: 1px solid #dee2e6;

    button {
      min-width: 8.4rem;
      height: 4rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 4rem;
      color: #fff;
      background: #bdbdbd;
      border-radius: 0.4rem;
      transition: opacity 0.35s, color 0.35s ease-out, background 0.35s ease-out;

      &.btn_cancle {
        margin: 0 0.8rem 0 auto;
        color: #828282;
        border: 1px solid #828282;
        background: transparent;
      }

      &.btn_submit {
        background: #2f80ed;
        &:hover {
          background: rgba(47, 128, 237, 0.8);
        }
      }
    }
  }
`;

export const LayerConfirmWrap = styled.div`
  &:before {
    content: "";
    position: fixed;
    z-index: 1001;
    top: 10rem;
    left: 0;
    width: 100vw;
    height: calc(100vh - 10rem);
    background: rgba(0, 0, 0, 0.7);
  }
  .popup {
    position: fixed;
    z-index: 1002;
    top: 50%;
    left: 50%;
    width: 50.8rem;
    transform: translate(-50%, -50%);
    padding: 3.6rem 2.4rem 2.4rem;
    color: #4f4f4f;
    background: #ffffff;
    box-shadow: 0px 0.8rem 2.2rem rgba(0, 0, 0, 0.25);
    border-radius: 0.4rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.6rem;
    }

    p {
      min-height: 4.8rem;
      margin: 0.8rem 0 2.4rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }

    .box_btn {
      display: flex;
      justify-content: flex-end;

      button {
        width: 8.4rem;
        height: 4rem;
        font-size: 1.6rem;
        line-height: 4rem;
        text-align: center;
        border-radius: 0.4rem;

        &.btn_cancle {
          margin-right: 1rem;
          color: #828282;
          border: 1px solid #828282;
          background: #fff;
        }

        &.btn_confirm {
          color: #fff;
          background: #2f80ed;
        }
      }
    }
  }
`;
