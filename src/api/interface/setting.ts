export interface ISettingLoadRes {
  order_alarm?: number;
  receipt_display_number?: number;
}

export interface ISettingSaveReq extends ISettingLoadRes {}

export interface ISettingSaveRes {
  app_setting_idx: number;
}
