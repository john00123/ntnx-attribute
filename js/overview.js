//
// $('.graph-container').find(".free").append(`<div class='tooltip'><p class='number'><kbd class='blue'>23</kbd>/50</p></div>`);
//

$('.graph-container').mouseenter(function() {
  $(this).find(".free").append(`
    <div class='tooltip'>
      <h3 class='available'> 23 Available </h3>
      <h3 class='consumed'> 27 Used</h3>
    </div>`);
});

$('.graph-container').mouseleave(function() {
  $('.tooltip').remove();
});

$('.cluster-license').click(() => fullPopupContent(0));
$(document).keyup(e => {
  if (e.keyCode === 27) $('.popup-header').click();
  if (e.keyCode === 27) shutdown(); //esc key
});
