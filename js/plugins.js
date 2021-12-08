/*global $, window, mixitup,  */

$(function () {
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
        mySlider = $('.bx-slider'),
        mixer = mixitup('#container');
    
    $('.services,.testim,.portfolio').css('paddingTop', $('.navbar').innerHeight());
    
    $(window).on('scroll', function () {
        
        var sc = $(window).scrollTop(),
            blockId = $(this).attr('id'),
            navBar = $('.navbar');
        
        
        
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
            
                
                
                $(".navbar .links li a[data-value='" + blockId + "']").addClass('active').parent().siblings().find('a').removeClass('active');
                
            }
            
            if (sc <= $('#ser').offset().top) {
                navBar.css('backgroundColor', 'rgba(0, 0, 0, 0)');
            } else {
                navBar.css('backgroundColor', 'rgba(0, 0, 0, 0.7)');
            }
        });
        
    });
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        // Adjust Make List Item Center

        
        mySlider.each(function () {
        
            $(this).css('paddingTop', ($(window).height() - $('.bx-slider li').height()) / 2);
        
        });
        
    });
    
    // Adjust Make List Item Center
    
    mySlider.each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.bx-slider li').height()) / 2);
        
    });
    
    // Links Add Active Class
    
    $('.links li a').click(function () {
       
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        
    });
    
   // trigger the bxslider 
    mySlider.bxSlider({
        pager: false
    });
    
    // Smooth Scroll To Div
    $('.links li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 1
        }, 1000);
    });
    
    // Our Auto Slider Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    
    // Trigger MixItUp 
    

    
    $('.Shuffle li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
});