var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};

$(document).ready(function () {
	 var trait = document.getElementById("trait");
        trait.addEventListener('click', 
            function() {
                function drawtrait(){
                    console.log("drawtrait");
                    var traitdessin = new Kinetic.Line({
                        points: [0, 0, 100, 100 ],
                        stroke: 'red',
                    });
                    console.log("traitdessin",traitdessin);
                    drawLayer = app.getDrawLayer();
                    drawLayer.listening( true );
                    drawLayer.hitGraphEnabled( true );
                    drawLayer.add( traitdessin );
                    drawLayer.draw();
                };
                drawtrait()
        }, false);
	
});