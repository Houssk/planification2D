// namespaces
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};

var onPeutTraceTrapeze=false;
var tailleDépassementDroite = 100;
/**
 * ROI factory.
 * @constructor
 */
dwv.tool.RoiFactory = function ()
{
    /**
     * Get the number of points needed to build the shape.
     * @return {Number} The number of points.
     */
    this.getNPoints = function () { return 4; };
    /**
     * Get the timeout between point storage.
     * @return {Number} The timeout in milliseconds.
     */
    this.getTimeout = function () { return 200; };
};

/**
 * Create a roi shape to be displayed.
 * @param {Array} points The points from which to extract the line.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.RoiFactory.prototype.create = function (points, style /*, image*/)
{
    var nbMaxDraw
    if (document.getElementById("RadioOuiHanche").checked) {
        nbMaxDraw=1;
    } else {
        nbMaxDraw=2;
    }
    //console.log("RoiFactory");
    //console.log("RoiFactory nb points "+points);
    if (sessionStorage.getItem("premierPointTrapeze")===null) {
        sessionStorage.setItem("premierPointTrapeze", points[0]);
        var tempNbTrapeze = sessionStorage.getItem("nbTrapeze");
        tempNbTrapeze++;
        sessionStorage.setItem("nbTrapeze", tempNbTrapeze);
        onPeutTraceTrapeze=true;
    } else {
        //console.log("points[0] "+points[0]);
        //console.log("sessionStorage.getItem(premierPointTrapeze) "+sessionStorage.getItem("premierPointTrapeze"));
        if (sessionStorage.getItem("premierPointTrapeze")!=points[0]) {
            sessionStorage.setItem("premierPointTrapeze", points[0]);
            //console.log("sessionStorage.getItem(nbTrapeze) "+ sessionStorage.getItem("nbTrapeze"));
            if (sessionStorage.getItem("nbTrapeze")<nbMaxDraw) {
                var tempNbTrapeze = sessionStorage.getItem("nbTrapeze");
                tempNbTrapeze++;
                sessionStorage.setItem("nbTrapeze", tempNbTrapeze);
                onPeutTraceTrapeze=true;
            } else {
                swal("Veuillez supprimer un trapèze pour en recréer un nouveau","Seul "+nbMaxDraw+" trapèze(s) est/sont autorisé(s)","warning");
                onPeutTraceTrapeze=false;
            }
        }
    }

    if (onPeutTraceTrapeze == true) {

        var tempNbTrapeze = sessionStorage.getItem("nbTrapeze") ;
        if(parseInt(tempNbTrapeze)==1){
            document.getElementById("buttonDeleteTrapeze").style.display = "inline";
        }
        // physical shape
        var roi = new dwv.math.ROI();
        // add input points to the ROI
        roi.addPoints(points);
        // points stored the kineticjs way
        var arr = [];
        var pointsArr = [];
        for( var i = 0; i < roi.getLength(); ++i )
        {
            arr.push( roi.getPoint(i).getX() );
            arr.push( roi.getPoint(i).getY() );
            pointsArr.push({x:roi.getPoint(i).getX(), y:roi.getPoint(i).getY()});
        }
        // draw shape
        var kshape = new Kinetic.Line({
            points: arr,
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            name: "shape",
            id : "trapeze",
            closed: true
        });

        pointsArr.sort(function(a, b) {
            return a.y-b.y;
        });

        console.log("arr",arr);
        console.log("pointsArr",pointsArr);
        var x1 = 0;//Xarr[2] / 2 + Xarr[3] / 2 ;
        var y1 = 0;//Yarr[2] / 2 + Yarr[3] / 2 ;
        var x2 = 0;//Xarr[0] / 2 + Xarr[1] / 2 ;
        var y2 = 0;//Yarr[0] / 2 + Yarr[1] / 2 ;
        if (pointsArr.length==4) {
            console.log("pointsArr[2].x",pointsArr[2].x);
            x1 = pointsArr[2].x / 2 + pointsArr[3].x / 2 ;
            y1 = pointsArr[2].y / 2 + pointsArr[3].y / 2 ;
            x2 = pointsArr[0].x / 2 + pointsArr[1].x / 2 ;
            y2 = pointsArr[0].y / 2 + pointsArr[1].y / 2 ;
        }
        coeffDirect=(y2-y1)/(x2-x1);

        if (document.getElementById("RadioOuiHanche").checked) {
            var trapezeAxePosition=[];
            trapezeAxePosition.push(x1);
            trapezeAxePosition.push(y1);
            trapezeAxePosition.push(x2);
            trapezeAxePosition.push(y2);
            sessionStorage.setItem("trapezePosition", JSON.stringify(trapezeAxePosition));
            sessionStorage.setItem("trapezecoeffDirect", coeffDirect);
        } else {
            //test pour savoir de quel cote est le trapeze sauvegarde
            if(x1>(sessionStorage.getItem("imageLargeur")/2)){
                console.log("je suis au coté trapeze coeff droit");
                var trapezeAxePosition=[];
                trapezeAxePosition.push(x1);
                trapezeAxePosition.push(y1);
                trapezeAxePosition.push(x2);
                trapezeAxePosition.push(y2);
                sessionStorage.setItem("trapezeDroitPosition", JSON.stringify(trapezeAxePosition));
                sessionStorage.setItem("trapezeDroitcoeffDirect", coeffDirect);
                //console.log("trapezeDroitPosition "+sessionStorage.getItem("trapezeDroitPosition"));
                //console.log("trapezeDroitcoeffDirect "+sessionStorage.getItem("trapezeDroitcoeffDirect"));
            } else if(x1<(sessionStorage.getItem("imageLargeur")/2)){
                console.log("je suis au coté trapeze coeff droit");
                var trapezeAxePosition=[];
                trapezeAxePosition.push(x1);
                trapezeAxePosition.push(y1);
                trapezeAxePosition.push(x2);
                trapezeAxePosition.push(y2);
                sessionStorage.setItem("trapezeGauchePosition", JSON.stringify(trapezeAxePosition));
                sessionStorage.setItem("trapezeGauchecoeffDirect", coeffDirect);
                //console.log("trapezeGauchePosition "+sessionStorage.getItem("trapezeGauchePosition"));
                //console.log("trapezeGauchecoeffDirect "+sessionStorage.getItem("trapezeGauchecoeffDirect"));
            }

        }
        

        x1=x1+(tailleDépassementDroite/coeffDirect);
        y1=y1+tailleDépassementDroite;
        x2=x2-(tailleDépassementDroite/coeffDirect);
        y2=y2-tailleDépassementDroite;
        var pointsAxeCentre = [] ;
        pointsAxeCentre.push(x1);
        pointsAxeCentre.push(y1);
        pointsAxeCentre.push(x2);
        pointsAxeCentre.push(y2);
        var dicomCanvas = document.getElementById("dwv-imageLayer");
        var dicomWidth = sessionStorage.getItem("imageLargeur");
        var dicomHeight = sessionStorage.getItem("imageHauteur");
        var kAxeCentre = new Kinetic.Line({
           points: pointsAxeCentre,
           stroke: "red",
           strokeWidth: 5*(dicomWidth/dicomCanvas.width),
           lineJoin: 'round',
           name: "AxeCentre"
        });
        // Ligne en pointillé
        kAxeCentre.dashArray([10,2]);
        // return group
        var group = new Kinetic.Group();
        group.name("roi-group");
        group.add(kshape);
        group.add(kAxeCentre);
        return group;
    } else {
        var group = new Kinetic.Group();
        var kshape = new Kinetic.Line({
            points: [0,0],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            opacity: 0.0,
            name: "shape",
        });
        group.add(kshape);
        return group;
    }
    
};

