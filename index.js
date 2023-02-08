
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (event) {
    console.log(event);
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});