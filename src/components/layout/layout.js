import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import styles from './layout.module.css';
import MainNavigation from '../../components/main-navigation/main-navigation';
import LanguageSelector from '../../components/language-selector/language-selector';
export default ({ children }) => {

  const { t } = useTranslation('layout');

  return (
    <>
      <Helmet>
        <title>Писатели</title>
      </Helmet>
      <header>
        <h2>{t('title')}</h2>
        <LanguageSelector></LanguageSelector>
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
  
  
  