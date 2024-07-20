document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-audio');
  const controlButton = document.getElementById('audio-control');
  const volumeControl = document.getElementById('volume-control');

  // Automatically play the audio and update the button text on page load
  audio.play().then(() => {
    controlButton.textContent = 'pause';
  }).catch(error => {
    console.log('Autoplay was prevented:', error);
  });

  controlButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      controlButton.textContent = 'pause';
    } else {
      audio.pause();
      controlButton.textContent = 'play';
    }
  });

  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });
});
