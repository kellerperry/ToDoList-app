import Task from "./Task";

const trash = new Task("take out trash");

console.log(trash.dueDate)

const homework = new Task("do homework");

homework.setDueDate(new Date("2024-2-3"));

console.log(homework.dueDate);