import React from "react";
import Project from "./Project";

class ProjectsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="project-list">
        {this.props.projects.map(project => {
          return <Project key={project.id} project={project} />
        })}
      </div>
    );
  }
}

export default ProjectsList;