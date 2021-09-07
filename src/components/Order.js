import React from 'react';
import Container from './Container';
import Header from './Header';

const Order = () => {
  const style = sessionStorage.getItem('selectedCoffeeName');
  const size = sessionStorage.getItem('selectedCoffeeSize');
  const sugar = sessionStorage.getItem('sugar');
  const milk = sessionStorage.getItem('milk');

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
