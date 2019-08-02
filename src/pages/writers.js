import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import Layout from "../components/layout/layout";

export const queryWriters = graphql`
query WritersList {
  allContentfulAuthor {
    nodes {
      avatar {
        file {
          url
        }
      }
      id
      name {
        by
        en
        ru
      }
      placeOfBirth {
        by
        en
        ru
      }
      summary {
        by
        en
        ru
      }
    }
  }
}
`
export default ({ data }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { t } = useTranslation('writers');

  const allAuthors = data.allContentfulAuthor.nodes;
  const [writersList, setWritersList] = useState(allAuthors);

  const searchWriter = (input) => {
    const value = input.target.value.toLowerCase();
    if (value === '') setWritersList(allAuthors);
    // eslint-disable-next-line
    const filtredAuthors = allAuthors.filter((author) => {
      if (author.name[currentLang].toLowerCase().indexOf(value) > -1) return author;
      if (author.placeOfBirth[currentLang].toLowerCase().indexOf(value) > -1) return author;
    });
    setWritersList(filtredAuthors);
  }

  const writersForPage = writersList.map((author) => {
    const nameForUrl = author.name.en.replace(/\s/g, '')
    return (
      <li key={author.id}>
        <Link
          to={`/writer/${nameForUrl}`}
          state={author}>
          <img src={author.avatar.file.url} alt="writersAvatar"/>
        </Link>
        <div>
          <Link
            to={`/writer/${nameForUrl}`}
            state={author}>
            <h3>{author.name[currentLang]}</h3>
          </Link>
        </div>
      </li>
    )
  });
  return (
    <Layout>
      <div className="searchbar form-group">
      <input
        size="43"
        type="text"
        placeholder={t('searchPlaceholder')}
        onChange={searchWriter}
      />
    </div>
      <ul>{writersForPage}</ul>
    </Layout>
  );
};
