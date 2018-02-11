/**
 * OnqueApp header directive
 */

OnqueApp.directive('onqueHeader',['$rootScope','$timeout','popupService','DoctorsList', function ($rootScope, $timeout, popupService, DoctorsList){
  
        var linker = function ($scope, element, attrs) {

          $scope.hideSideMenu = true;
          $scope.showSideMenu = false;
          
           $scope.toggleSideMenu = function(isShow) {
              if (isShow) {
                  $scope.hideSideMenu = false;
                  $scope.showSideMenu = true;
              } else {
                  $scope.showSideMenu = false;
                  $timeout(function() {
                      $scope.hideSideMenu = true;
                  }, 500);
              }
          }

          $scope.headerSearchKeyDownEvent = function($event){
            if($scope.headerSearchText == ''){
              $scope.headerSearchSection = false;
            }else{
              $scope.getHeaderSearchresults(); 
            }
         }

         // $rootScope.$on('headerSearchSectionFlag', function (event, data) {
         
         //    $scope.headerSearchSection = data;                     
         
         // });

          $scope.loginPopup = function() {
            //calling the popup service
            popupService.loginPopup();
          }

          $scope.getHeaderSearchresults = function(){
               var doctorsHeaderCollection = DoctorsList.result($scope.headerSearchText);
                doctorsHeaderCollection.success(function(data){
                if(data != ''){
                  $scope.headerSearchSection = true;
                  $scope.doctorHeader = data;
                }else{
                  $scope.headerSearchSection = false;
                } 
                }).error(function(err){
                            });
          }

      }
      return {
          restrict: 'E',
          link: linker,
          scope: {
            onqueheaderConfig: "="
          },
          templateUrl: 'components/header/header.html'
      };

  }]);
  
