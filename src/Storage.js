import List from "./List";
import Project from "./Project";
import Task from "./Task";

export default class Storage {
    storeTasks(task) {
        let taskList;  
        if (localStorage.getItem('taskList') === null) {
            taskList = [];
        } else {
            taskList = JSON.parse(localStorage.getItem('taskList'));
        }
        taskList.push(task);
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }

    getTaskList(){
        let taskList = Object.assign(
            new List(), 
            JSON.parse(localStorage.getItem('tasklist')));

        taskList.setProjects(
            taskList
                .getProjects()
                .map((project) => Object.assign(new Project(), project))
        )

        taskList.getProjects()
            .forEach((project) => {
                project.setTasks(
                    project.getTasks().map((task) => Object.assign(new Task(), task))
                )
            })

        return taskList;

    }


}