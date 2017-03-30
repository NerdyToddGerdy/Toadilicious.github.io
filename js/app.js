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
  var $player1Score = $('.player1').length;
  var $player2Score = $('.player2').length;


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
      game.resetting();
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


      //******This Section finds the index of the 4 surrounding spaces.
      var thisLocation = $(this).index();
      // console.log(thisLocation + ' here');
      var upLocation = thisLocation-4;
      // console.log(upLocation + ' up');
      var rightLocation = thisLocation+1;
      // console.log(rightLocation + ' right');
      var downLocation = thisLocation+4;
      // console.log(downLocation + ' down');
      var leftLocation = thisLocation-1;
      // console.log(leftLocation + ' left');


      //******This section creates Vars that will add the Class with the border to the possible options
      var addBorderUp = function(){
        $('#space-' + upLocation).not($('.' + game.currentPlayer)).addClass('new-space');
      };
      var addBorderRight = function(){
        $('#space-' + rightLocation).not($('.' + game.currentPlayer)).addClass('new-space');
      };
      var addBorderDown =function(){
         $('#space-' + downLocation).not($('.' + game.currentPlayer)).addClass('new-space');
      };
      var addBorderLeft =function(){
         $('#space-' + leftLocation).not($('.' + game.currentPlayer)).addClass('new-space');
      };


      //This statement fixes the side from looking at the far sides of the grid.
if ($(this).text() > 1) {
  console.log('ok');
      if (thisLocation === 3) {
        addBorderDown();
        addBorderLeft();
      } else if (thisLocation === 4 || thisLocation === 8) {
        addBorderDown();
        addBorderRight();
        addBorderUp();
      } else if (thisLocation === 7 || thisLocation === 11) {
        addBorderUp();
        addBorderLeft();
        addBorderDown();
      } else if (thisLocation === 12) {
        addBorderUp();
        addBorderRight();
      } else {
        addBorderUp();
        addBorderRight();
        addBorderDown();
        addBorderLeft();
      }
      $(this).addClass('clicked-space');
    } else {
      alert('You do not have enough soldiers here to attack. Please pick another island or end the phase.');
      // $('.space').off(); //removed button from all spaces
      game.resetting(); //clears everything
    }

      // $(this).addClass('clicked-space');
      $('.space').off(); //removed button from all spaces
      $(this).on('click', eventHandler.resetSpace); //clears everything
      // console.log('classAdded');
      clickedNumber1 = thisLocation;
      clickedText1 = $(this).text();

      $('#space-' + upLocation).not($('.' + game.currentPlayer)).on('click', eventHandler.newSpace);
      $('#space-' + rightLocation).not($('.' + game.currentPlayer)).on('click', eventHandler.newSpace);
      $('#space-' + downLocation).not($('.' + game.currentPlayer)).on('click', eventHandler.newSpace);
      $('#space-' + leftLocation).not($('.' + game.currentPlayer)).on('click', eventHandler.newSpace);




      // $('.space').not($(this)).on('click', eventHandler.newSpace);//spaces that are not my current space are options to attack
      console.log(clickedText1);
      console.log('#1: ' + clickedNumber1);

    },
    $currentId : $(this).attr('id'),
  };
test = eventHandler.clickedSpace;
//====================================================
//                EVENT LISTENER
//====================================================

var testing = function(){
  var $player1Score = $('.player1').length;
  var $player2Score = $('.player2').length;
  $('.scores').html('<p>Player 1\'s points: ' + $player1Score + '</p> <p>Player 2\'s points: ' + $player2Score + '</p>');
  $('.rules').html('<h3>Attack Phase</h3><p>By selecting any of your spaces that have at least 2 points in it, you can attack any space touching yours horizontally or vertically. Repeat until you have no more possible moves.  When done, press \'End Phase\' to continue.</p>');

  // $('.phase').text('Attack Phase');
  if (toggle === true) {
    game.currentPlayer = 'player1';
    otherPlayer = 'player2';
    $('.turns').html('<p>Player 1\'s turn</p><p class="phase">Attacking Phase</p>').css({'box-shadow':'inset 0 0 0 10px slategrey'});
    console.log(game.currentPlayer);
  }else{
    game.currentPlayer = 'player2';
    otherPlayer = 'player1';
    $('.turns').html('<p>Player 2\'s turn</p><p class="phase"><p>Attacking Phase</p>').css({'box-shadow':'inset 0 0 0 10px darkgoldenrod'});
    console.log(game.currentPlayer);
  }
  $('.'+game.currentPlayer).on('click', eventHandler.clickedSpace);
};
  // $spaces.on('click', eventHandler.selectASpace)
//if counter is 0, run first click,
//else run second click
//Turns the spaces into buttons
//Turns the button Div into a button
$button.on('click', eventHandler.clickedButton);

begin = testing;
clickedSpace = eventHandler.clickedSpace;
testing();
}); //End of Window onload**************************


//====================================================
//                    PSEUDOCODE
//====================================================

/////////////Objects
var clickedSpace;
var clickedNumber1 = -1;
var clickedNumber2 = -1;
var clickedText1 = '';
var clickedText2 = '';
var newSoldiers = 0;
var otherPlayer;
var test;
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
};

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
      alert('Congratulations ' + player1.name + "!!  You have won the game!");
    } else if (player2.$numberOfControlledSpaces == 16){
      alert('Congratulations ' + player2.name + "!!  You have won the game!");
    } else {
      console.log('NO WINNER YET');
      return;
    }
  },


