/**
* Created by Quentin PETIT on 01/04/2016
**/

/**
*Cette fonction bloque les accès aux boites de dessin et implant
*
*@author Quentin PETIT
*/
function VerrouillageBoiteDialogue() {
	$('.outilsDessin *').prop('disabled',true);
	$('.implants *').prop('disabled',true);
}

/**
*Cette fonction retourne une tige créée avec les informations de la base de données
*
*@param 	id 		Identifiant de la tige souhaitée
*
*@return 	tige 	Tige créée avec les informations de la base de données
*
*@author Quentin PETIT
*/

function getTige(table, id) {
    console.log("getTige");
    console.log("table",table,"id",id);
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	xhr.open("GET", 'php/getTigeById.php?idTige='+id+'&tableTige='+table+'', false);
    xhr.send(null);
    xhr.responseText;
    var docXML= xhr.responseXML;
    var tigeIdBDD = docXML.getElementsByTagName("id");
    var tigeNomBDD = docXML.getElementsByTagName("nom");
    var tigeUrlBDD = docXML.getElementsByTagName("url");
    var tigeDistOffsetXBDD = docXML.getElementsByTagName("distOffsetX");
    var tigeWidthPxBDD = docXML.getElementsByTagName("widthPx");
    var tigeWidthCmBDD = docXML.getElementsByTagName("widthCm");
	var tigeHeightPxBDD = docXML.getElementsByTagName("heightPx");
    var tigeHeightCmBDD = docXML.getElementsByTagName("heightCm");
    var tigePtMecaHautXPxBDD = docXML.getElementsByTagName("PtMecaHautXPx");
    var tigePtMecaHautYPxBDD = docXML.getElementsByTagName("PtMecaHautYPx");

    var tigeId = tigeIdBDD.item(0).firstChild.data;
    var tigeNom = tigeNomBDD.item(0).firstChild.data;
    var tigeUrl = tigeUrlBDD.item(0).firstChild.data;
    var tigeDistOffsetX = tigeDistOffsetXBDD.item(0).firstChild.data;
    var tigeWidthPx = tigeWidthPxBDD.item(0).firstChild.data;
    var tigeWidthCm = tigeWidthCmBDD.item(0).firstChild.data;
	var tigeHeightPx = tigeHeightPxBDD.item(0).firstChild.data;
    var tigeHeightCm = tigeHeightCmBDD.item(0).firstChild.data;
    var tigePtMecaHautXPx = tigePtMecaHautXPxBDD.item(0).firstChild.data;
    var tigePtMecaHautYPx = tigePtMecaHautYPxBDD.item(0).firstChild.data;

    var tige = new Tige(tigeId,tigeNom,tigeUrl,tigeDistOffsetX,tigeWidthPx,tigeWidthCm,tigeHeightPx,tigeHeightCm,tigePtMecaHautXPx,tigePtMecaHautYPx);

    return tige;
}

/**
*Cette fonction retourne un cotyle créé avec les informations de la base de données
*
*@param 	id 		Identifiant de la cotyle souhaitée
*
*@return 	cotyle 	cotyle créé avec les informations de la base de données
*
*@author Quentin PETIT
*/

function getCotyle(table, id) {
    console.log("getCotyle");
    console.log("table",table,"id",id);
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	xhr.open("GET", 'php/getCotyleById.php?idCotyle='+id+'&tableCotyle='+table+'', false);
    xhr.send(null);
    xhr.responseText;
    var docXML= xhr.responseXML;
    var cotyleIdBDD = docXML.getElementsByTagName("id");
    var cotyleNomBDD = docXML.getElementsByTagName("nom");
    var cotyleUrlBDD = docXML.getElementsByTagName("url");
    var widthPxCotyleBDD = docXML.getElementsByTagName("sizeXPx");
    var widthCmCotyleBDD = docXML.getElementsByTagName("sizeXCm");
    var heightPxCotyleBDD = docXML.getElementsByTagName("sizeYPx");
    var heightCmCotyleBDD = docXML.getElementsByTagName("sizeYCm");

    var cotyleId = cotyleIdBDD.item(0).firstChild.data;
    var cotyleNom = cotyleNomBDD.item(0).firstChild.data;
    var cotyleUrl = cotyleUrlBDD.item(0).firstChild.data;
    var widthPxCotyle = widthPxCotyleBDD.item(0).firstChild.data;
    var widthCmCotyle = widthCmCotyleBDD.item(0).firstChild.data;
    var heightPxCotyle = heightPxCotyleBDD.item(0).firstChild.data;
    var heightCmCotyle = heightCmCotyleBDD.item(0).firstChild.data;
    
    console.log("cotyleUrl",cotyleUrl);
    var cotyle = new Cotyle(cotyleId,cotyleNom,cotyleUrl,widthPxCotyle,widthCmCotyle,heightPxCotyle,heightCmCotyle);

    return cotyle;
}

