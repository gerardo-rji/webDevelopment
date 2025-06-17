let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(".btn").click(function () {
    let userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(this.id);

    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("h1").html("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4); // 0 - 3
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeTo(50, .5).fadeOut(50).fadeIn(50).fadeTo(50, 1);

    playSound(randomChosenColour);
}

function playSound(name) {
    let sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

$(document).one("keydown", function (){
    $("h1").html("Level 0");
    nextSequence();
    }
)

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence()
            }, 1000);
        }

    } else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over")
        }, 200)

        $("h1").html("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    $(document).one("keydown", function (){
        location.reload();
    }
)
}

