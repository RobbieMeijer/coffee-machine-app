import React from 'react';

const SelectionButton = ({ onClick, image, alt, name }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-light w-full text-left flex justify-start items-center p-6 rounded shadow mb-2"
    >
      <i className="w-12 h-12 bg-green-dark inline-block rounded-full overflow-hidden relative mr-4">
        <img className="absolute inset-1/4 -bottom-px" src={image} alt={alt} />
      </i>
      <span style={{ color: 'white' }}>{name}</span>
    </button>
  );
};

export default SelectionButton;
