import React, { useState } from 'react';
import milk from '../assets/milk.svg';
import sugar from '../assets/cappuccino.svg';
import Order from './Order';

const Extra = ({ coffeeExtras }) => {
  const selectedCoffeeExtraIds = coffeeExtras;
  const allExtraOptions = JSON.parse(sessionStorage.getItem('coffeeExtras'));
  const [submitOrderClicked, setSubmitOrderClicked] = useState(false);

  // get the extra group name e.g. sugar or milk for radio buttons
  const getGroupNameRadioButtons = (extraId) => {
    switch (extraId) {
      case '60ba197c2e35f2d9c786c525':
        return 'sugar';
      case '60ba34a0c45ecee5d77a0263':
        return 'milk';
      default:
        return null;
    }
  };

  const getExtras = selectedCoffeeExtraIds.map((extraId, index) => {
    const extraName = getGroupNameRadioButtons(extraId);

    // get the imgage source for the extra
    const imageSrc = () => {
      switch (extraName) {
        case 'sugar':
          return sugar;
        case 'milk':
          return milk;
        default:
          return null;
      }
    };

    // extract from selected coffee, the ids from extra
    const selectedCoffeeExtras = allExtraOptions.filter((extraOptions) => {
      return extraOptions._id === extraId;
    });

    // extract the name and extra options e.g. sugar and or milk
    const { name, subselections: extraOptions } = selectedCoffeeExtras[0];

    // get the radio button values per extra
    const getExtraOptions = extraOptions.map((extraOption, index) => {
      const { name } = extraOption;

      // checking radio button + storing choice into session storage
      const checkRadioButton = (e) => {
        e.target.checked = true;
        sessionStorage.setItem(`${extraName}`, name);
      };

      return (
        <li
          key={index}
          className="bg-green w-full rounded shadow relative mb-3"
        >
          <input
            onClick={(e) => {
              checkRadioButton(e);
            }}
            type="radio"
            id={name}
            name={extraName}
            value={name}
            className="absolute right-4 bottom-5 transform scale-150 cursor-pointer"
          />
          <label
            className="p-4 block cursor-pointer"
            htmlFor={name}
            style={{ color: 'white' }}
          >
            {name}
          </label>
        </li>
      );
    });

    return (
      <li key={index} className="h-auto overflow-y-hidden">
        <button
          id={index}
          onClick={() => {
            document.getElementById(index).style.height = 'auto';
          }}
          className="block bg-green-light w-full p-6 rounded shadow mb-2 overflow-y-hidden h-24"
          style={{ transition: 'height 3s ease-in-out' }}
        >
          <div className="w-full text-left flex justify-start items-center">
            <i className="w-12 h-12 bg-green-dark inline-block rounded-full overflow-hidden relative mr-4">
              <img
                className="absolute right-0 bottom-0 left-0"
                src={imageSrc()}
                alt={getGroupNameRadioButtons(extraId)}
              />
            </i>
            <span style={{ color: 'white' }}>{name}</span>
          </div>
          <div className="w-full mt-5">
            <br />
            <hr style={{ color: 'white' }} />
            <br />
            <ul>{getExtraOptions}</ul>
          </div>
        </button>
      </li>
    );
  });

  const renderExtras = () => {
    return (
      <div className="bg-gray-200">
        <main className="container mx-auto bg-white min-h-screen overflow-x-hidden">
          <header className="p-5">
            <h5 className="font-extrabold">{'<'} Brew with Lex</h5>
            <h2 className="text-2xl">Select your extra's</h2>
          </header>
          <nav className="px-5">
            <ul>{getExtras}</ul>
            <button
              className="bg-green-dark rounded px-4 py-3 mt-4 mb-6 active:transform active:scale-95"
              style={{ color: 'white' }}
              onClick={() => {
                setSubmitOrderClicked(true);
              }}
            >
              Submit order
            </button>
          </nav>
        </main>
      </div>
    );
  };

  return !submitOrderClicked ? renderExtras() : <Order />;
};

export default Extra;
