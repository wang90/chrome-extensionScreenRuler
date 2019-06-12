chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.ib, {
        file: "./dist/app.js",
        runAt: "document_start",
    });
});