$(function() {

  $(window).scroll(function() {
    if ($(window).width() <= 776) {
      var mass = 100 + '%';
      if ($(window).scrollTop() > 0) {
        $('.container').css({
        'width': mass,
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.el4').css({
        'font-size': '2rem', 
        'line-height': '0rem', 
        'padding': '30px 0 0px 0px',
        'transition-property': 'all',
        'transition-duration': '1s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
      }
      else {
        mass = 90 + '%';
        $('.container').css({'width': mass,
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.el4').css({'font-size': '3rem', 
        'line-height': '0rem', 
        'padding': '30px 0px 0px 0px',
        'transition-property': 'all',
        'transition-duration': '1s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
      }
    }



    if ($(window).width() < 1076 && $(window).width() > 776) {
      var mass = Math.max(2, 4-0.18*$(this).scrollTop()) + 'rem';
      var pad = Math.max(13, 16-0.05*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
    }
   else if ($(window).width() < 1586  && $(window).width() >= 1076) {
      var mass = Math.max(2, 4-0.02*$(this).scrollTop()) + 'rem';
      var pad = Math.max(5, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
    }
    else if ($(window).width() >= 1586) {
      var mass = Math.max(3, 4.5-0.02*$(this).scrollTop()) + 'rem';
      var pad = Math.max(10, 16-0.02*$(this).scrollTop()) + 'px';
      $('.el4').css({'font-size': mass, 'line-height': mass, 'padding': pad});
    }
  });
});