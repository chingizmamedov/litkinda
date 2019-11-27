      $(document).on('ready', function() {
            $('.multiple-items').slick({
                infinite: true,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [

                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });

      $(document).on('ready', function() {
            $('.multiple-items--mobile').slick({
                infinite: true,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [

                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
        });



      $(document).on('ready', function() {
            $('.multiple-items-team').slick({
                infinite: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 9991500,
                arrows: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                    
                ]
            });
        });