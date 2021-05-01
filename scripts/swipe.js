onAuthChange().then(user => {
    if (!user) {
      location.replace('./login.html');
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





document.addEventListener("click", e => {
    console.log('One of the buttons clicked!')
    console.log(e.target);
    if (e.target === swipeBtns[0]) {
        console.log("Dislike clicked")
    } else if (e.target === swipeBtns[1]) {
        console.log("Like clicked")
        db.collection("users").add( {
            bio: "person3",
            birthday:"./images/hotgal.jpg",
            email:"abcde@gmail.com",
            name: "bob noth",
            pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        })
    }
    console.log(document.getElementsByClassName("texts"))
    profile_img.src = "./images/justin.jpg"
    p1.src = "./images/lion.jpg"
    p2.src = "./images/lion.jpg"
    p3.src = "./images/lion.jpg"
    p4.src = "./images/lion.jpg"
    p5.src = "./images/lion.jpg"

    name_text.textContent = "Justin"
    comment_text.textContent = "What's my ..."

})

//get users
db.collection("users").get().then(querySnapShot => {
    querySnapShot.forEach(doc => {
        //console.log(doc.data());
    })
})