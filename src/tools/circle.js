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
    var calibrage = sessionStorage.getItem("calibrage");
    var coefficient = sessionStorage.getItem("coefficient");
    var diametre_px =  Math.round((radiusCircle))*2;
    var diametre_mm = null;
    var str = null;
    if(calibrage=="true"){

        diametre_mm = Math.round((radiusCircle)*2*coefficient);
        str = diametre_mm + "mm";
    }
    else {
        str = diametre_px  + " px";
        sessionStorage.setItem("taille_bille",diametre_px);
       }
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

        default :
            console.error('Unhandled anchor id: '+anchor.id());
            break;
    }
    var centerCircle = { 'x': centerCircleAnchor.x(), 'y': centerCircleAnchor.y()};
    var x = centerCircleAnchor.x();
    var y = centerCircleAnchor.y();
    kcircle.position( centerCircle );
    kcircle.radius( radiusCircleAbs );
    kcentreCercle.position(centerCircle);
    var diametre_mm = null;
    var diametre_px = null;
    var str = null;
    var coefficient = sessionStorage.getItem("coefficient");
    var calibrage = sessionStorage.getItem("calibrage");
    if(calibrage=="true"){

        diametre_mm = Math.round((radiusCircle)*2*coefficient);
        str = diametre_mm + "mm";
    }
    else {
        diametre_px = Math.round((radiusCircle))*2;
        str = diametre_px  + " px";
        sessionStorage.setItem("taille_bille",diametre_px);
    }
    var textPos = centerCircle;
    ktext.position(textPos);
    ktext.text(str);
};

