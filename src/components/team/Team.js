import React from "react";
import "../../styles/bootstrap.min.css"
import './team.css';

export default class Team extends React.Component {
  render() {
  const dataTeam = this.props.data;
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
        alt={JSON.stringify(item.name.ru)}>
        </img>
        <p key = {index+"3"}>{item.name.ru}</p>
        <a
        key = {index+"5"}
        href={item.githubLink}>
        gitHub</a>
        <p key = {index+"6"}>
        {item.contribution.ru}
        </p>
        </div>
        </>
      ))
      }

    </section>
  )
}
}
