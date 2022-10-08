var splider = new Splide( '.splide' );
var bar    = splider.root.querySelector( '.my-carousel-progress-bar' );

splider.on( 'mounted move', function () {
  var end  = splider.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splider.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splider.mount();

var splide = new Splide( '.lor' );

splide.on( 'mounted move', function () {
  var end  = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar2.style.width = String( 100 * rate ) + '%';
} );

splide.mount();
