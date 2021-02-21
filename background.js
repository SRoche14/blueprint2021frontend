chrome.commands.onCommand.addListener(function (command) {
    if (command === "save") {
      chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    let data = selection[0];
    chrome.storage.local.set({"sentence": data});
    console.log(data);
});

    }
});
