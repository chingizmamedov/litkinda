$(function () {

    $('.services-item').mouseenter(function () {
        const elemNum = $(this).index() + 1

        var width = $(window).width();
        console.log("TCL: width", width)
        if (width <= 768) {
            if (elemNum > 9) {
                $(this).find('.services-item__block').css({
                    marginLeft: '33px'
                })
            } else {
                $(this).find('.services-item__block').css({
                    marginLeft: '12px'
                })
            }
        } else {
            if (elemNum > 9) {
                $(this).find('.services-item__block').css({
                    marginLeft: '85px'
                })
            } else {
                $(this).find('.services-item__block').css({
                    marginLeft: '40px'
                })
            }
        }


    })

    $('.services-item').mouseleave(function () {

        $(this).find('.services-item__block').css({
            marginLeft: '0'
        })
    })


    $(".seo-btn").click(function () {
        $(this).hide()
        $('.seo-text-inner').css({
            width: '100%',
            height: 'auto'
        })
    })

    $(window).scroll(function () {

        var header = $('#header__main').outerHeight(),
            side = $("#side").outerHeight(),
            contentHeight = $("#content").outerHeight(),
            contentTopOfBottom = $("#content").offset().top - $(window).scrollTop() - header + contentHeight,
            contentTop = $("#content").offset().top - $(window).scrollTop() - header,
            sidebar = $("#sidebar").offset().top - $(window).scrollTop() - (header + 10)


            console.log('contentTopOfBottom', contentTopOfBottom)
            console.log('side', side)
        if (sidebar < 0 && contentTopOfBottom >= side) {

            $("#side").css('top', -sidebar)

        }

        if (sidebar > 0) {

            $("#side").css('top', 0)

        }

        if (contentTopOfBottom <= side) {

            $("#side").css('top', contentHeight - side - 65)

        }

    })


    $(".various").fancybox({
        // maxWidth    : 600,
        // maxHeight   : 230,
        fitToView   : false,
        width       : '40%',
        height      : 'auto',
        autoSize    : true,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });


})