// javascript file for index.html

// creation of objects holding quiz questions, choices and answers
var quizQuestions = [
    {
        title: "Which data type is used for true and false statements?",
        choices: ["strings", "booleans", "prompts", "numbers"],
        answer: "booleans"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Color Swatch Situations", "Computer Simulated Scenarios", "Cascading Style Sheets", "Corrective Syntax System"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What is used to create responsive, interactive elements for web pages?",
        choices: ["javascript", "arrays", "HTML", "Git Bash"],
        answer: "javascript"
    },
    {
        title: "What allows you to run a block of code a set number of times?",
        choices: ["fruit loops", "loop de loops", "while loops", "for loops"],
        answer: "for loops"
    },
    {
        title: "What describes a function which is a property of an object?",
        choices: ["console", "method", "variable", "query"],
        answer: "method"
    },
  
  ];

  //Global Variables
var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");
var currentIndex = 0;
var score = 0;

// Event Listener to change from the instructions div to quiz div
startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index" + currentIndex);
    document.querySelector("#boxInstructions").style.display = "none"; 
    document.querySelector("#boxQuiz").style.display = "block";
    showQuestion();
});
// Places the objects from var quizQuestions into the html document by selecting id
function showQuestion() {
    var question = quizQuestions[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#A").innerHTML = question.choices[0];
    document.querySelector("#B").innerHTML = question.choices[1];
    document.querySelector("#C").innerHTML = question.choices[2];
    document.querySelector("#D").innerHTML = question.choices[3];
}
// Listener to see what answer is clicked
for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();  
        
        //correct responses
        if(event.currentTarget.innerText === quizQuestions[currentIndex].answer){
            score++;
            console.log(score); 
            document.querySelector("#answers").innerHTML = "correct";
        } else {
           //incorrect responses 
            document.querySelector("#answers").innerHTML = "wrong";
            secondsLeft = secondsLeft - 10;
        }
        //adding 1 to the current index to move onto next question
        console.log(currentIndex);
        currentIndex++;
        
        if (currentIndex < 5) {
        
        showQuestion();
        }
    });
}