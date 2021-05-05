import React from "react";
import ProjectsCard from "./components/projectsCard";

function Gallery() {
    return (
      <div>
          <h1>Gallery placeholder</h1>
          <h2>list of projects</h2>
    
          {this.state.projects.map(project => (
          <ProjectsCard
            id={project.id}
            key={project.id}
            title={project.title}
            repo={project.repo}
            location={project.location}
            image={project.image}
          />
        ))}
      </div>
    );
  }
  
  export default Gallery;