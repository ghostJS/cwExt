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

chrome.contextMenus.onClicked.addListener(function(tab) {
      alert('Hello world');
});
