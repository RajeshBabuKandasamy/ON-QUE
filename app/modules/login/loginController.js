'use strict';

OnqueApp.controller('loginController', [
  '$scope','$window','DoctorsList','$rootScope','$state','dataService','userLogin',
  function ($scope, $window, DoctorsList, $rootScope, $state, dataService, userLogin) {	
  
  //Registration
    var userDetails = {};
    $scope.login = function() {
      userDetails = $scope.user;
      console.log(userDetails);
      var auth = userLogin.result(userDetails);
         auth.success(function(data){
            console.log(data);
      }).error(function(err){
           console.log(err);
          });
    }
  
}]);