/**
 * Update a roi shape.
 * @param {Object} anchor The active anchor.
 * @param {Object} image The associated image.
 */
dwv.tool.UpdateRoi = function (anchor /*, image*/)
{

    // parent group
    var group = anchor.getParent();
    // associated shape
    var kroi = group.getChildren( function (node) {
        return node.name() === 'shape';
    })[0];
    // update self
    var point = group.getChildren( function (node) {
        return node.id() === anchor.id();
    })[0];
    point.x( anchor.x() );
    point.y( anchor.y() );
    // update the roi point and compensate for possible drag
    // (the anchor id is the index of the point in the list)
    var points = kroi.points();
    points[anchor.id()] = anchor.x() - kroi.x();
    points[anchor.id()+1] = anchor.y() - kroi.y();
    kroi.points( points );

    var kAxe = group.getChildren( function (node) {
        return node.name() === 'AxeCentre';
    })[0];

    //update axe
    var pointsArr = [];
    for (var i = 1; i < points.length; i+=2) {
        pointsArr.push({x:points[i-1], y:points[i]});
    };
    pointsArr.sort(function(a, b) {
        return a.y-b.y;
    });
    var x1 = 0;//Xarr[2] / 2 + Xarr[3] / 2 ;
    var y1 = 0;//Yarr[2] / 2 + Yarr[3] / 2 ;
    var x2 = 0;//Xarr[0] / 2 + Xarr[1] / 2 ;
    var y2 = 0;//Yarr[0] / 2 + Yarr[1] / 2 ;
    if (pointsArr.length==4) {
        console.log("pointsArr[2].x",pointsArr[2].x);
        x1 = pointsArr[2].x / 2 + pointsArr[3].x / 2 ;
        y1 = pointsArr[2].y / 2 + pointsArr[3].y / 2 ;
        x2 = pointsArr[0].x / 2 + pointsArr[1].x / 2 ;
        y2 = pointsArr[0].y / 2 + pointsArr[1].y / 2 ;
    }

    coeffDirect=(y2-y1)/(x2-x1);
    x1=x1+(tailleDépassementDroite/coeffDirect);
    y1=y1+tailleDépassementDroite;
    x2=x2-(tailleDépassementDroite/coeffDirect);
    y2=y2-tailleDépassementDroite;

    if (document.getElementById("RadioOuiHanche").checked) {
        var trapezeAxePosition=[];
        trapezeAxePosition.push(x1);
        trapezeAxePosition.push(y1);
        trapezeAxePosition.push(x2);
        trapezeAxePosition.push(y2);
        sessionStorage.setItem("trapezePosition", JSON.stringify(trapezeAxePosition));
        sessionStorage.setItem("trapezecoeffDirect", coeffDirect);
    } else {
        //test pour savoir de quel cote est le trapeze sauvegarde
        if(x1>(sessionStorage.getItem("imageLargeur")/2)){
            var trapezeAxePosition=[];
            trapezeAxePosition.push(x1);
            trapezeAxePosition.push(y1);
            trapezeAxePosition.push(x2);
            trapezeAxePosition.push(y2);
            sessionStorage.setItem("trapezeDroitPosition", JSON.stringify(trapezeAxePosition));
            sessionStorage.setItem("trapezeDroitcoeffDirect", coeffDirect);

        } else {
            var trapezeAxePosition=[];
            trapezeAxePosition.push(x1);
            trapezeAxePosition.push(y1);
            trapezeAxePosition.push(x2);
            trapezeAxePosition.push(y2);
            sessionStorage.setItem("trapezeGauchePosition", JSON.stringify(trapezeAxePosition));
            sessionStorage.setItem("trapezeGauchecoeffDirect", coeffDirect);
        }
    }
    //test pour savoir de quel cote est le trapeze sauvegarde
    /*if(x1>(sessionStorage.getItem("imageLargeur")/2)){
        var trapezeAxePosition=[];
        trapezeAxePosition.push(x1);
        trapezeAxePosition.push(y1);
        trapezeAxePosition.push(x2);
        trapezeAxePosition.push(y2);
        sessionStorage.setItem("trapezeDroitPosition", JSON.stringify(trapezeAxePosition));
        sessionStorage.setItem("trapezeDroitcoeffDirect", coeffDirect);
    } else {
        var trapezeAxePosition=[];
        trapezeAxePosition.push(x1);
        trapezeAxePosition.push(y1);
        trapezeAxePosition.push(x2);
        trapezeAxePosition.push(y2);
        sessionStorage.setItem("trapezeGauchePosition", JSON.stringify(trapezeAxePosition));
        sessionStorage.setItem("trapezeGauchecoeffDirect", coeffDirect);
    }*/
    //console.log("x1 "+x1+", y1 "+y1+", x2 "+x2+", y2 "+y2);

    kAxe.points( [x1,y1,x2,y2] );
};
