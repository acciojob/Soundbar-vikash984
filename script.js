const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

// Store all audio elements to control playback
const audioElements = {};

sounds.forEach(sound => {
  // Create audio element and add it to DOM
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
  audioElements[sound] = audio;

  // Create button for this sound
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
