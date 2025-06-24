const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

// Create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentAudio = audio;
  });

  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
