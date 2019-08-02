import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout/layout";

export default ({ data }) => {
  const authorsArraySummary = data.allContentfulAuthor.nodes;
  const teamUnit = data.allContentfulTeam.nodes;
  console.log('fron INDEX.JS:');
  console.log(authorsArraySummary);
  console.log(teamUnit);
  return (
    <Layout></Layout>
  );
};

export const query = graphql`
query MyQuery {
  allContentfulAuthor {
    nodes {
      id
      name {
        by
        en
        ru
      }
      summary {
        by
        en
        ru
      }
      avatar {
        file {
          url
        }
      }
    }
  }
  allContentfulTeam {
    nodes {
      contribution {
        by
        en
        ru
      }
      githubLink
      id
      name {
        by
        en
        ru
      }
      photoLink
    }
  }
}
`

