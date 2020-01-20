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
    var tigeTailleBDD = docXML.getElementsByTagName("taille");

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
    var tigeTaille = tigeTailleBDD.item(0).firstChild.data;

    var tige = new Tige(tigeId,tigeNom,tigeUrl,tigeDistOffsetX,tigeWidthPx,tigeWidthCm,tigeHeightPx,tigeHeightCm,tigePtMecaHautXPx,tigePtMecaHautYPx,tigeTaille);

    return tige;
}

/**
*Cette fonction retourne une tige créée avec les informations de la base de données
*
*@param     size      Taille de la tige souhaitée
*
*@return    tige    Tige créée avec les informations de la base de données
*
*@author Quentin PETIT
*/

function getTigeBySize(table, size, cote) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    xhr.open("GET", 'php/getTigeBySize.php?sizeTige='+size+'&tableTige='+table+'&coteTige='+cote+'', false);
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
    var tigeTailleBDD = docXML.getElementsByTagName("taille");

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
    var tigeTaille = tigeTailleBDD.item(0).firstChild.data;

    var tige = new Tige(tigeId,tigeNom,tigeUrl,tigeDistOffsetX,tigeWidthPx,tigeWidthCm,tigeHeightPx,tigeHeightCm,tigePtMecaHautXPx,tigePtMecaHautYPx,tigeTaille);

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
    var tailleCotyleBDD = docXML.getElementsByTagName("taille");

    var cotyleId = cotyleIdBDD.item(0).firstChild.data;
    var cotyleNom = cotyleNomBDD.item(0).firstChild.data;
    var cotyleUrl = cotyleUrlBDD.item(0).firstChild.data;
    var widthPxCotyle = widthPxCotyleBDD.item(0).firstChild.data;
    var widthCmCotyle = widthCmCotyleBDD.item(0).firstChild.data;
    var heightPxCotyle = heightPxCotyleBDD.item(0).firstChild.data;
    var heightCmCotyle = heightCmCotyleBDD.item(0).firstChild.data;
    var tailleCotyle = tailleCotyleBDD.item(0).firstChild.data;
    var cotyle = new Cotyle(cotyleId,cotyleNom,cotyleUrl,widthPxCotyle,widthCmCotyle,heightPxCotyle,heightCmCotyle,tailleCotyle);

    return cotyle;
}

/**
*Cette fonction retourne un cotyle créé avec les informations de la base de données
*
*@param     size      Taille  de la cotyle souhaitée
*
*@return    cotyle  cotyle créé avec les informations de la base de données
*
*@author Quentin PETIT
*/

function getCotyleBySize(table, size, cote) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    xhr.open("GET", 'php/getCotyleBySize.php?sizeCotyle='+size+'&tableCotyle='+table+'&coteCotyle='+cote+'', false);
    xhr.send(null);
    xhr.responseText;
    var docXML= xhr.responseXML,
        cotyleIdBDD = docXML.getElementsByTagName("id"),
        cotyleNomBDD = docXML.getElementsByTagName("nom"),
        cotyleUrlBDD = docXML.getElementsByTagName("url"),
        widthPxCotyleBDD = docXML.getElementsByTagName("sizeXPx"),
        widthCmCotyleBDD = docXML.getElementsByTagName("sizeXCm"),
        heightPxCotyleBDD = docXML.getElementsByTagName("sizeYPx"),
        heightCmCotyleBDD = docXML.getElementsByTagName("sizeYCm"),
        tailleCotyleBDD = docXML.getElementsByTagName("taille"),

        cotyleId = cotyleIdBDD.item(0).firstChild.data,
        cotyleNom = cotyleNomBDD.item(0).firstChild.data,
        cotyleUrl = cotyleUrlBDD.item(0).firstChild.data,
        widthPxCotyle = widthPxCotyleBDD.item(0).firstChild.data,
        widthCmCotyle = widthCmCotyleBDD.item(0).firstChild.data,
        heightPxCotyle = heightPxCotyleBDD.item(0).firstChild.data,
        heightCmCotyle = heightCmCotyleBDD.item(0).firstChild.data,
        tailleCotyle = tailleCotyleBDD.item(0).firstChild.data,
        cotyle = new Cotyle(cotyleId,cotyleNom,cotyleUrl,widthPxCotyle,widthCmCotyle,heightPxCotyle,heightCmCotyle,tailleCotyle)
    ;

    return cotyle;
}
function desactivationListe() {

    if (document.getElementById("RadioOuiHanche").checked) {
        var coteCotyleDisplay = document.getElementById("coteCotyleDisplay"),
            coteTigeDisplay = document.getElementById("coteTigeDisplay")
        ;
        coteCotyleDisplay.style.display = "none";
        coteTigeDisplay.style.display = "none";
    }
}




