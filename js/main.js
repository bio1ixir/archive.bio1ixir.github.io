$(function() {

    $(window).scroll(function() {
  
      var mass = Math.max(45, 80-0.1*$(this).scrollTop()) + 'px';
      var pad = Math.max(10, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
    });
  });