import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Style from './Style';
import Container from './Container';
import theData from '../api/darkRoastedBeans';
import useFetchData from '../hooks/useFetchData';
import useSessionStorage from '../hooks/useSessionStorage';
import coffeeMachine from '../assets/coffee-machine.svg';
import nfc from '../assets/nfc.svg';

const App: React.FC = () => {
  const { loading, error, data } = useFetchData(theData); // custom hook
  const { setItem } = useSessionStorage(); // custom hook
  const [animationCoffeeMachine, setAnimationCoffeeMachine] = useState('');
  const [animationNfc, setAnimationNfc] = useState('');

  useEffect(() => {
    if (data !== null) {
      const { types, sizes, extras } = data;

      setItem('coffee types', types);
      setItem('coffee sizes', sizes);
      setItem('coffee extras', extras);

      setTimeout(() => {
        setAnimationCoffeeMachine('translateX(125%)');
        setAnimationNfc('translateX(-155%)');
      }, 400);
    }
  }, [data]);

  // refactored conditional rendering + added error render
  return (
    <Switch>
      <Route path="/style">
        <Style />
      </Route>
      <Route path="/">
        {loading && <div className="absolute inset-1/3">...loading</div>}
        {error && <div className="absolute inset-1/3">{error}</div>}
        {data && (
          <Container>
            <header className="p-5">
              <h5 className="font-extrabold">Dark Roasted Beans</h5>
              <h2 className="text-2xl">Tab the machine to start</h2>
            </header>
            <Link to="/style">
              <nav className="w-full h-full mt-14 mb-10 relative cursor-pointer">
                <img
                  className="z-0 absolute top-0 -left-full"
                  style={{
                    transition: 'all .6s ease-in-out',
                    transform: animationCoffeeMachine,
                  }}
                  src={coffeeMachine}
                  alt="coffee machine"
                />
                <img
                  className="z-10 absolute top-0 -right-full"
                  style={{
                    transition: 'all 1.2s ease-in-out',
                    transform: animationNfc,
                  }}
                  src={nfc}
                  alt="nfc"
                />
              </nav>
            </Link>
            <button className="p-5 underline absolute bottom-12">
              How does this work
            </button>
          </Container>
        )}
      </Route>
    </Switch>
  );
};

export default App;
