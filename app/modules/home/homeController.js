'use strict';

OnqueApp.controller('homeController', [
  '$scope','$window','DoctorsList',
  function ($scope, $window, DoctorsList) {	
  $scope.searchFlag = false;

  angular.element($window).bind("scroll", function() {
      $scope.position = window.pageYOffset;
      if ($scope.position >= 300) {
      	$scope.myObj = {
	     'showSearch' : true,
	     'opacity'    : 1,
	     'color'	  : '#172635'
	 	}
	 	$scope.$emit('headercssDesign', $scope.myObj);
    }
    else if ($scope.position <= 300) {
      	$scope.myObj = {
	     'showSearch' : false,
	     'opacity'    : 1,
	     'color'	  : 'transparent'
	 	}
	 	$scope.$emit('headercssDesign', $scope.myObj);
    }
  });
  $scope.mydata = 'raj';
  var doctorsCollection = DoctorsList.result($scope.mydata);
	doctorsCollection.success(function(data){
	    console.log(data);
	  
	}).error(function(err){
	    	            });
}]);