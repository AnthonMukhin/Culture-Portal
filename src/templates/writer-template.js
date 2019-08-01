import React from "react";

import Layout from "../components/layout/layout";
import video from './../components/video-modal/video';

const WriterTemplate = (props) => {
  const writer = props.pageContext.writer;
  console.log("from writer");
  console.log(writer);
  return (
    <Layout>
      {video(writer.videoLink)}
    </Layout>
  );
}

export default WriterTemplate;

