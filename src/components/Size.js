import React, { useState } from 'react';
import Extra from './Extra';
import Venti from '../assets/size-small.svg';
import Tall from '../assets/size-medium.svg';
import Large from '../assets/size-large.svg';

const Size = ({ selectedCoffeeSizes, selectedCoffeeExtras }) => {
  const coffeeSizes = selectedCoffeeSizes;
  const coffeeExtras = selectedCoffeeExtras;
  const [coffeeSizeClicked, setCoffeeSizeClicked] = useState(false);

  const getSizeName = (id) => {
    switch (id) {
      case '60ba33dbc45ecee5d77a01f8':
        return 'Tall';
      case '60ba3368c45ecee5d77a016b':
        return 'Venti';
      case '60ba18d13ca8c43196b5f606':
        return 'Large';
      default:
        return null;
    }
  };

  const getSizes = coffeeSizes.map((size, index) => {
    const sizeName = getSizeName(size);

    const getImage = () => {
      switch (sizeName) {
        case 'Tall':
          return Tall;
        case 'Venti':
          return Venti;
        case 'Large':
          return Large;
        default:
          return null;
      }
    };

    return (
      <li key={index}>
        <button
          onClick={() => {
            sessionStorage.setItem('selectedCoffeeSize', sizeName);
            setCoffeeSizeClicked(true);
          }}
          className="bg-green-light w-full text-left flex justify-start items-center p-6 rounded shadow mb-2"
        >
          <i className="w-12 h-12 bg-green-dark inline-block rounded-full overflow-hidden relative mr-4">
            <img
              className="absolute inset-1/4 -bottom-px"
              src={getImage()}
              alt="coffee size"
            />
          </i>
          <span style={{ color: 'white' }}>{sizeName}</span>
        </button>
      </li>
    );
  });

  const renderSizes = () => {
    return (
      <div className="bg-gray-200">
        <main className="container mx-auto bg-white min-h-screen overflow-x-hidden">
          <header className="p-5">
            <h5 className="font-extrabold">{'<'} Brew with Lex</h5>
            <h2 className="text-2xl">Select your size</h2>
          </header>
          <nav className="px-5">
            <ul>{getSizes}</ul>
          </nav>
        </main>
      </div>
    );
  };

  return !coffeeSizeClicked ? (
    renderSizes()
  ) : (
    <Extra coffeeExtras={coffeeExtras} />
  );
};

export default Size;
