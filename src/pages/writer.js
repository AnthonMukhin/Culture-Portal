import React from 'react';
// import ReactDOM from 'react-dom'

import Layout from '../components/layout/layout';
// import videoButton from '../components/video-modal/video';
import video from './../components/video-modal/video';

export default () => {
  const videoLink ="https://www.youtube.com/embed/GNvCm0tK9gw";
  return (
    <Layout>
      {video(videoLink)}
    </Layout>
  );
};
