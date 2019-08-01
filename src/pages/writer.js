import React from 'react';

import Layout from '../components/layout/layout';
import description from '../components/authorDescription/description';
import video from './../components/video-modal/video';
import '../utils/i18next';

export default ({location}) => {
  const writer = location.state;
  console.log('ONE WRITER:');
  console.log(writer);
  return (
    <Layout>
      {description(writer)}
      {video(writer.videoLink)}
    </Layout>
  );
};
