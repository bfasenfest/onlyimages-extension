'use strict';

(function (document) {
  walk(document.body);
  deleteTag('label');
  setInterval(function () {
    console.log('walking...');
    walk(document.body);
    deleteTag('label');
  }, 1000);

  function deleteTag(tag) {
    var tags = document.getElementsByTagName(tag), length = tags.length;
    for (var i = 0; i < length; i++) {
      // tags[i].innerHTML = '';
      if(tags[i]) tags[i].remove()
    }
  }

  function walk(node) {

    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
      case 1: // Element
      case 9: // Document
      case 11: // Document fragment

      var attributeList = ['placeholder', 'data-text', 'aftercontent']

      attributeList.forEach(function(attr){
        if(node && node.hasAttribute(attr)) node.setAttribute(attr, '')
      })

        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3:
        // Text node
        handleText(node);
        break;
    }
  }

  function handleText(textNode) {
    textNode.nodeValue = '';
  }
})(document);
