var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, write);

function write() {
    gpio.write(32, true, function(err) {
        if (err) throw err;
    });
}
