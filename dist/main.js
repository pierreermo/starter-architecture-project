// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(['$locationProvider', function($locationProvider) {
  	$locationProvider.hashPrefix('');
}]);
app.config(function($routeProvider) {
	$routeProvider

		.when('/hello', {
			templateUrl : 'app/views/hello.html',
			controller  : 'helloController',
		})
		.when('/page', {
			templateUrl : 'app/views/page.html',
			controller  : 'pageController',
		})
		.otherwise({redirectTo:'/hello'});

});
app.controller('helloController', function($scope) {
	$scope.viewName = "view--hello";
});
app.controller('mainController', function($scope) {
	
});
app.controller('pageController', function($scope) {
	$scope.viewName = "view--page";
});
app.directive('waveClick', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuanMiLCJjb25maWcuanMiLCJyb3V0ZXIuanMiLCJoZWxsb0NvbnRyb2xsZXIuanMiLCJtYWluQ29udHJvbGxlci5qcyIsInBhZ2VDb250cm9sbGVyLmpzIiwid2F2ZS1jbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY3JlYXRlIHRoZSBtb2R1bGUgYW5kIG5hbWUgaXQgYXBwXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsICduZ0FuaW1hdGUnXSk7IiwiYXBwLmNvbmZpZyhbJyRsb2NhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgXHQkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKTtcbn1dKTsiLCJhcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cblx0XHQud2hlbignL2hlbGxvJywge1xuXHRcdFx0dGVtcGxhdGVVcmwgOiAnYXBwL3ZpZXdzL2hlbGxvLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlciAgOiAnaGVsbG9Db250cm9sbGVyJyxcblx0XHR9KVxuXHRcdC53aGVuKCcvcGFnZScsIHtcblx0XHRcdHRlbXBsYXRlVXJsIDogJ2FwcC92aWV3cy9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlciAgOiAncGFnZUNvbnRyb2xsZXInLFxuXHRcdH0pXG5cdFx0Lm90aGVyd2lzZSh7cmVkaXJlY3RUbzonL2hlbGxvJ30pO1xuXG59KTsiLCJhcHAuY29udHJvbGxlcignaGVsbG9Db250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCRzY29wZS52aWV3TmFtZSA9IFwidmlldy0taGVsbG9cIjtcbn0pOyIsImFwcC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSkge1xuXHRcbn0pOyIsImFwcC5jb250cm9sbGVyKCdwYWdlQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSkge1xuXHQkc2NvcGUudmlld05hbWUgPSBcInZpZXctLXBhZ2VcIjtcbn0pOyIsImFwcC5kaXJlY3RpdmUoJ3dhdmVDbGljaycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblxuICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgICAgdmFyIHkgPSBldmVudC5vZmZzZXRZO1xuXG4gICAgICAgIHZhciB3YXZlID0gJzxzcGFuIGNsYXNzPVwid2F2ZVwiIHN0eWxlPVwidG9wOicrIHkgKydweDsgbGVmdDonKyB4ICsncHg7XCI+PC9zcGFuPic7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQod2F2ZSk7XG5cbiAgICAgICAgZWxlbWVudC5vbmUoXCJ3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmRcXG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pOyJdfQ==
