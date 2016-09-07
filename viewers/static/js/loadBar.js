onmessage = function(e) {
    var progressBarDiv = window.getElementById("barprogress");
	var lineBar = new ProgressBar.Line(progressBarDiv,{
		easing: 'easeInOut',
		duration: e.data[0],
		color: '#934896',
	});
	lineBar.animate(1);
}