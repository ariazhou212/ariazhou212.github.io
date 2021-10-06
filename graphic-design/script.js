//change sections
$('#about').click(function(){
      // $('#project-page').animate({padding:'35rem 0'},100);
  $('#about-page').fadeIn(800);
  $('#about').addClass('selected2');
  $('#projects').removeClass('selected');
  $('#projects').css('right','18vw');
  $('#project-page').fadeOut(400);
})
$('#projects').click(function(){
      // $('#project-page').animate({padding:'10vw 0'},100);
  $('#project-page').fadeIn(800);
  $('#about').removeClass('selected2');
  $('#projects').addClass('selected');
  $('#projects').css('right','11vw');
  $('#about-page').fadeOut(400);
})

$('#projects').mouseover(function(){
  $('#project-page').addClass('fadeout');
  $('#about-page').addClass('fadeout');
  $('#filter').css('display','block');
})
$('#projects').mouseout(function(){
  $('#project-page').removeClass('fadeout');
  $('#about-page').removeClass('fadeout');
  $('#filter').css('display','none');
})
$('#about').mouseover(function(){
  $('#project-page').addClass('fadeout');
  $('#about-page').addClass('fadeout');
  $('#filter2').css('display','block');
})
$('#about').mouseout(function(){
  $('#project-page').removeClass('fadeout');
  $('#about-page').removeClass('fadeout');
  $('#filter2').css('display','none');
})

//change font of title
$('#intro').children('h1').click(function(){
  var font = $('#intro').children('h1').css('font-family')
  if (font == 'silkscreennormal'){
    $('#intro').children('h1').css('font-family','sans-serif');
  } else {
    $('#intro').children('h1').css('font-family','silkscreennormal');
  }
})
$('#about-title').click(function(){
  var font = $('#about-title').css('font-family')
  if (font == 'silkscreennormal'){
    $('#about-title').css('font-family','sans-serif');
  } else {
    $('#about-title').css('font-family','silkscreennormal');
  }
})

//hover each project card
$('.project-card').each(function(){
  $(this).mouseover(function(){
    $(this).addClass('hover-over');
  })
  $(this).mouseout(function(){
    $(this).removeClass('hover-over');
  })
})

//play gif when hovering
$('#foxit').mouseover(function(){
  $('#foxit-img').attr('src','./images/foxit.gif');
})
$('#foxit').mouseout(function(){
  $('#foxit-img').attr('src','./images/foxit.png');
})
$('#websites').mouseover(function(){
  $('#web-img').attr('src','./images/web.gif');
})
$('#websites').mouseout(function(){
  $('#web-img').attr('src','./images/web.png');
})
$('#others').mouseover(function(){
  $('#others-img').attr('src','./images/others.gif');
})
$('#others').mouseout(function(){
  $('#others-img').attr('src','./images/others.png');
})


