// when the document loaded the below functions will be executed
$(document).ready(function () {
  var gameScore = document.getElementById("score").value;
  var gameHighScore = document.getElementById("highscore").value;
  gameScore = 0;
  gameHighScore = 0;

  // storing all the penguin images in one array named penguinImages
  var penguinImages = [
    "images/penguin_1.png",
    "images/penguin_2.png",
    "images/penguin_3.png",
    "images/penguin_4.png",
    "images/penguin_5.png",
    "images/penguin_6.png",
    "images/penguin_7.png",
    "images/penguin_8.png",
    "images/yeti.png",
  ];

  // assigning the penguinImages array to a variable named shufflepenguins.
  var penguinShuffle = shuffle(penguinImages);

  //Initialsing a variable named p1  for the penguin box1
  var box1 = document.getElementById("penguin1");
  box1.addEventListener("click", function () {
    PenguinPop(box1, penguinShuffle[0]);
  });

  //Initialsing a variable named p2  for the penguin box2
  var box2 = document.getElementById("penguin2");
  box2.addEventListener("click", function () {
    PenguinPop(box2, penguinShuffle[1]);
  });

  //Initialsing a variable named p3  for the penguin box3

  var box3 = document.getElementById("penguin3");
  box3.addEventListener("click", function () {
    PenguinPop(box3, penguinShuffle[2]);
  });

  //Initialsing a variable named p4  for the penguin box4
  var box4 = document.getElementById("penguin4");
  box4.addEventListener("click", function () {
    PenguinPop(box4, penguinShuffle[3]);
  });

  //Initialsing a variable named p5  for the penguin box5
  var box5 = document.getElementById("penguin5"); //intialising variable for penguin box 5
  box5.addEventListener("click", function () {
    PenguinPop(box5, penguinShuffle[4]);
  });

  //Initialsing a variable named p6  for the penguin box6
  var box6 = document.getElementById("penguin6");
  box6.addEventListener("click", function () {
    PenguinPop(box6, penguinShuffle[5]);
  });

  //Initialsing a variable named p7  for the penguin box7
  var box7 = document.getElementById("penguin7");
  box7.addEventListener("click", function () {
    PenguinPop(box7, penguinShuffle[6]);
  });

  //Initialsing a variable named p8  for the penguin box8
  var box8 = document.getElementById("penguin8");
  box8.addEventListener("click", function () {
    PenguinPop(box8, penguinShuffle[7]);
  });

  //Initialsing a variable named p9  for the penguin box9
  var box9 = document.getElementById("yeti");
  box9.addEventListener("click", function () {
    PenguinPop(box9, penguinShuffle[8]);
  });

  //triggering function named PenguinPop  when we click on penguin box
  function PenguinPop(e, str) {
    if (e.classList.contains("clicked")) {
      return;
    } else {
      if (str === "images/yeti.png") {
        var animal = "url(" + str + ")";
        e.style.backgroundImage = animal;
        var Growl = new Audio("media/yeti.wav");
        Growl.play();
        document.getElementById("score").value = gameScore;
        penguinShuffle = shuffle(penguinImages);

        setTimeout(function () {
          alert("Oops!Better luck next time" + "\n" + "Play again ?");
          window.location.reload();
        }, 200);
      } else {
        var animal = "url(" + str + ")";
        e.style.backgroundImage = animal;
        var penguinGrowl = new Audio("media/penguin.wav");
        penguinGrowl.play();
        gameScore += 1;
        document.getElementById("score").value = gameScore;
        check(gameScore);
        e.classList.add("clicked");

        // checking if users score is greater than the game high score
        if (gameScore > gameHighScore) {
          document.getElementById("highscore").value = gameScore;
          gameHighScore = gameScore;
          check(gameHighScore);
        }
      }
    }
  }

  function check(number) {
    if (number === 8) {
      setTimeout(function () {
        //popping the alert that you've won the game when score is 8.
        alert("Hey!You've Won" + "\n" + "Play again ?");
        penguinShuffle = shuffle(penguinImages);
        window.location.reload();
      }, 200);
    }
  }

  //  function to change the positions of yeti and penguins.
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
});
