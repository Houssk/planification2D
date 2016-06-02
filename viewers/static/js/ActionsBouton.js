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
	var maximumTigeDroit = null;
	var minimumTigeDroit = null;

	var indexTigeGauche = null;
	var maximumTigeGauche = null;
	var minimumTigeGauche = null;

	var indexCotyleGauche = null;
	var maximumCotyleDroit = null;
	var minimumCotyleDroit = null;

	var indexCotyleDroit = null;
	var maximumCotyleGauche = null;
	var minimumCotyleGauche = null;

	var tableTige = null;
	var tableCotyle = null;

	var m_canvasWidth = null;
	var m_canvasHeight = null;


	sessionStorage.setItem("boolNom",false);
	sessionStorage.setItem("boolPrenom",false);
	sessionStorage.setItem("boolCoteOperation",false);
	sessionStorage.setItem("boolTypeOperation",false);


	var gammeCimenteOuPas = document.getElementById("gammeCimenteOuPas");
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
	});

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
									sessionStorage.setItem("calibrageAFaire", false);

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
									}

									if (patient.GetOperationGuide()=="Non guider") { // Cas ou l'opération est non guidée. Active uniquement la boite implant.
										$('.implants *').prop('disabled',false);
										$("#accordeon").accordion({active : 2});
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
				var nomPatient = document.getElementById("nomPatient");
				var prenomPatient = document.getElementById("prenomPatient");
				var coteChirurgie = document.getElementById("coteChirurgie");
				var typeChirurgie = document.getElementById("typeChirurgie");
				var tailleBille = document.getElementById("tailleBille");
				var gammeCimenteOuPas = document.getElementById("gammeCimenteOuPas");
				var gammeVariseOuPas = document.getElementById("gammeVariseOuPas");
				var gammeCimenteOuNe = document.getElementById("gammeCimenteOuNe");
				var valeurGammeVariseOuPas = gammeVariseOuPas.options[gammeVariseOuPas.selectedIndex].value;
				var gammeColleretteOuPas = document.getElementById("gammeColleretteOuPas");
				var valeurGammeCimenteOuPas = gammeCimenteOuPas.options[gammeCimenteOuPas.selectedIndex].value;
				var valeurGammeColleretteOuPas = gammeColleretteOuPas.options[gammeColleretteOuPas.selectedIndex].value;
				var valeurGammeCimenteOuNe = gammeCimenteOuNe.options[gammeCimenteOuNe.selectedIndex].value;

                // Condition pour le choix des bons index
                // Choix tige
				if(valeurGammeCimenteOuPas=="cimente" && valeurGammeVariseOuPas == "varise" ){
					console.log(" cimenté , varise : implant_ax_cem_var");

					tableTige ="implant_ax_cem_var";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;

				}
				else if(valeurGammeCimenteOuPas=="cimente" && valeurGammeVariseOuPas == "standard" ){
					console.log("cimenté , standard : implant_ax_cem_std");

					tableTige ="implant_ax_cem_std";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;

				}
				else if(valeurGammeCimenteOuPas=="sansCiment" && valeurGammeVariseOuPas == "varise" && valeurGammeColleretteOuPas == "collerette"){
					console.log("sansCiment , varise , collerette : implant_ax_ha_var_col");
					
					tableTige ="implant_ax_ha_var_col";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;
				}
				else if(valeurGammeCimenteOuPas=="sansCiment" && valeurGammeVariseOuPas == "varise" && valeurGammeColleretteOuPas == "sansCollerette"){
					console.log("sansCiment , varise , sansCollerette : implant_ax_ha_var");

					tableTige ="implant_ax_ha_var";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;
				}
				else if(valeurGammeCimenteOuPas=="sansCiment" && valeurGammeVariseOuPas == "standard" && valeurGammeColleretteOuPas == "collerette"){
					console.log("sansCiment , standard , collerette : implant_ax_ha_std_col");

					tableTige ="implant_ax_ha_std_col";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;
				}
				else if(valeurGammeCimenteOuPas=="sansCiment" && valeurGammeVariseOuPas == "standard" && valeurGammeColleretteOuPas == "sansCollerette"){
					console.log("sansCiment , standard , sansCollerette : implant_ax_ha_std");
					
					tableTige ="implant_ax_ha_std";
					
					indexTigeDroit = 4;
					maximumTigeDroit =10;
					minimumTigeDroit = 1;

					indexTigeGauche = 14;
					maximumTigeGauche =20;
					minimumTigeGauche= 11;
				}

				//Choix Cotyle
				if(valeurGammeCimenteOuNe=="cimente" ) {
					console.log("cimente : cotyle_ax_dm_cem");

					tableCotyle = "cotyle_ax_dm_cem";

					indexCotyleDroit = 6;
					maximumCotyleDroit = 13;
					minimumCotyleDroit = 1;
					
					indexCotyleGauche = 19;
					maximumCotyleGauche = 14;
					minimumCotyleGauche = 25;
				}
				else if (valeurGammeCimenteOuNe=="sansCiment" ) {
					console.log("sansCiment : cotyle_ax_sm_ne");

					tableCotyle = "cotyle_ax_sm_ne";

					indexCotyleDroit = 5;
					maximumCotyleDroit = 11;
					minimumCotyleDroit = 1;
					
					indexCotyleGauche = 16;
					maximumCotyleGauche = 12;
					minimumCotyleGauche = 22;
				}


				////////////////////////////////////////////////////// snap /////////////////////////////

				m_canvasWidth=document.getElementById("dwv-imageLayer").width;
				m_canvasHeight=document.getElementById("dwv-imageLayer").height;
				if (patient.GetOperationGuide()=="Non guider") {
					var newTigeGauche=getTige(tableTige, indexTigeGauche);
					var newTigeDroit=getTige(tableTige, indexTigeDroit);
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
						document.getElementById('labelTailleTige').innerHTML = newTigeDroit.GetNom();
						//console.log("newTigeDroit.GetUrl()",newTigeDroit.GetUrl());
					} else {
						imgTigeGauche.src=newTigeGauche.GetUrl();
						document.getElementById('labelTailleTige').innerHTML = newTigeGauche.GetNom();
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
						document.getElementById('labelTailleCotyle').innerHTML = newCotyleDroit.GetNom();
					} else {
						imgCotyleGauche.src=newCotyleGauche.GetUrl();
						document.getElementById('labelTailleCotyle').innerHTML = newCotyleGauche.GetNom();
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
					tigeDroit = getTige(tableTige, indexTigeDroit);
					cotyleDroit = getCotyle(tableCotyle, indexCotyleDroit);
					tigeGauche = getTige(tableTige, indexTigeGauche);
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
							tigeDroit.Snap(imgTigeDroitWidth, imgTigeDroitHeight, 0, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
							contextetige.rotate(tigeDroit.GetOrientation());
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
							tigeGauche.Snap(imgTigeDroitWidth, imgTigeDroitHeight, 0, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
							contextetige.rotate(tigeGauche.GetOrientation());
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
							tigeDroit.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, 0, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
							contextetige.rotate(tigeDroit.GetOrientation());
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
							tigeGauche.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, 0, patient);
							contextetige.save();
							contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
							contextetige.rotate(tigeGauche.GetOrientation());
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
						document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
					} else {
						imgTigeGauche.src=tigeGauche.GetUrl();
						document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
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
							document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
							document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();

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
							document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
							document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();
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
							document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
							document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();

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
							document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
							document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();
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
						document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
						document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();


					} else {

						var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
						document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();

					}
				}


				/////////////////////////////////////////////////////////////////////////////////////////


				document.getElementById("gammeCimenteOuPas").style.display = "none";
				document.getElementById("gammeVariseOuPas").style.display = "none";
				document.getElementById("gammeColleretteOuPas").style.display = "none";
				document.getElementById("gammeCimenteOuNe").style.display = "none";
				document.getElementById("choix_cotyle").style.display = "none";
				document.getElementById("choix_tige").style.display = "none";
				document.getElementById("buttonValideGamme").style.display = "none";
				document.getElementById("actionImplant").style.display="";


				console.log(valeurGammeCimenteOuPas,valeurGammeVariseOuPas,valeurGammeColleretteOuPas);
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
					var newTigeDroit=getTige(tableTige, indexTigeDroit);
					imgTigeDroit = new Image;
					imgTigeDroit.onload=function () {
						var imgTigeDroitWidth=imgTigeDroit.width;
						var imgTigeDroitHeight=imgTigeDroit.height;
						newTigeDroit.Snap(imgTigeDroitWidth, imgTigeDroitHeight, tigeDroit.GetDeltaDeplacement(), patient);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x,newTigeDroit.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeDroit=newTigeDroit;

						var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						document.getElementById('labelTailleTige').innerHTML = tigeDroit.GetNom();
					}
					imgTigeDroit.src=newTigeDroit.GetUrl();

				} else {
					var newTigeDroit = getTige(tableTige, indexTigeDroit);
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
					document.getElementById('labelTailleTige').innerHTML = newTigeDroit.GetNom();
				}
			} else {
				var newTigeDroit = getTige(tableTige, indexTigeDroit);
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
					var newTigeGauche=getTige(tableTige, indexTigeGauche);
					imgTigeGauche = new Image;
					imgTigeGauche.onload=function () {
						var imgTigeGaucheWidth=imgTigeGauche.width;
						var imgTigeGaucheHeight=imgTigeGauche.height;
						newTigeGauche.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, tigeGauche.GetDeltaDeplacement(), patient);
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x,newTigeGauche.GetPosition().y);
						contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
						contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeGauche=newTigeGauche;
						//var offset = Math.sqrt(Math.pow((cotyleGauche.GetPositionPtMeca().x-tigeGauche.GetPositionPtMecaHaut().x),2)+Math.pow((cotyleGauche.GetPositionPtMeca().y-tigeGauche.GetPositionPtMecaHaut().y),2))*coefficient;
						var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x-tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y-tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();

					}
					imgTigeGauche.src=newTigeGauche.GetUrl();
					document.getElementById('labelTailleTige').innerHTML = newTigeGauche.GetNom();
				} else {
					var newTigeGauche = getTige(tableTige, indexTigeGauche);
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
					document.getElementById('labelTailleTige').innerHTML = newTigeGauche.GetNom();
			}

		}	else {
				var newTigeGauche = getTige(tableTige, indexTigeGauche);
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
			document.getElementById('labelTailleTige').innerHTML = tigeGauche.GetNom();
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
						document.getElementById('labelTailleCotyle').innerHTML = cotyleDroit.GetNom();
					}
					imgCotyleDroit.src=newCotyleDroit.GetUrl();
					document.getElementById('labelTailleCotyle').innerHTML = newCotyleDroit.GetNom();
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
					document.getElementById('labelTailleCotyle').innerHTML = newCotyleDroit.GetNom();
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
						document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();
					}
					imgCotyleGauche.src=newCotyleGauche.GetUrl();
					document.getElementById('labelTailleCotyle').innerHTML = newCotyleGauche.GetNom();
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
					document.getElementById('labelTailleCotyle').innerHTML = newCotyleGauche.GetNom();
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
			document.getElementById('labelTailleCotyle').innerHTML = cotyleGauche.GetNom();
		}
	}

	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click',
		function() {
			function PlusTailleTige(){
				var coteTigeBtn = document.getElementById("coteTige");
				if (coteTigeBtn.options[coteTigeBtn.selectedIndex].value == "Gauche") {
					if (indexTigeDroit+1>maximumTigeDroit) {
						indexTigeDroit= maximumTigeDroit;
					} else {
						indexTigeDroit++;
					}
				} else {
					if (indexTigeGauche+1>maximumTigeGauche) {
						indexTigeGauche=maximumTigeGauche;
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
					if (indexTigeDroit-1<minimumTigeDroit) {
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
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
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
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
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
					contextetige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contextetige.rotate(tigeDroit.GetOrientation());
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
					contextetige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contextetige.rotate(tigeGauche.GetOrientation());
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
				document.getElementById("gammeCimenteOuPas").style.display = "";
				document.getElementById("gammeVariseOuPas").style.display = "";
				document.getElementById("gammeColleretteOuPas").style.display = "";
				document.getElementById("gammeCimenteOuNe").style.display = "";
				document.getElementById("choix_cotyle").style.display = "";
				document.getElementById("choix_tige").style.display = "";
				document.getElementById("buttonValideGamme").style.display = "";
				document.getElementById("actionImplant").style.display="none";

				var gammeCimenteOuPas = document.getElementById("gammeCimenteOuPas");
				var valeurGammeCimenteOuPas = gammeCimenteOuPas.options[gammeCimenteOuPas.selectedIndex].value;
				if(valeurGammeCimenteOuPas=="cimente" ){
					document.getElementById("gammeColleretteOuPas").style.display = "none";
				}

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
                var imageSerf = "data:image/png;base64,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";
				
				//docPDF.addImage(divData, 'JPEG', 15, 35, 180, ((180*hImageLayer)/wImageLayer));
				//docPDF.save(patient.GetNom()+" "+patient.GetPrenom());
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
});