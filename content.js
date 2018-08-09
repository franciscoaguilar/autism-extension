var settings = new Promise(function(resolve, reject) {
  chrome.storage.sync.get(['fontSize', 'fontColor', 'colorSat', 'colorBrightness'], function(data) {
    let fontSize = (data['fontSize']);
    let fontColor = (data['fontColor']);
    let colorSat = (data['colorSat']);
    let colorBrightness = (data['colorBrightness']);
    resolve([fontSize, fontColor, colorSat, colorBrightness]);
  })
})
console.log(settings);
settings.then((e) => {
  document.body.style.fontSize = e[0] + "px";
  document.body.style.color = e[1];

  var pTags = document.getElementsByTagName('p');
  var imgs = document.getElementsByTagName('img');

  for (let images of imgs) {
    images.style.filter = `saturate(${e[2]}%`;
  }
  for (let images of imgs) {
    images.style.filter = `brightness(${e[3]}%`;
  }
  for (let pStyle of pTags) {
    pStyle.style.color = e[1];
  }
})
