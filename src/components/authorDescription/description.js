import React from "react";
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import '../../styles/bootstrap.min.css'
import './description.css';

export default ({children}) => {
  return (
    <div className='btn-group m-0 col-4 align-items-center'>
      <div className="">
        <img src="" className="author-photo"></img>
      </div>
      <div className="author-description">
        <h3>{author.name}</h3>
        <p>{author.summury}</p>
      </div>
    </div>
  );
}
