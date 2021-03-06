/**
 * Application launcher.
 */

// check browser support
dwv.browser.check();

// launch when page is loaded
$(document).ready( function()
{
    // gui setup
    dwv.gui.setup();

    // main application
    var myapp = new dwv.App();
    // initialise the application
    myapp.init({
        "containerDivId": "dwv",
        "fitToWindow": true,
        "gui": ["tool", "load", "help", "undo", "version", "tags"],
        "loaders": ["File", "Url"],
        "tools": [ "Zoom/Pan","Scroll", "Window/Level", "Draw", "Livewire", "Filter"],
        "filters": ["Threshold", "Sharpen", "Sobel"],
        "shapes": ["Cercle","Line", "Protractor", "Rectangle", "Roi", "Ellipse", "Mesure Petit Troch"],
        "isMobile": false
    });

    // help
    // TODO Seems accordion only works when at end...
    $("#accordion").accordion({ collapsible: "true", active: "false", heightStyle: "content" });
});
