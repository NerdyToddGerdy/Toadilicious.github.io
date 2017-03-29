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
      console.log('HERE BE DRAGONS!!!');
      game.resetting()
    //   var resetting = function(){
    //   $('.space').removeClass('clicked-space').removeClass('new-space')
    //   console.log('classRemoved');
    //   $('.space').off()
    //   $('.space').on('click',eventHandler.clickedSpace);
    //   clickedNumber1 = -1;
    //   clickedNumber2 = -1;
    // }
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
      $('.space').off(); //removed button from all spaces
      $(this).on('click', eventHandler.resetSpace); //clears everything
      clickedNumber1 = $thisLocation;
      clickedText1 = $(this).text();
      // console.log($('.space').index());
      $('.space').not($(this)).on('click', eventHandler.newSpace)//spaces that are not my current space are options to attack
      console.log(clickedText1);
      console.log('#1: ' + clickedNumber1);

    },
    $currentId : $(this).attr('id'),
  }
test = eventHandler.clickedSpace;
//====================================================
//                EVENT LISTENER
//====================================================

var testing = function(){
  $('.player1').on('click', eventHandler.clickedSpace);
}
  // $spaces.on('click', eventHandler.selectASpace)
//if counter is 0, run first click,
//else run second click
//Turns the spaces into buttons
//Turns the button Div into a button
$button.on('click', eventHandler.clickedButton)

begin = testing;

testing()
}); //End of Window onload**************************








//====================================================
//                    PSEUDOCODE
//====================================================

/////////////Objects
var clickedNumber1 = -1
var clickedNumber2 = -1
var clickedText1 = '';
var clickedText2 = '';
var newSoldiers = 0
var test
var testing;
var begin
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
  $numberOfControlledSpaces:$(('.player2').length),
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
  currentPlayer:'player1',
  // currentPlayerString:
  gameRound:0,
  currentPhase:'Attaack',
  // startOfGame: function(){
  //   player1.name: prompt('What is player 1\'s name?')
  //
  //   this.attackPhase();
  // },
  checkForWinner: function(){
    console.log('CHECKING FOR WINNER');
    //if all boxes are one color or the other.
    if (player1.$numberOfControlledSpaces == 16){
      alert('Congratulations ' + player1.name + "!!  You have won the game!")
    } else if (player2.$numberOfControlledSpaces == 16){
      alert('Congratulations ' + player2.name + "!!  You have won the game!")
    } else {
      console.log('NO WINNER YET');
      return
    }
  },



resetting: function(){
  $('.space').removeClass('clicked-space').removeClass('new-space')
  console.log('classRemoved');
  $('.space').off()
  $('.space').on('click',test);///////////////////////////////////////////////////////////////////
  clickedNumber1 = '';
  clickedNumber2 = '';
},



  claimLand: function(){
    console.log("CLAIMING LAND");
    clickedText2 = Math.floor(clickedText1 /2);
    // console.log(clickedText2);
    clickedText1 = clickedText1 - clickedText2;
    // console.log(clickedText1);
    console.log('currentPlayer = '+game.currentPlayer);
    $('#space-' + clickedNumber2).addClass(game.currentPlayer);
    $('#space-' + clickedNumber1).html('<h2>'+clickedText1+'</h2>');
    $('#space-' + clickedNumber2).html('<h2>'+clickedText2+'</h2>');
    console.log('end of attack phase');
    $('.clicked-space').off('click')
    $('.new-space').off('click')
    game.resetting()
  },



  attackPhase: function(){
    console.log('Starting Attack Phase');
    //need to select a space, see the surrounding spaces,
    // $('.button').off('click',game.endOfRound)
    $('.button').on('click', game.hirePhase)
    if (clickedText2 == 0) {
      this.claimLand();
    } else{
      console.log(clickedText2 + "this is the second clicked");
      game.rollOfDice()
    }
  },





  rollOfDice: function(){
    console.log("Beginning dice roll");
    var attackerTotal = 0;
    var defenderTotal = 0;
    // $('.button').on('click',game.hirePhase)
    var sixSidedDie = function(){
      return Math.ceil(Math.random() * 6)
    }
    for (var i = 0; i < parseInt(clickedText1); i++) {
      attackerTotal = attackerTotal + sixSidedDie();
      console.log('doing the attack roll');
    }
    console.log("attackerRoll " +parseInt(attackerTotal));
      for (var i = 0; i < parseInt(clickedText2); i++) {
        defenderTotal = defenderTotal + sixSidedDie();
    }
    console.log('defendertotal ' + defenderTotal);
    if (attackerTotal > defenderTotal) {
      console.log('Attacker Wins');
    game.claimLand();
    }
    console.log('defender wins');
    // game.hirePhase();
    // $('.button').on('click',game.hirePhase)
  },////Running to my specifications!!!







  endOfRound: function(){
    console.log('END OF ROUND');
    game.checkForWinner();
    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');

    if (game.currentPlayer === 'player1'){
      game.currentPlayer = 'player2';
      console.log('currentPlayer: ' + game.currentPlayer);
      console.log('Player 2\'s turn');
      return player2;
    } else /*if (game.currentPlayer === 'player2')*/{
      game.currentPlayer = 'player1';
      console.log('Player 1\'s turn');
    }
    // console.log('currentPlayer: ' + game.currentPlayer);
    // testing();
    //
    // //ADD THE EVENT HANDLER BACK ON EVEN THOUGH IT HASN'T BEEN RUN YET?
    // $('.' + game.currentPlayer).on('click',function(){
    //   $(this).addClass('clicked-space')
    //   // console.log('classAdded');
    //   $('.space').off();
    //   $(this).on('click', function(){
    //     game.resetting()
    //   })
      console.log(clickedText1);
      console.log('#1: ' + clickedNumber1);
    // })
  begin()
  },



  hirePhase: function(){
    // Calculate the number of spaces currently owned.
    // console.log(this.currentPlayer.$numberOfControlledSpaces);
    // make newsoldiers = spaces owned.
    if (game.currentPlayer === 'player1') {
     newSoldiers = player1.$numberOfControlledSpaces+1;
      console.log('player1');
    } else {
     newSoldiers = player2.$numberOfControlledSpaces+1;
      console.log('player2');
    }
    // console.log("current Player # "+(this.currentPlayer));
    // var newSoldiers = this.currentPlayer.$numberOfControlledSpaces;
    // console.log(this.currentPlayer);
    console.log("new Soldiers = " + newSoldiers);

    var $currentPlayer = $('.'+ game.currentPlayer)
    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');
    $('.space').off('click')
    $('.button').off('click')
    // while (newSoldiers > 0) {
    console.log(game.currentPlayer + " IS HIRING");
      $currentPlayer.on('click',function(){
        if(newSoldiers>0){
          $(this).html('<h2>' + (parseInt($(this).text())+1) + '</h2>')
          newSoldiers--;
          console.log("new Soldiers = " + newSoldiers);
        }
        $('.button').on('click', game.endOfRound)
      })

  },

}
////Map
// How to color change



















//====================================================
//                END OF PSEUDOCODE
//====================================================
