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

  // add controlled amount to player1
  player1.$numberOfControlledSpaces = $player1ControlledSpaces.length;
  // console.log(player1.$numberOfControlledSpaces);

  // add controlled amount to player2
  player2.$numberOfControlledSpaces = $player2ControlledSpaces.length;
  // console.log(player2.$numberOfControlledSpaces);
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

      //Adds and removes the borders

      // UNCLICK STEP
      if ($(this).hasClass('clicked-space')) {
        $(this).removeClass('clicked-space')
        $(this).addClass('unclicked-space')
        $('.space').css({'border': 'rgba(255,255,255,0) solid 5px'})
        // console.log($(this).attr('class'));


      //CLICK STEP
      } else {
        $(this).removeClass('unclicked-space');
        $(this).addClass('clicked-space')
        $(this).css({'border': 'rgba(255,255,255,1) solid 5px'})
        // console.log($(this).attr('class') + ' also');
      }


      //higlights nearby spaces.
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



    var $currentId = $(this).attr('id');
    console.log($currentId);
    console.log(thisLocation);


    //select only the surrounding buttons
    // if this location is selected ID, make up, right, down, left available for selection.
    // if($)





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
var player1 = {
  name:'',
  playerColor:'',
  $numberOfControlledSpaces:$('.player1').length,
  numberOfSoldiers:2,
  currnetlyContolledSpaces:[]
}

////Player 2
//Name
//Color
//Number of controlled spaces
//Number of soldiers
var player2 = {
  name:'',
  playerColor:'',
  $numberOfControlledSpaces:$('.player2').length,
  numberOfSoldiers:2,
  currnetlyContolledSpaces:[]
};
////Game
//has somebody won?
//attack phase
//Roll of Dice
//hire soldiers phase
//button
//Round Number
var game = {
  currentPlayer:player1,
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
    // Calculate the number of spaces currently owned.
    console.log(this.currentPlayer.$numberOfControlledSpaces);
    // make newsoldiers = spaces owned.
    // add a new soldier to clicked player's spaces
    // subtract 1 from newsoldiers
  },
  endOfRound: function(){
    if (this.currentPlayer === player1){
      this.currentPlayer = player2;
    } else {
      this.currentPlayer = player1;
    }
    this.checkForWinner();
  }
}
////Map
// How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
