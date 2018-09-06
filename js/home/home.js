$(document).ready(function () {
        $('.home_slider').slick({
                centerMode: false,
                centerPadding: '60px',
                infinite: true,
                slidesToShow: 3,
                responsive: [
                        {
                                breakpoint: 768,
                                settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '40px',
                                        slidesToShow: 3
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '40px',
                                        slidesToShow: 1
                                }
                        }
                ]
        });
});