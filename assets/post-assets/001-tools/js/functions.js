$(function() {

});


$(window).scroll(function() {

  var windowScroll = $(this).scrollTop();
  
  $('.reboot > div').css({
    'top' : "-" + windowScroll + "px",
    'left' : "-" + windowScroll + "px",
    'right' : "-" + windowScroll + "px"
  });
    
});



  
