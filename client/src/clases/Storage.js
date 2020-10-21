export default class Storage {
  static projectName = () => {
    return localStorage.getItem("CurrentProjectName");
  };
  static industry = () => localStorage.getItem("CurrentProjectIndustry");

  static setCurrentProjectName(CurrentProj) {
    localStorage.setItem("CurrentProjectName", CurrentProj);
  }

  static setCurrentProjectIndustry(CurrentProj) {
    localStorage.setItem("CurrentProjectIndustry", CurrentProj);
  }

  static getProjecs() {
    let projects;
    if (localStorage.getItem("projects") === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    return projects;
  }

  static saveProject(project) {
    Storage.updateProject(project.projectName);
    const projects = Storage.getProjecs();
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static removeProject(projName) {
    const projects = Storage.getProjecs();
    projects.forEach((project, index) => {
      if (project.projectName === projName) {
        projects.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    });
  }
  static updateProject(projName) {
    const projects = Storage.getProjecs();
    projects.forEach((project, index) => {
      if (project.projectName === projName) {
        projects.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
        window.alert(`The project ${project.projectName} Has being updated`);
      }
    });
  }

  static newProject() {
    let emptyArr = [];
    localStorage.setItem("currentProjectProducts", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectExpenses", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectPayroll", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectAssets", JSON.stringify(emptyArr));
    localStorage.setItem("CurrentProjectName", "New Project");
    localStorage.setItem("CurrentProjectIndustry", "not defined");
  }

  static clearProjectForms() {
    let emptyArr = [];
    localStorage.setItem("currentProjectProducts", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectExpenses", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectPayroll", JSON.stringify(emptyArr));
    localStorage.setItem("currentProjectAssets", JSON.stringify(emptyArr));
  }
}
