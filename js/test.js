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
  //What happens when space is clicked on attack phase
  clickedSpace : function(){
    var $currentClass = $(this).attr('class');
    // console.log("check the class: " + $currentClass);
    var thisLocation = $(this).index()
    var upLocation = thisLocation-3;
    var rightLocation = thisLocation+2;
    var downLocation = thisLocation+5;
    var leftLocation = thisLocation;

    var $upperCSS = $('#space-'+upLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
    var $rightCSS = $('#space-'+rightLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
    var $lowerCSS = $('#space-'+downLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
    var $leftCSS = $('#space-'+leftLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
    var $allSpaces = $('.space');


    if ($currentClass == 'space clicked-space') {
      $(this).removeClass('clicked-space')
      $(this).addClass('unclicked-space')
      $('.space').css({'border': 'rgba(255,255,255,0) solid 5px'})
      // console.log($(this).attr('class'));


    } else {
      $(this).removeClass('unclicked-space');
      $(this).addClass('clicked-space')
      $(this).css({'border': 'rgba(255,255,255,1) solid 5px'})

      if (thisLocation == 3) {
        // console.log("this is the top right corner box");
        $rightCSS.css({'border':'rgba(255,255,255,0'})
      } else if (thisLocation === 4 || thisLocation ===8) {
        // console.log("left side");
        $leftCSS.css({'border':'rgba(255,255,255,0'})
      } else if (thisLocation === 7|| thisLocation === 11){
        // console.log("right side");
        $rightCSS.css({'border':'rgba(255,255,255,0'})
      }else if (thisLocation === 12) {
        // console.log("bottom left");
        $leftCSS.css({'border':'rgba(255,255,255,0'})
      }

    }
    // $('spaces').toggle(function(){



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
