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
  var counter = 0;


  // add controlled amount to player1
  player1.$numberOfControlledSpaces = $player1ControlledSpaces.length;

  // add controlled amount to player2
  player2.$numberOfControlledSpaces = $player2ControlledSpaces.length;






  //====================================================
  //                EVENT HANDLER
  //====================================================
  var eventHandler = {
    $currentClass : $(this).attr('class'),
    // console.log("check the class: " + $currentClass);

    //What happens when space is clicked on attack phase
    testingThis: function() {

      // console.log($(this).attr('class') + ' also');
    },
    clickedSpace : function(){
      var $thisLocation = $(this).index();
      var $upLocation = $thisLocation-4;
      var $rightLocation = $thisLocation+1;
      var $downLocation = $thisLocation+4;
      var $leftLocation = $thisLocation-1;


      var $upperCSS = $('#space-'+$upLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
      var $rightCSS = $('#space-'+$rightLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
      var $lowerCSS = $('#space-'+$downLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
      var $leftCSS = $('#space-'+$leftLocation).css({'border': 'rgba(255,255,255,.7) solid 4px'});
      var $allSpaces = $('.space');

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

        console.log($thisLocation);
        eventHandler.testingThis();


        //used for dice game
        var $upperSelection = 'space-'+this.$upLocation;
        var $rightSelection = 'space-'+this.$rightLocation;
        var $downSelection = 'space-'+this.$downLocation;
        var $leftSelection = 'space-'+this.$leftLocation;

        console.log('I want to click these locations: ' + $upLocation + ', ' + $rightLocation + ', ' + $downLocation +', '+ $leftLocation);
      }

      // higlights nearby spaces.
      if ($thisLocation == 3) {
        // console.log("this is the top right corner box");
        $rightCSS.css({'border':'rgba(255,255,255,0'})
      } else if ($thisLocation === 4 || $thisLocation ===8) {
        // console.log("left side");
        $leftCSS.css({'border':'rgba(255,255,255,0'})
      } else if ($thisLocation === 7|| $thisLocation === 11){
        // console.log("right side");
        $rightCSS.css({'border':'rgba(255,255,255,0'})
      }else if ($thisLocation === 12) {
        // console.log("bottom left");
        $leftCSS.css({'border':'rgba(255,255,255,0'})
      }


      //used for dice

      // $('#' + $upperSelection).on('click',function(){
      //   // $('.space').css({'border':'rgba(255,255,255,0'})
      //   $(this).addClass('selected-border')    // How do I get this to light up when I just told it to go dark.
      //   var $thisText = $(this).text()
      //   console.log("this text = " + $thisText);
      //   // game.rollOfDice();
      // });
      // $('#' + $rightSelection).on('click',function(){
      //   // $('.space').css({'border':'rgba(255,255,255,0'})
      //   $(this).addClass('selected-border')    // How do I get this to light up when I just told it to go dark.
      //   var $thisText = $(this).text()
      //   console.log('this is location # ' + $rightSelection);
      // });
      // $('#' + $downSelection).on('click',function(){
      //   // $('.space').css({'border':'rgba(255,255,255,0'})
      //   $(this).addClass('selected-border')    // How do I get this to light up when I just told it to go dark.
      //   var $thisText = $(this).text()
      //   console.log('this is location # ' + $downSelection);
      // });
      // $('#' + $leftSelection).on('click',function(){
      //   // $('.space').css({'border':'rgba(255,255,255,0'})
      //   $(this).addClass('selected-border')    // How do I get this to light up when I just told it to go dark.
      //   var $thisText = $(this).text()
      //   console.log('this is location # ' + $leftSelection);
      // });





      // counter++,
      // console.log("counter: " + counter);
    },
    $currentId : $(this).attr('id'),
    // console.log($currentId);
    // console.log($thisLocation);

    selectASpace:function(){
      $('.space').css({'border':'rgba(255,255,255,0'})
    }


    //select only the surrounding buttons
    // if this location is selected ID, make up, right, down, left available for selection.
    // if($)
  // },

  //What happens when the button is clickedSpace
  // clickedButton:function(){
  //   console.log("test the button");
  // }
}
//====================================================
//                EVENT LISTENER
//====================================================



  $spaces.on('click', eventHandler.clickedSpace);

  // $spaces.on('click', eventHandler.selectASpace)

//if counter is 0, run first click,
//else run second click
//Turns the spaces into buttons

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
  // startOfGame: function(){
  //   player1.name: prompt('What is player 1\'s name?')
  //
  //   this.attackPhase();
  // },
  checkForWinner: function(){
    //if all boxes are one color or the other.
    if (player1.$numberOfControlledSpaces == 16){
      alert('Congratulations ' + player1.name + "!!  You have won the game!")
    } else if (player2.$numberOfControlledSpaces == 16){
      alert('Congratulations ' + player2.name + "!!  You have won the game!")
    } else {
      this.attackPhase();
    }
  },
  attackPhase: function(){
    //need to select a space, see the surrounding spaces,

    //compare dice to space.
    this.hirePhase();
  },
  rollOfDice: function(){

    console.log(Math.ceil(Math.random()*6));
    //sum of x random numbers where x = of soldiers in space
    //need the number of soldiers in each space.
  },
  hirePhase: function(){
  //   // Calculate the number of spaces currently owned.
  //   console.log(this.currentPlayer.$numberOfControlledSpaces);
  //   // make newsoldiers = spaces owned.
  //   var newSoldiers = this.currentPlayer.$numberOfControlledSpaces;
  //   console.log(newSoldiers);
  //   while (newSoldiers > 0){// add a new soldier to clicked player's space
      // if (/*selectedSpace*/.hasClass(this.currentPlayer){
      //   /*selectedSpace*/++;
      //   newSoldiers--;
      // }
  //   newSoldiers--;
  // }
  //   // when newSoldiers is 0, go to game.endOfRound
  },
  endOfRound: function(){
    this.checkForWinner();
    if (this.currentPlayer === player1){
      this.currentPlayer = player2;
    } else {
      this.currentPlayer = player1;
    }
  }
}
////Map
// How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
