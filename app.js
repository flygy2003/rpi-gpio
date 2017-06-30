var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, () => {
  var seconds = 0;
  var isOn = false;
  const interval = setInterval( () => {
    seconds++
    if(seconds == 3) {
      if(isOn) {
        gpio.write(32, false)
      }else {
        gpio.write(32, true)
      }
      isOn = !isOn
      seconds = 0
    }
  }, 1000 )
} )

// function write() {
//   gpio.write(32, true, off);
//     setTimeout(function() {
//     }, 3000);
// }
//
// function off() {
//   gpio.write(32, false, write);
//   setTimeout(function() {
//   }, 1000);
// }
