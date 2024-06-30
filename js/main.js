$(function () {
    $(".span").each(function () {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth")
            }, 2000)
    })
});

// init Isotope
var $grid = $('.item-details').isotope({
});
$('.menu_item').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


//tast
$(document).ready(function () {
    $("#menu-toggler").click(function () {
        toggleBodyClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

});

//slick

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        
    ]
});

//img popup

$('.view').magnificPopup({   
    type: 'image',
    gallery: {
        enabled: true
    },   
});