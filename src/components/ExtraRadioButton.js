import React from 'react';

const ExtraButton = ({ key, onClick, id, name, value, htmlFor, extraName }) => {
  return (
    <li key={key} className="bg-green w-full rounded shadow relative mb-3">
      <input
        onClick={onClick}
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

export default ExtraButton;
