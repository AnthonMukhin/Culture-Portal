import React from "react";
import uniqid from 'uniqid';

import './team.css';

export default class Team extends React.Component {
  render() {
  const dataTeam = this.props.data;
  const currentLanguage = this.props.lang;

  return (
    <section  className="team-container">
      {dataTeam.map((item) => (
        <>
        <div
        key = {uniqid()}
        className="team-item"
        >
        <img
        className="team-image"
        src = {item.photoLink}
        alt={JSON.stringify(item.name[currentLanguage])}>
        </img>
        <p>{item.name[currentLanguage]}</p>
        <a
        href={item.githubLink}>
        gitHub</a>
        <p>
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
