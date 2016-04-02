angular.module('popup', [])
  .factory('content', ['$http', function($http){
       
    var webContent = [];
    chrome.tabs.executeScript( null, {
        code: 'document.body.innerHTML;'
    }, 
    function(results){
            webContent = results[0];
           accessArray();
            
        }
    );
    function accessArray(callback){
    
    
    function Site(siteContent) { 
        var that= {}; 
        that.siteContent= siteContent; return that; 
    }
    var site = Site(); 
    site.siteContent = webContent; 

        callback = callback||function(){};
        $http({
           url: 'http://cyberwatch.eu-gb.mybluemix.net/webresources/generic/analyzeSite', 
           dataType: 'json',
           method: 'POST',  
           data: site,
           headers: {'Content-Type': 'application/json'}
        })
          .success (function(data){       
            var pageContent = JSON.stringify(data.siteContent);
            
            chrome.tabs.executeScript( null, {
                code: 'document.body.innerHTML = ' + pageContent + ';'

            })
          })
          .error (function(errMsg){
                  alert(errMsg);
          });
      };

    
}]);
