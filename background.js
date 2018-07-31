
/*function connectToTab(tabs) {
  if (tabs.length > 0) {
    var examplePort = browser.tabs.connect(
      tabs[0].id,
      {name: "tabs-connect-example"}
    );
    examplePort.postMessage({greeting: "Hi from background script"});
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

chrome.webNavigation.onCompleted(function() {
  var gettingActive = browser.tabs.query({
    currentWindow: true, active: true
  });
  gettingActive.then(connectToTab, onError);

});*/
