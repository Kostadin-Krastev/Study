/*
8. Write a JavaScript program to remove items from a drop-down list.
 */
function removecolor() {
  const formElement = document.getElementById('colorSelect');
  //   Removing first element
  formElement.children[0].remove();
}
