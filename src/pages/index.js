import React from "react";
import { graphql } from 'gatsby';

import Team from "../components/team/Team"
import Layout from "../components/layout/layout";
import { useTranslation } from 'react-i18next';
import '../utils/i18next';


export const query = graphql`
query MyQuery {
  allContentfulAuthor {
    totalCount
    nodes {

      summary {
        by
        en
        ru
      }
      name {
        by
        en
        ru
      }
    }
  }
  allContentfulTeam {
    nodes {
      githubLink
      id
      photoLink
      name {
        by
        en
        ru
      }
      contribution {
        by
        en

      }
    }
  }
}
`


export default ({data}) => {
  const dataTeam = data.allContentfulTeam.nodes;
  const { t } = useTranslation('team');
  const { i18n } = useTranslation();
  let currentLanguage = i18n.language;
  return (
    <Layout>
      <h3>{t("title")}:</h3>
      <Team data ={dataTeam} lang={currentLanguage}/>
    </Layout>
  );
};
