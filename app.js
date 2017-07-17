var io = require('rpi-gpio')
var fb = require('firebase')
var config = {
  apiKey: "AIzaSyDJ31YrXt8JAPUZHYGNRS8WNjoHaz8ssuE",
  authDomain: "home-b7104.firebaseapp.com",
  databaseURL: "https://home-b7104.firebaseio.com",
  projectId: "home-b7104",
  storageBucket: "home-b7104.appspot.com",
  messagingSenderId: "42864256502"
}
fb.initializeApp(config)

var db = fb.database().ref()
var pins = [11, 13, 
            15, 24, 
            31, 33, 
            35, 37, 
            12, 16, 
            18, 22, 
            32, 36, 
            38, 40]
var i;
for (i in pins) {    
  io.setup(pins[i], io.DIR_OUT, () => {
    console.log(`index: ${i}`)
    db.child(`rooms/${i}`)
      .on('value', (snapshot) => {
      io.write(pins[i], snapshot.val(), (err) => {
        if (err) {
          throw err
        }
      })
    })
  })
} 