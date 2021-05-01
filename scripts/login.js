document.addEventListener('submit', userLogin);

function userLogin(event) {
  event.preventDefault();
  let email = document.querySelector("#login-name").value;
  let password = document.querySelector("#login-password").value;
  firebaseSetPersistence().then(() => {
    firebaseSignIn(email, password).then(user => {
      console.log(user);
      console.log("login successful")
    })
  })
  
}

onAuthChange().then(user => {
  if (user) {
    location.replace('./swipeinterfacev2.html');
  }
})