/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: confirmDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          console.log(data.responseJSON.message);\n          Swal.fire({\n            icon: 'error',\n            title: 'Oops...',\n            text: data.responseJSON.message\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImNvbmZpcm1EZWxldGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiBjb25maXJtRGVsZXRlLFxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOaWUnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBWTtFQUNWQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBWTtJQUFBOztJQUMzQkMsSUFBSSxDQUFDQyxJQUFMLENBQVU7TUFDTkMsS0FBSyxFQUFFQyxhQUREO01BRU5DLElBQUksRUFBRSxTQUZBO01BR05DLGdCQUFnQixFQUFFLElBSFo7TUFJTkMsa0JBQWtCLEVBQUUsU0FKZDtNQUtOQyxpQkFBaUIsRUFBRSxNQUxiO01BTU5DLGlCQUFpQixFQUFFLEtBTmI7TUFPTkMsZ0JBQWdCLEVBQUU7SUFQWixDQUFWLEVBUUdDLElBUkgsQ0FRUSxVQUFDQyxNQUFELEVBQVk7TUFDaEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO1FBQ3BCZCxDQUFDLENBQUNlLElBQUYsQ0FBTztVQUNIQyxNQUFNLEVBQUUsUUFETDtVQUVIQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2xCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUW1CLElBQVIsQ0FBYSxJQUFiO1FBRmQsQ0FBUCxFQUlLQyxJQUpMLENBSVUsVUFBVUQsSUFBVixFQUFnQjtVQUNsQkUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtRQUNILENBTkwsRUFPS0MsSUFQTCxDQU9VLFVBQVVMLElBQVYsRUFBZ0I7VUFDbEJNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLENBQUNRLFlBQUwsQ0FBa0JDLE9BQTlCO1VBQ0ExQixJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNORyxJQUFJLEVBQUUsT0FEQTtZQUVORixLQUFLLEVBQUUsU0FGRDtZQUdOeUIsSUFBSSxFQUFFVixJQUFJLENBQUNRLFlBQUwsQ0FBa0JDO1VBSGxCLENBQVY7UUFPSCxDQWhCTDtNQWlCSDtJQUNKLENBNUJEO0VBK0JILENBaENEO0FBaUNILENBbENBLENBQUQifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;