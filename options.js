
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

// change font Size -- see notes
document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a')

var fontSize = function() {
  chrome.storage.sync.set('fontSize', JSON.stringify(fontColor));
}



var changeSize function () {
  switch (fontSize) {
    case "green":

      break;
    default:
    case "blue":

      break;
    case "grey":

      break;
  }
}
