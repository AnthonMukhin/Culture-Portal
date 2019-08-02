const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const WriterTemplate = path.resolve('src/templates/writer-template.js');
    resolve(
      graphql(
        `
          {
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
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allContentfulAuthor.nodes.forEach((writer) => {
          const nameForUrl = writer.name.en.replace(/\s/g, '');
          const path = `writer/${nameForUrl}`;
          createPage({
            path,
            component: WriterTemplate,
            context: {
              writer
            },
          });
          resolve();
        });
      })
    );
  });
};
