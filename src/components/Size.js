import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import SelectionButton from './SelectionButton';
import Extra from './Extra';
import useSessionStorage from '../hooks/useSessionStorage';
import Venti from '../assets/size-small.svg';
import Tall from '../assets/size-medium.svg';
import Large from '../assets/size-large.svg';

const Size = ({ selectedCoffeeSizes, selectedCoffeeExtras }) => {
  const coffeeSizes = selectedCoffeeSizes;
  const coffeeExtras = selectedCoffeeExtras;
  const path = '/style';
  const { setItem, getItem } = useSessionStorage();
  const allCoffeeSizes = getItem('coffeeSizes');

  const getSizeName = (allCoffeeSizes, sizeId) => {
    const sizeObject = allCoffeeSizes.find((coffeeSize) => {
      return coffeeSize._id === sizeId;
    });

    return sizeObject.name;
  };

  const getSizes = coffeeSizes.map((sizeId, index) => {
    const sizeName = getSizeName(allCoffeeSizes, sizeId);

    return (
      <li key={index}>
        <Link to="/style/size/extra">
          <SelectionButton
            onClick={() => {
              setItem('selectedCoffeeSize', sizeName);
            }}
            image={sizeName}
            alt="coffee size"
            name={sizeName}
          />
        </Link>
      </li>
    );
  });

  return (
    <Switch>
      <Route path="/style/size/extra">
        <Extra coffeeExtras={coffeeExtras} />
      </Route>
      <Route path="/style/size">
        <Container>
          <Header path={path} selection="size" />
          <Nav>
            <ul>{getSizes}</ul>
          </Nav>
        </Container>
      </Route>
    </Switch>
  );
};

export default Size;
