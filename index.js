document.addEventListener("DOMContentLoaded", function getText() {
    console.log("The DOM has loaded")
});

function getText () {
    let text = document.getElementById('text');
    text.innerText = "This is really cool!"
}