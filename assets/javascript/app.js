  var questions = [
    {
      q: "What item is used to restore a wounded Z fighter to full health?",
      c: "\n(a) Z-Sword\n\(b) Saiyan Hair\n(c) Capsule Corp Medicine\n(d) Senzu Bean",
      a: "d"
    },
    {
      q: "What's Goku's wife's name?",
      c: "\n(a) Cha Chi\n\(b) Cho Cha\n(c) Chi Chi\n(d) Chi Cha",
      a: "c"
    },
    {
      q: "What planet does Vegeta and Goku come from?",
      c: "\n(a) Planet Z103\n\(b) Planet Frieza\n(c) Planet Vegeta\n(d) Planet of the Kais",
      a: "c"
    },
    {
      q: "What technique does Goku use to get from one place to another instantly?",
      c: "\n(a) The One Second Jump\n\(b) Instant Transmission\n(c) Super Saiyan Wormhole\n(d) Teleportation Zap",
      a: "b"
    },
    {
      q: "How has Dr. Gero been collecting data on the Z Fighters after all these years?",
      c: "\n(a) There's a rat among the Z Fighters\n\(b) He had Android 19 observe them from afar\n(c) A mechanical fly has been following the Z Fighters constantly\n(d) He used Baba's crystal ball",
      a: "c"
    }
  ];
  
  // We start the game with a score of 0.
  var score = 0;
  // Variable to hold the index of current question.
  var questionIndex = 0;

  // FUNCTIONS
  // ==============================================================================

  // Function to render questions.
  function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector("#question").innerHTML = questions[questionIndex].q, 
      document.querySelector("#choices").innerHTML = questions[questionIndex].c;
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

    // Calling functions to start the game.
    renderQuestion();
    updateScore();

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

      // If there are no more questions, stop the function.
      if (questionIndex === questions.length) {
        return;
      }

      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = event.key.toLowerCase();

      // Only run this code if "t" or "f" were pressed.
      if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d") {

        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questions[questionIndex].a) {
          alert("Correct!");
          score++;
          updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
          alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();

      }

    };
  
  //  Interval Demonstration
  //  Set our number counter to 30.
  var number = 30;

  //  Variable that will hold our interval ID when we execute
  //  the "run" function
  var intervalId;

  //  When the stop button gets clicked, run the stop function.
  $("#stop").on("click", stop);

  //  When the resume button gets clicked, execute the run function.
  $("#resume").on("click", run);

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

