(function($) {

    // $ Works! You can test it with next line if you like
    // console.log($);

window.globals = {
  $root: $('html,body'),
  scrollTop: $(window).scrollTop(),
  windowHeight: $(window).height(),
  windowWidth: $(window).width(),

  updateScrollPos : function(){
    globals.scrollTop = $(window).scrollTop();
  }
}

$(document).ready(function(){
  showOnScroll.init();
  showOnScroll.render();
  //selectWrapper.init();
});

$(window).on('scroll', function() {
  showOnScroll.render();
});

$(window).on('resize', function() {
  showOnScroll.calculateVariables();
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  $('.nav-toggle').click(function(){




    $('.main-menu').toggleClass('hide');
  	$('.nav-toggle').toggleClass('open');

  });
  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  }
});


  })( jQuery );
