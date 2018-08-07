chrome.storage.sync.get('fontSizeSetting', function(obj){
  console.log(obj);
})


console.log('i am a banana');
//
// // function() {
//   chrome.storage.sync.set('fontColor', JSON.stringify(fontColor));
// }
//

// catherine
// change font Size -- see notes

var fontSize = chrome.storage.sync.get('fontSize').addEventListener("change", function(useFontSize));




function useFontSize(fontSize) {
  switch (fontSize) {
    case "14":
      var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "19px;");
      console.log('ran 14');
      break;
    default:
    console.log('i am running');
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
// fontSize.addEventListener("change");
//value is undefined - running too soon. attempt to the function after event listener.

// var changeFont



// var changeSize = fontSize; {
//   switch (fontSize) {
//     case "14":
//       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
//       changeFont.removeAttribute("font-size", "*");
//       changeFont.setAttribute("font-size", "19px;");
//       console.log('ran 14');
//       break;
//     default:
//     console.log('i am running');
//     case "16":
//       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
//       changeFont.removeAttribute("font-size", "*");
//       changeFont.setAttribute("font-size", "22px;");
//       break;
//     case "18":
//       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
//       changeFont.removeAttribute("font-size", "*");
//       changeFont.setAttribute("font-size", "24px;");
//       break;
//     case "20":
//       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
//       changeFont.removeAttribute("font-size", "*");
//       changeFont.setAttribute("font-size", "26px;");
//       break;
//   };
// }
