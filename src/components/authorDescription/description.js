import React from "react";
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css'
import './description.css';

export default (writer) => {

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const divStyle = {
    backgroundImage: `url('${writer.avatar.file.url}')`
  };
  const photoStyle = {
    opacity: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div className="container">
      <div className='author-review col-12 row'>
        <div className="author-photo-container col-xl-4 col-lg-4 col-md-12">
          <div className="author-photo" style={divStyle}>
          <img src={writer.avatar.file.url} className="photo" style={photoStyle} alt="" />
          </div>
        </div>
        <div className="author-description col-xl-8 col-lg-8 col-md-12">
          <h3>{writer.name[currentLang]}</h3>
          <p>{'— ' + writer.summary[currentLang]}</p>
        </div>
      </div>
    </div>
  );
}
