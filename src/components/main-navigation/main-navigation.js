import React from 'react';
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next';

export default () => {

  const { t } = useTranslation('main-navigation');

  return (
    <ul>
      <li>
        <Link to="/">{t('main')}</Link>
      </li>
      <li>
        <Link to="/writers">{t('writers')}</Link>
      </li>
    </ul>
  );
}