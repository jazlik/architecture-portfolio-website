const jumbotronOpened = sessionStorage.getItem('jumbotronOpened');
if (jumbotronOpened) {
    expandProgressBars()
} else {
    setTimeout(expandProgressBars, 4000);
}

function expandProgressBars() {
    const progresses = document.querySelectorAll('.progress-done');

    progresses.forEach(progress => {
        const width = +progress.getAttribute('data-done');
        const duration = width/100 * 5;
        progress.style.transition = `all ${duration}s ease 0.3s`;
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;

      setTimeout(() => {
        const progressText = progress.parentNode.querySelectorAll('.progress-text')[0];
        progressText.style.color = 'white';
      }, (duration < 0.5 ? 0 : duration - 0.5) * 1000)
    });
}
