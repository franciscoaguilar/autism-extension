// chrome.storage.sync.get('fontSizeSetting', function(obj){
//   console.log(obj);
// })

var settings = new Promise(function(resolve, reject) {
  chrome.storage.sync.get(['fontSize'], function(data) {
    let fontSize = (data['fontSize']);
    resolve([fontSize]);
  })
  if (resolve) {
    console.log("resolved");
  }
  console.log('i ran');
})
console.log(settings);

settings.then(function resolve(e) {
  switch (settings) {
    case "19":
      // var changeFont = document.querySelectorAll('p', 'li', 'ul', 'a');
      document.body.style.fontSize = e[0] + "px";
      console.log('ran 19');
      break;
    default:
    case "22":
      document.querySelectorAll('p', 'li', 'ul') = e[0] + "px";
      break;
      console.log();
    case "24":
      var changeFont = document.querySelectorAll('p', 'li', 'ul');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "24px;");
      break;
    case "26":
      var changeFont = document.querySelectorAll('p', 'li', 'ul');
      changeFont.removeAttribute("font-size", "*");
      changeFont.setAttribute("font-size", "26px;");
      break;
  };
})









// settings.then((e) => {
//   // document.body.style.fontSize = e[0] + "px";
//   console.log('then begins');
//   function useFontSize(settings) {
//     switch (settings) {
//       case "19":
//         var changeFont = document.querySelectorAll('p', 'li', 'ul', 'a');
//         changeFont.document.body.style.fontSize = e[0] + "px";;
//         console.log('ran 19');
//         break;
//       default:
//       case "22":
//         var changeFont = document.querySelectorAll('p', 'li', 'ul','a');
//         changeFont.removeAttribute("font-size", "*");
//         changeFont.setAttribute("font-size", "22px;");
//         break;
//       case "24":
//         var changeFont = document.querySelectorAll('p', 'li', 'ul');
//         changeFont.removeAttribute("font-size", "*");
//         changeFont.setAttribute("font-size", "24px;");
//         break;
//       case "26":
//         var changeFont = document.querySelectorAll('p', 'li', 'ul');
//         changeFont.removeAttribute("font-size", "*");
//         changeFont.setAttribute("font-size", "26px;");
//         break;
//     };
//   };

  // var imgs = document.getElementsByTagName('img');
  // for (let images of imgs) {
  //   images.style.filter = `saturate(${e[2]}%)`;
  // }
//   console.log('i ran so far away');
// })

// console.log('i am a banana');
//

//
//
// // var changeSize = fontSize; {
// //   switch (fontSize) {
// //     case "14":
// //       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
// //       changeFont.removeAttribute("font-size", "*");
// //       changeFont.setAttribute("font-size", "19px;");
// //       console.log('ran 14');
// //       break;
// //     default:
// //     console.log('i am running');
// //     case "16":
// //       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
// //       changeFont.removeAttribute("font-size", "*");
// //       changeFont.setAttribute("font-size", "22px;");
// //       break;
// //     case "18":
// //       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
// //       changeFont.removeAttribute("font-size", "*");
// //       changeFont.setAttribute("font-size", "24px;");
// //       break;
// //     case "20":
// //       var changeFont = document.querySelectorAll('p', 'li', 'ul', 'button', 'table', 'caption', 'span', 'blockquote',  'figure', 'figcaption', 'cite', 'pre', 'ul', 'ol', 'a');
// //       changeFont.removeAttribute("font-size", "*");
// //       changeFont.setAttribute("font-size", "26px;");
// //       break;
// //   };
// // }
