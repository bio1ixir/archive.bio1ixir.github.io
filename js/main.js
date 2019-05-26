$(function() {

    $(window).scroll(function() {
      if ($(window).width() < 1076) {
        var mass = Math.max(1.8, 3-0.1*$(this).scrollTop()) + 'rem';
        var pad = Math.max(5, 16-0.05*$(this).scrollTop()) + 'px';
        $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
      }
     else if ($(window).width() < 1586  && $(window).width() >= 1076) {
        var mass = Math.max(2, 4-0.009*$(this).scrollTop()) + 'rem';
        var pad = Math.max(5, 16-0.02*$(this).scrollTop()) + 'px';
        $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
      }
      else if ($(window).width() >= 1586) {
        var mass = Math.max(3, 5-0.009*$(this).scrollTop()) + 'rem';
        var pad = Math.max(10, 16-0.02*$(this).scrollTop()) + 'px';
        $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
      }
    });
  });