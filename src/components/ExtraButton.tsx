import React, { useRef } from 'react';
import ExtraRadioButton from './ExtraRadioButton';
import { ButtonExtraOption } from '../types';

const ExtraButton: React.FC<ButtonExtraOption> = ({
  key,
  id,
  src,
  alt,
  name,
  extraOptions,
}) => {
  const extraButton = useRef<HTMLButtonElement>(null);

  const toggleExtraButton = () => {
    if (extraButton.current !== null) {
      extraButton.current.style.height = 'auto';
    }
  };

  // extract from selected coffee, the radio button values per extra
  const renderExtraRadioButtons = extraOptions.map((extraOption, index) => {
    const { name } = extraOption;

    return (
      <ExtraRadioButton
        key={index}
        id={name}
        name={alt}
        value={name}
        htmlFor={name}
        extraName={name}
      />
    );
  });

  return (
    <li key={`btn-extra-${key}`} className="h-auto overflow-y-hidden">
      <button
        ref={extraButton}
        id={id}
        onClick={toggleExtraButton}
        className="block bg-green-light w-full p-6 rounded shadow mb-2 overflow-y-hidden h-24"
        style={{ transition: 'height 3s ease-in-out' }}
      >
        <div className="w-full text-left flex justify-start items-center">
          <i className="w-12 h-12 bg-green-dark inline-block rounded-full overflow-hidden relative mr-4">
            <img
              className="absolute right-0 bottom-0 left-0"
              src={src}
              alt={alt}
            />
          </i>
          <span style={{ color: 'white' }}>{name}</span>
        </div>
        <div className="w-full mt-5">
          <br />
          <hr style={{ color: 'white' }} />
          <br />
          <ul>{renderExtraRadioButtons}</ul>
        </div>
      </button>
    </li>
  );
};

export default ExtraButton;
