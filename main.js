$(document).ready(function(){
  console.log('loaded');

  //adds jQuery button style
  $('button').button();

  //hides elements and adds effect when page loads
  $('#title').hide();
  $('#title').slideDown(2000);

  $('.wofimg').hide();
  $('.wofimg').slideDown(2000);

  $('h3').hide();
  $('h3').slideDown(2000);

  //removes user text from input after buttons are clicked
  $("#letter-input").click(function(){
    this.value = '';
  });
  $("#solve-input").click(function(){
    this.value = '';
  });


  //grab elements and hold in variables
  var categoryName = document.querySelector('#category-name');
  var playButton = document.querySelector('#play-button');
  var inputButton = document.querySelector('#input-button');
  var solveButton = document.querySelector('#solve-button');
  var newGameButton = document.querySelector('#new-game-button');
  var gameTag = document.querySelector("#game-tag");
  var entryForm = document.querySelector("#entry-form");
  var hintSpot = document.querySelector("#hint-location");
  var response = document.getElementById('wrong');
  var showAnswerButton = document.getElementById('show-answer');


  //variables holding game answers
  var game1 = "guitar";
  var game2 = "drum";
  var game3 = "saxophone";
  var game4 = "ukulele";
  var game5 = "piano";
  var game6 = "xylophone";
  var game7 = "cymbal";
  var game8 = "harmonica";
  var game9 = "bass";
  var game10 = "triangle";
  var game11 = "violin";
  var game12 = "trombone";
  var game13 = "cowbell";
  var game14 = "trumpet";
  var game15 = "harp";

  //array of games
  var gameArr = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15];

  //array of initial hints
  var hintArr = ["Hint: 'Solid or Hollow' ", "Hint: 'Stay on Beat'", "Hint: 'Cool Cats Play This'", "Hint: 'Smile When Playing This'", "Hint: 'Play With Your Fingers'", "Hint: 'Similar To Piano'", "Hint: 'Crash!'", "Hint: 'Play With Your Mouth'", "Hint: 'Low Frequency'", "Hint: 'Mathematical Shape'", "Hint: 'Pluck or Bow'", "Hint: 'Powerful Brass'", "Hint: 'Farm Animal'", "Hint: 'Lead Brass'", "Hint: 'Large, Angled String Instrument'"];

  //array of secondary hints
  var hintArrTwo = ["Last Hint! ...6 Strings", "Last Hint! ...Hit This Instrument", "Last Hint! ...Bill Clinton, Lisa Simpson, Kenny G", "Last Hint! ...Hawaiian Music", "Last Hint! ...Black + White = 88", "Last Hint! ...Vibes or Bells", "Last Hint! ...Ride or Hi-Hat", "Last Hint! ...Blow or Inhale Into", "Last Hint! ...Slap or Pluck", "Last Hint! ...Ding!", "Last Hint! ...Orchestral Lead", "Last Hint! ...Long Slide", "Last Hint! ...Moo", "Last Hint! ...'Taps' Instrument", "Last Hint! ...Dream-Like Sound"];

  //empty variables
  var random;
  var arrayIndex;
  var currentGame;
  var firstHint;
  var wordSplit;
  var children;

  //counter variables
  var counter = 0;
  var guessCount = 10;

  //page loads without entry form or answer button
  entryForm.style.display = "none";
  showAnswerButton.style.visibility = "hidden";
  // display category name
  categoryName.style.display = "none";



  //play game button function
  function randomGame(currentGame) {

    //play button click function
    playButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('play button clicked');

      //saves random number in variable
      random = Math.random();
      //same variable holds its value times the length of the game array
      random = random * gameArr.length;
      //arrayIndex holds the random number rounded to a whole number
      arrayIndex = Math.floor(random);

      //currentGame holds randomly generated index of array of games so a random game gnerates each time a new game is started
      currentGame = gameArr[arrayIndex];
      console.log(currentGame);

      // firstHint holds randomly generated index of array of hints to make sure the hint is for the correct game
      firstHint = hintArr[arrayIndex];
      console.log(firstHint);

      // secondHint holds randomly generated index of array of seconary hints to make sure the hint is for the correct game
      secondHint = hintArrTwo[arrayIndex];
      console.log(secondHint);

      //newGame holds string of currentGame
      newGame = currentGame.toString();
      console.log(newGame);

      //displayHint holds string of first hint
      displayHint = firstHint.toString();
      console.log(displayHint);

      //wordSplit holds an array of individual letters of current game word
      wordSplit = currentGame.split('');
      console.log(wordSplit);

      //loop length of 'wordSplit' array and fill array with placeholders for each letter
      for (var i = 0; i < wordSplit.length; i++) {
        //placeHolder creates NEW span element
        var placeHolder = document.createElement('span');

        //adding images as placeholders to new span text
        placeHolder.innerHTML = `<img src=stylesheets/css/vanna.jpg height="75px" width="75px" class="img-thumbnail">`;

        //adds child element spans containing 'image' to h2 on DOM to represent each letter of puzzle
        gameTag.appendChild(placeHolder);
      };//end for loop

      //adds new span content to variable children
      children = gameTag.childNodes;

      //append hint to DOM
      hintSpot.textContent = displayHint;

      //display entry form to enter letter or solve puzzle
      entryForm.style.display = "block";
      // display category name
      categoryName.style.display = "block";

      //hide play button
      playButton.style.display = "none";

  })//end click event

};//end randomGame function

