(function($) {
window.showOnScroll = {
  scrollTop: 0,
  windowHeight: $(window).height(),
  scrollElements: $('.js-show'),
  snapElement: $('.snap'),
  snapPos: 0,

  init: function(){
    if( showOnScroll.snapElement.length > 0 ){
      showOnScroll.snapPos = showOnScroll.snapElement.offset().top;
    }
  },

  render: function(){
    showOnScroll.calculateVariables();
    showOnScroll.checkElements();

    console.log('snapPOs: ', showOnScroll.snapPos);
  },

  calculateVariables: function(){
    showOnScroll.scrollTop = $(window).scrollTop();
    showOnScroll.windowHeight = $(window).height();
    showOnScroll.bottom_of_window =  showOnScroll.scrollTop + showOnScroll.windowHeight;

  },

  checkElements: function() {

    showOnScroll.scrollElements.each(function() {
      var $this = $(this);
      var offset = $this.data('offset') ? $this.data('offset') : 0;

      if ( offset.toString().indexOf('%') >= 0 ){
        offset = offset.split('%')[0];
        offset = $this.height() * (offset/100);
      }

      var bottom_of_object = $this.offset().top + offset;

      /* Only use if js is available */
      $this.addClass('js-active');

      if( showOnScroll.bottom_of_window > bottom_of_object ) {
        $this.addClass('js-show--shown');
      }
      else {
        $this.removeClass('js-show--shown fix-text');
      }
    });


    if( showOnScroll.scrollTop > (showOnScroll.snapPos - $('.nav-header').height() ) ) {
      showOnScroll.snapElement.addClass('snapped');
      showOnScroll.snapElement.parent().addClass('expand');
    }
    else {
      showOnScroll.snapElement.removeClass('snapped');
      showOnScroll.snapElement.parent().removeClass('expand');

    }
  }
}
})( jQuery );
