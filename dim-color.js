// console.log('dim-color');
// var imgs = document.getElementsByTagName('img');
//
// for (imageElt of imgs )
// {
// imageElt.style.filter = "saturation(85%)";
// }
// console.log('dim');

let saturation = document.getElementsByClassName('saturation');
saturation.addEventListener('click', e=>{
  var imgs = document.getElementsByTagName('img');

  for (imageElt of imgs )
  {
  imageElt.style.filter = "brightness(85%)";
  }
  console.log('dim');
})
