console.log("test.js is up and running");
$(function(){

var $button = $('.button')





var changeBackground = function(){
  // console.log('clicking');
  var $currentClass = $(this).attr('class');
    // console.log( $(this).attr('class'));
if ($currentClass == 'button unclicked-button') {
  $(this).removeClass()
  $(this).addClass('button clicked-button')
  console.log( $(this).attr('class'));
} else {
  $(this).removeClass()
  $(this).addClass('button unclicked-button')
  console.log($(this).attr('class'));
}
}




$button.on('click',changeBackground)



})







if ($currentClass == 'space unclicked-space'){
  $(this).removeClass('unclicked-space');
  $(this).addClass('clicked-space')
  $(this).css({'border': 'rgba(255,255,255,1) solid 5px'})
} else {
  var secondClick = function(){
    console.log('testing the secondClick');
  }

  $spaces.on('click', eventHandler.secondClick);
}
