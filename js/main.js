$(function() {

    $(window).scroll(function() {
  
      var mass = Math.max(3, 5-0.009*$(this).scrollTop()) + 'rem';
      var pad = Math.max(10, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
    });
  });