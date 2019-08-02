import React from "react"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"
import "../../utils/i18next"

import "./writerOfTheDay.css"

export default dataWriter => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const { t } = useTranslation("writerOfTheDay")

  const data = dataWriter

  const index = Math.round(Math.random() * data.lenght).toString()
  const nameForUrl = data[index].name.en.replace(/\s/g, "")
  return (
    <>
      <div className="writer-day">
        <h3>{t("title")}:</h3>

        <img
          src={data[index].avatar.file.url}
          alt={data[index].name[currentLanguage]}
          style={{ width: `150px` }}
        />
        <h3>{data[index].name[currentLanguage]}</h3>
        <p>{data[index].summary[currentLanguage]}</p>
        <Link to={`/writer/${nameForUrl}`}>
          <button>{t("button")}</button>
        </Link>
      </div>
    </>
  )
}
