import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import { Link } from "gatsby";

import Layout from "../components/layout/layout";

export default ({location}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { t } = useTranslation('writers');

  const allAuthors = location.state[0];
  const [writersList, setWritersList] = useState(allAuthors);
  console.log('from WRITERS:');
  console.log(allAuthors);

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
    return (
      <li key={author.id}>
        <Link
          to="/writer"
          state={author}>
            <h3>{author.name[currentLang]}</h3>
        </Link>
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
