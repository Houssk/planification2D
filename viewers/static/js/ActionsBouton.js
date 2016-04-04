/**
* Created by Quentin PETIT on 31/03/2016
**/

$(document).ready(function () {

	var patient = null; // variable de stockage du patient
	var nbTrapeze = 0;
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
});