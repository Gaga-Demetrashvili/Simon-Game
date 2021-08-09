


let userClickedPattern = [];

let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let level = 0;

let started = false;

// 1. Function which calls for random number from 1 to 3 

function nextSequence() {

    // 4. Reseting userClicked Pattern to an emty array

    userClickedPattern=[];

    let randomNumber = Math.floor(Math.random() * 4);


// 2. Choosing colour randomly from array with help of randomNumber variable
 
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    
// 3. Adding variable audio, which holds sound brought by constructor function "Audio"

    playSound(randomChosenColour);

    level += 1;

   $("#title-header").text("Level " + level);

}


// 5. Memorizing users clicks in an empty array  

$(".btn").click(function(){

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    // Calling for nextSequence function with 2 secs of delay every time button is clicked

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    playSound(userChosenColour);

})


// 6. Adding sounds on clicks

function playSound(name) {

    let audio = new Audio(name + ".mp3");

    audio.play(); 

}

// 7. Add Animations to User Clicks

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    
    setTimeout (function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// 8. Starting game (calling function) on keypress

$(document).keypress(function(){

    if (!started) {
        nextSequence();
        started = true;
    }

});

function onGameOver () {
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
}


// 9. Function for checking user's answer vs game sequence

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])  {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(nextSequence, 1000);
        }       
    } else {
        playSound("wrong");
        onGameOver();
        $("h1").text("Game Over, Press Any Key to Restart");
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    nextSequence();
}

if (started = true) {
    $(document).keypress(function(){
        startOver();  
    })
}




















