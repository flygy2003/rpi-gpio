var gpio = require('rpi-gpio');

gpio.setup(32, gpio.DIR_OUT, write);

function write() {
    gpio.read(32, true, function(err, value) {
        console.log('The value is ' + value);
    });
}
