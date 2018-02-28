angular.module("module_name")
  .controller("deviceController", function($scope, $http, $resource) {
    $scope.coapRequest = function() {
      var method = $scope.request.method;
	  var host = $scope.request.host;
	  var path = $scope.request.path;
	  var query = $scope.request.query ? $scope.request.query : "";
      var coaprequest = $scope.request.method.concat("_", host, "_", path, "_", query);
      $resource('http://localhost:8080/:coaprequest', {coaprequest: "@coaprequest"}).get({coaprequest: coaprequest}, function(data) {
	    console.log(data);
	    if (data.error) {
	      $scope.data = "";
	      $scope.error = data.error;
	    } else {
	      $scope.error = "";
	      $scope.data = data.data;
	    }
	  });
    };
  });