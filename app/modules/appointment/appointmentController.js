
OnqueApp.controller('appointmentController', [
  '$scope','$window','$timeout','$rootScope','dataService','DoctorsList','DoctorDetailList',
  function ($scope, $window, $timeout, $rootScope, dataService, DoctorsList, DoctorDetailList) {	
  
  $scope.searchText = "";
  $scope.stext = "";

  //Change Header background
  $timeout(function () {
        var myE2 = angular.element(document.querySelector('.myHeadercss'));
        myE2.css({'background-color':'#172636', 'opacity':'1'});
  }, 50);

  angular.element($window).bind("scroll", function() { 
     var myE3 = angular.element(document.querySelector('.myHeadercss'));
     myE3.css({'background-color':'#172636', 'opacity':'1'});
  });

  $scope.searchRecord = function(sdata){
        var doctorsCollection = DoctorsList.result(sdata);
         doctorsCollection.success(function(data){
          $scope.searchDoctorList = data;
      }).error(function(err){
          });
    }

  $scope.searchDoctorRecord = function(doctorId){
        var doctorDetailCollection = DoctorDetailList.result(doctorId);
         doctorDetailCollection.success(function(data){
          $scope.searchDoctorList = data;
      }).error(function(err){
          });
    }

  $scope.getSessionText = localStorage.getItem("searchedText");

  var doctorId = dataService.getDoctorId();
  if(doctorId != '')
  {
      $scope.searchDoctorRecord(doctorId);

  }else{
  if($scope.getSessionText == "")
  { 
    var stext = dataService.getSearchData();         
    if(stext != ''){
    localStorage.setItem("searchedText",JSON.stringify(stext));
    $scope.searchRecord(stext);
  }
 }else{
    console.log(JSON.parse($scope.getSessionText));
    $scope.searchRecord(JSON.parse($scope.getSessionText));
  }
}
  

  

 
  // Header configuration
    $scope.onqueheaderConfig = {
        showSearch: true
    }
  
}]);