'use strict';

OnqueApp.controller('homeController', [
  '$scope','$window','DoctorsList',
  function ($scope, $window, DoctorsList) {	
  $scope.searchText = "";
  $scope.searchSection = false;
  $scope.doctor = [];

  angular.element($window).bind("scroll", function() {
      $scope.position = $window.scrollY;
      console.log($scope.position);
      var myEl = angular.element(document.querySelector('.myHeadercss'));
      if ($scope.position >= 330) {
       $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: true
        }
     myEl.css({'background-color':'#172636', 'opacity':'1'});
	   }
   else if ($scope.position <= 330) {
      	$scope.onqueheaderConfig = {
          hambergFlag: true,
          showSearch: false
        }
        myEl.css({'background-color':'transparent', 'opacity':'1'});
    }
    $scope.$apply();
  });

  $scope.searchKeyDownEvent = function($event){
        if($scope.searchText == ''){
          $scope.searchSection = false;
        }else{
        $scope.getSearchresults(); 
      }
    }

  $scope.getSearchresults = function(){
  	var doctorsCollection = DoctorsList.result($scope.searchText);
    	   doctorsCollection.success(function(data){
          $scope.searchSection = true;
      		$scope.doctor = data;
    	    console.log($scope.doctor);
    	  
    	}).error(function(err){
    	    	            });
      }

  // Header configuration
    $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: false
    }

  
}]);