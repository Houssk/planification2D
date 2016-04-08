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

function getTige(id) {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	xhr.open("GET", 'php/getTigeById.php?idTige='+id+'', false);
    xhr.send(null);
    xhr.responseText;
    var docXML= xhr.responseXML;
    var tigeIdBDD = docXML.getElementsByTagName("id");
    var tigeUrlBDD = docXML.getElementsByTagName("url");
    var tigeDistOffsetXBDD = docXML.getElementsByTagName("distOffsetX");
    var tigeWidthPxBDD = docXML.getElementsByTagName("widthPx");
    var tigeWidthCmBDD = docXML.getElementsByTagName("widthCm");
	var tigeHeightPxBDD = docXML.getElementsByTagName("heightPx");
    var tigeHeightCmBDD = docXML.getElementsByTagName("heightCm");

    var tigeId = tigeIdBDD.item(0).firstChild.data;
    var tigeUrl = tigeUrlBDD.item(0).firstChild.data;
    var tigeDistOffsetX = tigeDistOffsetXBDD.item(0).firstChild.data;
    var tigeWidthPx = tigeWidthPxBDD.item(0).firstChild.data;
    var tigeWidthCm = tigeWidthCmBDD.item(0).firstChild.data;
	var tigeHeightPx = tigeHeightPxBDD.item(0).firstChild.data;
    var tigeHeightCm = tigeHeightCmBDD.item(0).firstChild.data;

    var tige = new Tige(tigeId,tigeUrl,tigeDistOffsetX,tigeWidthPx,tigeWidthCm,tigeHeightPx,tigeHeightCm);

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

function getCotyle(id) {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	xhr.open("GET", 'php/getCotyleById.php?idCotyle='+id+'', false);
    xhr.send(null);
    xhr.responseText;
    var docXML= xhr.responseXML;
    var cotyleIdBDD = docXML.getElementsByTagName("id");
    var cotyleUrlBDD = docXML.getElementsByTagName("url");

    var cotyleId = cotyleIdBDD.item(0).firstChild.data;
    var cotyleUrl = cotyleUrlBDD.item(0).firstChild.data;
    
    var cotyle = new Cotyle(cotyleId,cotyleUrl);

    return cotyle;
}