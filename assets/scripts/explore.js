// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  // fill dropdown with voice options
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector("button");
  const faceImg = document.querySelector("img");
  button.addEventListener('click', (event) => {
    let text = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    // set voice to the selected option
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    // change to open mouth and speak message
    if (utterance.text != '') {
      faceImg.src = "assets/images/smiling-open.png";
      synth.speak(utterance);
    }

    // set face to smiling after message is done
    utterance.addEventListener('end', (event) => {
      faceImg.src = "assets/images/smiling.png";
    });
  });
}