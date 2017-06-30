var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, write);

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

var seconds = 0;
var isOn = false;
const interval = setInterval( () => {
  seconds++
  if(seconds % 3 == 0) {
    gpio.write(32, true)
  }else if (seconds % 2 == 0) {
    gpio.write(32, false)
  }
}, 1000 )
