/**
*Created by Quentin PETIT on 07/04/2016
*/

/**
*Cette fonction crée un cotyle
*
*@param ID 					Identifiant du cotyle
*@param Url 				Chemin d'accès a l'image du cotyle
*@param cotyleWidthPx	 	Représente la largeur de la cotyle en pixel.
*@param cotyleWidthPx	 	Représente la largeur de la cotyle en cm.
*@param cotyleWidthPx	 	Représente la hauteur de la cotyle en pixel.
*@param cotyleWidthPx	 	Représente la hauteur de la cotyle en cm.
*@author Quentin PETIT
*/

function Cotyle(ID, Nom, Url, cotyleWidthPx, cotyleWidthCm, cotyleHeightPx, cotyleHeightCm) {
	this.m_ID=ID;
	this.m_Nom=Nom;
	this.m_Url=Url;
	this.m_coeffDirecteur=null;
	this.m_Position={'x' : null, 'y' : null};
	this.m_Orientation=null;
	this.m_canvasWidth=document.getElementById("dwv-imageLayer").width;
	this.m_canvasHeight=document.getElementById("dwv-imageLayer").height;
	this.m_cotyleWidthPx=cotyleWidthPx;
	this.m_cotyleWidthCm=cotyleWidthCm;
	this.m_cotyleHeightPx=cotyleHeightPx;
	this.m_cotyleHeightCm=cotyleHeightCm;
	this.m_coeffRedimensionnement=null;
	this.m_angle=null;
	this.m_cotyleImageWidth=null;
	this.m_cotyleImageHeight=null;
	console.log("cotyleWidthPx, cotyleWidthCm, cotyleHeightPx, cotyleHeightCm",cotyleWidthPx, cotyleWidthCm, cotyleHeightPx, cotyleHeightCm);
}

/**
*Cette fonction permet de récupérer l'identifiant du cotyle
*
*@return m_ID 				Identifiant du cotyle
*
*@author Quentin PETIT
*/

Cotyle.prototype.GetID = function() {
	return this.m_ID;
};

/**
*Cette fonction permet de récupérer le chemin d'accès a l'image du cotyle
*
*@return m_Url 				Chemin d'accès a l'image du cotyle
*
*@author Quentin PETIT
*/

Cotyle.prototype.GetUrl = function() {
	return this.m_Url;
};

/**
*Cette fonction permet de récupérer le nom de l'image du cotyle
*
*@return m_Nom 				Nom de l'image du cotyle
*
*@author Quentin PETIT
*/
Cotyle.prototype.GetNom = function() {
	return this.m_Nom;
};

/**
*Cette fonction permet de récupérer la nouvelle largeur de l'image après calcul du snap.
*
*@return m_cotyleImageWidth	Représente la nouvelle largeur de l'image après calcul du snap.
*
*@author Quentin PETIT
*/
Cotyle.prototype.GetImageLargeur = function() {
	return this.m_cotyleImageWidth;
};

/**
*Cette fonction permet de récupérer la nouvelle hauteur de l'image après calcul de snap.
*
*@return m_cotyleImageHeight	Représente la nouvelle hauteur de l'image après calcul de snap.
*
*@author Quentin PETIT
*/
Cotyle.prototype.GetImageHauteur = function() {
	return this.m_cotyleImageHeight;
};

/**
*Cette fonction permet de récupérer la nouvelle position de l'image après calcul de snap.
*
*@return m_Position			Représente la nouvelle position de l'image après calcul de snap.
*
*@author Quentin PETIT
*/
Cotyle.prototype.GetPosition = function() {
	return this.m_Position;
};


Cotyle.prototype.GetOrientation = function() {
	return this.m_Orientation;
};
/**
*Cette fonction permet de snaper la tige sur le trapèze correspondant
*
*@param imageWidth			largeur de l'image associés à la tige
*@param imageHeight			hauteur de l'image associés à la tige
*@param patient				Données patient
*
*@author Quentin PETIT
*/

