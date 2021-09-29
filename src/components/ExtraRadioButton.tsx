import React, { useRef } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';
import { RadioButton } from '../types';

const ExtraRadioButton: React.FC<RadioButton> = ({
  key,
  id,
  name,
  value,
  htmlFor,
  extraName,
}) => {
  const radioButton = useRef<HTMLInputElement>(null);
  const { setItem } = useSessionStorage();

  const selectExtraOption = () => {
    if (radioButton.current !== null) {
      radioButton.current.checked = true;
      setItem(`${name}`, value);
    }
  };

  return (
    <li key={key} className="bg-green w-full rounded shadow relative mb-3">
      <input
        ref={radioButton}
        onClick={selectExtraOption}
        type="radio"
        id={id}
        name={name}
        value={value}
        className="absolute right-4 bottom-5 transform scale-150 cursor-pointer"
      />
      <label
        className="p-4 block cursor-pointer text-left"
        htmlFor={htmlFor}
        style={{ color: 'white' }}
      >
        {extraName}
      </label>
    </li>
  );
};

export default ExtraRadioButton;
