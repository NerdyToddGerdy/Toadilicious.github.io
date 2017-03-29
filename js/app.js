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
    resetSpace: function(){
      console.log('HERE BE DRAGONS!!!');
      game.resetting()
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
      //more to come.
      var $thisLocation = $(this).index();
      // var $upLocation = $thisLocation-4;
      // var $rightLocation = $thisLocation+1;
      // var $downLocation = $thisLocation+4;
      // var $leftLocation = $thisLocation-1;

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
  if (toggle === true) {
    game.currentPlayer = 'player1'
    console.log(game.currentPlayer);
  }else{
    game.currentPlayer = 'player2'
    console.log(game.currentPlayer);
  }
  $('.'+game.currentPlayer).on('click', eventHandler.clickedSpace);
}
  // $spaces.on('click', eventHandler.selectASpace)
//if counter is 0, run first click,
//else run second click
//Turns the spaces into buttons
//Turns the button Div into a button
$button.on('click', eventHandler.clickedButton)

begin = testing;
clickedSpace = eventHandler.clickedSpace;
testing()
}); //End of Window onload**************************








//====================================================
//                    PSEUDOCODE
//====================================================

/////////////Objects
var clickedSpace;
var clickedNumber1 = -1
var clickedNumber2 = -1
var clickedText1 = '';
var clickedText2 = '';
var newSoldiers = 0
var test
var testing;
var begin;
var toggle = true;
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
  currentPlayer:'player1',
  // currentPlayerString:
  gameRound:0,
  currentPhase:'Attaack',


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
  console.log('clicked-space and new-space classRemoved');
  $('.space').off()
  // $('.space').on('click',test);///////////////////////////////////////////////////////////////////
  clickedNumber1 = '';
  clickedNumber2 = '';
  $('.' + game.currentPlayer).on('click',clickedSpace)
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
    console.log('claimLand>>>resetting');
  },


  attackPhase: function(){
    console.log('Starting Attack Phase');
    if (clickedText2 == 0) {
      this.claimLand();
    } else{
      console.log(clickedText2 + "this is the second clicked");
      game.rollOfDice()
    }
    $('.button').off()
    $('.button').on('click', game.hirePhase)
    game.resetting()
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
    console.log("Attacker Roll " +parseInt(attackerTotal));
      for (var i = 0; i < parseInt(clickedText2); i++) {
        defenderTotal = defenderTotal + sixSidedDie();
    }
    console.log('Defender Roll ' + defenderTotal);
    if (attackerTotal > defenderTotal) {
      console.log('Attacker Wins');
    game.claimLand();
  }else {

  }
    console.log('defender wins');
  },////Running to my specifications!!!







  endOfRound: function(){
    console.log('END OF ROUND  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    game.checkForWinner();
    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');

      console.log(clickedText1);
      console.log('#1: ' + clickedNumber1);
    if (toggle === true) {
      toggle = false;
      console.log('true >> false');
    } else {
      toggle = true;
      console.log('false >> true');
    }
    console.log("Toggle = " + toggle);
      begin();
  },



  hirePhase: function(){
    console.log(game.currentPlayer + " HERE!!!!!!!!!!!!!!!!!!!!!!!");
    // Calculate the number of spaces currently owned.
    if (game.currentPlayer === 'player1') {
      player1.$numberOfControlledSpaces = $('.' + game.currentPlayer).length;
     newSoldiers = player1.$numberOfControlledSpaces;
      console.log('player1 gets to hire now');
    } else {
      player2.$numberOfControlledSpaces = $('.' + game.currentPlayer).length;
     newSoldiers = player2.$numberOfControlledSpaces;
      console.log('player2 gets to hire now');
    }
    console.log("new Soldiers = " + newSoldiers);

    var $currentPlayer = $('.'+ game.currentPlayer)
    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');
    $('.space').off('click')
    $('.button').off('click')
    console.log(game.currentPlayer + " IS HIRING");
    $currentPlayer.on('click',function(){
      if(newSoldiers>0){
        $(this).html('<h2>' + (parseInt($(this).text())+1) + '</h2>')
        newSoldiers--;
        console.log("new Soldiers = " + newSoldiers);
      }
    })
    console.log("END OF HIRING");
    $('.button').on('click', game.endOfRound)

  },

}



















//====================================================
//                END OF PSEUDOCODE
//====================================================
