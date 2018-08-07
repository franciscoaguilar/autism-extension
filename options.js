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
