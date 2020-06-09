const progresses = document.querySelectorAll('.progress-done');

progresses.forEach(progress => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
});

setTimeout(() => {
    const progressTexts = document.querySelectorAll('.progress-text');
    progressTexts.forEach(t =>  t.style.color = 'white' );
}, 2000)