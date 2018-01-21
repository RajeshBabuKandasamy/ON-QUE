
OnqueApp.controller('appointmentController', [
  '$scope','$window','$timeout','$rootScope','dataService','DoctorsList',
  function ($scope, $window, $timeout, $rootScope, dataService, DoctorsList) {	
  $scope.searchText = "";
  
   
  //Change Header background
  $timeout(function () {
        var myE2 = angular.element(document.querySelector('.myHeadercss'));
        myE2.css({'background-color':'#172636', 'opacity':'1'});
  }, 50);

  angular.element($window).bind("scroll", function() { 
     var myE3 = angular.element(document.querySelector('.myHeadercss'));
     myE3.css({'background-color':'#172636', 'opacity':'1'});
  });
  
  $scope.searchText = dataService.getSearchData();

  var doctorsCollection = DoctorsList.result($scope.searchText);
    	   doctorsCollection.success(function(data){
      		$scope.searchDoctorList = data;
    	}).error(function(err){
    	    });
 
  // Header configuration
    $scope.onqueheaderConfig = {
        showSearch: true
    }
  
}]);