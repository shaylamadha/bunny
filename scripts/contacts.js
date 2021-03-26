let deleteBtns = document.getElementsByClassName("delete-me");
console.log(deleteBtns)

document.addEventListener("click", e => {
    console.log('click event triggered')
    console.log(e.target);
    if (e.target === deleteBtns[0]) {
        console.log(true)
    }
})