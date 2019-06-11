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

	var indexTigeDroit = null; // variable de stockage de l'id de la tige droite en cours (écran)
	var indexCotyleDroit = null; // variable de stockage de l'id du cotyle droit en cours (écran)
	var indexTigeGauche = null; // variable de stockage de l'id de la tige gauche en cours (écran)
	var indexCotyleGauche = null; // variable de stockage de l'id du cotyle gauche en cours (écran)

	var maximumTigeDroit= null; // variable de stockage de l'id max de la tige droite (écran)
	var minimumTigeDroit=null; // variable de stockage de l'id min de la tige droite (écran)
	var maximumTigeGauche= null; // variable de stockage de l'id max de la tige gauche (écran)
	var minimumTigeGauche=null; // variable de stockage de l'id min de la tige gauche (écran)

	var maximumCotyleDroit = null; // variable de stockage de l'id max du cotyle droit (écran)
	var maximumCotyleGauche = null; // variable de stockage de l'id min du cotyle droit (écran)
	var minimumCotyleDroit = null; // variable de stockage de l'id max du cotyle gauche (écran)
	var minimumCotyleGauche = null; // variable de stockage de l'id min du cotyle gauche (écran)

	var m_canvasWidth = null; // variable de stockage de la taille (largeur) du canvas de travail
	var m_canvasHeight = null; // variable de stockage de la taille (hauteur) du canvas de travail

	var tableImplant = null; // variable de stockage du nom de la table implant (tige) utile
	var tableCotyle = null; // variable de stockage du nom de la table cotyle utile

	var firstSideChangedTige = true; // cette variable permet de savoir si l'utilisateur à effectué un changement de coté sur la tige
	var firstSideChangedCotyle = true; // cette variable permet de savoir si l'utilisateur à effectué un changement de coté sur le cotyle


	sessionStorage.setItem("boolNom",false); // ce stockage permet de savoir si le champs "Nom" est rempli pour gérer l'affichage du bouton "valider patient"
	sessionStorage.setItem("boolPrenom",false); // ce stockage permet de savoir si le champs "Prénom" est rempli pour gérer l'affichage du bouton "valider patient"
	sessionStorage.setItem("boolCoteOperation",false); // ce stockage permet de savoir si le champs "Coté d'opération" est rempli pour gérer l'affichage du bouton "valider patient"
	sessionStorage.setItem("boolTypeOperation",false); // ce stockage permet de savoir si le champs "Type d'opération" est rempli pour gérer l'affichage du bouton "valider patient"

	/* Change la couleur du fond */
	var couleurGris = document.getElementById("couleurGris");
	couleurGris.addEventListener('click', function() {
		function CouleurGris(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = '#333333';
		};
		CouleurGris()
	},false);

	/* Change la couleur du fond */
	var couleurGrisClaire = document.getElementById("couleurGrisClaire");
	couleurGrisClaire.addEventListener('click', function() {
		function CouleurGrisClaire(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = '#ecf0f5';
		};
		CouleurGrisClaire()
	},false);

	/* Change la couleur du fond */
	var couleurNoir = document.getElementById("couleurNoir");
	couleurNoir.addEventListener('click', function() {
		function CouleurNoir(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'black';
		};
		CouleurNoir()
	},false);

	/* Change la couleur du fond */
	var couleurBlanc = document.getElementById("couleurBlanc");
	couleurBlanc.addEventListener('click', function() {
		function CouleurBlanc(){
			var div = document.getElementById('pageMain');
			div.style.backgroundColor = 'white';
		};
		CouleurBlanc()
	},false);

	/*
	*	Cette fonction assure la gestion de l'affichage de du bouton "Valider patient"
	*	Elle est appelé à chaque changement du contenu des champs "Nom" "Prénom" "Coté d'opération" "Type d'opération"
	*/
	function ApparitionBoutonValiderPatient() {
		if (sessionStorage.getItem("boolPrenom")=="true" &&
			sessionStorage.getItem("boolNom")=="true" &&
			sessionStorage.getItem("boolTypeOperation")=="true" &&
			sessionStorage.getItem("boolCoteOperation")=="true" &&
			sessionStorage.getItem("taille_bille_px")!=null) {
			document.getElementById("buttonValideInformationPatient").style.display="";
		} else {
			document.getElementById("buttonValideInformationPatient").style.display="none";
		}
	}

	/*
	*	Gère le changement du contenu du champs "Nom"
	*	Actualise la variable d'état du remplissage du champs
	*	Appel la fonction de gestion de l'affichage de du bouton "Valider patient"
	*/
	var textBoxNom = document.getElementById("nomPatient");
	textBoxNom.addEventListener('change',function(){
		if (textBoxNom.value!="") {
			sessionStorage.setItem("boolNom",true);
		} else {
			sessionStorage.setItem("boolNom",false);
		}
		ApparitionBoutonValiderPatient();
	});

	/*
	*	Gère le changement du contenu du champs "Prénom"
	*	Actualise la variable d'état du remplissage du champs
	*	Appel la fonction de gestion de l'affichage de du bouton "Valider patient"
	*/
	var textBoxPrenom = document.getElementById("prenomPatient");
	textBoxPrenom.addEventListener('change',function(){
		if (textBoxPrenom.value!="") {
			sessionStorage.setItem("boolPrenom",true);
		} else {
			sessionStorage.setItem("boolPrenom",false);
		}
		ApparitionBoutonValiderPatient();
	});

	/*
	*	Gère le changement du contenu du champs "Type d'opération"
	*	Actualise la variable d'état du remplissage du champs
	*	Appel la fonction de gestion de l'affichage de du bouton "Valider patient"
	*/
	var listBoxTypeOperation = document.getElementById("typeChirurgie");
	listBoxTypeOperation.addEventListener('change',function(){
		if (listBoxTypeOperation.selectedIndex != 0) {
			sessionStorage.setItem("boolCoteOperation",true);
		} else {
			sessionStorage.setItem("boolCoteOperation",false);
		}
		ApparitionBoutonValiderPatient();
	});

	/*
	*	Gère le changement du contenu du champs "Coté d'opération"
	*	Actualise la variable d'état du remplissage du champs
	*	Appel la fonction de gestion de l'affichage de du bouton "Valider patient"
	*/
	var listBoxCoteOperation = document.getElementById("coteChirurgie");
	listBoxCoteOperation.addEventListener('change',function(){
		if (listBoxCoteOperation.selectedIndex != 0) {
			sessionStorage.setItem("boolTypeOperation",true);
		} else {
			sessionStorage.setItem("boolTypeOperation",false);
		}
		ApparitionBoutonValiderPatient();
	});

	/*
	*	Cette fonction assure le calcul de l'offset en X et Y en fonction du coefficient de calibrage
	*	Elle assure également leur affichage
	*/
	function CalculOffset() {
		var coefficient = sessionStorage.getItem("coefficient");
		if (patient.GetCoteOperation()=="Gauche") {
			var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
			var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
			document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
			document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
		} else {
			var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
			var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
			document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
			document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
		}
	}

	/*
	*	Cette fonction assure la sélection, la mise en position et l'affichage des tiges
	*	Elle est appelée a chaque changement de gamme
	*/
	function TigeSelection() {
		// Sélection de la gamme de la tige et renseignement des ids clé
		var gammeTige = document.getElementById("gammeTige");
		var valeurGammeTige = gammeTige.options[gammeTige.selectedIndex].value;
		if (valeurGammeTige == "implant_hype") {
			var gammeTigeHype = document.getElementById("gammeTigeHype");
			var valeurGammeTigeHype = gammeTigeHype.options[gammeTigeHype.selectedIndex].value;
			switch(valeurGammeTigeHype)
			{
				case "implant_scs_std" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 12;
					maximumTigeDroit = 11;
					minimumTigeDroit = 1;
					maximumTigeGauche = 22;
					minimumTigeGauche= 12;
					break;
				}
				case "implant_scc_std_col" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 12;
					maximumTigeDroit = 11;
					minimumTigeDroit = 1;
					maximumTigeGauche = 22;
					minimumTigeGauche= 12;
					break;
				}
				case "implant_scl_lat" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 10;
					maximumTigeDroit = 9;
					minimumTigeDroit = 1;
					maximumTigeGauche = 18;
					minimumTigeGauche= 10;
					break;
				}
				case "implant_scv_coxa_vara" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 9;
					maximumTigeDroit = 8;
					minimumTigeDroit = 1;
					maximumTigeGauche = 16;
					minimumTigeGauche= 9;
					break;
				}
				case "implant_scho_high_offset" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 10;
					maximumTigeDroit = 9;
					minimumTigeDroit = 1;
					maximumTigeGauche = 18;
					minimumTigeGauche= 10;
					break;
				}
				case "implant_scc_mini_std" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 7;
					maximumTigeDroit = 6;
					minimumTigeDroit = 1;
					maximumTigeGauche = 12;
					minimumTigeGauche= 7;
					break;
				}
				case "implant_scla_mini_lat" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 7;
					maximumTigeDroit = 6;
					minimumTigeDroit = 1;
					maximumTigeGauche = 12;
					minimumTigeGauche= 7;
					break;
				}
				case "implant_acs_cim_std" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 12;
					maximumTigeDroit = 11;
					minimumTigeDroit = 1;
					maximumTigeGauche = 22;
					minimumTigeGauche= 12;
					break;
				}
				case "implant_acl_cim_lat" : {
					tableImplant = valeurGammeTigeHype;
					indexTigeDroit = 1;
					indexTigeGauche = 9;
					maximumTigeDroit = 8;
					minimumTigeDroit = 1;
					maximumTigeGauche = 16;
					minimumTigeGauche= 9;
					break;
				}
			}
		} else if (valeurGammeTige == "implant_libra") {
			var gammeTigeLibra = document.getElementById("gammeTigeLibra");
			var valeurGammeTigeLibra = gammeTigeLibra.options[gammeTigeLibra.selectedIndex].value;
			switch(valeurGammeTigeLibra)
			{
				case "implant_ha_std" : {
					tableImplant = valeurGammeTigeLibra;
					indexTigeDroit = 1;
					indexTigeGauche = 11;
					maximumTigeDroit = 10;
					minimumTigeDroit = 1;
					maximumTigeGauche = 20;
					minimumTigeGauche= 11;
					break;
				}
				case "implant_ha_offset" : {
					tableImplant = valeurGammeTigeLibra;
					indexTigeDroit = 1;
					indexTigeGauche = 9;
					maximumTigeDroit = 8;
					minimumTigeDroit = 1;
					maximumTigeGauche = 16;
					minimumTigeGauche= 9;
					break;
				}
				case "implant_ha_std_appui" : {
					tableImplant = valeurGammeTigeLibra;
					indexTigeDroit = 1;
					indexTigeGauche = 11;
					maximumTigeDroit = 10;
					minimumTigeDroit = 1;
					maximumTigeGauche = 20;
					minimumTigeGauche= 11;
					break;
				}
				case "implant_cim_offset" : {
					tableImplant = valeurGammeTigeLibra;
					indexTigeDroit = 1;
					indexTigeGauche = 9;
					maximumTigeDroit = 8;
					minimumTigeDroit = 1;
					maximumTigeGauche = 16;
					minimumTigeGauche= 9;
					break;
				}
				case "implant_cim_std_appui" : {
					tableImplant = valeurGammeTigeLibra;
					indexTigeDroit = 1;
					indexTigeGauche = 11;
					maximumTigeDroit = 10;
					minimumTigeDroit = 1;
					maximumTigeGauche = 20;
					minimumTigeGauche= 11;
					break;
				}
			}
		} else if (valeurGammeTige == "implant_sagitta"){
			var gammeTigeSagitta = document.getElementById("gammeTigeSagitta");
			var valeurGammeTigeSagitta = gammeTigeSagitta.options[gammeTigeSagitta.selectedIndex].value;
			switch(valeurGammeTigeSagitta){
				case "implant_sagitta_std":{
					tableImplant = valeurGammeTigeSagitta;
					indexTigeDroit = 1;
					indexTigeGauche = 11;
					maximumTigeDroit = 10;
					minimumTigeDroit = 1;
					maximumTigeGauche = 20;
					minimumTigeGauche= 11;
					break;
				}
				case "implant_sagitta_offset":{
					tableImplant = valeurGammeTigeSagitta;
					indexTigeDroit = 1;
					indexTigeGauche = 10;
					maximumTigeDroit = 9;
					minimumTigeDroit = 1;
					maximumTigeGauche = 18;
					minimumTigeGauche= 10;
					break;
				}
			}
		}
		m_canvasWidth=document.getElementById("dwv-imageLayer").width;
		m_canvasHeight=document.getElementById("dwv-imageLayer").height;


		if (patient.GetOperationGuide()=="Non guider") { // Traitement du cas ou la chirurgie n'est pas guidée
			var newTigeGauche=null;
			var newTigeDroit=null;
			// Choix des tiges soit en initialisation simple soit avec conservation de la taille si les tiges sont déjà initialiséee
			if (tigeDroit==null && tigeGauche==null) {
				newTigeGauche=getTige(tableImplant, indexTigeGauche);
				newTigeDroit=getTige(tableImplant, indexTigeDroit);
			} else {
				newTigeGauche=getTigeBySize(tableImplant, tigeGauche.GetTaille(), "G");
				indexTigeGauche=parseInt(newTigeGauche.GetID());
				newTigeDroit=getTigeBySize(tableImplant, tigeDroit.GetTaille(), "D");
				indexTigeDroit=parseInt(newTigeDroit.GetID());
			}

			var newTige=null;
			var canvasTige=null;
			imgTigeDroit = new Image;
			imgTigeGauche = new Image;
			if (patient.GetCoteOperation()=="Gauche") {
				canvasTige = document.getElementById("canvasTigeDroit");
			} else {
				canvasTige = document.getElementById("canvasTigeGauche");
			}
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex = "26";
			var contextetige = canvasTige.getContext("2d");
			imgTigeDroit.onload=function () {
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
			}

			imgTigeGauche.onload=function () {
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
			}
			//Source des images
			if (patient.GetCoteOperation()=="Gauche") {
				imgTigeDroit.src=newTigeDroit.GetUrl();
			} else {
				imgTigeGauche.src=newTigeGauche.GetUrl();
			}
			tigeDroit=newTigeDroit;
			tigeGauche=newTigeGauche;
		} else { // Traitement du cas ou la chirurgie est guidée
			// Choix dew tiges soit en initialisation simple soit avec conservation de la taille si les tiges sont déjà initialisées
			if (tigeDroit==null && tigeGauche==null) {
				tigeDroit = getTige(tableImplant, indexTigeDroit);
				tigeGauche = getTige(tableImplant, indexTigeGauche);
			} else {
				tigeGauche=getTigeBySize(tableImplant, tigeGauche.GetTaille(), "G");
				indexTigeGauche=parseInt(tigeGauche.GetID());
				tigeDroit=getTigeBySize(tableImplant, tigeDroit.GetTaille(), "D");
				indexTigeDroit=parseInt(tigeDroit.GetID());
			}

			imgTigeDroit = new Image;
			imgTigeGauche = new Image;
			var canvasTige=null;
			if (patient.GetCoteOperation()=="Gauche") {
				canvasTige = document.getElementById("canvasTigeDroit");
			} else {
				canvasTige = document.getElementById("canvasTigeGauche");
			}
			canvasTige.width=m_canvasWidth;
			canvasTige.height=m_canvasHeight;
			canvasTige.style.zIndex = "26";
			var contextetige = canvasTige.getContext("2d");
			imgTigeDroit.onload=function () {
				var imgTigeDroitWidth=imgTigeDroit.width;
				var imgTigeDroitHeight=imgTigeDroit.height;
				if (patient.GetCoteOperation()=="Gauche") {
					tigeDroit.Snap(imgTigeDroitWidth, imgTigeDroitHeight, patient);
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					//positionnement de la tige du coté opposé a la chirurgie
					var dicomCanvas = document.getElementById("dwv-imageLayer");
					//position zéro
					var dicomWidth = sessionStorage.getItem("imageLargeur");
					var dicomHeight = sessionStorage.getItem("imageHauteur");
					var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
					tigeGauche.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);
					if (cotyleDroit!=null) {
						CalculOffset();
					}
				} else {
					tigeGauche.Snap(imgTigeDroitWidth, imgTigeDroitHeight, patient);
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					//positionnement de la tige du coté opposé a la chirurgie
					var dicomCanvas = document.getElementById("dwv-imageLayer");
					//position zéro
					var dicomWidth = sessionStorage.getItem("imageLargeur");
					var dicomHeight = sessionStorage.getItem("imageHauteur");
					var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

					tigeDroit.Placement(imgTigeDroitWidth, imgTigeDroitHeight, Position, 0);
					if (cotyleGauche!=null) {
						CalculOffset();
					}
				}
			}
			imgTigeGauche.onload=function () {
				var imgTigeGaucheWidth=imgTigeGauche.width;
				var imgTigeGaucheHeight=imgTigeGauche.height;
				if (patient.GetCoteOperation()=="Gauche") {
					tigeDroit.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, patient);
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contextetige.restore();

					//positionnement de la tige du coté opposé a la chirurgie
					var dicomCanvas = document.getElementById("dwv-imageLayer");
					//position zéro
					var dicomWidth = sessionStorage.getItem("imageLargeur");
					var dicomHeight = sessionStorage.getItem("imageHauteur");
					var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};
					tigeGauche.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
					if (cotyleDroit!=null) {
						CalculOffset();
					}
				} else {
					tigeGauche.Snap(imgTigeGaucheWidth, imgTigeGaucheHeight, patient);
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();

					//positionnement de la tige du coté opposé a la chirurgie
					var dicomCanvas = document.getElementById("dwv-imageLayer");
					//position zéro
					var dicomWidth = sessionStorage.getItem("imageLargeur");
					var dicomHeight = sessionStorage.getItem("imageHauteur");
					var Position = {'x' : dicomCanvas.width/2, 'y' : dicomCanvas.height/2};

					tigeDroit.Placement(imgTigeGaucheWidth, imgTigeGaucheHeight, Position, 0);
					if (cotyleGauche!=null) {
						CalculOffset();
					}
				}
			}
			//Source des images
			if (patient.GetCoteOperation()=="Gauche") {
				imgTigeDroit.src=tigeDroit.GetUrl();
			} else {
				imgTigeGauche.src=tigeGauche.GetUrl();
			}
		}

		if(firstSideChangedTige==false) { //Cette condition permet d'effectuer la mise à jour de l'affichage de la seconde tige si l'utilisateur a fait un changement de coté
			if (patient.GetCoteOperation()=="Droit") {
				canvasTige=document.getElementById("canvasTigeDroit");
				canvasTige.width=m_canvasWidth;
				canvasTige.height=m_canvasHeight;
				canvasTige.style.zIndex="26";
				var contexteTigeDrawTige=canvasTige.getContext("2d");
				imgTigeDroit = new Image;
				imgTigeDroit.onload=function () {
					var imgTigeDroitWidth=imgTigeDroit.width;
					var imgTigeDroitHeight=imgTigeDroit.height;
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
					contexteTigeDrawTige.rotate(tigeDroit.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
					contexteTigeDrawTige.restore();
				}
				imgTigeDroit.src=tigeDroit.GetUrl();
			}
			if (patient.GetCoteOperation()=="Gauche") {
				canvasTige=document.getElementById("canvasTigeGauche");
				canvasTige.width=m_canvasWidth;
				canvasTige.height=m_canvasHeight;
				canvasTige.style.zIndex="27";
				var contexteTigeDrawTige=canvasTige.getContext("2d");
				imgTigeGauche = new Image;
				imgTigeGauche.onload=function () {
					var imgTigeGaucheWidth=imgTigeGauche.width;
					var imgTigeGaucheHeight=imgTigeGauche.height;
					contexteTigeDrawTige.save();
					contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contexteTigeDrawTige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
					contexteTigeDrawTige.rotate(tigeGauche.GetOrientation());
					contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contexteTigeDrawTige.restore();
				}
				imgTigeGauche.src=tigeGauche.GetUrl();
			}
		}
		// Mise a jour de l'affichage de la taille de la tige en fonction du nombre de hanche sur la radio et puis du coté actif
		if (document.getElementById("RadioOuiHanche").checked) {
			if (patient.GetCoteOperation()=="Gauche") {
				var tailleTige = tigeDroit.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			} else {
				var tailleTige = tigeGauche.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			}
		} else {
			var coteTige = document.getElementById("coteTige");
			if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
				var tailleTige = tigeDroit.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			} else {
				var tailleTige = tigeGauche.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			}
		}
	}
	/*
	*	Cette fonction assure la sélection, la mise en position et l'affichage des cotyle
	*	Elle est appelée a chaque changement de gamme
	*/
	function CotyleSelection() {
		// Sélection de la gamme de la tige et renseignement des ids clé
		var gammeCotyle = document.getElementById("gammeCotyle");
		var valeurGammeCotyle = gammeCotyle.options[gammeCotyle.selectedIndex].value;
		if (valeurGammeCotyle == "cotyle_hype") {
			tableCotyle = valeurGammeCotyle;
			indexCotyleDroit = 1;
			indexCotyleGauche = 11;
			maximumCotyleDroit = 10;
			minimumCotyleDroit = 1;
			maximumCotyleGauche = 20;
			minimumCotyleGauche= 11;
		} else if (valeurGammeCotyle == "cotyle_novae") {
			var gammeCotyleNovae = document.getElementById("gammeCotyleNovae");
			var valeurGammeCotyleNovae = gammeCotyleNovae.options[gammeCotyleNovae.selectedIndex].value;
			switch(valeurGammeCotyleNovae)
			{
				case "cotyle_sunfit_th" : {
					tableCotyle = valeurGammeCotyleNovae;
					indexCotyleDroit = 1;
					indexCotyleGauche = 13;
					maximumCotyleDroit = 12;
					minimumCotyleDroit = 1;
					maximumCotyleGauche = 24;
					minimumCotyleGauche= 13;
					break;
				}
				case "cotyle_novae_e_th" : {
					tableCotyle = valeurGammeCotyleNovae;
					indexCotyleDroit = 1;
					indexCotyleGauche = 12;
					maximumCotyleDroit = 11;
					minimumCotyleDroit = 1;
					maximumCotyleGauche = 22;
					minimumCotyleGauche= 12;
					break;
				}
				case "cotyle_coptos_th" : {
					tableCotyle = valeurGammeCotyleNovae;
					indexCotyleDroit = 1;
					indexCotyleGauche = 12;
					maximumCotyleDroit = 11;
					minimumCotyleDroit = 1;
					maximumCotyleGauche = 22;
					minimumCotyleGauche= 12;
					break;
				}
				case "cotyle_stick" : {
					tableCotyle = valeurGammeCotyleNovae;
					indexCotyleDroit = 1;
					indexCotyleGauche = 12;
					maximumCotyleDroit = 11;
					minimumCotyleDroit = 1;
					maximumCotyleGauche = 22;
					minimumCotyleGauche= 12;
					break;
				}
			}
		}
		m_canvasWidth=document.getElementById("dwv-imageLayer").width;
		m_canvasHeight=document.getElementById("dwv-imageLayer").height;
		if (patient.GetOperationGuide()=="Non guider") { // Traitement du cas ou la chirurgie n'est pas guidée
			var newCotyleGauche = null;
			var newCotyleDroit = null;
			// Choix des cotyles soit en initialisation simple soit avec conservation de la taille si les cotyles sont déjà initialisés
			if (cotyleDroit==null && cotyleGauche==null) {
				newCotyleGauche=getCotyle(tableCotyle, indexCotyleGauche);
				newCotyleDroit=getCotyle(tableCotyle, indexCotyleDroit);
			} else {
				newCotyleGauche=getCotyleBySize(tableCotyle, cotyleGauche.GetTaille(), "G");
				indexCotyleGauche=parseInt(cotyleGauche.GetID());
				newCotyleDroit=getCotyleBySize(tableCotyle, cotyleDroit.GetTaille(), "D");
				indexCotyleDroit=parseInt(cotyleDroit.GetID());
			}
			var newCotyle=null;
			var canvasCotyle = null;
			imgCotyleGauche = new Image;
			imgCotyleDroit = new Image;
			if (patient.GetCoteOperation()=="Gauche") {
				canvasCotyle = document.getElementById("canvasCotyleDroit");
			} else {
				canvasCotyle = document.getElementById("canvasCotyleGauche");
			}
			canvasCotyle.width=m_canvasWidth;
			canvasCotyle.height=m_canvasHeight;
			canvasCotyle.style.zIndex = "27";
			var contextecotyle = canvasCotyle.getContext("2d");
			imgCotyleDroit.onload=function () {
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
			}
			imgCotyleGauche.onload=function () {
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
			}
			if (patient.GetCoteOperation()=="Gauche") {
				imgCotyleDroit.src=newCotyleDroit.GetUrl();
			} else {
				imgCotyleGauche.src=newCotyleGauche.GetUrl();
			}
			cotyleDroit=newCotyleDroit;
			cotyleGauche=newCotyleGauche;
		} else { // Traitement du cas ou la chirurgie est guidée
			// Choix des cotyles soit en initialisation simple soit avec conservation de la taille si les cotyles sont déjà initialisés
			if (cotyleDroit==null && cotyleGauche==null) {
				cotyleGauche=getCotyle(tableCotyle, indexCotyleGauche);
				cotyleDroit=getCotyle(tableCotyle, indexCotyleDroit);
			} else {
				cotyleGauche=getCotyleBySize(tableCotyle, cotyleGauche.GetTaille(), "G");
				indexCotyleGauche=parseInt(cotyleGauche.GetID());
				cotyleDroit=getCotyleBySize(tableCotyle, cotyleDroit.GetTaille(), "D");
				indexCotyleDroit=parseInt(cotyleDroit.GetID());
			}
			//Initialisation des images
			imgCotyleDroit = new Image;
			imgCotyleGauche = new Image;
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
					if (tigeDroit!=null) {
						CalculOffset();
					}

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
					if (tigeGauche!=null) {
						CalculOffset();
					}
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
					if (tigeDroit!=null) {
						CalculOffset();
					}
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
					if (tigeGauche!=null) {
						CalculOffset();
					}
				}
			}
			if (patient.GetCoteOperation()=="Gauche") {
				imgCotyleDroit.src=cotyleDroit.GetUrl();
			} else {
				imgCotyleGauche.src=cotyleGauche.GetUrl();
			}
		}

		if (firstSideChangedCotyle==false) { //Cette condition permet d'effectuer la mise à jour de l'affichage du second cotyle si l'utilisateur a fait un changement de coté
			if (patient.GetCoteOperation()=="Droit") {
				canvasCotyle=document.getElementById("canvasCotyleDroit");
				canvasCotyle.width=m_canvasWidth;
				canvasCotyle.height=m_canvasHeight;
				canvasCotyle.style.zIndex="28";
				var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
				imgCotyleDroit = new Image;
				imgCotyleDroit.onload=function () {
					var imgCotyleDroitWidth=imgCotyleDroit.width;
					var imgCotyleDroitHeight=imgCotyleDroit.height;
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
				}
				imgCotyleDroit.src=cotyleDroit.GetUrl();
			}
			if (patient.GetCoteOperation()=="Gauche") {
				canvasCotyle=document.getElementById("canvasCotyleGauche");
				canvasCotyle.width=m_canvasWidth;
				canvasCotyle.height=m_canvasHeight;
				canvasCotyle.style.zIndex="28";
				var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
				imgCotyleGauche = new Image;
				imgCotyleGauche.onload=function () {
					var imgCotyleGaucheWidth=imgCotyleGauche.width;
					var imgCotyleGaucheHeight=imgCotyleGauche.height;
					contexteCotyleDrawCotyle.save();
					contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
					contexteCotyleDrawCotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
					contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
					contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
					contexteCotyleDrawCotyle.restore();
				}
				imgCotyleGauche.src=cotyleGauche.GetUrl();
			}
		}
		// Mise a jour de l'affichage de la taille de la tige en fonction du nombre de hanche sur la radio et puis du coté actif
		if (document.getElementById("RadioOuiHanche").checked) {
			if (patient.GetCoteOperation()=="Gauche") {
				var tailleCotyle = cotyleDroit.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			} else {
				var tailleCotyle = cotyleGauche.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			}
		} else {
			var coteCotyle = document.getElementById("coteCotyle");
			if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
				var tailleCotyle = cotyleDroit.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			} else {
				var tailleCotyle = cotyleGauche.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			}
		}
	}


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
					if (prenomPatient.value == "" || prenomPatient.value == "PRENOM") {
						alert("Prénom du patient incorrect ou null");
					} else {
						if (coteChirurgie.selectedIndex == 0) { // Test si l'option sélectionnée n'est pas l'option par défaut
							alert("Veuillez sélectionner le coté sur le quel vous voulez effectué la chirurgie");
						} else {// Récupère la valeur de l'option sélectionnée
							if (typeChirurgie.selectedIndex == 0) {// Test si l'option sélectionnée n'est pas l'option par défaut
								alert("Veuillez sélectionner le type de chirurgie que vous voulez effectué");
							} else { // Cas ou toute les données entrée sont valides
								var taille_bille_px = parseInt(sessionStorage.getItem("taille_bille_px"));
								var taille_bille_mm = parseInt(sessionStorage.getItem("taille_bille_mm"));
								var coeff =  taille_bille_mm / taille_bille_px;
								var string = "coefficient de redimensionnement des implants est : " + coeff;
								if (!isNaN(coeff)) {
									sessionStorage.setItem("coefficient",coeff);
									sessionStorage.setItem("calibrage",true);
									//swal("",string);
								} else {
									sessionStorage.setItem("calibrage",false);
								}
								var calibrage = sessionStorage.getItem("calibrage");
								if (calibrage=="true") {// Récupère la valeur de l'option sélectionnée
									patient = new Patient(nomPatient.value,
										prenomPatient.value,
										typeChirurgie.options[typeChirurgie.selectedIndex].value,
										"DICOM", // to do DICOM
										coteChirurgie.options[coteChirurgie.selectedIndex].value);

									m_canvasWidth=document.getElementById("dwv-imageLayer").width;
									m_canvasHeight=document.getElementById("dwv-imageLayer").height;

									if (patient.GetCoteOperation()=="Gauche") {
										document.getElementById("coteTige").value="Gauche";
										document.getElementById("coteCotyle").value="Gauche";
									} else {
										document.getElementById("coteTige").value="Droit";
										document.getElementById("coteCotyle").value="Droit";
									}
									if (patient.GetOperationGuide()=="Non guider") {
										// Gestion de l'affichage des boutons en cas de chirurgie non guidée et appel des fonctions de sélection de tiges et cotyles
										document.getElementById("deplacerCotyle").style.display="none";
										document.getElementById("labelOffsetTigeCotyle").style.display="none";
										document.getElementById("labelHauteurTigeCotyle").style.display="none";
										var elements = document.getElementsByClassName("positionTige");
										for (var i = 0; i < elements.length; i++) {
											elements[i].style.display="";
										}
										var elements = document.getElementsByClassName("deplacerTige");
										for (var i = 0; i < elements.length; i++) {
											elements[i].style.display="none";
										}
										document.getElementById("positionCotyle").style.display="";
										TigeSelection();
										CotyleSelection();
									} else {
										// Gestion de l'affichage des boutons en cas de chirurgie guidée
										document.getElementById("deplacerCotyle").style.display="";
										document.getElementById("labelOffsetTigeCotyle").style.display="";
										document.getElementById("labelHauteurTigeCotyle").style.display="";
										var elements = document.getElementsByClassName("positionTige");
										for (var i = 0; i < elements.length; i++) {
											elements[i].style.display="none";
										}
										var elements = document.getElementsByClassName("deplacerTige");
										for (var i = 0; i < elements.length; i++) {
											elements[i].style.display="";
										}
										document.getElementById("positionCotyle").style.display="none";
									}

									document.getElementById("buttonDessinRapporteur").style.display="";
									document.getElementById("buttonDessinRegle").style.display="";
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
									firstSideChangedTige = true;
									firstSideChangedCotyle = true;
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

	/*
	*	Active le tracé du trapèze sur le click du bouton
	*/
	var buttonDessinTrapeze = document.getElementById("buttonDessinTrapeze");
	buttonDessinTrapeze.addEventListener('click',
		function() {
			function DessinTrapeze(){
				if(sessionStorage.getItem("nbTrapeze")===null){
					sessionStorage.setItem("nbTrapeze", 0);
				}
				DrawShape("Roi");
			};
			DessinTrapeze()
	}, false);

	/*
	*	Active le tracé du rapporteur sur le click du bouton
	*/
	var buttonDessinRapporteur = document.getElementById("buttonDessinRapporteur");
	buttonDessinRapporteur.addEventListener('click',
		function() {
			function DessinRapporteur(){
				DrawShape("Protractor");
				document.getElementById("dwv-drawDiv").style.zIndex = "200";
			};
			DessinRapporteur()
	}, false);

	/*
	*	Active le tracé de la règle sur le click du bouton
	*/
	var buttonDessinRegle = document.getElementById("buttonDessinRegle");
	buttonDessinRegle.addEventListener('click',
		function() {
			function DessinRegle(){
				DrawShape("Line");
				document.getElementById("dwv-drawDiv").style.zIndex = "200";
			};
			DessinRegle()
	}, false);

	/*
	*	Active le tracé du cercle sur le click du bouton
	*/
	var buttonDessinCercle = document.getElementById("buttonDessinCercle");
	buttonDessinCercle.addEventListener('click',
		function() {
			function DessinCercle(){
				if(sessionStorage.getItem("nbCercle")===null){
					sessionStorage.setItem("nbCercle", 0);
				}
				DrawShape("Circle");
			};
			DessinCercle()
	}, false);

	/*
	*	Active le tracé de l'outil de mesure du petit troch sur le click du bouton
	*/
	var buttonDessinPetitTroch = document.getElementById("buttonDessinPetitTroch");
	buttonDessinPetitTroch.addEventListener('click',
		function() {
			function DessinMesurePetitTroch(){
				DrawShape("Mesurepetittroch");
			};
			DessinMesurePetitTroch()
	}, false);

	/*
	*	Cette fonction intervient au click sur le bouton "Valider Dessin"
	*	Elle effectue les tests pour savoir si l'utilisateur a bien effectué les dessins et si ils sont du bon coté dans le cas ou la radio a les deux hanches
	* 	Elle affiche des messages d'erreurs si les les tests ne sont pas valide
	*	Si tout les tests sont OK, elle l'onglet implant, bloque les boutons de dessin et appel les fonctions de sélection de tiges et cotyles
	*/
	var buttonValideOutilsDessin = document.getElementById("buttonValideOutilsDessin");
	buttonValideOutilsDessin.addEventListener('click',
		function() {
			function ValiderDessin(){
				var onPeutValider = false;
				if (document.getElementById("RadioOuiHanche").checked) {
					if (sessionStorage.getItem("cerclePosition")===null||sessionStorage.getItem("trapezePosition")===null) {
						swal("Veuillez tracer un cercle et un trapèze sur la hanche du patient");
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
								swal("Veuillez tracer un cercle et un trapèze sur la hanche droite du patient");
							} else {
								onPeutValider = true;
							}
						}
						if (patient.GetCoteOperation()=="Gauche") {
							if(sessionStorage.getItem("cercleDroitPosition")===null||sessionStorage.getItem("trapezeDroitPosition")===null){
								swal("Veuillez tracer un cercle et un trapèze sur la hanche gauche du patient");
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
					document.getElementById("deplacerCotyle").style.display="";
					document.getElementById("labelOffsetTigeCotyle").style.display="";
					document.getElementById("labelHauteurTigeCotyle").style.display="";
					var elements = document.getElementsByClassName("positionTige");
					for (var i = 0; i < elements.length; i++) {
						elements[i].style.display="none";
					}
					var elements = document.getElementsByClassName("deplacerTige");
					for (var i = 0; i < elements.length; i++) {
						elements[i].style.display="";
					}
					document.getElementById("positionCotyle").style.display="none";
					if (patient.GetCoteOperation()=="Gauche") {
						document.getElementById("coteTige").value="Gauche";
						document.getElementById("coteCotyle").value="Gauche";
					} else {
						document.getElementById("coteTige").value="Droit";
						document.getElementById("coteCotyle").value="Droit";
					}
					TigeSelection();
					CotyleSelection();
				}
			};
			ValiderDessin()
	}, false);

	/*
	*	Gère l'affichage des sous gammes des tige en cas de changement de gamme
	*	Appel la fonction de choix des tiges en cas de changement de gamme
	*/
	var gammeTige = document.getElementById("gammeTige");
	gammeTige.addEventListener('change',function(){
		if (gammeTige.options[gammeTige.selectedIndex].value == "implant_hype") {
			document.getElementById("implantHypeSousGamme").style.display="";
			document.getElementById("implantLibraSousGamme").style.display="none";
			document.getElementById("implantSagittaSousGamme").style.display="none";
		} else if (gammeTige.options[gammeTige.selectedIndex].value == "implant_libra") {
			document.getElementById("implantHypeSousGamme").style.display="none";
			document.getElementById("implantLibraSousGamme").style.display="";
			document.getElementById("implantSagittaSousGamme").style.display="none";
		} else if(gammeTige.options[gammeTige.selectedIndex].value == "implant_sagitta"){
			document.getElementById("implantHypeSousGamme").style.display="none";
			document.getElementById("implantLibraSousGamme").style.display="none";
			document.getElementById("implantSagittaSousGamme").style.display="";
		}
		TigeSelection();
	});

	/*
	*	Gère l'affichage des sous gammes des cotyles en cas de changement de gamme
	*	Appel la fonction de choix des cotyles en cas de changement de gamme
	*/
	var gammeCotyle = document.getElementById("gammeCotyle");
	gammeCotyle.addEventListener('change',function(){
		if (gammeCotyle.options[gammeCotyle.selectedIndex].value == "cotyle_hype") {
			document.getElementById("cotyleNovaeSousGamme").style.display="none";
		} else if (gammeCotyle.options[gammeCotyle.selectedIndex].value == "cotyle_novae") {
			document.getElementById("cotyleNovaeSousGamme").style.display="";
		}
		CotyleSelection();
	});

	/*
	*	Appel la fonction de choix des tiges en cas de changement de sous gamme
	*/
	var gammeTigeHype = document.getElementById("gammeTigeHype");
	gammeTigeHype.addEventListener('change',function(){
		TigeSelection();
	});

	/*
	*	Appel la fonction de choix des tiges en cas de changement de sous gamme
	*/
	var gammeTigeLibra = document.getElementById("gammeTigeLibra");
	gammeTigeLibra.addEventListener('change',function(){
		TigeSelection();
	});

	/*
	*	Appel la fonction de choix des tiges en cas de changement de sous gamme
	*/
	var gammeTigeSagitta = document.getElementById("gammeTigeSagitta");
	gammeTigeSagitta.addEventListener('change',function(){
		TigeSelection();
	});

	/*
	*	Appel la fonction de choix des cotyles en cas de changement de sous gamme
	*/
	var gammeCotyleNovae = document.getElementById("gammeCotyleNovae");
	gammeCotyleNovae.addEventListener('change',function(){
		CotyleSelection();
	});

	/*
	*	Gère le changement de coté de la tige
	*	Actualise l'affichage de la taille de la tige en fonction de coté
	*	Affiche les boutons appropriés au manipulation en fonction de coté
	*	Affiche la première tige du coté opposé à la chirurgie si celle-ci n'est pas afficher
	*	Chacun des affichages et actualisation et effectué en fonction du type de chirurgie
	*/
	var coteTige = document.getElementById("coteTige");
	coteTige.addEventListener('change',function(){
		if(patient.GetOperationGuide()=="Guider"){
			if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
				if (patient.GetCoteOperation()=="Gauche") {
					var elementDeplacerTige = document.getElementsByClassName("deplacerTige");
					for (var i = 0; i < elementDeplacerTige.length; i++) {
						elementDeplacerTige[i].style.display="";
					}
					var elementPositionTige = document.getElementsByClassName("positionTige");
					for (var i = 0; i < elementPositionTige.length; i++) {
						elementPositionTige[i].style.display="none";
					}
					var tailleTige = tigeDroit.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
				} else if (patient.GetCoteOperation()=="Droit") {
					var elementDeplacerTige = document.getElementsByClassName("deplacerTige");
					for (var i = 0; i < elementDeplacerTige.length; i++) {
						elementDeplacerTige[i].style.display="none";
					}
					var elementPositionTige = document.getElementsByClassName("positionTige");
					for (var i = 0; i < elementPositionTige.length; i++) {
						elementPositionTige[i].style.display="";
					}
					var tailleTige = tigeDroit.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
					if (firstSideChangedTige == true) {
						firstSideChangedTige = false;
						canvasTige=document.getElementById("canvasTigeDroit");
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex="26";
						var contexteTigeDrawTige=canvasTige.getContext("2d");
						imgTigeDroit = new Image;
						imgTigeDroit.onload=function () {
							var imgTigeDroitWidth=imgTigeDroit.width;
							var imgTigeDroitHeight=imgTigeDroit.height;
							contexteTigeDrawTige.save();
							contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contexteTigeDrawTige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
							contexteTigeDrawTige.rotate(tigeDroit.GetOrientation());
							contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
							contexteTigeDrawTige.restore();
						}
						imgTigeDroit.src=tigeDroit.GetUrl();
					}
				}
			} else if (coteTige.options[coteTige.selectedIndex].value == "Droit") {
				if (patient.GetCoteOperation()=="Droit") {
					var elementDeplacerTige = document.getElementsByClassName("deplacerTige");
					for (var i = 0; i < elementDeplacerTige.length; i++) {
						elementDeplacerTige[i].style.display="";
					}
					var elementPositionTige = document.getElementsByClassName("positionTige");
					for (var i = 0; i < elementPositionTige.length; i++) {
						elementPositionTige[i].style.display="none";
					}
					var tailleTige = tigeGauche.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
				} else if (patient.GetCoteOperation()=="Gauche") {
					var elementDeplacerTige = document.getElementsByClassName("deplacerTige");
					for (var i = 0; i < elementDeplacerTige.length; i++) {
						elementDeplacerTige[i].style.display="none";
					}
					var elementPositionTige = document.getElementsByClassName("positionTige");
					for (var i = 0; i < elementPositionTige.length; i++) {
						elementPositionTige[i].style.display="";
					}
					var tailleTige = tigeGauche.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
					if (firstSideChangedTige == true) {
						firstSideChangedTige = false;
						canvasTige=document.getElementById("canvasTigeGauche");
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex="27";
						var contexteTigeDrawTige=canvasTige.getContext("2d");
						imgTigeGauche = new Image;
						imgTigeGauche.onload=function () {
							var imgTigeGaucheWidth=imgTigeGauche.width;
							var imgTigeGaucheHeight=imgTigeGauche.height;
							contexteTigeDrawTige.save();
							contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contexteTigeDrawTige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
							contexteTigeDrawTige.rotate(tigeGauche.GetOrientation());
							contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
							contexteTigeDrawTige.restore();
						}
					imgTigeGauche.src=tigeGauche.GetUrl();
					}
					/*
					*/
				}
			}
			$('.deplacerTige').prop('disabled',false);
			$('.positionTige').prop('disabled',false);
		}
		if (patient.GetOperationGuide()=="Non guider") {
			if (coteTige.options[coteTige.selectedIndex].value == "Gauche") {
				if (patient.GetCoteOperation()=="Gauche") {
					var tailleTige = tigeDroit.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
				} else if (patient.GetCoteOperation()=="Droit") {
					var tailleTige = tigeDroit.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
					if (firstSideChangedTige == true) {
						firstSideChangedTige = false;
						canvasTige=document.getElementById("canvasTigeDroit");
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex="26";
						var contexteTigeDrawTige=canvasTige.getContext("2d");
						imgTigeDroit = new Image;
						imgTigeDroit.onload=function () {
							var imgTigeDroitWidth=imgTigeDroit.width;
							var imgTigeDroitHeight=imgTigeDroit.height;
							contexteTigeDrawTige.save();
							contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contexteTigeDrawTige.translate(tigeDroit.GetPosition().x,tigeDroit.GetPosition().y);
							contexteTigeDrawTige.rotate(tigeDroit.GetOrientation());
							contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -tigeDroit.GetImageLargeur() / 2, -tigeDroit.GetImageHauteur() / 2, tigeDroit.GetImageLargeur(), tigeDroit.GetImageHauteur());
							contexteTigeDrawTige.restore();
						}
						imgTigeDroit.src=tigeDroit.GetUrl();
					}
				}
			} else if (coteTige.options[coteTige.selectedIndex].value == "Droit") {
				if (patient.GetCoteOperation()=="Droit") {
					var tailleTige = tigeGauche.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
				} else if (patient.GetCoteOperation()=="Gauche") {
					var tailleTige = tigeGauche.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
					//document.getElementById('labelGammeTige').innerHTML = tailleTige[0];
					if (firstSideChangedTige == true) {
						firstSideChangedTige = false;
						canvasTige=document.getElementById("canvasTigeGauche");
						canvasTige.width=m_canvasWidth;
						canvasTige.height=m_canvasHeight;
						canvasTige.style.zIndex="27";
						var contexteTigeDrawTige=canvasTige.getContext("2d");
						imgTigeGauche = new Image;
						imgTigeGauche.onload=function () {
							var imgTigeGaucheWidth=imgTigeGauche.width;
							var imgTigeGaucheHeight=imgTigeGauche.height;
							contexteTigeDrawTige.save();
							contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
							contexteTigeDrawTige.translate(tigeGauche.GetPosition().x,tigeGauche.GetPosition().y);
							contexteTigeDrawTige.rotate(tigeGauche.GetOrientation());
							contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
							contexteTigeDrawTige.restore();
						}
					imgTigeGauche.src=tigeGauche.GetUrl();
					}
				}
			}
		}

	});

	/*
	*	Gère le changement de coté du cotyle
	*	Actualise l'affichage de la taille du cotyle en fonction de coté
	*	Affiche les boutons appropriés au manipulation en fonction de coté
	*	Affiche la première cotyle du coté opposé à la chirurgie si celle-ci n'est pas afficher
	*	Chacun des affichages et actualisation et effectué en fonction du type de chirurgie
	*/
	var coteCotyle = document.getElementById("coteCotyle");
	coteCotyle.addEventListener('change',function(){
		if(patient.GetOperationGuide()=="Guider"){
			if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
				if (patient.GetCoteOperation()=="Gauche") {
					document.getElementById("deplacerCotyle").style.display="";
					document.getElementById("positionCotyle").style.display="none";
					var tailleCotyle = cotyleDroit.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
				} else if (patient.GetCoteOperation()=="Droit") {
					document.getElementById("deplacerCotyle").style.display="none";
					document.getElementById("positionCotyle").style.display="";
					var tailleCotyle = cotyleDroit.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					if (firstSideChangedCotyle == true) {
						firstSideChangedCotyle = false;
						canvasCotyle=document.getElementById("canvasCotyleDroit");
						canvasCotyle.width=m_canvasWidth;
						canvasCotyle.height=m_canvasHeight;
						canvasCotyle.style.zIndex="28";
						var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
						imgCotyleDroit = new Image;
						imgCotyleDroit.onload=function () {
							var imgCotyleDroitWidth=imgCotyleDroit.width;
							var imgCotyleDroitHeight=imgCotyleDroit.height;
							contexteCotyleDrawCotyle.save();
							contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contexteCotyleDrawCotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
							contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
							contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contexteCotyleDrawCotyle.restore();
						}
						imgCotyleDroit.src=cotyleDroit.GetUrl();
					}
				}
			} else if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
				if (patient.GetCoteOperation()=="Droit") {
					document.getElementById("deplacerCotyle").style.display="";
					document.getElementById("positionCotyle").style.display="none";
					var tailleCotyle = cotyleGauche.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
				} else if (patient.GetCoteOperation()=="Gauche") {
					document.getElementById("deplacerCotyle").style.display="none";
					document.getElementById("positionCotyle").style.display="";
					var tailleCotyle = cotyleGauche.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					if (firstSideChangedCotyle == true) {
						firstSideChangedCotyle = false;
						canvasCotyle=document.getElementById("canvasCotyleGauche");
						canvasCotyle.width=m_canvasWidth;
						canvasCotyle.height=m_canvasHeight;
						canvasCotyle.style.zIndex="28";
						var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
						imgCotyleGauche = new Image;
						imgCotyleGauche.onload=function () {
							var imgCotyleGaucheWidth=imgCotyleGauche.width;
							var imgCotyleGaucheHeight=imgCotyleGauche.height;
							contexteCotyleDrawCotyle.save();
							contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contexteCotyleDrawCotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
							contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contexteCotyleDrawCotyle.restore();
						}
						imgCotyleGauche.src=cotyleGauche.GetUrl();
					}
				}
			}
			$('.deplacerCotyle').prop('disabled',false);
			$('.positionCotyle').prop('disabled',false);
		}
		if (patient.GetOperationGuide()=="Non guider") {
			if (coteCotyle.options[coteCotyle.selectedIndex].value == "Gauche") {
				if (patient.GetCoteOperation()=="Gauche") {
					var tailleCotyle = cotyleDroit.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
				} else if (patient.GetCoteOperation()=="Droit") {
					var tailleCotyle = cotyleDroit.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					if (firstSideChangedCotyle == true) {
						firstSideChangedCotyle = false;
						canvasCotyle=document.getElementById("canvasCotyleDroit");
						canvasCotyle.width=m_canvasWidth;
						canvasCotyle.height=m_canvasHeight;
						canvasCotyle.style.zIndex="28";
						var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
						imgCotyleDroit = new Image;
						imgCotyleDroit.onload=function () {
							var imgCotyleDroitWidth=imgCotyleDroit.width;
							var imgCotyleDroitHeight=imgCotyleDroit.height;
							contexteCotyleDrawCotyle.save();
							contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contexteCotyleDrawCotyle.translate(cotyleDroit.GetPosition().x,cotyleDroit.GetPosition().y);
							contexteCotyleDrawCotyle.rotate(cotyleDroit.GetOrientation());
							contexteCotyleDrawCotyle.drawImage(imgCotyleDroit, 0, 0, imgCotyleDroit.width, imgCotyleDroit.height, -cotyleDroit.GetImageLargeur() / 2, -cotyleDroit.GetImageHauteur() / 2, cotyleDroit.GetImageLargeur(), cotyleDroit.GetImageHauteur());
							contexteCotyleDrawCotyle.restore();
						}
						imgCotyleDroit.src=cotyleDroit.GetUrl();
					}
				}
			} else if (coteCotyle.options[coteCotyle.selectedIndex].value == "Droit") {
				if (patient.GetCoteOperation()=="Droit") {
					var tailleCotyle = cotyleGauche.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
				} else if (patient.GetCoteOperation()=="Gauche") {
					var tailleCotyle = cotyleGauche.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
					//document.getElementById('labelGammeCotyle').innerHTML = tailleCotyle[0];
					if (firstSideChangedCotyle == true) {
						firstSideChangedCotyle = false;
						canvasCotyle=document.getElementById("canvasCotyleGauche");
						canvasCotyle.width=m_canvasWidth;
						canvasCotyle.height=m_canvasHeight;
						canvasCotyle.style.zIndex="28";
						var contexteCotyleDrawCotyle=canvasCotyle.getContext("2d");
						imgCotyleGauche = new Image;
						imgCotyleGauche.onload=function () {
							var imgCotyleGaucheWidth=imgCotyleGauche.width;
							var imgCotyleGaucheHeight=imgCotyleGauche.height;
							contexteCotyleDrawCotyle.save();
							contexteCotyleDrawCotyle.clearRect(0, 0, canvasCotyle.width, canvasCotyle.height);
							contexteCotyleDrawCotyle.translate(cotyleGauche.GetPosition().x,cotyleGauche.GetPosition().y);
							contexteCotyleDrawCotyle.rotate(cotyleGauche.GetOrientation());
							contexteCotyleDrawCotyle.drawImage(imgCotyleGauche, 0, 0, imgCotyleGauche.width, imgCotyleGauche.height, -cotyleGauche.GetImageLargeur() / 2, -cotyleGauche.GetImageHauteur() / 2, cotyleGauche.GetImageLargeur(), cotyleGauche.GetImageHauteur());
							contexteCotyleDrawCotyle.restore();
						}
						imgCotyleGauche.src=cotyleGauche.GetUrl();
					}
				}
			}
		}
	});

	/*
	*	Gestion du click sur le bouton retour outils de dessin
	*	Assure le retour de onglet dessin à patient
	*	Nettoie la mémoire des positions des dessins
	*	Nettoie la mémoire du nombre de dessins
	*	Cache les corbeilles
	*/
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
				document.getElementById("buttonDessinRapporteur").style.display="none";
				document.getElementById("buttonDessinRegle").style.display="none";
				document.getElementById("buttonDeleteRegle1").style.display="none";
				document.getElementById("buttonDeleteRegle2").style.display="none";
				document.getElementById("buttonDeleteRegle3").style.display="none";
				document.getElementById("buttonDeleteRapporteur1").style.display="none";
				document.getElementById("buttonDeleteRapporteur2").style.display="none";
				document.getElementById("buttonDeleteRapporteur3").style.display="none";
				sessionStorage.setItem("nbRegle",0);
            	sessionStorage.setItem("nbAngle",0);
				firstSideChangedTige = true;
				firstSideChangedCotyle = true;
			};
			RetourDessin()
	}, false);

	/*
	*	Assure l'affichage des tiges lors du changement de taille en fonction du type de chirurgie et de coté
	*	Met à jour les index tiges
	*	Met à jour les offset X et Y
	*/
	function DrawTige() {
		var contexteTigeDrawTige=null;
		var canvasTige = null;
		var coefficient = sessionStorage.getItem("coefficient");
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
						var b=newTigeDroit.GetPosition().y-(Math.tan(newTigeDroit.GetOrientation())*newTigeDroit.GetPosition().x);
						var posyr=(Math.tan(newTigeDroit.GetOrientation())*newTigeDroit.GetPositionAvtOffset().x)+b;
						var delta = posyr-newTigeDroit.GetPosition().y;
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeDroit.GetPositionAvtOffset().x,newTigeDroit.GetPositionAvtOffset().y);
						contexteTigeDrawTige.rotate(newTigeDroit.GetOrientation());
						contexteTigeDrawTige.translate(newTigeDroit.GetPosition().x-newTigeDroit.GetPositionAvtOffset().x,newTigeDroit.GetPosition().y-newTigeDroit.GetPositionAvtOffset().y);
						contexteTigeDrawTige.translate(0,delta);
						contexteTigeDrawTige.drawImage(imgTigeDroit, 0, 0, imgTigeDroit.width, imgTigeDroit.height, -newTigeDroit.GetImageLargeur() / 2, -newTigeDroit.GetImageHauteur() / 2, newTigeDroit.GetImageLargeur(), newTigeDroit.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeDroit=newTigeDroit;

						var offset = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().x -tigeDroit.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleDroit.GetPositionPtMeca().y -tigeDroit.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleTige = tigeDroit.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
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
					var tailleTige = newTigeDroit.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
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
				var tailleTige = newTigeDroit.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			}
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
						var b=newTigeGauche.GetPosition().y-(Math.tan(newTigeGauche.GetOrientation())*newTigeGauche.GetPosition().x);
						var posyr=(Math.tan(newTigeGauche.GetOrientation())*newTigeGauche.GetPositionAvtOffset().x)+b;
						var delta = posyr-newTigeGauche.GetPosition().y;
						contexteTigeDrawTige.save();
						contexteTigeDrawTige.clearRect(0, 0, canvasTige.width, canvasTige.height);
						contexteTigeDrawTige.translate(newTigeGauche.GetPositionAvtOffset().x,newTigeGauche.GetPositionAvtOffset().y);
						contexteTigeDrawTige.rotate(newTigeGauche.GetOrientation());
						contexteTigeDrawTige.translate(newTigeGauche.GetPosition().x-newTigeGauche.GetPositionAvtOffset().x,newTigeGauche.GetPosition().y-newTigeGauche.GetPositionAvtOffset().y);
						contexteTigeDrawTige.translate(0,delta);
						contexteTigeDrawTige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -newTigeGauche.GetImageLargeur() / 2, -newTigeGauche.GetImageHauteur() / 2, newTigeGauche.GetImageLargeur(), newTigeGauche.GetImageHauteur());
						contexteTigeDrawTige.restore();
						tigeGauche=newTigeGauche;
						var offset = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x-tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
						var hauteur = Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().y-tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
						document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
						document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
						var tailleTige = tigeGauche.GetNom().split("-");
						document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
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
					var tailleTige = newTigeGauche.GetNom().split("-");
					document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
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
				var tailleTige = newTigeGauche.GetNom().split("-");
				document.getElementById('labelTailleTige').innerHTML = tailleTige.slice(-1)[0];
			}
		}
	}

	/*
	*	Assure l'affichage des cotyles lors du changement de taille en fonction du type de chirurgie et de coté
	*	Met à jour les index cotyles
	*	Met à jour les offset X et Y
	*/
	function DrawCotyle() {
		var contexteCotyleDrawCotyle=null;
		var canvasCotyle = null;
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
					var tailleCotyle = newCotyleDroit.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
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
				var tailleCotyle = newCotyleDroit.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
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
					var newCotyleGauche=getCotyle(tableCotyle, indexCotyleGauche);
					imgCotyleGauche = new Image;
					imgCotyleGauche.onload=function () {
						var imgCotyleGaucheWidth=imgCotyleGauche.width;
						var imgCotyleGaucheHeight=imgCotyleGauche.height;
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
					var tailleCotyle = newCotyleGauche.GetNom().split("-");
					document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
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
				var tailleCotyle = newCotyleGauche.GetNom().split("-");
				document.getElementById('labelTailleCotyle').innerHTML = tailleCotyle.slice(-1)[0];
			}
		}
	}

	/*
	*	Gère l'augmentation de la taille de la tige en fonction du coté
	*	Appel la fonction de mise à jour de l'affichage
	*/
	var buttonPlusTige = document.getElementById("buttonPlusTige");
	buttonPlusTige.addEventListener('click',
		function() {
			function PlusTailleTige(){
				var coteTigeBtn = document.getElementById("coteTige");
				if (coteTigeBtn.options[coteTigeBtn.selectedIndex].value == "Gauche") {
					if ((indexTigeDroit+1)>maximumTigeDroit) {
						indexTigeDroit= maximumTigeDroit;
					} else if(indexTigeDroit<maximumTigeDroit) {
						indexTigeDroit++;
					}
				} else {
					if ((indexTigeGauche+1)>maximumTigeGauche) {
						indexTigeGauche=maximumTigeGauche;
					} else {
						indexTigeGauche++;
					}
				}
				DrawTige();
			};
			PlusTailleTige()
	}, false);

	/*
	*	Gère la diminution de la taille de la tige en fonction du coté
	*	Appel la fonction de mise à jour de l'affichage
	*/
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

	/*
	*	Gère l'augmentation de la taille du cotyle en fonction du coté
	*	Appel la fonction de mise à jour de l'affichage
	*/
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

	/*
	*	Gère la diminution de la taille du cotyle en fonction du coté
	*	Appel la fonction de mise à jour de l'affichage
	*/
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


	/*
	*	Monte la tige suivant son axe mécanique vertical en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonMonterTige = document.getElementById("buttonMonterTige");
	buttonMonterTige.addEventListener('click',
		function() {
			function MonterTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.Monter();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					tigeGauche.Monter();
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			MonterTige()
	}, false);

	/*
	*	Descend la tige suivant son axe mécanique vertical en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonDescendreTige = document.getElementById("buttonDescendreTige");
	buttonDescendreTige.addEventListener('click',
		function() {
			function DescendreTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.Descendre();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					tigeGauche.Descendre();
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

					//UpTige(canvasTige, tigeGauche);
				}
			};
			DescendreTige()
	}, false);

	/*
	*	Monte le cotyle suivant son axe mécanique en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonMonterCotyle = document.getElementById("buttonMonterCotyle");
	buttonMonterCotyle.addEventListener('click',
		function() {
			function MonterCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
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

	/*
	*	Descend le cotyle suivant son axe mécanique en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonDescendreCotyle = document.getElementById("buttonDescendreCotyle");
	buttonDescendreCotyle.addEventListener('click',
		function() {
			function DescendreCotyle(){
				var coefficient = sessionStorage.getItem("coefficient");
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

	/*
	*	Oriente dans le sens horaire le cotyle suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonTournerHautCotyle = document.getElementById("buttonTournerHautCotyle");
	buttonTournerHautCotyle.addEventListener('click',
		function() {
			function TournerHautCotyle(){
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

	/*
	*	Oriente dans le sens anti-horaire le cotyle suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonTournerBasCotyle = document.getElementById("buttonTournerBasCotyle");
	buttonTournerBasCotyle.addEventListener('click',
		function() {
			function TournerBasCotyle(){
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

	/*
	*	Utilisé en non guidé
	*	Oriente dans le sens horaire le cotyle suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*/
	var buttonTournerHautCotyleNG = document.getElementById("buttonTournerHautCotyleNG");
	buttonTournerHautCotyleNG.addEventListener('click',
		function() {
			function TournerHautCotyleNG(){
				var coteCotyle = document.getElementById("coteCotyle");
				if (coteCotyle.options[coteCotyle.selectedIndex].value=="Gauche") {
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
			TournerHautCotyleNG()
	}, false);

	/*
	*	Utilisé en non guidé
	*	Oriente dans le sens anti-horaire le cotyle suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*/
	var buttonTournerBasCotyleNG = document.getElementById("buttonTournerBasCotyleNG");
	buttonTournerBasCotyleNG.addEventListener('click',
		function() {
			function TournerBasCotyleNG(){
				var coteCotyle = document.getElementById("coteCotyle");
				if (coteCotyle.options[coteCotyle.selectedIndex].value=="Gauche") {
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
			TournerBasCotyleNG()
	}, false);

	/*
	*	Supprime les tiges et cotyles des canvas
	*	Si la chirurgie est guidé elle déploie l'onglet dessin
	*	Si la chirurgie n'est pas guidé elle déploie l'onglet patient, vide la mémoire des dessins et du nombre de dessin, cache les corbeille, bascule la radio en mode zoom
	*/
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
				//document.getElementById("choix_gamme").style.display = "";
				//document.getElementById("actionImplant").style.display="none";

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
					document.getElementById("buttonDessinRapporteur").style.display="none";
					document.getElementById("buttonDessinRegle").style.display="none";
					document.getElementById("buttonDeleteRegle1").style.display="none";
					document.getElementById("buttonDeleteRegle2").style.display="none";
					document.getElementById("buttonDeleteRegle3").style.display="none";
					document.getElementById("buttonDeleteRapporteur1").style.display="none";
					document.getElementById("buttonDeleteRapporteur2").style.display="none";
					document.getElementById("buttonDeleteRapporteur3").style.display="none";
					sessionStorage.setItem("nbRegle",0);
                	sessionStorage.setItem("nbAngle",0);
					ZoomMode();
					$("#accordeon").accordion({active : 0});
				}
				firstSideChangedTige = true;
				firstSideChangedCotyle = true;
			};
			RetourImplant()
	}, false);
