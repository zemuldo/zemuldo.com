/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {


        /* Preloader */

        $(window).on('load', function () {
            $('body').addClass('loaded');
        });



        /* Smooth Scroll */

        $('a.smoth-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        /* Scroll Naviagation Background Change with Sticky Navigation */

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });




        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });




        /* Scroll To Top */

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });




        /* Typed.js */

        $(window).load(function () {
            $('.typed').typed({
                strings: ['Now you are here, ^700 Let us hack this, ^700 <br/> I am a talented Software Developer. ^1000 I have been building scalable web applications for web 2.0. ^700 I design, Implement and backends. ^1000 I am also a professional Linux User. ^500 Graduate in Telecommunications Engineering.  <br> I Live in Nairobi. ^1000 <br> My Stack::::: <br> 1. ^1000  Elixir ~ Phoenix Framework, Metaprogramming <br> 2. ^1000  NodeJS ~ ExpressJS <br> 3. ^1000  ReactJS <br> 4. ^1000  MongoDB, RethinkDB <br> 5. ^1000  Python <br> 4. ^1000 Docker and Kubernetes <br> ^1000 I have aspiration in  <br> ^1000 ML, ^1000 -AI and ^1000 -IoT ^1000  <br> You wanna find  out More? or Contact me? ^1000 ^1000 ? ^1000 Check My Profile Down There &#x1f447 <br> Dont forget to Leave a message '],

            });
        });

        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });




        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();



        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',

            gallery: { enabled: true },
            zoom: {
                enabled: true,
                duration: 500

            },

            image: {
                markup: '<div class="mfp-figure portfolio-pop-up">' +
                    '<div class="mfp-close"></div>' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-bottom-bar portfolio_title">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',

                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }


        });




        /* Testimonial Carousel/Slider */

        $('.testimonial-carousel-list').owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            navigation: true,
            navigationText: ['<i class=\'fa fa-long-arrow-left fa-2x owl-navi\'></i>', '<i class=\'fa fa-long-arrow-right fa-2x owl-navi\'></i>'],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle: 'backSlide'
        });




        /* Statistics Counter */

        $('.statistics').appear(function () {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });



        /* Google Map */
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
            parking: {
                name: 'Parking',
                icon: iconBase + 'parking_lot_maps.png'
            },
            library: {
                name: 'Library',
                icon: iconBase + 'library_maps.png'
            },
            info: {
                name: 'Info',
                icon: iconBase + 'info-i_maps.png'
            }
        };
        $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers: [
                {
                    address: 'Kenyatta Avenue, Nairobi',  /* You can change your address from here */
                    html: '<b>24136-00100</b>: <br> GPO, Nairobi, Kenya.',   /* You can change display address text from here */
                    popup: true
                }
            ]
        });


    });

})(jQuery);

//Matrix Background canvas
// geting canvas by id c
var c = document.getElementById('c');
var ctx = c.getContext('2d');

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
//converting the string into an array of single characters
matrix = matrix.split('');

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = '#0F0'; //green text
    ctx.font = font_size + 'px arial';
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);
var feedbackSent = false
$(document).ready(function () {
    // Listen to click event on the submit button
    $('#send-message').click(function (e) {

        e.preventDefault();
        if (feedbackSent) return alert("feedback sent")

        var name = $("#name").val();
        var email = $("#name").val();
        var address = $("#address").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var website = $("#website").val()

        if (!name || !email || !address || !message) return alert("Please fill form")

        var text = JSON.stringify({ name, email, address, subject, message, website })
        var url = "https://hooks.slack.com/services/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"
        feedbackSent = true;
        $.ajax({
            data: 'payload=' + JSON.stringify({
                "text": text
            }),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: url
        })
    });


});

