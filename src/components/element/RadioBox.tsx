import React from 'react';

interface IRadioData {
  label: string;
  value: string;
}

interface IRadio {
  radioData: IRadioData[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioBox({radioData, handleChange}: IRadio) {
  return (
    <ul>
      {radioData.map((el: IRadioData) => (
        <li key={el.value}>
          <input
            type="radio"
            id={el.value}
            name="sort"
            value={el.value}
            onChange={handleChange}
            defaultChecked={el.value === 'processing' ? true : false}
          />
          <label htmlFor={el.value}>{el.label}</label>
        </li>
      ))}
    </ul>
  );
}

export default RadioBox;
