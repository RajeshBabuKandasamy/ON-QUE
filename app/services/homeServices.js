// Display name service
OnqueApp.factory('DoctorsList', ['API_URL', '$http', function (API_URL, $http) {
    return{
        result:function(dName){
            var name = $http({
                method:'GET',
                url: API_URL + '/api/pub/hospitaldoctor/search?search=' + dName
            }).success(function(data){
                return data;
            }).error(function(err){
                return err;
            });
            return name;
      
        }
    }
}]);

// Login service
/*OnqueApp.factory('LoginService', ['API_URL', '$http', function(API_URL, $http){
  return{
    auth:function(credentials){
      var authUser = $http({
          method:'POST',
          dataType: 'json',
          url: API_URL + '/login',
          data:credentials
        }).success(function(data){
          return data;
        }).error(function(err){
          return err;
        });
      console.log("sssss : " + JSON.stringify(authUser));
      return authUser;
      
    }
  }
}]);*/