var app = angular.module("module_name",["ngRoute", "ngResource"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				controller: "deviceController",
				templateUrl: "views/index.html"
			})
			.otherwise("/");
	})