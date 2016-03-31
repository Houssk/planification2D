$(document).ready(function () {

	var patient; // variable de stockage du patient

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

				if (nomPatient.value == "" || nomPatient.value == "Nom") {
					alert("Nom du patient incorrect ou null");
				} else {
					console.log(nomPatient.value);
					if (prenomPatient.value == "" || prenomPatient.value == "Prenom") {
						alert("Prénom du patient incorrect ou null");
					} else {
						console.log(prenomPatient.value);
						if (coteChirurgie.selectedIndex == 0) { // Test si l'option sélectionnée n'est pas l'option par défaut
							alert("Veuillez sélectionner le coté sur le quel vous voulez effectué la chirurgie");
						} else {
							console.log(coteChirurgie.options[coteChirurgie.selectedIndex].value);// Récupère la valeur de l'option sélectionnée
							if (typeChirurgie.selectedIndex == 0) {// Test si l'option sélectionnée n'est pas l'option par défaut
								alert("Veuillez sélectionner le type de chirurgie que vous voulez effectué");
							} else {
								console.log(typeChirurgie.options[typeChirurgie.selectedIndex].value);// Récupère la valeur de l'option sélectionnée
								patient = new Patient(nomPatient.value, 
									prenomPatient.value, 
									typeChirurgie.options[typeChirurgie.selectedIndex].value, 
									"DICOM", // to do DICOM
									coteChirurgie.options[coteChirurgie.selectedIndex].value);
								console.log(patient);
							}
						}
					}
				}

				$('.informationPatient *').prop('disabled',true);
				document.getElementById("informationPatient").style.display = "";
				// to do
				// passage a la boite dessin ou implant
			};
			ValiderPatient()
		},false);
});