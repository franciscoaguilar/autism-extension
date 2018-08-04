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
// //   chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
// // }
// //
// // change font Size -- see notes
// var fontSize = chrome.storage.sync.get('fontSize', function(result) {
//   console.log('Value currently is ' + result.value);
// });
//
// var font = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
//

// var changeSize function () {
//   switch (fontSize) {
//     case "14":
//         document.stylesheet.uiStyles.css
//       break;
//     default:
//     case "16":
//
//       break;
//     case "18":
//
//       break;
//     case "20":
//
//       break;
//   };
// };
