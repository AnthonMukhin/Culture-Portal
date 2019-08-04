import React from 'react';
import { Link } from 'gatsby';

import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css';
import '../../styles/writers.css';

export default dataWriter => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation('writerOfTheDay');

  const nameForUrl = dataWriter.name.en.replace(/\s/g, '');
  const divStyle={
    backgroundImage: `url(${dataWriter.avatar.file.url})`
  };
  return (
    <>
      <h3>{t("title")}:</h3>
      <div className="card mb-3 col-12 ml-auto mr-auto">
        <div className="row no-gutters" style={{height: '100%'}}>
          <div className="image-container col-xl-5 row align-items-start justify-content-center">
            <div className="card-img" style={divStyle}>
              <img src={dataWriter.avatar.file.url} alt="writersAvatar"/>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card-body d-flex row justify-content-between" style={{height: '100%'}}>
              <h5 className="card-title">{dataWriter.name[currentLanguage]}</h5>
              <p className="card-text">{dataWriter.summary[currentLanguage]}</p>
              <Link to={`/writer/${nameForUrl}`} className="card-text button-container align-self-end">
              <button className="btn btn-info">{t('button')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
