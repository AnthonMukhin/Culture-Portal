import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import './videoModal.css';

export default (videoLink) => {
  const [isVideo, setVideoStatus] = useState(false);
  const { t } = useTranslation('video');
  return (
    <div className='row justify-content-center col-12 p-0 m-0'>
    <button className="btn btn-info col-md-5 col-xl-3 col-7" onClick={() => setVideoStatus(!isVideo)}>{t('watch')}</button>
    {isVideo &&
      ReactDOM.createPortal(
        <div>
          <div>
          <button className="col-1 btn btn-info" onClick={() => setVideoStatus(!isVideo)}>{t('close')}</button>
          <iframe
            title="writer-video"
            width="100%"
            height="100%"
            src={videoLink}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
      </div>,
        document.getElementById('portal')
      )
    }
    </div>
  )
}
