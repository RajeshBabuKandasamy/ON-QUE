OnqueApp.service('dataService', [
  function(){
    var self = this;
    this.searchData = '';
    this.doctorId = '';

    this.getSearchData = function(){
      return self.searchData;
    };

    this.setSearchData = function(searchData){
      self.searchData = searchData;
    };

    this.getDoctorId = function(){
      return self.doctorId;
    };

    this.setDoctorId = function(doctorId){
      self.doctorId = doctorId;
    };
  }
]);
