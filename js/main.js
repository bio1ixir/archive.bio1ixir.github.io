$(function() {

  $(window).scroll(function() {
    if ($(window).width() <= 776) {
      var mass = 100 + '%';
      if ($(window).scrollTop() > 5) {
        $('.container').css({
        'width': mass,
        'padding':'1rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
        
        
        $('.contact').css({
          'width': mass,
          'padding': '3rem 30px',
          'transition-property': 'all',
          'transition-duration': '0.3s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s'});
  

          if ($(window).width() <= 600) {
            $('.el4').css({
              'font-size': '1.8rem', 
              'line-height': '0rem', 
              'padding': '0px 0% 0px 0%',
              'transition-property': 'all',
              'transition-duration': '0.5s',
              'transition-timing-function': 'ease',
              'transition-delay': '0s'});
      
          }
          else {
        $('.el4').css({
        'font-size': '2.4rem', 
        'line-height': '0rem', 
        'padding': '0px 0% 0px 0%',
        'transition-property': 'all',
        'transition-duration': '0.5s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});
        }
        $('.nav-s').css(
          {'display': 'grid',
          'grid-template-columns': 'auto auto auto',
          'transition-property': 'all',
          'transition-duration': '0.2s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s',
          'align-content': 'center'}
        );

        $('.nav-left').css(
          {'display': 'none'}
        );

        $('.nav-right').css(
          {'display': 'none'}
        );
      }
      else {
        mass = 90 + '%';
        $('.container').css({'width': mass,
        'padding':'1rem 1.5rem',
        'transition-property': 'all',
        'transition-duration': '0.3s',
        'padding': '1.4rem 1.5rem',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.contact').css({'width': mass,
        'padding': '3rem 30px',
        'transition-property': 'all',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease',
        'transition-delay': '0s'});

        $('.el4').css({
          'font-size': '2rem', 
          'line-height': '0rem', 
          'padding': '0px 0% 0px 0%',
          'transition-property': 'all',
          'transition-duration': '0.5s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s'});
  
        $('.nav-s').css(
          {'display': 'grid',
          'grid-template-columns': 'auto auto auto',
          'transition-property': 'all',
          'transition-duration': '0.2s',
          'transition-timing-function': 'ease',
          'transition-delay': '0s',
          'align-content': 'center'}
        );


        $('.nav-left').css(
          {'display': 'none'}
        );

        $('.nav-right').css(
          {'display': 'none'}
        );
      }
    }

    if ($(window).width() <= 1076 && $(window).width() > 776) {
      if ($(window).scrollTop() > 0.5) {
        $('.el4').css({'font-size': '2rem', 'line-height': '2rem', 'padding': '13px'});
      }
      else {
        $('.el4').css({'font-size': '3rem', 'line-height': '3rem', 'padding': '15px'});
      }
      $('.container').css({'width': '93%'});

      $('.contact').css({'width': '93%'});

      $('.nav-s').css(
        {'display': 'none'}
      );

      $('.nav-left').css(
        {'display': 'grid'}
      );
    
    
      $('.nav-right').css(
        {'display': 'grid'}
      );
    }
   if ($(window).width() <= 1586  && $(window).width() > 1076) {
    if ($(window).scrollTop() > 0.5) {
      $('.el4').css({'font-size': '2.2rem', 'line-height': '2.2rem', 'padding': '5px'});
    }
    else {
      $('.el4').css({'font-size': '3.3rem', 'line-height': '3.3rem', 'padding': '16px'});
    }

      $('.container').css({'width': '85%'});

      $('.contact').css({'width': '85%'});

      $('.nav-s').css(
        {'display': 'none'}
      );


      $('.nav-left').css(
        {'display': 'grid'}
      );
    
    
      $('.nav-right').css(
        {'display': 'grid'}
      );

    }
   if ($(window).width() > 1586) {

    if ($(window).scrollTop() > 0.5) {
      $('.el4').css({'font-size': '2.9rem', 'line-height': '3rem', 'padding': '10px'});
    }
    else {
      $('.el4').css({'font-size': '4.3rem', 'line-height': '4.5rem', 'padding': '16px'});
    }

      $('.container').css({'width': '85rem'});

      $('.contact').css({'width': '85rem'})


      $('.nav-s').css(
        {'display': 'none'}
      );

      $('.nav-left').css(
        {'display': 'grid'}
      );
    
    
      $('.nav-right').css(
        {'display': 'grid'}
      );

    }
  });
});


function openNavl() {
  document.getElementById("nav-l").style.width = "100%";
}

function closeNavl() {
  document.getElementById("nav-l").style.width = "0%";
}


function openNavr() {
  document.getElementById("nav-r").style.width = "100%";
}

function closeNavr() {
  document.getElementById("nav-r").style.width = "0%";
}
