// let email = "ff@gmail.com";
// let password = "ffffff";

firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in 
  var user = userCredential.user;
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  // ..
});