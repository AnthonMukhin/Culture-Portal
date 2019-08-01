import React from "react";
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css'
import './description.css';

export default (writer) => {

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  console.log(writer.name, 'writer');
  return (
    <div className="container">
      <div className='btn-group col-12 align-items-center row'>
        <div className="author-photo-container col-4">
          <img src={writer.avatar.file.url} className="author-photo" alt="" />
        </div>
        <div className="author-description col-8">
          <h3>{writer.name[currentLang]}</h3>
          <p>{writer.summary[currentLang]}</p>
        </div>
      </div>
    </div>
  );
}
