function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import { renderTasks } from "./renderer.js";
import { getTasksList, updateTask } from "./taskGateway.js"; // eslint-disable-next-line consistent-return

export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return null;
  }

  var tasksList = getTasksList("tasksList");
  tasksList.then(function (el) {
    return el.map(function (task) {
      if (task.id === e.target.dataset.id) {
        var done = e.target.checked;
        updateTask(
          task.id,
          _objectSpread(
            _objectSpread({}, task),
            {},
            {
              done: done,
              finishDate: done ? new Date().toISOString() : null,
            }
          )
        ).then(function () {
          return renderTasks();
        });
        return _objectSpread(
          _objectSpread({}, task),
          {},
          {
            done: done,
            finishDate: done ? new Date().toISOString() : null,
          }
        );
      }

      return task;
    });
  });
};
