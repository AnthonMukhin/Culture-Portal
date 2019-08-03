import React from "react";
import { graphql } from 'gatsby';

import Team from "../components/team/Team"
import Layout from "../components/layout/layout";
import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import WriterOfTheDay from "../components/writerOfTheDay/writerOfTheDay";

export default ({ data }) => {
  const authorsArraySummary = data.allContentfulAuthor.nodes;
  const teamUnit = data.allContentfulTeam.nodes;
  const {t} = useTranslation("descriptionPortal");
  return (
    <Layout>
      <div className="container">
        <p>{t("text")}:</p>
      </div>
      <div className="container">
      {WriterOfTheDay(authorsArraySummary)}
      </div>
      <div className="container">
      {Team(teamUnit)}
      </div>
    </Layout>
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

