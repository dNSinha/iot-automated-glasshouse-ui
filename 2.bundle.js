(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{342:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Home=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(2)),o=a(141),i=a(700),l=(n=a(679))&&n.__esModule?n:{default:n},u=a(698);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a(699);var y=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=m(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?p(n):r).state={data:[{time:null,soil_moisture:null,temperature:null,water_tank:null,humidity:null}]},a.fetchData=a.fetchData.bind(p(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,(n=[{key:"fetchData",value:function(){var e=this,t={date:u.helpers.getDate(),time:u.helpers.getTime()};l.default.getCurrentData(t).then((function(t){var a=t.data&&t.data.sensorValues&&t.data.sensorValues[0],n={time:a&&a.time||u.helpers.getTime(),soil_moisture:a&&a.soil_moisture&&a.soil_moisture.toString()||100*Math.random(),humidity:a&&a.humidity&&a.humidity.toString()||100*Math.random(),temperature:a&&a.temperature&&a.temperature.toString()||100*Math.random(),water_tank:a&&a.water_tank&&a.water_tank.toString()||100*Math.random()};e.setState((function(e){return{data:[].concat(f(e.data),[n])}}))})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.fetchData()}),5e3)}},{key:"render",value:function(){return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"line-chart"},r.default.createElement(i.LineChart,{width:750,height:250,data:this.state.data},r.default.createElement(i.Line,{type:"monotone",dataKey:"humidity",stroke:"#8884d8"}),r.default.createElement(i.CartesianGrid,{stroke:"#ccc",strokeDasharray:"5 5"}),r.default.createElement(i.XAxis,{dataKey:"time"}," ",r.default.createElement(i.Label,{value:"Humidity",offset:0,position:"insideBottom"})," "),r.default.createElement(i.YAxis,null),r.default.createElement(i.Tooltip,null))),r.default.createElement("div",{className:"line-chart"},r.default.createElement(i.LineChart,{width:750,height:250,data:this.state.data},r.default.createElement(i.Line,{type:"monotone",dataKey:"soil_moisture",stroke:"#8884d8"}),r.default.createElement(i.CartesianGrid,{stroke:"#ccc",strokeDasharray:"5 5"}),r.default.createElement(i.XAxis,{dataKey:"time"}," ",r.default.createElement(i.Label,{value:"Soil Moisture",offset:0,position:"insideBottom"})," "),r.default.createElement(i.YAxis,null),r.default.createElement(i.Tooltip,null))),r.default.createElement("div",{className:"line-chart"},r.default.createElement(i.LineChart,{width:750,height:250,data:this.state.data},r.default.createElement(i.Line,{type:"monotone",dataKey:"temperature",stroke:"#82ca9d"}),r.default.createElement(i.CartesianGrid,{stroke:"#ccc",strokeDasharray:"5 5"}),r.default.createElement(i.XAxis,{dataKey:"time"}," ",r.default.createElement(i.Label,{value:"Temperature",offset:0,position:"insideBottom"})," "),r.default.createElement(i.YAxis,null),r.default.createElement(i.Tooltip,null))),r.default.createElement("div",{className:"line-chart"},r.default.createElement(i.LineChart,{width:750,height:250,data:this.state.data},r.default.createElement(i.Line,{type:"monotone",dataKey:"water_tank",stroke:"#82ca9d"}),r.default.createElement(i.CartesianGrid,{stroke:"#ccc",strokeDasharray:"5 5"}),r.default.createElement(i.XAxis,{dataKey:"time"}," ",r.default.createElement(i.Label,{value:"Water Tank",offset:0,position:"insideBottom"})," "),r.default.createElement(i.YAxis,null),r.default.createElement(i.Tooltip,null))))}}])&&d(a.prototype,n),o&&d(a,o),t}(r.default.Component);t.Home=y;var v=(0,o.connect)()(y);t.default=v},679:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(680))&&n.__esModule?n:{default:n};function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,n=[{key:"getCurrentData",value:function(e){return new Promise((function(t,a){r.default.post("https://automated-glasshouse-service.herokuapp.com/api/sensor/current",e).then((function(e){t(e&&e.data)})).catch((function(e){a(e)}))}))}}],(a=null)&&o(t.prototype,a),n&&o(t,n),e}();t.default=i},698:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=void 0;var n={getDate:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),e="".concat(n,"-").concat(a,"-").concat(t)},getTime:function(){var e=new Date,t=e.getHours()<10?"0".concat(e.getHours()):e.getHours(),a=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),n=e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds();return e="".concat(t,":").concat(a,":").concat(n)}};t.helpers=n},699:function(e,t,a){e.exports={home:"home","line-chart":"line-chart"}}}]);
//# sourceMappingURL=2.bundle.js.map