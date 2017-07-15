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
var pin = [7, 13, 15,
           29, 31, 32,
           33, 11, 27,
           37, 35, 26,
           22, 18, 16,
           35]

io.setup(pin[0], io.DIR_OUT, () => {
  db.child('rooms/sOffice')
    .on('value', (snapshot) => {
    io.write(pin[0], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[1], io.DIR_OUT, () => {
  db.child('rooms/sLibrary')
    .on('value', (snapshot) => {
    io.write(pin[1], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[2], io.DIR_OUT, () => {
  db.child('rooms/sGuestBathroom')
    .on('value', (snapshot) => {
    io.write(pin[2], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[3], io.DIR_OUT, () => {
  db.child('rooms/sGallery')
    .on('value', (snapshot) => {
    io.write(pin[3], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[4], io.DIR_OUT, () => {
  db.child('rooms/sGuestBathroom')
    .on('value', (snapshot) => {
    io.write(pin[4], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[5], io.DIR_OUT, () => {
  db.child('rooms/sHomeworkRoom')
    .on('value', (snapshot) => {
    io.write(pin[5], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[6], io.DIR_OUT, () => {
  db.child('rooms/sKitchen')
    .on('value', (snapshot) => {
    io.write(pin[6], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[7], io.DIR_OUT, () => {
  db.child('rooms/sLivingRoom')
    .on('value', (snapshot) => {
    io.write(pin[7], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[8], io.DIR_OUT, () => {
  db.child('rooms/sDiningRoom')
    .on('value', (snapshot) => {
    io.write(pin[8], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[9], io.DIR_OUT, () => {
  db.child('rooms/sNeekon\'sBedroom')
    .on('value', (snapshot) => {
    io.write(pin[9], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[10], io.DIR_OUT, () => {
  db.child('rooms/sGuestBathroom')
    .on('value', (snapshot) => {
    io.write(pin[10], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[11], io.DIR_OUT, () => {
  db.child('rooms/skitchen')
    .on('value', (snapshot) => {
    io.write(pin[11], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[12], io.DIR_OUT, () => {
  db.child('rooms/sRyan\'sBedroom')
    .on('value', (snapshot) => {
    io.write(pin[12], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[13], io.DIR_OUT, () => {
  db.child('rooms/sRyan\'sBathroom')
    .on('value', (snapshot) => {
    io.write(pin[13], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[14], io.DIR_OUT, () => {
  db.child('rooms/sOfficeBathroom')
    .on('value', (snapshot) => {
    io.write(pin[14], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})

io.setup(pin[15], io.DIR_OUT, () => {
  db.child('rooms/sMasterBathrooms')
    .on('value', (snapshot) => {
    io.write(pin[15], snapshot.val(), (err) => {
      if (err) throw err
    })
  })
})