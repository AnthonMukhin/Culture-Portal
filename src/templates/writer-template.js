import React from "react";

import Layout from "../components/layout/layout";
import Gallery from '../components/gallery/gallery';
import video from './../components/video-modal/video';
import ActivityMap from "../components/activity-map/activity-map";
import Timeline from "../components/timeline/timeline";

const WriterTemplate = (props) => {
  const writer = props.pageContext.writer;
  console.log("from writer");
  console.log(writer);
  return (
    <Layout>
      <Timeline biography={writer.biographyTimeline}></Timeline>
      <Gallery photos={writer.photoGallery}></Gallery>
      {video(writer.videoLink)}
      <ActivityMap coords={writer.placeOfActivity}></ActivityMap>
    </Layout>
  );
}

export default WriterTemplate;

