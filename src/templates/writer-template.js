import React from "react";

import Layout from "../components/layout/layout";
import description from '../components/authorDescription/description';
import Gallery from '../components/gallery/gallery';
import video from './../components/video-modal/video';
import ActivityMap from "../components/activity-map/activity-map";

const WriterTemplate = (props) => {
  const writer = props.pageContext.writer;
  console.log("from writer");
  console.log(writer);
  return (
    <Layout>
            {description(writer)}
      <Gallery photos={writer.photoGallery}></Gallery>
      {video(writer.videoLink)}
      <ActivityMap coords={writer.placeOfActivity}></ActivityMap>
    </Layout>
  );
}

export default WriterTemplate;

