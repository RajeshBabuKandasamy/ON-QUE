// Signup service
OnqueApp.factory('userSignup', ['API_URL', '$http', function (API_URL, $http) {
    return{
        result:function(userDetails){
            var name = $http({
                method:'POST',
                data: userDetails,
                url: API_URL + '/api/pub/patient/create/user' 
            }).success(function(data){
                return data;
            }).error(function(err){
                return err;
            });
            return name;
      
        }
    }
}]);

OnqueApp.factory('userLogin', ['API_URL', '$http', function (API_URL, $http) {
    return{
        result:function(userDetails){
            var name = $http({
                method:'POST',
                data: userDetails,
                url: API_URL + '/auth' 
            }).success(function(data){
                return data;
            }).error(function(err){
                return err;
            });
            return name;
      
        }
    }
}]);
