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
      <div className="card mb-3 col-xl-5 col-lg-10 col-11" key={author.id}>
        <div className="row no-gutters" style={{height: '100%'}}>
          <div className="col-md-4 row align-items-center m-auto">
            <img className="card-img" src={author.avatar.file.url} alt="writersAvatar"/>
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{height: '100%'}}>
              <h5 className="card-title">{author.name[currentLang]}</h5>
              <p className="card-text"><small className="text-muted">{t('born')} {author.placeOfBirth[currentLang]}</small></p>
              <p className="card-text">{author.summary[currentLang]}</p>
              <Link to={`/writer/${nameForUrl}`} className="card-text" style={{margin: '0 auto', width: '100%'}}>
              <button className="btn btn-info">{t('further')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
      <div className="row justify-content-around m-0 p-0">{writersForPage}</div>
    </Layout>
  );
};
