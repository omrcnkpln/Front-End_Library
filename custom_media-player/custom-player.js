const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

// media.src = "video/sintel-short.mp4";



$(document).ready(function () {
    $("html").click(function () {
        // alert();

        // media.play();
        vid.play();
    });
});


var vid = document.getElementById("myVideo");
function enableAutoplay() {
    vid.autoplay = true;
    // vid.load();
}

function disableAutoplay() {
    vid.autoplay = false;
    vid.load();
}

function checkAutoplay() {
    alert(vid.autoplay);
}