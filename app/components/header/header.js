/**
 * OnqueApp header directive
 */

OnqueApp.directive('onqueHeader',['$rootScope','$timeout', function ($rootScope, $timeout){
  
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
  
