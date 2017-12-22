app.directive('waveClick', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

      // je viens de refacto mon fichier, ca marche nikel.


      element.on('click', function(){

        var x = event.offsetX;
        var y = event.offsetY;

        var wave = '<span class="wave" style="top:'+ y +'px; left:'+ x +'px;"></span>';

        element.append(wave);

        element.one("webkitAnimationEnd mozAnimationEnd oAnimationEnd\oanimationend animationend", function(){
          element.children().remove();
        });
      });
    }
  };
});