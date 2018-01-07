OnqueApp.run(['$rootScope', 
function ($rootScope) {   

$rootScope.$on('headercssDesign', function (event, data) {
     $rootScope.searchFlag = data.showSearch;
     $rootScope.$apply();
     var myEl = angular.element(document.querySelector('.myHeadercss'));
     myEl.css({'background-color': data.color, 'opacity':data.opacity}); 
});
}]);
