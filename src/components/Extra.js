import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import ExtraButton from './ExtraButton';
import ExtraRadioButton from './ExtraRadioButton';
import useSessionStorage from '../hooks/useSessionStorage';
import milk from '../assets/milk.svg';
import sugar from '../assets/cappuccino.svg';
import Order from './Order';

const Extra = ({ coffeeExtras }) => {
  const { setItem, getItem } = useSessionStorage();
  const selectedCoffeeExtraIds = coffeeExtras;
  const allExtraOptions = getItem('coffeeExtras');

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
        src={imageSrc()}
        alt={getGroupNameRadioButtons(extraId)}
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
