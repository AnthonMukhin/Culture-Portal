import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { useStaticQuery } from "gatsby"

import styles from './layout.module.css';
import MainNavigation from '../../components/main-navigation/main-navigation';
import LanguageSelector from '../../components/language-selector/language-selector';

export default (props) => {
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
      <header>
        <h2>{t('title')}</h2>
        <LanguageSelector></LanguageSelector>
        <MainNavigation authorsArray={authorsArray}></MainNavigation>
        <hr></hr>
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
      <footer>
        <hr></hr>
        <p>© Awesome-random-party 2019</p>
      </footer>
    </>
  );
}


