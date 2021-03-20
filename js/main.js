
// IIFE => research on MDN (also called the module pattern)
(() => {
  // select all of the keyboard key graphics
  const keyGraphics = document.querySelectorAll('.key');

	// functions go in the middle
	//
	// get the keycode so that we can match it to an audio element
	//(e) = event
  function catchKeyCode(event) {
		//let key = event.KeyCode;

		//1. debugger;
		//`` = this is javascript template string =>MDN
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // if there's no matching audio element, then quit
    if (!audio) { return; }

    //debugger;
    audio.currentTime = 0;
    audio.play();
  }
  // event handling goes at the bottom
  // keyGraphics.forEach(key => key.addEventListener("keyup", catchKeyCode));
  window.addEventListener("keyup", catchKeyCode);
})();
