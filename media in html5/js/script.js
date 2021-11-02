let video = document.getElementsByTagName("video")[0],
  button = document.getElementById("ppButton"),
  controls = document.getElementById("controls"),
  volume = document.getElementById("volume"),
  timer = document.getElementById("timer"),
  voButton = document.getElementById("voButton"),
  timeduration = document.getElementById("timeduration"),
  btn10fut = document.getElementById("btn10fut"),
  btn10bac = document.getElementById("btn10bac"),
  fullscreen = document.getElementById("fullscreen"),
  positionBar = document.getElementById("positionBar");

btn10bac.addEventListener("click", (e) => {
  video.currentTime -= 10;
});
btn10fut.addEventListener(
  "click",
  (e) => {
    video.currentTime += 10;
  },
  false
);

timeduration.addEventListener(
  "input",
  (e) => {
    timeduration = video.currentTime;
  },
  false
);
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
    voButton.value = "Voice off";
  } else {
    video.volume = 0.5;
    voButton.value = "Voice on";
  }
});

fullscreen.addEventListener("click", (e) => {
  if (video.height == 360) {
    video.width = document.documentElement.clientWidth - 10;
    video.height = document.documentElement.clientHeight - 75;
    fullscreen.value = "Fullscreen on ";
    document.body.style.overflow = "hidden";
  } else {
    video.width = 480;
    video.height = 360;
    fullscreen.value = "Fullscreen off ";
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

    positionBar.style.width = (video.currentTime / video.duration) * 100 + "%";
  } else {
    fulltime = h + ":" + m + ":" + s;

    positionBar.style.width = (video.currentTime / video.duration) * 100 + "%";
  }

  return fulltime;
}
