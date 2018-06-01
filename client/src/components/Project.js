import React from "react";

class Project extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="project">
        <h2>{this.props.project.name}</h2>
        <p>{this.props.project.description}</p>
      </div>
    );
  }
}

export default Project;