import React from 'react';

import Layout from '../components/layout/layout';
import Gallery from '../components/gallery/gallery';
import video from './../components/video-modal/video';
import '../utils/i18next';

export default ({location}) => {
  const writer = location.state;
  console.log('ONE WRITER:');
  console.log(writer);
  return (
    <Layout>
      <Gallery photos={writer.photoGallery}></Gallery>
      {video(writer.videoLink)}
    </Layout>
  );
};
