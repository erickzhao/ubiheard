angular
	.module('UbiHeard')
	.config(config);


function config($routeProvider){
	$routeProvider
		.otherwise({
			redirectTo : "/"
		});
	
}
