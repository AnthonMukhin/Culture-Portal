import React from "react";

import './team.css';

export default class Team extends React.Component {
  render() {
  const dataTeam = this.props.data;
  const currentLanguage = this.props.lang;

  return (
    <section className="team-container">
      {dataTeam.map((item, index) => (
        <>
        <div
         key = {index}
        className="team-item"
        >
        <img
        className="team-image"
        key = {index+"2"}
        src = {item.photoLink}
        alt={JSON.stringify(item.name[currentLanguage])}>
        </img>
        <p key = {index+"3"}>{item.name[currentLanguage]}</p>
        <a
        key = {index+"5"}
        href={item.githubLink}>
        gitHub</a>
        <p key = {index+"6"}>
        {item.contribution[currentLanguage]}
        </p>
        </div>
        </>
      ))
      }

    </section>
    )
  }
}
