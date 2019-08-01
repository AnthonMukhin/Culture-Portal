import React from 'react';
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next';

export default (props) => {
  const authorsArray = props.authorsArray;
  const { t } = useTranslation('main-navigation');

  return (
    <ul>
      <li>
        <Link to="/">{t('main')}</Link>
      </li>
      <li>
        <Link state={[authorsArray]} to="/writers">{t('writers')}</Link>
      </li>
    </ul>
  );
}
