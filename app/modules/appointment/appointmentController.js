
OnqueApp.controller('appointmentController', [
  '$scope','$window','$timeout','$rootScope','dataService','DoctorsList','DoctorDetailList','$timeout',
  function ($scope, $window, $timeout, $rootScope, dataService, DoctorsList, DoctorDetailList, $timeout) {	
  
  $scope.searchText = "";
  $scope.stext = "";
  $scope.filterValue = "";
  $scope.showFilterResult = false;

  //Change Header background
  $timeout(function () {
        var myE2 = angular.element(document.querySelector('.myHeadercss'));
        myE2.css({'background-color':'#172636', 'opacity':'1'});
  }, 50);

  angular.element($window).bind("scroll", function() { 
     var myE3 = angular.element(document.querySelector('.myHeadercss'));
     myE3.css({'background-color':'#172636', 'opacity':'1'});
  });
  
  // Match the card Height
  $scope.cardMaxHeight = function(){
    var heights = $(".card-body").map(function() {
        return $(this).height();
        console.log($(this).height());
    }).get(),

    maxHeight = Math.max.apply(null, heights);
    $(".card-body").height(maxHeight);
  }

  // show filter Parameters
     $scope.filterChange = function (s) {
            $scope.filterSelected = s;
            if($scope.filterSelected == 'location')
            {
              $scope.showFilterResult = true; 
              console.log($scope.filterSelected);
            }
            else if($scope.filterSelected == 'speciality'){
              $scope.showFilterResult = true;
              console.log($scope.filterSelected);
            }
        };

  // Reset Filter
      $scope.resetFilter = function(){
          $scope.filterValue = "";
          $scope.showFilterResult = false;
      };

 
 // Search for Doctor
  $scope.searchRecord = function(sdata){
        var doctorsCollection = DoctorsList.result(sdata);
         doctorsCollection.success(function(data){
          $scope.searchDoctorList = data;
          $scope.doctorListCount = data.length;
           $timeout( function(){
            $scope.cardMaxHeight();
        }, 1000 );
      }).error(function(err){
          });
    }

  // Search for individual Doctor record
  $scope.searchDoctorRecord = function(doctorId){
        var doctorDetailCollection = DoctorDetailList.result(doctorId);
         doctorDetailCollection.success(function(data){
          $scope.searchDoctorList = data;
          $timeout( function(){
            $scope.cardMaxHeight();
        }, 1000 );
      }).error(function(err){
          });
    }


  $scope.getSessionText = localStorage.getItem("searchedText");

  var doctorId = dataService.getDoctorId();
  // if(doctorId != '')
  // {
  //     $scope.searchDoctorRecord(doctorId);

  // }else{
  if($scope.getSessionText == "")
  { 
    var stext = dataService.getSearchData();         
    if(stext != ''){
    localStorage.setItem("searchedText",JSON.stringify(stext));
    $scope.searchRecord(stext);
  }
 }else{
    $scope.searchRecord(JSON.parse($scope.getSessionText));
  }
//}
 
  // Header configuration
    $scope.onqueheaderConfig = {
        showSearch: true
    }
  
}]);