Cotyle.prototype.Snap = function(imageWidth, imageHeight, patient) {

	console.log("patient",patient);
	/**
	*Cette fonction récupère les différentes taille de la dicom
	*
	*@author Quentin PETIT
	*/
	function getValeursImage() {
		var dicomCanvas = document.getElementById("dwv-imageLayer");

		// Taille de l'image réelle
		var widthImageReelle = sessionStorage.getItem("imageLargeur");
		var heightImageReelle = sessionStorage.getItem("imageHauteur");

		// Taille de l'image affichée à l'écran
		var widthImageCanvas = dicomCanvas.width;
		var heightImageCanvas = dicomCanvas.height;

		return {
			widthImageReelle : widthImageReelle, 
			heightImageReelle : heightImageReelle, 
			widthImageCanvas : widthImageCanvas, 
			heightImageCanvas : heightImageCanvas
		};
	}

	/**
	*Cette fonction calul les facteurs de redimensionnement de la dicom
	*
	*@author Quentin PETIT
	*/
	function facteurRedimensionnementImage() {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		// Calcul du coefficient réducteur de l'image
		var coefWidthImage = image.widthImageCanvas / image.widthImageReelle;
		var coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

		return {
			coefWidth : coefWidthImage, 
			coefHeight : coefHeightImage
		};
	}

	function CoefRedimensionnementCotyle(wCotylePx,wCotyleCm,hCotylePx,hCotyleCm) {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		var coeffBille = sessionStorage.getItem("coefficient");

		var widthReelleImageCm = image.widthImageReelle * coeffBille;
		var heightReelleImageCm = image.heightImageReelle * coeffBille;

		unCmEgalCbPxWidthImage = image.widthImageReelle / widthReelleImageCm;
		unCmEgalCbPxHeightImage = image.heightImageReelle / heightReelleImageCm;

		var unCmEgalCbPxWidthImp = wCotylePx / wCotyleCm;
		console.log("unCmEgalCbPxWidthImp",unCmEgalCbPxWidthImp);
		var unCmEgalCbPxHeightImp = hCotylePx / hCotyleCm;

		// Faut-il faire la moyenne des deux ? Non, il faut prendre l'équivalent en cm pour la largeur et la longueur

		// tailleImplant * X = tailleImage
		// On prend pour le moment la largeur mais après on prendra la largeur et la hauteur
		var coef = unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp;
		coef=coef*10;
		console.log("unCmEgalCbPxWidthImp",unCmEgalCbPxWidthImp);

	    return coef;
	}
	var trapeze = null;
	var cercle = null;
	var canvasCotyle = null;
	var flip = null;

	if (patient.GetCoteOperation()=="Droit") {
		trapeze=JSON.parse(sessionStorage.getItem("trapezeGauchePosition"));
		cercle=JSON.parse(sessionStorage.getItem("cercleGauchePosition"));
		canvasCotyle = document.getElementById("canvasCotyleGauche");
		this.m_angle = (140*2*Math.PI)/360;
		flip=180;
	} else {
		trapeze=JSON.parse(sessionStorage.getItem("trapezeDroitPosition"));
		cercle=JSON.parse(sessionStorage.getItem("cercleDroitPosition"));
		canvasCotyle = document.getElementById("canvasCotyleDroit");
		this.m_angle = (40*2*Math.PI)/360;
		flip=0;
	}

	canvasCotyle.width=this.m_canvasWidth;
	canvasCotyle.height=this.m_canvasHeight;
 
 	var coeffDicom = facteurRedimensionnementImage();
	
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x = ((cercle[0]*dicomCanvas.width)/dicomWidth);
	this.m_Position.y = ((cercle[1]*dicomCanvas.height)/dicomHeight);

	this.m_coeffRedimensionnement=CoefRedimensionnementCotyle(this.m_cotyleWidthPx,this.m_cotyleWidthCm,this.m_cotyleHeightPx,this.m_cotyleHeightCm);

	var deltaX = trapeze[2]-trapeze[0];
	var deltaY = trapeze[3]-trapeze[1];

	var tan = deltaX/deltaY;
	var atan = Math.atan(tan)*-1;

	this.m_Orientation=atan;
	this.m_coeffDirecteur=Math.tan(this.m_angle+this.m_Orientation);

	this.m_cotyleImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement;
	this.m_cotyleImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement;

	console.log("this.m_cotyleImageWidth",this.m_cotyleImageWidth,"this.m_cotyleImageHeight",this.m_cotyleImageHeight);
	console.log("imageWidth",imageWidth,"imageHeight",imageHeight);

};

