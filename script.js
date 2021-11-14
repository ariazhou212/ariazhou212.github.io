$("#navi-dc").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#discord").offset().top
  }, 2000);
});
$("#navi-fin").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#finvestigator").offset().top
  }, 2000);
});
$("#navi-cf").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#cofe").offset().top
  }, 2000);
});
$("#navi-fun").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#fun").offset().top
  }, 2000);
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi-container').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('navi-container').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('navi-container').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}