console.log("test.js is up and running");
$(function(){

var $button = $('.button')





var changeBackground = function(){
  console.log('clicking');
  $(this).removeClass('unclicked-button')
  $(this).addClass('clicked-button')
}





$button.on('click',changeBackground)



})
