import React from "react";


function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.repo}
          </li>
          <li>
            <strong>Deployed Application:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;