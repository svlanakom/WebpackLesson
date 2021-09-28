import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var baseUrl = "https://61422caa4d16670017ba2c4f.mockapi.io/toDoApi/tasksList"; // link to tasksList API

export var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
}; // from this promise we getting array of tasks (objects)

export var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};
export var updateTask = function updateTask(id, value) {
  return fetch("".concat(baseUrl, "/").concat(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(value),
  });
};
