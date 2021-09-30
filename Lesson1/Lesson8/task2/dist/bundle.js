/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/todoList.js */ "./src/list/todoList.js");\n/* harmony import */ var _list_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/renderer.js */ "./src/list/renderer.js");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener("DOMContentLoaded", () => {\n  Object(_list_renderer_js__WEBPACK_IMPORTED_MODULE_1__["renderTasks"])();\n  Object(_list_todoList_js__WEBPACK_IMPORTED_MODULE_0__["initTodoListHandlers"])();\n});\n\nconst onStorageChange = e => {\n  console.log(e);\n\n  if (e.key !== "tasksList") {\n    return null;\n  }\n\n  Object(_list_renderer_js__WEBPACK_IMPORTED_MODULE_1__["renderTasks"])();\n};\n\nwindow.addEventListener("storage", onStorageChange);\n\n//# sourceURL=webpack:///./src/index.js?'
        );

        /***/
      },

    /***/ "./src/index.scss":
      /*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?"
        );

        /***/
      },

    /***/ "./src/list/createTask.js":
      /*!********************************!*\
  !*** ./src/list/createTask.js ***!
  \********************************/
      /*! exports provided: onCreateTask */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCreateTask", function() { return onCreateTask; });\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer.js */ "./src/list/renderer.js");\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGateway.js */ "./src/list/taskGateway.js");\n\n // eslint-disable-next-line consistent-return\n\nconst onCreateTask = () => {\n  const taskTitleInputElem = document.querySelector(".task-input");\n  const text = taskTitleInputElem.value;\n\n  if (!text) {\n    return null;\n  }\n\n  taskTitleInputElem.value = "";\n  const newTask = {\n    text,\n    done: false,\n    createDate: new Date().toISOString()\n  };\n  Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__["createTask"])(newTask).then(() => {\n    Object(_renderer_js__WEBPACK_IMPORTED_MODULE_0__["renderTasks"])();\n  });\n};\n\n//# sourceURL=webpack:///./src/list/createTask.js?'
        );

        /***/
      },

    /***/ "./src/list/list.scss":
      /*!****************************!*\
  !*** ./src/list/list.scss ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/list/list.scss?"
        );

        /***/
      },

    /***/ "./src/list/renderer.js":
      /*!******************************!*\
  !*** ./src/list/renderer.js ***!
  \******************************/
      /*! exports provided: renderTasks */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTasks", function() { return renderTasks; });\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskGateway.js */ "./src/list/taskGateway.js");\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.scss */ "./src/list/list.scss");\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst listElem = document.querySelector(".list");\n\nconst compareTasks = (a, b) => a.done - b.done;\n\nconst createCheckbox = ({\n  done,\n  id\n}) => {\n  const checkboxElem = document.createElement("input");\n  checkboxElem.setAttribute("type", "checkbox");\n  checkboxElem.setAttribute("data-id", id);\n  checkboxElem.checked = done;\n  checkboxElem.classList.add("list__item-checkbox");\n  return checkboxElem;\n};\n\nconst createListItem = ({\n  text,\n  done,\n  id\n}) => {\n  const listItemElement = document.createElement("li");\n  listItemElement.classList.add("list__item");\n  const checkboxElem = createCheckbox({\n    done,\n    id\n  });\n\n  if (done) {\n    listItemElement.classList.add("list__item_done");\n  }\n\n  listItemElement.append(checkboxElem, text);\n  return listItemElement;\n};\n\nconst renderTasks = () => {\n  const tasksList = Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_0__["getTasksList"])();\n  listElem.innerHTML = "";\n  tasksList.then(elem => elem.sort(compareTasks).map(createListItem)).then(elem => listElem.append(...elem));\n};\n\n//# sourceURL=webpack:///./src/list/renderer.js?'
        );

        /***/
      },

    /***/ "./src/list/taskGateway.js":
      /*!*********************************!*\
  !*** ./src/list/taskGateway.js ***!
  \*********************************/
      /*! exports provided: getTasksList, createTask, updateTask */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksList", function() { return getTasksList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTask", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTask", function() { return updateTask; });\nconst baseUrl = "https://61422caa4d16670017ba2c4f.mockapi.io/toDoApi/tasksList"; // link to tasksList API\n\nconst getTasksList = () => fetch(baseUrl).then(response => response.json()); // from this promise we getting array of tasks (objects)\n\nconst createTask = taskData => fetch(baseUrl, {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json;charset=utf-8"\n  },\n  body: JSON.stringify(taskData)\n});\nconst updateTask = (id, value) => fetch(`${baseUrl}/${id}`, {\n  method: "PUT",\n  headers: {\n    "Content-Type": "application/json;charset=utf-8"\n  },\n  body: JSON.stringify(value)\n});\n\n//# sourceURL=webpack:///./src/list/taskGateway.js?'
        );

        /***/
      },

    /***/ "./src/list/todoList.js":
      /*!******************************!*\
  !*** ./src/list/todoList.js ***!
  \******************************/
      /*! exports provided: initTodoListHandlers */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTodoListHandlers", function() { return initTodoListHandlers; });\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./src/list/createTask.js");\n/* harmony import */ var _updateTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTask.js */ "./src/list/updateTask.js");\n\n\nconst initTodoListHandlers = () => {\n  const createBtnELem = document.querySelector(".create-task-btn");\n  createBtnELem.addEventListener("click", _createTask_js__WEBPACK_IMPORTED_MODULE_0__["onCreateTask"]);\n  const todoListElem = document.querySelector(".list");\n  todoListElem.addEventListener("click", _updateTask_js__WEBPACK_IMPORTED_MODULE_1__["onToggleTask"]);\n};\n\n//# sourceURL=webpack:///./src/list/todoList.js?'
        );

        /***/
      },

    /***/ "./src/list/updateTask.js":
      /*!********************************!*\
  !*** ./src/list/updateTask.js ***!
  \********************************/
      /*! exports provided: onToggleTask */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onToggleTask", function() { return onToggleTask; });\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer.js */ "./src/list/renderer.js");\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGateway.js */ "./src/list/taskGateway.js");\n\n // eslint-disable-next-line consistent-return\n\nconst onToggleTask = e => {\n  const isCheckbox = e.target.classList.contains("list__item-checkbox");\n\n  if (!isCheckbox) {\n    return null;\n  }\n\n  const tasksList = Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__["getTasksList"])("tasksList");\n  tasksList.then(el => el.map(task => {\n    if (task.id === e.target.dataset.id) {\n      const done = e.target.checked;\n      Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__["updateTask"])(task.id, { ...task,\n        done,\n        finishDate: done ? new Date().toISOString() : null\n      }).then(() => Object(_renderer_js__WEBPACK_IMPORTED_MODULE_0__["renderTasks"])());\n      return { // return item updated or not item to array\n        ...task,\n        done,\n        finishDate: done ? new Date().toISOString() : null\n      };\n    }\n\n    return task;\n  }));\n};\n\n//# sourceURL=webpack:///./src/list/updateTask.js?'
        );

        /***/
      },

    /******/
  }
);
