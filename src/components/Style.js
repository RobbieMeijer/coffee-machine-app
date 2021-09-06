import React, { useState } from 'react';
import Size from './Size';
import Ristretto from '../assets/size-medium.svg';
import Cappuccino from '../assets/cappuccino.svg';
import Espresso from '../assets/espresso.svg';

const Style = () => {
  const coffeeTypeList = JSON.parse(sessionStorage.getItem('coffeeTypes'));
  const [coffeeTypeClicked, setCoffeeTypeClicked] = useState(false);
  const [selectedCoffeeSizes, setSelectedCoffeeSizes] = useState([]);
  const [selectedCoffeeExtras, setSelectedCoffeeExtras] = useState([]);

  const getImage = (name) => {
    switch (name) {
      case 'Cappuccino':
        return Cappuccino;
      case 'Espresso':
        return Espresso;
      case 'Ristretto':
        return Ristretto;
      default:
        return null;
    }
  };

  const getCoffeeTypes = coffeeTypeList.map((type, index) => {
    const { _id: id, name, sizes, extras } = type;

    return (
      <li key={index}>
        <button
          onClick={() => {
            sessionStorage.setItem('selectedCoffeeName', JSON.stringify(name));
            setSelectedCoffeeSizes(sizes);
            setSelectedCoffeeExtras(extras);
            setCoffeeTypeClicked(true);
          }}
          className="bg-green-light w-full text-left flex justify-start items-center p-6 rounded shadow mb-2"
        >
          <i className="w-12 h-12 bg-green-dark inline-block rounded-full overflow-hidden relative mr-4">
            <img
              className="absolute inset-1/4 -bottom-px"
              src={getImage(name)}
              alt="coffee style"
            />
          </i>
          <span style={{ color: 'white' }}>{name}</span>
        </button>
      </li>
    );
  });

  const renderCoffeeTypes = () => {
    return (
      <div className="bg-gray-200">
        <main className="container mx-auto bg-white min-h-screen overflow-x-hidden">
          <header className="p-5">
            <h5 className="font-extrabold">{'<'} Brew with Lex</h5>
            <h2 className="text-2xl">Select your style</h2>
          </header>
          <nav className="px-5">
            <ul>{getCoffeeTypes}</ul>
          </nav>
        </main>
      </div>
    );
  };

  return !coffeeTypeClicked ? (
    renderCoffeeTypes()
  ) : (
    <Size
      selectedCoffeeSizes={selectedCoffeeSizes}
      selectedCoffeeExtras={selectedCoffeeExtras}
    />
  );
};

export default Style;
