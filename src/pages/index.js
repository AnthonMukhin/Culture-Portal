import React from "react";

import Layout from "../components/layout/layout";

export default ({data}) => {
  const authorsArraySummary = data.allContentfulAuthor.nodes;
  console.log("from index :");
  console.log(authorsArraySummary);
  return (
    <Layout></Layout>
  );
};

export const query = graphql`
query MyQuery {
  allContentfulAuthor {
    totalCount
    nodes {
      avatar {
        file {
          url
        }
      }
      summary {
        by
        en
        ru
      }
      name {
        by
        en
        ru
      }
    }
  }
}
`

