angular
	.module('UbiHeard')
	.config(config);


function config($routeProvider){
	$routeProvider
        .when('/', {
            templateUrl: '/app/listings.html',
            controller: 'ListingController',
            controllerAs: 'vm'
        })
        .when('/add', {
            templateUrl: '/app/add.html',
            controller: 'AddController',
            controllerAs: 'vm'
        })
        .when('/ideas/:ID', {
            templateUrl: '/app/idea.html',
            controller: 'IdeaController',
            controllerAs: 'vm'
        })
		.otherwise({
			redirectTo : '/'
		});

}
