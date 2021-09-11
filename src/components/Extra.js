import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import ExtraButton from './ExtraButton';
import ExtraRadioButton from './ExtraRadioButton';
import Order from './Order';
import useSessionStorage from '../hooks/useSessionStorage';
import useGetName from '../hooks/useGetName';
import useGetImage from '../hooks/useGetImage';

const Extra = ({ coffeeExtras }) => {
  const selectedCoffeeExtraIds = coffeeExtras;
  const { setItem, getItem } = useSessionStorage();
  const allExtraOptions = getItem('coffee extras');
  const { getName } = useGetName(); // added custom hook
  const { getImage } = useGetImage(); // added custom hook

  const getExtras = selectedCoffeeExtraIds.map((extraId, index) => {
    const extraName = getName(allExtraOptions, extraId);

    // 1. extract from selected coffee, the ids from extra
    const selectedCoffeeExtras = allExtraOptions.filter((extraOptions) => {
      return extraOptions._id === extraId;
    });

    // 2. extract from selected coffee,
    // the name and extra options e.g. sugar and or milk
    const { name, subselections: extraOptions } = selectedCoffeeExtras[0];

    // 3. extract from selected coffee, the radio button values per extra
    const getExtraOptions = extraOptions.map((extraOption, index) => {
      const { name } = extraOption;

      // checking radio button + storing choice into session storage
      const checkRadioButton = (e) => {
        e.target.checked = true;
        setItem(`${extraName}`, name);
      };

      return (
        <ExtraRadioButton
          key={index}
          onClick={(e) => {
            checkRadioButton(e);
          }}
          id={name}
          name={extraName}
          value={name}
          htmlFor={name}
          extraName={name}
        />
      );
    });

    return (
      <ExtraButton
        key={index}
        id={index}
        onClick={() => {
          document.getElementById(index).style.height = 'auto';
        }}
        src={getImage(name)}
        alt={extraName}
        name={name}
        getExtraOptions={getExtraOptions}
      />
    );
  });

  return (
    <Switch>
      <Route path="/style/size/extra/order">
        <Order />
      </Route>
      <Route path="/style/size/extra">
        <Container>
          <Header path="/style/size" selection="extra's" />
          <Nav>
            <ul>{getExtras}</ul>
            <Link to="/style/size/extra/order">
              <button
                className="bg-green-dark rounded px-4 py-3 mt-4 mb-6 active:transform active:scale-95"
                style={{ color: 'white' }}
              >
                Submit order
              </button>
            </Link>
          </Nav>
        </Container>
      </Route>
    </Switch>
  );
};

export default Extra;
