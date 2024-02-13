import Project from "./Project";

export default class List {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
        this.projects.push(new Project("Today"));
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(projectName) {
        this.projects = this.projects.filter((project) => project.name !== projectName);
    }
}