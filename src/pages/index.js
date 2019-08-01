import React from "react";

import Layout from "../components/layout/layout";

export default (query) => {
  const authorsArray = query.data.allContentfulAuthor.nodes;
  const teamArray = query.data.allContentfulTeam.nodes;
  console.log(authorsArray);
  console.log(teamArray);
  return (
    <Layout authorsArray={authorsArray}></Layout>
  );
};

export const query = graphql`
query MyQuery {
  allContentfulAuthor {
    totalCount
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
      placeOfBirth {
        by
        en
        ru
      }
      yearsOfLife
      avatar {
        file {
          url
        }
      }
      biographyTimeline {
        date
        event {
          by
          en
          ru
        }
      }
      listOfArtistsWorks {
        date
        event {
          by
          en
          ru
        }
      }
      photoGallery {
        link
        description {
          by
          en
          ru
        }
      }
      videoLink
      placeOfActivity {
        lat
        lon
      }
    }
  }
  allContentfulTeam {
    nodes {
      id
      name {
        by
        en
        ru
      }
      photoLink
      githubLink
      contribution {
        by
        en
        ru
      }
    }
  }
}
`

