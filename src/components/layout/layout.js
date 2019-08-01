import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { useStaticQuery } from "gatsby"
import { graphql } from 'gatsby';

import '../../styles/reset.css';
import '../../styles/main.css';
import './layout.css';
import '../../styles/bootstrap.min.css'
import MainNavigation from '../../components/main-navigation/main-navigation';
import LanguageSelector from '../../components/language-selector/language-selector';

export default ({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
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
  )
  const authorsArray = data.allContentfulAuthor.nodes;
  const { t } = useTranslation('layout');
  return (
    <>
      <Helmet>
        <title>Писатели</title>
      </Helmet>
      <header className='row justify-content-around align-items-center p-0'>
        <h1 className='col-3'>{t('title')}</h1>
        <LanguageSelector></LanguageSelector>
        <MainNavigation authorsArray={authorsArray}></MainNavigation>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© Awesome-random-party 2019</p>
      </footer>
    </>
  );
}


