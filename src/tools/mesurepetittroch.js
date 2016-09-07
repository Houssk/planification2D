/**
 * Tool module.
 * @module tool
 */
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
var Kinetic = Kinetic || {};
var onPeutTracePetitRoch=false;
/**
 * Mesurepetittroch factory.
 * @class MesurepetittrochFactory
 * @namespace dwv.tool
 * @constructor
 */
dwv.tool.MesurepetittrochFactory = function ()
{
    /**
     * Get the number of points needed to build the shape.
     * @method getNPoints
     * @return {Number} The number of points.
     */
    this.getNPoints = function () { return 3; };
    /**
     * Get the timeout between point storage.
     * @method getTimeout
     * @return {Number} The timeout in milliseconds.
     */
    this.getTimeout = function () { return 200; };
};

/**
 * Create a Mesurepetittroch shape to be displayed.
 * @method create
 * @param {Array} points The points from which to extract the line.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.MesurepetittrochFactory.prototype.create = function (points, style/*, image*/)
{

    if (sessionStorage.getItem("premierPointPetitTRoch")===null) {
        sessionStorage.setItem("premierPointPetitTRoch", points[0]);
        var tempNbPetitTroch = sessionStorage.getItem("nbPetitTroch");
        tempNbPetitTroch++;
        sessionStorage.setItem("nbPetitTroch", tempNbPetitTroch);
        onPeutTracePetitRoch=true;
    } else {
        if (sessionStorage.getItem("premierPointPetitTRoch")!=points[0]) {
            sessionStorage.setItem("premierPointPetitTRoch", points[0]);
            if (sessionStorage.getItem("nbPetitTroch")<1) {
                var  tempNbPetitTroch = sessionStorage.getItem("nbPetitTroch");
                tempNbPetitTroch++;
                sessionStorage.setItem("nbPetitTroch", tempNbPetitTroch);
                onPeutTracePetitRoch=true;
            } else {
                swal("Veuillez supprimer mesure petitroch pour en recreer un nouveau","Seul 1 mesure petitroch est autorisé");
                onPeutTracePetitRoch=false;
            }
        }
    }

    if(onPeutTracePetitRoch == true) {

        var tempNbPetitTroch = sessionStorage.getItem("nbPetitTroch") ;
        if(parseInt(tempNbPetitTroch)==1){
            document.getElementById("buttonDeletePetitTroch").style.display = "inline";
        }
        // physical shape
        //var line = new dwv.math.Mesurepetittroch(points[0], points[1], points[2], points[3], points[4], points[5], points[6], points[7]);
        var line = new dwv.math.Mesurepetittroch(points[0], points[1], points[2]);
        // draw shape
        var kshape = new Kinetic.Line({
            points: [line.getBegin().getX(), line.getBegin().getY(),
                line.getEnd().getX(), line.getEnd().getY(),
                line.getBegin().getX(), line.getEnd().getY(),
                line.getEnd().getX(), line.getBegin().getY()],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            opacity: 0.0,
            name: "shape",
            id: "petitroch"
        });

        var horizontalCoteShape = new Kinetic.Line({
            points: [line.getBegin().getX(), line.getBegin().getY(),
                line.getEnd().getX(), line.getBegin().getY()],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            name: "horizontalCoteShape",
            id: "shapeH"
        });
        horizontalCoteShape.dashArray([10, 2]);

        var verticalCoteShapeLeft = new Kinetic.Line({
            points: [line.getBegin().getX(), line.getBegin().getY(),
                line.getBegin().getX(), line.getEnd().getY()],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            name: "verticalCoteShapeLeft",
            id: "shapeleft"
        });
        verticalCoteShapeLeft.dashArray([10, 2]);

        var verticalCoteShapeRight = new Kinetic.Line({
            points: [line.getEnd().getX(), line.getBegin().getY(),
                line.getEnd().getX(), line.getEnd().getY()],
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            name: "verticalCoteShapeRight",
            id: "shaperight"
        });
        verticalCoteShapeRight.dashArray([10, 2]);
        var coefficient = sessionStorage.getItem("coefficient");
        // quantification
        var deltaX = Math.round(Math.abs(line.getEnd().getX() - line.getBegin().getX()) * coefficient);
        var deltaY = Math.round(Math.abs(line.getEnd().getY() - line.getBegin().getY()) * coefficient);
        var deltaZ = Math.round(Math.abs(line.getEnd().getY() - line.getBegin().getY()) * coefficient);
        var strDeltaX = deltaX + " mm";
        var strDeltaY = deltaY + " mm";
        var strDeltaZ = deltaZ + " mm";

        var dicomCanvas = document.getElementById("dwv-imageLayer");
        var dicomWidth = sessionStorage.getItem("imageLargeur");
        var dicomHeight = sessionStorage.getItem("imageHauteur");
        // quantification text
        var horizontalCoteText = new Kinetic.Text({
            x: line.getBegin().getX() + ((line.getEnd().getX() - line.getBegin().getX()) / 2)+(10*(dicomWidth/dicomCanvas.width)),
            y: line.getBegin().getY() + 20,
            text: strDeltaX,
            fontSize: style.getScaledFontSize(),
            fontFamily: style.getFontFamily(),
            fill: style.getLineColour(),
            name: "horizontalCoteText"
        });

        var verticalCoteLeftText = new Kinetic.Text({
            x: line.getBegin().getX() + (20*(dicomWidth/dicomCanvas.width)),
            y: line.getBegin().getY() + ((line.getEnd().getY() - line.getBegin().getY()) / 2)+(10*(dicomHeight/dicomCanvas.height)),
            text: strDeltaY,
            fontSize: style.getScaledFontSize(),
            fontFamily: style.getFontFamily(),
            fill: style.getLineColour(),
            name: "verticalCoteLeftText"
        });

        var verticalCoteRightText = new Kinetic.Text({
            x: line.getEnd().getX() + (20*(dicomWidth/dicomCanvas.width)),
            y: line.getBegin().getY() + ((line.getEnd().getY() - line.getBegin().getY()) / 2)+(10*(dicomHeight/dicomCanvas.height)),
            text: strDeltaZ,
            fontSize: style.getScaledFontSize(),
            fontFamily: style.getFontFamily(),
            fill: style.getLineColour(),
            name: "verticalCoteRightText"
        });

        // return group
        var group = new Kinetic.Group();
        group.add(kshape);
        group.add(horizontalCoteShape);
        group.add(verticalCoteShapeLeft);
        group.add(verticalCoteShapeRight);
        group.add(horizontalCoteText);
        group.add(verticalCoteLeftText);
        group.add(verticalCoteRightText);

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
 * Update a mesurepetittroch shape.
 * @method Mesurepetittroch
 * @static
 * @param {Object} anchor The active anchor.
 * @param {Object} image The associated image.
 */
dwv.tool.UpdateMesurepetittroch = function (anchor, image)
{
    // parent group
    var group = anchor.getParent();
    // associated shape
    var kline = group.getChildren( function (node) {
        return node.name() === 'shape';
    })[0];
    // associated horizontal shape
    var klineHorizontal = group.getChildren( function (node) {
        return node.name() === 'horizontalCoteShape';
    })[0];
    // associated vertical shape
    var klineVerticalLeft = group.getChildren( function (node) {
        return node.name() === 'verticalCoteShapeLeft';
    })[0];
    // associated vertical shape
    var klineVerticalRight = group.getChildren( function (node) {
        return node.name() === 'verticalCoteShapeRight';
    })[0];
    // associated horizontal text
    var ktextHorizontal = group.getChildren( function (node) {
        return node.name() === 'horizontalCoteText';
    })[0];
    // associated vertical left text
    var ktextVerticalLeft = group.getChildren( function (node) {
        return node.name() === 'verticalCoteLeftText';
    })[0];
    // associated vertical right text
    var ktextVerticalRight = group.getChildren( function (node) {
        return node.name() === 'verticalCoteRightText';
    })[0];

    // find special points
    var begin = group.getChildren( function (node) {
        return node.id() === 'begin';
    })[0];
    var end = group.getChildren( function (node) {
        return node.id() === 'end';
    })[0];
    var left = group.getChildren( function (node) {
        return node.id() === 'left';
    })[0];

    switch ( anchor.id() ) {
        case 'begin':
            begin.x( anchor.x() );
            left.x( anchor.x() );
            begin.y( anchor.y() );
            break;
        case 'end':
            end.x( anchor.x() );
            end.y( anchor.y() );
            break;
        case 'left':
            begin.x( anchor.x() );
            left.x( anchor.x() );
            left.y( anchor.y() );
            break;

    }

    var bx = begin.x() - kline.x();
    var by = begin.y() - kline.y();
    var ex = end.x() - kline.x();
    var ey = end.y() - kline.y();


    var bHx = end.x() - klineHorizontal.x();
    var bHy = begin.y() - klineHorizontal.y();
    var eHx = begin.x() - klineHorizontal.x();
    var eHy = begin.y() - klineHorizontal.y();

    klineHorizontal.points( [bHx,bHy,eHx,eHy] );

    var bVlx = begin.x() - klineVerticalLeft.x();
    var bVly = begin.y() - klineVerticalLeft.y();
    var eVlx = begin.x() - klineVerticalLeft.x();
    var eVly = left.y() - klineVerticalLeft.y();
    klineVerticalLeft.points( [bVlx,bVly,eVlx,eVly] );

    var bVrx = end.x() - klineVerticalRight.x();
    var bVry = begin.y() - klineVerticalRight.y();
    var eVrx = end.x() - klineVerticalRight.x();
    var eVry = end.y() - klineVerticalRight.y();
    klineVerticalRight.points( [bVrx,bVry,eVrx,eVry] );
    kline.points( [bx,by,ex,ey,eVlx,eVly,eVrx,eVry] );

    var p2d0 = new dwv.math.Point2D(begin.x(), begin.y() );
    var p2d1 = new dwv.math.Point2D(end.x(), end.y() );
    var p2d2 = new dwv.math.Point2D(begin.x(), left.y() );
    var line = new dwv.math.Mesurepetittroch(p2d0, p2d1, p2d2);
    var dX = line.getBegin().getX() > line.getEnd().getX() ? 0 : -1;
    var dY = line.getBegin().getY() > line.getEnd().getY() ? -1 : 0.5;
    var dz = line.getBegin().getY() > line.getLeft().getY() ? -1 : 0.5;

    var points = kline.points();
    var pointsVerticalLeft = klineVerticalLeft.points();
    var pointsVerticalRight = klineVerticalRight.points();
    var coefficient = sessionStorage.getItem("coefficient");
    var deltaZ = Math.round(Math.abs(pointsVerticalLeft[3]- pointsVerticalLeft[1])*coefficient);
    var deltaY = Math.round(Math.abs(pointsVerticalRight[3]-pointsVerticalRight[1])*coefficient);
    var deltaX = Math.round(Math.abs(points[2]-points[0])*coefficient);
    var dicomCanvas = document.getElementById("dwv-imageLayer");
    var dicomWidth = sessionStorage.getItem("imageLargeur");
    var dicomHeight = sessionStorage.getItem("imageHauteur");
    var textPosHor = {
        'x': (line.getBegin().getX() + dX * 25) + (points[2]-points[0])/2,
        'y': (line.getBegin().getY() + dY * 15 +(30*(dicomHeight/dicomCanvas.height))), };
    var textPosVerRight = {
        'x': line.getEnd().getX() + dX * 25 +(30*(dicomWidth/dicomCanvas.width)),
        'y': line.getEnd().getY() +  dY * 15 +(10*(dicomHeight/dicomCanvas.height)), };
    var textPosVerLeft = {
        'x': line.getBegin().getX() + dX * 25+(30*(dicomWidth/dicomCanvas.width)),
        'y': line.getLeft().getY() + dz * 15 +(10*(dicomHeight/dicomCanvas.height)), };

    var strDeltaX = deltaX + " mm";
    var strDeltaY = deltaY + " mm";
    var strDeltaZ = deltaZ + " mm";

    ktextHorizontal.position( textPosHor );
    ktextHorizontal.text(strDeltaX);
    ktextVerticalLeft.position( textPosVerLeft );
    ktextVerticalLeft.text(strDeltaZ);
    ktextVerticalRight.position( textPosVerRight );
    ktextVerticalRight.text(strDeltaY);
};