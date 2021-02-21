//window.bears = {}
//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//  bears[request.url] = request.count
//})

//chrome.browserAction.onClicked.addListener(function (tab) {
//  chrome.tabs.create({url: 'quiz.html'})
//})
chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    chrome.tabs.insertCSS(null, {file: 'style.css'});
    chrome.tabs.executeScript(null, {file: 'foreground.js'}, () => console.log('i injected'));
  });
});

//chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//  if(request.message === "Data Set.") {
  //  chrome.storage.local.get("sentence", value => {
  //    console.log(value)
  //  });
//  }
//});
