// namespaces
var dwv = dwv || {};
/** @namespace */
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};

/**
 * Draw group command.
 * @constructor
 */
dwv.tool.DrawGroupCommand = function (group, name, layer)
{
    /**
     * Get the command name.
     * @return {String} The command name.
     */
    this.getName = function () { return "Draw-"+name; };
    /**
     * Execute the command.
     */
    this.execute = function () {
        // add the group to the layer
        layer.add(group);
        // draw
        layer.draw();
        // callback
        this.onExecute({'type': 'draw-create', 'id': group.id()});
    };
    /**
     * Undo the command.
     */
    this.undo = function () {
        // remove the group from the parent layer
        group.remove();
        // draw
        layer.draw();
        // callback
        this.onUndo({'type': 'draw-delete', 'id': group.id()});
    };


}; // DrawGroupCommand class

/**
 * Handle an execute event.
 * @param {Object} event The execute event with type and id.
 */
dwv.tool.DrawGroupCommand.prototype.onExecute = function (/*event*/)
{
    // default does nothing.
};
/**
 * Handle an undo event.
 * @param {Object} event The undo event with type and id.
 */
dwv.tool.DrawGroupCommand.prototype.onUndo = function (/*event*/)
{
    // default does nothing.
};

/**
 * Move group command.
 * @constructor
 */
dwv.tool.MoveGroupCommand = function (group, name, translation, layer)
{
    /**
     * Get the command name.
     * @return {String} The command name.
     */
    this.getName = function () { return "Move-"+name; };

    /**
     * Execute the command.
     */
    this.execute = function () {
        // translate all children of group
        group.getChildren().each( function (shape) {
            shape.x( shape.x() + translation.x );
            shape.y( shape.y() + translation.y );
        });
        // draw
        layer.draw();
        // callback
        this.onExecute({'type': 'draw-move', 'id': group.id()});
    };
    /**
     * Undo the command.
     */
    this.undo = function () {
        // invert translate all children of group
        group.getChildren().each( function (shape) {
            shape.x( shape.x() - translation.x );
            shape.y( shape.y() - translation.y );
        });
        // draw
        layer.draw();
        // callback
        this.onUndo({'type': 'draw-move', 'id': group.id()});
    };
}; // MoveGroupCommand class

/**
 * Handle an execute event.
 * @param {Object} event The execute event with type and id.
 */
dwv.tool.MoveGroupCommand.prototype.onExecute = function (/*event*/)
{
    // default does nothing.
};
/**
 * Handle an undo event.
 * @param {Object} event The undo event with type and id.
 */
dwv.tool.MoveGroupCommand.prototype.onUndo = function (/*event*/)
{
    // default does nothing.
};

/**
 * Change group command.
 * @constructor
 */
dwv.tool.ChangeGroupCommand = function (name, func, startAnchor, endAnchor, layer, image)
{
    /**
     * Get the command name.
     * @return {String} The command name.
     */
    this.getName = function () { return "Change-"+name; };

    /**
     * Execute the command.
     */
    this.execute = function () {
        // change shape
        func( endAnchor, image );
        // draw
        layer.draw();
        // callback
        this.onExecute({'type': 'draw-change'});
    };
    /**
     * Undo the command.
     */
    this.undo = function () {
        // invert change shape
        func( startAnchor, image );
        // draw
        layer.draw();
        // callback
        this.onUndo({'type': 'draw-change'});
    };
}; // ChangeGroupCommand class

/**
 * Handle an execute event.
 * @param {Object} event The execute event with type and id.
 */
dwv.tool.ChangeGroupCommand.prototype.onExecute = function (/*event*/)
{
    // default does nothing.
};
/**
 * Handle an undo event.
 * @param {Object} event The undo event with type and id.
 */
dwv.tool.ChangeGroupCommand.prototype.onUndo = function (/*event*/)
{
    // default does nothing.
};

/**
 * Delete group command.
 * @constructor
 */
