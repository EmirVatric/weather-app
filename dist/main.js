/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst domManager = (data) => {\n  const input = document.getElementById('cityInput');\n  const errMsg = document.getElementById('errMsg');\n  const date = document.getElementById('date');\n  const locationName = document.getElementById('locationName');\n  const temperature = document.getElementById('temperature');\n  const description = document.getElementById('description');\n  const day1name = document.getElementById('day1name');\n  const day1temp = document.getElementById('day1temp');\n  const day2name = document.getElementById('day2name');\n  const day2temp = document.getElementById('day2temp');\n  const day3name = document.getElementById('day3name');\n  const day3temp = document.getElementById('day3temp');\n  const selector = document.getElementById('selector');\n\n\n  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',\n    'July', 'August', 'September', 'October', 'November', 'December',\n  ];\n\n  const dateFormatter = (index) => {\n    const currentDatetime = new Date();\n    const formattedDate = `${currentDatetime.getDate()} ${monthNames[(currentDatetime.getMonth())].toUpperCase()} ${currentDatetime.getFullYear()}`;\n    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    const indexWeek = currentDatetime.getDay() + index;\n    let day;\n    if (indexWeek <= 6) {\n      day = weekdays[indexWeek];\n    } else {\n      day = weekdays[indexWeek - weekdays.length];\n    }\n\n    return { formattedDate, day };\n  };\n  date.innerHTML = dateFormatter().formattedDate;\n\n\n  const renderMetric = (response) => {\n    locationName.innerText = response.cityName.toUpperCase();\n    temperature.innerText = `${response.temperature}C°`;\n    description.innerText = response.description;\n    day1name.innerText = dateFormatter(1).day;\n    day1temp.innerText = `${response.day1}C°`;\n    day2name.innerText = dateFormatter(2).day;\n    day2temp.innerText = `${response.day2}C°`;\n    day3name.innerText = dateFormatter(3).day;\n    day3temp.innerText = `${response.day3}C°`;\n  };\n\n  const renderImperial = (response) => {\n    locationName.innerText = response.cityName.toUpperCase();\n    temperature.innerText = `${response.temperature}F`;\n    description.innerText = response.description;\n    day1name.innerText = dateFormatter(1).day;\n    day1temp.innerText = `${response.day1}F`;\n    day2name.innerText = dateFormatter(2).day;\n    day2temp.innerText = `${response.day2}F`;\n    day3name.innerText = dateFormatter(3).day;\n    day3temp.innerText = `${response.day3}F`;\n  };\n\n  input.addEventListener('keypress', (e) => {\n    const key = e.which || e.keyCode;\n    if (errMsg.style.display === 'flex') {\n      errMsg.style.display = 'none';\n    }\n    if (key === 13) {\n      const { value } = input;\n      input.value = '';\n      if (!selector.checked) {\n        data.locationWeatherMetric(value).then((response) => {\n          if (response === 'error') {\n            errMsg.style.display = 'flex';\n          } else {\n            renderMetric(response);\n          }\n        });\n      } else {\n        data.locationWeatherImperial(value).then((response) => {\n          if (response === 'error') {\n            errMsg.style.display = 'flex';\n          } else {\n            renderImperial(response);\n          }\n        });\n      }\n    }\n  });\n\n  return {\n    renderMetric,\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domManager);\n\n\n//# sourceURL=webpack:///./src/domManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherManager */ \"./src/weatherManager.js\");\n/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager */ \"./src/domManager.js\");\n\n\n\nconst data = Object(_weatherManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst dom = Object(_domManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\ndata.locationWeatherMetric('sarajevo').then((response) => {\n  dom.renderMetric(response);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weatherManager.js":
/*!*******************************!*\
  !*** ./src/weatherManager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Weather = (cityName, temperature, description, humidity, day1, day2, day3) => ({\n  cityName, temperature, description, humidity, day1, day2, day3,\n});\n\nconst findDate = (res) => {\n  const timer = (time) => {\n    const dateTime = res.list[0].dt_txt.split(' ')[0].split('-');\n    let dayTime = Number(res.list[0].dt_txt.split(' ')[0].split('-')[2]);\n    dayTime += time;\n    dateTime[2] = dayTime;\n    const result = `${dateTime.join('-')} 12:00:00`;\n\n    return result;\n  };\n  const date1 = timer(0);\n  const date2 = timer(1);\n  const date3 = timer(2);\n\n  return { date1, date2, date3 };\n};\n\n\nconst weatherManager = () => {\n  const locationWeatherMetric = (cityName) => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=16dc6a67eac29ace6ded1c478775351b`)\n    .then((response) => response.json())\n    .then((res) => {\n      const dates = findDate(res);\n      let day1;\n      let day2;\n      let day3;\n      res.list.map((x) => {\n        if (x.dt_txt === dates.date1) {\n          day1 = x.main.temp;\n        } if (x.dt_txt === dates.date2) {\n          day2 = x.main.temp;\n        } if (x.dt_txt === dates.date3) {\n          day3 = x.main.temp;\n        }\n      });\n      const location = Weather(cityName, res.list[0].main.temp, res.list[0].weather[0].description,\n        res.list[0].main.humidity, day1, day2, day3);\n      return location;\n    })\n    .catch(() => 'error');\n\n  const locationWeatherImperial = (cityName) => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&APPID=16dc6a67eac29ace6ded1c478775351b`)\n    .then((response) => response.json())\n    .then((res) => {\n      const dates = findDate(res);\n      let day1;\n      let day2;\n      let day3;\n      res.list.map((x) => {\n        if (x.dt_txt === dates.date1) {\n          day1 = x.main.temp;\n        } if (x.dt_txt === dates.date2) {\n          day2 = x.main.temp;\n        } if (x.dt_txt === dates.date3) {\n          day3 = x.main.temp;\n        }\n        return day1;\n      });\n      const location = Weather(cityName, res.list[0].main.temp, res.list[0].weather[0].description,\n        res.list[0].main.humidity, day1, day2, day3);\n      return location;\n    })\n    .catch(() => 'error');\n\n\n  return {\n    locationWeatherMetric,\n    locationWeatherImperial,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weatherManager);\n\n\n//# sourceURL=webpack:///./src/weatherManager.js?");

/***/ })

/******/ });