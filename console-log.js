
document.body.style.color = "red";
let p = document.body.getElementsByTagName('p');
let a = document.body.getElementsByTagName('a');
let ii = document.body.getElementsByTagName('i');
// body.text.style.color = "red";


chrome.storage.sync.get(['fontSize'], function(result) {
  console.log(result.key);
})
