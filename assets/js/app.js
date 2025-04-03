/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

// voiceセクションの続きを読むボタンの開閉のアニメーション
document.addEventListener("DOMContentLoaded", function () {
  // 全ての .voice__card を取得
  var cards = document.querySelectorAll(".voice__card");
  cards.forEach(function (card) {
    // カード内の必要な要素を取得
    var textElement = card.querySelector(".voice__descriptionText");
    var readMoreBtn = card.querySelector(".voice__readMoreText");

    // ボタンが存在する場合のみイベントリスナーを追加
    if (textElement && readMoreBtn) {
      readMoreBtn.addEventListener("click", function () {
        // テキストが展開状態か確認
        if (textElement.classList.contains("expanded")) {
          textElement.classList.remove("expanded");
          readMoreBtn.textContent = "続きを読む";
        } else {
          textElement.classList.add("expanded");
          readMoreBtn.textContent = "閉じる";
        }
      });
    }
  });
});

// ハンバーガーメニューのメニュー本体をクリック後に自動で閉じる&該当セクションにスムーススクロールするアニメーション
document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".globalNavigation__menuItem a");
  var drawerCheckbox = document.getElementById("drawer__checkbox");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // ページ内スクロールをスムーズに実行
      var targetId = link.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      // ハンバーガーメニューを閉じる
      drawerCheckbox.checked = false;
    });
  });
});

// コンテンツのフェードインのアニメーション
document.addEventListener("DOMContentLoaded", function () {
  // .fadeinScroll と .fadeinUpScroll の両方を取得
  var fadeinElements = document.querySelectorAll(".c-fadeinScroll, .c-fadeinUpScroll");
  var onScroll = function onScroll() {
    fadeinElements.forEach(function (element) {
      var rect = element.getBoundingClientRect();
      var threshold = window.innerHeight * 0.9; // スクロール量の調整（画面下部の90%）
      var isVisible = rect.top < threshold && rect.bottom > 0;
      if (isVisible) {
        element.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ04sQ0FBQztFQUVEbUIsTUFBTSxDQUFDL0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMEIsUUFBUSxDQUFDO0FBQy9DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEVGOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnJpZGdlIFB1Ymxpc2hlciBscC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz81MWU2Iiwid2VicGFjazovL1dlYnJpZGdlIFB1Ymxpc2hlciBscC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vV2VicmlkZ2UgUHVibGlzaGVyIGxwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWJyaWRnZSBQdWJsaXNoZXIgbHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZvaWNl44K744Kv44K344On44Oz44Gu57aa44GN44KS6Kqt44KA44Oc44K/44Oz44Gu6ZaL6ZaJ44Gu44Ki44OL44Oh44O844K344On44OzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8g5YWo44Gm44GuIC52b2ljZV9fY2FyZCDjgpLlj5blvpdcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudm9pY2VfX2NhcmRcIik7XG5cbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAvLyDjgqvjg7zjg4nlhoXjga7lv4XopoHjgaropoHntKDjgpLlj5blvpdcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudm9pY2VfX2Rlc2NyaXB0aW9uVGV4dFwiKTtcbiAgICAgICAgY29uc3QgcmVhZE1vcmVCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudm9pY2VfX3JlYWRNb3JlVGV4dFwiKTtcblxuICAgICAgICAvLyDjg5zjgr/jg7PjgYzlrZjlnKjjgZnjgovloLTlkIjjga7jgb/jgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLov73liqBcbiAgICAgICAgaWYgKHRleHRFbGVtZW50ICYmIHJlYWRNb3JlQnRuKSB7XG4gICAgICAgICAgICByZWFkTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOODhuOCreOCueODiOOBjOWxlemWi+eKtuaFi+OBi+eiuuiqjVxuICAgICAgICAgICAgICAgIGlmICh0ZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRNb3JlQnRuLnRleHRDb250ZW50ID0gXCLntprjgY3jgpLoqq3jgoBcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRNb3JlQnRuLnRleHRDb250ZW50ID0gXCLplonjgZjjgotcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Oh44OL44Ol44O85pys5L2T44KS44Kv44Oq44OD44Kv5b6M44Gr6Ieq5YuV44Gn6ZaJ44GY44KLJuipsuW9k+OCu+OCr+OCt+ODp+ODs+OBq+OCueODoOODvOOCueOCueOCr+ODreODvOODq+OBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2xvYmFsTmF2aWdhdGlvbl9fbWVudUl0ZW0gYVwiKTtcbiAgICBjb25zdCBkcmF3ZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJhd2VyX19jaGVja2JveFwiKTtcblxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDjg5rjg7zjgrjlhoXjgrnjgq/jg63jg7zjg6vjgpLjgrnjg6Djg7zjgrrjgavlrp/ooYxcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844KS6ZaJ44GY44KLXG4gICAgICAgICAgICBkcmF3ZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuLy8g44Kz44Oz44OG44Oz44OE44Gu44OV44Kn44O844OJ44Kk44Oz44Gu44Ki44OL44Oh44O844K344On44OzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gLmZhZGVpblNjcm9sbCDjgaggLmZhZGVpblVwU2Nyb2xsIOOBruS4oeaWueOCkuWPluW+l1xuICAgIGNvbnN0IGZhZGVpbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLWZhZGVpblNjcm9sbCwgLmMtZmFkZWluVXBTY3JvbGxcIik7XG5cbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgZmFkZWluRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45OyAvLyDjgrnjgq/jg63jg7zjg6vph4/jga7oqr/mlbTvvIjnlLvpnaLkuIvpg6jjga45MCXvvIlcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHJlY3QudG9wIDwgdGhyZXNob2xkICYmIHJlY3QuYm90dG9tID4gMDtcblxuICAgICAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG59KTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvYXNzZXRzL2pzL2FwcFwiOiAwLFxuXHRcImFzc2V0cy9jc3Mvc3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rV2VicmlkZ2VfUHVibGlzaGVyX2xwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1dlYnJpZGdlX1B1Ymxpc2hlcl9scFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9jc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL2Nzcy9zdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FyZCIsInRleHRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInJlYWRNb3JlQnRuIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsIm1lbnVMaW5rcyIsImRyYXdlckNoZWNrYm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rIiwidGFyZ2V0SWQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHJpbmciLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY2hlY2tlZCIsImZhZGVpbkVsZW1lbnRzIiwib25TY3JvbGwiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRocmVzaG9sZCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaXNWaXNpYmxlIiwidG9wIiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==