let deleteBtns = document.getElementsByClassName("delete-me");
const contactCards = document.getElementById("contacts");
let cards = contactCards.getElementsByClassName("contact");
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