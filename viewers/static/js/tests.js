$(document).ready(function () {
	$('input[type="button"]').click(function(){
		$('input[type="button"].red').removeClass('red')
		$(this).addClass('red');
		console.log("toto");
	});
})
