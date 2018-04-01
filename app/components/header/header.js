/**
 * OnqueApp header directive
 */

OnqueApp.directive('onqueHeader',['$rootScope','$timeout','popupService','DoctorsList','$state','dataService','ngDialog', function ($rootScope, $timeout, popupService, DoctorsList, $state, dataService, ngDialog){
  
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
          
          $scope.navigateToHome = function(){
            $state.go('home');
          }

          $scope.headerSearchDoctor = function(){
            //dataService.setSearchData($scope.headerSearchText);
            if($scope.headerSearchText != ''){
              localStorage.setItem("searchedText",JSON.stringify($scope.headerSearchText));
              localStorage.setItem("searchedDoctorId", '');
              if($state.current.name = "appointment"){
                    $state.go('appointment', {}, { reload: true });
              }else
              {
                $state.go('appointment');
              }
            }
        }

        $scope.headerSearchParticularDoctor = function(docId){
          //dataService.setDoctorId(docId);
          if(docId != ''){
            localStorage.setItem("searchedDoctorId",JSON.stringify(docId));
            localStorage.setItem("searchedText",'');
            if($state.current.name = "appointment"){
                $state.go('appointment', {}, { reload: true });
            }else
            {
            $state.go('appointment');
          }
        }
      }

          $scope.headerSearchKeyDownEvent = function($event){
            if($scope.headerSearchText == ''){
              $scope.headerSearchSection = false;
            }else{
              $scope.getHeaderSearchresults(); 
            }
         }

         $rootScope.$on('headerSearchSectionFlag', function (event, data) {
            $scope.headerSearchSection = data; 
         });


          // Login Popup
          $scope.loginPopup = function() {
            //calling the popup service
            popupService.loginPopup();
          }
          
          //Signin Popup
          $scope.signinPopup = function() {
            //calling the popup service
            popupService.signinPopup();
          }

          $scope.tryFreePopup = function(){
            //calling the popup service
            popupService.tryFreePopup();
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
          restrict: 'AE',
          link: linker,
          scope: {
            onqueheaderConfig: "=",
            headerSearchText: "=headerSearchText"
          },
          templateUrl: 'components/header/header.html'
      };

  }]);
  
