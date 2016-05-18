console.log("loadBar.js");
onmessage = function(e) {
    var progressBarDiv = window.getElementById("barprogress");
	var lineBar = new ProgressBar.Line(progressBarDiv,{
		easing: 'easeInOut',
		duration: e.data[0],
		color: '#FF6600',
	});
	lineBar.animate(1);
}