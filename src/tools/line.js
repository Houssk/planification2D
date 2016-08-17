// namespaces
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};
var onPeutTraceRegle=false;
var idRegleActive = {
    regle_1 : false,
    regle_2 : false,
    regle_3 : false
};
var shapeId = null;
/**
 * Line factory.
 * @constructor
 */
dwv.tool.LineFactory = function ()
{
    /**
     * Get the number of points needed to build the shape.
     * @return {Number} The number of points.
     */
    this.getNPoints = function () { return 2; };
    /**
     * Get the timeout between point storage.
     * @return {Number} The timeout in milliseconds.
     */
    this.getTimeout = function () { return 0; };
};

/**
 * Create a line shape to be displayed.
 * @param {Array} points The points from which to extract the line.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.LineFactory.prototype.create = function (points, style, image)
{
    if (sessionStorage.getItem("premierPointRegle")===null) {
        sessionStorage.setItem("idRegleActive",JSON.stringify(idRegleActive));
        sessionStorage.setItem("premierPointRegle", points[0]);
        var tempNbRegle = sessionStorage.getItem("nbRegle");
        tempNbRegle++;
        sessionStorage.setItem("nbRegle", tempNbRegle);
        onPeutTraceRegle=true;
        var tempIdActive = JSON.parse(sessionStorage.getItem("idRegleActive"));
        if(tempIdActive.regle_1==false){
            document.getElementById("buttonDeleteRegle1").style.display = "";
            tempIdActive.regle_1=true;
            sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
            shapeId="regle_1";
        } else if (tempIdActive.regle_2==false) {
            document.getElementById("buttonDeleteRegle2").style.display = "";
            tempIdActive.regle_2=true;
            sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
            shapeId="regle_2";
        } else if (tempIdActive.regle_3==false) {
            document.getElementById("buttonDeleteRegle3").style.display = "";
            tempIdActive.regle_3=true;
            sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
            shapeId="regle_3";
        }
    } else {
        if (sessionStorage.getItem("premierPointRegle")!=points[0]) {
            sessionStorage.setItem("premierPointRegle", points[0]);
            if (sessionStorage.getItem("nbRegle")<3) {
                var  tempNbRegle = sessionStorage.getItem("nbRegle");
                tempNbRegle++;
                sessionStorage.setItem("nbRegle", tempNbRegle);
                onPeutTraceRegle=true;
                var tempIdActive = JSON.parse(sessionStorage.getItem("idRegleActive"));
                if(tempIdActive.regle_1==false){
                    document.getElementById("buttonDeleteRegle1").style.display = "";
                    tempIdActive.regle_1=true;
                    sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
                    shapeId="regle_1";
                } else if (tempIdActive.regle_2==false) {
                    document.getElementById("buttonDeleteRegle2").style.display = "";
                    tempIdActive.regle_2=true;
                    sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
                    shapeId="regle_2";
                } else if (tempIdActive.regle_3==false) {
                    document.getElementById("buttonDeleteRegle3").style.display = "";
                    tempIdActive.regle_3=true;
                    sessionStorage.setItem("idRegleActive",JSON.stringify(tempIdActive));
                    shapeId="regle_3";
                }
            } else {
                swal("Veuillez supprimer les régles pour en recreer un nouveau","Seul 3 régles sont autorisé");
                onPeutTraceRegle=false;
            }
        }
    }
    if (onPeutTraceRegle==true) {
        // physical shape
        var line = new dwv.math.Line(points[0], points[1]);
        // draw shape
        var kshape = new Kinetic.Line({
            points: [line.getBegin().getX(), line.getBegin().getY(),
            line.getEnd().getX(), line.getEnd().getY() ],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            id: shapeId,
            name: "shape"
        });
        // quantification
        var coeff=sessionStorage.getItem("coefficient");
        var distPx = Math.sqrt(Math.pow(line.getEnd().getX()-line.getBegin().getX(),2)+Math.pow(line.getEnd().getY()-line.getBegin().getY(),2));
        var distMm = Math.round(distPx*coeff) ;
        var str = distMm + " mm";
        // quantification text
        var dX = line.getBegin().getX() > line.getEnd().getX() ? 0 : -1;
        var dY = line.getBegin().getY() > line.getEnd().getY() ? -1 : 0.5;
        var dicomCanvas = document.getElementById("dwv-imageLayer");
        var dicomWidth = sessionStorage.getItem("imageLargeur");
        var dicomHeight = sessionStorage.getItem("imageHauteur");
        var ktext = new Kinetic.Text({
            x: line.getEnd().getX() + dX * 25+(10*(dicomWidth/dicomCanvas.width)),
            y: line.getEnd().getY() + dY * 15+(10*(dicomHeight/dicomCanvas.height)),
            text: str,
            fontSize: style.getScaledFontSize(),
            fontFamily: style.getFontFamily(),
            fill: style.getLineColour(),
            name: "text"
        });
        // return group
        var group = new Kinetic.Group();
        group.name("line-group");
        group.add(kshape);
        group.add(ktext);
        return group;
    } 
    else {
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
 * Update a line shape.
 * @param {Object} anchor The active anchor.
 * @param {Object} image The associated image.
 */
dwv.tool.UpdateLine = function (anchor, image)
{
    // parent group
    var group = anchor.getParent();
    // associated shape
    var kline = group.getChildren( function (node) {
        return node.name() === 'shape';
    })[0];
    // associated text
    var ktext = group.getChildren( function (node) {
        return node.name() === 'text';
    })[0];
    // find special points
    var begin = group.getChildren( function (node) {
        return node.id() === 'begin';
    })[0];
    var end = group.getChildren( function (node) {
        return node.id() === 'end';
    })[0];
    // update special points
    switch ( anchor.id() ) {
    case 'begin':
        begin.x( anchor.x() );
        begin.y( anchor.y() );
        break;
    case 'end':
        end.x( anchor.x() );
        end.y( anchor.y() );
        break;
    }
    // update shape and compensate for possible drag
    // note: shape.position() and shape.size() won't work...
    var bx = begin.x() - kline.x();
    var by = begin.y() - kline.y();
    var ex = end.x() - kline.x();
    var ey = end.y() - kline.y();
    kline.points( [bx,by,ex,ey] );
    // update text
    var p2d0 = new dwv.math.Point2D(begin.x(), begin.y());
    var p2d1 = new dwv.math.Point2D(end.x(), end.y());
    var line = new dwv.math.Line(p2d0, p2d1);
    var coeff=sessionStorage.getItem("coefficient");
    var distPx = Math.sqrt(Math.pow(line.getEnd().getX()-line.getBegin().getX(),2)+Math.pow(line.getEnd().getY()-line.getBegin().getY(),2));
    var distMm = Math.round(distPx*coeff) ;
    var str = distMm + " mm";
    var dX = line.getBegin().getX() > line.getEnd().getX() ? 0 : -1;
    var dY = line.getBegin().getY() > line.getEnd().getY() ? -1 : 0.5;
    var dicomCanvas = document.getElementById("dwv-imageLayer");
    var dicomWidth = sessionStorage.getItem("imageLargeur");
    var dicomHeight = sessionStorage.getItem("imageHauteur");
    
    
    var textPos = {
        'x': line.getEnd().getX() + dX * 25+(10*(dicomWidth/dicomCanvas.width)),
        'y': line.getEnd().getY() + dY * 15+(10*(dicomHeight/dicomCanvas.height)), };
    ktext.position( textPos );
    ktext.text(str);
};
