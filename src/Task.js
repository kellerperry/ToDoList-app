import today from "./today";

export default class Task {
    constructor(name, dueDate = today(new Date())) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = "low";
        this.project = "inbox";
        this.details = ""; 
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(date) {
        this.dueDate = today(date);
    }

}