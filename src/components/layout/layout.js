import React from "react";
import Helmet from 'react-helmet';

import styles from './layout.module.css';
import MainNavigation from '../../components/main-navigation/main-navigation';

export default ({ children }) => {

  return (
    <>
      <Helmet>
        <title>Писатели</title>
      </Helmet>
      <header>
        <h2>Писатели Беларуси</h2>
        <MainNavigation></MainNavigation>
        <hr></hr>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        <hr></hr>
        <p>© Awesome-random-party 2019</p>
      </footer>
    </>
  );
}
  
  
  