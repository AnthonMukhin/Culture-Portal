import React from "react";

import Layout from "../components/layout/layout";
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
      {video(writer.videoLink)}
      <ActivityMap coords={writer.placeOfActivity}></ActivityMap>
    </Layout>
  );
}

export default WriterTemplate;

