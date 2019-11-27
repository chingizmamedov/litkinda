$(function(){

  var offsetOne = 0;
  var offsetTwo = 0;
  
  if ($('.main').length > 0) offsetOne = $('.main').offset().top;
  if ($('.main__first').length > 0) offsetTwo = $('.main__first').offset().top;
  offsetDiff = offsetTwo - offsetOne;

  $('.callback').css('marginTop', offsetDiff + 'px')

  var showedwhencalldp = false;
  var showedadp = false;
  var showedadplast = false;
  var scrolled = false;
  $(window).on('scroll',function() {

    if ($('.main').length > 0) var offsetOne = $('.main').offset().top;
    if ($('.main__first').length > 0) offsetTwo = $('.main__first').offset().top;
    
      var offsetDiff = offsetTwo - offsetOne,
      offsetMainBlock = offsetTwo - $(window).scrollTop(),
      heightMain = $('.main').height(),
      heightCallbackBlock = $('.callback').height(),
      needMain = heightMain + offsetOne - $(window).scrollTop()

    if(offsetMainBlock < 0 && needMain > heightCallbackBlock) {
      $('.callback').css('marginTop', offsetDiff + -offsetMainBlock + 'px')
    }

    if(offsetTwo - $(window).scrollTop() > 0) {
      $('.callback').css('marginTop', offsetDiff + 'px')
    }
    
     if (showedwhencalldp == true) {
          $('.when_call_date').datepicker().data('datepicker').hide();  
          showedwhencalldp = true;
     }
     if (showedadp == true) {
          $('.arenda-datepicker').datepicker().data('datepicker').hide();  
          showedadp = true;
     }
     if (showedadplast == true) {
          $('.arenda-datepicker-last').datepicker().data('datepicker').hide();  
          showedadplast = true;
     }
     scrolled = true; 
  });
  
})