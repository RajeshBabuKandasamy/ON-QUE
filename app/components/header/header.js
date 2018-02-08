/**
 * OnqueApp header directive
 */

OnqueApp.directive('onqueHeader',['$rootScope','$timeout','popupService', function ($rootScope, $timeout, popupService){
  
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

          $scope.loginPopup = function() {
        
            //calling the popup service
            popupService.loginPopup();
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
  
