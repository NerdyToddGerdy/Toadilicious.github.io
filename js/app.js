console.log("app.js is alive");
$(function(){
console.log("so is jQuery");
//====================================================
//                 GRAB ELEMENT
//====================================================
//Grab the spaces
var $spaces = $('.space');
var $button = $('.button');


//====================================================
//                EVENT HANDLER
//====================================================
var eventHandler = {
  //What happens when space is clicked
  clickedSpace : function(){
    console.log("test the click");
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
$spaces.on('click', clickedSpace);

//Turns the button Div into a button
$button.on('click', clickedButton)

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

////Game
  //has somebody won?
  //attack phase
    //Roll of Dice
  //hire soldiers phase
  //button
  //Round Number
var game = {
  payersTurn:'Player One',
  gameRound:0,
  checkForWinner: function(){

  },
  attackPhase: function(){

  },
  hirePhase: function(){

  }


}



////Map
  // How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
