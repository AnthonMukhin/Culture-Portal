import React from 'react';
import { Link } from "gatsby";

export default () => {

  return (
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/writers">Авторы</Link>
      </li>
    </ul>
  );
}