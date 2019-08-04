import React, {Fragment} from 'react';
import uniqid from 'uniqid';

import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

import './team.css';

export default data => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation('team');

  const dataTeam = data;
  return (
    <>
    <h3 style={{textAlign: 'center'}}>{t("title")}</h3>
    <section className="team-container">

      {dataTeam.map(item => (
        <Fragment key={uniqid()}>
          <div
          key={uniqid()}
          className="team-item">
            <img
              key={uniqid()}
              className="team-image"
              src={item.photoLink}
              alt={JSON.stringify(item.name[currentLanguage])}
            />
            <p key={uniqid()}>{item.name[currentLanguage]}</p>
            <a
            key={uniqid()}
            href={item.githubLink}><button className="btn btn-secondary">GitHub</button></a>
            <p style={{overflow: 'hidden'}}key={uniqid()}>{item.contribution[currentLanguage]}</p>
          </div>
        </Fragment>
      ))}
    </section>
    </>
  )
}

