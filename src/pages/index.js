import React from "react";
import { graphql } from 'gatsby';


export const query = graphql`
query MyQuery {
  __typename
  contentfulWriter {
    name
    yearsOfLife
    youTubeLink
    location {
      lat
      lon
    }
    photoGallery {
      internal {
        content
      }
    }
    photoWriter {
      file {
        url
      }
    }
    listOfArtistsWorks {
      internal {
        content
      }
    }
  }
}

`

export default ({data}) => (
  <>
    <div>Имя: {JSON.stringify(data.contentfulWriter.name)}</div>
    <div>Годы жизни: {JSON.stringify(data.contentfulWriter.yearsOfLife)}</div>
    <div>Видео (должно быть модальным):</div>
    <iframe
      title="writerVideo"
      width="560"
      height="315"
      src={data.contentfulWriter.youTubeLink}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      >
    </iframe>
    <br/>
    пример данных по писателю, размещаемых на Contentfull:
    <p>{JSON.stringify(data.contentfulWriter)}</p>
  </>
)


