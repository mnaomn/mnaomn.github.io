document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('blur-overlay');
  const content = document.getElementById('content');
  const audio = document.getElementById('background-music');
  const playPauseButton = document.getElementById('play-pause');
  const volumeSlider = document.getElementById('volume-slider');

  let isPlaying = false;

  audio.volume = 0.5;  

  overlay.addEventListener('click', function() {
      overlay.classList.add('hidden');
      content.classList.remove('hidden');

      if (!isPlaying) {
          audio.play();
          playPauseButton.textContent = 'Pause';
          isPlaying = true;
      } else {
          audio.pause();
          playPauseButton.textContent = 'Play';
          isPlaying = false;
      }
  });

  playPauseButton.addEventListener('click', function() {
      if (isPlaying) {
          audio.pause();
          playPauseButton.textContent = 'Play';
      } else {
          audio.play();
          playPauseButton.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
  });

  volumeSlider.addEventListener('input', function() {
      audio.volume = volumeSlider.value / 100;
  });

  const quotes = [
    "how far will you go to save a friend?\nVOID",
    "only the cold will keep me company now.\nSIGN",
    "the truth of that day will be hard to accept. when you see it.. you have to stay strong. and if you can.. please..forgive me.\nBASIL",
    "the universe is full of questions that you will never answer. yet... there are also ones that only you can answer. when the truth is revealed, what will you do?\nABSENT",
    "let's make some new memories together, okay?\nBASIL",
    "not much to do around here, is there?\nMEWO",
    "sleep, little one. you are safe with me.\nBIG YELLOW CAT",
    "here is not home is, but where is home?\nSTRANGER",
    "watching the stars at night makes everything else in the world seem so small.\nPO",
    "you should smile more! i've always loved your smile.\nMARI",
    "my only daughter..is gone. and you..you are my only son. i can't lose you as well.\nMOM",
    "if you were lost, where would you go? somewhere familiar, somewhere safe, full of good memories. if only there were such a place.\nSCRIBBLE",
    "your memories are not free. to gain a memory, another must be shrouded. and yet.. all memories will eventually fade.\nBLANK",
    "steady your heartbeat...don't be afraid. it's not as scary as you think.\nMARI",
    "you can't leave without your VIOLIN.",
    "a long time has passed since you've ventured this far. deep layers of his world open up as the DREAMER grows more desperate. even imagination is limited.\nBRANCH CORAL",
    "SUNNY...i love you.\nSOMETHING",
    "it is a blessing to exist.\nMOUNTAIN",
    "a black light bulb looms overhead. you don't want to touch it.",
    "WHITE SPACE is an emptiness. a home without warmth. a place to survive, but not to live.\nBRANCH CORAL",
    "it's like i still miss him..but..it's kind of hard to remember why.\nKEL",
    "i no longer believe in true love! i'll never love anyone else ever again!\nSWEETHEART",
    "a frozen heart may melt, but a broken one remains forever in pieces.\nSIGN",
    "you think you're the good guy, dont you, KEL? and i'm the big, bad bully here to terrorize poor defenseless BASIL.\nAUBREY",
    "the universe is full of questions that you will never answer. yet... there are also ones that only you can answer. when the truth is revealed, what will you do?\nABSENT",
    "my heart is frozen. i am pure, like ice. i feel nothing. i will never feel anything again.\nSPACE EX-HUSBAND"
  ];

  const quoteDisplay = document.getElementById('quote-display');
  const generateQuoteButton = document.getElementById('generate-quote');

  generateQuoteButton.addEventListener('click', function() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = quotes[randomIndex];
  });
});
