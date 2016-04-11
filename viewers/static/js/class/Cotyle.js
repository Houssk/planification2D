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

function Cotyle(ID, Url, cotyleWidthPx, cotyleWidthCm, cotyleHeightPx, cotyleHeightCm) {
	this.m_ID=ID;
	this.m_Url=Url;
	this.m_coeffDirecteur=null;
	this.m_Position={'x' : null, 'y' : null};
	this.m_canvasWidth=900;
	this.m_canvasHeight=800;
	this.m_cotyleWidthPx=cotyleWidthPx;
	this.m_cotyleWidthCm=cotyleWidthCm;
	this.m_cotyleHeightPx=cotyleHeightPx;
	this.m_cotyleHeightCm=cotyleHeightCm;
	this.m_angle=(40*2*Math.PI)/360;
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


/**
*Cette fonction permet de snaper la tige sur le trapèze correspondant
*
*@param imageWidth			largeur de l'image associés à la tige
*@param imageHeight			hauteur de l'image associés à la tige
*@param patient				Données patient
*
*@author Quentin PETIT
*/

Cotyle.prototype.Snap = function(imageWidth, imageHeight, angleAlignementTige, coeffRedimensionnement, patient) {

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

	var cercle = null;
	var flip = null;
	if (patient.GetCoteOperation()=="Droit") {
		cercle=JSON.parse(sessionStorage.getItem("cercleGauchePosition"));
		flip=180;
	} else {
		cercle=JSON.parse(sessionStorage.getItem("cercleDroitPosition"));
		flip=0;
	}

	var canvasCotyle = document.getElementById("canvasCotyle");
	canvasCotyle.width=this.m_canvasWidth;
	canvasCotyle.height=this.m_canvasHeight;
 
 	var coeffDicom = facteurRedimensionnementImage();
	
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x = ((cercle[0]*dicomCanvas.width)/dicomWidth);
	this.m_Position.y = ((cercle[1]*dicomCanvas.height)/dicomHeight);

	this.m_coeffDirecteur=Math.tan(this.m_angle+angleAlignementTige);

	this.m_cotyleImageWidth = imageWidth * coeffDicom.coefWidth * coeffRedimensionnement;
	this.m_cotyleImageHeight = imageHeight * coeffDicom.coefHeight * coeffRedimensionnement;

	console.log("this.m_cotyleImageWidth",this.m_cotyleImageWidth,"this.m_cotyleImageHeight",this.m_cotyleImageHeight);
	console.log("imageWidth",imageWidth,"imageHeight",imageHeight);

};