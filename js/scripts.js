// Check in the session storage whether jumbotron has already been opened
// If not, display the welcoming jumbotron
function checkForJumbotron() {
  const jumbotronOpened = sessionStorage.getItem('jumbotronOpened');
  if (!jumbotronOpened) {
    createJumbotron()
  }
}

// Create equivalent of following:
// <div id="jumbotron" class="jumbotron">
//   <div class="desc">
//     <p>Hello you found me!</p>
//     <p>I'm Jakub, a coding architect.</p>
//   </div>
// </div>
// Append it to body and then remove after 5 seconds
function createJumbotron() {
  const topParagraph = document.createElement('p')
  topParagraph.innerText = 'Hello you found me!';

  const bottomParagraph = document.createElement('p')
  bottomParagraph.innerText = 'I\'m Jakub, a coding architect.';

  const textWrapper = document.createElement('div');
  textWrapper.append(topParagraph, bottomParagraph);

  const jumbotron = document.createElement('div');
  jumbotron.className = 'jumbotron';
  jumbotron.id = 'jumbotron';
  jumbotron.appendChild(textWrapper);

  document.body.appendChild(jumbotron);

  // Set jumbotronOpened property in session storage to true so that next time jumbotron is not displayed
  setTimeout(() => {
    jumbotron.remove();
    sessionStorage.setItem('jumbotronOpened', 'true')
  }, 4000);
}
