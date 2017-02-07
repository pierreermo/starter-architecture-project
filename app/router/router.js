app.config(['$routeProvider', function($routeProvider) {
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

}]);