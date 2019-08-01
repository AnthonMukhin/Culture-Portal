import React from 'react';

import Layout from '../components/layout/layout';
import video from './../components/video-modal/video';
import { useTranslation } from 'react-i18next';
import '../utils/i18next';

export default ({location}) => {
  console.log('ONE WRITER:');
  console.log(location.state);
  const { t } = useTranslation('layout');
  const videoLink ="https://www.youtube.com/embed/GNvCm0tK9gw";
  return (
    <Layout>
      <div>{t('watch')}</div>
      {video(videoLink)}
    </Layout>
  );
};
