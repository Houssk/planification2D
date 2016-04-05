// namespaces
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};

var onPeutTrace=false;
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
    this.getTimeout = function () { return 20; };
};

/**
 * Create a roi shape to be displayed.
 * @param {Array} points The points from which to extract the line.
 * @param {Object} style The drawing style.
 * @param {Object} image The associated image.
 */
dwv.tool.RoiFactory.prototype.create = function (points, style /*, image*/)
{
    //console.log("RoiFactory nb points "+points);
    if (sessionStorage.getItem("premierPointTrapeze")===null) {
        sessionStorage.setItem("premierPointTrapeze", points[0]);
        var tempNbTrapeze = sessionStorage.getItem("nbTrapeze");
        tempNbTrapeze++;
        sessionStorage.setItem("nbTrapeze", tempNbTrapeze);
        onPeutTrace=true;
    } else {
        //console.log("points[0] "+points[0]);
        //console.log("sessionStorage.getItem(premierPointTrapeze) "+sessionStorage.getItem("premierPointTrapeze"));
        if (sessionStorage.getItem("premierPointTrapeze")!=points[0]) {
            sessionStorage.setItem("premierPointTrapeze", points[0]);
            //console.log("sessionStorage.getItem(nbTrapeze) "+ sessionStorage.getItem("nbTrapeze"));
            if (sessionStorage.getItem("nbTrapeze")<=2) {
                var tempNbTrapeze = sessionStorage.getItem("nbTrapeze");
                tempNbTrapeze++;
                sessionStorage.setItem("nbTrapeze", tempNbTrapeze);
                onPeutTrace=true;
            } else {
                alert("Veuillez supprimez un trapèze pour en recréer un nouveau");
                onPeutTrace=false;
            }
        }
    }

    if (onPeutTrace == true) {
        // physical shape
        var roi = new dwv.math.ROI();
        // add input points to the ROI
        roi.addPoints(points);
        // points stored the kineticjs way
        var arr = [];
        var Yarr = [];
        var Xarr = [];
        for( var i = 0; i < roi.getLength(); ++i )
        {
            arr.push( roi.getPoint(i).getX() );
            arr.push( roi.getPoint(i).getY() );
            Yarr.push( roi.getPoint(i).getY() );
        }

        // draw shape
        var kshape = new Kinetic.Line({
            points: arr,
            stroke: style.getLineColour(),
            strokeWidth: style.getScaledStrokeWidth(),
            name: "shape",
            closed: true
        });

        Yarr.sort(function(a, b){return a-b});
        for (var i = 0; i < Yarr.length; i++) {
            for (var j = 1; j < arr.length; j+=2) {
                if(Yarr[i]==arr[j])
                {
                    Xarr.push(arr[j-1]);
                }
            };
        };

        var x1 = Xarr[2] / 2 + Xarr[3] / 2 ;
        var y1 = Yarr[2] / 2 + Yarr[3] / 2 ;
        var x2 = Xarr[0] / 2 + Xarr[1] / 2 ;
        var y2 = Yarr[0] / 2 + Yarr[1] / 2 ;

        var centre = [] ;
        centre.push(x1);
        centre.push(y1);
        centre.push(x2);
        centre.push(y2);
        // return group
        var group = new Kinetic.Group();
        group.name("roi-group");
        group.add(kshape);
        return group;
    } else {
        return null;
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
};
