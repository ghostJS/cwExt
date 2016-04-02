'use strict';


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
    alert(selection);
    }
    else {
        alert('You need to select cyberbulling word or phrase');
    }
});
