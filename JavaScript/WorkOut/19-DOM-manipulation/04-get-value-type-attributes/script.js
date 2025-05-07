function getAttributes() {
  const getLink = document.querySelector('#someId');

  console.log(getLink.getAttribute('href'));
  console.log(getLink.getAttribute('hreflang'));
  console.log(getLink.getAttribute('target'));
  console.log(getLink.getAttribute('type'));
}