resetting: function(){
  $('.space').removeClass('clicked-space').removeClass('new-space');
  console.log('clicked-space and new-space classRemoved');
  $('.space').off();
  // $('.space').on('click',test);///////////////////////////////////////////////////////////////////
  clickedNumber1 = '';
  clickedNumber2 = '';
  $('.' + game.currentPlayer).on('click',clickedSpace);
},


  claimLand: function(){
    console.log("CLAIMING LAND");
    clickedText2 = Math.ceil(clickedText1 /2);
    // console.log(clickedText2);
    clickedText1 = clickedText1 - clickedText2; // winning space is now split among the 2 spaces
    // console.log(clickedText1);
    console.log('currentPlayer = '+game.currentPlayer);
    $('#space-' + clickedNumber2).removeClass(otherPlayer).addClass(game.currentPlayer);
    $('#space-' + clickedNumber1).html('<h2>'+clickedText1+'</h2>');
    $('#space-' + clickedNumber2).html('<h2>'+clickedText2+'</h2>');
    console.log('end of attack phase');
    $('.clicked-space').off('click');
    $('.new-space').off('click');
    console.log('claimLand>>>resetting');
  },


  attackPhase: function(){
    // console.log('Starting Attack Phase');
    $('.button').off();
    $('.button').on('click', game.hirePhase);
    if (clickedText2 === 0 ) {
      this.claimLand();
    } else{
      // console.log(clickedText2 + "this is the second clicked");
      game.rollOfDice();
    }

    game.resetting();
  },


  rollOfDice: function(){
    // console.log("Beginning dice roll");
    var attackerTotal = 0;
    var defenderTotal = 0;
    // $('.button').on('click',game.hirePhase)
    var sixSidedDie = function(){
      return Math.ceil(Math.random() * 6);
    };
    for (var i = 0; i < parseInt(clickedText1); i++) {
      attackerTotal = attackerTotal + sixSidedDie();
      // console.log('doing the attack roll');
    }
    // console.log("Attacker Roll " +parseInt(attackerTotal));
      for (var j = 0; j < parseInt(clickedText2); j++) {
        defenderTotal = defenderTotal + sixSidedDie();
    }
    // console.log('Defender Roll ' + defenderTotal);
    if (attackerTotal > defenderTotal) {
      // console.log('Attacker Wins');
    game.claimLand();
  }else {
    $('#space-' + clickedNumber1).html('<h2>'+1+'</h2>');
  }
    // console.log('defender wins');
  },////Running to my specifications!!!


  endOfRound: function(){
    // console.log('END OF ROUND  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    game.checkForWinner();
    $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');

      // console.log(clickedText1);
      // console.log('#1: ' + clickedNumber1);
    if (toggle === true) {
      toggle = false;
      // console.log('true >> false');
    } else {
      toggle = true;
      // console.log('false >> true');
    }
    // console.log("Toggle = " + toggle);
      begin();
  },



  hirePhase: function(){
    //Comes from attackPhase
    $('.turns').html('<p>' + game.currentPlayer +'\'s turn</p><p class="phase"><p>Rebuild Phase</p>');
    var curentPlayerClass = '.' + game.currentPlayer;
    console.log('.' + game.currentPlayer);
    console.log(game.currentPlayer + " HERE!!!!!!!!!!!!!!!!!!!!!!!");
    // Calculate the number of spaces currently owned.

    $(curentPlayerClass).addClass('new-space');
    console.log(player2.$numberOfControlledSpaces);

    if (game.currentPlayer === 'player1') {
      player1.$numberOfControlledSpaces = $('.' + game.currentPlayer).length;
     newSoldiers = player1.$numberOfControlledSpaces;
      console.log('player1 gets to hire now');

    } else {
      console.log(player2.$numberOfControlledSpaces + ' = else statement');
      console.log($('.' + game.currentPlayer).length + ' = currentPlayer length');
      player2.$numberOfControlledSpaces = ($('.' + game.currentPlayer).length);
      console.log($('.' + game.currentPlayer).length);
     newSoldiers = player2.$numberOfControlledSpaces;
      console.log('player2 gets to hire now');
    }

    $('.rules').html('<h3>Rebuild Phase</h3><p>You gain 1 new pirate per space that you own. Add these mateys to any of your spaces. </p> <h3> You have ' + newSoldiers + ' seadogs available.</h3>');

    console.log("new Soldiers = " + newSoldiers);

    var $currentPlayer = $('.'+ game.currentPlayer);
    // $('.new-space').removeClass('new-space');
    $('.clicked-space').removeClass('clicked-space');
    $('.space').off('click');
    $('.button').off('click');
    console.log(game.currentPlayer + " IS HIRING");
    $currentPlayer.on('click',function(){
      if(newSoldiers>0){
        $(this).html('<h2>' + (parseInt($(this).text())+1) + '</h2>');
        newSoldiers--;
        console.log("new Soldiers = " + newSoldiers);
      }
    });
    console.log("END OF HIRING");
    $('.button').on('click', game.endOfRound);
  },
};



















//====================================================
//                END OF PSEUDOCODE
//====================================================
