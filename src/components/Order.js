import React from 'react';
import Container from './Container';
import Header from './Header';
import useSessionStorage from '../hooks/useSessionStorage';

const Order = () => {
  const { getItem } = useSessionStorage();
  const style = getItem('selectedCoffeeName');
  const size = getItem('selectedCoffeeSize');
  const sugar = getItem('sugar');
  const milk = getItem('milk');

  return (
    <Container>
      <Header path="/style/size/extra/" selection="extra's" />
      <article className="p-5">
        <h4 className="text-xl font-semibold">Your order:</h4>
        <p>Style: {style}</p>
        <p>Size: {size}</p>
        <p>Sugar: {sugar}</p>
        <p>Milk: {milk}</p>
      </article>
    </Container>
  );
};

export default Order;
