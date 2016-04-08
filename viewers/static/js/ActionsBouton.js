/**
* Created by Quentin PETIT on 31/03/2016
**/

$(document).ready(function () {

	var patient = null; // variable de stockage du patient
	var tige = null; // variable de stockage de la tige
	var cotyle = null; // variable de stockage du coyle

	var imgTige = null; // variable de stockage de l'image de la tige
	var imgCotyle = null; // variable de stockage de l'image du cotyle

	var buttonValideInformationPatient = document.getElementById("buttonValideInformationPatient");
	buttonValideInformationPatient.addEventListener('click', 
		function() {
			/**
			*Cette fonction permet de créer un patient après validation des entrées dans la boite de dialogue "Information"
			*
			*@author Quentin PETIT
			*/
			function ValiderPatient(){
				var nomPatient = document.getElementById("nomPatient");
				var prenomPatient = document.getElementById("prenomPatient");
				var coteChirurgie = document.getElementById("coteChirurgie");
				var typeChirurgie = document.getElementById("typeChirurgie");
				var tailleBille = document.getElementById("tailleBille");

				if (nomPatient.value == "" || nomPatient.value == "NOM") {
					alert("Nom du patient incorrect ou null");
				} else {
					console.log(nomPatient.value);
					if (prenomPatient.value == "" || prenomPatient.value == "PRENOM") {
						alert("Prénom du patient incorrect ou null");
					} else {
						console.log(prenomPatient.value);
						if (coteChirurgie.selectedIndex == 0) { // Test si l'option sélectionnée n'est pas l'option par défaut
							alert("Veuillez sélectionner le coté sur le quel vous voulez effectué la chirurgie");
						} else {
							console.log(coteChirurgie.options[coteChirurgie.selectedIndex].value);// Récupère la valeur de l'option sélectionnée
							if (typeChirurgie.selectedIndex == 0) {// Test si l'option sélectionnée n'est pas l'option par défaut
								alert("Veuillez sélectionner le type de chirurgie que vous voulez effectué");
							} else { // Cas ou toute les données entrée sont valides
								console.log(typeChirurgie.options[typeChirurgie.selectedIndex].value);// Récupère la valeur de l'option sélectionnée
								patient = new Patient(nomPatient.value, 
									prenomPatient.value, 
									typeChirurgie.options[typeChirurgie.selectedIndex].value, 
									"DICOM", // to do DICOM
									coteChirurgie.options[coteChirurgie.selectedIndex].value);
								console.log(patient);

								$('.informationPatient *').prop('disabled',true);
								document.getElementById("informationPatient").style.display = "";

								if(patient.GetOperationGuide()=="Guider"){ // Cas ou l'opération est guidée. Active uniquement la boite de dessin.
									$('.outilsDessin *').prop('disabled',false);
									document.getElementById("outilsDessin").style.display = "none";
								}

								if (patient.GetOperationGuide()=="Non guider") { // Cas ou l'opération est non guidée. Active uniquement la boite implant.
									$('.implants *').prop('disabled',false);
									document.getElementById("implants").style.display = "none";
								}
							}
						}
					}
				}
			};
			ValiderPatient()
		},false);

	var buttonDessinTrapeze = document.getElementById("buttonDessinTrapeze");
	buttonDessinTrapeze.addEventListener('click', 
		function() {
			function DessinTrapeze(){
				console.log("dessin trapèze");
				if(sessionStorage.getItem("nbTrapeze")===null){
					sessionStorage.setItem("nbTrapeze", 1);
				}
				DrawShape("Roi");
			};
			DessinTrapeze()
	}, false);

	var buttonDessinCercle = document.getElementById("buttonDessinCercle");
	buttonDessinCercle.addEventListener('click', 
		function() {
			function DessinCercle(){
				console.log("dessin cercle");
				if(sessionStorage.getItem("nbCercle")===null){
					sessionStorage.setItem("nbCercle", 1);
				}
				DrawShape("Circle");
			};
			DessinCercle()
	}, false);

	var buttonDessinPetitTroch = document.getElementById("buttonDessinPetitTroch");
	buttonDessinPetitTroch.addEventListener('click', 
		function() {
			function DessinMesurePetitTroch(){
				console.log("dessin Mesure Petit Troch");
				//if(sessionStorage.getItem("nbCercle")===null){
				//	sessionStorage.setItem("nbCercle", 1);
				//}
				DrawShape("Mesurepetittroch");
			};
			DessinMesurePetitTroch()
	}, false);

	var buttonValideOutilsDessin = document.getElementById("buttonValideOutilsDessin");
	buttonValideOutilsDessin.addEventListener('click', 
		function() {
			function ValiderDessin(){
				// récupération tige et cotyle
				tige=getTige(11);
				cotyle=getCotyle(17);

				//Initialisation des images
				imgTige = new Image;
				imgCotyle = new Image;
				var canvasTige = document.getElementById("canvasTige");
				var m_canvasWidth=900;
				var m_canvasHeight=800;
				canvasTige.width=m_canvasWidth;
				canvasTige.height=m_canvasHeight;
				canvasTige.style.zIndex = "25";
				//var dicomCanvas = document.getElementById("dwv-imageLayer");
				//dicomCanvas.style.zIndex = "80";
				var contexte = document.getElementById("canvasTige").getContext("2d");
				console.log("contexte",contexte)
				imgTige.onload=function () {
					var imgTigeWidth=imgTige.width;
					var imgTigeHeight=imgTige.height;
					tige.Snap(imgTigeWidth, imgTigeHeight, patient);
					contexte.save();
					contexte.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexte.translate(tige.GetPosition().x,tige.GetPosition().y);
					contexte.rotate(tige.GetOrientation());
					contexte.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
					contexte.restore();
				}
				
				
				//Source des images
				imgTige.src=tige.GetUrl();

				contexte.restore();
				imgCotyle.src=cotyle.GetUrl();

				
			};
			ValiderDessin()
	}, false);
});