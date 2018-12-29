OnqueApp.controller('appointmentController', [
  '$scope','$window','$timeout','$rootScope','dataService','DoctorsList','DoctorDetailList','$timeout','popupService',
  function ($scope, $window, $timeout, $rootScope, dataService, DoctorsList, DoctorDetailList, $timeout, popupService) {	
  
  $scope.searchText = "";
  $scope.filterValue = "";
  $scope.showFilterResult = false;
  $scope.opened = [];

     
  //Change Header background
  $timeout(function () {
        var myE2 = angular.element(document.querySelector('.myHeadercss'));
        if($window.innerWidth <= 767){
          myE2.css({'background-color':'#172636', 'opacity':'1','min-height':'120px'});
        }else{
          myE2.css({'background-color':'#172636', 'opacity':'1'});
        }
  }, 50);
  
  angular.element($window).bind("scroll", function() { 
     var myE3 = angular.element(document.querySelector('.myHeadercss'));
     myE3.css({'background-color':'#172636', 'opacity':'1'});
  });

  
  $scope.dateClick = function(e){
    e.stopPropagation();
  }

  // Datepicker

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.datePopup = function ($event, $index) {
    if($scope.opened[$index] == true)
    {
      $scope.opened[$index] = false;
    }
    else{
    /*$event.preventDefault();*/
    $event.stopPropagation();
    $scope.opened[$index] = true;
    }
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  
  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }
  // Match the card Height
  $scope.cardMaxHeight = function(){
    var heights = $(".card-body").map(function() {
        return $(this).height();
        console.log($(this).height());
    }).get(),

    maxHeight = Math.max.apply(null, heights);
    $(".card-body").height(maxHeight);
  }

   // Book Appointment Popup
          $scope.bookAppointmentPopup = function($event) {
            $event.stopPropagation();
            //calling the popup service
            popupService.bookAppointmentPopup();
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
          $scope.doctorDetails = data;
          $scope.doctorListCount = 1;
          $timeout( function(){
            $scope.cardMaxHeight();
        }, 1000 );
      }).error(function(err){
          });
    }
  

    $scope.getSessionText = localStorage.getItem("searchedText");
    $scope.getSessionDoctorId = localStorage.getItem("searchedDoctorId");
    
   if($scope.getSessionDoctorId != '' && $scope.getSessionText == ''){

      $scope.searchDoctorRecord(JSON.parse($scope.getSessionDoctorId));
   }
   if($scope.getSessionDoctorId == '' && $scope.getSessionText != ''){

      $scope.searchRecord(JSON.parse($scope.getSessionText));
   }
 
  
  // Header configuration
    $scope.onqueheaderConfig = {
        showSearch: true
    }
}]);