import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout/layout";

export const queryTeam = graphql`
query MyQueryTeam {
  allContentfulTeam {
    nodes {
      contribution {
        by
        en
        ru
      }
      photoLink
      githubLink
      name {
        by
        en
        ru
      }
    }
  }
}
`

export default ({data}) => {
  const dataTeam = data.allContentfulTeam.nodes;
  return (
    <Layout>
    </Layout>
  );
};
