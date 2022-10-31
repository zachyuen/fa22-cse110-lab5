// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector("#horn-select");
  const hornImg = document.querySelector("img");
  const hornAudio = document.querySelector("audio");
  hornSelect.addEventListener('change', (event) => {
    if (hornSelect.value == "air-horn") {
      hornImg.src = "assets/images/air-horn.svg"
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (hornSelect.value == "car-horn") {
      hornImg.src = "assets/images/car-horn.svg"
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (hornSelect.value == "party-horn") {
      hornImg.src = "assets/images/party-horn.svg"
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
  });

  const volume = document.getElementById("volume");
  const volumeImg = document.querySelector("div > img");
  volume.addEventListener('change', (event) => {
    if (volume.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volume.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volume.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    hornAudio.volume = volume.value / 100;
  });

  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  button.addEventListener('click', (event) => {
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });
}