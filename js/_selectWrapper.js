window.selectWrapper = {
  elementWrapper: $('.select-wrapper'),
  element: $('.select-wrapper select'),

  init: function(){
    selectWrapper.handleChange();
  },

  handleChange: function(){
    selectWrapper.element.on('change', function(e){
      var _val = $(this).val();
      //console.log('_val:', _val);
      var _valText = $('option').val(_val).get(0).innerText;
      console.log('_val:', _val);
      selectWrapper.elementWrapper.attr('data-selected',_valText);
    });

  }
}
