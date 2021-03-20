
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
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
				currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // if there's no matching audio element, then quit
    if (!audio) { return; }

		//animate the div that corresponds일치하다 to the key we pressed
		currentKey.classList.add("playing");

    //2. debugger;
    audio.currentTime = 0;
    audio.play();
  }

	//remove the playing class after the transition fires the first time
	function resetKey(event) {
		//3. debugger; event 탭 열면 propertyName 나옴
		if (event.propertyName === "transform") {
			this.classList.remove("playing");
		}

		//console.log(this);
	}
  // event handling goes at the bottom
  keyGraphics.forEach(key => key.addEventListener("transitionend", resetKey));
	//
  window.addEventListener("keyup", catchKeyCode);
})();
