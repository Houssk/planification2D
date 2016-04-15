/**
* Created by Quentin PETIT on 31/03/2016
**/

$(document).ready(function () {

	var patient = null; // variable de stockage du patient
	var tigeGauche = null; // variable de stockage de la tige gauche
	var cotyleGauche = null; // variable de stockage du coyle gauche
	var tigeDroit = null; // variable de stockage de la tige droit
	var cotyleDroit = null; // variable de stockage du coyle droit

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
									var newTigeGauche=getTige(indexTige+8);
									var newTigeDroit=getTige(indexTige);
									var newTige=null;
									var newCotyleGauche=getCotyle(indexCotyle+17);
									var newCotyleDroit=getCotyle(indexCotyle);
									var newCotyle=null;
									var canvasTige=null;
									var canvasCotyle = null;
									imgTige = new Image;
									imgCotyle = new Image;
									if (patient.GetCoteOperation()=="Gauche") {
										canvasTige = document.getElementById("canvasTigeDroit");
										canvasCotyle = document.getElementById("canvasCotyleDroit");
									} else {
										canvasTige = document.getElementById("canvasTigeGauche");
										canvasCotyle = document.getElementById("canvasCotyleGauche");
									}
									var m_canvasWidth=900;
									var m_canvasHeight=800;
									canvasTige.width=m_canvasWidth;
									canvasTige.height=m_canvasHeight;
									canvasTige.style.zIndex = "26";
									var contextetige = canvasTige.getContext("2d");
									canvasCotyle.width=m_canvasWidth;
									canvasCotyle.height=m_canvasHeight;
									canvasCotyle.style.zIndex = "27";
									var contextecotyle = canvasCotyle.getContext("2d");
									//console.log("contextetige",contextetige)
									imgTige.onload=function () {
										console.log("imgTige",imgTige);
										var imgTigeWidth=imgTige.width;
										var imgTigeHeight=imgTige.height;
										var dicomCanvas = document.getElementById("dwv-imageLayer");

										//position zéro
										var dicomWidth = sessionStorage.getItem("imageLargeur");
										var dicomHeight = sessionStorage.getItem("imageHauteur");
										var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
										
										newTigeGauche.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
										newTigeDroit.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
										tigeGauche=newTigeGauche;
										tigeDroit=newTigeDroit;

										//console.log("newTige",newTige);
										//console.log("tigeGauche",tigeGauche);
										//console.log("tigeDroit",tigeDroit);
										if (patient.GetCoteOperation()=="Gauche") {
											newTige=newTigeDroit;
										} else {
											newTige=newTigeGauche;
										}
										contextetige.save();
										contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
										contextetige.translate(newTige.GetPosition().x,newTige.GetPosition().y);
										contextetige.rotate(newTige.GetOrientation());
										contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
										contextetige.restore();
										console.log("newTige",newTige);
									}
									//Source des images
									if (patient.GetCoteOperation()=="Gauche") {
										imgTige.src=newTigeDroit.GetUrl();
										//console.log("newTigeDroit.GetUrl()",newTigeDroit.GetUrl());
									} else {
										imgTige.src=newTigeGauche.GetUrl();
										//console.log("newTigeGauche.GetUrl()",newTigeGauche.GetUrl());
									}

									imgCotyle.onload=function () {
										console.log("imgCotyle",imgCotyle);
										var imgCotyleWidth=imgCotyle.width;
										var imgCotyleHeight=imgCotyle.height;
										var dicomCanvas = document.getElementById("dwv-imageLayer");

										//position zéro
										var dicomWidth = sessionStorage.getItem("imageLargeur");
										var dicomHeight = sessionStorage.getItem("imageHauteur");
										var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
										
										newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, Position, 0);
										newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, Position, 0);
										cotyleGauche=newCotyleGauche;
										cotyleDroit=newCotyleDroit;

										//console.log("newTige",newTige);
										//console.log("tigeGauche",tigeGauche);
										//console.log("tigeDroit",tigeDroit);
										if (patient.GetCoteOperation()=="Gauche") {
											newCotyle=newCotyleDroit;
										} else {
											newCotyle=newCotyleGauche;
										}
										contextecotyle.save();
										contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
										contextecotyle.translate(newCotyle.GetPosition().x,newCotyle.GetPosition().y);
										contextecotyle.rotate(0);
										contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyle.GetImageLargeur() / 2, -newCotyle.GetImageHauteur() / 2, newCotyle.GetImageLargeur(), newCotyle.GetImageHauteur());
										contextecotyle.restore();
										console.log("load img cotyleDroit");
									}
									//Source des images
									if (patient.GetCoteOperation()=="Gauche") {
										imgCotyle.src=newCotyleDroit.GetUrl();
									} else {
										imgCotyle.src=newCotyleGauche.GetUrl();
									}	
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
					tigeDroit = getTige(indexTige);
					cotyleDroit = getCotyle(indexCotyle);
					tigeGauche = getTige(indexTige+8);
					cotyleGauche = getCotyle(indexCotyle+17);
					
					//Initialisation des images
					imgTige = new Image;
					imgCotyle = new Image;
					var canvasTige=null;
					if (patient.GetCoteOperation()=="Gauche") {
						canvasTige = document.getElementById("canvasTigeDroit");
					} else {
						canvasTige = document.getElementById("canvasTigeGauche");
					}
					console.log("canvasTige.id",canvasTige.id);
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
						if (patient.GetCoteOperation()=="Gauche") {
							tigeDroit.Snap(imgTigeWidth, imgTigeHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
							contextetige.rotate(tigeDroit.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							tigeGauche.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
						} else {
							tigeGauche.Snap(imgTigeWidth, imgTigeHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
							contextetige.rotate(tigeGauche.GetOrientation());
							contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							tigeDroit.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
						}
						
					}
					//Source des images
					if (patient.GetCoteOperation()=="Gauche") {
						imgTige.src=tigeDroit.GetUrl();
					} else {
						imgTige.src=tigeGauche.GetUrl();
					}
					
					var canvasCotyle=null;
					if (patient.GetCoteOperation()=="Gauche") {
						canvasCotyle = document.getElementById("canvasCotyleDroit");
					} else {
						canvasCotyle = document.getElementById("canvasCotyleGauche");
					}
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "25";
					var contextecotyle = canvasCotyle.getContext("2d");
					console.log("contextecotyle",contextecotyle)

					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						if (patient.GetCoteOperation()=="Gauche") {
							cotyleDroit.Snap(imgCotyleWidth, imgCotyleHeight, tigeDroit.GetOrientation(), tigeDroit.GetCoeffRedimensionnement(), patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
							contextecotyle.rotate(tigeDroit.GetOrientation());
							contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							cotyleGauche.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
						} else {
							cotyleGauche.Snap(imgCotyleWidth, imgCotyleHeight, tigeGauche.GetOrientation(), tigeGauche.GetCoeffRedimensionnement(), patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contextecotyle.rotate(tigeGauche.GetOrientation());
							contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							cotyleDroit.Placement(imgTigeWidth, imgTigeHeight, Position, 0);
						}
						
					}
					if (patient.GetCoteOperation()=="Gauche") {
						imgCotyle.src=cotyleDroit.GetUrl();
					} else {
						imgCotyle.src=cotyleGauche.GetUrl();
					}
					$('.implants *').prop('disabled',false);
					document.getElementById("implants").style.display = "none";
					$('.outilsDessin *').prop('disabled',true);
					document.getElementById("outilsDessin").style.display = "";

					if (patient.GetCoteOperation()=="Gauche") {
						document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
						document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();
					} else {
						document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
						document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();
					}
					
				}
			};
			ValiderDessin()
	}, false);

	var buttonRetourOutilsDessin = document.getElementById("buttonRetourOutilsDessin");
	buttonRetourOutilsDessin.addEventListener('click', 
		function() {
			function RetourDessin(){
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


	function DrawTige() {
		var contexteTigeDrawTige=null;
		var canvasTige = null;
		var m_canvasWidth=900;
		var m_canvasHeight=800;
		var coteTige = document.getElementById("coteTige");
		if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
			canvasTige=document.getElementById("canvasTigeDroit");
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex="26";
			contexteTigeDrawTige=canvasTige.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Gauche") {
					tigeDroit=getTige(indexTige);
					imgTige = new Image;
					imgTige.onload=function () {
						var imgTigeWidth=imgTige.width;
						var imgTigeHeight=imgTige.height;
						tigeDroit.Snap(imgTigeWidth, imgTigeHeight, patient);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
						contexteTigeDrawTige.rotate(tigeDroit.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
					}
					imgTige.src=tigeDroit.GetUrl();
				} else {
					var newTigeDroit = getTige(indexTige);
					imgTige = new Image;
					imgTige.onload=function () {
						var imgTigeWidth=imgTige.width;
						var imgTigeHeight=imgTige.height;
						newTigeDroit.Placement(imgTigeWidth, imgTigeHeight, tigeDroit.GetPosition(), tigeDroit.GetOrientation);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x,newTigeDroit.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeDroit=newTigeDroit;
					}
					imgTige.src=newTigeDroit.GetUrl();
				} 
			} else {
				var newTigeDroit = getTige(indexTige);
				imgTige = new Image;
				imgTige.onload=function () {
					var imgTigeWidth=imgTige.width;
					var imgTigeHeight=imgTige.height;
					newTigeDroit.Placement(imgTigeWidth, imgTigeHeight, tigeDroit.GetPosition(), tigeDroit.GetOrientation);
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x,newTigeDroit.GetPosition().y);
					contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
					contexteTigeDrawTige.restore();
					tigeDroit=newTigeDroit;
				}
				imgTige.src=newTigeDroit.GetUrl();
			}
			document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
		}

		if (coteTige.options[coteTige.selectedIndex].value == "Droit") {
			canvasTige=document.getElementById("canvasTigeGauche");
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex="27";
			contexteTigeDrawTige=canvasTige.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Droit") {
					tigeGauche=getTige(indexTige+8);
					imgTige = new Image;
					imgTige.onload=function () {
						var imgTigeWidth=imgTige.width;
						var imgTigeHeight=imgTige.height;
						tigeGauche.Snap(imgTigeWidth, imgTigeHeight, patient);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
						contexteTigeDrawTige.rotate(tigeGauche.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
					}
					imgTige.src=tigeGauche.GetUrl();
				} else {
					var newTigeGauche = getTige(indexTige+8);
					imgTige = new Image;
					imgTige.onload=function () {
						var imgTigeWidth=imgTige.width;
						var imgTigeHeight=imgTige.height;
						newTigeGauche.Placement(imgTigeWidth, imgTigeHeight, tigeGauche.GetPosition(), tigeGauche.GetOrientation);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x,newTigeGauche.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeGauche=newTigeGauche;
					}
					imgTige.src=newTigeGauche.GetUrl();
			} 

		}	else {
				var newTigeGauche = getTige(indexTige+8);
				imgTige = new Image;
				imgTige.onload=function () {
					var imgTigeWidth=imgTige.width;
					var imgTigeHeight=imgTige.height;
					newTigeGauche.Placement(imgTigeWidth, imgTigeHeight, tigeGauche.GetPosition(), tigeGauche.GetOrientation);
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x,newTigeGauche.GetPosition().y);
					contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
					contexteTigeDrawTige.restore();
					tigeGauche=newTigeGauche;
				}
				imgTige.src=newTigeGauche.GetUrl();
			}
			document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
		}
		
	}

	function DrawCotyle() {
		var contexteCotyleDrawCotyle=null;
		var canvasCotyle = null;
		var m_canvasWidth=900;
		var m_canvasHeight=800;
		var coteCotyle = document.getElementById("coteCotyle");
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
			canvasCotyle=document.getElementById("canvasCotyleDroit");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="28";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Gauche") {
					cotyleDroit=getCotyle(indexCotyle);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						cotyleDroit.Snap(imgCotyleWidth, imgCotyleHeight, patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(tigeDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
					}
					imgCotyle.src=cotyleDroit.GetUrl();
				} else {
					var newCotyleDroit = getCotyle(indexCotyle);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, cotyleDroit.GetPosition(), tigeDroit.GetCoeffRedimensionnement());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(tigeDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleDroit=newCotyleDroit;
					}
					imgCotyle.src=newCotyleDroit.GetUrl();
				}
			} else {
				var newCotyleDroit = getCotyle(indexCotyle);
				imgCotyle = new Image;
				imgCotyle.onload=function () {
					var imgCotyleWidth=imgCotyle.width;
					var imgCotyleHeight=imgCotyle.height;
					newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, cotyleDroit.GetPosition(), tigeDroit.GetCoeffRedimensionnement());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(tigeDroit.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleDroit=newCotyleDroit;
				}
				imgCotyle.src=newCotyleDroit.GetUrl();
			}
		}
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
			canvasCotyle=document.getElementById("canvasCotyleGauche");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="29";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Droit") {
					cotyleGauche=getCotyle(indexCotyle+17);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						cotyleGauche.Snap(imgCotyleWidth, imgCotyleHeight, patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(tigeGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
					}
					imgCotyle.src=cotyleGauche.GetUrl();
				} else {
					var newCotyleGauche = getCotyle(indexCotyle+17);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, cotyleGauche.GetPosition(), tigeGauche.GetCoeffRedimensionnement());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(tigeGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleGauche=newCotyleGauche;
					}
					imgCotyle.src=newCotyleGauche.GetUrl();
				}
			} else {
				var newCotyleGauche = getCotyle(indexCotyle+17);
				imgCotyle = new Image;
				imgCotyle.onload=function () {
					var imgCotyleWidth=imgCotyle.width;
					var imgCotyleHeight=imgCotyle.height;
					newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, cotyleGauche.GetPosition(), tigeGauche.GetCoeffRedimensionnement());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(tigeGauche.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleGauche=newCotyleGauche;
				}
				imgCotyle.src=newCotyleGauche.GetUrl();
			}
		}
	}

	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click', 
		function() {
			function PlusTailleTige(){
				if (indexTige+1>16) {
					indexTige=16;
				} else {
					indexTige++;
				}
				DrawTige();
			};
			PlusTailleTige()
	}, false);

	var buttonMoinsTige = document.getElementById("buttonMoinsTige");
	buttonMoinsTige.addEventListener('click', 
		function() {
			function MoinsTailleTige(){
				if (indexTige-1<9) {
					indexTige=9;
				} else {
					indexTige--;
				}
				DrawTige();
			};
			MoinsTailleTige()
	}, false);

	var buttonPlusCotyle = document.getElementById("buttonPlusCotyle");
	buttonPlusCotyle.addEventListener('click', 
		function() {
			function PlusTailleCotyle(){
				if (indexCotyle+1>25) {
					indexCotyle=25;
				} else {
					indexCotyle++;
				}
				DrawCotyle();
			};
			PlusTailleCotyle()
	}, false);

	var buttonMoinsCotyle = document.getElementById("buttonMoinsCotyle");
	buttonMoinsCotyle.addEventListener('click', 
		function() {
			function MoinsTailleCotyle(){
				if (indexCotyle-1<9) {
					indexCotyle=9;
				} else {
					indexCotyle--;
				}
				DrawCotyle();
			};
			MoinsTailleCotyle()
	}, false);
});