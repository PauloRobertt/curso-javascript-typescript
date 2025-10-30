/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./src/A030-ExercicioVideo/A030-ExercicioVideo.ts ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
;
class VideoPlayer {
    videoPlayer;
    buttonStart;
    buttonStop;
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.buttonStart = videoPlayerElements.buttonStart;
        this.buttonStop = videoPlayerElements.buttonStop;
    }
    iniciarEventos() {
        this.buttonStart.addEventListener('click', () => {
            this.start();
        });
        this.buttonStop.addEventListener('click', () => {
            this.stop();
        });
    }
    start() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.buttonStart.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.buttonStart.innerText = 'Play';
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.buttonStart.innerText = 'Play';
    }
}
const videoPlayerExercicio = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    buttonStart: document.querySelector('.start'),
    buttonStop: document.querySelector('.stop')
});
videoPlayerExercicio.iniciarEventos();


/******/ })()
;
//# sourceMappingURL=bundle.js.map