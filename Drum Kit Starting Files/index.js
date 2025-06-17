for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        keyPressed(this.innerHTML);

        btnAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",  (event) => {
    keyPressed(event.key);

    btnAnimation(event.key);
})

function keyPressed(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3").play();
        break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3").play();
        break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3").play();
        break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3").play();
        break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3").play();
        break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3").play();
        break;

        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3").play();
        break;

        default: console.log(key);
        }
}

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}



