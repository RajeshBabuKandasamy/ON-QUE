'use strict';

OnqueApp.controller('signupController', [
  '$scope','$window','DoctorsList','$rootScope','$state','dataService','userSignup',
  function ($scope, $window, DoctorsList, $rootScope, $state, dataService, userSignup) {	
  
  //Registration
    var userDetails = {};
    $scope.register = function() {
      userDetails = $scope.user;
      userDetails['password']= $scope.password;
      console.log(userDetails);
      if($scope.acceptTerms){
          var userRegistration = userSignup.result(userDetails);
             userRegistration.success(function(data){
                console.log(data);
          }).error(function(err){
               console.log(err);
              });
      }
    }
  
}]);