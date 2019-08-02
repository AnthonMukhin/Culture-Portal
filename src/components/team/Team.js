import React from "react"
import uniqid from "uniqid"

import { useTranslation } from "react-i18next"
import "../../utils/i18next"

import "./team.css"

export default data => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const { t } = useTranslation("team")

  const dataTeam = data
  return (
    <>
    <h3>{t("title")}</h3>
    <section className="team-container">

      {dataTeam.map(item => (
        <>
          <div key={uniqid()} className="team-item">
            <img
              className="team-image"
              src={item.photoLink}
              alt={JSON.stringify(item.name[currentLanguage])}
            />
            <p>{item.name[currentLanguage]}</p>
            <a href={item.githubLink}>gitHub</a>
            <p>{item.contribution[currentLanguage]}</p>
          </div>
        </>
      ))}
    </section>
    </>
  )
}