function desactivationListe() {

    if (document.getElementById("RadioOuiHanche").checked) {
        var coteCotyleDisplay = document.getElementById("coteCotyleDisplay");
        var coteTigeDisplay = document.getElementById("coteTigeDisplay");
        coteCotyleDisplay.style.display = "none";
        coteTigeDisplay.style.display = "none";
    }
}

function draggerTigeDroit (value){
    $( ".tigeDraggableDroit" ).draggable({
        disabled: value,
        drag: function(){
            var canvasOffset = $('#canvasTigeDroit').offset();//$('#'+canvas.id+'').offset();
            // Offset permet d'enregistrer le déplacement
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;
        }
    });
    $( ".tigeDraggableDroit" ).draggable( "option", "disabled", value );
    $("body").droppable({
        accept: ".draggable"
    });
}
function draggerTigeGauche (value){
    $( ".tigeDraggableGauche" ).draggable({
        disabled: value,
        drag: function(){
            var canvasOffset = $('#canvasTigeGauche').offset();//$('#'+canvas.id+'').offset();
            // Offset permet d'enregistrer le déplacement
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;
        }
    });
    $( ".tigeDraggableGauche" ).draggable( "option", "disabled", value );
    $("body").droppable({
        accept: ".draggable"
    });
}

function draggerCotyleDroit (value){
    $( ".cotyleDraggableDroit" ).draggable({
        disabled: value,
        drag: function(){
            var canvasOffset = $('#canvasCotyleDroit').offset();//$('#'+canvas.id+'').offset();
            // Offset permet d'enregistrer le déplacement
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;
        }
    });
    $( ".cotyleDraggableDroit" ).draggable( "option", "disabled", value );
    $("body").droppable({
        accept: ".draggable"
    });
}
function draggerCotyleGauche (value){
    $( ".cotyleDraggableGauche" ).draggable({
        disabled: value,
        drag: function(){
            var canvasOffset = $('#canvasCotyleGauche').offset();//$('#'+canvas.id+'').offset();
            // Offset permet d'enregistrer le déplacement
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;
        }
    });
    $( ".cotyleDraggableGauche" ).draggable( "option", "disabled", value );
    $("body").droppable({
        accept: ".draggable"
    });
}

//console.log("patient",patient);
/**
*Cette fonction récupère les différentes taille de la dicom
*
*@author Quentin PETIT
*/
function getValeursImage() {
    var dicomCanvas = document.getElementById("dwv-imageLayer");

    // Taille de l'image réelle
    var widthImageReelle = sessionStorage.getItem("imageLargeur");
    var heightImageReelle = sessionStorage.getItem("imageHauteur");

    // Taille de l'image affichée à l'écran
    var widthImageCanvas = dicomCanvas.width;
    var heightImageCanvas = dicomCanvas.height;

    return {
        widthImageReelle : widthImageReelle, 
        heightImageReelle : heightImageReelle, 
        widthImageCanvas : widthImageCanvas, 
        heightImageCanvas : heightImageCanvas
    };
}

/**
*Cette fonction calul les facteurs de redimensionnement de la dicom
*
*@author Quentin PETIT
*/
function facteurRedimensionnementImage() {
    // On récupère les valeurs de l'image affichée et de l'image réelle
    var image = getValeursImage();

    // Calcul du coefficient réducteur de l'image
    var coefWidthImage = image.widthImageCanvas / image.widthImageReelle;
    var coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

    return {
        coefWidth : coefWidthImage, 
        coefHeight : coefHeightImage
    };
}