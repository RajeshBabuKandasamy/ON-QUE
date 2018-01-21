'use strict';

OnqueApp.controller('homeController', [
  '$scope','$window','DoctorsList',
  function ($scope, $window, DoctorsList) {	
  $scope.searchText = "";
  $scope.searchSection = false;
  $scope.searchInputSection = true;
  $scope.doctor = [];
  
  angular.element($window).bind("scroll", function() {
      $scope.position = $window.scrollY;
      $scope.windowWidth = $window.innerWidth;
      var myEl = angular.element(document.querySelector('.myHeadercss'));
      if($scope.windowWidth <= 768){
        $scope.onqueheaderConfig = {
             showSearch: false
       }
       $scope.searchInputSection = true;
       if($scope.searchText != ''){
          $scope.searchSection = true;
        }
      }
      else{
      if ($scope.position >= 295) {
       $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: true
        }
     $scope.searchInputSection = false;
     $scope.searchSection = false;
     myEl.css({'background-color':'#172636', 'opacity':'1'});
	   }
   else if ($scope.position <= 295) {
      	$scope.onqueheaderConfig = {
          hambergFlag: true,
          showSearch: false
        }
      $scope.searchInputSection = true;
      if($scope.searchText != ''){
          $scope.searchSection = true;
      }
        myEl.css({'background-color':'transparent', 'opacity':'1'});
    }
    $scope.$apply();
   }
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
    	}).error(function(err){
    	    	            });
      }

  // Header configuration
    $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: false
    }
  
}]);