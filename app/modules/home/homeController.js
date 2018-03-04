'use strict';

OnqueApp.controller('homeController', [
  '$scope','$window','DoctorsList','$rootScope','$state','dataService',
  function ($scope, $window, DoctorsList, $rootScope, $state, dataService) {	
  $scope.searchText = "";
  $scope.searchSection = false;
  $scope.searchInputSection = true;
  $scope.doctor = [];
  $scope.headerSearchText ='';
  localStorage.setItem("searchedText", '');
  localStorage.setItem("searchedDoctorId", '');  

  $scope.$watch("headerSearchText", function(newvalue,oldvalue){
        $scope.headerSearchText = newvalue;
  }) 

  angular.element($window).bind("scroll", function() {
      $scope.position = $window.scrollY;
      $scope.windowWidth = $window.innerWidth;

      var myEl = angular.element(document.querySelector('.myHeadercss'));
      
        if($scope.windowWidth <= 768){
        $scope.onqueheaderConfig = {
             showSearch: false
       }
       $scope.searchInputSection = true;
       $scope.headerSearchSection = false;
       if($scope.searchText != ''){
          $scope.searchSection = true;
        }
        myEl.css({'min-height':'auto'});
      }
      else{
      if ($scope.position >= 250) {
       $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: true
        }
      if($scope.headerSearchText != ''){
        $scope.headerSearchSection = true;
      }
     $scope.searchInputSection = false;
     $scope.searchSection = false;
     myEl.css({'background-color':'#172636', 'opacity':'1'});
	   }
     else if ($scope.position < 250) {
      	$scope.onqueheaderConfig = {
          hambergFlag: true,
          showSearch: false
        }
      $scope.searchInputSection = true;
      $scope.headerSearchSection = false;
      if($scope.searchText != ''){
          $scope.searchSection = true;
      }
        myEl.css({'background-color':'transparent', 'opacity':'1'});
    }
    $rootScope.$emit('headerSearchSectionFlag', $scope.headerSearchSection);
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

  $scope.searchDoctor = function(){
        //dataService.setDoctorId('');
        //dataService.setSearchData($scope.searchText);
        if($scope.searchText != ''){
          localStorage.setItem("searchedText",JSON.stringify($scope.searchText));
          $state.go('appointment');
      }
  }

  $scope.searchParticularDoctor = function(docId){
        //dataService.setDoctorId(docId);
        if(docId != ''){
          localStorage.setItem("searchedDoctorId",JSON.stringify(docId));
          $state.go('appointment');
        }
  }

  $scope.getSearchresults = function(){
  	var doctorsCollection = DoctorsList.result($scope.searchText);
    	   doctorsCollection.success(function(data){
          if(data != ''){
            $scope.searchSection = true;
        		$scope.doctor = data;
          }else{
            $scope.searchSection = false;
          } 
    	}).error(function(err){
    	    	            });
      }

  // Header configuration
    $scope.onqueheaderConfig = {
        hambergFlag: true,
        showSearch: false
    }
  
}]);