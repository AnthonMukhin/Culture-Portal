import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import Layout from "../components/layout/layout";

export default ({location}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // const [writersList, setWritersList] = useState(0);
  const authorsArray = location.state[0];
  console.log('from WRITERS:');
  console.log(authorsArray);

  const writersList = authorsArray.map((author) => {
    return (
      <li key={author.id}>
        <h3>{author.name[currentLang]}</h3>
      </li>
    )
  });
  return (
    <Layout>
      <div className="searchbar form-group">
      <input
        // value={term}
        type="text"
        className="form-control"
        placeholder="Search writer by name or palce of birth..."
        // onChange={dataSearch}
      />
    </div>
      <ul>{writersList}</ul>
    </Layout>
  );
};
