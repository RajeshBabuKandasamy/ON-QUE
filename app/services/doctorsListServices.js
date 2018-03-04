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

OnqueApp.factory('DoctorDetailList', ['API_URL', '$http', function (API_URL, $http) {
    return{
        result:function(docId){
            var name = $http({
                method:'GET',
                url: API_URL + '/api/pub/hospitaldoctor/'+ docId 
            }).success(function(data){
                return data;
            }).error(function(err){
                return err;
            });
            return name;
      
        }
    }
}]);