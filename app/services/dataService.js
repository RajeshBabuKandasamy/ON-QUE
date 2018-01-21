OnqueApp.service('dataService', [
  function(){
    var self = this;
    this.searchData = {};

    this.getSearchData = function(){
      return self.searchData;
    };

    this.setSearchData = function(searchData){
      self.searchData = searchData;
    };
  }
]);
