const playButton = document.getElementById('playButton');
const loveSong = document.getElementById('loveSong');
let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    loveSong.pause();
    playButton.textContent = '💗 Play Our Song';
  } else {
    loveSong.play();
    playButton.textContent = '⏸️ Pause';
  }
  isPlaying = !isPlaying;
});