dwv.tool.DeleteGroupCommand = function (group, name, layer)
{
    /**
     * Get the command name.
     * @return {String} The command name.
     */
    this.getName = function () { return "Delete-"+name; };
    /**
     * Execute the command.
     */
    this.execute = function () {
        if("roi"==name){
            var tempNbTrapeze = sessionStorage.getItem("nbTrapeze");
            tempNbTrapeze--;
            sessionStorage.setItem("nbTrapeze", tempNbTrapeze);
            if(tempNbTrapeze==0){
                document.getElementById("buttonDeleteTrapeze").style.display = "none";
            }
        }
        if ("circle"==name) {
            var tempNbCercle = sessionStorage.getItem("nbCercle");
            tempNbCercle--;
            sessionStorage.setItem("nbCercle", tempNbCercle);
            if(tempNbCercle==0){
                document.getElementById("buttonDeleteCercle").style.display = "none";
            }
        }
        if ("mesurepetittroch"==name) {
            var tempNbPetitTroch = sessionStorage.getItem("nbPetitTroch");
            tempNbPetitTroch--;
            sessionStorage.setItem("nbPetitTroch", tempNbPetitTroch);
            document.getElementById("buttonDeletePetitTroch").style.display = "none";
        }
        if ("line"==name) {
            var tempNbPetitTroch = sessionStorage.getItem("nbPetitTroch");
            tempNbPetitTroch--;
            sessionStorage.setItem("nbPetitTroch", tempNbPetitTroch);
            document.getElementById("buttonDeletePetitTroch").style.display = "none";
        }

        //
        // remove the group from the parent layer
        group.remove();
        // draw
        layer.draw();
        // callback
        this.onExecute({'type': 'draw-delete', 'id': group.id()});



    };
    /**
     * Undo the command.
     */
    this.undo = function () {
        // add the group to the layer
        layer.add(group);
        // draw
        layer.draw();
        // callback
        this.onUndo({'type': 'draw-create', 'id': group.id()});
    };
}; // DeleteGroupCommand class

/**
 * Handle an execute event.
 * @param {Object} event The execute event with type and id.
 */
dwv.tool.DeleteGroupCommand.prototype.onExecute = function (/*event*/)
{
    // default does nothing.

};
/**
 * Handle an undo event.
 * @param {Object} event The undo event with type and id.
 */
dwv.tool.DeleteGroupCommand.prototype.onUndo = function (/*event*/)
{
    // default does nothing.
};

/**
 * Drawing tool.
 * @constructor
 * @param {Object} app The associated application.
 */
