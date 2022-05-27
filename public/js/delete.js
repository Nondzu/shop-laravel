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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          console.log(data.responseJSON.message);\n          Swal.fire({\n            icon: 'error',\n            title: 'Oops...',\n            text: data.responseJSON.message\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInRleHQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kZWxldGUuanM/NmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdDenkgbmEgcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHJla29yZD8nLFxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOaWUnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBWTtFQUNWQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBWTtJQUFBOztJQUMzQkMsSUFBSSxDQUFDQyxJQUFMLENBQVU7TUFDTkMsS0FBSyxFQUFFLG9DQUREO01BRU5DLElBQUksRUFBRSxTQUZBO01BR05DLGdCQUFnQixFQUFFLElBSFo7TUFJTkMsa0JBQWtCLEVBQUUsU0FKZDtNQUtOQyxpQkFBaUIsRUFBRSxNQUxiO01BTU5DLGlCQUFpQixFQUFFLEtBTmI7TUFPTkMsZ0JBQWdCLEVBQUU7SUFQWixDQUFWLEVBUUdDLElBUkgsQ0FRUSxVQUFDQyxNQUFELEVBQVk7TUFDaEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO1FBQ3BCYixDQUFDLENBQUNjLElBQUYsQ0FBTztVQUNIQyxNQUFNLEVBQUUsUUFETDtVQUVIQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2pCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSxJQUFiO1FBRmQsQ0FBUCxFQUlLQyxJQUpMLENBSVUsVUFBVUQsSUFBVixFQUFnQjtVQUNsQkUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtRQUNILENBTkwsRUFPS0MsSUFQTCxDQU9VLFVBQVVMLElBQVYsRUFBZ0I7VUFDbEJNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLENBQUNRLFlBQUwsQ0FBa0JDLE9BQTlCO1VBQ0F6QixJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNORSxJQUFJLEVBQUUsT0FEQTtZQUVORCxLQUFLLEVBQUUsU0FGRDtZQUdOd0IsSUFBSSxFQUFFVixJQUFJLENBQUNRLFlBQUwsQ0FBa0JDO1VBSGxCLENBQVY7UUFPSCxDQWhCTDtNQWlCSDtJQUNKLENBNUJEO0VBK0JILENBaENEO0FBaUNILENBbENBLENBQUQifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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