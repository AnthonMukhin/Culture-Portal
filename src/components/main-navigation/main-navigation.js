import React from 'react';
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next';

export default () => {

  const { t } = useTranslation('main-navigation');

  return (
    <div className='btn-group m-0 col-4 align-items-center'>
      <Link to="/" className='btn btn-outline-info' activeClassName="btn btn-info" style={{ color: 'white', fontWeight: 'bold' }}>{t('main')}</Link>
      <Link to="/writers" className='btn btn-outline-info' activeClassName="btn btn-info" style={{ color: 'white', fontWeight: 'bold' }}>{t('writers')}</Link>
    </div>
  );
}