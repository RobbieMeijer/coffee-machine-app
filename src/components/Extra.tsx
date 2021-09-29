import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Nav from './Nav';
import ExtraButton from './ExtraButton';
import Order from './Order';
import useSessionStorage from '../hooks/useSessionStorage';
import useGetName from '../hooks/useGetName';
import useGetImage from '../hooks/useGetImage';
import { ExtraProps } from '../types';

const Extra: React.FC<ExtraProps> = ({ coffeeExtras }) => {
  const selectedCoffeeExtraIds = coffeeExtras;
  const { getItem } = useSessionStorage();
  const allExtraOptions = getItem('coffee extras');
  const { getName } = useGetName(); // added custom hook
  const { getImage } = useGetImage(); // added custom hook

  const renderExtraButtons = selectedCoffeeExtraIds.map((extraId, index) => {
    const extraName = getName(allExtraOptions, extraId);

    // 1. extract from selected coffee, the ids from extra
    const selectedCoffeeExtras = allExtraOptions.find(
      (extraOptions: { _id: string }) => {
        return extraOptions._id === extraId;
      }
    );

    // 2. extract from selected coffee,
    // the name and extra options e.g. sugar and or milk
    const { name, subselections } = selectedCoffeeExtras;

    return (
      <ExtraButton
        key={index}
        id={`${index}`}
        onClick={() => {
          const el: any = document.getElementById(`${index}`);
          el.style.height = 'auto';
        }}
        src={getImage(name)}
        alt={extraName}
        name={name}
        extraOptions={subselections} // 3. pass extra's from selected coffee to extrabutton component
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
            <ul>{renderExtraButtons}</ul>
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
