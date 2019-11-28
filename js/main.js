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
