
let fontSize = document.getElementbyId('fontSize');
let fontColor = document.getElementbyId('fontColor');
let changeColors = document.getElementbyId('changeColors');
let saveButton = document.getElementbyId('saveButton');

saveButton.addEventListener('click', function(e=> {
chrome.storage.sync.set('fontSize', JSON.stringify(fontSize));
chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
chrome.storage.sync.set('changeColors', JSON.stringify(changeColors));
}))

function() {
  chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
}
