//MENU over
$(function () {
    $('.ui-nav').tooltip();
});
$(document).ready(function () {
    $(".nav__left a.ui-head").click(function (e) {
        e.preventDefault();
        if (!($(this).parent(".ui-outer").hasClass("open"))) {
            $(this).parent(".ui-outer").addClass("open").animate({
//                "width": "350px"
            }); //Expands outer block
            $(this).parent(".ui-outer").find("a > span").animate({
                "opacity": "1"
            }); //Display Headings
            $(".overlay").show();
        } else {
            $(this).parent(".ui-outer").removeClass("open").animate({
//                "width": "116px"
            }); //Reduces outer block
            $(this).parent(".ui-outer").find("a > span").animate({
                "opacity": "0"
            }); //Hide Headings
        }
        if (!($(this).parent(".ui-outer").hasClass("open"))) {
            $(this).parent(".ui-outer").removeClass("open").animate({
//                "width": "116px"
            }); //Reduces outer block
            $(".overlay").hide();
        }
    });


    

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

    $(window).scroll(function(){

        var headerHeight = $('#header__main').outerHeight()
        console.log("TCL: headerHeight", headerHeight + 5)
        

        var offsetTop = $('.aside').offset().top - $(window).scrollTop() - (headerHeight + 5)
        // console.log("TCL: offsetTop", offsetTop)
        
        if(offsetTop < 0 ) {
            
            // $('.aside-content').css('marginTop', -offsetTop)
            // $('.aside-content').css('position', 'fixed')

        } else {

            $('.aside-content').css({
                marginTop: 0
            })

        }

    });

});


function close_me() {
    $(".nav__left a.ui-head").parent(".ui-outer").removeClass("open").animate({
//        "width": "116px"
    });

    $(".nav__left a.ui-head").parent(".ui-outer").find("a > span").animate({
        "opacity": "0"
    });
    $(".overlay").hide();
    $("#btn__left--menu").removeClass("active");

}



//NAVBAR BTN
$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

//MObile menu btn
//MObile menu btn
//MObile menu btn
function open_menu() {


    
  $(".nav__left").toggleClass("open").animate({
//        "width": "116px"
    });  
    $(".nav__left a.ui-head").parent(".ui-outer").addClass("open").animate({
//        "width": "116px"
    });
    

    $(".mobile__menu--btn").parent(".ui-outer").find("a > span").animate({
        "opacity": "1"
    });
    
 
//    $(".overlay").show();
//    $("#btn__left--menu").addClass("active");

}
