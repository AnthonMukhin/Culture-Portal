import React from "react";

import Layout from "../components/layout/layout";
import ActivityMap from "../components/activity-map/activity-map";

export default () => { 
  return (
    <Layout>
      <ActivityMap coords={{lat: 53.24, lon: 26.50}}></ActivityMap>
    </Layout>
  );
};