//Draggable elements
function createDraggable(draggableElementScope, canvasID){
    let target = $(draggableElementScope),
        timedDissabling,
        timerInitialized = false
    ;
    target.draggable({
        disabled: true,
        drag: function(){
            let canvasOffset = $(canvasID).offset(),
                // Offset permet d'enregistrer le déplacement
                offsetX = canvasOffset.left,
                offsetY = canvasOffset.top
            ;
            if (timerInitialized){
                clearTimeout(timedDissabling);
            }
        },
        stop: function () {
            timedDissabling = setTimeout(disableAllDraggable, 1500);
            timerInitialized = true;
        }
    });
    target.draggable( "option", "disabled", true );
    $("body").droppable({
        accept: ".draggable"
    });
}
function activateThisDraggable(draggableElementScope){
    disableAllDraggable();
    $(draggableElementScope).draggable( "enable" );
    $(draggableElementScope).addClass("isDraggable");
}

function disableAllDraggable(){
    let draggableElement = $(".isDraggable"),
        divDeplacer = $(".divDeplacer");
    if (draggableElement){
        draggableElement.draggable( "option", "disabled", true );
    }
    divDeplacer.removeClass("activeBtn");
}



//
// function draggerTigeDroit (value){
//     let tigeDraggableDroit = $( ".tigeDraggableDroit" );
//     console.log("draggerTigeDroit value = " + value);
//     tigeDraggableDroit.draggable({
//         disabled: value,
//         drag: function(){
//             var canvasOffset = $('#canvasTigeDroit').offset(),//$('#'+canvas.id+'').offset();
//                 // Offset permet d'enregistrer le déplacement
//                 offsetX = canvasOffset.left,
//                 offsetY = canvasOffset.top;
//         }
//     });
//     tigeDraggableDroit.draggable( "option", "disabled", value );
//     $("body").droppable({
//         accept: ".draggable"
//     });
//
//     dragDissableListener(tigeDraggableDroit);
//
//
// }
// function draggerTigeGauche (value){
//     let tigeDraggableGauche = $( ".tigeDraggableGauche" );
//     console.log("draggerTigeGauche value = " + value);
//     tigeDraggableGauche.draggable({
//         disabled: value,
//         drag: function(){
//             var canvasOffset = $('#canvasTigeGauche').offset(),//$('#'+canvas.id+'').offset();
//                 // Offset permet d'enregistrer le déplacement
//                 offsetX = canvasOffset.left,
//                 offsetY = canvasOffset.top;
//         }
//     });
//     tigeDraggableGauche.draggable( "option", "disabled", value );
//     $("body").droppable({
//         accept: ".draggable"
//     });
//
//     dragDissableListener(tigeDraggableGauche);
// }
//
// function draggerCotyleDroit (value){
//     let cotyleDraggableDroit = $( ".cotyleDraggableDroit" );
//     console.log("draggerCotyleDroit value = " + value);
//     cotyleDraggableDroit.draggable({
//         disabled: value,
//         drag: function(){
//             var canvasOffset = $('#canvasCotyleDroit').offset(),//$('#'+canvas.id+'').offset();
//             // Offset permet d'enregistrer le déplacement
//                 offsetX = canvasOffset.left,
//                 offsetY = canvasOffset.top;
//         }
//     });
//     cotyleDraggableDroit.draggable( "option", "disabled", value );
//     $("body").droppable({
//         accept: ".draggable"
//     });
//
//     dragDissableListener(cotyleDraggableDroit);
// }
// function draggerCotyleGauche (value){
//     let cotyleDraggableGauche = $( ".cotyleDraggableGauche" );
//     console.log("draggerCotyleGauche value = " + value);
//     cotyleDraggableGauche.draggable({
//         disabled: value,
//         drag: function(){
//             var canvasOffset = $('#canvasCotyleGauche').offset(),//$('#'+canvas.id+'').offset();
//             // Offset permet d'enregistrer le déplacement
//                 offsetX = canvasOffset.left,
//                 offsetY = canvasOffset.top;
//         }
//     });
//     cotyleDraggableGauche.draggable( "option", "disabled", value );
//     $("body").droppable({
//         accept: ".draggable"
//     });
//
//     dragDissableListener(cotyleDraggableGauche);
// }

/**
*Cette fonction récupère les différentes taille de la dicom
*
*@author Quentin PETIT
*/
function getValeursImage() {
    var dicomCanvas = document.getElementById("dwv-imageLayer"),
        // Taille de l'image réelle
        widthImageReelle = sessionStorage.getItem("imageLargeur"),
        heightImageReelle = sessionStorage.getItem("imageHauteur"),
        // Taille de l'image affichée à l'écran
        widthImageCanvas = dicomCanvas.width,
        heightImageCanvas = dicomCanvas.height
    ;

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
    var coefWidthImage = image.widthImageCanvas / image.widthImageReelle,
        coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

    return {
        coefWidth : coefWidthImage, 
        coefHeight : coefHeightImage
    };
}

$(document).ready(function () {
    $('input[type="button"]').click(function(){
        $('input[type="button"].activeBtn').removeClass('activeBtn')
        $(this).addClass('activeBtn');
    });
    $('input[type="image"]').click(function(){
        $('input[type="image"].activeBtn').removeClass('activeBtn')
        $(this).addClass('activeBtn');
    });
});