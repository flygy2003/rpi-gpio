var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, write);

function write() {
    setTimeout(function() {
      gpio.write(32, true, off);
    }, 3000);
}

function off() {
  setTimeout(function() {
    gpio.write(32, false, write);
  }, 2000);
}
