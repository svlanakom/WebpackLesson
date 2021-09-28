import { renderTasks } from "./renderer.js";
import { createTask } from "./taskGateway.js"; // eslint-disable-next-line consistent-return

export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTask(newTask).then(function () {
    renderTasks();
  });
};
