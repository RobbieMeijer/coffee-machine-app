import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import SelectionButton from './SelectionButton';
import Size from './Size';
import useSessionStorage from '../hooks/useSessionStorage';
import useGetImage from '../hooks/useGetImage';

const Style = () => {
  const { setItem, getItem } = useSessionStorage();
  const { getImage } = useGetImage(); // added custom hook
  const coffeeTypeList = getItem('coffee types');
  const [selectedCoffeeSizes, setSelectedCoffeeSizes] = useState([]);
  const [selectedCoffeeExtras, setSelectedCoffeeExtras] = useState([]);

  const getCoffeeTypes = coffeeTypeList.map((type, index) => {
    const { name, sizes, extras } = type;

    return (
      <li key={index}>
        <Link to="/style/size">
          <SelectionButton
            onClick={() => {
              setItem('selected coffee name', name);
              setSelectedCoffeeSizes(sizes);
              setSelectedCoffeeExtras(extras);
            }}
            src={getImage(name)}
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
