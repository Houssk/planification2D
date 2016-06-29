// namespaces
var dwv = dwv || {};
dwv.tool = dwv.tool || {};
//external
var Kinetic = Kinetic || {};

/**
* Created by Quentin PETIT on 31/03/2016
**/

$(document).ready(function () {

	var patient = null; // variable de stockage du patient
	var tigeGauche = null; // variable de stockage de la tige gauche
	var cotyleGauche = null; // variable de stockage du coyle gauche
	var tigeDroit = null; // variable de stockage de la tige droit
	var cotyleDroit = null; // variable de stockage du coyle droit

	var imgTigeDroit = null; // variable de stockage de l'image de la tige
	var imgCotyleDroit = null; // variable de stockage de l'image du cotyle
	var imgTigeGauche = null; // variable de stockage de l'image de la tige
	var imgCotyleGauche = null; // variable de stockage de l'image du cotyle

	var indexTigeDroit = null;
	var indexCotyleDroit = null;
	var indexTigeGauche = null;
	var indexCotyleGauche = null;

	var maximumTigeDroit= null;
	var minimumTigeDroit=null;
	var maximumTigeGauche= null;
	var minimumTigeGauche=null;

	var maximumCotyleDroit = null;
	var maximumCotyleGauche = null;
	var minimumCotyleDroit = null;
	var minimumCotyleGauche = null;

	var m_canvasWidth = null;
	var m_canvasHeight = null;

	var tableImplant = null;
	var tableCotyle = null;


	sessionStorage.setItem("boolNom",false);
	sessionStorage.setItem("boolPrenom",false);
	sessionStorage.setItem("boolCoteOperation",false);
	sessionStorage.setItem("boolTypeOperation",false);

	document.getElementById("dwv-drawDiv").style.zIndex = "30";

	/*var gammeCimenteOuPas = document.getElementById("gammeCimenteOuPas");
	var gammeVariseOuPas = document.getElementById("gammeVariseOuPas");
	var gammeColleretteOuPas = document.getElementById("gammeColleretteOuPas");
	document.getElementById("gammeColleretteOuPas").style.display = "none";
	gammeCimenteOuPas.addEventListener("change",function(){
		var valeurGammeCimenteOuPas = gammeCimenteOuPas.options[gammeCimenteOuPas.selectedIndex].value;
		console.log("Element select");
		if(valeurGammeCimenteOuPas=="cimente" ){
			document.getElementById("gammeColleretteOuPas").style.display = "none";
		}
		else if(valeurGammeCimenteOuPas=="sansCiment") {
			document.getElementById("gammeColleretteOuPas").style.display = "";
		}
	});*/

	var couleurGris = document.getElementById("couleurGris");
	couleurGris.addEventListener('click', function() {
		function CouleurGris(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = '#333333';
		};
		CouleurGris()
	},false);

	var couleurGrisClaire = document.getElementById("couleurGrisClaire");
	couleurGrisClaire.addEventListener('click', function() {
		function CouleurGrisClaire(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = '#717171';
		};
		CouleurGrisClaire()
	},false);

	var couleurNoir = document.getElementById("couleurNoir");
	couleurNoir.addEventListener('click', function() {
		function CouleurNoir(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'black';
		};
		CouleurNoir()
	},false);

	var couleurBlanc = document.getElementById("couleurBlanc");
	couleurBlanc.addEventListener('click', function() {
		function CouleurBlanc(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'white';
		};
		CouleurBlanc()
	},false);

	function ApparitionBoutonValiderPatient() {
		console.log("ApparitionBoutonValiderPatient");
		if (sessionStorage.getItem("boolPrenom")=="true" &&
			sessionStorage.getItem("boolNom")=="true" &&
			sessionStorage.getItem("boolTypeOperation")=="true" &&
			sessionStorage.getItem("boolCoteOperation")=="true" &&
			sessionStorage.getItem("taille_bille_px")!=null) {
			document.getElementById("buttonValideInformationPatient").style.display="";
			console.log("ApparitionBoutonValiderPatient display : _");
		} else {
			document.getElementById("buttonValideInformationPatient").style.display="none";
			console.log("ApparitionBoutonValiderPatient display : none");
		}
	}

	var textBoxNom = document.getElementById("nomPatient");
	textBoxNom.addEventListener('change',function(){
		if (textBoxNom.value!="") {
			sessionStorage.setItem("boolNom",true);
		} else {
			sessionStorage.setItem("boolNom",false);
		}
		ApparitionBoutonValiderPatient();
	});

	var textBoxPrenom = document.getElementById("prenomPatient");
	textBoxPrenom.addEventListener('change',function(){
		if (textBoxPrenom.value!="") {
			sessionStorage.setItem("boolPrenom",true);
		} else {
			sessionStorage.setItem("boolPrenom",false);
		}
		ApparitionBoutonValiderPatient();
	});

	var listBoxTypeOperation = document.getElementById("typeChirurgie");
	listBoxTypeOperation.addEventListener('change',function(){
		if (listBoxTypeOperation.selectedIndex != 0) {
			sessionStorage.setItem("boolCoteOperation",true);
		} else {
			sessionStorage.setItem("boolCoteOperation",false);
		}
		ApparitionBoutonValiderPatient();
	});

	var listBoxCoteOperation = document.getElementById("coteChirurgie");
	listBoxCoteOperation.addEventListener('change',function(){
		if (listBoxCoteOperation.selectedIndex != 0) {
			sessionStorage.setItem("boolTypeOperation",true);
		} else {
			sessionStorage.setItem("boolTypeOperation",false);
		}
		ApparitionBoutonValiderPatient();
	});

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
								var taille_bille_px = parseInt(sessionStorage.getItem("taille_bille_px"));
								var taille_bille_mm = parseInt(sessionStorage.getItem("taille_bille_mm"));
								var coeff =  taille_bille_mm / taille_bille_px;
								var string = "coefficient de redimensionnement des implants est : " + coeff;
								if (!isNaN(coeff)) {
									console.log("coeff", coeff);
									sessionStorage.setItem("coefficient",coeff);
									sessionStorage.setItem("calibrage",true);
									alert(string);
								} else {
									console.log("coeff application.js", coeff);
									sessionStorage.setItem("calibrage",false);
								}
								var calibrage = sessionStorage.getItem("calibrage");
								if (calibrage=="true") {
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
										document.getElementById("deplacerTige").style.display="none";
										document.getElementById("deplacerCotyle").style.display="none";
										document.getElementById("labelOffsetTigeCotyle").style.display="none";
										document.getElementById("labelHauteurTigeCotyle").style.display="none";
										//document.getElementById("buttonTournerHautCotyle").style.display="none";
										//document.getElementById("buttonTournerBasCotyle").style.display="none";
										document.getElementById("positionTige").style.display="";
										document.getElementById("positionCotyle").style.display="";
									}
									if (patient.GetCoteOperation()=="Gauche") {
										document.getElementById("coteTige").value="Gauche";
										document.getElementById("coteCotyle").value="Gauche";
									} else {
										document.getElementById("coteTige").value="Droit";
										document.getElementById("coteCotyle").value="Droit";
									}

									$('.informationPatient *').prop('disabled',true);
									//document.getElementById("informationPatient").style.display = "";

									if(patient.GetOperationGuide()=="Guider"){ // Cas ou l'opération est guidée. Active uniquement la boite de dessin.
										$('.outilsDessin *').prop('disabled',false);
										$("#accordeon").accordion({active : 1});
										document.getElementById("dwv-drawDiv").style.zIndex = "30";
										document.getElementById("buttonDessinRapporteur").style.display = "";
									}

									if (patient.GetOperationGuide()=="Non guider") { // Cas ou l'opération est non guidée. Active uniquement la boite implant.
										$('.implants *').prop('disabled',false);
										$("#accordeon").accordion({active : 2});
										document.getElementById("buttonDessinRapporteur").style.display = "none";
									}
								} else {
									alert("Veuillez calibrer votre DICOM");
								}
								
							}
						}
					}
				}
			};
			desactivationListe();
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

	var buttonDessinRapporteur = document.getElementById("buttonDessinRapporteur");
	buttonDessinRapporteur.addEventListener('click', 
		function() {
			function DessinRapporteur(){
				console.log("dessin rapporteur");
				DrawShape("Protractor");

			};
			DessinRapporteur()
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
					$('.implants *').prop('disabled',false);
					$('.outilsDessin *').prop('disabled',true);
					$("#accordeon").accordion({active : 2});
				}
			};
			ValiderDessin()
	}, false);

	var buttonValideGamme = document.getElementById("buttonValideGamme");
	buttonValideGamme.addEventListener('click',
		function() {
			var coefficient = sessionStorage.getItem("coefficient");
			function validerGamme(){
				/*var gammeCimenteOuPas = document.getElementById("gammeCimenteOuPas");
				var gammeVariseOuPas = document.getElementById("gammeVariseOuPas");
				var gammeCimenteOuNe = document.getElementById("gammeCimenteOuNe");
				var valeurGammeVariseOuPas = gammeVariseOuPas.options[gammeVariseOuPas.selectedIndex].value;
				var gammeColleretteOuPas = document.getElementById("gammeColleretteOuPas");
				var valeurGammeCimenteOuPas = gammeCimenteOuPas.options[gammeCimenteOuPas.selectedIndex].value;
				var valeurGammeColleretteOuPas = gammeColleretteOuPas.options[gammeColleretteOuPas.selectedIndex].value;
				var valeurGammeCimenteOuNe = gammeCimenteOuNe.options[gammeCimenteOuNe.selectedIndex].value;*/

				var gammeTige = document.getElementById("gammeTige");
				var gammeCotyle = document.getElementById("gammeCotyle");

				var valeurGammeTige = gammeTige.options[gammeTige.selectedIndex].value;
				var valeurGammeCotyle = gammeCotyle.options[gammeCotyle.selectedIndex].value;
				switch(valeurGammeTige)
				{
					case "implant_hype" : {
						tableImplant = valeurGammeTige;
						indexTigeDroit = 1;
						indexTigeGauche = 9;
						maximumTigeDroit = 8;
						minimumTigeDroit = 1;
						maximumTigeGauche = 16;
						minimumTigeGauche= 9;
						break;
					}

					case "implant_libra" : {
						tableImplant = valeurGammeTige;
						indexTigeDroit = 1;
						indexTigeGauche = 9;
						maximumTigeDroit = 8;
						minimumTigeDroit = 1;
						maximumTigeGauche = 16;
						minimumTigeGauche= 9;
						break;
					}
				}

				switch(valeurGammeCotyle)
				{
					case "cotyle_hype" : {
						tableCotyle = valeurGammeCotyle;
						indexCotyleDroit = 1;
						indexCotyleGauche = 9;
						maximumCotyleDroit = 8;
						minimumCotyleDroit = 1;
						maximumCotyleGauche = 16;
						minimumCotyleGauche= 9;
						break;
					}

					case "cotyle_novae" : {
						tableCotyle = valeurGammeCotyle;
						indexCotyleDroit = 1;
						indexCotyleGauche = 18;
						maximumCotyleDroit = 17;
						minimumCotyleDroit = 1;
						maximumCotyleGauche = 34;
						minimumCotyleGauche= 18;
						break;
					}
				}

				////////////////////////////////////////////////////// snap /////////////////////////////

				m_canvasWidth=document.getElementById("dwv-imageLayer").width;
				m_canvasHeight=document.getElementById("dwv-imageLayer").height;
				if (patient.GetOperationGuide()=="Non guider") {
					var newTigeGauche=getTige(tableImplant, indexTigeGauche);
					var newTigeDroit=getTige(tableImplant, indexTigeDroit);
					var newTige=null;
					var newCotyleGauche=getCotyle(tableCotyle, indexCotyleGauche);
					var newCotyleDroit=getCotyle(tableCotyle, indexCotyleDroit);
					var newCotyle=null;
					var canvasTige=null;
					var canvasCotyle = null;
					imgTigeDroit = new Image;
					imgCotyleGauche = new Image;
					imgTigeGauche = new Image;
					imgCotyleDroit = new Image;


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
					imgTigeDroit.onload=function () {
						console.log("imgTigeDroit",imgTigeDroit);
						var imgTigeDroitWidth=imgTigeDroit.width;
						var imgTigeDroitHeight=imgTigeDroit.height;
						var dicomCanvas = document.getElementById("dwv-imageLayer");

						//position zéro
						var dicomWidth = sessionStorage.getItem("imageLargeur");
						var dicomHeight = sessionStorage.getItem("imageHauteur");
						var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

						newTigeGauche.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);
						newTigeDroit.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);
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
						contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
						contextetige.restore();
						console.log("newTige",newTige);
					}

					imgTigeGauche.onload=function () {
						console.log("imgTigeGauche",imgTigeGauche);
						var imgTigeGaucheWidth=imgTigeGauche.width;
						var imgTigeGaucheHeight=imgTigeGauche.height;
						var dicomCanvas = document.getElementById("dwv-imageLayer");

						//position zéro
						var dicomWidth = sessionStorage.getItem("imageLargeur");
						var dicomHeight = sessionStorage.getItem("imageHauteur");
						var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

						newTigeGauche.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
						newTigeDroit.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
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
						contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTige.GetImageLargeur() / 2, -newTige.GetImageHauteur() / 2, newTige.GetImageLargeur(), newTige.GetImageHauteur());
						contextetige.restore();
						console.log("newTige",newTige);
					}
					//Source des images
					if (patient.GetCoteOperation()=="Gauche") {
						imgTigeDroit.src=newTigeDroit.GetUrl();
						var tailleTige = newTigeDroit.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
						//console.log("newTigeDroit.GetUrl()",newTigeDroit.GetUrl());
					} else {
						imgTigeGauche.src=newTigeGauche.GetUrl();
						var tailleTige = newTigeGauche.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
						//console.log("newTigeGauche.GetUrl()",newTigeGauche.GetUrl());
					}

					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "27";
					var contextecotyle = canvasCotyle.getContext("2d");

					imgCotyleDroit.onload=function () {
						console.log("imgCotyleDroit",imgCotyleDroit);
						var imgCotyleDroitWidth=imgCotyleDroit.width;
						var imgCotyleDroitHeight=imgCotyleDroit.height;
						var dicomCanvas = document.getElementById("dwv-imageLayer");

						//position zéro
						var dicomWidth = sessionStorage.getItem("imageLargeur");
						var dicomHeight = sessionStorage.getItem("imageHauteur");
						var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

						newCotyleGauche.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, Position, 0);
						newCotyleDroit.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, Position, 0);
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
						contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -newCotyle.GetImageLargeur() / 2, -newCotyle.GetImageHauteur() / 2, newCotyle.GetImageLargeur(), newCotyle.GetImageHauteur());
						contextecotyle.restore();
						console.log("newCotyle.GetImageLargeur()",newCotyle.GetImageLargeur(),"newCotyle.GetImageHauteur()",newCotyle.GetImageHauteur())
						console.log("load img cotyleDroit");
					}

					imgCotyleGauche.onload=function () {
						console.log("imgCotyleGauche",imgCotyleGauche);
						var imgCotyleGaucheWidth=imgCotyleGauche.width;
						var imgCotyleGaucheHeight=imgCotyleGauche.height;
						var dicomCanvas = document.getElementById("dwv-imageLayer");

						//position zéro
						var dicomWidth = sessionStorage.getItem("imageLargeur");
						var dicomHeight = sessionStorage.getItem("imageHauteur");
						var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

						newCotyleGauche.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, Position, 0);
						newCotyleDroit.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, Position, 0);
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
						contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -newCotyle.GetImageLargeur() / 2, -newCotyle.GetImageHauteur() / 2, newCotyle.GetImageLargeur(), newCotyle.GetImageHauteur());
						contextecotyle.restore();
						console.log("newCotyle.GetImageLargeur()",newCotyle.GetImageLargeur(),"newCotyle.GetImageHauteur()",newCotyle.GetImageHauteur())
						console.log("load img cotyleDroit");
					}
					//Source des images
					if (patient.GetCoteOperation()=="Gauche") {
						imgCotyleDroit.src=newCotyleDroit.GetUrl();
						var tailleCotyle = newCotyleDroit.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					} else {
						imgCotyleGauche.src=newCotyleGauche.GetUrl();
						var tailleCotyle = newCotyleGauche.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					}

					/*document.getElementById("buttonMonterTige").style.display="none";
					document.getElementById("buttonDescendreTige").style.display="none";
					document.getElementById("buttonMonterCotyle").style.display="none";
					document.getElementById("buttonDescendreCotyle").style.display="none";
					document.getElementById("buttonTournerHautCotyle").style.display="none";
					document.getElementById("buttonTournerBasCotyle").style.display="none";*/


				}
              else {


					// récupération tige et cotyle
					tigeDroit = getTige(tableImplant, indexTigeDroit);
					cotyleDroit = getCotyle(tableCotyle, indexCotyleDroit);
					tigeGauche = getTige(tableImplant, indexTigeGauche);
					cotyleGauche = getCotyle(tableCotyle, indexCotyleGauche);

					//Initialisation des images
					imgTigeDroit = new Image;
					imgCotyleDroit = new Image;
					imgTigeGauche = new Image;
					imgCotyleGauche = new Image;
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
					imgTigeDroit.onload=function () {
						console.log("imgTigeDroit",imgTigeDroit)
						var imgTigeDroitWidth=imgTigeDroit.width;
						var imgTigeDroitHeight=imgTigeDroit.height;
						if (patient.GetCoteOperation()=="Gauche") {
							tigeDroit.Snap(imgTigeDroitWidth, imgTigeDroitHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
							contextetige.rotate(tigeDroit.GetOrientation());
							contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
							contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
							tigeGauche.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);
							var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						} else {
							tigeGauche.Snap(imgTigeDroitWidth, imgTigeDroitHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
							contextetige.rotate(tigeGauche.GetOrientation());
							contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
							contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							tigeDroit.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);

							var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						}

					}

					imgTigeGauche.onload=function () {
						console.log("imgTigeGauche",imgTigeGauche);
						var imgTigeGaucheWidth=imgTigeGauche.width;
						var imgTigeGaucheHeight=imgTigeGauche.height;
						if (patient.GetCoteOperation()=="Gauche") {
							tigeDroit.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
							contextetige.rotate(tigeDroit.GetOrientation());
							contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
							contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
							tigeGauche.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
							var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						} else {
							tigeGauche.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
							contextetige.rotate(tigeGauche.GetOrientation());
							contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
							contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
							contextetige.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							tigeDroit.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
							var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						}

					}
					//Source des images
					if (patient.GetCoteOperation()=="Gauche") {
						imgTigeDroit.src=tigeDroit.GetUrl();
					} else {
						imgTigeGauche.src=tigeGauche.GetUrl();
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

					imgCotyleDroit.onload=function () {
						var imgCotyleDroitWidth=imgCotyleDroit.width;
						var imgCotyleDroitHeight=imgCotyleDroit.height;
						if (patient.GetCoteOperation()=="Gauche") {
							cotyleDroit.Snap(imgCotyleDroitWidth, imgCotyleDroitHeight, 0, 0, patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
							contextecotyle.rotate(cotyleDroit.GetOrientation());
							contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
							cotyleGauche.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, Position, 0);

							var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

						} else {
							cotyleGauche.Snap(imgCotyleDroitWidth, imgCotyleDroitHeight, 0, 0, patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contextecotyle.rotate(cotyleGauche.GetOrientation());
							contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

							cotyleDroit.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, Position, 0);

							var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						}

					}

					imgCotyleGauche.onload=function () {
						var imgCotyleGaucheWidth=imgCotyleGauche.width;
						var imgCotyleGaucheHeight=imgCotyleGauche.height;
						if (patient.GetCoteOperation()=="Gauche") {
							cotyleDroit.Snap(imgCotyleGaucheWidth, imgCotyleGaucheHeight, 0, 0, patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
							contextecotyle.rotate(cotyleDroit.GetOrientation());
							contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
							cotyleGauche.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, Position, 0);

							var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						} else {
							cotyleGauche.Snap(imgCotyleGaucheWidth, imgCotyleGaucheHeight, 0, 0, patient);
							contextecotyle.save();
							contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contextecotyle.rotate(cotyleGauche.GetOrientation());
							contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contextecotyle.restore();

							//positionnement de la tige du coté opposé a la chirurgie
							var dicomCanvas = document.getElementById("dwv-imageLayer");
							//position zéro
							var dicomWidth = sessionStorage.getItem("imageLargeur");
							var dicomHeight = sessionStorage.getItem("imageHauteur");
							var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
							cotyleDroit.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, Position, 0);

							var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
							var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
							document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
							document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						}

					}
					
					if (patient.GetCoteOperation()=="Gauche") {
						imgCotyleDroit.src=cotyleDroit.GetUrl();
					} else {
						imgCotyleGauche.src=cotyleGauche.GetUrl();
					}

					if (patient.GetCoteOperation()=="Gauche") {

						var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

						var tailleTige = tigeDroit.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];

						var tailleCotyle = cotyleDroit.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];


					} else {

						var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						console.log("offset Droit", offset);

						var tailleTige = tigeGauche.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];

						var tailleCotyle = cotyleGauche.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];

					}
				}


				/////////////////////////////////////////////////////////////////////////////////////////


				document.getElementById("choix_gamme").style.display = "none";
				document.getElementById("actionImplant").style.display="";
			};
			validerGamme();
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
				$("#accordeon").accordion({active : 0});
				$('.informationPatient *').prop('disabled',false);
				document.getElementById("buttonDeletePetitTroch").style.display = "none";
				document.getElementById("buttonDeleteCercle").style.display = "none";
				document.getElementById("buttonDeleteTrapeze").style.display = "none";

			};
			RetourDessin()
	}, false);


	function DrawTige() {
		var contexteTigeDrawTige=null;
		var canvasTige = null;
		var coefficient = sessionStorage.getItem("coefficient");
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
					var newTigeDroit=getTige(tableImplant, indexTigeDroit);
					imgTigeDroit = new Image;
					imgTigeDroit.onload=function () {
						var imgTigeDroitWidth=imgTigeDroit.width;
						var imgTigeDroitHeight=imgTigeDroit.height;
						newTigeDroit.Snap(imgTigeDroitWidth, imgTigeDroitHeight, patient, tigeDroit.GetDeltaDeplacement(), tigeDroit.GetDeltaDeplacementX(), tigeDroit.GetDeltaDeplacementY());
						console.log("imagetige guche",newTigeDroit)
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeDroit.GetPositionAvtOffset().x,newTigeDroit.GetPositionAvtOffset().y);
						contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
						contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x-newTigeDroit.GetPositionAvtOffset().x,newTigeDroit.GetPosition().y-newTigeDroit.GetPositionAvtOffset().y);
						contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeDroit=newTigeDroit;

						var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleTige = tigeDroit.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
					}
					imgTigeDroit.src=newTigeDroit.GetUrl();
				} else {
					var newTigeDroit = getTige(tableImplant, indexTigeDroit);
					imgTigeDroit = new Image;
					imgTigeDroit.onload=function () {
						var imgTigeDroitWidth=imgTigeDroit.width;
						var imgTigeDroitHeight=imgTigeDroit.height;
						newTigeDroit.Placement(imgTigeDroitWidth, imgTigeDroitHeight, tigeDroit.GetPosition(), tigeDroit.GetOrientation());
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x,newTigeDroit.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeDroit=newTigeDroit;
					}
					imgTigeDroit.src=newTigeDroit.GetUrl();
				}
			} else {
				var newTigeDroit = getTige(tableImplant, indexTigeDroit);
				imgTigeDroit = new Image;
				imgTigeDroit.onload=function () {
					var imgTigeDroitWidth=imgTigeDroit.width;
					var imgTigeDroitHeight=imgTigeDroit.height;
					newTigeDroit.Placement(imgTigeDroitWidth, imgTigeDroitHeight, tigeDroit.GetPosition(), tigeDroit.GetOrientation());
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x,newTigeDroit.GetPosition().y);
					contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
					contexteTigeDrawTige.restore();
					tigeDroit=newTigeDroit;
				}
				imgTigeDroit.src=newTigeDroit.GetUrl();
			}
			var tailleTige = tigeDroit.GetNom().split("-");
			document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
		}

		if (coteTige.options[coteTige.selectedIndex].value == "Droit") {
			canvasTige=document.getElementById("canvasTigeGauche");
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex="27";
			contexteTigeDrawTige=canvasTige.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Droit") {
					var newTigeGauche=getTige(tableImplant, indexTigeGauche);
					imgTigeGauche = new Image;
					imgTigeGauche.onload=function () {
						var imgTigeGaucheWidth=imgTigeGauche.width;
						var imgTigeGaucheHeight=imgTigeGauche.height;
						newTigeGauche.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, patient, tigeGauche.GetDeltaDeplacement(), tigeGauche.GetDeltaDeplacementX(), tigeGauche.GetDeltaDeplacementY());
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeGauche.GetPositionAvtOffset().x,newTigeGauche.GetPositionAvtOffset().y);
						contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
						contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x-newTigeGauche.GetPositionAvtOffset().x,newTigeGauche.GetPosition().y-newTigeGauche.GetPositionAvtOffset().y);
						contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeGauche=newTigeGauche;
						//var offset = Math.sqrt(Math.pow((cotyleGauche.GetPositionPtMeca().x-tigeGauche.GetPositionPtMecaHaut().x),2)+Math.pow((cotyleGauche.GetPositionPtMeca().y-tigeGauche.GetPositionPtMecaHaut().y),2))*coefficient;
						var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x-tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y-tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleTige = tigeGauche.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
						document.getElementById('labelGammeTige').innerHTML = tailleTige[0];


					}
					imgTigeGauche.src=newTigeGauche.GetUrl();
				} else {
					var newTigeGauche = getTige(tableImplant, indexTigeGauche);
					imgTigeGauche = new Image;
					imgTigeGauche.onload=function () {
						var imgTigeGaucheWidth=imgTigeGauche.width;
						var imgTigeGaucheHeight=imgTigeGauche.height;
						newTigeGauche.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, tigeGauche.GetPosition(), tigeGauche.GetOrientation());
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x,newTigeGauche.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeGauche=newTigeGauche;
					}
					imgTigeGauche.src=newTigeGauche.GetUrl();
			}

		}	else {
				var newTigeGauche = getTige(tableImplant, indexTigeGauche);
				imgTigeGauche = new Image;
				imgTigeGauche.onload=function () {
					var imgTigeGaucheWidth=imgTigeGauche.width;
					var imgTigeGaucheHeight=imgTigeGauche.height;
					newTigeGauche.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, tigeGauche.GetPosition(), tigeGauche.GetOrientation());
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x,newTigeGauche.GetPosition().y);
					contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
					contexteTigeDrawTige.restore();
					tigeGauche=newTigeGauche;
				}
				imgTigeGauche.src=newTigeGauche.GetUrl();
			}
			var tailleTige = tigeGauche.GetNom().split("-");
			document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
		}

	}

	function DrawCotyle() {
		var contexteCotyleDrawCotyle=null;
		var canvasCotyle = null;
		/*var m_canvasWidth=900;
		var m_canvasHeight=800;*/
		var coefficient = sessionStorage.getItem("coefficient");
		var coteCotyle = document.getElementById("coteCotyle");
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
			canvasCotyle=document.getElementById("canvasCotyleDroit");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="28";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Gauche") {
					var newCotyleDroit=getCotyle(tableCotyle, indexCotyleDroit);
					imgCotyleDroit = new Image;
					imgCotyleDroit.onload=function () {
						var imgCotyleDroitWidth=imgCotyleDroit.width;
						var imgCotyleDroitHeight=imgCotyleDroit.height;
						console.log("patient cotyle draw gauche",patient);
						newCotyleDroit.Snap(imgCotyleDroitWidth, imgCotyleDroitHeight, cotyleDroit.GetDeltaDeplacement(), cotyleDroit.GetDeltaRotation(), patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleDroit=newCotyleDroit;
						var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleCotyle = cotyleDroit.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					}
					imgCotyleDroit.src=newCotyleDroit.GetUrl();
				} else {
					var newCotyleDroit = getCotyle(tableCotyle, indexCotyleDroit);
					imgCotyleDroit = new Image;
					imgCotyleDroit.onload=function () {
						var imgCotyleDroitWidth=imgCotyleDroit.width;
						var imgCotyleDroitHeight=imgCotyleDroit.height;
						newCotyleDroit.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, cotyleDroit.GetPosition(), cotyleDroit.GetOrientation());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleDroit=newCotyleDroit;
					}
					imgCotyleDroit.src=newCotyleDroit.GetUrl();
				}
			} else {
				var newCotyleDroit = getCotyle(tableCotyle, indexCotyleDroit);
				imgCotyleDroit = new Image;
				imgCotyleDroit.onload=function () {
					var imgCotyleDroitWidth=imgCotyleDroit.width;
					var imgCotyleDroitHeight=imgCotyleDroit.height;
					newCotyleDroit.Placement(imgCotyleDroitWidth, imgCotyleDroitHeight, cotyleDroit.GetPosition(), cotyleDroit.GetOrientation());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleDroit.GetPosition().x,newCotyleDroit.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -newCotyleDroit.GetImageLargeur() / 2, -newCotyleDroit.GetImageHauteur() / 2, newCotyleDroit.GetImageLargeur(), newCotyleDroit.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleDroit=newCotyleDroit;
				}
				imgCotyleDroit.src=newCotyleDroit.GetUrl();
			}
			var tailleCotyle = cotyleDroit.GetNom().split("-");
			document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
		}
		if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
			canvasCotyle=document.getElementById("canvasCotyleGauche");
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex="29";
			contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
			if (patient.GetOperationGuide()=="Guider") {
				if (patient.GetCoteOperation()=="Droit") {
					var newCotyleGauche=getCotyle(tableCotyle, indexCotyleGauche);
					imgCotyleGauche = new Image;
					imgCotyleGauche.onload=function () {
						var imgCotyleGaucheWidth=imgCotyleGauche.width;
						var imgCotyleGaucheHeight=imgCotyleGauche.height;
						console.log("patient cotyle draw droit",patient);
						newCotyleGauche.Snap(imgCotyleGaucheWidth, imgCotyleGaucheHeight, cotyleGauche.GetDeltaDeplacement(), cotyleGauche.GetDeltaRotation(), patient);
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleGauche=newCotyleGauche;
						var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleCotyle = cotyleGauche.GetNom().split("-");
						document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
						document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					}
					imgCotyleGauche.src=newCotyleGauche.GetUrl();
				} else {
					var newCotyleGauche = getCotyle(tableCotyle, indexCotyleGauche);
					imgCotyleGauche = new Image;
					imgCotyleGauche.onload=function () {
						var imgCotyleGaucheWidth=imgCotyleGauche.width;
						var imgCotyleGaucheHeight=imgCotyleGauche.height;
						newCotyleGauche.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, cotyleGauche.GetPosition(), cotyleGauche.GetOrientation());
						contexteCotyleDrawCotyle.save();
						contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
						contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
						contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
						contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
						contexteCotyleDrawCotyle.restore();
						cotyleGauche=newCotyleGauche;
					}
					imgCotyleGauche.src=newCotyleGauche.GetUrl();
				}
			} else {
				var newCotyleGauche = getCotyle(tableCotyle, indexCotyleGauche);
				imgCotyleGauche = new Image;
				imgCotyleGauche.onload=function () {
					var imgCotyleGaucheWidth=imgCotyleGauche.width;
					var imgCotyleGaucheHeight=imgCotyleGauche.height;
					newCotyleGauche.Placement(imgCotyleGaucheWidth, imgCotyleGaucheHeight, cotyleGauche.GetPosition(), cotyleGauche.GetOrientation());
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(newCotyleGauche.GetPosition().x,newCotyleGauche.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -newCotyleGauche.GetImageLargeur() / 2, -newCotyleGauche.GetImageHauteur() / 2, newCotyleGauche.GetImageLargeur(), newCotyleGauche.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
					cotyleGauche=newCotyleGauche;
				}
				imgCotyleGauche.src=newCotyleGauche.GetUrl();
			}
			var tailleCotyle = cotyleGauche.GetNom().split("-");
			document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
		}
	}

	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click',
		function() {
			function PlusTailleTige(){
				var coteTigeBtn = document.getElementById("coteTige");
				if (coteTigeBtn.options[coteTigeBtn.selectedIndex].value == "Gauche") {
                       console.log("debut", indexTigeDroit);
					if ((indexTigeDroit+1)>maximumTigeDroit) {
						indexTigeDroit= maximumTigeDroit;
						console.log("indexTigeDroit, maximumTigeDroit", indexTigeDroit, maximumTigeDroit);
					} else if(indexTigeDroit<maximumTigeDroit) {
						indexTigeDroit++;
						console.log("indexTigeDroit, maximumTigeDroit",indexTigeDroit, maximumTigeDroit);
					}
				} else {
					if ((indexTigeGauche+1)>maximumTigeGauche) {

						indexTigeGauche=maximumTigeGauche;
						console.log("indexTigeGauche maximumTigeGauche",indexTigeGauche, maximumTigeGauche);
					} else {
						indexTigeGauche++;
						console.log("indexTigeGauche maximumTigeGauche",indexTigeGauche, maximumTigeGauche);
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
					if ((indexTigeDroit-1)<minimumTigeDroit) {
						indexTigeDroit=minimumTigeDroit;
					} else {
						indexTigeDroit--;
					}
				} else {
					if (indexTigeGauche-1<minimumTigeGauche) {
						indexTigeGauche=minimumTigeGauche;
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
					if (indexCotyleDroit+1>maximumCotyleDroit) {
						indexCotyleDroit=maximumCotyleDroit;
					} else {
						indexCotyleDroit++;
					}
				} else {
					if (indexCotyleGauche+1>maximumCotyleGauche) {
						indexCotyleGauche=maximumCotyleGauche;
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
					if (indexCotyleDroit-1<minimumCotyleDroit) {
						indexCotyleDroit=minimumCotyleDroit;
					} else {
						indexCotyleDroit--;
					}
				} else {
					if (indexCotyleGauche-1<minimumCotyleGauche) {
						indexCotyleGauche=minimumCotyleGauche;
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
				var coefficient = sessionStorage.getItem("coefficient");
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
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();
					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";


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
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

					//UpTige(canvasTige, tigeGauche);
				}
			};
			MonterTige()
	}, false);

	var buttonDescendreTige = document.getElementById("buttonDescendreTige");
	buttonDescendreTige.addEventListener('click',
		function() {
			function DescendreTige(){
				var coefficient = sessionStorage.getItem("coefficient");
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
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

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
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DescendreTige()
	}, false);



	var buttonMonterCotyle = document.getElementById("buttonMonterCotyle");
	buttonMonterCotyle.addEventListener('click',
		function() {
			function MonterCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
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
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";


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
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			MonterCotyle()
	}, false);

	var buttonDescendreCotyle = document.getElementById("buttonDescendreCotyle");
	buttonDescendreCotyle.addEventListener('click',
		function() {
			function DescendreCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
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
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";


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
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
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
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
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
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
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
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
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
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
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
				document.getElementById("choix_gamme").style.display = "";
				document.getElementById("actionImplant").style.display="none";

				if (patient.GetOperationGuide() == "Guider") {
					$('.outilsDessin *').prop('disabled',false);
					$("#accordeon").accordion({active : 1});

				} else {
					$('.informationPatient *').prop('disabled',false);
					sessionStorage.setItem("calibrage", false);
	                sessionStorage.setItem("nbCercle",0);
	                sessionStorage.setItem("nbTrapeze", 0);
                	sessionStorage.setItem("nbPetitTroch", 0);
	                sessionStorage.setItem("retour",0);
					ZoomMode();
					$("#accordeon").accordion({active : 0});
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
                var imageSerf = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAArAKYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiisjVvEdrphMQzNcf3FP3fqe1ROcYLmk7F06cqkuWCuzXorhJ/FupSsTG0UK+ipn9TTW8X6vHaSiEWss5X92ZlIUH329q5lj6TdtTseW1kr6He0V8+XfxV8ZRXkiSXkMDxsVaJbZMA+nIJ/Wuy8C/FttXv4tL1+OKK4mO2G5iG1HbsrDsT2PT6V2bnC1Y9RorO1rXtN8O2X2vVbpLeHO1S2SWPoAOSfpXGzfGzw3GSI4dRlx3WEAH82FAj0OivOF+N/h8thrPU1Hr5SH/2auk8OePNC8UTGDTrsi5ALeRMhRyB1IB6/hmgDo6Kzda8QaZ4dtBc6teR20bHC7uWc+gA5P4Vx8/xr8NRsRFFqE2O6wAA/mwoA9CorzlPjd4eY4e01JR6+Uh/9mre0P4j+G9fuEt7W/Edw5wsVwhjZj6DPBPsDQB1FFYnifxbp3hG1guNU87ZO5jTyk3HOM1zi/Gbww7qo+35YgD/R/wD69AHfUVw2r/F3w5pN7Jaq1zeSRNtdraMFAR1G4kA/hUugfFXQNf1KKwi+1W1xMdsYuIwA59AQSM/WgC3478bQ+C9Mil8j7Rd3LFYIs4HA5Zj6DI/OvIrv4ueLLmRmjvILZCeEhgXA/FsmrvxY8Wad4lvLKDT/ADt9g80c3mR7RnKjj1+6a4GBlS4idxlFkVmGM8AjNAHuPwp8ReINffUW12WaWJFjMDPbiMHO7OCAM9BRXSeFvG2leLnuU0r7Rm2Cl/Nj2cNnGPyNFAFjxLrDaZaLHAcXE2Qp/ujua4QkkkkkknJJ6mtnxY7Prrq3RI1C/wA/61V0bTW1S/WLkRqN8hHp6fjXiYmUq1blXoj6HCQhQoc766sxNQ1ay0tQ15cJGT0Xqx+gHNUbXxdpN3cLCk7ozHCmVCoJ+tedXdxLdXk007M0juSSxyevT8K9I+EngaHVpG13VIhJbQvttomGVdx1cjuB0Hvn0rrjl8OX3nqcUszqc3upWKus/DzX/EGtNdadZKsDxpmWZwgJ6cDqeMdq5nxH4L13wkkc+o2wWIthJ4X3pu6gZ6g8d6+nKwvE+mrr0FtpLqGjknjmnJ/hjRg35sQF/E+ldtOHJFR7Hn1J+0m59zyj4z3U82r6NHMSAtgJNvYOzHd/6CK4TSls31ezXU3ZLFpkFwy5yI8/N09q97+IPhDSvFMdv9r1GLT7+BT5MrMvKnqCpIyMjt0rzKX4TaoZRHY6ro14x+6qXO1j+GDVmZq+I/BHhvVRaP4N1bSYT8wmSe/PzDjaQDk565qx4R+FuuaT4m03VJLrT3treXe5hmZiRgjj5cHrXnviDwxqfhm7jttYtlieRd0ZDB1cdDgirPgzXr3QPEthJZzyJFJOkc0QY7JEZgCCOnegZs/F67mufiBcxSOTHbRRxxL2UFQx/MmsHwjYWWqeK9Ps9TIFnLIRKS+zgKT97tyBWv8AFb/ko2pf7sX/AKLWsHw/ozeIdetNLWVYWuWKiRl3BcKT0/CgDuPib4X8M6Jo9pc6B5aztceW6x3Jkyu0nOCT3A5rzU9ODgjoR2r1Cb4HvZp5k/iGzhQnG54Noz6ZLVAfhDBj/kbdN/75H/xdAF34nXMt58OvCtxOxeWUI7sepJh5NeUscKT6CvW/ivZjTvAnhqzWZZxbssYlTo+IiMj615G/3G+hoA9G8a/Dmw8NeEbTU7K4vJriSSNHV8FTuUkkADI6VyvhCORfGeikxuAL6E8qf74r6X0//kG2v/XJP5CrFAjwP4qeELLwxfWtxZzXEj6hJNJKJWBCnIPGAP7xrhYEEtzDG2QHkVTj0JAr1j47/f0P6Tf+yV5VZ/8AH9bf9dk/9CFAz6O8I+BNP8GyXT6fPdSm5Ch/PZTjbnGMAetFdNRQI5zxRokt6Vu7Rd8qLtdB1YdiPes/wrf2+nT3EN4fJeTbtZxjpng+nWuzpCqk5Kgn3FcssMva+1i7M7I4t+x9jNXR8/ePvAl1pWq3GoaVC93pU7mUNCpbyCTkq2O2Twa774Z+MNDXwjY6ZLew215aqY5IZTtLHcTuGeuc16JTBEisWVFDHuBzXUjkfkJDOlwgeIkqehIIz+dOCKrEgct1PrTqKBHlfxj8IalrM9jqmm2r3YgiaGWKMZcDOQwHcdeleUafLqXhzVob61t5ra7t2JQyQHjgg5BHoTX1XRQB8weIfEuteLrmCXVMytApWNYoCoGevA+grb8BeA9W1fX7K6urKa2063lWaSWZCm/achVB5OSBz0r6DAA6CloA8g+K3gLU77Wjrmk273aSxqs8UfLqyjAYDuCMdOeK81spdU8ParDewQXFtd2zbkMkB4OMcgj0Jr6pooA+afEPjXxB4sso7PUyskCOJAkVvtywBAJ6nuapaT4M1rXZ1isdKnIY4MskRSNfcsRivqIADoKWgDyf4saPLZ+C/D+n2sUtx9kdYiY4y3Cx4zgV5K+l6gUb/iX3nT/n3f8Awr6yooAr2AI062BBBES8H6CrFFFAHkvxxtbi5fRfs9vNNtE2fLjLY+51wK8utNMv/t1uTYXgAlTkwP8A3h7V9V0UAFFFFAH/2Q==";
				
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
				}
				if (patient.GetCoteOperation()=="Droit") {
					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
				}
				html2canvas(divLayer,{
					onrendered: function (canvas) {
						console.log("canvas",canvas);
						var now = new Date();
						var nowMonth = now.getMonth() + 1;
						var nowMonthString = null;
						if (nowMonth<10) {
							nowMonthString="0"+nowMonth;
						} else {
							nowMonthString=nowMonth;
						}

						var divData = canvas.toDataURL("image/jpeg");

						var docPDF = new jsPDF();
						docPDF.setFontSize(12);
						docPDF.addImage(imageSerf, 'JPEG', 15, 20, 45, 12);
						docPDF.text(160, 30, now.getDate() + "/" + nowMonthString + "/" + now.getFullYear());
						docPDF.setFontType("bold");
						docPDF.setFontSize(18);
						docPDF.text(30, 50, "Planification pour la chirurgie de la hanche du patient :");
						docPDF.setFontSize(12);
						docPDF.setFontType("normal");
						docPDF.text(15, 70, "Nom : " + patient.GetNom());
						docPDF.text(15, 75, "Prénom : " + patient.GetPrenom());
						docPDF.setFontType("bold");
						docPDF.text(15, 85, "Votre image DICOM d'origine :");
						docPDF.addImage(dicomImage, 'JPEG', 15, 90, 180, ((180*m_canvasHeight)/m_canvasWidth));
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

						if(patient.GetOperationGuide()=="Guider")
						{
							docPDF.text(15, 35, "Offset = "+offset+" mm");
							docPDF.text(15, 40, "Hauteur = "+hauteur+" mm");
							docPDF.addImage(divData, 'JPEG', 15, 45, 180, ((180*m_canvasHeight)/m_canvasWidth));
						} else if (patient.GetOperationGuide()=="Non guider") {
							docPDF.addImage(divData, 'JPEG', 15, 35, 180, ((180*m_canvasHeight)/m_canvasWidth));
						}
						docPDF.save(patient.GetNom()+" "+patient.GetPrenom());
						
					},
					id: "pdf"
				});
			};
			ValiderImplant()
	}, false);
	
	var buttonZoom = document.getElementById("buttonZoom");
	buttonZoom.addEventListener('click', 
		function() {
			function Zoom(){
				ZoomMode();
			};
			Zoom()
	}, false);

	var buttonSeuil = document.getElementById("buttonSeuil");
	buttonSeuil.addEventListener('click', 
		function() {
			function Seuil(){
				SeuilMode();
			};
			Seuil()
	}, false);

	var buttonDeplacerTige = document.getElementById("buttonDeplacerTige");
	buttonDeplacerTige.addEventListener('click', 
		function() {
			function DeplacerTige(){
				var canvasTigeDroit=document.getElementById("canvasTigeDroit");
				var canvasTigeGauche=document.getElementById("canvasTigeGauche");
				var canvasCotyleDroit=document.getElementById("canvasCotyleDroit");
				var canvasCotyleGauche=document.getElementById("canvasCotyleGauche");
				var coteTige = document.getElementById("coteTige");

				if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
					canvasTigeDroit.style.zIndex=100;
					canvasTigeGauche.style.zIndex=30;
					canvasCotyleDroit.style.zIndex=35;
					canvasCotyleGauche.style.zIndex=40;

					draggerTigeDroit(true);

					var contexteTigeMoveTige=canvasTigeDroit.getContext("2d");
					contexteTigeMoveTige.save();
					contexteTigeMoveTige.clearRect(0, 0, canvasTigeDroit.width, canvasTigeDroit.height);
					contexteTigeMoveTige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contexteTigeMoveTige.rotate(tigeDroit.GetOrientation());
					contexteTigeMoveTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contexteTigeMoveTige.restore();
					
					draggerTigeDroit(false);

				}

				if (coteTige.options[coteTige.selectedIndex].value == "Droit") {
					canvasTigeDroit.style.zIndex=25;
					canvasTigeGauche.style.zIndex=100;
					canvasCotyleDroit.style.zIndex=35;
					canvasCotyleGauche.style.zIndex=40;

					draggerTigeGauche(true);

           			var contexteTigeMoveTige=canvasTigeGauche.getContext("2d");
					contexteTigeMoveTige.save();
					contexteTigeMoveTige.clearRect(0, 0, canvasTigeGauche.width, canvasTigeGauche.height);
					contexteTigeMoveTige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contexteTigeMoveTige.rotate(tigeGauche.GetOrientation());
					contexteTigeMoveTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contexteTigeMoveTige.restore();

					draggerTigeGauche(false);
				}

			};
			DeplacerTige()
	}, false);

	var buttonDeplacerCotyle = document.getElementById("buttonDeplacerCotyle");
	buttonDeplacerCotyle.addEventListener('click', 
		function() {
			function DeplacerCotyle(){
				var canvasTigeDroit=document.getElementById("canvasTigeDroit");
				var canvasTigeGauche=document.getElementById("canvasTigeGauche");
				var canvasCotyleDroit=document.getElementById("canvasCotyleDroit");
				var canvasCotyleGauche=document.getElementById("canvasCotyleGauche");
				var coteCotyle = document.getElementById("coteCotyle");
				//console.log("imgCotyleGauche",imgCotyleGauche);
				//console.log("imgCotyleDroit",imgCotyleDroit);

				if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
					canvasTigeDroit.style.zIndex=25;
					canvasTigeGauche.style.zIndex=30;
					canvasCotyleDroit.style.zIndex=100;
					canvasCotyleGauche.style.zIndex=40;

					draggerCotyleDroit(true);

					var contexteCotyleMoveCotyleD=canvasCotyleDroit.getContext("2d");
					contexteCotyleMoveCotyleD.save();
					contexteCotyleMoveCotyleD.clearRect(0, 0, canvasCotyleDroit.width, canvasCotyleDroit.height);
					contexteCotyleMoveCotyleD.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contexteCotyleMoveCotyleD.rotate(cotyleDroit.GetOrientation());
					contexteCotyleMoveCotyleD.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contexteCotyleMoveCotyleD.restore();
					
					draggerCotyleDroit(false);

				}

				if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
					canvasTigeDroit.style.zIndex=25;
					canvasTigeGauche.style.zIndex=30;
					canvasCotyleDroit.style.zIndex=35;
					canvasCotyleGauche.style.zIndex=100;

					draggerCotyleGauche(true);
					
					var contexteCotyleMoveCotyleG=canvasCotyleGauche.getContext("2d");
					contexteCotyleMoveCotyleG.save();
					contexteCotyleMoveCotyleG.clearRect(0, 0, canvasCotyleGauche.width, canvasCotyleGauche.height);
					contexteCotyleMoveCotyleG.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contexteCotyleMoveCotyleG.rotate(cotyleGauche.GetOrientation());
					contexteCotyleMoveCotyleG.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contexteCotyleMoveCotyleG.restore();
					
					draggerCotyleGauche(false);
				}

			};
			DeplacerCotyle()
	}, false);

	var buttonTournerHautTige = document.getElementById("buttonTournerHautTige");
	buttonTournerHautTige.addEventListener('click', 
		function() {
			function TournerHautTige(){
				console.log("TournerHautTige");
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.TournerHaut();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.TournerHaut();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
				}
			};
			TournerHautTige()
	}, false);

	var buttonTournerBasTige = document.getElementById("buttonTournerBasTige");
	buttonTournerBasTige.addEventListener('click', 
		function() {
			function TournerBasTige(){
				console.log("TournerBasTige");
				//console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.TournerBas();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					//var m_canvasWidth=900;
					//var m_canvasHeight=800;
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.TournerBas();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
				}
			};
			TournerBasTige()
	}, false);

	var buttonDroitTige = document.getElementById("buttonDroitTige");
	buttonDroitTige.addEventListener('click',
		function() {
			function DeplacementDroitTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementDroit();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.MouvementDroit();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementDroitTige()
	}, false);

	var buttonGaucheTige = document.getElementById("buttonGaucheTige");
	buttonGaucheTige.addEventListener('click',
		function() {
			function DeplacementGaucheTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementGauche();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.MouvementGauche();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementGaucheTige()
	}, false);

	var buttonGaucheCotyle = document.getElementById("buttonGaucheCotyle");
	buttonGaucheCotyle.addEventListener('click',
		function() {
			function DeplacementGaucheCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.MouvementGauche();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";


				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.MouvementGauche();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementGaucheCotyle()
	}, false);

	var buttonDroitCotyle = document.getElementById("buttonDroitCotyle");
	buttonDroitCotyle.addEventListener('click',
		function() {
			function DeplacementDroitCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasCotyle = document.getElementById("canvasCotyleDroit");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleDroit.MouvementDroit();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contextecotyle.rotate(cotyleDroit.GetOrientation());
					contextecotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contextecotyle.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";


				} else {
					var canvasCotyle = document.getElementById("canvasCotyleGauche");
					canvasCotyle.width=m_canvasWidth;
					canvasCotyle.height=m_canvasHeight;
					canvasCotyle.style.zIndex = "26";
					var contextecotyle = canvasCotyle.getContext("2d");
					cotyleGauche.MouvementDroit();
					contextecotyle.save();
					contextecotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contextecotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contextecotyle.rotate(cotyleGauche.GetOrientation());
					contextecotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contextecotyle.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementDroitCotyle()
	}, false);

	var buttonHautTige = document.getElementById("buttonHautTige");
	buttonHautTige.addEventListener('click',
		function() {
			function DeplacementHautTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementHaut();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.MouvementHaut();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementHautTige()
	}, false);

	var buttonBasTige = document.getElementById("buttonBasTige");
	buttonBasTige.addEventListener('click',
		function() {
			function DeplacementBasTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				console.log("m_canvasWidth",m_canvasWidth,"m_canvasHeight",m_canvasHeight);
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementBas();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					var offset = Math.round(( Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

				} else {
					var canvasTige = document.getElementById("canvasTigeGauche");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeGauche.MouvementBas();
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					var offset =   Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementBasTige()
	}, false);
});

	