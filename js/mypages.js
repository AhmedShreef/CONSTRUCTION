/*global $, jQuery, alert, console,*/

$(function () {
    "use strict";
    
     //Nav Bar top button Toggel media max width 1200px 
    $('.top-nav .top-navbar-header').on("click", function () {
        
        $('.top-nav .top-collapse').fadeToggle();
    });
    
    //NavBar Fixd 
    $(window).scroll(function () {
        
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= 70) {
            
          
            navbar.addClass('navbar-fixed-top');
            
            $('.navbar-inverse .navbar-inner').removeClass('margin-lg');
            
            
            
        } else {
            
            navbar.removeClass('navbar-fixed-top');
            
            $('.navbar-inverse .navbar-inner').addClass('margin-lg');
            
            
            
        }
    });
    
    //Add Class Active Link
    $('.navbar-inverse .navbar-nav li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    
    // Click icon search Show Input Searsh And hide Nav Bar
    $('.navbar-right i').click(function () {
        $('.navbar-nav').hide(100);
        $('.navbar-right').hide(100);
        $('.search-input').show(100);
    });
    
    // Click icon X Show Nav Bar And hide input Search
    $('.search-input .fa-times').click(function () {
        $('.search-input').hide(100);
        $('.navbar-nav').show(100);
        $('.navbar-right').show(100);
    });
    
    
    //Start Button Scroll To Top
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            $('#scroll').show();
        } else {
            $('#scroll').hide();
        }
    });
    
    $('#scroll').click(function () {
        
        $('html, body').animate({scrollTop: 0}, 2000);
        
    });
    
    //Contact Form in page Contact event click input
    $('.contact .contact-form ul li').click(function () {
        
        $(this).addClass('click').siblings().removeClass('click');
    });
    
});