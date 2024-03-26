import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  IMainMenutem,
  IReceiptCompleteReq,
  IReceiptListItem,
  ISubMenuItem,
} from "ApiFarm/interface/receipt";
import { fetchReceiptComplete } from "ApiFarm/receipt";
import useTimer from "HookFarm/useTimer";
import React, { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import ReceiptHead from "./element/ReceiptHead";
import ReceiptItem from "./element/ReceiptItem";
import { ReceiptWrap } from "./styles/common";

function Receipt({
  data,
  soundEffectPlay,
}: {
  data: IReceiptListItem;
  soundEffectPlay: any;
}) {
  const queryClient = useQueryClient();
  // receiptWrap의 opacity를 control하는 state를 추가합니다.
  const [opacity, setOpacity] = useState(1);

  const { showTime, bell } = useTimer(data);

  //영수증 관리 - 영수증 처리 상태 변경
  const receiptComplete = useMutation(
    ["receiptComplete"],
    (request: IReceiptCompleteReq) => fetchReceiptComplete(request),
    {
      onMutate: async (newStatus) => {
        // A snapshot of the previous value
        const previousValue = queryClient.getQueryData(["receiptListData"]);

        // Optimistically update to the new value
        queryClient.setQueryData(["receiptListData"], (oldData: any) => {
          return {
            ...oldData,
            list: oldData.list.filter(
              (item: any) => item.receipt_idx !== newStatus.receipt_idx
            ),
          };
        });

        return previousValue;
      },
      onError: (err, newStatus, previousValue) => {
        // On error, roll back to the previous value
        queryClient.setQueryData(["receiptListData"], previousValue);
      },
      onSuccess: () => {
        // Refetch the list after mutation succeeds
        queryClient.invalidateQueries(["receiptListData"]);
        toast(`해당 주문이 완료 처리 되었습니다.`);
        toast.clearWaitingQueue();
        submitFunc();
        // 애니메이션이 끝난 후 opacity를 다시 1로 설정합니다.
        setOpacity(1);
      },
    }
  );

  const submitFunc = useCallback(() => {
    queryClient.invalidateQueries(["receiptListData"]);
    queryClient.invalidateQueries(["summaryListData"]);
  }, [queryClient]);

  //영수증 관리 - 영수증 처리 상태 변경
  const ReceiptComplete = (id: number, status: number) => {
    soundEffectPlay("/sound/click_receipt.mp3");
    // Check if there are any unprocessed items
    const unprocessedItems = data.item_list.some(
      (item) =>
        item.process_status === 0 ||
        item.option_list.some((option) => option.process_status === 0)
    );

    if (unprocessedItems) {
      // If there are unprocessed items, show a toast message and return
      toast.error("처리되지 않은 영수증 항목이 있습니다.");
      return;
    }

    // 변경 전 애니메이션을 시작합니다. (opacity를 0으로 줍니다.)
    setOpacity(0);
    setTimeout(() => {
      receiptComplete.mutate({
        receipt_idx: id,
        process_status: status,
      });
    }, 500); // 여기서 700은 애니메이션에 걸리는 시간을 의미합니다. 단위는 ms입니다.
  };

  const Status = ["wait", "ing", "fin", "skip"];

  const makeClassName = useCallback((data: IMainMenutem | ISubMenuItem) => {
    const { is_product_class, process_status } = data;
    const MappingChk = is_product_class === 0 ? "unMapping" : "";
    const ProcessStatus =
      process_status === 8 ? Status[3] : Status[process_status];

    return `${MappingChk} ${ProcessStatus}`;
  }, []);

  return (
    <ReceiptWrap
      key={data.order_number}
      className={`${!data.order_memo ? "not_order_memo" : ""} ${
        showTime.length > 7 || Number(showTime.substring(0, 2)) >= 30
          ? "alert"
          : 30 > Number(showTime.substring(0, 2)) &&
            Number(showTime.substring(0, 2)) > 10
          ? "warning"
          : "safe"
      } ${opacity === 0 ? "off" : "on"}`}
      style={{ opacity }}
    >
      {/* <Pann /> */}
      <ReceiptHead
        data={data}
        onClick={() => ReceiptComplete(data.receipt_idx, 2)}
      />
      <div className="cont">
        <ul className="depth1">
          {data.item_list.map((mainMenu) => (
            <li
              key={mainMenu.receipt_item_idx}
              className={makeClassName(mainMenu)}
            >
              {/* 1DepthItem */}
              <ReceiptItem
                className={"depth1_item"}
                data={mainMenu}
                canAdd={mainMenu.is_option_add}
                submitFunc={submitFunc}
                soundEffectPlay={soundEffectPlay}
              />
              {/* 2Dpeth Start */}
              <ul className="depth2">
                {mainMenu.option_list.map((subMenu) => (
                  <li
                    key={subMenu.receipt_item_idx}
                    className={`${
                      mainMenu.is_option_add === 1 ? "addItem" : ""
                    } ${makeClassName(subMenu)}`}
                  >
                    {/* 2DepthItem */}
                    <ReceiptItem
                      className={"depth2_item"}
                      data={subMenu}
                      canAdd={mainMenu.is_option_add}
                      submitFunc={submitFunc}
                      soundEffectPlay={soundEffectPlay}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {data.order_memo && (
        <div className="footer">
          <div className="txt">{data.order_memo}</div>
        </div>
      )}
    </ReceiptWrap>
  );
}

export default React.memo(Receipt);
