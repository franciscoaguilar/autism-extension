
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
// font color change code//
// // document.getElementbyId(fontColor).style.property= ;
// console.log("I am the queen of france");
var fontColor = function() {
  chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
}
switch (new fontColor().getfontColor()) {
  case "green":
      fontColor= "#121900"
      console.log("I am the Queenof France");
    break;
  case "blue":
      fontColor = str.fontColor("#000128"),
          console.log("I am the Queenof France");
    break;
  case "grey":
      fontColor= "#080808"
    break;
}
