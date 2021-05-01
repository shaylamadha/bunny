

document.addEventListener("submit", saveSettings);

function saveSettings(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const birthday = document.querySelector("#birthday").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector('#password').value;
    const money = document.querySelector("#money").value;
    const bio = document.querySelector("#bio").value;
    const pic = document.querySelector("#pic").value;
    firebaseSignUp(email, password).then(user => {
        const data = {
            name, birthday, email, money, bio, pic
        }
        db.collection("users").add(data).then(() => {
            console.log('signup complete!')
            location.replace("./swipeinterfacev2.html")
        })
    })
}


