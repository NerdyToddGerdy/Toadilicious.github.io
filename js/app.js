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

//What happens when space is clicked
var clickedSpace = function(){
  console.log("test the click");
}

//What happens when the button is clickedSpace
var clickedButton = function(){
  console.log("test the button");
}

//====================================================
//                EVENT LISTENER
//====================================================

//Turns the spaces into buttons
$spaces.on('click', clickedSpace);

//Turns the button Div into a button
$button.on('click', clickedButton)

}); //End of Window onload





//====================================================
//                    PSEUDOCODE
//====================================================

/////////////Objects
////Player 1
  //Name
  //Color
  //Number of controlled spaces
  //Number of soldiers

////Player 2
  //Name
  //Color
  //Number of controlled spaces
  //Number of soldiers

////Game
  //has somebody won?
  //attack phase
    //Roll of Dice
  //hire soldiers phase
  //button
  //Round Number

////Map
  // How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
