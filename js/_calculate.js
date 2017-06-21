window.calculate = {

  percent: function(total,element,toPercent){
    var hasPercent = toPercent ? 100 : 1;
    return (element/total) * hasPercent;
  }
}
