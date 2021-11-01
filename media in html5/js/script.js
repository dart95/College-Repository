let video = document.getElementsByTagName("video")[0],
  button = document.getElementById("ppButton"),
  controls = document.getElementById("controls"),
  volume = document.getElementById("volume"),
  timer = document.getElementById("timer"),
  voButton = document.getElementById("voButton");

video.addEventListener(
  "canplaythrough",
  function () {
    controls.classList.remove("hidden");

    video.volume = volume.value;
  },
  false
);

button.addEventListener(
  "click",
  function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  },
  false
);

voButton.addEventListener("click", (e) => {
  if (video.volume > 0) {
    video.volume = 0;
  } else {
    video.volume = 1;
  }
});

video.addEventListener(
  "play",
  function () {
    button.value = "Pause";
  },
  false
);

video.addEventListener(
  "pause",
  function () {
    button.value = "Play";
  },
  false
);

volume.addEventListener(
  "input",
  function () {
    video.volume = volume.value;
  },
  false
);

video.addEventListener(
  "ended",
  function () {
    video.currentTime = 0;
  },
  false
);

video.addEventListener(
  "timeupdate",
  function () {
    timer.innerHTML = secondsToTime(video.currentTime);
  },
  false
);

function secondsToTime(time) {
  let fulltime = "",
    h = Math.floor(time / 3600),
    dm = time % 3600,
    m = Math.floor(dm / 60),
    ds = dm % 60,
    s = Math.ceil(ds);

  if (s === 60) {
    s = 0;

    m += 1;
  }

  if (s < 10) {
    s = "0" + s;
  }

  if (m === 60) {
    m = 0;

    h += 1;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (h === 0) {
    fulltime = m + ":" + s;
    let positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration) * 100 + "%";

    displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = Math.round(video.currentTime * 100) / 100;
  } else {
    fulltime = h + ":" + m + ":" + s;

    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration) * 100 + "%";
  }

  return fulltime;
}