/**
*
*/
	function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

	/*
	*	Génére le PDF résultat
	*	Les image du PDF sont dataUrl
	*/
	var buttonValideImplant = document.getElementById("buttonValideImplant");
	buttonValideImplant.addEventListener('click',
		function() {
			function ValiderImplant(){
				var taille_bille_px = parseInt(sessionStorage.getItem("taille_bille_px"));
				var taille_bille_mm = parseInt(sessionStorage.getItem("taille_bille_mm"));
				var coeff =  taille_bille_mm / taille_bille_px;
				var string = "Le coefficient de redimensionnement des implants est : " + coeff;
				var dicomCanvas = document.getElementById("dwv-imageLayer");
				var dicomImage = dicomCanvas.toDataURL("image/jpeg");
				var divLayer = document.getElementById("dwv-layerDialog");
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
						docPDF.text(15, 80, string);
						docPDF.setFontType("bold");
						/*
						docPDF.text(15, 20, "Votre image DICOM d'origine :");
						docPDF.addImage(dicomImage, 'JPEG', 15, 25, 180, ((180*m_canvasHeight)/m_canvasWidth));

						docPDF.addPage();*/

						docPDF.text(15, 90, "Votre planification :");
						docPDF.setFontSize(12);
						docPDF.setFontType("normal");

						if (patient.GetCoteOperation()=="Gauche") {
							docPDF.text(15, 95, "Tige utilisé pour cette planification : "+ decode_utf8(tigeDroit.GetNom()));
							docPDF.text(15, 100, "Cotyle utilisé pour cette planification : "+cotyleDroit.GetNom());
							console.log(tigeDroit.GetNom())
						}

						if (patient.GetCoteOperation()=="Droit") {
							docPDF.text(15, 95, "Tige utilisé pour cette planification : "+decode_utf8(tigeGauche.GetNom()));
							docPDF.text(15, 100, "Cotyle utilisé pour cette planification : "+cotyleGauche.GetNom());
							console.log(tigeGauche.GetNom())
						}

						if(patient.GetOperationGuide()=="Guider")
						{
							docPDF.text(15, 105, "Offset = "+offset+" mm");
							docPDF.text(15, 110, "Hauteur = "+hauteur+" mm");
							docPDF.addImage(divData, 'JPEG', 15, 115, 180, ((180*m_canvasHeight)/m_canvasWidth));
						} else if (patient.GetOperationGuide()=="Non guider") {
							docPDF.addImage(divData, 'JPEG', 15, 105, 180, ((180*m_canvasHeight)/m_canvasWidth));
						}
						docPDF.addPage();
						docPDF.text(15, 20, "Votre image DICOM d'origine :");
						docPDF.addImage(dicomImage, 'JPEG', 15, 25, 180, ((180*m_canvasHeight)/m_canvasWidth));

						docPDF.save(patient.GetNom()+" "+patient.GetPrenom()+".pdf");

					},
					id: "pdf"
				});
			};
			ValiderImplant()
	}, false);

	/*
	*	Active le zoom
	*/
	var buttonZoom = document.getElementById("buttonZoom");
	buttonZoom.addEventListener('click',
		function() {
			function Zoom(){
				ZoomMode();
			};
			Zoom()
	}, false);

	/*
	*	Active le seuillage
	*/
	/*var buttonSeuil = document.getElementById("buttonSeuil");
	buttonSeuil.addEventListener('click',
		function() {
			function Seuil(){
				SeuilMode();
			};
			Seuil()
	}, false);*/

	/*
	*	Active le déplacement manuel de la tige du coté sélectionné
	*/
	var buttonDeplacerTige = document.getElementById("buttonDeplacerTige");
	buttonDeplacerTige.addEventListener('click',
		function() {
			function DeplacerTige(){
				var canvasTigeDroit=document.getElementById("canvasTigeDroit");
				var canvasTigeGauche=document.getElementById("canvasTigeGauche");
				var canvasCotyleDroit=document.getElementById("canvasCotyleDroit");
				var canvasCotyleGauche=document.getElementById("canvasCotyleGauche");
				var coteTige = document.getElementById("coteTige");
				document.getElementById("dwv-drawDiv").style.zIndex = "10";

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

	/*
	*	Active le déplacement manuel du cotyle du coté sélectionné
	*/
	var buttonDeplacerCotyle = document.getElementById("buttonDeplacerCotyle");
	buttonDeplacerCotyle.addEventListener('click',
		function() {
			function DeplacerCotyle(){
				var canvasTigeDroit=document.getElementById("canvasTigeDroit");
				var canvasTigeGauche=document.getElementById("canvasTigeGauche");
				var canvasCotyleDroit=document.getElementById("canvasCotyleDroit");
				var canvasCotyleGauche=document.getElementById("canvasCotyleGauche");
				var coteCotyle = document.getElementById("coteCotyle");
				document.getElementById("dwv-drawDiv").style.zIndex = "10";

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

	/*
	*	Utilisé en non guidé
	*	Oriente dans le sens horaire la tige suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*/
	var buttonTournerHautTige = document.getElementById("buttonTournerHautTige");
	buttonTournerHautTige.addEventListener('click',
		function() {
			function TournerHautTige(){
				var coteTige = document.getElementById("coteTige");
				if (coteTige.options[coteTige.selectedIndex].value=="Gauche") {
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

	/*
	*	Utilisé en non guidé
	*	Oriente dans le sens anti-horaire la tige suivant son centre de rotation en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*/
	var buttonTournerBasTige = document.getElementById("buttonTournerBasTige");
	buttonTournerBasTige.addEventListener('click',
		function() {
			function TournerBasTige(){
				var coteTige = document.getElementById("coteTige");
				if (coteTige.options[coteTige.selectedIndex].value=="Gauche") {
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

	/*
	*	Déplace la tige a droite (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonDroitTige = document.getElementById("buttonDroitTige");
	buttonDroitTige.addEventListener('click',
		function() {
			function DeplacementDroitTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementDroit();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

					//UpTige(canvasTige, tigeGauche);
				}
			};
			DeplacementDroitTige()
	}, false);

	/*
	*	Déplace la tige a gauche (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonGaucheTige = document.getElementById("buttonGaucheTige");
	buttonGaucheTige.addEventListener('click',
		function() {
			function DeplacementGaucheTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementGauche();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";
				}
			};
			DeplacementGaucheTige()
	}, false);

	/*
	*	Déplace le cotyle a gauche (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
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

	/*
	*	Déplace le cotyle a droite (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
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

	/*
	*	Déplace la tige en haut (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonHautTige = document.getElementById("buttonHautTige");
	buttonHautTige.addEventListener('click',
		function() {
			function DeplacementHautTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementHaut();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

					//UpTige(canvasTige, tigeGauche);
				}
			};
			DeplacementHautTige()
	}, false);

	/*
	*	Déplace la tige en bas (écran) en fonction du coté
	*	Effectue la mise à jour de l'affichage
	*	Effectue la mise à jour de l'offset en X et Y
	*/
	var buttonBasTige = document.getElementById("buttonBasTige");
	buttonBasTige.addEventListener('click',
		function() {
			function DeplacementBasTige(){
				var coefficient = sessionStorage.getItem("coefficient");
				if (patient.GetCoteOperation()=="Gauche") {
					var canvasTige = document.getElementById("canvasTigeDroit");
					canvasTige.width=m_canvasWidth;
					canvasTige.height=m_canvasHeight;
					canvasTige.style.zIndex = "26";
					var contextetige = canvasTige.getContext("2d");
					tigeDroit.MouvementBas();
					var b=tigeDroit.GetPosition().y-(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPosition().x);
					var posyr=(Math.tan(tigeDroit.GetOrientation())*tigeDroit.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeDroit.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPositionAvtOffset().y);
					contextetige.rotate(tigeDroit.GetOrientation());
					contextetige.translate(tigeDroit.GetPosition().x-tigeDroit.GetPositionAvtOffset().x,tigeDroit.GetPosition().y-tigeDroit.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
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
					var b=tigeGauche.GetPosition().y-(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPosition().x);
					var posyr=(Math.tan(tigeGauche.GetOrientation())*tigeGauche.GetPositionAvtOffset().x)+b;
					var delta = posyr-tigeGauche.GetPosition().y;
					contextetige.save();
					contextetige.clearRect(0, 0, canvasTige.width, canvasTige.height);
					contextetige.translate(tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPositionAvtOffset().y);
					contextetige.rotate(tigeGauche.GetOrientation());
					contextetige.translate(tigeGauche.GetPosition().x-tigeGauche.GetPositionAvtOffset().x,tigeGauche.GetPosition().y-tigeGauche.GetPositionAvtOffset().y);
					contextetige.translate(0,delta);
					contextetige.drawImage(imgTigeGauche, 0, 0, imgTigeGauche.width, imgTigeGauche.height, -tigeGauche.GetImageLargeur() / 2, -tigeGauche.GetImageHauteur() / 2, tigeGauche.GetImageLargeur(), tigeGauche.GetImageHauteur());
					contextetige.restore();
					var offset =  Math.round((Math.abs((cotyleGauche.GetPositionPtMeca().x -tigeGauche.GetPositionPtMecaHaut().x))*coefficient)*1000)/1000;
					var hauteur = Math.round(( Math.abs((cotyleGauche.GetPositionPtMeca().y -tigeGauche.GetPositionPtMecaHaut().y))*coefficient)*1000)/1000;
					document.getElementById('labelOffsetTigeCotyle').innerHTML = "offset = "+offset+" mm";
					document.getElementById('labelHauteurTigeCotyle').innerHTML = "Hauteur = "+hauteur+" mm";

					//UpTige(canvasTige, tigeGauche);
				}
			};
			DeplacementBasTige()
	}, false);
});