dwv.tool.Draw = function (app, shapeFactoryList)
{
    /**
     * Closure to self: to be used by event handlers.
     * @private
     * @type WindowLevel
     */
    var self = this;
    /**
     * Draw GUI.
     * @type Object
     */
    var gui = null;
    /**
     * Interaction start flag.
     * @private
     * @type Boolean
     */
    var started = false;

    /**
     * Shape factory list
     * @type Object
     */
    this.shapeFactoryList = shapeFactoryList;
    /**
     * Draw command.
     * @private
     * @type Object
     */
    var command = null;
    /**
     * Current shape group.
     * @private
     * @type Object
     */
    var shapeGroup = null;

    /**
     * Shape name.
     * @type String
     */
    this.shapeName = 0;

    /**
     * List of points.
     * @private
     * @type Array
     */
    var points = [];

    /**
     * Last selected point.
     * @private
     * @type Object
     */
    var lastPoint = null;

    /**
     * Shape editor.
     * @private
     * @type Object
     */
    var shapeEditor = new dwv.tool.ShapeEditor(app);

    // associate the event listeners of the editor
    //  with those of the draw tool
    shapeEditor.setDrawEventCallback(fireEvent);

    /**
     * Trash draw: a cross.
     * @private
     * @type Object
     */
    var trash = new Kinetic.Group();

    // first line of the cross
    var trashLine1 = new Kinetic.Line({
        points: [-10, -10, 10, 10 ],
        stroke: 'red',
    });
    // second line of the cross
    var trashLine2 = new Kinetic.Line({
        points: [10, -10, -10, 10 ],
        stroke: 'red'
    });
    trash.add(trashLine1);
    trash.add(trashLine2);

    // listeners
    var listeners = {};

    /**
     * The associated draw layer.
     * @private
     * @type Object
     */
    var drawLayer = null;

    /**
     * Handle mouse down event.
     * @param {Object} event The mouse down event.
     */
    this.mousedown = function(event){
        // determine if the click happened in an existing shape
        var stage = app.getDrawStage();
        var kshape = stage.getIntersection({
            x: event._xs,
            y: event._ys
        });

        if ( kshape ) {
            var group = kshape.getParent();
            var selectedShape = group.find(".shape")[0];
            // reset editor if click on other shape
            // (and avoid anchors mouse down)
            if ( selectedShape && selectedShape !== shapeEditor.getShape() ) {
                shapeEditor.disable();
                shapeEditor.setShape(selectedShape);
                shapeEditor.setImage(app.getImage());
                shapeEditor.enable();
            }
        }
        else {
            // disable edition
            shapeEditor.disable();
            shapeEditor.setShape(null);
            shapeEditor.setImage(null);
            // start storing points
            started = true;
            // clear array
            points = [];
            // store point
            lastPoint = new dwv.math.Point2D(event._x, event._y);
            points.push(lastPoint);
        }
    };

    /**
     * Handle mouse move event.
     * @param {Object} event The mouse move event.
     */
    this.mousemove = function(event){
        if (!started)
        {
            return;
        }
        if ( Math.abs( event._x - lastPoint.getX() ) > 0 ||
                Math.abs( event._y - lastPoint.getY() ) > 0 )
        {
            // current point
            lastPoint = new dwv.math.Point2D(event._x, event._y);
            // clear last added point from the list (but not the first one)
            if ( points.length != 1 ) {
                points.pop();
            }
            // add current one to the list
            points.push( lastPoint );
            // allow for anchor points
            var factory = new self.shapeFactoryList[self.shapeName]();
            if( points.length < factory.getNPoints() ) {
                clearTimeout(this.timer);
                this.timer = setTimeout( function () {
                    points.push( lastPoint );
                }, factory.getTimeout() );
            }
            // remove previous draw
            if ( shapeGroup ) {
                shapeGroup.destroy();
            }
            // create shape group
            shapeGroup = factory.create(points, app.getStyle(), app.getImage());
            // do not listen during creation
            var shape = shapeGroup.getChildren( function (node) {
                return node.name() === 'shape';
            })[0];
            shape.listening(false);
            drawLayer.hitGraphEnabled(false);
            // draw shape command
            command = new dwv.tool.DrawGroupCommand(shapeGroup, self.shapeName, drawLayer);
            // draw
            command.execute();
        }
    };

    /**
     * Handle mouse up event.
     * @param {Object} event The mouse up event.
     */
    this.mouseup = function (/*event*/){
        if (started && points.length > 1 )
        {
            // reset shape group
            if ( shapeGroup ) {
                shapeGroup.destroy();
            }
            // create final shape
            var factory = new self.shapeFactoryList[self.shapeName]();
            var group = factory.create(points, app.getStyle(), app.getImage());
            group.id( dwv.math.guid() );
            // re-activate layer
            drawLayer.hitGraphEnabled(true);
            // draw shape command
            command = new dwv.tool.DrawGroupCommand(group, self.shapeName, drawLayer);
            command.onExecute = fireEvent;
            command.onUndo = fireEvent;
            // execute it
            command.execute();
            // save it in undo stack
            app.addToUndoStack(command);

            // set shape on
            var shape = group.getChildren( function (node) {
                return node.name() === 'shape';
            })[0];


            self.setShapeOn( shape );
            if(shape.id()=="petitroch"){

                var shapeVerticaleLeft = group.getChildren( function (node) {
                    return node.name() === 'verticalCoteShapeLeft';
                })[0];
                var shapeHorizontal = group.getChildren( function (node) {
                    return node.name() === 'horizontalCoteShape';
                })[0];
                var shapeVeriticalRight = group.getChildren( function (node) {
                    return node.name() === 'verticalCoteShapeRight';
                })[0];
                self.setShapeOn( shapeVerticaleLeft );
                self.setShapeOn( shapeHorizontal );
                self.setShapeOn( shapeVeriticalRight );

            }

        }
        // reset flag
        started = false;
    };

    /**
     * Handle mouse out event.
     * @param {Object} event The mouse out event.
     */
    this.mouseout = function(event){
        self.mouseup(event);
    };

    /**
     * Handle touch start event.
     * @param {Object} event The touch start event.
     */
    this.touchstart = function(event){
        self.mousedown(event);
    };

    /**
     * Handle touch move event.
     * @param {Object} event The touch move event.
     */
    this.touchmove = function(event){
        self.mousemove(event);
    };

    /**
     * Handle touch end event.
     * @param {Object} event The touch end event.
     */
    this.touchend = function(event){
        self.mouseup(event);
    };

    /**
     * Handle key down event.
     * @param {Object} event The key down event.
     */
    this.keydown = function(event){
        app.onKeydown(event);
    };

    /**
     * Setup the tool GUI.
     */
    this.setup = function ()
    {
        gui = new dwv.gui.Draw(app);
        gui.setup(this.shapeFactoryList);
    };

    /**
     * Enable the tool.
     * @param {Boolean} flag The flag to enable or not.
     */
    this.display = function ( flag ){
        if ( gui ) {
            gui.display( flag );
        }
        // reset shape display properties
        shapeEditor.disable();
        shapeEditor.setShape(null);
        shapeEditor.setImage(null);
        document.body.style.cursor = 'default';
        // make layer listen or not to events
        app.getDrawStage().listening( flag );
        drawLayer = app.getDrawLayer();
        drawLayer.listening( flag );
        drawLayer.hitGraphEnabled( flag );
        // get the list of shapes
        var groups = drawLayer.getChildren();
        var shapes = [];
        var fshape = function (node) {
            return node.name() === 'shape';
        };
        for ( var i = 0; i < groups.length; ++i ) {
            // should only be one shape per group
            shapes.push( groups[i].getChildren(fshape)[0] );
        }
        // set shape display properties
        if ( flag ) {
            app.addLayerListeners( app.getDrawStage().getContent() );
            shapes.forEach( function (shape){ self.setShapeOn( shape ); });
        }
        else {
            app.removeLayerListeners( app.getDrawStage().getContent() );
            shapes.forEach( function (shape){ setShapeOff( shape ); });
        }
        // draw
        drawLayer.draw();
    };

    /**
     * Set shape off properties.
     * @param {Object} shape The shape to set off.
     */
    function setShapeOff( shape ) {
        // mouse styling
        shape.off('mouseover');
        shape.off('mouseout');
        // drag
        shape.draggable(false);
        shape.off('dragstart');
        shape.off('dragmove');
        shape.off('dragend');
    }

    /**
     * Get the real position from an event.
     */
    function getRealPosition( index ) {
        var stage = app.getDrawStage();
        return { 'x': stage.offset().x + index.x / stage.scale().x,
            'y': stage.offset().y + index.y / stage.scale().y };
    }

    /**
     * Set shape on properties.
     * @param {Object} shape The shape to set on.
     */
    this.setShapeOn = function ( shape ) {
        // mouse over styling
        shape.on('mouseover', function () {
            document.body.style.cursor = 'pointer';

        });
        // mouse out styling
        shape.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        // make it draggable
        shape.draggable(true);
        var dragStartPos = null;
        var dragLastPos = null;

        // command name based on shape type
        var cmdName = "shape";
        if ( shape instanceof Kinetic.Line ) {
            if ( shape.points().length == 4 ) {
                cmdName = "line";
            }
            else if ( shape.points().length == 6 ) {
                cmdName = "protractor";
            }
            else {
                if (shape.id()=="petitroch") {
                    cmdName = "mesurepetittroch";

                } else {
                    cmdName = "roi";
                }
            }
        }
        else if ( shape instanceof Kinetic.Rect ) {
            cmdName = "rectangle";
        }
        else if ( shape instanceof Kinetic.Ellipse ) {
            cmdName = "ellipse";
        }
        else if (shape instanceof Kinetic.Circle){
            cmdName= "circle";
        }
        // shape colour
        var colour = shape.stroke();

        // drag start event handling
        shape.on('dragstart', function (event) {
            // save start position
            var offset = dwv.html.getEventOffset( event.evt )[0];
            dragStartPos = getRealPosition( offset );
            // display trash
            var stage = app.getDrawStage();
            var scale = stage.scale();
            var invscale = {'x': 1/scale.x, 'y': 1/scale.y};
            trash.x( stage.offset().x + ( 256 / scale.x ) );
            trash.y( stage.offset().y + ( 20 / scale.y ) );
            trash.scale( invscale );
            drawLayer.add( trash );
            // deactivate anchors to avoid events on null shape
            shapeEditor.setAnchorsActive(false);
            // draw
            drawLayer.draw();
        });

        // remove trapeze
        var buttonDeleteTrapeze = document.getElementById("buttonDeleteTrapeze");
        buttonDeleteTrapeze.addEventListener('click',
            function() {

              //  if ( shape instanceof Kinetic.Line ) {
                  if(shape.id()=="trapeze"){

                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "roi", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);
                      sessionStorage.setItem("nbTrapeze", 0);

                  }
               // }
                document.getElementById("buttonDeleteTrapeze").style.display = "none";

            }, false);
        // remove mesure petit troche
        var buttonDeletePetitTroch = document.getElementById("buttonDeletePetitTroch");
        buttonDeletePetitTroch.addEventListener('click',
            function() {
                //  if ( shape instanceof Kinetic.Line ) {
                if(shape.id()=="petitroch"){
                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "mesurepetittroch", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);
                    sessionStorage.setItem("nbPetitTroch", 0);
                }
                // }
                document.getElementById("buttonDeletePetitTroch").style.display = "none";
            }, false);

        // remove circle
        var buttonDeleteCercle = document.getElementById("buttonDeleteCercle");
        buttonDeleteCercle.addEventListener('click',
            function() {

                //  if ( shape instanceof Kinetic.Line ) {
                if(shape.id()=="cercle"){
                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "circle", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);
                    sessionStorage.setItem("nbCercle", 0);

                }
                // }
                document.getElementById("buttonDeleteCercle").style.display = "none";

            }, false);
        var buttonValideInformationPatient = document.getElementById("buttonValideInformationPatient");
        buttonValideInformationPatient.addEventListener('click', function() {
                if(shape.id()=="cercle"){
                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "circle", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);
                    sessionStorage.setItem("nbCercle", 0);
                    sessionStorage.setItem("retour",1);

                }
            }
         );
        var buttonRetourOutilsDessin = document.getElementById("buttonRetourOutilsDessin");
        buttonRetourOutilsDessin.addEventListener('click',
            function() {
                if(shape.id()=="cercle"){

                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "circle", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);

                }
                else  if(shape.id()=="petitroch"){
                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "mesurepetittroch", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);
                }
                else if(shape.id()=="trapeze"){
                    var group = shape.getParent();
                    var delcmd = new dwv.tool.DeleteGroupCommand(group, "roi", drawLayer);
                    delcmd.onExecute = fireEvent;
                    delcmd.onUndo = fireEvent;
                    delcmd.execute();
                    app.addToUndoStack(delcmd);

                }
                //sessionStorage.clear();
                sessionStorage.setItem("calibrage", false);
                sessionStorage.setItem("nbCercle",0);
                sessionStorage.setItem("nbTrapeze", 0);
                sessionStorage.setItem("nbPetitTroch", 0);
                sessionStorage.setItem("retour",0);


            }, false);




        // drag move event handling
        shape.on('dragmove', function (event) {
            var offset = dwv.html.getEventOffset( event.evt )[0];
            var pos = getRealPosition( offset );
            var translation;
            if ( dragLastPos ) {
                translation = {'x': pos.x - dragLastPos.x,
                    'y': pos.y - dragLastPos.y};
            }
            else {
                translation = {'x': pos.x - dragStartPos.x,
                        'y': pos.y - dragStartPos.y};
            }
            dragLastPos = pos;
            // highlight trash when on it
            if ( Math.abs( pos.x - trash.x() ) < 10 &&
                    Math.abs( pos.y - trash.y() ) < 10   ) {
                trash.getChildren().each( function (tshape){ tshape.stroke('orange'); });
                shape.stroke('red');
            }
            else {
                trash.getChildren().each( function (tshape){ tshape.stroke('red'); });
                shape.stroke(colour);
            }
            // update group but not 'this' shape
            var group = this.getParent();
            group.getChildren().each( function (shape) {
                if ( shape === this ) {
                    return;
                }
                shape.x( shape.x() + translation.x );
                shape.y( shape.y() + translation.y );
            });
            // reset anchors
            shapeEditor.resetAnchors();
            // draw
            drawLayer.draw();
        });
        // drag end event handling
        shape.on('dragend', function (/*event*/) {
            var pos = dragLastPos;
            dragLastPos = null;


            //  case
            if ( Math.abs( pos.x - trash.x() ) < 10 &&
                    Math.abs( pos.y - trash.y() ) < 10   ) {
                // compensate for the drag translation
                var delTranslation = {'x': pos.x - dragStartPos.x,
                        'y': pos.y - dragStartPos.y};
                var group = this.getParent();
                group.getChildren().each( function (shape) {

                    shape.x( shape.x() - delTranslation.x );
                    shape.y( shape.y() - delTranslation.y );
                });
                // restore colour
                shape.stroke(colour);
                // disable editor
                shapeEditor.disable();
                shapeEditor.setShape(null);
                shapeEditor.setImage(null);
                document.body.style.cursor = 'default';
                // delete command
                var delcmd = new dwv.tool.DeleteGroupCommand(this.getParent(), cmdName, drawLayer);
                delcmd.onExecute = fireEvent;
                delcmd.onUndo = fireEvent;
                delcmd.execute();
                app.addToUndoStack(delcmd);
            }
            else {
                // save drag move
                var translation = {'x': pos.x - dragStartPos.x,
                        'y': pos.y - dragStartPos.y};
                if ( translation.x !== 0 || translation.y !== 0 ) {
                    if(cmdName == "roi"){
                        if(dragStartPos.x>(sessionStorage.getItem("imageLargeur")/2)){
                            var trapezeAxePosition = JSON.parse(sessionStorage.getItem("trapezeDroitPosition"));
                            var x1 = trapezeAxePosition[0] ;
                            var y1 = trapezeAxePosition[1] ;
                            var x2 = trapezeAxePosition[2] ;
                            var y2 = trapezeAxePosition[2] ;
                            x1 = x1+translation.x;
                            y1 = x1+translation.y;
                            x2 = x2+translation.x;
                            y2 = x2+translation.y;
                            trapezeAxePosition[0] = x1 ;
                            trapezeAxePosition[1] = y1 ;
                            trapezeAxePosition[2] = x2 ;
                            trapezeAxePosition[2] = y2 ;
                            sessionStorage.setItem("trapezeDroitPosition", JSON.stringify(trapezeAxePosition));
                        } else {
                            var trapezeAxePosition = JSON.parse(sessionStorage.getItem("trapezeGauchePosition"));
                            var x1 = trapezeAxePosition[0] ;
                            var y1 = trapezeAxePosition[1] ;
                            var x2 = trapezeAxePosition[2] ;
                            var y2 = trapezeAxePosition[2] ;
                            x1 = x1+translation.x;
                            y1 = x1+translation.y;
                            x2 = x2+translation.x;
                            y2 = x2+translation.y;
                            trapezeAxePosition[0] = x1 ;
                            trapezeAxePosition[1] = y1 ;
                            trapezeAxePosition[2] = x2 ;
                            trapezeAxePosition[2] = y2 ;
                            sessionStorage.setItem("trapezeGauchePosition", JSON.stringify(trapezeAxePosition));
                        }
                    }
                    if (cmdName == "circle") {
                        var calibrage = sessionStorage.getItem("calibrage");
                        if (calibrage == "true") {
                            if (dragStartPos.x>(sessionStorage.getItem("imageLargeur")/2)) {
                                var centrePosition = JSON.parse(sessionStorage.getItem("cercleDroitPosition"));
                                var x = centrePosition[0];
                                var y = centrePosition[1];
                                x = x+translation.x;
                                y = y+translation.y;
                                centrePosition[0] = x ;
                                centrePosition[1] = y ;
                                sessionStorage.setItem("cercleDroitPosition", JSON.stringify(centrePosition));
                            } else {
                                var centrePosition = JSON.parse(sessionStorage.getItem("cercleGauchePosition"));
                                var x = centrePosition[0];
                                var y = centrePosition[1];
                                x = x+translation.x;
                                y = y+translation.y;
                                centrePosition[0] = x ;
                                centrePosition[1] = y ;
                                sessionStorage.setItem("cercleGauchePosition", centrePosition);
                            }
                        }
                    }
                    var mvcmd = new dwv.tool.MoveGroupCommand(this.getParent(), cmdName, translation, drawLayer);
                    mvcmd.onExecute = fireEvent;
                    mvcmd.onUndo = fireEvent;
                    app.addToUndoStack(mvcmd);
                    // the move is handled by kinetic, trigger an event manually
                    fireEvent({'type': 'draw-move'});
                }
                // reset anchors
                shapeEditor.setAnchorsActive(true);
                shapeEditor.resetAnchors();
            }
            // remove trash
            trash.remove();
            // draw
            drawLayer.draw();
        });
    };

    /**
     * Initialise the tool.
     */
    this.init = function() {
        // set the default to the first in the list
        var shapeName = 0;
        for( var key in this.shapeFactoryList ){
            shapeName = key;
            break;
        }
        this.setShapeName(shapeName);
        // init gui
        if ( gui ) {
            // same for colour
            this.setLineColour(gui.getColours()[0]);
            // init html
            gui.initialise();
        }
        return true;
    };

    /**
     * Add an event listener on the app.
     * @param {String} type The event type.
     * @param {Object} listener The method associated with the provided event type.
     */
    this.addEventListener = function (type, listener)
    {
        if ( typeof listeners[type] === "undefined" ) {
            listeners[type] = [];
        }
        listeners[type].push(listener);
    };

    /**
     * Remove an event listener from the app.
     * @param {String} type The event type.
     * @param {Object} listener The method associated with the provided event type.
     */
    this.removeEventListener = function (type, listener)
    {
        if( typeof listeners[type] === "undefined" ) {
            return;
        }
        for ( var i = 0; i < listeners[type].length; ++i )
        {
            if ( listeners[type][i] === listener ) {
                listeners[type].splice(i,1);
            }
        }
    };

    /**
     * Set the line colour of the drawing.
     * @param {String} colour The colour to set.
     */
    this.setLineColour = function (colour)
    {
        app.getStyle().setLineColour(colour);
    };

    // Private Methods -----------------------------------------------------------

    /**
     * Fire an event: call all associated listeners.
     * @param {Object} event The event to fire.
     */
    function fireEvent (event)
    {
        if ( typeof listeners[event.type] === "undefined" ) {
            return;
        }
        for ( var i=0; i < listeners[event.type].length; ++i )
        {
            listeners[event.type][i](event);
        }
    }

}; // Draw class

/**
 * Help for this tool.
 * @return {Object} The help content.
 */
dwv.tool.Draw.prototype.getHelp = function()
{
    return {
        'title': "Draw",
        'brief': "Allows to draw shapes on the image. " +
            "Choose the shape and its colour from the drop down menus. Once created, shapes " +
            "can be edited by selecting them. Anchors will appear and allow specific shape edition. " +
            "Drag the shape on the top red cross to delete it. All actions are undoable. ",
        'mouse': {
            'mouse_drag': "A single mouse drag draws the desired shape.",
        },
        'touch': {
            'touch_drag': "A single touch drag draws the desired shape.",
        }
    };
};

/**
 * Set the shape name of the drawing.
 * @param {String} name The name of the shape.
 */
dwv.tool.Draw.prototype.setShapeName = function(name)
{
    // check if we have it
    if( !this.hasShape(name) )
    {
        throw new Error("Unknown shape: '" + name + "'");
    }
    this.shapeName = name;
};

/**
 * Check if the shape is in the shape list.
 * @param {String} name The name of the shape.
 */
dwv.tool.Draw.prototype.hasShape = function(name) {
    return this.shapeFactoryList[name];
};