Cotyle.prototype.Placement = function(imageWidth, imageHeight, position, orientation) {
	/**
	*Cette fonction récupère les différentes taille de la dicom
	*
	*@author Quentin PETIT
	*/
	function getValeursImage() {
		var dicomCanvas = document.getElementById("dwv-imageLayer");

		// Taille de l'image réelle
		var widthImageReelle = sessionStorage.getItem("imageLargeur");
		var heightImageReelle = sessionStorage.getItem("imageHauteur");

		// Taille de l'image affichée à l'écran
		var widthImageCanvas = dicomCanvas.width;
		var heightImageCanvas = dicomCanvas.height;

		return {
			widthImageReelle : widthImageReelle, 
			heightImageReelle : heightImageReelle, 
			widthImageCanvas : widthImageCanvas, 
			heightImageCanvas : heightImageCanvas
		};
	}

	/**
	*Cette fonction calul les facteurs de redimensionnement de la dicom
	*
	*@author Quentin PETIT
	*/
	function facteurRedimensionnementImage() {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		// Calcul du coefficient réducteur de l'image
		var coefWidthImage = image.widthImageCanvas / image.widthImageReelle;
		var coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

		return {
			coefWidth : coefWidthImage, 
			coefHeight : coefHeightImage
		};
	}

	function CoefRedimensionnementCotyle(wCotylePx,wCotyleCm,hCotylePx,hCotyleCm) {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		var coeffBille = sessionStorage.getItem("coefficient");

		var widthReelleImageCm = image.widthImageReelle * coeffBille;
		var heightReelleImageCm = image.heightImageReelle * coeffBille;

		unCmEgalCbPxWidthImage = image.widthImageReelle / widthReelleImageCm;
		unCmEgalCbPxHeightImage = image.heightImageReelle / heightReelleImageCm;

		var unCmEgalCbPxWidthImp = wCotylePx / wCotyleCm;
		var unCmEgalCbPxHeightImp = hCotylePx / hCotyleCm;

		// Faut-il faire la moyenne des deux ? Non, il faut prendre l'équivalent en cm pour la largeur et la longueur

		// tailleImplant * X = tailleImage
		// On prend pour le moment la largeur mais après on prendra la largeur et la hauteur
		var coef = unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp;
		coef=coef*10;
		console.log("unCmEgalCbPxWidthImp",unCmEgalCbPxWidthImp);

	    return coef;
	}
	var coeffDicom = facteurRedimensionnementImage();

	this.m_coeffRedimensionnement=CoefRedimensionnementCotyle(this.m_cotyleWidthPx,this.m_cotyleWidthCm,this.m_cotyleHeightPx,this.m_cotyleHeightCm);

	this.m_cotyleImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement;
	this.m_cotyleImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement;

	this.m_Position=position;
	this.m_Orientation=orientation
};

Cotyle.prototype.Monter = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");
	this.m_Position.x-=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y-=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
};

Cotyle.prototype.Descendre = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");
	this.m_Position.x+=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
};

Cotyle.prototype.TournerHaut = function() {
	this.m_Orientation+=(1*2*Math.PI)/360;
	this.m_coeffDirecteur=Math.tan(this.m_angle+this.m_Orientation);
};

Cotyle.prototype.TournerBas = function() {
	this.m_Orientation-=(1*2*Math.PI)/360;
	this.m_coeffDirecteur=Math.tan(this.m_angle+this.m_Orientation);
};