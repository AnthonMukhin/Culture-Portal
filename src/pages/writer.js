import React from 'react';
// import ReactDOM from 'react-dom'

import Layout from '../components/layout/layout';
// import videoButton from '../components/video-modal/video';
import video from './../components/video-modal/video';
import { useTranslation } from 'react-i18next';
import '../utils/i18next';

export default () => {
  const { t } = useTranslation('layout');
  const videoLink ="https://www.youtube.com/embed/GNvCm0tK9gw";
  return (
    <Layout>
      <div>{t('watch')}</div>
      {video(videoLink)}
    </Layout>
  );
};
