import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import SelectionButton from './SelectionButton';
import Size from './Size';
import Ristretto from '../assets/size-medium.svg';
import Cappuccino from '../assets/cappuccino.svg';
import Espresso from '../assets/espresso.svg';

const Style = () => {
  const coffeeTypeList = JSON.parse(sessionStorage.getItem('coffeeTypes'));
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
        <Link to="/style/size">
          <SelectionButton
            onClick={() => {
              sessionStorage.setItem(
                'selectedCoffeeName',
                JSON.stringify(name)
              );
              setSelectedCoffeeSizes(sizes);
              setSelectedCoffeeExtras(extras);
            }}
            image={getImage(name)}
            alt="coffee style"
            name={name}
          />
        </Link>
      </li>
    );
  });

  return (
    <Switch>
      <Route path="/style/size">
        <Size
          selectedCoffeeSizes={selectedCoffeeSizes}
          selectedCoffeeExtras={selectedCoffeeExtras}
        />
      </Route>
      <Route path="/style">
        <Container>
          <Header path="/" selection="style" />
          <Nav>
            <ul>{getCoffeeTypes}</ul>
          </Nav>
        </Container>
      </Route>
    </Switch>
  );
};

export default Style;
