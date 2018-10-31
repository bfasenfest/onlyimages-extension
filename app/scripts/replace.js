'use strict';

(function (document) {
  walk(document.body);
  deleteP();
  setInterval(function () {
    console.log('walking...');
    walk(document.body);
    deleteP();
  }, 1000);

  function deleteP() {
    var paras = document.getElementsByTagName('p'),
        length = paras.length;

    for (var i = 0; i < length; i++) {
      paras[i].innerHTML = '';
    }
  }

  function walk(node) {

    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
      case 1: // Element
      case 9: // Document
      case 11:
        // Document fragment
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