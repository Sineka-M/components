document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var volumeControl = document.getElementById("volumeControl");
    var progressBar = document.getElementById("progressBar");
  
    playPauseBtn.addEventListener("click", function() {
      if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = "Pause";
      } else {
        video.pause();
        playPauseBtn.innerHTML = "Play";
      }
    });
  
    volumeControl.addEventListener("input", function() {
      video.volume = volumeControl.value;
    });
  
    video.addEventListener("timeupdate", function() {
      var progress = (video.currentTime / video.duration) * 100;
      progressBar.value = progress;
    });
  });
  