let deleteBtns = document.getElementsByClassName("delete-me");
const contactCards = document.getElementById("contacts");
let cards = contactCards.getElementsByClassName("contact");
let userHistory = null;

onAuthChange().then(user => {
    if (!user) {
      location.replace('./login.html');
    } else {
      console.log(user.email)
      db.collection("history").doc(user.email).get().then(doc => {
        if (doc.exists) {
            let docDat = doc.data();
            userHistory = docDat;
            for (let i = 1; i <= userHistory.like.length; i++) {
              generateCard("Person " + i, userHistory.like[i - 1]);
            }
        }
    })
    }
  })

function generateCard(name, email) {
  // <div class="user-card contact">
  //           <div class="card">
  //               <div class="">
  //                   <a href="#">Person 1</a>
  //               </div>
  //           </div>
  //           <div class="card">Contact Info</div>
  //       </div>
  const newCard = document.createElement("div");
    const card1 = document.createElement("div");
      const in1 = document.createElement("div");
        const a1 = document.createElement("a");
        //const im = document.createElement("")
      const card2 = document.createElement("div");

  newCard.setAttribute("class", "user-card contact");
  card1.setAttribute("class", "card");
  a1.innerText = name;
  card2.setAttribute("class", "card");
  card2.innerText = email;
  contactCards.appendChild(newCard);
  newCard.appendChild(card1);
  card1.appendChild(in1);
  in1.appendChild(a1);
  newCard.appendChild(card2);


}

console.log(cards);
document.addEventListener("click", e => {
    console.log(e.target);
    for (var i = 0; i < deleteBtns.length; i++) {
        if (e.target === deleteBtns[i]) {
            //fetch request to remove from database
            //delete card
            cards[i].remove();
        }
    }
})