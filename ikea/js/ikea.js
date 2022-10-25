
// 비디오

$(function(){
    var myVideo = $('#myVideo');

    $('#vplay').click(function(){
        myVideo.get(0).play();
        $("#name").hide();
        $("#vplay").hide();
        $(".brand_open").hide();
        $(".black").hide();
    });
    
   
  
    
});
// 비디오

// nav

$(document).ready(function () {
 
    $(".navBtn").on("click",function(){ 

       $(".nav_header_on").addClass("on");
    });
    $(".navInner .close").on("click",function(){ 
       $(".nav_header_on").removeClass("on");
     });

 
    });
    // nav

//추천제품
    $(function(){
      // $('.product1_slide').slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   prevArrow:$('.slide_left'),
      //   nextArrow:$('.slide_right'),
      //   autoplay:true,
      //   autoplaySpeed:5000,
      //   arrowTo:3
      // });
      $('.product1_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:$('.slide_left'),
        nextArrow:$('.slide_right'),
        autoplay:true,
        centerMode:true,
        centerPadding:'40px',
        autoplaySpeed:5000,
        arrows:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:$('.slide_left'),
            nextArrow:$('.slide_right'),
            centerMode:false,
           
           
            }
          },
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:$('.slide_left'),
            nextArrow:$('.slide_right'),
            centerMode:false,
            }
          },
          {
            breakpoint: 750,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:$('.slide_left'),
            nextArrow:$('.slide_right'),
            centerMode:false,
            }
          }
        
        ]
      });
  

    });
    

   

// 온라인쇼륨
$(function(){
    $('.image_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2000,
      dots: true,
      arrows: false,
      fade:true,
      fadespeed:1000
      
    });
  });

//온라인 쇼룸

//scroll-out
$(function(){
  ScrollOut({});
});
// scroll-out

// 모두를 위한 디자인 typeIt
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#typing')
  .pause(200)
  .go();

})
//모두를 위한 디자인

//visual sofa
$(function(){
  $(window).scroll(function () {
    $(sofa).animate()
    
    


  })
})
  
// visual sofa
$(function(){
 AOS.init();

});
//visual sofa


