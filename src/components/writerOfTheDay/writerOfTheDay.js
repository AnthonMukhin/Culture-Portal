import React from 'react';
import { Link } from 'gatsby';

import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css'
import './writerOfTheDay.css';

export default dataWriter => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation("writerOfTheDay");

  const nameForUrl = dataWriter.name.en.replace(/\s/g, '');
  return (
    <>
      <div className="container">
        <h3>{t("title")}:</h3>

        <img
          src={dataWriter.avatar.file.url}
          alt={dataWriter.name[currentLanguage]}
          style={{ width: `150px` }}
        />
        <h3>{dataWriter.name[currentLanguage]}</h3>
        <p>{dataWriter.summary[currentLanguage]}</p>
        <Link to={`/writer/${nameForUrl}`}>
          <button className="btn-primary">{t("button")}</button>
        </Link>
      </div>
    </>
  )
}
