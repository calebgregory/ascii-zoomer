var clicking = false
  , fontSize = 13
  , currY
  , contained = true;

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
    console.log(currY,e.pageY,fontSize)
    currY = e.pageY;

    $('pre').css('font-size',fontSize+'px');
  });

});

$(document).mouseup(function(){
  clicking = false;
  $('.clickstatus').text('mouseup');
  $('.movestatus').text('click released, no more move event');
})

function toggleContainer(clicker) {
  if(contained) {
    $('.container').css('max-height', 1000);
    $('.container').css('max-width', 1500);
    $('.container pre').css('max-height', 1000);
    $('.container pre').css('max-width', 1500);
    $(clicker).text('put this back in its damn container');
    contained = false;
  } else {
    $('.container').css('max-height', 500);
    $('.container').css('max-width', 500);
    $('.container pre').css('max-height', 500);
    $('.container pre').css('max-width', 500);
    $(clicker).text('get rid of this damn container');
    contained = true;
  }
}
$('#toggle-container').on('click', function(e) {
  toggleContainer(this);
  e.preventDefault();
})
