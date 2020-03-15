//javascript for the timer

//Global Variables
var userName = document.querySelector("#userName");
var congratulations = document.querySelector("#congratulations");
var yourScore = document.querySelector("#yourScore");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var submitBtn = document.querySelector("#submitNameScore");
var secondsLeft = 90;

function startTimer() {

  var interval = setInterval(function () {
    secondsLeft--;
    document.querySelector("#counterDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);

    // If clock reaches zero hide quiz and display timesUp div
    if (secondsLeft === 0) {
      clearInterval(interval);
      document.querySelector("#boxQuiz").setAttribute("style", "display: none");
      document.querySelector("#timesUp").setAttribute("style", "display: block");
    }
    //If user answers all 5 questions in the time limit. Hides quiz and displays endQuiz div
    else if (currentIndex === 5) {
      clearInterval(interval);
      document.querySelector("#boxQuiz").setAttribute("style", "display: none");
      document.querySelector("#endQuiz").setAttribute("style", "display: block");

      // score calculated by multiplying correct answers by seconds left.
      score = ((score) * (secondsLeft));

      if (isNaN(score === 0)) {
        yourScore.innerHTML = "Your score is: 0";
      } else {
        congratulations.innerHTML = "Congratulations! Let's see how you did.";
        yourScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000)
}



// adds score to leaderboard
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();

  console.log("on submitBtn click print out score: " + score);

  // console log initials
  var initials = userName.value;
  console.log("initials" + initials);

  var finalScore = {
    initials,
    score
  };
  console.log("finalScore" + finalScore);

  // stores in local storage
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(initials, score);
});