import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import Layout from "../components/layout/layout";
import '../styles/writers.css';

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
    const nameForUrl = author.name.en.replace(/\s/g, '');
    const divStyle={
      backgroundImage: `url(${author.avatar.file.url})`
    };
    let summary = null;
    if (author.summary[currentLang].length > 220) {
      summary = author.summary[currentLang].substr(0, 220) + ' . . .';
    } else summary = author.summary[currentLang];

    return (
      <div className="card mb-3 col-xl-6 col-lg-12 col-md-12 col-11" key={author.id}>
        <div className="row no-gutters" style={{height: '100%'}}>
          <div className="image-container col-xl-5 row align-items-start justify-content-center">
            <div className="card-img" style={divStyle}>
              <img src={author.avatar.file.url} alt="writersAvatar"/>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card-body d-flex align-items-start" style={{height: '100%'}}>
              <h5 className="card-title">{author.name[currentLang]}</h5>
              <p className="card-text"><small className="text-muted">{t('born')} {author.placeOfBirth[currentLang]}</small></p>
              <p className="card-text">{summary}</p>
              <Link to={`/writer/${nameForUrl}`} className="card-text button-container align-self-end" style={{margin: '0 auto', width: '100%'}}>
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
      <input
        className='form-control col-xl-4 col-md-5 col-9'
        size="43"
        type="text"
        placeholder={t('searchPlaceholder')}
        onChange={searchWriter}
        style={{margin: '10px auto'}}
      />
      <div className="row writers-list justify-content-around m-0">{writersForPage}</div>
    </Layout>
  );
};
