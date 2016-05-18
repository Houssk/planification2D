$(document).ready(function () {
    var progressBarDiv = document.getElementById("barprogress");
    var time = parseInt(sessionStorage.getItem("dataImage"))/71;
    var lineBar = new ProgressBar.Line(progressBarDiv,{
        easing: 'easeInOut',
        duration: time,
        color: '#FF6600',
    });

    lineBar.animate(1);
});