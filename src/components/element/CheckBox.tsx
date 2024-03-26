import React, {useCallback, useState} from 'react';

function CheckBox({
  checkBoxData,
  checkedList,
  setCheckedLists,
  soundEffectPlay,
}: any) {
  // const [checkedList, setCheckedLists] = useState<any[]>([]);
  // 전체 체크 클릭 시 발생하는 함수
  const onCheckedAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        const checkedListArray: any[] = [];

        checkBoxData.forEach((list: any) => checkedListArray.push(list.id));

        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [checkBoxData],
  );

  // 개별 체크 클릭 시 발생하는 함수
  const onCheckedElement = useCallback(
    (checked: boolean, list: any) => {
      soundEffectPlay('/sound/btn_menu.mp3');
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el: any) => el !== list));
      }
    },
    [checkedList],
  );

  return (
    <ul>
      {checkBoxData.map((el: any) => (
        <li key={el.id}>
          <label htmlFor={`check${el.id}`}>
            <input
              key={el.id}
              type="checkbox"
              id={`check${el.id}`}
              onChange={e => {
                e.stopPropagation();
                onCheckedElement(e.target.checked, el.id);
              }}
              checked={checkedList.includes(el.id) ? true : false}
            />
            {el.checkName}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default CheckBox;
