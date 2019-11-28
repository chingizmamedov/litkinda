$(function(){

  $('.services-item').mouseenter(function() {
    const elemNum = $(this).index() + 1

    if(elemNum > 9) {
        $(this).find('.services-item__block').css({
            marginLeft: '85px'
        })
    } else {
        $(this).find('.services-item__block').css({
            marginLeft: '40px'
        })
    }

  })

  $('.services-item').mouseleave(function() {
    
      $(this).find('.services-item__block').css({
          marginLeft: '0'
      })
  })

  

  

})