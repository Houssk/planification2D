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

	var indexTigeDroit = 11;
	var indexCotyleDroit = 17;
	var indexTigeGauche = 11;
	var indexCotyleGauche = 17;

	var m_canvasWidth = null;
	var m_canvasHeight = null;

	var NoirColor = document.getElementById("couleurNoir");
	NoirColor.addEventListener('click', function() {
		function changeBackgroundColorToBlack(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'black';
			console.log("Couleur changer : black");
		};
		changeBackgroundColorToBlack()
	},false);

	var BlancColor = document.getElementById("couleurBlanc");
	BlancColor.addEventListener('click', function() {
		function changeBackgroundColorToWhite(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'white';
			console.log("Couleur changer : white");
		};
		changeBackgroundColorToWhite()
	},false);

	var VertColor = document.getElementById("couleurVert");
	VertColor.addEventListener('click', function() {
		function changeBackgroundColorToGreen(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'green';
			console.log("Couleur changer : green");
		};
		changeBackgroundColorToGreen()
	},false);

	var RougeColor = document.getElementById("couleurRouge");
	RougeColor.addEventListener('click', function() {
		function changeBackgroundColorToRed(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'red';
			console.log("Couleur changer : red");
		};
		changeBackgroundColorToRed()
	},false);

	var BleuColor = document.getElementById("couleurBleu");
	BleuColor.addEventListener('click', function() {
		function changeBackgroundColorToBlue(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'blue';
			console.log("Couleur changer : blue");
		};
		changeBackgroundColorToBlue()
	},false);
	

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

								m_canvasWidth=document.getElementById("dwv-imageLayer").width;
								m_canvasHeight=document.getElementById("dwv-imageLayer").height;

								if (patient.GetOperationGuide()=="Non guider") {
									var newTigeGauche=getTige(indexTigeGauche+8);
									var newTigeDroit=getTige(indexTigeDroit);
									var newTige=null;
									var newCotyleGauche=getCotyle(indexCotyleGauche+17);
									var newCotyleDroit=getCotyle(indexCotyleDroit);
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
										document.getElementById('labelTailleTige').innerHTML = newTigeDroit.GetNom();
										//console.log("newTigeDroit.GetUrl()",newTigeDroit.GetUrl());
									} else {
										imgTige.src=newTigeGauche.GetUrl();
										document.getElementById('labelTailleTige').innerHTML = newTigeGauche.GetNom();
										//console.log("newTigeGauche.GetUrl()",newTigeGauche.GetUrl());
									}

									canvasCotyle.width=m_canvasWidth;
									canvasCotyle.height=m_canvasHeight;
									canvasCotyle.style.zIndex = "27";
									var contextecotyle = canvasCotyle.getContext("2d");
									imgCotyle.onload=function () {
										console.log("imgCotyle",imgCotyle);
										var imgCotyleWidth=imgCotyle.width;
										var imgCotyleHeight=imgCotyle.height;
										var dicomCanvas = document.getElementById("dwv-imageLayer");

										//position zéro
										var dicomWidth = sessionStorage.getItem("imageLargeur");
										var dicomHeight = sessionStorage.getItem("imageHauteur");
										var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
										
										newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, Position, newTigeGauche.GetCoeffRedimensionnement());
										newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, Position, newTigeDroit.GetCoeffRedimensionnement());
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
										console.log("newCotyle.GetImageLargeur()",newCotyle.GetImageLargeur(),"newCotyle.GetImageHauteur()",newCotyle.GetImageHauteur())
										console.log("load img cotyleDroit");
									}
									//Source des images
									if (patient.GetCoteOperation()=="Gauche") {
										imgCotyle.src=newCotyleDroit.GetUrl();
										document.getElementById('labelTailleCotyle').innerHTML = newCotyleDroit.GetNom();
									} else {
										imgCotyle.src=newCotyleGauche.GetUrl();
										document.getElementById('labelTailleCotyle').innerHTML = newCotyleGauche.GetNom();
									}

									document.getElementById("buttonMonterTige").style.display="none";
									document.getElementById("buttonDescendreTige").style.display="none";
									document.getElementById("buttonMonterCotyle").style.display="none";
									document.getElementById("buttonDescendreCotyle").style.display="none";
									document.getElementById("buttonTournerHautCotyle").style.display="none";
									document.getElementById("buttonTournerBasCotyle").style.display="none";
								}
								if (patient.GetCoteOperation()=="Gauche") {
									document.getElementById("coteTige").value="Gauche";
									document.getElementById("coteCotyle").value="Gauche";
								} else {
									document.getElementById("coteTige").value="Droit";
									document.getElementById("coteCotyle").value="Droit";
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
					sessionStorage.setItem("nbTrapeze", 0);
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
					sessionStorage.setItem("nbCercle", 0);
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

				if (document.getElementById("RadioOuiHanche").checked) {
					if (sessionStorage.getItem("cerclePosition")===null||sessionStorage.getItem("trapezePosition")===null) {
						alert("Veuillez tracer un cercle et un trapèze sur la hanche du patient");
					} else {
						if (patient.GetCoteOperation()=="Gauche") {
							sessionStorage.setItem("trapezeDroitPosition", JSON.stringify(JSON.parse(sessionStorage.getItem("trapezePosition"))));
							sessionStorage.setItem("cercleDroitPosition", JSON.stringify(JSON.parse(sessionStorage.getItem("cerclePosition"))));
						}
						if (patient.GetCoteOperation()=="Droit") {
							sessionStorage.setItem("trapezeGauchePosition", JSON.stringify(JSON.parse(sessionStorage.getItem("trapezePosition"))));
							sessionStorage.setItem("cercleGauchePosition", JSON.stringify(JSON.parse(sessionStorage.getItem("cerclePosition"))));
						}
						onPeutValider = true;
					}
				} else {
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
				}

				if(onPeutValider==true)
				{
					// récupération tige et cotyle
					tigeDroit = getTige(indexTigeDroit);
					cotyleDroit = getCotyle(indexCotyleDroit);
					tigeGauche = getTige(indexTigeGauche+8);
					cotyleGauche = getCotyle(indexCotyleGauche+17);
					
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
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
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
							contextecotyle.rotate(cotyleDroit.GetOrientation());
							contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							cotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, Position, tigeGauche.GetCoeffRedimensionnement());
						} else {
							cotyleGauche.Snap(imgCotyleWidth, imgCotyleHeight, tigeGauche.GetOrientation(), tigeGauche.GetCoeffRedimensionnement(), patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contextecotyle.rotate(cotyleGauche.GetOrientation());
							contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie 
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							cotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, Position, tigeDroit.GetCoeffRedimensionnement());
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
				document.getElementById("informationPatient").style.display = "none";
				document.getElementById("informationPatient").style.display = "none";
				document.getElementById("informationPatient").style.display = "none";
				document.getElementById("buttonDeletePetitTroch").style.display = "none";
				document.getElementById("buttonDeleteCercle").style.display = "none";
				document.getElementById("buttonDeleteTrapeze").style.display = "none";
			};
			RetourDessin()
	}, false);


	function DrawTige() {
		var contexteTigeDrawTige=null;
		var canvasTige = null;
		/*var m_canvasWidth=900;
		var m_canvasHeight=800;*/
		var coteTige = document.getElementById("coteTige");
		if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
			canvasTige=document.getElementById("canvasTigeDroit");
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex="26";
			contexteTigeDrawTige=canvasTige.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Gauche") {
					tigeDroit=getTige(indexTigeDroit);
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
					var newTigeDroit = getTige(indexTigeDroit);
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
				var newTigeDroit = getTige(indexTigeDroit);
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
					tigeGauche=getTige(indexTigeGauche+8);
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
					var newTigeGauche = getTige(indexTigeGauche+8);
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
				var newTigeGauche = getTige(indexTigeGauche+8);
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
		/*var m_canvasWidth=900;
		var m_canvasHeight=800;*/
		var coteCotyle = document.getElementById("coteCotyle");
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
			canvasCotyle=document.getElementById("canvasCotyleDroit");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="28";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Gauche") {
					cotyleDroit=getCotyle(indexCotyleDroit);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						console.log("patient cotyle draw gauche",patient);
						cotyleDroit.Snap(imgCotyleWidth, imgCotyleHeight, tigeDroit.GetOrientation(), tigeDroit.GetCoeffRedimensionnement(), patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
					}
					imgCotyle.src=cotyleDroit.GetUrl();
				} else {
					var newCotyleDroit = getCotyle(indexCotyleDroit);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, cotyleDroit.GetPosition(), cotyleDroit.GetOrientation(), tigeDroit.GetCoeffRedimensionnement());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleDroit=newCotyleDroit;
					}
					imgCotyle.src=newCotyleDroit.GetUrl();
				}
			} else {
				var newCotyleDroit = getCotyle(indexCotyleDroit);
				imgCotyle = new Image;
				imgCotyle.onload=function () {
					var imgCotyleWidth=imgCotyle.width;
					var imgCotyleHeight=imgCotyle.height;
					newCotyleDroit.Placement(imgCotyleWidth, imgCotyleHeight, cotyleDroit.GetPosition(), cotyleDroit.GetOrientation(), tigeDroit.GetCoeffRedimensionnement());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleDroit=newCotyleDroit;
				}
				imgCotyle.src=newCotyleDroit.GetUrl();
			}
			document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();
		}
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
			canvasCotyle=document.getElementById("canvasCotyleGauche");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="29";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Droit") {
					cotyleGauche=getCotyle(indexCotyleGauche+17);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						console.log("patient cotyle draw droit",patient);
						cotyleGauche.Snap(imgCotyleWidth, imgCotyleHeight, tigeGauche.GetOrientation(), tigeGauche.GetCoeffRedimensionnement(), patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
					}
					imgCotyle.src=cotyleGauche.GetUrl();
				} else {
					var newCotyleGauche = getCotyle(indexCotyleGauche+17);
					imgCotyle = new Image;
					imgCotyle.onload=function () {
						var imgCotyleWidth=imgCotyle.width;
						var imgCotyleHeight=imgCotyle.height;
						newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, cotyleGauche.GetPosition(), cotyleGauche.GetOrientation(), tigeGauche.GetCoeffRedimensionnement());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleGauche=newCotyleGauche;
					}
					imgCotyle.src=newCotyleGauche.GetUrl();
				}
			} else {
				var newCotyleGauche = getCotyle(indexCotyleGauche+17);
				imgCotyle = new Image;
				imgCotyle.onload=function () {
					var imgCotyleWidth=imgCotyle.width;
					var imgCotyleHeight=imgCotyle.height;
					newCotyleGauche.Placement(imgCotyleWidth, imgCotyleHeight, cotyleGauche.GetPosition(), cotyleGauche.GetOrientation(), tigeGauche.GetCoeffRedimensionnement());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleGauche=newCotyleGauche;
				}
				imgCotyle.src=newCotyleGauche.GetUrl();
			}
			document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();
		}
	}

	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click', 
		function() {
			function PlusTailleTige(){
				var coteTigeBtn = document.getElementById("coteTige");
				if (coteTigeBtn.options[coteTigeBtn.selectedIndex].value == "Gauche") {
					if (indexTigeDroit+1>16) {
						indexTigeDroit=16;
					} else {
						indexTigeDroit++;
					}
				} else {
					if (indexTigeGauche+1>16) {
						indexTigeGauche=16;
					} else {
						indexTigeGauche++;
					}
				}
				
				DrawTige();
			};
			PlusTailleTige()
	}, false);

	var buttonMoinsTige = document.getElementById("buttonMoinsTige");
	buttonMoinsTige.addEventListener('click', 
		function() {
			function MoinsTailleTige(){
				var coteTigeBtn = document.getElementById("coteTige");
				if (coteTigeBtn.options[coteTigeBtn.selectedIndex].value == "Gauche") {
					if (indexTigeDroit-1<9) {
						indexTigeDroit=9;
					} else {
						indexTigeDroit--;
					}
				} else {
					if (indexTigeGauche-1<9) {
						indexTigeGauche=9;
					} else {
						indexTigeGauche--;
					}
				}
				DrawTige();
			};
			MoinsTailleTige()
	}, false);

	var buttonPlusCotyle = document.getElementById("buttonPlusCotyle");
	buttonPlusCotyle.addEventListener('click', 
		function() {
			function PlusTailleCotyle(){
				var coteCotyleBtn = document.getElementById("coteCotyle");
				if (coteCotyleBtn.options[coteCotyleBtn.selectedIndex].value == "Gauche") {
					if (indexCotyleDroit+1>25) {
						indexCotyleDroit=25;
					} else {
						indexCotyleDroit++;
					}
				} else {
					if (indexCotyleGauche+1>25) {
						indexCotyleGauche=25;
					} else {
						indexCotyleGauche++;
					}
				}
				DrawCotyle();
			};
			PlusTailleCotyle()
	}, false);

	var buttonMoinsCotyle = document.getElementById("buttonMoinsCotyle");
	buttonMoinsCotyle.addEventListener('click', 
		function() {
			var coteCotyleBtn = document.getElementById("coteCotyle");
			function MoinsTailleCotyle(){
				if (coteCotyleBtn.options[coteCotyleBtn.selectedIndex].value == "Gauche") {
					if (indexCotyleDroit-1<9) {
						indexCotyleDroit=9;
					} else {
						indexCotyleDroit--;
					}
				} else {
					if (indexCotyleGauche-1<9) {
						indexCotyleGauche=9;
					} else {
						indexCotyleGauche--;
					}
				}
				DrawCotyle();
			};
			MoinsTailleCotyle()
	}, false);

	

	var buttonMonterTige = document.getElementById("buttonMonterTige");
	buttonMonterTige.addEventListener('click', 
		function() {
			function MonterTige(){
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.Monter();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					//UpTige(canvasTige, tigeDroit);
				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.Monter();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					//UpTige(canvasTige, tigeGauche);
				}
			};
			MonterTige()
	}, false);

	var buttonDescendreTige = document.getElementById("buttonDescendreTige");
	buttonDescendreTige.addEventListener('click', 
		function() {
			function DescendreTige(){
				console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.Descendre();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();
				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.Descendre();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.drawImage(imgTige, 0, 0, imgTige.width, imgTige.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
				}
			};
			DescendreTige()
	}, false);

	

	var buttonMonterCotyle = document.getElementById("buttonMonterCotyle");
	buttonMonterCotyle.addEventListener('click', 
		function() {
			function MonterCotyle(){
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.Monter();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.Monter();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();
				}
			};
			MonterCotyle()
	}, false);

	var buttonDescendreCotyle = document.getElementById("buttonDescendreCotyle");
	buttonDescendreCotyle.addEventListener('click', 
		function() {
			function DescendreCotyle(){
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					/*var m_canvasWidth=900;
					var m_canvasHeight=800;*/
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.Descendre();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.Descendre();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();
				}
			};
			DescendreCotyle()
	}, false);

	var buttonTournerHautCotyle = document.getElementById("buttonTournerHautCotyle");
	buttonTournerHautCotyle.addEventListener('click', 
		function() {
			function TournerHautCotyle(){
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.TournerHaut();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.TournerHaut();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();
				}
			};
			TournerHautCotyle()
	}, false);

	var buttonTournerBasCotyle = document.getElementById("buttonTournerBasCotyle");
	buttonTournerBasCotyle.addEventListener('click', 
		function() {
			function TournerBasCotyle(){
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.TournerBas();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.TournerBas();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyle, 0, 0, imgCotyle.width, imgCotyle.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();
				}
			};
			TournerBasCotyle()
	}, false);

	var buttonRetourImplant = document.getElementById("buttonRetourImplant");
	buttonRetourImplant.addEventListener('click', 
		function() {
			function RetourImplant(){
				var canvasCotyle = document.getElementById("canvasCotyleDroit");
				canvasCotyle.width=m_canvasWidth;
				canvasCotyle.height=m_canvasHeight;
				canvasCotyle.style.zIndex = "-1";
				var contextecotyle = canvasCotyle.getContext("2d");
				contextecotyle.save();
				contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
				contextecotyle.restore();

				canvasCotyle = document.getElementById("canvasCotyleGauche");
				canvasCotyle.width=m_canvasWidth;
				canvasCotyle.height=m_canvasHeight;
				canvasCotyle.style.zIndex = "-1";
				contextecotyle = canvasCotyle.getContext("2d");
				contextecotyle.save();
				contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
				contextecotyle.restore();

				var canvasTige = document.getElementById("canvasTigeDroit");
				canvasTige.width=m_canvasWidth;
				canvasTige.height=m_canvasHeight;
				canvasTige.style.zIndex = "-1";
				var contextetige = canvasTige.getContext("2d");
				contextetige.save();
				contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
				contextetige.restore();

				canvasTige = document.getElementById("canvasTigeGauche");
				canvasTige.width=m_canvasWidth;
				canvasTige.height=m_canvasHeight;
				canvasTige.style.zIndex = "-1";
				contextetige = canvasTige.getContext("2d");
				contextetige.save();
				contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
				contextetige.restore();

				$('.implants *').prop('disabled',true);
				document.getElementById("implants").style.display = "";

				if (patient.GetOperationGuide() == "Guider") {
					$('.outilsDessin *').prop('disabled',false);
					document.getElementById("outilsDessin").style.display = "none";
				} else {
					$('.informationPatient *').prop('disabled',false);
					document.getElementById("informationPatient").style.display = "none";
					sessionStorage.setItem("calibrage", false);
	                sessionStorage.setItem("nbCercle",0);
	                sessionStorage.setItem("nbTrapeze", 0);
                	sessionStorage.setItem("nbPetitTroch", 0);
	                sessionStorage.setItem("retour",0);
					ZoomMode();
				}

			};
			RetourImplant()
	}, false);

	var buttonValideImplant = document.getElementById("buttonValideImplant");
	buttonValideImplant.addEventListener('click', 
		function() {
			function ValiderImplant(){
				console.log("valider implants");
				var dicomCanvas = document.getElementById("dwv-imageLayer");
				var dicomImage = dicomCanvas.toDataURL("image/jpeg");
				var divLayer = document.getElementById("dwv-layerDialog");
				console.log("divLayer",divLayer);
                var imageSerf = "data:image/jpeg;base64,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";
				
				//docPDF.addImage(divData, 'JPEG', 15, 35, 180, ((180*hImageLayer)/wImageLayer));
				//docPDF.save(patient.GetNom()+" "+patient.GetPrenom());

				html2canvas(divLayer,{
					onrendered: function (canvas) {
						console.log("canvas",canvas);
						var now = new Date();
						var nowMonth = now.getMonth() + 1;

						var divData = canvas.toDataURL("image/jpeg");

						var docPDF = new jsPDF();
						docPDF.setFontSize(12);
						docPDF.addImage(imageSerf, 'JPEG', 15, 20, 45, 12);
						docPDF.text(160, 30, now.getDate() + "/" + nowMonth + "/" + now.getFullYear());
						docPDF.setFontType("bold");
						docPDF.setFontSize(18);
						docPDF.text(30, 50, "Planification pour la chirurgie de la hanche du patient :");
						docPDF.setFontSize(12);
						docPDF.setFontType("normal");
						docPDF.text(15, 70, "Nom : " + patient.GetNom());
						docPDF.text(15, 75, "Prénom : " + patient.GetPrenom());
						docPDF.setFontType("bold");
						docPDF.text(15, 105, "Votre image DICOM d'origine :");
						docPDF.addImage(dicomImage, 'JPEG', 15, 110, 180, ((180*m_canvasHeight)/m_canvasWidth));
						docPDF.addPage();
						docPDF.text(15, 20, "Votre planification :");
						docPDF.setFontSize(12);
						docPDF.setFontType("normal");
						if (patient.GetCoteOperation()=="Gauche") {
							docPDF.text(15, 25, "Tige utilisé pour cette planification : "+tigeDroit.GetNom());
							docPDF.text(15, 30, "Cotyle utilisé pour cette planification : "+cotyleDroit.GetNom());
						}

						if (patient.GetCoteOperation()=="Droit") {
							docPDF.text(15, 25, "Tige utilisé pour cette planification : "+tigeGauche.GetNom());
							docPDF.text(15, 30, "Cotyle utilisé pour cette planification : "+cotyleGauche.GetNom());
						}
						
						docPDF.addImage(divData, 'JPEG', 15, 35, 180, ((180*m_canvasHeight)/m_canvasWidth));
						docPDF.save(patient.GetNom()+" "+patient.GetPrenom());
						
					},
					id: "pdf"
				});
			};
			ValiderImplant()
	}, false);
	
});