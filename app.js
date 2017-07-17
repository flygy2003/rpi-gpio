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
            15, 29, 
            31, 33, 
            35, 7, 
            12, 16, 
            18, 22, 
            32, 36, 
            38, 40]

// var pins = [7, 13, 15, 29, 31, 32, 33, 11, 40, 37, 32, 26, 22, 18, 16, 22]

var roomies = [
             'skitchen',
             'sLivingRoom',
             'sOffice',
             'sOfficeBathroom',
             'sNeekon\'sBedroom',
             'sHomeworkRoom',
             'sRyan\'sBathroom',
             'sRyan\'sBedroom',
             'sDiningRoom',
             'sGallery',
             'sGuestBathroom',
             'sLibrary',
             'sFamilyRoom',
             'sMasterBedroom',
             'sMasterBathrooms',
             'sAll']
var rooms = roomies.sort()
io.setup(pins[0], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[0]}`)
    .on('value', (snapshot) => {
    io.write(pins[0], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[1], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[1]}`)
    .on('value', (snapshot) => {
    io.write(pins[1], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[2], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[2]}`)
    .on('value', (snapshot) => {
    io.write(pins[2], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[3], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[3]}`)
    .on('value', (snapshot) => {
    io.write(pins[3], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[4], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[4]}`)
    .on('value', (snapshot) => {
    io.write(pins[4], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[5], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[5]}`)
    .on('value', (snapshot) => {
    io.write(pins[5], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[6], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[6]}`)
    .on('value', (snapshot) => {
    io.write(pins[6], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[7], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[7]}`)
    .on('value', (snapshot) => {
    io.write(pins[7], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[8], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[8]}`)
    .on('value', (snapshot) => {
    io.write(pins[8], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[9], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[9]}`)
    .on('value', (snapshot) => {
    io.write(pins[9], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[10], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[10]}`)
    .on('value', (snapshot) => {
    io.write(pins[10], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[11], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[11]}`)
    .on('value', (snapshot) => {
    io.write(pins[11], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[12], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[12]}`)
    .on('value', (snapshot) => {
    io.write(pins[12], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[13], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[13]}`)
    .on('value', (snapshot) => {
    io.write(pins[13], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[14], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[14]}`)
    .on('value', (snapshot) => {
    io.write(pins[14], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})
io.setup(pins[15], io.DIR_OUT, () => {
  db.child(`rooms/${rooms[15]}`)
    .on('value', (snapshot) => {
    io.write(pins[15], snapshot.val(), (err) => {
      if (err) {
        throw err
      }
    })
  })
})