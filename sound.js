//PLAYING AUDIO

var audio = document.getElementById("audio");

$(".plays").click(function() {
  if (!audio.paused) {
    audio.pause();
    $("#play").show();
    $("#pause").hide();
  }
  else {
    audio.play();
    $("#play").hide();
    $("#pause").show();
  }
});

var source = document.getElementById("audio").getElementsByTagName("source")[0].src;
    sourceLength = source.length;
    songName = source.substr(57);
$("h3").text(songName);

if (audio.duration === audio.currentTime) {
  audio.currentTime = 0;
  $("#play").toggle();
  $("#pause").toggle();
  audio.pause;
}

audio.addEventListener("timeupdate", function() {
  var currentTime = audio.currentTime,
      duration = audio.duration,
      currentTimeMs = audio.currentTime * 1000;
  $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
});

//OUTPUTS THE TIMEE

audio.addEventListener("timeupdate", function() {
  var timeleft = document.querySelector("#timeleft"),
      duration = parseInt(audio.duration),
      currentTime = parseInt(audio.currentTime),
      timeLeft = duration - currentTime,
      s, m;

  s = timeLeft % 60;
  m = Math.floor( timeLeft / 60 ) % 60;

  _s = duration % 60;
  _m = Math.floor(duration/60)%60;

  s = s < 10 ? "0"+s : s;
  m = m < 10 ? "0"+m : m;

  $('#timeleft').text("-"+m+":"+s);
  $("#currenttime").text(_m+":"+_s);
});

$("#next").click(function() {
  if (audio.paused) {
    audio.currentTime = audio.duration;
  } else if (!audio.paused) {
    audio.currentTime = audio.duration;
    $("#play").show();
    $("#pause").hide();
  }
});

$("#previous").click(function() {
  if (audio.paused) {
    audio.currentTime = 0;
  } else if (!audio.paused) {
    audio.currentTime = 0;
    audio.pause();
    $("#play").show();
    $("#pause").hide();
  }
});

$(".vol").click(function() {
  if (audio.muted) {
    audio.muted = false;
    $(".fa-volume-off").hide();
    $(".fa-volume-up").show()
  } else {
    audio.muted = true;
    $(".fa-volume-off").show();
    $(".fa-volume-up").hide()
  }
})

$("#playlist").click(function() {
  $(".playlist").slideToggle("slow");
});
