import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import SelectionButton from './SelectionButton';
import Extra from './Extra';
import Venti from '../assets/size-small.svg';
import Tall from '../assets/size-medium.svg';
import Large from '../assets/size-large.svg';

const Size = ({ selectedCoffeeSizes, selectedCoffeeExtras }) => {
  const coffeeSizes = selectedCoffeeSizes;
  const coffeeExtras = selectedCoffeeExtras;
  const path = '/style';

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
        <Link to="/style/size/extra">
          <SelectionButton
            onClick={() => {
              sessionStorage.setItem('selectedCoffeeSize', sizeName);
            }}
            image={getImage()}
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
