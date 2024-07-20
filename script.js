// script.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const controlButton = document.getElementById('audio-control');
    const volumeControl = document.getElementById('volume-control');
  
    // Automatically start playing the audio when the page loads
    audio.play().catch(error => {
      // If autoplay is blocked by the browser, show the play button
      controlButton.textContent = 'play';
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
  