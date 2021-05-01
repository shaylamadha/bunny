let user = null;
let userHistory = {
    dislike: [],
    like:[],
    email: null
}
let histRef = null;
onAuthChange().then(user1 => {
    if (!user1) {
      location.replace('./login.html');
    } else {
        user = user1;
        console.log(user.email)
        histRef = db.collection("history").doc(user.email);
        histRef.get().then(doc => {
            if (doc.exists) {
                let docDat = doc.data();
                userHistory = docDat;
            } else {
                // doc.data() will be undefined in this case
                userHistory.email = user.email
                histRef.set(userHistory)
            }
        })
        
    }
  })

let swipeBtns = document.getElementsByClassName("swipe-button");
console.log(swipeBtns)
var profile_img = document.getElementById("profile-photo");
var p1 = document.getElementById("person1");
var p2 = document.getElementById("person2");
var p3 = document.getElementById("person3");
var p4 = document.getElementById("person4");
var p5 = document.getElementById("person5");


var name_text = document.getElementById("name-txt");
var comment_text = document.getElementById("bio-txt");
var email_text = document.getElementById("email-txt");
var bday_text = document.getElementById("bday-txt");
var venmo_text = document.getElementById("venmo-txt");


function nextUser(users) { 
    console.log(users)
    let copyOfUsers = [...users];
    let nextUser = copyOfUsers.shift();
    if (!nextUser) {
        console.log('There are no more users :(');
        return [];
    }
    console.log(userHistory)
    for (let i = 0; i < userHistory.like.length; i++) {
        if (userHistory.like[i] == nextUser) {
            return nextUser(copyOfUsers);
        }
    }

    for (let i = 0; i < userHistory.dislike.length; i++) {
        if (userHistory.dislike[i] == nextUser) {
            return nextUser(copyOfUsers);
        }
    }

    profile_img.src = nextUser.pic;
    name_text.textContent = nextUser.name;
    comment_text.textContent = nextUser.bio;
    email_text.textContent = nextUser.email;
    venmo_text.textContent = nextUser.money;
    return copyOfUsers;
}

let users = [];
db.collection("users").get().then(async snap => {
    users = await snap.docs.map(doc => doc.data());
    console.log(users)
    users = nextUser(users)
    //get users
    
    // profile_img.src = "./images/justin.jpg"
    // // p1.src = "./images/lion.jpg"
    // // p2.src = "./images/lion.jpg"
    // // p3.src = "./images/lion.jpg"
    // // p4.src = "./images/lion.jpg"
    // // p5.src = "./images/lion.jpg"

    // name_text.textContent = "Justin"
    // comment_text.textContent = "What's my ..."

})


document.addEventListener("click", e => {
    console.log(e.target);
    if (e.target === swipeBtns[0]) {
        userHistory.dislike.push(email_text.textContent);
        histRef.set(userHistory);
        users = nextUser(users);

    } else if (e.target === swipeBtns[1]) {
        userHistory.like.push(email_text.textContent);
        histRef.set(userHistory);
        users = nextUser(users);
    }
})