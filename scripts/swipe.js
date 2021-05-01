let user = null;
onAuthChange().then(user1 => {
    if (!user1) {
      location.replace('./login.html');
    } else {
        user = user1;
        console.log(user.email)
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

var name_text = document.getElementById("name");
var comment_text = document.getElementById("comment");

async function nextUser(users) { 
    let copyOfUsers = [...users];
    let nextUser = copyOfUsers.shift();
    console.log(nextUser);
    profile_img.src = nextUser.pic;
    name_text.textContent = nextUser.name;
    comment_text.textContent = nextUser.bio + "email: " + nextUser.email;
    return copyOfUsers;
}

let users = [];
db.collection("users").get().then(async snap => {
    users = await snap.docs.map(doc => doc.data());
    console.log(users)
    nextUser(users)
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
    console.log('One of the buttons clicked!')
    console.log(e.target);
    if (e.target === swipeBtns[0]) {
        console.log("Dislike clicked")
    } else if (e.target === swipeBtns[1]) {
        console.log("Like clicked")
    }
})