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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: confirmDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          console.log(data.responseJSON.message);\n          Swal.fire({\n            icon: 'error',\n            title: 'Oops...',\n            text: data.responseJSON.message\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiY29uZmlybURlbGV0ZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInRleHQiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcz82YzExIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogY29uZmlybURlbGV0ZSxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTmllJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVk7RUFDVkEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVk7SUFBQTs7SUFDM0JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVO01BQ05DLEtBQUssRUFBRUMsYUFERDtNQUVOQyxJQUFJLEVBQUUsU0FGQTtNQUdOQyxnQkFBZ0IsRUFBRSxJQUhaO01BSU5DLGtCQUFrQixFQUFFLFNBSmQ7TUFLTkMsaUJBQWlCLEVBQUUsTUFMYjtNQU1OQyxpQkFBaUIsRUFBRSxLQU5iO01BT05DLGdCQUFnQixFQUFFO0lBUFosQ0FBVixFQVFHQyxJQVJILENBUVEsVUFBQ0MsTUFBRCxFQUFZO01BQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtRQUNwQmQsQ0FBQyxDQUFDZSxJQUFGLENBQU87VUFDSEMsTUFBTSxFQUFFLFFBREw7VUFFSEMsR0FBRyxFQUFFQyxTQUFTLEdBQUdsQixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFtQixJQUFSLENBQWEsSUFBYjtRQUZkLENBQVAsRUFJS0MsSUFKTCxDQUlVLFVBQVVELElBQVYsRUFBZ0I7VUFDbEJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7UUFDSCxDQU5MLEVBT0tDLElBUEwsQ0FPVSxVQUFVTCxJQUFWLEVBQWdCO1VBQ2xCTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBSSxDQUFDUSxZQUFMLENBQWtCQyxPQUE5QjtVQUNBMUIsSUFBSSxDQUFDQyxJQUFMLENBQVU7WUFDTkcsSUFBSSxFQUFFLE9BREE7WUFFTkYsS0FBSyxFQUFFLFNBRkQ7WUFHTnlCLElBQUksRUFBRVYsSUFBSSxDQUFDUSxZQUFMLENBQWtCQztVQUhsQixDQUFWO1FBT0gsQ0FoQkw7TUFpQkg7SUFDSixDQTVCRDtFQStCSCxDQWhDRDtBQWlDSCxDQWxDQSxDQUFEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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