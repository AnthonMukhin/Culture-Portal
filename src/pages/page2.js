import React from "react";

import '../styles/bootstrap.min.css';

export const query = graphql`
query MyQueryq {
  allContentfulAuthor {
    nodes {
      name {
        internal {
          content
        }
      }
    }
  }
}

`


export default ({data}) => (
  <div>
      <p>{JSON.stringify(data.allContentfulAuthor)}</p>
      <button class="btn btn-primary">Click me</button>
  </div>
);
