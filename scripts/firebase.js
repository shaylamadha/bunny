var firebaseConfig = {
  apiKey: "AIzaSyApFEL8cCGnwhf3XfuLnP11kQiDj9S7IQg",
  authDomain: "bunny-e19f3.firebaseapp.com",
  projectId: "bunny-e19f3",
  storageBucket: "bunny-e19f3.appspot.com",
  messagingSenderId: "721457363676",
  appId: "1:721457363676:web:4c6a705688d521d4439219",
  measurementId: "G-3050MR5VGH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



function firebaseSignIn(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    resolve(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("login error" + errorMessage)
    reject(errorMessage)
  });
  })
}

function firebaseSetPersistence() {
  return new Promise((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      resolve()
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      reject(errorMessage)
    });
  })
}

function onAuthChange() {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(user)
      } else {
        // No user is signed in.
        console.log('no user detected')
        resolve()
      }
    });
  })
  
}
