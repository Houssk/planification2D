/**
 * Created by Utilisateur on 31/03/2016.
 */
/**
 * Tool module.
 * @module tool
 */
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
var Kinetic = Kinetic || {};


/**
 * Circle factory.
 * @class CircleFactory
 * @namespace dwv.tool
 * @constructor
 */
dwv.tool.CircleFactory = function ()
{
    /**
     * Get the number of points needed to build the shape.
     * @method getNPoints
     * @return {Number} The number of points.
     */
    this.getNPoints = function () { return 2; };
    /**
     * Get the timeout between point storage.
     * @method getTimeout
     * @return {Number} The timeout in milliseconds.
     */
    this.getTimeout = function () { return 0; };
};



/**
 * Create a cercle shape to be displayed.
 * @method create
 * @param {Array} points The points from which to extract the cercle.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.CircleFactory.prototype.create = function (points, style, image)
{
    var x = points[0].getX();
    var y = points[0].getY();

    //lastCenterPos = { 'x': points[0].getX(), 'y': points[0].getY() };
    console.log("CircleFactory OK");


    // calculate radius
    var radiusCircle = Math.sqrt(Math.pow(points[1].getX()-points[0].getX(),2)+Math.pow(points[1].getY()-points[0].getY(),2));
    // physical shape
    console.log(radiusCircle);
    var circle = new dwv.math.Circle(points[0], radiusCircle);
    // draw shape
    var kshape = new Kinetic.Circle({
        x: circle.getCenter().getX(),
        y: circle.getCenter().getY(),
        radius: circle.getRadius(),
        stroke: style.getLineColour(),
        strokeWidth: style.getScaledStrokeWidth(),
        name: "shape"
    });

    var kcentreCercle = new Kinetic.Circle({
        x: circle.getCenter().getX(),
        y: circle.getCenter().getY(),
        radius: 2,
        fill: "#F47D30",
        name: "centreCercle"
    });
    // quantification
    /// var cm2 = quant.surface / 100;
    var diametre =  Math.round((radiusCircle))*2;
    var str = Math.round((radiusCircle))*2  + " px";//cm2.toPrecision(4) + " cm2";
    sessionStorage.setItem("taille_bille",diametre);
    // quantification text
    var ktext = new Kinetic.Text({
        x: circle.getCenter().getX(),
        y: circle.getCenter().getY()+10,
        text: str,
        fontSize: style.getScaledFontSize(),
        fontFamily: style.getFontFamily(),
        fill: style.getLineColour(),
        name: "text"
    });



    // return group
    var group = new Kinetic.Group();
    group.name("circle-group");
    group.add(kshape);
    group.add(kcentreCercle);
    group.add(ktext);
    return group;
};

dwv.tool.UpdateCircle = function (anchor, image)
{
    console.log("UpdateCircle OK")
    // parent group
    var group = anchor.getParent();
    // associated shape
    var kcircle = group.getChildren( function (node) {
        return node.name() === 'shape';
    })[0];
    // associated text
    var ktext = group.getChildren(function (node){
        return node.name() === 'text';
    })[0];


    // find special points
    var kcentreCercle = group.getChildren(function (node){
        return node.name() === 'centreCercle';
    })[0];
    var centerCircleAnchor = group.getChildren( function (node) {
        return node.id() === 'centerCircleAnchor';
    })[0];
    var radiusPoint = group.getChildren( function (node) {
        return node.id() === 'radiusPoint';
    })[0];

    // update 'self' (undo case) and special points
    var radiusCircle = ( radiusPoint.x() - centerCircleAnchor.x() );
    console.log(radiusCircle)
    var radiusCircleAbs = Math.abs(radiusCircle);
    switch ( anchor.id() ) {
        case 'radiusPoint':
            radiusPoint.x(anchor.x());
            radiusPoint.y(centerCircleAnchor.y())
            break;
        case 'centerCircleAnchor':
            centerCircleAnchor.x(centerCircleAnchor.x());
            centerCircleAnchor.y(centerCircleAnchor.y());
            radiusPoint.x(radiusPoint.x()+(anchor.x()-lastCenterPos.x));
            radiusPoint.y(centerCircleAnchor.y());
            break;
        /*case 'centreCercle':
         centreCercle.x(centerCircleAnchor.x());
         centreCercle.y(centerCircleAnchor.y());
         radiusPoint.x(radiusPoint.x()+(anchor.x()-lastCenterPos.x));
         radiusPoint.y(centerCircleAnchor.y());
         break;*/

        default :
            console.error('Unhandled anchor id: '+anchor.id());
            break;
    }
    // update shape

    //var radiusCircle = ( topRight.x() - topLeft.x() ) / 2; //Math.sqrt(Math.pow(topRight.x()-topLeft.x())+Math.pow(bottomRight.y()-topRight.y()));
    var centerCircle = { 'x': centerCircleAnchor.x(), 'y': centerCircleAnchor.y()};

    var x = centerCircleAnchor.x();
    var y = centerCircleAnchor.y();


    lastCenterPos=centerCircle;
    //dwv.math.Point2D(topLeft.x()+radiusCircle, topLeft.y()+radiusCircle);
    // physical shape
    //var circle = new dwv.math.Circle(points[0], radiusCircle);
    //var radiusX = ( topRight.x() - topLeft.x() ) / 2;
    //var radiusY = ( bottomRight.y() - topRight.y() ) / 2;
    //var center = { 'x': topLeft.x() + radiusCircle, 'y': topRight.y() + radiusCircle };
    kcircle.position( centerCircle );
    kcircle.radius( radiusCircleAbs );

    // update text
    var circle = new dwv.math.Circle(centerCircle, radiusCircle);
    kcentreCercle.position(centerCircle);
    //kcentreCercle.position( centerCircle );
    //var quant = image.quantifyCircle( circle );
    //var cm2 = quant.surface / 100;
    var str = Math.round(radiusCircleAbs)*2 + " px";
    var textPos = centerCircle;
    ktext.position(textPos);
    ktext.text(str);
};

