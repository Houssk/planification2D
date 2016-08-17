// namespaces
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};
var onPeutTraceAngle=false;
var idAngleActive = {
    angle_1 : false,
    angle_2 : false,
    angle_3 : false
};
var shapeId = null;
/**
 * Protractor factory.
 * @constructor
 */
dwv.tool.ProtractorFactory = function ()
{
    /**
     * Get the number of points needed to build the shape.
     * @return {Number} The number of points.
     */
    this.getNPoints = function () { return 3; };
    /**
     * Get the timeout between point storage.
     * @return {Number} The timeout in milliseconds.
     */
    this.getTimeout = function () { return 200; };
};

/**
 * Create a protractor shape to be displayed.
 * @param {Array} points The points from which to extract the protractor.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.ProtractorFactory.prototype.create = function (points, style/*, image*/)
{
    if (sessionStorage.getItem("premierPointAngle")===null) {
        sessionStorage.setItem("idAngleActive",JSON.stringify(idAngleActive));
        sessionStorage.setItem("premierPointAngle", points[0]);
        var tempNbAngle = sessionStorage.getItem("nbAngle");
        tempNbAngle++;
        sessionStorage.setItem("nbAngle", tempNbAngle);
        onPeutTraceAngle=true;
        var tempIdActive = JSON.parse(sessionStorage.getItem("idAngleActive"));
        if(tempIdActive.angle_1==false){
            document.getElementById("buttonDeleteRapporteur1").style.display = "";
            tempIdActive.angle_1=true;
            sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
            shapeId="angle_1";
        } else if (tempIdActive.angle_2==false) {
            document.getElementById("buttonDeleteRapporteur2").style.display = "";
            tempIdActive.angle_2=true;
            sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
            shapeId="angle_2";
        } else if (tempIdActive.angle_3==false) {
            document.getElementById("buttonDeleteRapporteur3").style.display = "";
            tempIdActive.angle_3=true;
            sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
            shapeId="angle_3";
        }
    } else {
        if (sessionStorage.getItem("premierPointAngle")!=points[0]) {
            sessionStorage.setItem("premierPointAngle", points[0]);
            if (sessionStorage.getItem("nbAngle")<3) {
                var  tempNbAngle = sessionStorage.getItem("nbAngle");
                tempNbAngle++;
                sessionStorage.setItem("nbAngle", tempNbAngle);
                onPeutTraceAngle=true;
                var tempIdActive = JSON.parse(sessionStorage.getItem("idAngleActive"));
                if(tempIdActive.angle_1==false){
                    document.getElementById("buttonDeleteRapporteur1").style.display = "";
                    tempIdActive.angle_1=true;
                    sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
                    shapeId="angle_1";
                } else if (tempIdActive.angle_2==false) {
                    document.getElementById("buttonDeleteRapporteur2").style.display = "";
                    tempIdActive.angle_2=true;
                    sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
                    shapeId="angle_2";
                } else if (tempIdActive.angle_3==false) {
                    document.getElementById("buttonDeleteRapporteur3").style.display = "";
                    tempIdActive.angle_3=true;
                    sessionStorage.setItem("idAngleActive",JSON.stringify(tempIdActive));
                    shapeId="angle_3";
                }
            } else {
                swal("Veuillez supprimer les régles pour en recreer un nouveau","Seul 3 régles sont autorisé");
                onPeutTraceAngle=false;
            }
        }
    }
    if (onPeutTraceAngle==true) {
        var tempNbAngle = sessionStorage.getItem("nbAngle");
        var line0 = new dwv.math.Line(points[0], points[1]);
        // points stored the kineticjs way
        var pointsArray = [];
        for( var i = 0; i < points.length; ++i )
        {
            pointsArray.push( points[i].getX() );
            pointsArray.push( points[i].getY() );
        }
        // draw shape
        var kshape = new Kinetic.Line({
            points: pointsArray,
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            id: shapeId,
            name: "shape"
        });
        var group = new Kinetic.Group();
        group.name("protractor-group");
        group.add(kshape);
        // text and decoration
        if ( points.length == 3 ) {
            var line1 = new dwv.math.Line(points[1], points[2]);
            // quantification
            var angle = dwv.math.getAngle(line0, line1);
            var inclination = line0.getInclination();
            if ( angle > 180 ) {
                angle = 360 - angle;
                inclination += angle;
            }
            var angleStr = angle.toPrecision(4) + "\u00B0";
            // quantification text
            var midX = ( line0.getMidpoint().getX() + line1.getMidpoint().getX() ) / 2;
            var midY = ( line0.getMidpoint().getY() + line1.getMidpoint().getY() ) / 2;
            var ktext = new Kinetic.Text({
                x: midX,
                y: midY - 15,
                text: angleStr,
                fontSize: style.getScaledFontSize(),
                fontFamily: style.getFontFamily(),
                fill: style.getLineColour(),
                name: "text"
            });
            // arc
            var radius = Math.min(line0.getLength(), line1.getLength()) * 33 / 100;
            var karc = new Kinetic.Arc({
                innerRadius: radius,
                outerRadius: radius,
                stroke: style.getLineColour(),
                strokeWidth: style.getScaledStrokeWidth(),
                angle: angle,
                rotationDeg: -inclination,
                x: points[1].getX(),
                y: points[1].getY(),
                name: "arc"
             });
            // add to group
            group.add(ktext);
            group.add(karc);
        }
        // return group
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
 * Update a protractor shape.
 * @param {Object} anchor The active anchor.
 * @param {Object} image The associated image.
 */
dwv.tool.UpdateProtractor = function (anchor/*, image*/)
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
    // associated arc
    var karc = group.getChildren( function (node) {
        return node.name() === 'arc';
    })[0];
    // find special points
    var begin = group.getChildren( function (node) {
        return node.id() === 'begin';
    })[0];
    var mid = group.getChildren( function (node) {
        return node.id() === 'mid';
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
    case 'mid':
        mid.x( anchor.x() );
        mid.y( anchor.y() );
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
    var mx = mid.x() - kline.x();
    var my = mid.y() - kline.y();
    var ex = end.x() - kline.x();
    var ey = end.y() - kline.y();
    kline.points( [bx,by,mx,my,ex,ey] );
    // update text
    var p2d0 = new dwv.math.Point2D(begin.x(), begin.y());
    var p2d1 = new dwv.math.Point2D(mid.x(), mid.y());
    var p2d2 = new dwv.math.Point2D(end.x(), end.y());
    var line0 = new dwv.math.Line(p2d0, p2d1);
    var line1 = new dwv.math.Line(p2d1, p2d2);
    var angle = dwv.math.getAngle(line0, line1);
    var inclination = line0.getInclination();
    if ( angle > 180 ) {
        angle = 360 - angle;
        inclination += angle;
    }
    var str = angle.toPrecision(4) + "\u00B0";
    var midX = ( line0.getMidpoint().getX() + line1.getMidpoint().getX() ) / 2;
    var midY = ( line0.getMidpoint().getY() + line1.getMidpoint().getY() ) / 2;
    var textPos = { 'x': midX, 'y': midY - 15 };
    ktext.position( textPos );
    ktext.text(str);
    // arc
    var radius = Math.min(line0.getLength(), line1.getLength()) * 33 / 100;
    karc.innerRadius(radius);
    karc.outerRadius(radius);
    karc.angle(angle);
    karc.rotation(-inclination);
    var arcPos = { 'x': mid.x(), 'y': mid.y() };
    karc.position(arcPos);
};
