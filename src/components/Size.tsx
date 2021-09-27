import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import SelectionButton from './SelectionButton';
import Extra from './Extra';
import useSessionStorage from '../hooks/useSessionStorage';
import useGetName from '../hooks/useGetName';
import useGetImage from '../hooks/useGetImage';
import { SizeProps } from '../types';

const Size: React.FC<SizeProps> = ({
  selectedCoffeeSizes,
  selectedCoffeeExtras,
}) => {
  const path = '/style';
  const { setItem, getItem } = useSessionStorage();
  const allCoffeeSizes = getItem('coffee sizes');
  const { getName } = useGetName(); // added custom hook
  const { getImage } = useGetImage(); // added custom hook

  const getSizes = selectedCoffeeSizes.map((sizeId, index) => {
    const sizeName = getName(allCoffeeSizes, sizeId);

    return (
      <li key={index}>
        <Link to="/style/size/extra">
          <SelectionButton
            onClick={() => {
              setItem('selected coffee size', sizeName);
            }}
            src={getImage(sizeName)}
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
        <Extra coffeeExtras={selectedCoffeeExtras} />
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
