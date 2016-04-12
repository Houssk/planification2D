/**
* Created by Quentin PETIT on 31/03/2016
**/

$(document).ready(function () {

	var patient = null; // variable de stockage du patient
	var tige = null; // variable de stockage de la tige
	var cotyle = null; // variable de stockage du coyle

	var imgTige = null; // variable de stockage de l'image de la tige
	var imgCotyle = null; // variable de stockage de l'image du cotyle

	var indexTige = 11;
	var indexCotyle = 17;

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
								if (patient.GetOperationGuide()=="Non guider") {
									var newTige=getTige(indexTige);
									imgTige = new Image;
									var canvasTige = document.getElementById("canvasTige");
									var m_canvasWidth=900;
									var m_canvasHeight=800;
									canvasTige.width=m_canvasWidth;
									canvasTige.height=m_canvasHeight;
									canvasTige.style.zIndex = "26";
									var contextetige = canvasTige.getContext("2d");
									console.log("contextetige",contextetige)
									imgTige.onload=function () {
										console.log("imgTige",imgTige)
										var imgTigeWidth=imgTige.width;
										var imgTigeHeight=imgTige.height;
										var dicomCanvas = document.getElementById("dwv-imageLayer");

										//position zéro
										var dicomWidth = sessionStorage.getItem("imageLargeur");
										var dicomHeight = sessionStorage.getItem("imageHauteur");
										var Position = {'x' : dicomCanvas.width/2/*dicomWidth*/, 'y' : dicomCanvas.height/2/*dicomHeight*/};
										
										newTige.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
										tige=newTige;
										contextetige.save();
										contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
										contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
										contextetige.rotate(newTige.GetOrientation());
										contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
										contextetige.restore();
									}
									//Source des images
									imgTige.src=newTige.GetUrl();
								}
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
				var onPeutValider = false;
				if (patient.GetCoteOperation()=="Droit") {
					if(sessionStorage.getItem("cercleGauchePosition")===null||sessionStorage.getItem("trapezeGauchePosition")===null){
						alert("Veuillez tracer un cercle et un trapèze sur la hanche droite du patient");
					} else {
						onPeutValider = true;
					}
				}
				if (patient.GetCoteOperation()=="Gauche") {
					if(sessionStorage.getItem("cercleDroitPosition")===null||sessionStorage.getItem("trapezeDroitPosition")===null){
						alert("Veuillez tracer un cercle et un trapèze sur la hanche gauche du patient");
					} else {
						onPeutValider = true;
					}
				}

				if(onPeutValider==true)
				{
					// récupération tige et cotyle
					tige=getTige(indexTige);
					cotyle=getCotyle(indexCotyle);
					//Initialisation des images
					imgTige = new Image;
					imgCotyle = new Image;
					var canvasTige = document.getElementById("canvasTige");
					var m_canvasWidth=900;
					var m_canvasHeight=800;
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					console.log("contextetige",contextetige)
					imgTige.onload=function () {
						console.log("imgTige",imgTige)
						var imgTigeWidth=imgTige.width;
						var imgTigeHeight=imgTige.height;
						tige.Snap(imgTigeWidth, imgTigeHeight, patient);
						contextetige.save();
						contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contextetige.translate(tige.GetPosition().x,tige.GetPosition().y);
						contextetige.rotate(tige.GetOrientation());
						contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
						contextetige.restore();
					}
					//Source des images
					imgTige.src=tige.GetUrl();
					//contexte.restore();

					var canvasCotyle = document.getElementById("canvasCotyle");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "25";
					var contextecotyle = canvasCotyle.getContext("2d");
					console.log("contextecotyle",contextecotyle)

					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						cotyle.Snap(imgCotyleWidth, imgCotyleHeight, tige.GetOrientation(), tige.GetCoeffRedimensionnement(), patient);
						contextecotyle.save();
						contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contextecotyle.translate(cotyle.GetPosition().x,cotyle.GetPosition().y);
						contextecotyle.rotate(tige.GetOrientation());
						contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyle.GetImageLargeur() / 2, -cotyle.GetImageHauteur() / 2, cotyle.GetImageLargeur(), cotyle.GetImageHauteur());
						contextecotyle.restore();
					}
					imgCotyle.src=cotyle.GetUrl();
					$('.implants *').prop('disabled',false);
					document.getElementById("implants").style.display = "none";
					$('.outilsDessin *').prop('disabled',true);
					document.getElementById("outilsDessin").style.display = "";

					document.getElementById('labelTailleTige').innerHTML = tige.GetNom();
					document.getElementById('labelTailleCotyle').innerHTML = cotyle.GetNom();
				}
			};
			ValiderDessin()
	}, false);

	var buttonRetourOutilsDessin = document.getElementById("buttonRetourOutilsDessin");
	buttonRetourOutilsDessin.addEventListener('click', 
		function() {
			function RetourDessin(){
				// Nettoyage du canvas tige
				var canvasTige = document.getElementById("canvasTige");
				var contextetige = canvasTige.getContext("2d");
				contextetige.save();
				contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
				contextetige.restore();

				// Nettoyage du canvas cotyle
				var canvasCotyle = document.getElementById("canvasCotyle");
				var contextecotyle = canvasCotyle.getContext("2d");
				contextecotyle.save();
				contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
				contextecotyle.restore();

				//Mise a zéro du session.storage
				sessionStorage.removeItem("nbCercle");
				sessionStorage.removeItem("nbTrapeze");
				sessionStorage.removeItem("cercleGauchePosition");
				sessionStorage.removeItem("cercleDroitPosition");
				sessionStorage.removeItem("trapezeGauchePosition");
				sessionStorage.removeItem("trapezeDroitPosition");

				$('.outilsDessin *').prop('disabled',true);
				document.getElementById("outilsDessin").style.display = "";

				$('.informationPatient *').prop('disabled',false);
				document.getElementById("informationPatient").style.display = "none";
			};
			RetourDessin()
	}, false);

	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click', 
		function() {
			function PlusTailleTige(){
				if (indexTige+1>16) {
					indexTige=9;
				} else {
					indexTige++;
				}
				var coteTige = document.getElementById("coteTige");
				if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {//Tige coté gauche
					if (patient.GetCoteOperation()=="Gauche") {//Opération coté gauche
						if (patient.GetOperationGuide()=="Guider") {//Opération guider
							tige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								tige.Snap(imgTigeWidth, imgTigeHeight, patient);
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(tige.GetPosition().x,tige.GetPosition().y);
								contextetige.rotate(tige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=tige.GetUrl();
						} else {//Opération non guider
							var newTige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
								tige=newTige;
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
								contextetige.rotate(newTige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=newTige.GetUrl();
							
						}
					} else {//Opération coté droit
						var newTige=getTige(indexTige);
						imgTige = new Image;
						var canvasTige = document.getElementById("canvasTige");
						var m_canvasWidth=900;
						var m_canvasHeight=800;
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex = "26";
						var contextetige = canvasTige.getContext("2d");
						console.log("contextetige",contextetige)
						imgTige.onload=function () {
							console.log("imgTige",imgTige)
							var imgTigeWidth=imgTige.width;
							var imgTigeHeight=imgTige.height;
							newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
							tige=newTige; 
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
							contextetige.rotate(newTige.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
							contextetige.restore();
						}
						//Source des images
						imgTige.src=newTige.GetUrl();
						
					}
				} else { //Tige coté droit
					if (patient.GetCoteOperation()=="Droit") {
						if (patient.GetOperationGuide()=="Guider") {//Opération guider
							tige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								tige.Snap(imgTigeWidth, imgTigeHeight, patient);
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(tige.GetPosition().x,tige.GetPosition().y);
								contextetige.rotate(tige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=tige.GetUrl();
						} else {//Opération non guider
							var newTige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
								tige=newTige;
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
								contextetige.rotate(newTige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=newTige.GetUrl();
							
						}
					} else {
						var newTige=getTige(indexTige);
						imgTige = new Image;
						var canvasTige = document.getElementById("canvasTige");
						var m_canvasWidth=900;
						var m_canvasHeight=800;
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex = "26";
						var contextetige = canvasTige.getContext("2d");
						console.log("contextetige",contextetige)
						imgTige.onload=function () {
							console.log("imgTige",imgTige)
							var imgTigeWidth=imgTige.width;
							var imgTigeHeight=imgTige.height;
							newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
							tige=newTige;
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
							contextetige.rotate(newTige.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
							contextetige.restore();
						}
						//Source des images
						imgTige.src=newTige.GetUrl();
						 
					}
				}
				document.getElementById('labelTailleTige').innerHTML = tige.GetNom();
			};
			PlusTailleTige()
	}, false);

	var buttonMoinsTige = document.getElementById("buttonMoinsTige");
	buttonMoinsTige.addEventListener('click', 
		function() {
			function MoinsTailleTige(){
				if (indexTige-1<9) {
					indexTige=16;
				} else {
					indexTige--;
				}
				var coteTige = document.getElementById("coteTige");
				if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {//Tige coté gauche
					if (patient.GetCoteOperation()=="Gauche") {//Opération coté gauche
						if (patient.GetOperationGuide()=="Guider") {//Opération guider
							tige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								tige.Snap(imgTigeWidth, imgTigeHeight, patient);
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(tige.GetPosition().x,tige.GetPosition().y);
								contextetige.rotate(tige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=tige.GetUrl();
						} else {//Opération non guider
							var newTige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
								tige=newTige;
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
								contextetige.rotate(newTige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=newTige.GetUrl();
							
						}
					} else {//Opération coté droit
						var newTige=getTige(indexTige);
						imgTige = new Image;
						var canvasTige = document.getElementById("canvasTige");
						var m_canvasWidth=900;
						var m_canvasHeight=800;
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex = "26";
						var contextetige = canvasTige.getContext("2d");
						console.log("contextetige",contextetige)
						imgTige.onload=function () {
							console.log("imgTige",imgTige)
							var imgTigeWidth=imgTige.width;
							var imgTigeHeight=imgTige.height;
							newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
							tige=newTige; 
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
							contextetige.rotate(newTige.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
							contextetige.restore();
						}
						//Source des images
						imgTige.src=newTige.GetUrl();
						
					}
				} else { //Tige coté droit
					if (patient.GetCoteOperation()=="Droit") {
						if (patient.GetOperationGuide()=="Guider") {//Opération guider
							tige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								tige.Snap(imgTigeWidth, imgTigeHeight, patient);
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(tige.GetPosition().x,tige.GetPosition().y);
								contextetige.rotate(tige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tige.GetImageLargeur() / 2, -tige.GetImageHauteur() / 2, tige.GetImageLargeur(), tige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=tige.GetUrl();
						} else {//Opération non guider
							var newTige=getTige(indexTige);
							imgTige = new Image;
							var canvasTige = document.getElementById("canvasTige");
							var m_canvasWidth=900;
							var m_canvasHeight=800;
							canvasTige.width=m_canvasWidth;
							canvasTige.height=m_canvasHeight;
							canvasTige.style.zIndex = "26";
							var contextetige = canvasTige.getContext("2d");
							console.log("contextetige",contextetige)
							imgTige.onload=function () {
								console.log("imgTige",imgTige)
								var imgTigeWidth=imgTige.width;
								var imgTigeHeight=imgTige.height;
								newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
								tige=newTige;
								contextetige.save();
								contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
								contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
								contextetige.rotate(newTige.GetOrientation());
								contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
								contextetige.restore();
							}
							//Source des images
							imgTige.src=newTige.GetUrl();
							
						}
					} else {
						var newTige=getTige(indexTige);
						imgTige = new Image;
						var canvasTige = document.getElementById("canvasTige");
						var m_canvasWidth=900;
						var m_canvasHeight=800;
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex = "26";
						var contextetige = canvasTige.getContext("2d");
						console.log("contextetige",contextetige)
						imgTige.onload=function () {
							console.log("imgTige",imgTige)
							var imgTigeWidth=imgTige.width;
							var imgTigeHeight=imgTige.height;
							newTige.Placement(imgTigeWidth, imgTigeHeight, tige.GetPosition(), tige.GetOrientation());
							tige=newTige;
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
							contextetige.rotate(newTige.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
							contextetige.restore();
						}
						//Source des images
						imgTige.src=newTige.GetUrl();
						 
					}
				}
				document.getElementById('labelTailleTige').innerHTML = tige.GetNom();
			};
			MoinsTailleTige()
	}, false);
});