//call randomGame function
randomGame();


//click event to reload page and start a new game
newGameButton.addEventListener('click', function() {
  console.log('new game button clicked');
    window.location.reload();
});//end new game click event


//click event to solve puzzle
solveButton.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('solve button clicked');

  //grab solvePuzzle element
  var solvePuzzle = document.getElementById('solve-input');

  //userSolution holds user's solvePuzzle input value
  var userSolution = solvePuzzle.value;
  console.log(userSolution);

  //if statement comparing game answer to user input
  if (userSolution == newGame) {
    //if the puzzle is solved congratulate the user
    response.innerText = "You Solved the Puzzle! Click 'Start New Game' to play again!";
    //append the solution to the puzzle
    gameTag.innerText = newGame;
    //hide the input buttons
    inputButton.style.display = "none";
    solveButton.style.display = "none";
  } else if (userSolution != newGame) {
    //tells user if they guess wrong
    response.innerText = "Incorrect Guess! Try again or start a new game!";
  } else {
  }; //end if statement


  //count clicks to append second hint and remove buttons after 10 clicks
  counter += 1;
  if (counter >= guessCount) {
    response.innerText = "Guess limit has been reached! Start new game!";
    showAnswerButton.style.visibility = "visible";
    inputButton.style.display = "none";
    solveButton.style.display = "none";
  };//end if statement

  //count clicks and append second hint after 3 clicks
  if (counter >= 3) {
    hintSpot.innerText = secondHint;
  } //end if statement

});//end solve button click event


  //input letter button event listener function
  inputButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('input button clicked');

    //grab user letter guess
    var userInput = document.getElementById('letter-input');

    //holds value of user's letter guess
    var letterGuess = userInput.value;
    console.log(letterGuess);

    //empty variable to hold messages to append to user
    var msg = "";

    //if the input is more than 1 letter, tell user to only input 1 letter
    if (letterGuess.length !== 1) {
      msg = 'Error: Enter single letter!';
    }
    //else loop over 'wordSplit' array
    else {
      for (var i = 0; i < wordSplit.length; i++) {
        //if index of wordSplit array is the same as user's guess
        if (wordSplit[i] == letterGuess) {
          console.log(children[i].innerText);

          //append the user's guess to the innertext of the new span's matching index on the DOM
          children[i].innerText = letterGuess;

          // msg variable holds message to user
          msg = "Good Guess!";
        };//ends if statement
      };//ends for loop

    //if msg variable is empty, make the variable equal this message
    if (msg === "") {
        msg = "Sorry, " + " ' " + letterGuess + " ' " + "is not in the puzzle. Try again.";
      }
    };//ends if statement

    //appends whatever the appropriate message is to the DOM - error for more than 1 letter, good guess if it's a match, or letter is not in puzzle and try again
    response.innerText = msg;

    //count clicks to append message that game is over and remove buttons after 10 clicks
    counter += 1;
    if (counter >= guessCount) {
      response.innerText = "Guess limit has been reached! Start new game!";
      showAnswerButton.style.visibility = "visible";
      inputButton.style.display = "none";
      solveButton.style.display = "none";
    };//ends if statement

    // appends second hint after 3 clicks
    if (counter >= 3) {
      hintSpot.innerText = secondHint;
    };//end if statement

  });//end of click function


  //click function for button to display answer
  showAnswerButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('answer button clicked');
    gameTag.innerText = newGame;
  });//end answer button function

});//end window onload
