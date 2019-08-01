import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/reset.css';
import '../../styles/main.css';
import './layout.css';
import '../../styles/bootstrap.min.css'
import MainNavigation from '../../components/main-navigation/main-navigation';
import LanguageSelector from '../../components/language-selector/language-selector';
export default ({ children }) => {

  const { t } = useTranslation('layout');

  return (
    <>
      <Helmet>
        <title>Писатели</title>
      </Helmet>
      <header className='row justify-content-around align-items-center p-0'>
        <h1 className='col-3'>{t('title')}</h1>
        <MainNavigation></MainNavigation>
        <LanguageSelector></LanguageSelector>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© Awesome-random-party 2019</p>
      </footer>
    </>
  );
}


