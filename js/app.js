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
    resetSpace: function(){

      $('.space').removeClass('clicked-space').removeClass('new-space')
      console.log('classRemoved');
      $('.space').off()
      $('.space').on('click',eventHandler.clickedSpace);
      clickedNumber1 = -1;
      clickedNumber2 = -1;
    },
    newSpace: function(){
      console.log("testing newSpace");
      $(this).addClass('new-space');
      clickedNumber2 = $(this).index();
      clickedText2= $(this).text();
      console.log('#2: ' + clickedNumber2);
      game.attackPhase();
    },
    clickedSpace : function(){
      var $thisLocation = $(this).index();
      var $upLocation = $thisLocation-4;
      var $rightLocation = $thisLocation+1;
      var $downLocation = $thisLocation+4;
      var $leftLocation = $thisLocation-1;

      $(this).addClass('clicked-space')
      // console.log('classAdded');
      $('.space').off();
      $(this).on('click', eventHandler.resetSpace)
      clickedNumber1 = $(this).index()
      clickedText1 = $(this).text()
      // console.log($('.space').index());
      $('.space').not($(this)).on('click', eventHandler.newSpace)
      console.log(clickedText1);
      console.log('#1: ' + clickedNumber1);

    },
    $currentId : $(this).attr('id'),
  }
//====================================================
//                EVENT LISTENER
//====================================================



$('.player1').on('click', eventHandler.clickedSpace);
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
var clickedNumber1 = -1
var clickedNumber2 = -1
var clickedText1 = '';
var clickedText2 = '';

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
  claimLand: function(){
    clickedText2 = Math.floor(clickedText1 /2);
    console.log(clickedText2);
    clickedText1 = clickedText1 - clickedText2;
    console.log(clickedText1);
    $('#space-'+clickedNumber2).addClass('player1');
    $('#space-' + clickedNumber1).html('<h2>'+clickedText1+'</h2>');
    $('#space-' + clickedNumber2).html('<h2>'+clickedText2+'</h2>');
  },

  attackPhase: function(){
    //need to select a space, see the surrounding spaces,
if (clickedText2 == 0) {

  this.claimLand();

} else{
  console.log(clickedText2 + "this is the second clicked");
game.rollOfDice()
}  //compare dice to space.
  },
  rollOfDice: function(){
    var attackerTotal = 0;
    var defenderTotal = 0;
    var sixSidedDie = function(){
      return Math.ceil(Math.random() * 6)
    }
    // var attackerRoll = function() {
    for (var i = 0; i < parseInt(clickedText1); i++) {
      attackerTotal = attackerTotal + sixSidedDie();
      console.log('doing the attack roll');
    }
    console.log("attackerRoll " +parseInt(attackerTotal));
    // }
    // var defenderRoll = function(){
      for (var i = 0; i < parseInt(clickedText2); i++) {
        defenderTotal = defenderTotal + sixSidedDie();
      // }
    }
    console.log('defendertotal ' + defenderTotal);
    //need the number of soldiers in each space.
    if (attackerTotal > defenderTotal) {
      game.claimLand();
    }
    console.log('end of attack phase');
    $('.clicked-space').off('click')
    $('.new-space').off('click')
    game.hirePhase();
  },
  hirePhase: function(){
    // Calculate the number of spaces currently owned.
    console.log(this.currentPlayer.$numberOfControlledSpaces);
    // make newsoldiers = spaces owned.
    var newSoldiers = this.currentPlayer.$numberOfControlledSpaces;
    console.log("new Soldiers = " + newSoldiers);
    // while (newSoldiers > 0){// add a new soldier to clicked player's space
    //   if ($(this).hasClass(this.currentPlayer)){
    //     $(this)++;
    //     newSoldiers--;
    //   }
    // }
    // newSoldiers--;
    // when newSoldiers is 0, go to game.endOfRound
  },
  endOfRound: function(){
    this.checkForWinner();

    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space')

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
