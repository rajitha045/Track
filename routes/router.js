var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require(".././keys/TrackBand-b1f22818544a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trackband-iot.firebaseio.com"
});
admin.database.enableLogging(true);
var db = admin.database();

var ref = db.ref("users");


// const email = 'rohit16048@iiiitd.ac.in';
//
// admin.database().ref('users').orderByChild('email').equalTo(email).once('value')
//     .then((snapshot) => {
//
//       console.log(email, snapshot.key, snapshot.val());
//
//       // snapshot.val() always returns null
//
//     })
//     .catch((error) => {
//
//       console.error(error);
//
//     });

// Attach an asynchronous callback to read the data at our posts reference
ref.orderByChild('email').once('value').then(function(snapshot){
        console.log(snapshot.child("email").val());
});










router.get('/', function (req, res, next) {
res.render('../public/home.ejs',{

          });
});



module.exports = router;
