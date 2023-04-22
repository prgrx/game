class JoyTest {
  constructor() {
    this.blobsContainer = document.querySelectorAll('.blobs');
    this.blobs = document.querySelectorAll('.blob');

    window.addEventListener('gamepadconnected', event => {
      this.stateCheck();
    });
  }

  stateCheck() {
    window.requestAnimationFrame(() => {
      this.gamepads = navigator.getGamepads();
      this.gamepad = this.gamepads[0];
      this.padStatus();
      this.stateCheck();
    });
  }

  padStatus() {
    this.gamepad.buttons.forEach((button, index) => {
      if (this.blobs[index]) {
        this.blobs[index].classList.remove('pressed');
        if (button.pressed) {
          this.blobs[index].classList.add('pressed');
        }
      }
    });

    const x = this.gamepad.axes[0];
    const y = this.gamepad.axes[1];

    this.blobsContainer[0].style.transform = `translate(${x}em, ${y}em)`;
  }}


new JoyTest();