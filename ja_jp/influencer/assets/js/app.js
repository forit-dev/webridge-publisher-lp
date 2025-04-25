/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  // 変数宣言を修正
  var voiceCards = document.querySelectorAll(".voice__card");
  var menuLinks = document.querySelectorAll(".globalNavigation__menuItem a");
  var drawerCheckbox = document.getElementById("drawer__checkbox");
  var fadeinElements = document.querySelectorAll(".c-fadeinScroll, .c-fadeinUpScroll");

  // .voice__card の開閉処理
  voiceCards.forEach(function (card) {
    var textElement = card.querySelector(".voice__descriptionText");
    var readMoreBtn = card.querySelector(".voice__readMoreText");
    if (textElement && readMoreBtn) {
      readMoreBtn.addEventListener("click", function () {
        // classList.toggle を使用
        textElement.classList.toggle("expanded");
        readMoreBtn.textContent = textElement.classList.contains("expanded") ? "閉じる" : "続きを読む";
      });
    }
  });

  // ハンバーガーメニューのスクロール処理
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var targetId = link.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
      drawerCheckbox.checked = false;
    });
  });

  // コンテンツのフェードイン処理
  var onScroll = function onScroll() {
    fadeinElements.forEach(function (element) {
      var rect = element.getBoundingClientRect();
      var threshold = window.innerHeight * 0.9;
      var isVisible = rect.top < threshold && rect.bottom > 0;
      if (isVisible) {
        element.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", onScroll);

  // 特定のURLにアクセスした場合
  if (window.location.href === 'https://lp.webridge.net') {
    // 別のURLへリダイレクト
    window.location.href = 'https://webridge.net/';
  }
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkWebridge_Publisher_lp"] = self["webpackChunkWebridge_Publisher_lp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/style"], () => (__webpack_require__("./src/sass/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnJpZGdlIFB1Ymxpc2hlciBscC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz81MWU2Iiwid2VicGFjazovL1dlYnJpZGdlIFB1Ymxpc2hlciBscC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyDlpInmlbDlrqPoqIDjgpLkv67mraNcbiAgICBjb25zdCB2b2ljZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52b2ljZV9fY2FyZFwiKTtcbiAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdsb2JhbE5hdmlnYXRpb25fX21lbnVJdGVtIGFcIik7XG4gICAgY29uc3QgZHJhd2VyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYXdlcl9fY2hlY2tib3hcIik7XG4gICAgY29uc3QgZmFkZWluRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtZmFkZWluU2Nyb2xsLCAuYy1mYWRlaW5VcFNjcm9sbFwiKTtcblxuICAgIC8vIC52b2ljZV9fY2FyZCDjga7plovplonlh6bnkIZcbiAgICB2b2ljZUNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnZvaWNlX19kZXNjcmlwdGlvblRleHRcIik7XG4gICAgICAgIGNvbnN0IHJlYWRNb3JlQnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnZvaWNlX19yZWFkTW9yZVRleHRcIik7XG5cbiAgICAgICAgaWYgKHRleHRFbGVtZW50ICYmIHJlYWRNb3JlQnRuKSB7XG4gICAgICAgIHJlYWRNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGFzc0xpc3QudG9nZ2xlIOOCkuS9v+eUqFxuICAgICAgICAgICAgdGV4dEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICAgICAgICAgICAgcmVhZE1vcmVCdG4udGV4dENvbnRlbnQgPSB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSA/IFwi6ZaJ44GY44KLXCIgOiBcIue2muOBjeOCkuiqreOCgFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44K544Kv44Ot44O844Or5Yem55CGXG4gICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3Vic3RyaW5nKDEpO1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3ZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8g44Kz44Oz44OG44Oz44OE44Gu44OV44Kn44O844OJ44Kk44Oz5Yem55CGXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGZhZGVpbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk7XG4gICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHJlY3QudG9wIDwgdGhyZXNob2xkICYmIHJlY3QuYm90dG9tID4gMDtcblxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG5cbiAgICBcbiAgICAvLyDnibnlrprjga5VUkzjgavjgqLjgq/jgrvjgrnjgZfjgZ/loLTlkIhcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2xwLndlYnJpZGdlLm5ldCcpIHtcbiAgICAvLyDliKXjga5VUkzjgbjjg6rjg4DjgqTjg6zjgq/jg4hcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL3dlYnJpZGdlLm5ldC8nO1xuICAgIH1cbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvanMvYXBwXCI6IDAsXG5cdFwiYXNzZXRzL2Nzcy9zdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtXZWJyaWRnZV9QdWJsaXNoZXJfbHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rV2VicmlkZ2VfUHVibGlzaGVyX2xwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL2Nzcy9zdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvY3NzL3N0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZvaWNlQ2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUxpbmtzIiwiZHJhd2VyQ2hlY2tib3giLCJnZXRFbGVtZW50QnlJZCIsImZhZGVpbkVsZW1lbnRzIiwiZm9yRWFjaCIsImNhcmQiLCJ0ZXh0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZWFkTW9yZUJ0biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRleHRDb250ZW50IiwiY29udGFpbnMiLCJsaW5rIiwidGFyZ2V0SWQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHJpbmciLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY2hlY2tlZCIsIm9uU2Nyb2xsIiwiZWxlbWVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0aHJlc2hvbGQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlzVmlzaWJsZSIsInRvcCIsImJvdHRvbSIsImFkZCIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=