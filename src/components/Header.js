import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ path, selection }) => {
  let history = useHistory();

  const goBack = () => {
    history.push(path);
  };

  return (
    <header className="p-5">
      <Link to={path}>
        <h5
          onClick={goBack}
          className="font-extrabold cursor-pointer inline-block"
        >
          {'<'} Brew with Lex
        </h5>
      </Link>
      <h2 className="text-2xl">Select your {selection}</h2>
    </header>
  );
};

export default Header;
