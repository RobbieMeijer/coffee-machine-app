import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <main className="container mx-auto bg-white min-h-screen overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Container;
