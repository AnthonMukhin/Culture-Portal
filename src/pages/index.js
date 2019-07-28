import React from "react";
import { graphql } from 'gatsby';



export default ({data}) => {
  const writersArray = data.allContentfulAuthor.edges;
  return (
    <>
      <p>{JSON.stringify(writersArray)}</p>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulAuthor {
    edges {
      node {
        name {
          by
          en
          ru
          id
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
        photoGallery {
          description {
            by
            ru
            en
          }
          link
        }
        placeOfActivity {
          lat
          lon
        }
        videoLink
      }
    }
  }
}
`
