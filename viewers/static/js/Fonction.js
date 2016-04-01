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