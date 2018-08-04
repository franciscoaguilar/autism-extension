let saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function(e) {
  e.preventDefault();
  chrome.storage.clear;
  let fontSize = document.getElementById('fontSizeSelection').value;
  let fontColor = document.getElementById('fontColor').value;
  let changeImage = document.getElementById('changeImage').value;
  chrome.storage.sync.set({
    'fontSizeSetting': fontSize
  }, function() {
    chrome.storage.sync.get('fontSizeSetting', function(obj) {
      console.log(obj);
    })
  });;

  chrome.storage.sync.set({
    'fontColorSetting': fontColor
  }, function() {
    chrome.storage.sync.get('fontColorSetting', function(obj) {
      console.log(obj);
    })
  });


  chrome.storage.sync.set({
    'changeImageSetting': changeImage
  }, function() {
    chrome.storage.sync.get('changeImageSetting', function(obj) {
      console.log(obj);
    })
  });

});

console.log('i am a banana');
//
// // function() {
//   chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
// }
//
// change font Size -- see notes
var fontSize = chrome.storage.sync.get('fontSize', function(result) {
  console.log('Value currently is ' + result.value);
});

// var



var changeSize = fontSize; {
  switch (fontSize) {
    case "14":
    var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "19px;");
      break;
    default:
    case "16":
    var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "22px;");
      break;
    case "18":
    var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "24px;");
      break;
    case "20":
    var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "26px;");
      break;
  };
}
