import React from "react";
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css'
import './works.css';

export default (worksList) => {

  const { i18n } = useTranslation();
  const { t } = useTranslation('works');
  const currentLang = i18n.language;

  const worksContainer = () => {
    const list = worksList.map((elem, index) => {
      return (
      <li className="work" key={elem.date}>
        {elem.date}&nbsp; — &nbsp;{elem.event[currentLang]}
      </li>
      );
    });

    return (
      <ul className="works-list col-12">
        {list}
      </ul>
    );
  }

  return (
    <div className="container">
      <h3>{t('title')}</h3>
      {worksContainer()}
    </div>
  );
}
