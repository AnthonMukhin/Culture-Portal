import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { languages } from '../../locales/index';

export default () => {

  const { i18n } = useTranslation();

  const options = Object.keys(languages).map((language, index) =>
    <option key={index} value={language}>{language}</option>)

  const handleOnChange = (event) => {
    const language = event.target.value;
    i18next.changeLanguage(language);
  }

  return (
    <select onChange={handleOnChange} value={i18n.language}>
      {options}
    </select>
  );
}
