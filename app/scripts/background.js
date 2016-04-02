//'use strict';

var backgroundModule = angular.module('backgroundModule', []);

backgroundModule.run(['$http', function($http) {

chrome.contextMenus.create({
    title: "Block it with CyberWatch",
    id:'selectFromContextMenu',
    contexts: ["all"]
  }, function() {
      var error = chrome.runtime.lastError;
      if(error) {
        console.log(error);
      }
      else {
        console.log('Context menu created');
      }
  });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        var selection = info.selectionText;

        if(undefined != selection) {
             
             function Site(siteContent) { 
                                           var that= {}; 
                                           that.siteContent= siteContent; return that; 
                                       };
                                       var site = Site(); 
                                       site.siteContent = selection; 
           
               
                $http({
                   url: 'http://cyberwatch.eu-gb.mybluemix.net/webresources/generic/addUserWords', 
                   dataType: 'json',
                   method: 'POST',  
                   data: site,
                   headers: {'Content-Type': 'application/json'}
                })
                  .success (function(data){       
                     // alert(site.siteContent);
                              
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
                                       };
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

                      
                    
                  })
                  .error (function(errMsg){
                          alert(errMsg);
                  });
            
            
           
                
           
            //alert(selection);

        }
        else {
            alert('You need to select cyberbullying word or phrase');
        }
    });

}]);
