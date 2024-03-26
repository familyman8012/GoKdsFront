// import { setAccountStoreInfo } from "LibFarm/.";
// import router from "next/router";
import { observable } from "mobx";
import { ILoginUserResponse } from "ApiFarm/interface/auth";
import { toast } from "react-toastify";

export const numberStore = observable({
  number: 0,
  name: "ddd",
  reset() {
    this.number = 0;
  },
});

interface IAuthStore {
  token: string | null;
  user_info: ILoginUserResponse["user_info"] | null;
  store_info: ILoginUserResponse["store"] | null;
  isLoggedIn: boolean;
  selected_store_idx: number | null;
  selected_store_name: string | null;
  init: () => void;
  login: (authData: ILoginUserResponse & { token: string }) => void;
  logOut: () => void;
}

const TOKEN_STORAGE_KEY = "KDS_AUTH_TOKEN";
const USER_STORAGE_KEY = "KDS_USER_INFO";
const STORE_STORAGE_KEY = "KDS_USER_STORE";

export const authStore = observable<IAuthStore>({
  token: null,
  user_info: null,
  store_info: null,
  selected_store_idx: null,
  selected_store_name: null,
  get isLoggedIn() {
    return !!this.user_info && !!this.token;
  },
  init() {
    try {
      this.token = localStorage.getItem(TOKEN_STORAGE_KEY) ?? null;
      this.user_info = JSON.parse(
        String(localStorage.getItem(USER_STORAGE_KEY))
      );
      this.store_info = JSON.parse(
        localStorage.getItem(STORE_STORAGE_KEY) ?? "null"
      );
    } catch (e) {
      this.token = null;
      this.user_info = null;
      this.store_info = null;
    }
  },
  login(authData) {
    if (Object.keys(authData).length !== 0) {
      this.token = authData.token;
      this.user_info = authData.user_info;
      this.store_info = authData.store;
      this.selected_store_idx = authData.selected_store_idx;
      this.selected_store_name = authData.selected_store_name;

      localStorage.setItem(TOKEN_STORAGE_KEY, authData.token);
      localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(authData.user_info)
      );
      localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(authData.store));

      if (this.token !== "" && this.user_info.user_idx) {
        window.location.replace("/home");
      } else if (this.token === "" && !this.user_info.user_idx) {
        toast.error("본사 직원은 접속권한이 없습니다.");
      }
    }
  },
  logOut() {
    this.token = null;
    this.user_info = null;
    this.store_info = null;
    this.selected_store_idx = null;
    this.selected_store_name = null;

    if (
      localStorage.getItem("session") !== null ||
      localStorage.getItem("storeInfo") !== null
    ) {
      localStorage.clear();
    }

    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(STORE_STORAGE_KEY);

    window.location.replace("/");
  },
});

// export const authStore = observable({
//   loading: true,
//   session: null,
//   storeInfo: { store_id: "", store_name: "", store_token: "" },
//   newLogin() {
//     if (localStorage.getItem("auth_token") !== null) {
//       const authData = {
//         auth_token: String(localStorage.getItem("auth_token")),
//         info: { ...JSON.parse(String(localStorage.getItem("info"))) },
//         token: String(localStorage.getItem("store_token")),
//       };
//       this.login(authData);
//       localStorage.removeItem("auth_token");
//       localStorage.removeItem("info");
//       localStorage.removeItem("store_token");
//     }
//   },
//   login(authData: {
//     info: { store_id: string; store_name: string };
//     token: string;
//   }) {
//     if (Object.keys(authData).length !== 0) {
//       this.session = authData;
//       this.storeInfo = {
//         store_id: String(authData?.info.store_id),
//         store_name: String(authData?.info.store_name),
//         store_token: String(authData?.token),
//       };

//       localStorage.setItem("session", JSON.stringify(authData));
//       setAccountStoreInfo(
//         String(authData?.info.store_id),
//         String(authData?.info.store_name),
//         String(authData?.token)
//       );
//       if (this.session.token !== "" && this.session.info.user_id) {
//         window.location.replace("./home");
//       } else if (
//         this.session.token === "" &&
//         this.session.info.user_id !== ""
//       ) {
//         toast.error("본사 직원은 접속권한이 없습니다.");
//       }
//       this.loading = false;
//     }
//   },
//   logOut() {
//     this.session = null;
//     this.storeInfo = { store_id: "", store_name: "", store_token: "" };
//     localStorage.removeItem("session");
//     localStorage.removeItem("storeInfo");
//     window.location.replace("/");
//     this.loading = true;
//   },
//   sessionGet() {
//     if (this.session === null) {
//       this.session = JSON.parse(String(localStorage.getItem("session")));
//       this.loading = false;
//       return this.session;
//     } else {
//       this.loading = false;
//       return this.session;
//     }
//   },
//   storeGet() {
//     if (
//       this.storeInfo !== null &&
//       Object.values(this.storeInfo).every((x) => x === "")
//     ) {
//       this.storeInfo = JSON.parse(String(localStorage.getItem("storeInfo")));
//       return this.storeInfo;
//     } else {
//       return this.storeInfo;
//     }
//   },
//   storeChange(data: IStoreInfo) {
//     this.storeInfo = {
//       store_id: String(data.store_id),
//       store_name: String(data.store_name),
//       store_token: String(data.store_token),
//     };
//     setAccountStoreInfo(
//       String(data.store_id),
//       String(data.store_name),
//       String(data.store_token)
//     );
//   },
// });

export const modalStore = observable<any>({
  layerName: null,
  layerProps: null,
  modalName: null,
  modalProps: null,
  showLayer(layerName: string, layerProps: object) {
    this.layerName = layerName;
    this.layerProps = layerProps;
  },
  hideLayer() {
    this.layerName = null;
    this.layerProps = null;
  },
  showModal(modalName: string, modalProps: object) {
    this.modalName = modalName;
    this.modalProps = modalProps;
  },
  hideModal() {
    this.modalName = null;
    this.modalProps = null;
  },
});

interface IReceiptStore {
  hanlerType: string | null;
  receipt_item_idx: number | null; //처리할 영수증 항목 고유식별 번호 number - 변경하고자 선택한 아이템
  receipt_item_name: string | null;
  product_class_idx: number | null; //제품 분류 고유식별 번호	number  - 팝업에서 선택한 카테고리
  parent_receipt_item_idx: number | null; //  구성 제품 추가용 - 소속시킬 영수증 항목 고유식별 번호
  product_idx: number | null; // 제품 고유식별 번호 number  - 팝업에서 선택한 상품

  reset: () => void;
}

export const receiptStore = observable<IReceiptStore>({
  hanlerType: null,
  // 미분류 제품 수동 분류
  receipt_item_idx: null,
  receipt_item_name: null,
  product_class_idx: null,
  // 구성 제품 추가
  parent_receipt_item_idx: null,
  // 공통
  product_idx: null,
  reset() {
    this.hanlerType = null;
    this.receipt_item_idx = null;
    this.product_class_idx = 1;
    this.product_idx = null;
    this.parent_receipt_item_idx = null;
  },
});

export const prepStore = observable<any>({
  // prep status 에서 선택한 제품의 고유 id
  product_idx: null,
  prep_name: null,
});

export const kdsSettingStore = observable<any>({
  dark: true,
  alarm: false,
  theme: "undark",
});
// export const settingStore = observable({
//   grid: 4,
//   plusGrid() {
//     this.grid = this.grid * 2;
//   },
//   minusGrid() {
//     this.grid = this.grid / 2;
//   },
// });
