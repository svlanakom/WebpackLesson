import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
  initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
  console.log(e);

  if (e.key !== "tasksList") {
    return null;
  }

  renderTasks();
};

window.addEventListener("storage", onStorageChange);
