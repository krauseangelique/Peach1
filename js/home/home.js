$(document).ready(function () {
        $('.slider_home').slick({
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