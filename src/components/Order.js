import React from 'react';

const Order = () => {
  const style = sessionStorage.getItem('selectedCoffeeName');
  const size = sessionStorage.getItem('selectedCoffeeSize');
  const sugar = sessionStorage.getItem('sugar');
  const milk = sessionStorage.getItem('milk');

  return (
    <div className="bg-gray-200">
      <main className="container mx-auto bg-white min-h-screen overflow-x-hidden">
        <header className="p-5">
          <h5 className="font-extrabold">{'<'} Brew with Lex</h5>
          <h2 className="text-2xl">Thank you for your order!</h2>
        </header>
        <article className="p-5">
          <h4 className="text-xl font-semibold">Your order:</h4>
          <p>Style: {style}</p>
          <p>Size: {size}</p>
          <p>Sugar: {sugar}</p>
          <p>Milk: {milk}</p>
        </article>
      </main>
    </div>
  );
};

export default Order;
