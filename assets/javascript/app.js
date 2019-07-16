// My elements
var start = document.getElementById("start");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var showRightWrong = document.getElementById("rightWrong");

// WINS AND LOSSES

game = {
  wins: [],
  losses: []
}

var wins = 0;
var losses = 0;

var showWins = document.getElementById("wins");
var showLosses = document.getElementById("losses");
var count = 0;
// GAME STUFF
// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;

var questions = [
  {
    q: "What item is used to restore a wounded Z fighter to full health?",
    choiceA: "Z-Sword",
    choiceB: "Saiyan Hair",
    choiceC: "Capsule Corp Medicine",
    choiceD: "Senzu Bean",
    a: "D"
  },
  {
    q: "What's Goku's wife's name?",
    choiceA: "Cha Chi",
    choiceB: "Cho Cha",
    choiceC: "Chi Chi",
    choiceD: "Chi Cha",
    a: "C"
  },
  {
    q: "What planet does Vegeta and Goku come from?",
    choiceA: "Planet Z103",
    choiceB: "Planet Frieza",
    choiceC: "Planet Vegeta",
    choiceD: "Planet of the Kais",
    a: "C"
  },
  {
    q: "What technique does Goku use to get from one place to another instantly?",
    choiceA: "The One Second Jump",
    choiceB: "Instant Transmission",
    choiceC: "Super Saiyan Wormhole",
    choiceD: "Teleportation Zap",
    a: "B"
  },
  {
    q: "How has Dr. Gero been collecting data on the Z Fighters after all these years?",
    choiceA: "There's a rat among the Z Fighters",
    choiceB: "He had Android 19 observe them from afar",
    choiceC: "A mechanical fly has been following the Z Fighters constantly",
    choiceD: "He used Baba's crystal ball",
    a: "C"
  }
];




// FUNCTIONS
// ==============================================================================

// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  if (questionIndex <= (questions.length - 1)) {
    document.querySelector("#question").innerHTML = questions[questionIndex].q,
    document.querySelector("#A").innerHTML = questions[questionIndex].choiceA;
    document.querySelector("#B").innerHTML = questions[questionIndex].choiceB;
    document.querySelector("#C").innerHTML = questions[questionIndex].choiceC;
    document.querySelector("#D").innerHTML = questions[questionIndex].choiceD;
  }
  // If there aren't, render the end game screen.
  else {
    document.querySelector("#question").innerHTML = "Game Over!";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
  }
}

// Function that updates the score...
function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}

// MAIN PROCESS
// ==============================================================================

start.addEventListener("click", startQuiz)
// Start Quiz
function startQuiz() {


  start.style.display = "none";
  run();
  quiz.style.display = "block";

  // run();
  //  Interval Demonstration
  // TIMER
  //  Set our number counter to 30.
  var number = 30;

  //  Variable that will hold our interval ID when we execute
  //  the "run" function
  var intervalId;

  //  When the stop button gets clicked, run the stop function.
  // $("#stop").on("click", stop);

  //  When the resume button gets clicked, execute the run function.
  // $("#resume").on("click", run);

  //  The run function sets an interval
  //  that runs the decrement function once a second.
  //  *****BUG FIX******** 
  //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + "Time Left: " + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      $("#show-number").html("<h2>" + "TIME'S UP!" + "</h2>");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();

}
// Calling functions to start the game.
renderQuestion();
updateScore();
//  This checks for my answers
function checkMyAnswers(letter) {
  if (questionIndex === 0) {
    if (letter == questions[questionIndex].a) {
      showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
      score++;
      updateScore();
    } else {
      showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
    }
  }
}

// When the user presses a key, it will run the following function...
function userInput(letter) {
  // console.log(letter);
  // console.log($(this));
  // If there are no more questions, stop the function.
  if (questionIndex === questions.length) {
    return;
  }
  // This checks for my function
  checkMyAnswers(letter);
  // console.log(letter);
  // console.log(questions[questionIndex].a);
  // if (questionIndex === 0) {
  //   if (letter == questions[questionIndex].a) {
  //     showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
  //     score++;
  //     updateScore();
  //   } else {
  //     showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
  //   }
  // }
  // if (questionIndex === 1) {
  //   if (letter == questions[questionIndex].a) {
  //     showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
  //     score++;
  //     updateScore();
  //   } else {
  //     showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
  //   }
  // }
  // if (questionIndex === 2) {
  //   if (letter == questions[questionIndex].a) {
  //     showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
  //     score++;
  //     updateScore();
  //   } else {
  //     showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
  //   }
  // }
  // if (questionIndex === 3) {
  //   if (letter == questions[questionIndex].a) {
  //     showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
  //     score++;
  //     updateScore();
  //   } else {
  //     showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
  //   }
  // }
  // if (questionIndex === 4) {
  //   if (letter == questions[questionIndex].a) {
  //     showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
  //     score++;
  //     updateScore();
  //   } else {
  //     showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
  //   }
  // }

  // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  // var userInput = event.key.toLowerCase();

  // Makes sure no other button can be pressed
  // if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d") {

    // If they guess the correct answer, increase and update score, alert them they got it right.
    // if (userInput === questions[questionIndex].a) {
    //   showRightWrong.innerHTML = "<span class='text-success'>" + "CORRECT!</span>";
    //   alert("Correct!");
    //   score++;
    //   updateScore();
    // }
    // // If wrong, alert them they are wrong.
    // else {
    //   showRightWrong.innerHTML = "<span class='text-danger'>" + "NOPE!</span>";
    //   // alert("Wrong!");
    // }

    // Increment the questionIndex variable and call the renderQuestion function.
    questionIndex++;
    renderQuestion();

  // }

};


