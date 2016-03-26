angular.module('popup', [])
  .factory('content', ['$http', function($http){

      var _postContent = function (callback) {

        callback = callback||function(){};
        $http.post('http://cyberwatch1.eu-gb.mybluemix.net/webresources/generic/', {
           headers: {'Site-Content': 'siteContent'}
        })
          .success (function(data){
            callback(data);
          });

      };

      return {
        postContent: _postContent

      };

}]);
