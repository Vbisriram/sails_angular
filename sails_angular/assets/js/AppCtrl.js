angular.module('myApp', [])
  .controller('mainCtrl', function($scope, $http, $log) {
    $scope.name = "Dinesh";
    $scope.user = {
      name: "default_name",
      number: "12",
      email: "default@mm.com"
    };
    $scope.submit = function() {
      console.log('User clicked submit with ', $scope.user);
      $http.post("http://localhost:1330/employee/create/", {
          name: $scope.user.name,
          empnum: $scope.user.number,
          email: $scope.user.email
        })
        .success(function(data) {
          $scope.employees = data;
          $log.info($scope.employees);

        });
    }

  });
