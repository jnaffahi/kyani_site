function navigateTo(url)
		{
			window.open(url, "_blank");    
			return false;
		}
$(function(){
    // if(window.innerWidth > 992){
        //$(document).scroll(function(){
           // if ($(this).scrollTop()>500){
                // animate fixed div to small size:
               // $('.banner').stop().animate({ height: 700 , 'padding-top': 0},100);
            //} else {
                //  animate fixed div to original size
               // $('.banner').stop().animate({ height: 700, 'padding-top': 0},100);
            //}
        //});
    //}
    AOS.init({
        offset: 1,
        duration: 1100,
        easing: 'ease-in-sine',
        once: 'true'
      });
});
$(document).ready(function () {
    var trigger = $('.hamburger-menu'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });
  $(document).ready(function($){
    
        var headerwrap = $('.menu-logo');
    
        $(window).scroll(function(){
    
            var scroll = $(this).scrollTop();
            var topDist = 90;
    
            if( scroll > topDist ) {
                headerwrap.addClass('sticky');
            }
            else {
                headerwrap.removeClass('sticky');
            }
        });
    
    });
    $(document).ready(function() {
        
                    $(".bose").bose({
                        images : [ "assets/img/dist/banner.jpg", "assets/img/dist/banner-2.jpg", "assets/img/dist/banner-3.jpg", "assets/img/dist/banner-4.jpg", "assets/img/dist/banner-5.jpg"],
                        imageTitles: [
                            ['Title 1', 'Description one here'],
                            ['Title 2', 'Description two here'],
                            ['Title 3', 'Description three here'],
							['Title 4', 'Description four here'],
							['Title 5', 'Description five here'],
                        ], 
                        startIndex   : 0,
                        transition   : 'fade',
                        timeout      : 5, // 5 sec
                        duration     : 2, // 2 sec                       
                        onComplete : function(){
                            console.log("Trigger onComplete!");
                        },
                        onSlideStart : function(index){
                            console.log(index + ' destroying');
                        },
                        onSlideEnd : function(index){
                            console.log(index + ' showed');
                        },
                        onPause : function(index){
                            console.log('Paused');
                        },
                        pagination : { show : true, container : '.bose-pagination', text : true },
                        thumbs : { show : true, container : '.bose-thumbs', dimension : { width : 150, height: 70 }, text : true },
                        responsive : true,
                        autofit : false
                    });
        
                    $('.play').click(function(){
                        $(".bose").bose('play');
                    });
        
                    $('.pause').click(function(){
                        $(".bose").bose('pause');
                    });
        
                    $('.previous').click(function(){
                        $(".bose").bose('previous');
                    });
        
                    $('.next').click(function(){
                        $(".bose").bose('next');
                    });
        
                });
                $(document).ready(function() {

                $('.award').on('click',function(){   
                    $(this).toggleClass('award-open');

                    $(this).hasClass('award-open')?$('.award').not(this).removeClass('award-open'):'';
                });
            });    

