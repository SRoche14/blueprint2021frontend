
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection[0];
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {

    chrome.tabs.query({currentWindow: true, active: true},
    function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'hi')
    chrome.tabs.create({url: 'quiz.html'})
    })

  }
}, false);
