
$('.graph-container').find(".free").append(`<kbd class='number'><span>23</span>/50</kbd>`);

$('.graph-container').mouseenter(function() {
  $(this).find(".free").append(`<kbd class='number'><kbd class='blue'>23</kbd>/50</kbd>`);
  // $(this).find(".used").append(`<kbd class='number'>20 Consumed</kbd>`);
  $('.graph-container').not(this).css('opacity','0.3');
});

$('.free').mouseleave(function() {
  $('.number').remove();
  $('.graph-container').not(this).css('opacity','1');
});
