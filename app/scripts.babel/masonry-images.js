(function (document) {
  extractImages()
  setInterval(extractImages(), 3000)

  function extractImages(){
      var images = document.getElementsByTagName('img'), length = images.length, imagesClone = []

      for (var i = 0; i < length; i++) {
        imagesClone.push(images[i].cloneNode(true))
      }


    document.body.innerHTML='<div class="grid"></div>';

    for (var i = 0; i < length; i++) {
      // var parent = images[i].parentNode
      var newDiv = document.createElement("div")
      newDiv.setAttribute('class', 'grid-item')
      newDiv.appendChild(imagesClone[i])
      document.body.childNodes[0].appendChild(newDiv)
      //document.body.appendChild(imagesClone[i])
      // parent.removeChild(images[i]);
      // parent.parentNode.removeChild(parent);
      //images[i].style.display = 'none';
  }
  console.log(document.body)
}
})(document);
