$(function(){
    "use strict";

// Open the submenu by clicking on the left panel menu item
    $('.open_submenu_btn').on('click touch', function(event) {

        // event.preventDefault();
        console.log('1');

        $($(this).parent('.main_item')).toggleClass('open');
        $($(this).parent('.main_item')).next('.submenu_items').toggleClass('open');

    });

// Open menu items for the Other Products menu
    $('.other_products_menu').click(function() {

        console.log(this);
        $(this).find('.nav_content').toggleClass('open');

        $(this).find('.other_main_item').click(function(event) {
            event.preventDefault();
            event.stopPropagation();

            // mark only just clicked menu item
            var clicked_item_href = $(this).attr("href");
            $('.nav_content').find('.other_main_item').each(function() {
                $(this).toggleClass('open', $(this).attr('href') == clicked_item_href);
             });
        });
    });

// Change image clicking on thumbnails
    $('.thumbnail img').click(function() {

        var CurrentImageURL = $(this).attr("src");
        $('.product__image img').attr("src", CurrentImageURL);

    });

// fix top part with logo and menu button on top during scrolling the page
    let offset = $('.header').offset();

    $(window).scroll(function() {
        if ( $(window).scrollTop() > offset.top && $(window).width() < 1024) {
            $('.header').addClass('fixedNav');
        } else {
            $('.header').removeClass('fixedNav');
        }
    });

// Work with Search button
    $('#search_btn').click(function() {
        $('#search_panel').toggleClass('open');
    });

// Work with Hamburger menu button
    $('#hamburger_menu_btn').click(function() {
        $(this).toggleClass('open');
        $('.usb_gear_products_menu').toggleClass('open');
        // disable scrolling of a main page when menu is open and enable scrolling when menu is closed
        $('#hamburger_menu_btn').hasClass('open') ? $('body').css('overflow', 'hidden') : $('body').css('overflow', 'auto');
        // shade a main page when menu is
        $('.disable_page').toggleClass('open');

    // and add scroll because of long menu items list
        var height = $(window).width() < 1024 ? $(window).height() - $('.header').height() : $(window).height();
        $('.usb_gear_products_menu').css({'max-height': height, 'overflow-y':'auto'});
    });

// Add a button 'READ MORE' for product description on mobile devices
    $('#product_description_read_more_btn').click(function() {
        // show or hide more text
        $('.product__details_description').toggleClass('open');
        // and change the link text
        $('#product_description_read_more_btn').text( $('#product_description_read_more_btn').text().trim() === "READ MORE" ? "READ LESS" : "READ MORE" );   
    });

// Slick slider initiation for .items_container_mobile (Similar Items section)
    $('.items_container_mobile').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1
    });

// Set a current year in copyright
    $("year").innerHTML = new Date().getFullYear();
});





