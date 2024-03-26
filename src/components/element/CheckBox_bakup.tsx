import {useCallback, useState} from 'react';

function KdsCheckBox({checkBoxData}: any) {
  const [checkedList, setCheckedLists] = useState<any[]>([]);
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
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el: any) => el !== list));
      }
    },
    [checkedList],
  );

  return (
    <>
      <li>
        <input
          type="checkbox"
          id="check0"
          onChange={e => onCheckedAll(e.target.checked)}
          checked={
            checkedList.length === 0
              ? false
              : checkedList.length === checkBoxData.length
              ? true
              : false
          }
        />{' '}
        <label htmlFor={`check0`}>All</label>
      </li>
      {checkBoxData.map((el: any) => (
        <li key={el.id}>
          <input
            key={el.id}
            type="checkbox"
            id={`check${el.id}`}
            onChange={e => onCheckedElement(e.target.checked, el.id)}
            checked={checkedList.includes(el.id) ? true : false}
          />
          <label htmlFor={`check${el.id}`}>{el.checkName}</label>
        </li>
      ))}
    </>
  );
}

export default KdsCheckBox;
