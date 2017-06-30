var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, write);

function write() {
    setTimeout(function() {
      gpio.write(32, true, function(err) {
        if (err) throw err;
      });
    }, 3000);
    setTimeout(function() {
      gpio.write(32, false, function(err) {
        if (err) throw err;
      });
    }, 2000);
    setTimeout(function() {
      gpio.write(32, true, function(err) {
        if (err) throw err;
      });
    }, 3000);
    setTimeout(function() {
      gpio.write(32, false, function(err) {
        if (err) throw err;
      });
    }, 2000);
    setTimeout(function() {
      gpio.write(32, true, function(err) {
        if (err) throw err;
      });
    }, 3000);
    setTimeout(function() {
      gpio.write(32, false, function(err) {
        if (err) throw err;
      });
    }, 2000);
}
