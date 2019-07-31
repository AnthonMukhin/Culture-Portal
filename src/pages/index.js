import React from "react";

import Layout from "../components/layout/layout";

export default (query) => {
  const teamArray = query.data.allContentfulTeam.edges;
  const authorsArray = query.data.allContentfulAuthor.edges;
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
    edges {
      node {
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
  }
  allContentfulTeam {
    edges {
      node {
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
}
`

