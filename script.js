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
      scrollTop: ($("#cofe").offset().top + 90)
  }, 2000);
});
$("#navi-fun").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#fun").offset().top
  }, 2000);
});
$("#navi-dc2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#discord").offset().top
  }, 2000);
});
$("#navi-fin2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#finvestigator").offset().top
  }, 2000);
});
$("#navi-cf2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#cofe").offset().top
  }, 2000);
});
$("#navi-fun2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#fun").offset().top
  }, 2000);
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 90;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
  var st = $(this).scrollTop();
  if (didScroll && st >= 90) {
      hasScrolled();
      didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  
  // Make sure they scroll more than delta
  // if()
  //     return;
  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.

   if (st > lastScrollTop && st > 800){
      // Scroll Down
      $('#navi-container2').fadeOut(1000);
    } else if(st + $(window).height() < $(document).height() && Math.abs(lastScrollTop - st) <= delta){
        // Scroll Up
      $('#navi-container2').css('display','flex');;
    }

    if(st < 800) {
      $('#navi-container2').css('display','none');
    }
  
  lastScrollTop = st;
}