//javascript file linked to highscores.html

// global variables

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScorePrint = document.querySelector("#highScorePrint");

//prints user's high score to the leaderboard
window.addEventListener("load", function () { printHighScore() });

function printHighScore() {
  highscores = scoresSorted(highscores, 'score');
  for (var i = 0; i < highscores.length; i++) {
    console.log(highscores[i].score);
    //Creates new line item for each score
    var home = document.createElement("li");
    var words = document.createTextNode(highscores[i].initials + ": " + highscores[i].score);
    home.appendChild(words);
    highScorePrint.appendChild(home);
  }
}

//sort the scores best to worst
function scoresSorted(array, key) {
  return array.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}
