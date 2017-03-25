console.log("app.js is alive");
$(function(){
console.log("so is jQuery");
//====================================================
//                 GRAB ELEMENT
//====================================================
//Grab the spaces
var $spaces = $('.space');
var $button = $('.button');
var $player1ControlledSpaces = $('.player1');
var $player2ControlledSpaces = $('.player2');

// add controlled amount to playerOne
playerOne.numberOfControlledSpaces = $player1ControlledSpaces.length;
// console.log(playerOne.numberOfControlledSpaces);

// add controlled amount to playerTwo
playerTwo.numberOfControlledSpaces = $player2ControlledSpaces.length;
// console.log(playerTwo.numberOfControlledSpaces);
//====================================================
//                EVENT HANDLER
//====================================================
var eventHandler = {
  //What happens when space is clicked
  clickedSpace : function(){
    console.log("test the click");
    $(this).css({'border': 'rgba(255,255,255,.8) solid 4px'})
    var thisLocation = $(this).index()
    // if()// to highlight surrounding spaces(look at notepad)
    console.log(thisLocation);
  },
  //What happens when the button is clickedSpace
  clickedButton : function(){
    console.log("test the button");
  }
}
//====================================================
//                EVENT LISTENER
//====================================================

//Turns the spaces into buttons
$spaces.on('click', eventHandler.clickedSpace);

//Turns the button Div into a button
$button.on('click', eventHandler.clickedButton)



//////////////////////////////////
// ^^^^^^^^^^Workstation^^^^^^^^^^^^^^^
//if space is in array [0][x] don't check up
//if space is in array [x][0] don't check left
//if space is in array [x][3] don't look down
//if space is in array [3][x] don't look right

// if  array[0-1]==false
// for array[0][0] check [0][1] (checkRight)
//                 check [1][0] (checkDown)
/////////////////////////////////




}); //End of Window onload**************************





//====================================================
//                    PSEUDOCODE
//====================================================

/////////////Objects


////Player 1
//Name
//Color
//Number of controlled spaces
//Number of soldiers
var playerOne = {
  name:'',
  playerColor:'',
  numberOfControlledSpaces:1,
  numberOfSoldiers:2
}

////Player 2
  //Name
  //Color
  //Number of controlled spaces
  //Number of soldiers
  var playerTwo = {
    name:'',
    playerColor:'',
    numberOfControlledSpaces:1,
    numberOfSoldiers:2
  };
////Game
  //has somebody won?
  //attack phase
    //Roll of Dice
  //hire soldiers phase
  //button
  //Round Number
  var game = {
    currentPlayer:'Player One',
    gameRound:0,
    currentPhase:'Attaack',
    startOfGame: function(){
      //Choose color
      //choose name
      this.attackPhase();
    },
    checkForWinner: function(){
      //if all boxes are one color or the other.
    },
    attackPhase: function(){
      //need to select a space, see the surrounding spaces, compare dice to space.
    },
    rollOfDice: function(){
      console.log(Math.ceil(Math.random()*6));
      //sum of x random numbers where x = of soldiers in space
      //need the number of soldiers in each space.
    },
    hirePhase: function(){

    },
    endOfRound: function(){
      if (this.currentPlayer === 'Player One'){
        this.currentPlayer = 'Player Two';
      } else {
        this.currentPlayer = 'Player One';
      }
      this.checkForWinner();
    }
  }
////Map
  // How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
