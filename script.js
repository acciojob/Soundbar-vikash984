//your JS code here. If required.
// List of sound file names (without extension)
const sounds = ['sound1', 'sound2', 'sound3']; // replace with your actual file names

const buttonsContainer = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  
  btn.addEventListener('click', () => {
    stopAllSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    btn.audio = audio; // attach audio to button (optional tracking)
  });

  buttonsContainer.appendChild(btn);
});

// Stop all playing sounds
function stopAllSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Stop button logic
document.querySelector('.stop').addEventListener('click', stopAllSounds);

