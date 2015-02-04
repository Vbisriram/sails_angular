 var myApp = angular.module('myApp', ['ngRoute']);

 myApp.controller('mainCtrl', function($scope, $http, $log, $location, $window) {
 	$scope.name = "Dinesh";
 	$scope.user = {
 		name: "default_name",
 		number: "12",
 		email: "default@mm.com"
 	};
 	$scope.returned = "";

 });


 myApp.config(['$routeProvider',
 	function($routeProvider) {
 		$routeProvider.
 		when('/Addemployee', {
 			//console.log("inside add new order");
 			templateUrl: 'templates/add-emp.html',
 			controller: 'AddOrderController'
 		}).
 		when('/viewemployee', {
 			templateUrl: 'templates/show-emp.html',
 			controller: 'ShowOrderController'
 		}).
 		when('/success', {
 				templateUrl: 'templates/success.html',
 				controller: 'SuccessController'
 			})
 			// 	.otherwise({
 			// 		redirectTo: '/'
 			// 	});
 	}
 ]);

 myApp.controller('AddOrderController', function($scope, $http, $log, $window) {
 	console.log("hello");
 	$scope.message = 'This is Add new order screen';
 	$scope.submit = function() {
 		$http.post("http://localhost:1330/employee/create", {
 				name: $scope.user.name,
 				empnum: $scope.user.number,
 				email: $scope.user.email
 			})
 			.success(function(data) {
 				$scope.employees = data;
 				$log.info($scope.employees);
 				$scope.returned = data;
 			});

 		//	console.log('User clicked submit with after the xcadad ', $scope.employees);
 		// 	$location.path('localhost:1330/success');
 		$window.location.href = '/success';

 	}
 });


 myApp.controller('ShowOrderController', function($scope) {
 	console.log("hello showing");
 	$scope.message = 'This is show order screen';

 });

 myApp.controller('SuccessController', function($scope) {
 	console.log("Success page showing");
 	$scope.message = 'This is success screen';

 });
 //
 //
 //  myapp.controller('ShowOrdersController', function($scope) {
 //
 //    $scope.message = 'This is Show orders screen';
 //
 //  });
