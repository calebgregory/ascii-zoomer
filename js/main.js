var clicking = false
  , fontSize = 13
  , currY;

$('.container').mousedown(function(){
  clicking = true;
  $('.clickstatus').text('mousedown');

  $(this).mousemove(function(e){
    if(clicking == false) return;

    // Mouse click + moving logic here
    $('.movestatus').text('mouse moving');


    if(e.pageY <= currY - 5 && fontSize < 28) {
      if($(window).width() < $('pre').width()) return;
      fontSize++;
    } else if(e.pageY > currY + 5 && fontSize > 4) {
      fontSize--;
    }
    currY = e.pageY;

    $('pre').css('font-size',fontSize+'px');
  });

});

$(document).mouseup(function(){
  clicking = false;
  $('.clickstatus').text('mouseup');
  $('.movestatus').text('click released, no more move event');
})

